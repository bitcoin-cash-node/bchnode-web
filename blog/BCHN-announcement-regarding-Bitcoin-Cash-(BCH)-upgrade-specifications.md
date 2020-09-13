---
layout: layout.html
---

<% set('title', 'BCHN announcement regarding Bitcoin Cash (BCH) upgrade specifications') %>
<% set('date', '25 March 2020') %>
<% set('author', 'Bitcoin Cash Node Team') %>

Translations: - [中文](BCHN客户端关于BCH5月份升级的技术规范公告) - [português](Anúncio-d-BCHN-sobre-as-especificações-de-atualização-do-Bitcoin-Cash-BCH-Portuguêss)

Today, the lead maintainer of Bitcoin Cash Node took a technical step to address an important issue relating to the project's need for an accurate specification of its consensus rules for the 15 May 2020 network upgrade.

### Background on the Bitcoin Cash network upgrades and specification

Since its creation in 2017, Bitcoin Cash has gone through regular network upgrades. These upgrades should be fully specified well in advance, to allow everyone to agree on, then implement and test the necessary changes.

For this reason, there is a "feature freeze" three months before a network upgrade. By that date, all consensus rule changes for the upgrade are supposed to be completely specified, reviewed and accepted.

### The feature freeze for the May upgrade was on 15 February.

_More than two weeks past that freeze date_, there has been an inclusion of the so-called "Infrastructure Funding Proposal" (IFP) - a highly controversial consensus rule change which impacts the economic incentives of Bitcoin Cash. Not only was this feature strongly opposed by many in the community, it is _not accepted by any other clients than Bitcoin ABC_, who appear to be treating the specification as their sole property.

While strong opposition to the IFP has been expressed by the community, all protests about this unwanted feature have been ignored by the maintainers of the bitcoincash.org website which is incidentally hosted in the same repository that includes the upgrade specifications.

BCHN is committed to reducing the risk of a chain split by providing node software which does not include the IFP. Given this unacceptable treatment of the common BCH specification, **Bitcoin Cash Node is forced to maintain its own version** of the upgrade specifications to accurately reflect the consensus rules of its software (absence of IFP equals no change to current BCH protocol).

### Location of our upgrade spec repository

The repository reflecting the protocol upgrade specifications as implemented or planned by Bitcoin Cash Node (BCHN) can be found at

*   [https://gitlab.com/bitcoin-cash-node/bchn-sw/bitcoincash-upgrade-specifications.git](https://gitlab.com/bitcoin-cash-node/bchn-sw/bitcoincash-upgrade-specifications.git)

### Further notes about the BCHN upgrade specifications

At the time of writing, the only specification differences to bitcoincash.org were:

*   removal of inaccurate element: Infrastructure Funding Plan (IFP)

*   increase of May 2020 specification version number to 1.0 (no longer DRAFT)

Please consult the [README.md](https://gitlab.com/bitcoin-cash-node/bchn-sw/bitcoincash-upgrade-specifications/-/blob/master/README.md) file in the above repository for up-to-date status.

No other changes to specification are planned by BCHN for May 2020.

The specification in this repository is not considered "prescriptive" for anyone besides the BCHN project.

It is considered descriptive and matches the upgrades planned by BCHN, and authoritative only for our project until such time as a good place can be agreed by the majority of BCH client projects for a common home to such "delta" upgrade specifications.

The upgrade specifications are to be considered in the context of the overall Bitcoin Cash specification that is being developed (see e.g. [https://reference.cash](https://reference.cash)).

### Future plans

We hope that a shared, collaboratively managed repository for Bitcoin Cash protocol specification, including changes proposed for the regular upgrades, can be established soon.

The Bitcoin Cash Node maintainer has contacted lead developers of other BCH full node clients to discuss such a possibility.

_Cordially,_

The Bitcoin Cash Node team.
