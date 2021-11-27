---
layout: layout.html
---

<% set('title', 'BCHN Technical Bulletin 2021-10-31') %>
<% set('date', '31 October 2021') %>
<% set('author', 'matricz') %>

### LMDB Preliminary Tech Report

#### Summary

1. General description of lmdb
2. Differences with LevelDB
3. lmdb API
2. lmdb caveats
2. lmdb++ caveats
3. Benchmarks
4. Conclusion

---

NB: This is the result of a *preliminary* study of the lmdb database library in the context of maintaining a persistent database of UTXOs in BCHN node software.

[Repository](https://git.openldap.org/openldap/openldap/tree/mdb.master) [Mirror](https://github.com/LMDB/lmdb)

[Documentation](http://www.lmdb.tech/doc/)

---

### General description of lmdb

[lmdb](http://www.lmdb.tech/doc/) is a memory-mapped key-value btree-based database library.

* Memory-mapped: Data is stored on disk and loading data into memory is delegated to the OS via memory-mapping. This is said to be faster than manually managing memory.
* Key-value: self descriptive
* Btree-based: data is stored on a btree (by key). This seems to optimize for read latency.

### Differences with LevelDB

BCHN currently uses LevelDB to store UTXOs.

* LevelDB is log-based (append only), so it's more friendly to HDD type memory.
* LevelDB requires periodic compaction of data, while lmdb requires no ongoing maintenance (the btree rebalances directly on writes).
* LevelDB has lots of configuration knobs (RocksDB even more), while lmdb has a handful; the defaults on lmdb are intentionally restricting, so that devs familiarize with them and add what they need.
* lmdb uses significantly more disk-space (Preliminary test showed a 4x).


### lmdb API

The API is comfortably straightforward.

The initialization is a little exotic, but [well documented](http://www.lmdb.tech/doc/starting.html). After that the db interaction is with straightforward `get`, `put` and `del`  function calls.

There is also the ability to open a `cursor` to streamline reads. The documentation also mentions that `cursor`s can streamline writes if the keys to be written are pre-ordered for bulk preloading of data. It is unclear if this works on batch-writing to an existing database (TODO).

`lmdb` has ACID semantics, which we don't care about much, since we do either reads *or* writes.

For ease of use I used the C++ wrapper [lmdb++](https://github.com/drycpp/lmdbxx). It is comfortable because it provides RAII semantics for lmdb objects. It has its own set of caveats.

### `lmdb` caveats

* It can be considerably slower than LevelDB on HDD memory (because of frequent random access).
* It can also be slower on low-end machines.
* Being a btree database, performance is stellar when database is small. Be sure to benchmark on real-life sizes for the db. Disregard benchmarks that are done on small datasets (eg. https://mozilla.github.io/firefox-browser-architecture/text/0015-rkv.html)
* I have noticed a distinctive drop in performance once the db size exceeds RAM. Commit times roughly double. I was not able to mitigate this with configuration flags (but needs more research - TODO).
* Database size needs to be set at initialization. This means that additional code needs to be maintained for when a limit is hit and the db needs to be resized. Dagur had implemented such code for BitcoinXT in 2018 [here](https://github.com/bitcoinxt/bitcoinxt/pull/469), which might make sense to port over.
* Write batches need to be small-ish, smaller than available RAM, else swap will step in. Disk flushes can be deferred with the `NOSYNC` flag to do smaller commits, but only one disk write at the end. In `master` the default batch size in IDB is currently some 900MB, which is big.
* The `WRITEMAP` flag [is documented](http://www.lmdb.tech/doc/group__mdb.html#ga32a193c6bf4d7d5c5d579e71f22e9340) to improve performance on databases smaller than RAM. I have not been able to confirm a speedup with this flag.
* The `MAPASYNC` flag [is documented](http://www.lmdb.tech/doc/group__mdb.html#ga32a193c6bf4d7d5c5d579e71f22e9340) to improve write performance, on databases smaller than RAM and if `WRITEMAP` is enabled. I did see a considerable improvement on writing speeds with this flag.
* The semantics of a crash with the `MAPASYNC` flag are unclear: will it leave the db in a previous consistent state, or an eintirely inconsistent state?

### lmdb++ caveats

* The RAII semantics are comfortable.
* the `lmdb::val` object is central to interacting with the wrapper.
* the `lmdb++` APIs are wonky in how they accept the `lmdb::val` objects. The different overloads in the API might take over and break things, without a warning. For example the following will work:

  ``` C++
  lmdb::val key(stream.data(), stream.size()), value;
  dbi.get(txn, key, value);
  ```

  But this might choose a wrong overload:

  ``` C++
  dbi.get(txn, make_val_from(stream), value);
  ```

  The advisory here is to not use the overloaded functions *at all*, and use the the `lmdb::dbi_*` methods (which all accept `MDB_val *`, simply converted to from `lmdb::val`s).


### Benchmarks

A minimum viable changeset to benchmark lmdb performance was implemented in https://gitlab.com/matricz/bitcoin-cash-node/-/tree/lmdb. NB: The LevelDB code has not even been ripped out as it's just a prototype. In the future, I would prefer to port Dagur's work on BitcoinXT, instead of working on top of this.

Preliminary tests were done on my laptop, and Digital Ocean instances with standard and NVMe SSDs.

I have a Nitro5 laptop with a very fast NVMe SSD, running the lmdb branch on WSL1/Debian. This is suboptimal and only to be regarded as anecdotal, since WSL can scramble IO times. This being said, I could obtain write rates 40% better on databases sizes smaller than RAM versus LevelDB, which is a nice improvement.

I did a full IBD with default options on a Digital Ocean VM instance (Storage Optimized, 32GB, 4CPUs, 600GB NVMe, $250/mo) both with master and this lmdb branch.

The lmdb build completed mainnet IBD in 3 hours and 6 minutes, while the master build completed mainnet IBD in 3 hours and 11 minutes. The write times on master were consistently around 12 seconds, while on lmdb they went from 15 seconds, to a steep jump to 30 seconds (at a point I presume to be the RAM limit), to slowly building up to 40 seconds.

Nontheless, lmdb finished faster, which could lead to faster read times. Still, this is not statistically significant.

### Future work

We spend only a small amount of time writing to the UTXO database and reading from it is singlethreaded. Hence, any performance gains in the UTXO database, no matter how significant, will bring only a modest global performance improvement to the node as a whole.

On the other hand, if/when we are able to bring better parallelism to block validation, then db performance improvements could become proportionally more significant. lmdb is known to improve read latency in multithreaded applications, which would suit our usecase nicely.

We cannot remove LevelDB backend entirely without ruling out people who run the node on HDDs. A mechanism for chosing the db backend (between current LevelDB and lmdb) should be provided (as implemented by Dagur for BitcoinXT).

Future work: since lmdb maps the data to (system managed) memory, and effectively using it as an in-RAM cache, we could possibly remove the `dbcache` entirely, IF read times prove to be fast and reliable enough.

* * *

Links:

*   Repository link of this announcement: [GitLab](https://gitlab.com/bitcoin-cash-node/announcements/-/blob/master/20211031_lmdb-preliminary-tech-report.md)
