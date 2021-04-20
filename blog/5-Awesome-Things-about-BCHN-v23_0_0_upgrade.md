---
layout: layout.html
---

<% set('title', '5 Awesome Things about BCHN v23.0.0 upgrade') %>
<% set('date', '19 April 2021') %>
<% set('author', 'Bitcoin Cash Node Team') %>

In this article we share five exciting things about the latest BCHN release (v23.0.0).

## #1 - It strengthens the network upgrade on May 15, 2021

This network upgrade is important, even though it does not change what are known as "consensus rules", it does bring significant changes which depend on coordination within the infrastructure.

The v23.0.0 is BCHN's contribution to that effort, and includes some changes which only activate on May 15, 2021:

* removing the limit on unconfirmed transaction chains

* enabling multiple OP_RETURNs on the network (making them "standard")

The first one is a change that has long been requested and anticipated by businesses whose use cases depend on many small transactions, performed using 0-conf. In these use cases, customers or users are likely to perform transactions that build on one another, forming a long chain that can be confirmed as a group in a subsequent block. (Sometimes, only part of that chain is confirmed, leaving the rest of the chain in the mempool, waiting to be confirmed later - but since BCH has ample block space, miners will be able to confirm very long chains from May 15 onwards.)

The second is a change which will help those who build token applications, such as new auction protocols, combining SLP transactions together with other SLP-based protocols, etc.

Because these are both changes that affect which transactions are regularly propagated across the network, it is important to activate them together on May 15.

Both mining nodes and other "relay" BCHN nodes should upgrade to make the transition to these new network rules a smooth one.

## #2 - New feature: Double Spend Proofs

Double Spend Proofs are a new feature in BCHN v23.0.0 that will help provide the infrastructure for more reliable merchant use of Bitcoin Cash.

Several nodes have agreed on a common specification and have implemented a new network message to pass around proofs of double spend attempts if they detect them.

Other software, such as Fulcrum SPV server, can build on these message to provide double spend notifications to wallet software.

The more this feature is available on the infrastructure layer, the sooner we can see more wallets integrated double spend alerts, and it becomes safer to use Bitcoin Cash for everyday purchases in brick and mortar as well as online shops.

By upgrading your BCHN node to v23.0.0, you are helping to strengthen the protection of those receiving payments in BCH, which will bring about more confidence in the network and more adoption as a payment system.

## #3 - You can filter out useless connections from unclean forks

The BSV and ABC forks did not cleanly separate themselves from other Bitcoin Cash nodes, which is why you still see occasional connections from their network nodes if you are running a BCH node.

In BCHN v23.0.0 you can use the -rejectsubversion option to block such nodes when they try to connect.

This frees up connection slots on your BCHN node so that other useful nodes (like BCHUnlimited, BCHD, Bitcoin Verde, Flowee, Knuth and other BCHN peers) can connect to you and use those slots.

## #4 - (miner, pool or other economic nodes) Soft limit increase + RPC availability

The BCHN software has been tested to increase the mining soft limit to 8MB (the hard limit default stays at 32MB). This means by default, generated block templates can include more transactions, earning you more money. Of course it is unlikely that you do not already customize your blockmaxsize setting, but we thought we should mention it anyway.

We also must inform you that if you are a miner, a pool or other economic node (e.g. exchange) using BCHN, this upgrade to v23.0.0 is mandatory.

The v22.x.0 versions will disable RPC calls on May 15, 2021 and would require a special parameter to override and continue on the old rules.

So please upgrade to v23.0.0 well in advance!

## #5 - Assorted bug fixes and improvements

There are many small fixes and improvements to our code and also to the graphical user interface. We believe that this new version is more efficient in CPU and memory resources, than v22.x.0. We have tested it extensively, including longer term operation on the main network, ahead of this release.

You can find our latest release BCHN v23.0.0 in the following locations:

* https://bitcoincashnode.org

* https://github.com/bitcoin-cash-node/bitcoin-cash-node/releases/tag/v23.0.0

* https://download.bitcoincashnode.org/releases/23.0.0/

Please contact us via our support channels (Slack, Telegram, GitLab) if you experience any difficulties.

We look forward to continuing to provide the BCH network with high quality node software.

The Bitcoin Cash Node team
