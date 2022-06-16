---
layout: layout.html
---

<% set('title', 'Announcing Bitcoin Cash Node v24.1.0') %>
<% set('date', '30 May 2022') %>
<% set('author', 'Bitcoin Cash Node Team') %>

### Release announcement: Bitcoin Cash Node v24.1.0

The Bitcoin Cash Node (BCHN) project is pleased to announce its minor release version 24.1.0.

This release implements some interface enhancements (notably TORv3 support) and includes a number of corrections and performance improvements.
Interface changes are fully backward compatible except in these instances:

1. Netmasks that are invalid per RFC 4632 are no longer accepted
2. The `-whitelistrelay` default has been restored to enabled
3. MacOSX users need at least OSX 10.14 (Mojave)

Users who are running any of our previous releases are recommended to upgrade to v24.1.0, except for Mac OSX users who are not able to run 10.14 or later - we ask those to remain on v24.0.0 until they are able to upgrade to Mojave.

For the full release notes, please visit:

[https://github.com/bitcoin-cash-node/bitcoin-cash-node/releases/tag/v24.1.0](https://github.com/bitcoin-cash-node/bitcoin-cash-node/releases/tag/v24.1.0)

Executables and source code for supported platforms are available at the above link, or via the download page on our project website at

[https://bitcoincashnode.org](https://bitcoincashnode.org)

We hope you enjoy our latest release and invite you to join us to improve Bitcoin Cash.

Sincerely,

The Bitcoin Cash Node team.
