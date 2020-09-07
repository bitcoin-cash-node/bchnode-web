---
layout: layout.html
---

<% set('title', 'BCHN FAQ on November 2020 Bitcoin Cash network upgrade') %>
<% set('date', '5 August 2020') %>
<% set('author', 'Bitcoin Cash Node Team') %>

<div v-pre="">

This is a FAQ specifically on BCHN's position regarding the November 2020 Bitcoin Cash network upgrade and related topics.

It is a document that is expected to incur some revision as we learn about new questions that the ecosystem may have. Please feel free to leave your questions in the comments.

* * *

### 1. What proposal is BCHN backing for November, if any?

BCHN backs the deployment of the aserti3-2d ([ASERT](https://read.cash/@jtoomim/bch-upgrade-proposal-use-asert-as-the-new-daa-8887b9c1)) difficulty algorithm of Mark Lundeberg and Jonathan Toomim for the November upgrade.

### 2. Would you consider a "no-upgrade" for November?

No, we do not support a "no upgrade" for November as we see the correction of the current DAA's problems as critical for the survival of Bitcoin Cash. The ASERT proposal has been evaluated against a wide range of contenders, including the recently announced Grasberg proposal, and has demonstrably outperformed them.

### 3. Does BCHN support the creation of a new coin (i.e. a currency split)?

No. We support a unified Bitcoin Cash ecosystem moving forward on the basis of a well-researched, tested proposal that performs measurably better than the alternatives.

### 4. Is BCHN going to abolish Automatic Replay Protection (aka poison pill)?

The intent of "Automatic Replay Protection" is to avoid un-upgraded nodes causing problems after a planned upgrade. It causes un-upgraded nodes to fork themselves off to a new network at the time of an upgrade.

BCHN has a better way to accomplish the same intent by first ensuring that un-upgraded nodes notify the operator ahead of time, and second simply halting the un-upgraded node at the upgrade. Notification and shutdown are more actionable and save the operator the wasted time and money of mining or accidentally transacting on an empty chain.

### 5. Has anyone asked BCHN to implement historic drift correction?

No. Despite being in contact with pools, exchanges and many other businesses that use and build on Bitcoin Cash, no-one has ever asked BCHN for this feature.

Moreover, the implications (longer block times & reduced mining reward) as recently considered by the ecosystem have shown strong and wide opposition to such a feature which negatively affects many users and would harm the reputation of the network.

* * *

### Links

*   Getting in touch with BCHN:

    *   Website: [bitcoincashnode.org](https://bitcoincashnode.org)

    *   Development & support Slack chat invite link:

        [https://join.slack.com/t/bitcoincashnode/shared_invite/zt-egg3c36d-2cglIrKcbnGpIQFaKFzCWA](https://join.slack.com/t/bitcoincashnode/shared_invite/zt-egg3c36d-2cglIrKcbnGpIQFaKFzCWA)

    *   Telegram: `https://t dot me/bitcoincashnode` (there is a bridge channel to our Slack - sorry about the spaces in the URL, replace them with dots because readcash is not allowing the URL otherwise)

    *   IRC channel: Join [#bchnode](/search?q=%23bchnode) on Freenode (we see messages on our Slack via an IRC bridge channel)

    *   BCH Node WeChat QR code:

<figure class="text-center">
    <img src="/static/img/newsroom/wechat-qr.jpg" class="img-fluid rounded w-50">
</figure>

*   Logs of our development Slack: [http://logs.bchnode.org/](http://logs.bchnode.org/)

*   Main development repository on GitLab:

    [https://gitlab.com/bitcoin-cash-node/bitcoin-cash-node](https://gitlab.com/bitcoin-cash-node/bitcoin-cash-node)

*   Easy download link via our website:

    [https://bitcoincashnode.org/download.html](https://bitcoincashnode.org/download.html)

*   Full releases on Github:

    [https://github.com/bitcoin-cash-node/bitcoin-cash-node/releases](https://github.com/bitcoin-cash-node/bitcoin-cash-node/releases)

*   Donation address: [https://bitcoincashnode.org/#donate](https://bitcoincashnode.org/#donate)

*   Follow us on Twitter: [https://twitter.com/bitcoincashnode](https://twitter.com/bitcoincashnode)
