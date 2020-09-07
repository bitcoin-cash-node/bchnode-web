---
layout: layout.html
---

<% set('title', 'BCHN Technical Bulletin 2020-05-04') %>
<% set('date', '4 May 2020') %>
<% set('author', 'Calin Culianu') %>

### GetBlockTemplate Light

In order to provide the most efficient mining RPCs, we have implemented the `getblocktemplatelight` RPC which is popular amongst various mining pools such as BTC.COM and others.

The two new RPC's are: `getblocktemplatelight` and `submitblocklight`. These RPCs reduce the round-trip time for mining software when retrieving new block templates. Transaction data is never sent between mining software and `bitcoind`. Instead, `job_id`'s are returned and `bitcoind` later reconstructs the full block based on this `job_id` and the solved header + coinbase submitted by the miner, leading to more efficient mining.

A full description and specification for this facility can be found here: [https://gitlab.com/bitcoin-cash-node/bitcoin-cash-node/-/blob/master/doc/getblocktemplatelight.md](https://gitlab.com/bitcoin-cash-node/bitcoin-cash-node/-/blob/master/doc/getblocktemplatelight.md)

Below are some benchmarks:

**Bitcoin Cash Node v0.21.2 (gitlab,** [**Merge Request 281**](https://gitlab.com/bitcoin-cash-node/bitcoin-cash-node/-/merge_requests/281)**)**

`getblocktemplatelight`, 6000 tx mempool (1271847 bytes)

*   New template generation

    *   call time, avg.: **62.025** _milliseconds_

*   Cached template (returned if you call again within 5 seconds and no new tx's)

    *   call time, avg.: **0.917** _milliseconds_

**Bitcoin ABC v0.21.6 (github master) + BTC.COM gbtl patch from** [https://github.com/btccom/bitcoin-abc-1](https://github.com/btccom/bitcoin-abc-1)

`getblocktemplatelight`, 6000 tx mempool (1271847 bytes)

*   New template generation

    *   call time, avg.: **64.200** _milliseconds_

*   Cached template (returned if you call again within 5 seconds and no new tx's)

    *   call time, avg.: **4.909** _milliseconds_

**Winner:** **_BCHN_**

For the first call to light GBT, ABC and BCHN are comparable. This is because the call is dominated by generating the new template by scanning the mempool. Subsequent calls (which are the common case) show a 4x speed improvement in **BCHN** over ABC, because BCHN uses better caching.

* * *

### GetBlockTemplate (regular) Improvements

Bitcoin Cash Node has made some improvements to the regular mining RPC calls. The `getblocktemplate` call has been made up to **70% faster** than the current ABC implementation. We have optimized the JSON RPC code to be much more efficient.

Below are some benchmarks:

**Bitcoin Cash Node v0.21.2 (git master)**

`getblocktemplate`, 6000 tx mempool (1271847 bytes)

*   New template generation

    *   call time, avg.: **164.023** _milliseconds_

*   Cached template (returned if you call again within 5 seconds and no new tx's)

    *   call time, avg.: **117.277** _milliseconds_

**Bitcoin ABC v0.21.6 (git master)**

`getblocktemplate`, 6000 tx mempool (1271847 bytes)

*   New template generation

    *   call time, avg.: **262.200** _milliseconds_

*   Cached template (returned if you call again within 5 seconds and no new tx's)

    *   call time, avg.: **200.476** _milliseconds_

**Winner:** **_BCHN_**

Between **60%** - **70%** speed improvement for both calls with BCHN. This is because the verbose `getblocktemplate` returns a large JSON object. BCHN has heavily optimized the JSON generation code to reduce overhead.

* * *

### Where to get BCHN + GBT Light

**v0.21.2 is coming soon!** - This new facility is currently in review but will appear in the upcoming 0.21.2 BCHN release very soon.

You may see the review branch here:

*   Merge request: [gitlab.com/bitcoin-cash-node/bitcoin-cash-node/-/merge_requests/281](https://gitlab.com/bitcoin-cash-node/bitcoin-cash-node/-/merge_requests/281)

Or you can download a _binary pre-release_ here:

*   Binaries: [c3-soft.com/downloads/BitcoinCash/bchn/GBTLight/](https://c3-soft.com/downloads/BitcoinCash/bchn/GBTLight/)

* * *

Links:

*   Instructions on how to perform this benchmark: [GitHub Gist](https://gist.github.com/cculianu/20309e67ff82caa397b4460ec011ad54)

*   Repository link of this announcement: [GitLab](https://gitlab.com/bitcoin-cash-node/announcements/-/blob/master/20200504_gbt_light_announcement.md)
