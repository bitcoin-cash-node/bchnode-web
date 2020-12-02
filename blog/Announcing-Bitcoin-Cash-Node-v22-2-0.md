---
layout: layout.html
---

<% set('title', 'Announcing Bitcoin Cash Node v22.2.0') %>
<% set('date', 'December 2 2020') %>
<% set('author', 'Bitcoin Cash Node Team') %>

## Release announcement: Bitcoin Cash Node v22.2.0

The Bitcoin Cash Node (BCHN) project is pleased to announce its minor release version 22.2.0.

This release implements some interface enhancements and includes a number of corrections and improvements.

Users who are running any of our previous releases are recommended to upgrade to v22.2.0 as part of regular maintenance.

Please note that this release enforces standardness of transactions when operating on testnet4.

Also, the default value of the `maxmempool` configuration option has been changed to a formula: 10 x `excessiveblocksize`, which will slightly increase default memory pool size on mainnet and substantially increase it on scalenet.

For the full release notes, please visit:

[github.com/bitcoin-cash-node/bitcoin-cash-node/releases/tag/v22.2.0](https://github.com/bitcoin-cash-node/bitcoin-cash-node/releases/tag/v22.2.0)

Executables and source code for supported platforms are available at the above link, or via the download page on our project website at

[bitcoincashnode.org](https://bitcoincashnode.org)

We hope you enjoy our latest release and invite you to join us to improve Bitcoin Cash.

Sincerely,

The Bitcoin Cash Node team.
