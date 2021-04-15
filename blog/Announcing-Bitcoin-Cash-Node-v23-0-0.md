---
layout: layout.html
---

<% set('title', 'Announcing Bitcoin Cash Node v23.0.0') %>
<% set('date', '14 April 2021') %>
<% set('author', 'Bitcoin Cash Node Team') %>

### Release announcement: Bitcoin Cash Node v23.0.0

The Bitcoin Cash Node (BCHN) project is pleased to announce its major release version 23.0.0.

This release implements the May 15, 2021 network upgrade.  It contains the removal of the unconfirmed transaction chain limits, enabling of multiple OP_RETURN (while keeping the total size limit of data carrier), introduction of Double Spend Proofs (beta), a lifting of the default soft limit for mining to 8MB, and a number of bugfixes and performance improvements.

BCHN users should consider this update as mandatory prior to May 15, 2021.  This is because of the coordination of the new policy rules around transaction chain limits and standardness of multiple OP_RETURN.  The v22.2.0 software will expire some functionality on May 15, and will start to warn about ahead of time, from April 15, 2021 onward.

For the full release notes, please visit:

[https://github.com/bitcoin-cash-node/bitcoin-cash-node/releases/tag/v23.0.0](https://github.com/bitcoin-cash-node/bitcoin-cash-node/releases/tag/v23.0.0)

Executables and source code for supported platforms are available at the above link, or via the download page on our project website at

[https://bitcoincashnode.org](https://bitcoincashnode.org)

For more information about the May 15, 2021 network upgrade, visit

[https://upgradespecs.bitcoincashnode.org/2021-05-15-upgrade/](https://upgradespecs.bitcoincashnode.org/2021-05-15-upgrade/)

We hope you enjoy our latest release and invite you to join us to improve Bitcoin Cash.

Sincerely,

The Bitcoin Cash Node team.
