---
layout: layout.html
---

<% set('title', 'BCHN Technical Bulletin 2022-06-09') %>
<% set('date', '09 June 2022') %>
<% set('author', 'bitcoincashautist') %>

# Bitcoin Cash Node Technical Bulletin

### Bitcoin Cash Pay-to-Script-Hash (P2SH): Past, Present, and Future

#### Summary

Creation of this document was prompted by [recent discussion](https://bitcoincashresearch.org/t/p2sh32-a-long-term-solution-for-80-bit-p2sh-collision-attacks/750) on the Bitcoin Cash Research (BCR) forum regarding a potential upgrade of the long-used P2SH feature.
The proposed upgrade would enable an additional BIP-0016 output template, one with a 32-byte hash, aimed at addressing a long standing cryptographic collision problem.
We have taken the opportunity to create this comprehensive P2SH document, including complete details of our preferred solution to the collision problem.

**Contents:**

1. [Introduction to P2SH Feature](#1-introduction-to-p2sh-feature)
2. [Technical Debt](#2-technical-debt)
3. [Cryptographic Security Level](#3-cryptographic-security-level)
4. [Preferred Upgrade](#4-preferred-upgrade)
5. [Post-quantum Cryptographic Security Level](#5-post-quantum-cryptographic-security-level)
6. [Potential Future Upgrades](#6-potential-future-upgrades)
7. [Pay-to-Public-Key-Hash (P2PKH) Outputs](#7-pay-to-public-key-hash-p2pkh-outputs)

#### 1. Introduction to P2SH Feature

The P2SH feature currently in use was introduced to Bitcoin in 2012 with [BIP-0016](https://github.com/bitcoin/bips/blob/master/bip-0016.mediawiki).
It was successfully activated on 2012-04-01 with block [173805](https://explorer.bitcoinunlimited.info/block-height/173805).
The upgrade had been deployed using the "soft-fork" covert upgrade mechanism.
This meant that use of the feature by transactions had to be encoded as valid Script VM bytecode even from the point of view of non-upgraded node software.
Therefore, the upgrade was disguised as a ["hash-lock"](https://en.bitcoin.it/wiki/Hashlock) output with the following behavior:

- locking script:  
`OP_HASH160 OP_DATA_20 20-byte-value OP_EQUAL`  
(raw: `a9` `14` `1122334455667788990011223344556677889900` `87`).

Prior to `BIP-0016` activation, a UTXO locked with that script could be unlocked by providing a value whose hash would match against the `20-byte-value` in the locking script:

- unlocking script:  
`[push data N] ... [push data 2] [push data 1] <push data 0>`.

For example, an output with:

- locking script:  
`OP_HASH160 OP_DATA_20 0x994355199e516ff76c4fa4aab39337b9d84cf12b OP_EQUAL`  
(raw: `a9` `14` `994355199e516ff76c4fa4aab39337b9d84cf12b` `87`)

could have been unlocked with:

- unlocking script:  
`OP_DATA_1 0x61`  
(raw: `01` `61`).

Script VM execution would pop the `0x61` value from top of the stack, hash it, compare it with the 20-byte hash value and leave true (`0x01`) as the top stack element, which would allow the prevout to be spent.

After `BIP-0016`, the above locking script became a "magical" bytecode pattern because of what happens next in upgraded software.
In an upgraded node, the pattern works as before but also triggers additional execution:

 - The true (`0x01`) resulting from `OP_EQUAL` is popped from the stack.
 - The input's `data 0` stack element is injected as code to be executed by the Script VM.

As a consequence, the above unlocking script would fail to unlock the prevout because the 2nd run would leave an empty stack.
The same output can [currently be spent](https://blockchair.com/bitcoin-cash/transaction/11ac4602f988dd3415ef01d65263ede861410173be628fbb47a065cc0867e19e) using a slightly different input with

- unlocking script:  
`OP_1 OP_DATA_1 0x61`  
(raw: `51` `01` `61`).

The value `0x61` would first be validated against the hash and then executed in Script VM, where it would be interpreted as `OP_NOP` that has no effect on Script VM stack state.
Therefore, input can be spent because only the `0x01` will remain on stack after both runs of Script VM are completed.

Non-upgraded nodes would see both input scripts as valid because they would see it as just some hashlock contract being spent from.

Note that at the time of P2SH deployment there was no ["clean stack"](https://documentation.cash/protocol/forks/hf-20181115#clean-stack) consensus rule.
With the clean stack rule currently in force, a non-P2SH hash-lock contract would not be spendable because the "magical" execution would not trigger and therefore would not pop the top stack item.
After the 1st and only run, the stack would be left "dirty", and the "clean stack" rule would fail the transaction.

The stack element to be executed in the 2nd Script VM run got to be called "redeem script", and because of [network relay rules](https://documentation.cash/protocol/blockchain/transaction/locking-script#standard-scripts) it is practically the only way to execute arbitrary Script contracts.

The now familiar P2SH pattern is of the form:

- locking script:  
`OP_HASH160 OP_DATA_20 hash160(redeem_script) OP_EQUAL`;  
- unlocking script:  
`[push data_N] ... [push data_1] [push data_0] <push redeem_script>`.

Note that the P2SH is rigidly defined by the exact locking script, with only the content of the 20 hash bytes being variable.
For example, appending an `OP_NOP` to the locking script would turn it back into an ordinary hash-lock contract and only the 1st run would be executed.
At the time of this writing we have found that [there exists](https://explorer.bitcoinunlimited.info/tx/587f949b39e4590e40ed2a1e06c9cfb3ae4b73a18f7261251e6e68a4a2d41896) exactly one output whose locking script is an extension of the P2SH pattern, and it was successfully [spent](https://explorer.bitcoinunlimited.info/tx/106f5e8263b7051e2528d25047f75808a82f3d838589e357c54738beff0fa384) after BIP-0016 activation.

Even before BIP-0016 activation, there were some outputs that matched the P2SH pattern.
Only one of them was spent before activation, and the rest have likely been made unspendable by the BIP-0016 upgrade since spending them would have to satisfy consensus rules not enforced when they were created.
Total amount locked in those outputs was 0.044 BTC and they now also exist as BCH outputs.
For information, [attached](https://gitlab.com/0353F40E/announcements/-/blob/p2sh-data/attachments/2022-06-09_bitcoin_cash_pay_to_script_hash_p2sh_past_present_and_future/p2sh_data_EN.md) is a list of these outputs.

#### 2. Technical Debt

Bitcoin Cash (BCH) blockchain is a direct descendant of the first Bitcoin blockchain, referring to blocks 0 to 478558, which were  mined during the period 2009-01-03 to 2017-08-01.
Using [Bitcoin Cash user-activated hard-fork (UAHF)](https://documentation.cash/protocol/forks/bch-uahf) consensus specification the blockchain was permanently split to two viable networks, each with their own version of block 478559.
With that, Bitcoin Cash has inherited all technical debt created prior to the split.
While some of it has been repaid in the meantime, there are still debts tied to the P2SH feature:

1. Cryptographic security level is 80 bits against collision attack, which limits utility of the feature to a subset of possible uses - those that are not exposed to the attack;
2. Unnecessary overhead in transaction encoding, which makes every P2SH UTXO waste 2 bytes;
3. Mixing layers, resulting in redeem script size being limited by [`MAX_SCRIPT_ELEMENT_SIZE`](https://gitlab.com/bitcoin-cash-node/bitcoin-cash-node/-/blob/master/src/script/script.h#L23).

Our main focus will be on debt 1., and at the end of the document we will discuss debts 2. and 3. as well.

#### 3. Cryptographic Security Level

The 160-bit hash function (`OP_HASH160`) used for both P2PKH and P2SH Bitcoin addresses is a composite function of SHA-256 and RIPEMD-160, where RIPEMD-160 is the outer function: `hash160(x) = ripemd160(sha256(x))`.

Below we will discuss both security properties of the composite function itself, and adequacy of the choice of the function for Bitcoin Cash use-cases.

##### 3.1. Security Level of OP_HASH160 Function

The inner, SHA-256, function is both [preimage-resistant](https://en.wikipedia.org/wiki/Preimage_attack) and [collision-resistant](https://en.wikipedia.org/wiki/Collision_attack), but broken against [length-extension](https://en.wikipedia.org/wiki/Length_extension_attack) attack, as summarized on [this page](https://en.wikipedia.org/wiki/Hash_function_security_summary).

The outer, RIPEMD-160, function is also [broken against length-extension attack](https://blog.skullsecurity.org/2012/everything-you-need-to-know-about-hash-length-extension-attacks), and has a known [theoretical weakness](https://www.schneier.com/wp-content/uploads/2016/02/paper-preimages.pdf) against **second**-preimage attack:

>Our attack, like the earlier attack of Dean, probably has no practical impact on the security of any system currently relying upon a hash function such as SHA1, Whirlpool, or RIPEMD-160.
This is true because the attack is always at least as expensive as collision search on the hash function, and because the difficulty of the attack grows quickly as the message gets shorter.

Because SHA-256 is the inner function, it follows that the composite, HASH-160, function [is both preimage and collision resistant](https://crypto.stackexchange.com/questions/96461/composition-of-cryptographic-hash-functions/96470#96470).
To demonstrate why that is so, imagine replacing the outer function with a completely broken function, such as a linear function.
Even if the intermediate hash of such composite is trivially revealed, a successful attack on the composite would still require breaking the inner function.

When it comes to length-extension resistance then both functions are broken, but the [composite is resistant](https://crypto.stackexchange.com/questions/84481/is-mac-double-hashing-enough-to-prevent-length-extension-attacks/84483#84483).
This is because the inner function's output remains secret and obtaining it would require breaking preimage resistance of the outer function.

Our HASH-160 is therefore secure, meaning it currently has the full declared 160-bits of security against preimage and length-extension attacks, and 80-bits of security against collision attacks.
Because of the generic [birthday attack](https://en.wikipedia.org/wiki/Birthday_attack), the security against collision attack is halved even for ideal hash functions.

##### 3.2. Adequacy of OP_HASH160 Security Level

Both P2PKH and P2SH addresses use HASH-160 to commit to a spending constraint without having to reveal it until time comes to spend from it.
In case of P2PKH the address commits to a public key, and in case of P2SH it commits to a redeem script.
The message that hashes to an address must therefore come from a set of valid public keys or redeem scripts, and finding any other message would be completely useless as it could not be used on Bitcoin Cash blockchain.

###### 3.2.1. Plausibility of a Preimage Attack

With 160 bits of security, any attacker that would want to find a preimage of a specific hash would be faced with brute-forcing 160 bits which is infeasible, and well above the [generally accepted "safe" security level](https://en.wikipedia.org/wiki/Security_level#Typical_levels) of 128 bits.

Attacking a larger set would reduce the required number of attempts.
With a public ledger, the attacker has knowledge of all addresses that contain funds.
If the set of such addresses would grow to a size of 4.29 billion (2^32), then the attacker would still need to brute-force 128 bits.
To bring it down to 100 bits, which literature considers to be a "danger zone" (see section 4.4 [here](https://eprint.iacr.org/2019/1492.pdf)), the attacker would need a target set of 2^60 addresses, which is a number with 18 zeroes.
A successful attack against a set would at best yield a public key of some random address from the set and the attacker would still be facing the problem of cracking the public key, and that for an address with expected value practically 0 due to size of the target set.

We can conclude that 160-bits of security is adequate when attacker has no influence on how the target addresses are generated, which is the common case with Bitcoin Cash.

###### 3.2.2. Plausibility of a Collision Attack

With a collision attack, the attacker does not target some existing address or even a set of all known addresses.
Here any random collision will do, and both messages will be under control of the attacker.
Even if someone else generates part of the message but the attacker has the final say by adding his data on top of another's message before generating the hash, it still counts for the attack.

The distinction between a preimage attack and a collision attack is well described [here](https://bitcoin.stackexchange.com/questions/88556/is-this-a-collision-attack-or-a-2nd-preimage-attack):

>A less-technical way to think about the difference between the collision attack and the SPA is how many degrees of freedom the attacker has. With an SPA, the attacker has one degree of freedom---their message. With a collision attack, the attacker has two degrees of freedom---both messages.
>
>Whether Mallory uses a database size of 1, 100, or something else doesn't matter for the attack classification---it's a collision attack if she's involved in creating the ultimate digest, it's an SPA if she has to match a value someone else chose.

Against the generic birthday attack, collision resistance of any hash function is half the declared preimage resistance.
In other words, it would take 2^80 attempts on average to generate a colliding pair of messages when the message is hashed using HASH-160.
[Literature suggest](https://www.cs.umd.edu/~jkatz/imc/hash-erratum.pdf) that the attack can be performed with constant memory, even when searching for a [particular template of colliding messages](https://lists.linuxfoundation.org/pipermail/bitcoin-dev/2016-January/012204.html).
Still, the attack against 80 bits is not trivial and would be expensive, on the order of magnitude of millions of US dollars.
While such an attack is feasible, it would be exploitable for profit only in specific circumstances.

For most current Bitcoin Cash use-cases, having only 80 bits of security against collision attacks is not a problem because most users will be the sole owner of an address, with exclusive control over their address generation, and therefore not exposed to the attack.
In other words, brute-forcing a colliding pair of P2PKH address keys or P2SH redeem scripts could only result in the same entity having two ways to spend from one randomly generated address.
It would practically work as 1-of-2 multisig address where the one who generated it would hold both keys, and it would be an expensive address to generate.

The problem arises when users are asked to pay into an address where someone else had control over address generation, such as P2SH multi-party multisig addresses and public-facing covenants.
Feasibility of a collision attack makes it usable as part of a con executed in 3 stages:

1. Collision attack: generate a colliding contract (redeem script) pair;
2. Social hacking set-up: release the address and only one of the two colliding contracts to some other party or parties and convince them to pay funds into the contract address;
3. Rug-pull: when the address has accumulated enough funds to pay for step 1 and have some profit, steal the funds from the address by using the other, secret, contract.

For the con to work, the contract revealed to other parties must look innocent while also having a variable part suitable for manipulation by the attacker, one that can encode a whole 160-bit hash in order to make use of the constant-memory method by finding cycles.
This does not just mean a continuous 160-bit block, it is much more broad - it means any degree of freedom which would let the attacker feed 160 bits of entropy of his choice into the final address.
The other message can be anything that will allow only the attacker to spend from it.

This [comment](https://lists.linuxfoundation.org/pipermail/bitcoin-dev/2016-January/012234.html) sums it up well:

>If you are agreeing to lock up funds with somebody else, and they control what public key to use, you are susceptible to collision attacks.

The above described collision attack vulnerability has been known since circa 2016 and recently it has been [brought to attention](https://bitcoincashresearch.org/t/p2sh32-a-long-term-solution-for-80-bit-p2sh-collision-attacks/750) in context of Bitcoin Cash blockchain, because it has expanded its Script capabilities.
Historically, Bitcoin contract language was not really used for anything more than multisig which was the main and probably only widespread case of "locking funds with somebody else".
As we will demonstrate below, even that use-case is exploitable in some con scenarios, and Bitcoin Cash is continuing to evolve Bitcoin Script language, with the latest upgrade (May 2022) bringing much more versatility to Script language:

- [CHIP-2021-02: Native Introspection Opcodes](https://gitlab.com/GeneralProtocols/research/chips/-/blob/master/CHIP-2021-02-Add-Native-Introspection-Opcodes.md) and
- [CHIP-2021-03: Bigger Script Integers](https://gitlab.com/GeneralProtocols/research/chips/-/blob/master/CHIP-2021-02-Bigger-Script-Integers.md).

For example, one of the first applications demoed is a [public crowdfunding assurance contract](https://bitcoincashresearch.org/t/p2sh-assurance-contract/720), but it is safe to assume there will be many more applications.
Those uses could potentially attract enough users so that a con relying on the feasible P2SH collision would become attractive to adversaries.
Seemingly legitimate contracts could intentionally be set-up as insecure in an elaborate con like what we will [describe below](#example-attack).

We can conclude here that the HASH-160 function is not entirely adequate for use with the P2SH feature, not because of some weakness in the function, but due to design choice of the function's output size.
The output size of 160 bits makes a birthday attack feasible and there are already existing usage scenarios where it could be exploited, with more to come.

Bitcoin Core (disambiguation) has already closed the vulnerability by introducing [BIP-0141](https://github.com/bitcoin/bips/blob/master/bip-0141.mediawiki) (SegWit) which enables 256-bit commitments to redeem scripts ([P2WSH](https://github.com/bitcoin/bips/blob/master/bip-0141.mediawiki#P2WSH)).
The BIP in question was one of the main reasons for the 2017 UAHF split, so naturally Bitcoin Cash would have to close the vulnerability in some other way.

Thankfully, a much simpler way is available to Bitcoin Cash: expand the P2SH feature with the option to use a hash function that has a 256-bit output.
There already exist 2 opcodes that call such a function as candidates for the "hardened", 32-byte variant of the feature: P2SH32.
Such a solution would not introduce new technical debts, and we will later [state preference](#preferred-upgrade) for a particular function and elaborate on the choice.

<h7> Example Attack </h7>

To better illustrate the attack, consider an adversary that creates a custody service which sets up 2-of-3 P2SH multisig addresses for their users.
Any user of such service would control two keys, and the custodian (attacker) would control one.
Note that there exist legitimate services that work just as described, enabling users to hold one of their two keys in cold storage and rely on the service to produce 2-of-3 signatures.

For the attack to be possible, user interface of the rogue service would have to first ask the user for their 2 public keys, and the adversary would add its key last to generate the multisig address, and then reveal their 3rd key to the user so the user could verify correctness of the contract.
The user would likely think it is safe, because it would be the familiar multisig contract (redeem script) template which, if evaluated on its own, indeed works as advertised:

- Redeem script: `OP_2 <attacker's 33-byte pubkey> <user's 33-byte pubkey 1> <user's 33-byte pubkey 0> OP_3 OP_CHECKMULTISIG`;
- Locking script: `OP_HASH160 <hash160(redeem_script)> OP_EQUAL`.

Such an output could then be spent from using an input of the following form:

- Unlocking script: `OP_0 <user's signature> <user's other signature or attacker's signature> <redeem_script>`

In our con scenario, when setting up the multisig address the attacker would have generated a `redeem_script_steal`, one that would hash to the exact same address and allow him to spend from the address by executing an entirely different script like:

- Redeem script: `<20-bytes> OP_DROP OP_DUP OP_HASH160 OP_EQUALVERIFY OP_CHECKSIG`.

The script would be kept secret until stage 3. of the attack, the rug-pull.
In the innocent-looking multisig script, his key would not really be a key, he would be using it as a variable part in his collision search.
If the attacker expects users to call on the service to actually use the key from the innocent-looking script, then it would make stage 1. somewhat more expensive but still feasible.

The service could be operating legitimately for a long time, waiting for the right target or a set of targets.
The attacker would not need to perform step 1. for all users, that would have an uncertain return-on-investment.
He would first need to attract enough users and identify high-value targets, ones where they have enough funds to make a collision search worthwhile.
The attacker could then ask his targets to move their funds into a new contract that would have the same 2 user keys, and the attacker could plausibly say he has to update his key for some internal security upgrade.

He would wait for his targets to move the funds, and then steal them all in one go and disappear.

There is a simple way users could protect themselves in this scenario: insist on having the last say in address generation.
The service would have to provide their public key first, and the user would then generate two brand new keys for himself and use those to finalize the P2SH multisig address.
The user would then be the one with the freedom to generate a collision, but in this scenario he is already the owner of the address so neither himself nor the service would be exposed.

Not all scenarios have such obvious mitigation, and some contracts may not have a way to work around the vulnerability at all or it will be too cumbersome for practical use, which will limit utility of the P2SH feature, and with that utility of Bitcoin Cash.

Similar example would be the same 2-of-3 multisig contract but set up so that 3 parties are supposed to each hold only a single key over some shared pool of funds.
Here nobody should be trusted with adding the last key because it would give him a chance to perform a collision search.
This can be mitigated using a pre-commitment scheme, like one [described by Jason Dreyzehner](https://gitlab.com/bitcoin-cash-node/announcements/-/merge_requests/52#note_972949731):

>Each participant generates their public key and shares the hash of that public key with the other participants. After receiving each other's public key hash, the participants reveal their unhashed public keys. By verifying that each revealed public key matches the initially-shared hash, each participant can confirm that the other participants had already generated their public key before the reveal, making birthday attacks impossible.

Here we can observe that, even for the ubiquitous mulitsig  contract, the mitigation starts to take a toll on user experience as soon as funds are to be controlled by multiple parties.

<h7> Applicability of a Collision Attack on Use-cases </h7>

As we already discussed, any entity that has the last say in address generation would have the opportunity to exploit it.
Multisig address generation happens only once, and from then on it is just used, so there is only the one opportunity for an attack and the risk can be mitigated by using an interactive key-exchange that ensures no party has a chance to "re-roll" the final address in a collision search.

However, there is a big class of contracts where the P2SH address may be updated on each contract spend and allow moving funds to a new address: self-mutating covenants that update some internal state when spent from.
Here, address generation happens on every spend from the contract.
Attack scenarios will depend on how they are set up.
The contract may require authentication by a key or a set of keys, or it may be a public covenant where anyone could spend from it provided he updates the contract state as required.
In either case, if the contract allows enough entropy to be fed into its internal state when used, then every update is an opportunity for a collision search and the risk of total fund loss will be there for as long as the contract lives.

Some examples of the above include:

1. Contract that raise money from the public and make promises about how the funds will be spent.
These are designed to ensure that the promise is kept, like releasing funds on fixed intervals.
Collision-search for an alternative contract would allow the trustee to break out from self-imposed limitations.
2. Contracts that manage funds for an organization, allowing some keys to take only a limited amount of funds.
These could be exposed to a collision-search by a rogue employee if the organization's treasury would grow big enough.
3. Oracle-dependent contracts, where releasing the funds to some party in the contract is dependent on external data provided by an oracle.
If it is possible to manipulate how the oracle is read from by the contract, then it may open an opportunity for a collision-search.
4. Covenants used to create bridges with other blockchains, which could end up locking a significant amount of funds and become attractive targets for adversaries.
5. DAO-like contracts, where anyone is free to interact with the funds locked inside of it while being allowed to update some internal state of the DAO.
These would be exposed to a collision attack by anyone at any time, and a success would allow them to break out from the DAO and simply take all the funds.

Above contracts would be extremely hard to audit because entropy for a collision may be obscurely snuck-in.
It would be hard or even impossible to set-up those kinds of contracts in a way that would mitigate the risk.
If the enclosing hash function for these contracts was secure against collision-attacks, then all of these problems would simply disappear.

#### 4. Preferred Upgrade

The P2SH feature can be simply "hardened" by introducing another "magical" output pattern, one that uses a hash function with a 256-bit output.
Current Script VM opcodes leave us with two possibilities:

- Locking script:  
**`OP_SHA256`** `OP_DATA_32 32-byte-value OP_EQUAL`  
(raw: **`a8`** `20` `1122334455667788990011223344556677889900112233445566778899001122` `87`), or
- Locking script:  
**`OP_HASH256`** `OP_DATA_32 32-byte-value OP_EQUAL`  
(raw: **`aa`** `20` `1122334455667788990011223344556677889900112233445566778899001122` `87`).

The `OP_SHA256` is self-descriptive, and the `OP_HASH256` is a composite hash just like OP_HASH160 but, instead of using RIPEMD-160 as the outer function, it is using the same SHA-256 function as the outer function:

- `hash256(x) = sha256(sha256(x))`.

The composite is commonly referred to as "double-SHA256" and it is the same hash function used as the ["main" hash](https://documentation.cash/protocol/blockchain/hash#sha-256) in Bitcoin design.

Either one would enable a 32-byte variant of the P2SH feature.
The main differences between two functions are:

- CPU cost of evaluating the function.
- Susceptibility to a length-extension attack.
- Composite (double SHA-256) vs non-composite (single SHA-256) function structure.
- Protocol consistency.

We will discuss these differences and finally decide on a preferred hash function from among those already available.

##### 4.1. CPU Cost of Evaluating The Function

The CPU cost depends on total bytes that pass through the SHA-256 function, and difference is made smaller with bigger redeem scripts.
This is because the 2nd function call only needs to hash a fixed-size 32-byte message (output of the 1st call).
For example, double hashing a 300-byte redeem script has 332 bytes pass through the hash function, while single hashing has 300 resulting in roughly 10% cost difference for the example script.
For small scripts, the cost of a double function is double, but even so, it is small compared to the cost of verifying signatures and hashing the whole transaction for the transaction identifier.

##### 4.2. Susceptibility To a Length-extension Attack

The single HASH-256 function is secure against preimage and collision attacks but completely broken when it comes to length-extension attacks.
As we already discussed, the current P2SH feature uses a composite function that is secure against length-extension.

It [could be argued](https://bitcoincashresearch.org/t/p2sh32-a-long-term-solution-for-80-bit-p2sh-collision-attacks/750#using-op_sha256-rather-than-op_hash256-3) that the nature of P2SH feature is such that the length-extension attack is not applicable, because the message will be revealed on first spend from the contract and then anyone can trivially extend it anyway, regardless of the hash function used.
While this is indeed generally true, there are other things to consider.

Using the double removes susceptibility to length-extension and makes the hash function close to a ["random oracle"](https://en.wikipedia.org/wiki/Random_oracle) which is an important assumption in commitment schemes devised to keep secrets safe until time comes to reveal them.
We have found [literature](https://eprint.iacr.org/2013/784.pdf) exploring secure multi-party computations on Bitcoin, and the "hiding" property requires assumption of a random oracle:

>The binding property of this commitment follows from the collision-resistance of the hash function H, since to be able to open the commitment in two different ways a malicious sender would need to find collisions in H. **For the hiding property we need to assume that H is a random oracle. We think that this is satisfactory since anyway the security of the Bitcoin PoWs relies on the random oracle assumption.** Clearly, if H is a random oracle then no adversary can obtain any information about x if he does not learn s (which an honest C keeps private until the opening phase).  

>**Notice that use of single SHA-256 would be insecure here**, because it is constructed using Merkle–Damgard transformation and therefore it is susceptible to the length extension attack [21]. It this attack **an adversary which knows H(x) can compute a value H(x||y) for some string y controlled by him without the knowledge of the original value x. It could allow to completely compromise the lottery protocol**, because the winner choosing function (described later) highly depends on the lengths of the secrets.

The example is not directly applicable to P2SH but we use it to illustrate the kind of cryptographic schemes length-extension attack affects, and to support the statement that double SHA-256 is usable for making security claims in the random oracle model.

Susceptibility to a length-extension allows an adversary to extract some limited information from a target set of hashes even if their preimages are secret: check whether a preimage of one hash is a substring of a preimage belonging to some other hash in the set, and discover the extension while at it.
By being able to extract information from known hashes with secret preimages, ["unlinkability" property of known hashes is weakened](https://crypto.stackexchange.com/questions/33663/unlinkability-of-merkle-damg%c3%a5rd-hash-function-results).

Consider the [P2PKH template embedded inside a reedem script](#pay-to-public-key-hash-p2pkh-outputs):

- Locking script:  
`OP_HASH256 OP_DATA_32 redeem_script OP_EQUAL`
- Redeem script:  
`OP_DATA_33 pubkey OP_CHECKSIG`
- Unlocking script:  
`<push signature> <push redeem_script>`.

By appending a `<counter> OP_DROP` to the redeem script, one  could have any number of distinct addresses, all spendable  using the same key and expected to be indistinguishable from other P2SH addresses.
However, because the `<counter>` is of sufficiently small size, and if SHA-256 was used instead of HASH-256, then an adversary could feasibly brute-force some set of known hashes and link addresses together even before they are first used.
He would pick a hash from the set, test length-extensions up to some feasible N of bytes, then repeat the same with the next hash and so on until he checks the whole target set.
Even if he does not find a match, he would still learn something about the set - that none of those hashes preimages are up-to-N-byte-suffix substrings of each other.
If the hash function was a random oracle, then it would be impossible to extract any information and "hiding" property of the above address generation scheme could be proven to be sound.

While the double function may be usable as a random oracle in security claims like above, we have found [literature](eprint.iacr.org/2013/382.pdf) demonstrating that it is provably not generally indistinguishable from one, precisely because of the double construction:

>Our first technical contribution, then, is detailing how this structural property might give rise to vulnerabilities. Consider computing a hash chain of length `l` using H<sup>2</sup> as the hash function. That is, compute Y = H<sup>2`l`</sup>(M). Doing so requires 2`l` H-applications. But the structural property of H<sup>2</sup> identified above means that, given M and Y one can compute H<sup>2`l`</sup>(H(M)) using only one H-application: H(Y) = H(H<sup>2`l`</sup>(M)) = H<sup>2`l`</sup>(H(M)).

>We exhibit a cryptographic setting, called mutual proofs of work, in which the highlighted structure of H<sup>2</sup> can be exploited. In mutual proofs of work, two parties prove to each other that they have computed some asserted amount of computational effort. This task is inspired by, and similar to, client puzzles [20, 21, 27, 28, 40] and puzzle auctions [42]. We give a protocol for mutual proofs of work whose computational task is computing hash chains. This protocol is secure when using a random oracle, but when using instead H<sup>2</sup> an attacker can cheat by abusing the structural properties discussed above.

>We emphasize that we are unaware of any deployed cryptographic application for which the use of H<sup>2</sup> or HMAC leads to a vulnerability.

Note that a security proof in the "random oracle model" does not automatically make a cryptographic scheme secure because it is not complete.
There are [examples of intentionally broken schemes](https://blog.cryptographyengineering.com/2020/01/05/what-is-the-random-oracle-model-and-why-should-you-care-part-5/) designed to prove this point.
However, it is the closest we can get to making plausible [security assurances](https://crypto.stackexchange.com/questions/879/what-is-the-random-oracle-model-and-why-is-it-controversial/880#880) when a complete proof cannot be constructed in [the standard model](https://en.wikipedia.org/wiki/Standard_model_(cryptography)):

>Summary: proofs in the random oracle model are fine, but are never complete enough to cover a practical implementation: we know that any function we will use in lieu of the random oracle will not be a random oracle; so security relies on the fervent hope that the parts where the actual function is not a random oracle do not impact security. This justifies a bit of mistrust. Still, a proof in the random oracle model is much better than no proof at all.

While use of the random oracle model has been somewhat [controversial](https://link.springer.com/chapter/10.1007/978-3-030-63287-8_12), it stood the test of time well, and we have found [literature](https://eprint.iacr.org/2015/140.pdf) that gives a good 20-year retrospective:

>In this retrospective we argue that there is no evidence that
the need for the random oracle assumption in a proof indicates the presence of a real-world security weakness in the corresponding protocol. We give several examples of attempts to avoid random oracles that have led to protocols that have security weaknesses that were not present in the original ones whose proofs required random oracles.

>If one is willing to use the random oracle model (and the analogous generic group model), then various security arguments are known for these two schemes. If one shuns these models, then no provable security result is known for them.

Finally, both SHA-256 and double SHA-256 are flawed in some way when it comes to being used as a random oracle.
The single has an obvious and generally exploitable length-extension vulnerability while the double has a more exotic property that only impacts a specific use in building hash chains.

In the context of making a decision about P2SH hash function, the benefit of using the double SHA-256 function over single would be the privacy aspect, that of all P2SH outputs being unlinkable.
We are not aware of any current setups relying on this property (P2SH20 addresses are unlinkable just as well) so the benefit is speculative, and may or may not be reaped with future Bitcoin Cash contract setups.

##### 4.3. Composite vs Non-composite Function

The composite structure also allows for the possibility of a contract proving existence of a known preimage of some target contract hash, without having to provide the contract's redeem script.
If the target contract is unspent and secret, then a first reveal of the intermediate hash would serve as one-time proof of knowledge of the preimage.
The verifier contract could require a pre-commit step before reveal in order to prevent replay of the proof.

##### 4.4. Protocol Consistency

P2SH32 will be the foundation of future UTXO contract developments, and double SHA-256 is already being used as the "main" hash that secures critical blockchain primitives, so we would want to avoid the risk of the unknown, of accidentally introducing a weakest link again when the objective of the upgrade is to strengthen the weakest link.

##### 4.5. Preferred Choice of Hash Function

With all above said, in terms of hash functions already available, we would prefer an upgrade of the P2SH feature using **OP_HASH256**, by allowing an additional BIP-0016 pattern that would trigger redeem script execution:

- Locking script:  
`OP_HASH256 OP_DATA_32 redeem_script OP_EQUAL`  
(raw: `aa` `20` `1122334455667788990011223344556677889900112233445566778899001122` `87`).

The main trade-off for OP_HASH256 vs OP_SHA256 is stronger protocol consistency vs a micro-optimization, and speculative benefits add some secondary weight in favor of OP_HASH256.

BCHN has already started work on a [proof of concept](https://gitlab.com/bitcoin-cash-node/bitcoin-cash-node/-/merge_requests/1556), to better assess impact of such an upgrade.

###### Side Note: Other Hash Functions

We have not considered other 256-bit-output hash functions such as [BLAKE2s-256](https://en.wikipedia.org/wiki/BLAKE_%28hash_function%29#BLAKE2) or [SHA3-256](https://en.wikipedia.org/wiki/SHA-3#Comparison_of_SHA_functions), both which are secure against preimage, collision, and length-extension attacks, and may also offer an increase in transaction validation performance.
Using one of those would require either:

- upgrading the Script VM with a new opcode for the function or
- moving redeem script authentication [to the base layer](#mixing-layers) and there using a hash function not available to the Script VM.

Introducing a new hash function would be a bigger intervention than what is required to address the collision problem we set out to do.
From security point of view and as far as we are aware: it would offer an improvement over our choice of double SHA-256 only in the exotic example of hash chains used as PoW mentioned above, and for which we cannot demonstrate any applicability to the P2SH feature.
From performance point of view: it may offer a tempting improvement when viewed in isolation.
The costs and benefits of a new hash function should be carefully evaluated, which is beyond scope of this document.

##### 4.6. Backwards Compatibility

###### 4.6.1. Node Software

Due to nature of the change the upgrade would technically be a soft-fork upgrade just like BIP-0016.
However, with Bitcoin Cash it would be deployed as part of Bitcoin Cash upgrade schedule, that allows for clean upgrades using orderly hard-forks, which intentionally makes old node software obsolete.
This pertains to node software only, the upgrade would be non-breaking when it comes to other software.

###### 4.6.2. Non-node Software

Other applications will not require an immediate upgrade, meaning everyone can continue using Bitcoin Cash (BCH) as they are used to, no action required.
Upgrading old applications or creating new ones will be on a voluntarily basis by those that want to access the upgraded feature, and at their own pace.

Some application like block explorers can choose not to upgrade their non-node software at all, resulting in P2SH32 being displayed as a generic "hashlock" contract.
Opting to upgrade would mean more accurately displaying the contract address.

With recent Script VM upgrades however, we expect that many will be attracted to build and access products using the hardened, 32-byte variant of P2SH feature, and that such products will bring more utility to Bitcoin Cash.

Developing new Script applications will of course require updates to some libraries, transaction compilers, and other software which implements the Bitcoin Cash Script VM (e.g. Bitauth IDE).

Secure fund management setups relying on P2SH32 contracts may also require upgraded hardware wallet firmware, or even tailored custom firmware.

###### 4.6.3. Address Format

Not all users will have a need to spend from P2SH contracts, but many may want to be able to send to them (example: [crowdfunding contract](https://bitcoincashresearch.org/t/p2sh-assurance-contract/720)).
To allow users to easily send Bitcoin Cash to contracts secured with a 32-byte hash, wallets and address handling tools should recognize one more address type.
The current [address standard](https://github.com/bitcoincashorg/bitcoincash.org/blob/master/spec/cashaddr.md#version-byte) already supports encoding P2SH addresses up to 64 bytes, and a 32-byte P2SH address would look like:

`bitcoincash:pvch8mmxy0rtfrlarg7ucrxxfzds5pamg73h7370aa87d80gyhqxq7fqng6m6`.

It should be noted here that a key property of birthday-hardened P2SH use-cases is that they are likely to be interact with users through specialized web or local wallets anyway, and are unlikely to require direct depositing into contracts from common wallets.
Therefore the usefulness of these use-cases, and by extension P2SH32 itself, is not dependent on widespread adoption of P2SH32 among common wallets and software.

###### 4.6.4. Historical Transactions

As of time of this writing (block 742020) there exist both spent and unspent transaction outputs matching both OP_HASH256 and OP_SHA256 hashlock output patterns.
Situation was similar at the time when BIP-0016 was proposed:

>These new rules should only be applied when validating transactions in blocks with timestamps >= 1333238400 (Apr 1 2012) [1]. There are transactions earlier than 1333238400 in the block chain that fail these new validation rules. [2]. Older transactions must be validated under the old rules. (see the Backwards Compatibility section for details). 

The same would apply for activating either of the two 32-byte output patterns.
For information, [attached](https://gitlab.com/0353F40E/announcements/-/blob/p2sh-data/attachments/2022-06-09_bitcoin_cash_pay_to_script_hash_p2sh_past_present_and_future/p2sh_data_EN.md) is a list of all existing transaction outputs, both spent and unspent, which match those patterns.

Also, any unspent funds currently locked in outputs with the OP_HASH256 hashlock pattern would almost certainly be made unspendable (if not already) with the upgrade.
As of time of this writing (block 742020) the total amount of such outputs is 0.00740026 BCH so currently this is not seen as a problem that would justify making exceptions to have them spendable under old rules.

##### 4.7.Interaction With Other Bitcoin Blockchains

###### 4.7.1. Interaction With Bitcoin Core (BTC)

Transactions on Bitcoin Core and its post-UAHF derivatives are not replayable on Bitcoin Cash, due to SIGHASH_FORKID bit required by [UAHF specification](https://documentation.cash/protocol/forks/bch-uahf#req-6-2-mandatory-signature-shift-via-hash-type).

However, due to Bitcoin Core post-UAHF "SegWit" soft-fork upgrade it may happen that funds accidentally get sent to "SegWit" [P2WPKH nested in BIP16 P2SH](https://github.com/bitcoin/bips/blob/master/bip-0141.mediawiki#p2wpkh-nested-in-bip16-p2sh) addresses, but on Bitcoin Cash (BCH) blockchain instead of on Bitcoin Core (BTC) blockchain:

```
witness:      <signature> <pubkey>
scriptSig:    <0 <20-byte-key-hash>>
              (0x160014{20-byte-key-hash})
scriptPubKey: HASH160 <20-byte-script-hash> EQUAL
              (0xA914{20-byte-script-hash}87)
```

Another variant is the [P2WSH nested in BIP16 P2SH](https://github.com/bitcoin/bips/blob/master/bip-0141.mediawiki#p2wsh-nested-in-bip16-p2sh), affected all the same by what is discussed below.

Because Bitcoin Cash never implemented SegWit, the redeem script will be authenticated using the 1st Script VM run (hashlock) but the 2nd one (BIP-0016) will simply push an empty stack item and the `20-byte-key-hash`.
On Bitcoin Cash blockchain, the execution will end there, and  with a "dirty" stack.
On Bitcoin Core blockchain, a 3rd run (SegWit) would be executed to verify the signature against the witness, but on Bitcoin Cash that never happens since that soft-fork was never implemented.

On Bitcoin Cash, until introduction of [clean stack rule with Bitcoin Cash 2018-11-15 upgrade](https://documentation.cash/protocol/forks/hf-20181115#clean-stack), the "P2WPKH nested in BIP16 P2SH" was therefore an "anyone-can-spend" P2SH redeem script.
With introduction of the clean stack rule, it was made unspendable.
In the following upgrade (2019-05-15), an exception was made for the pattern in order to again allow [recovery of those funds by miners](https://documentation.cash/protocol/forks/hf-20190515#allow-segwit-recovery).

With the 32-byte P2SH variant, no such exception is required, because P2SH32 does not exist on Bitcoin Core network, and its [32-byte P2WSH](https://github.com/bitcoin/bips/blob/master/bip-0141.mediawiki#p2wsh) variant uses a pattern distinct from what is proposed here.

###### 4.7.2. Interaction With Derivatives of Bitcoin Cash

As discussed [here](https://bitcoincashresearch.org/t/p2sh32-a-long-term-solution-for-80-bit-p2sh-collision-attacks/750/3?u=bitcoincashautist), replays of some transactions sending unsplit funds to P2SH32 may be possible on derivatives of Bitcoin Cash.
Users of P2SH32 should therefore be careful not to use unsplit funds.
On those derivatives, funds sent to P2SH32 outputs would be free for the taking because there they would be seen as hashlock contracts.
Miners could easily donate such funds to themselves because they could learn the unlocking preimage by looking at Bitcoin Cash blockchain.
The P2SH32 pattern is not recognized as standard by other chains network rules, so those outputs could only be claimed by miners.

This is not seen as a problem which needs addressing by Bitcoin Cash network because those cases should be extremely rare since amount of unsplit funds only decreases with time.
Besides, it is the responsibility of each network to safeguard their own users funds.

#### 5. Post-quantum Cryptographic Security Level

It is currently understood that quantum computers could theoretically offer a quadratic speed-up in cracking hash function preimages using [Grover's algorithm](https://en.wikipedia.org/wiki/Grover%27s_algorithm), and cubic speed-up in finding hash collisions using [Brassard-Høyer-Tapp algorithm](https://en.wikipedia.org/wiki/BHT_algorithm).
It is also [understood](https://www.researchgate.net/figure/Comparison-of-conventional-and-quantum-security-levels-of-typical-ciphers-12_tbl1_332863808) that elliptic-curve cryptography would be the the first to go as it could be completely broken using [Shor's algorithm](https://en.wikipedia.org/wiki/Shor's_algorithm).
We summarize this in the table below:

Primitive | Conventional Computing Security Level | Quantum Computing Security Level |
-- | -- | --
ECC-256 | 128 bits | 0 bits
SHA-256 | 256 bits (preimage) / 128 bits (collision) | 128 bits (preimage) / 85 bits (collision)
HASH-256 | 256 bits (preimage) / 128 bits (collision) | 128 bits (preimage) / 85 bits (collision)
RIPEMD-160 | 160 bits (preimage) / 80 bits (collision) | 80 bits (preimage) / 53 bits (collision)
HASH-160 | 160 bits (preimage) / 80 bits (collision) | 80 bits (preimage) / 53 bits (collision)

Note that these are theoretical lower bounds.
[Literature suggests](https://www.cs.sfu.ca/~meamy/Papers/breakingsha.pdf) that, in a theoretical implementation, the cost of a quantum-computing attack might be more expensive than that:

>We showed that attacking SHA-256 requires approximately 2^153.8 surface code cycles and that attacking SHA3-256 requires approximately 2^146.5 surface code cycles.
For both SHA-256 and SHA3-256 we found that the total cost when including the classical processing increases to approximately 2^166 basic operations.
>
>Our estimates are by no means a lower bound, as they are based on a series of assumptions.

Still, we can expect that in the advent of scalable quantum computing all Bitcoin Cash cryptographic primitives would have to be upgraded, but in what order and how to transition funds caught in old outputs?

Addresses that had their public key exposed would be easy targets since only cracking the public key would stay in the way of stealing the funds.
Those may become vulnerable even before hash function preimage security level starts being in the "danger zone", and even before Bitcoin networks react by implementing some quantum-hardening consensus rules.

What about addresses where the key was never exposed, would they be safe at rest?
Assuming Bitcoin Cash would have P2SH32 enabled, our blockchain would have 3 address types, summarized below:

Address Type | Conventional Computing Security Level | Quantum Computing Security Level |
-- | -- | --
P2PKH | 160 bits (preimage) / 80 bits (collision) | 80 bits (preimage) / 53 bits (collision)
P2SH | 160 bits (preimage) / 80 bits (collision) | 80 bits (preimage) / 53 bits (collision)
P2SH32 | 256 bits (preimage) / 128 bits (collision) | 128 bits (preimage) / 85 bits (collision)

We already demonstrated how a collision-attack would be a risk only for those who are being asked to pay into addresses generated by others **after** a collision attack becomes feasible, so a timely upgrade to "P2SH48" would address that in the same way that a P2SH32 upgrade addresses P2SH collision vulnerability against conventional computers.

If quantum-computing collision-attacks against 256-bit hash functions should ever become feasible, then all Bitcoin blockchains would have to upgrade more than just address hashes: transaction identifier hashes, Merkle-tree hashes, block hashes, and elliptic-curve signatures would all become insecure and an upgrade of the entire system would be required.
For further reading, we have found some recent [literature](https://eprint.iacr.org/2022/026.pdf) discussing the impact on popular blockchains.

After a hypothetical and systematic quantum-proofing upgrade, there would still be unspent outputs locked using old methods.
Here we will consider risks to those funds, left behind in old addresses.
With 80-bits of preimage resistance, both 160-bit address types would theoretically be in the danger zone.
We could conceive a quantum-computing attack that searches for any spendable pattern, which is an [extension of Grover's algorithm](https://en.wikipedia.org/wiki/Grover%27s_algorithm#Multiple_matching_entries):

- For P2PKH, that would mean finding any preimage that is a valid secp256k1 public key and then cracking the secret key.
- For P2SH, that would mean finding any preimage which would allow the attacker to steal the funds using a contract template of his choice.

We have not found much literature that explores possibility of breaking the address hash, one systematic analysis of Bitcoin primitives briefly [considers](https://link.springer.com/chapter/10.1007/978-3-319-45741-3_11#Sec19) the possibility of breaking both the address hash and the underlying key.

With 128-bits of preimage-resistance against quantum computers, P2SH32 funds would still be safe at rest.
Depending on the underlying contract, they could even be safe to use.
This is because Bitcoin Cash introspection opcodes could be used to create hash-based P2SH contracts, where the spender could rely on time-locks and commitments to create quantum-resistant transactions.
We can outline the contract here: require a valid signature from a key, and also require spending another input alongside - one that spends a prevout which reveals a pre-commitment to the signature and such that it is time-locked.
This way, even if the key is revealed, the adversary could not immediately produce an alternative transaction since he would not have a matured pre-commitment output in his possession.
He could produce one and wait, but by the time it matures, the real owner's transaction will be buried under some blocks, and stealing the funds would require a chain re-org.
Similar [solutions](https://eprint.iacr.org/2018/213.pdf) have already been proposed for Bitcoin Core (disambiguation) as potential soft-fork consensus rules that would implement a commit-delay-reveal spending pattern, with the goal of moving stranded funds to hypothetical quantum-secure contracts.
With recent Bitcoin Cash Script developments, users will not have to wait for a consensus upgrade to secure their funds, as they will be able to encumber their outputs with custom contracts that could be designed to be quantum-secure.
Those would not be as practical and these problems are in far-distant future, but in our view it is reassuring to know that with Introspection and P2SH32 upgrades, Bitcoin Cash network could already allow users to secure their funds for the long-term.

#### 6. Potential Future Upgrades

We briefly mentioned two technical debts other than hash collision vulnerability, and here we will expand on them and consider some possibilities for repaying them.

##### 6.1. Transaction Encoding

If Bitcoin had a hard-fork upgrade strategy, then the P2SH feature could have been rolled out differently and more efficiently, by implementing a dedicated opcode for the feature and using a single byte to encode its use instead of 3 that are required to disguise the feature as a hash-lock contract.
Because it was rolled out as a soft-fork, every P2SH output now wastes 2 bytes in transaction encoding.

Recall the current P2SH pattern:

- locking script:  
`OP_HASH160 OP_DATA_20 hash160(redeem_script) OP_EQUAL`;  
- unlocking script:  
`[push data_N] ... [push data_1] [push data_0] <push redeem_script>`.

Were it rolled out as a hard-fork, then it could have been rolled out with more efficient encoding:

- locking script:  
`OP_P2SH_20 hash160(redeem_script)`,  
- unlocking script:  
`[push data_N] ... [push data_1] [push data_0] <push redeem_script>`,

The OP_P2SH_20 would do it all at once: pop one item from the stack, hash it and push the result on the stack, push the next 20 bytes to the stack, execute an EQUALVERIFY internally and if it validates then execute the 2nd Script VM run.

The 2 bytes would not make a notable difference in network capacity and scaling, but the cost of shaving them off would have to be burdened by downstream applications, so we do not recommend any change to P2SH encoding and the above only illustrates the inherited technical debt.

##### 6.2. Mixing Layers

Current specification (BIP-0016) relies on Script VM to authenticate the contract (redeem script) using a particular hash-lock output locking script pattern.
The 2nd Script VM run happens only if the contract has both been authenticated AND if the output locking script matches the rigidly-specified P2SH pattern.
Even slightly deviating from the pattern would turn it into an ordinary hash-lock contract, like:

 - locking script:  
`OP_HASH160 OP_DATA_20 hash160(redeem_script) OP_EQUAL` **`OP_0NOTEQUAL`**;  
- unlocking script:  
`<push redeem_script>`.

Here, the `redeem_script` does not have to be a valid Script VM bytecode because it will never be executed for the 2nd run, and any preimage will be able to unlock the output.

Because the P2SH locking script pattern is a rigidly-specified pattern, a validating node does not really need to parse it as Script for the 1st run.
It can just use a simpler algorithm in-between executing input unlocking script and the output's locking script.
When evaluating an input, an optimized implementation could be doing this:

```
// Execute only the input's unlocking script in order to populate
// the stack with unlocking data, so we can grab the redeem script
// from it later.
scriptvm.ClearStack();
scriptvm.EvalScript(input.unlocking_script);
if (scriptvm.error)
    fail();

// Check for P2SH "magical" pattern
if (prevout.locking_script.length == 23 &&
    prevout.locking_script[0] == OP_HASH160 && // 0xa9
    prevout.locking_script[1] == OP_DATA_20 &&) // 0x14
    prevout.locking_script[22] == OP_EQUAL) { // 0x87
        // P2SH VM state "hack"
        real_script = scriptvm.stack.top();
        scriptvm.stack.pop();
        if (scriptvm.stack.count() == 0)
            fail();
        if (hash160(real_script) != prevout.locking_script.substr(2,21))
            fail();
}
else
    real_script = prevout.locking_script;

// Executes either the redeem script or the "bare" locking script.
scriptvm.EvalScript(real_script);
if (scriptvm.error)
    fail();
if (scriptvm.stack.top() != 1 || scriptvm.stack.count() != 1)
    fail();
```

The BIP-0016 specification has the contract authentication (matching the hash) done by Script VM, but it does not have to be.
It could just as well be verified by the base transaction validation layer without the Script VM.
The base layer already modifies the initial Script VM state by popping a stack element.
That sets up the Script VM to execute the 2nd run of the redeem script, starting from the "hacked" VM state.
Instead of this limited state hack, the base layer could handle the first validation step without the overhead of the Script VM.

Inputs use a small subset of Script VM operations ([push-only](https://documentation.cash/protocol/forks/hf-20181115#push-only)) so
we could instead use an input pre-processor to obtain only the value of interest (redeem script).
That would let us authenticate the script and remove the last input's push without having to instantiate the Script VM at all, and the P2SH feature could be self-contained and agnostic of the language that will execute the bytecode it authenticates.
In that scenario, we would have to call on `EvalScript` only once, and we would feed it the complete script: `EvalScript(input.unlocking_script || output.locking_script)`.

Because of current specification's soft-fork [backwards-compatibility](https://github.com/bitcoin/bips/blob/master/bip-0016.mediawiki#520byte_limitation_on_serialized_script_size) clause, an optimized implementation would still have to pretend the redeem script is a stack element.
This has for consequence that the redeem script is more limited in size than a "bare" output script, because it is limited by the [`MAX_SCRIPT_ELEMENT_SIZE`](https://gitlab.com/bitcoin-cash-node/bitcoin-cash-node/-/blob/master/src/script/script.h#L23).

Still, we could have a simpler validation algorithm, compatible with the current specification:

```
// Self-contained P2SH authentication
if (prevout.locking_script.length == 23 &&
    prevout.locking_script[0] == OP_HASH160 && // 0xa9
    prevout.locking_script[1] == OP_DATA_20 && // 0x14
    prevout.locking_script[22] == OP_EQUAL) { // 0x87
        real_script = input.getRedeemScript(); // find the last unlocking script data push and get its data
        input.removeRedeemScript(); // remove the last data push and its data from input.unlocking_script
        if (len(real_script) > MAX_SCRIPT_ELEMENT_SIZE)
            fail();
        if (hash160(real_script) != prevout.locking_script.substr(2, 21))
            fail();
}
else
    real_script = prevout.locking_script;

// Execute full script at once, be it a P2SH or a "bare" output.
scriptvm.EvalScript(real_script + input.unlocking_script); // byte concatenation
if (scriptvm.error)
    fail();
if (scriptvm.stack.top() != 1 || scriptvm.stack.count() != 1)
    fail();
```

This would untangle the P2SH feature from Script VM as much as possible within bounds of the current specification, which implementations are free to do at their discretion.

Through a hard-fork upgrade, the length limit could be set to some other value, independent of the stack element size limit.
Increasing this and other Script VM limits is [being discussed](https://bitcoincashresearch.org/t/chip-2021-05-targeted-virtual-machine-limits/437) but here we are not ready to recommend changing the limit.
The script length is a DoS vector and the limit should be increased only after a careful analysis, which is outside scope of this document.

Similarly, the input and output transaction format could be optimized using the non-breaking [PreFiX](https://gitlab.com/bitcoin-cash-node/announcements/-/blob/master/2021-12-23_evaluate_viability_of_transaction_format_or_id_change_EN.md#an-alternative-to-breaking-change) method to entirely separate the feature from Script VM, by giving dedicated input and output fields to the redeem script and its hash, similar to what was explored by Andrew Stone (Bitcoin Unlimited) and labeled ["closure hash"](https://docs.google.com/document/d/1X-yrqBJNj6oGPku49krZqTMGNNEWnUJBRFjX7fJXvTs/edit#heading=h.5m05gajyo69u).
Such an upgrade would be subject to a cost-benefit analysis, maybe part of a broader transaction format update, which is also outside scope of this document.

#### 7. Pay-to-Public-Key-Hash (P2PKH) Outputs

The P2PKH locking script pattern does not rely on a VM state "hack" like P2SH.
It uses a single Script VM run to both authenticate the public key and verify its signature.
It is not a standalone feature but a regular use of the Script language, in "bare" output script form.
As such, it would require only a relay policy upgrade to allow for a 32-byte variant (let us call it "P2PKH32"):

- Locking script:  
  `OP_DUP OP_HASH256 OP_DATA_32 pubkey-hash-32 OP_EQUALVERIFY OP_CHECKSIG`
- Unlocking script:  
`<push signature> <push pubkey>`

Such an upgrade would not really be necessary, because an equivalent could be implemented as redeem script and hidden "inside" the P2SH32 hash, call it a pay-to-public-key-script-hash (P2PKSH) address, like so:

- Locking script:  
`OP_HASH256 OP_DATA_32 redeem_script OP_EQUAL`
- Redeem script:  
`OP_DATA_33 pubkey OP_CHECKSIG
- Unlocking script:  
`<push signature> <push redeem_script>`.

Either way, wallets would have to process a list of keys and compute a 32-byte hash and address corresponding to each key, but address generation would be slightly different.
Total size of prevout + input would be the same in either case:

- P2PKH32 address (37 bytes):  
`0x76aa20 || hash256(pubkey) || 0x88ac`
- P2PKSH32 address (35 bytes):  
`0xaa20 || hash256(0x21 || pubkey || 0xac) || 0x87`

Spending input script would also be slightly different:

- P2PKH32 spend (66 + 34 bytes):  
`<push signature> <push pubkey>`
- P2PKSH32 spend (66 + 36 bytes):  
`<push signature> <push (0x21 || pubkey || 0xac)>` 

Note: `||` indicates byte concatenation.

Both would require support by applications such as wallets, and both would have the same transaction (input+output) size.
The P2PKSH32 option has some advantage in that it would make the address relatively smaller and in that it would make all 32-byte outputs indistinguishable from each other.

* * *

Links:

*   Repository link of this announcement: [GitLab](https://gitlab.com/bitcoin-cash-node/announcements/-/blob/master/2022-06-09_bitcoin_cash_pay_to_script_hash_p2sh_past_present_and_future_EN.md)
