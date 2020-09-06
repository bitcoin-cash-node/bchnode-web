---
layout: layout.html
---

<% set('title', 'Bitcoin Cash Node 2020: plans for May upgrade and beyond') %>
<% set('date', '22 March 2020') %>
<% set('author', 'Bitcoin Cash Node Team') %>


This is the first of a series of [Bitcoin Cash Node](https://bitcoincashnode.org/) project announcement posts that will outline our plans for 2020, both in the short term (May) and looking ahead a bit further (November).

Bitcoin Cash Node is intended for professional use by mining pools, exchanges and other businesses with mission-critical infrastructure building on Bitcoin Cash (BCH).

In March, we intend to release a series of further announcements with more focused information aimed specifically at these key user groups. The following general announcement is addressed to all prospective Bitcoin Cash Node users.

* * *

### Upcoming Bitcoin Cash upgrade on 15 May 2020

<figure class="text-center">
    <img class="rounded img-fluid" src="https://rcimg.net/images/11af0b52/NmChpaFVu59HRq3WyG4zGRiKOzcVZbGqXHhSxFDk.png">
</figure>

For the coming upgrade on 15 May 2020, Bitcoin Cash Node will provide:

<blockquote>

"_a safe and professional node implementation that will neutrally follow the longest chain without contributing to the risk of a chain split_"

> - [original Bitcoin Cash Node release announcement, February 20, 2020](https://read.cash/@freetrader/bitcoin-cash-node-003b2381)

</blockquote>

To recap, we implement the `OP_REVERSEBYTES` and SigChecks features of the Bitcoin Cash network upgrade which were [specified at the cut-off date of 15 Feb 2020](https://github.com/bitcoincashorg/bitcoincash.org/pull/444/commits/98d79b6ad7a23e5aafab1dffd570388400c5e210):

*   [OP_REVERSEBYTES](https://github.com/bitcoincashorg/bitcoincash.org/blob/master/spec/2020-05-15-op_reversebytes.md) specification

*   [SigChecks](https://github.com/bitcoincashorg/bitcoincash.org/blob/master/spec/2020-05-15-sigchecks.md) specification

Our node is constructed to safely follow the longest chain during the upgrade, by accepting blocks regardless of whether they vote for the IFP or not.

The client does not include any rule activation based on BIP9 or similar voting. Re-org protection remains included and configured with the same default values as the ABC client.

We intend to make no further changes that require consensus for May, but focus on reducing defects and improving performance, stability and user-friendliness until then. It is likely that we will issue an _optional_ minor release providing such enhancements before May.

Generally, we commit to providing stable interfaces across major releases.

### Preamble: Meeting our team

<figure class="text-center">
    <img class="rounded img-fluid" src="https://rcimg.net/images/11af0b52/MT3lsI46DQ9LTa4AO14xu7Pb3FZikELITvlaShB6.jpeg">
</figure>

Our team includes a number of seasoned Bitcoin professionals, including software developers with many years of experience, who are committed to delivering a C++ node software that is suitable for the most demanding business environments (mining, pools, exchanges) yet can also be set up with minimal effort by novice Bitcoin Cash users.

**Our project has requested to conduct an Ask-Me-Anything (AMA) session on the popular Reddit forum /r/btc later this week**, where our [lead developer](https://read.cash/@freetrader/) and other team members will be on hand to answer your questions about the project and how we see the future of Bitcoin Cash.

### Our work plan ahead of the May upgrade

<figure class="text-center">
    <img class="rounded img-fluid" src="https://rcimg.net/images/11af0b52/DDP4gOeDQMuSkfND0ito1bOYMtQoZjS8le2DQ1zg.jpeg">
</figure>

Since the software launch on 27 February 2020, the team has set up an efficient Continuous Integration (CI) pipeline and has begun reviewing the existing [code quality checks](https://gitlab.com/bitcoin-cash-node/bitcoin-cash-node/-/merge_requests/53) so that they can be substantially refined and tightened as development proceeds.

The lead developer is pursuing the use of additional static analysis tools to reduce the risk of software defects. We will keep you informed about developments in that regard in subsequent posts.

Since the scope for the May release has been decided, the Bitcoin Cash Node team is now focusing on the following items:

**<u>Software development side</u>**

*   Ensuring that project user documentation is up to date and correct (we have already fixed a number of [issues](https://gitlab.com/bitcoin-cash-node/bitcoin-cash-node/issues/24) there).

*   Completing the missing specification of the automatic finalization feature (aka "rolling checkpoints") introduced by Bitcoin ABC - a _specification gap_ which is consensus relevant and poses an obstacle to other client implementation accessing the Bitcoin Cash mining arena

*   Putting in place a development process that is completely open and inviting to the public and new developers, testers and other professionals and hobbyists who want to help Bitcoin Cash Node. We believe in "_do not trust, verify_" !

*   Identifying existing [gaps in software tests](https://gitlab.com/bitcoin-cash-node/bitcoin-cash-node/issues/35) as well as inadequacies of the verification tools and methods, and formulating appropriate plans to improve the quality assurance.

*   Monitoring Bitcoin Core and Bitcoin ABC projects for [backports](https://gitlab.com/bitcoin-cash-node/bitcoin-cash-node/-/merge_requests/48) that Bitcoin Cash Node might need. We intend to formalize this process more - at the moment backports occur at the discretion of our senior developers, and anyone can raise an issue on our [Gitlab tracker](https://gitlab.com/bitcoin-cash-node/bitcoin-cash-node/issues) to request specific backports.

*   Setting up more efficient reproducible build and release processes

*   Revising our project infrastructure (seeders, seeds) and looking into setting up better file hosting for our [release packages](https://github.com/bitcoin-cash-node/bitcoin-cash-node/releases)

*   Setting up continuous deployment of our project through Gitlab / Docker integration with a view to setting up additional testing, external to Gitlab.

**<u>Organizational / project management side</u>**

*   Establishing our support and contact process

*   Defining our Responsible Disclosure process

*   Establishing an accountable and transparent process for funding continued maintenance and development of Bitcoin Cash Node. So far we have set up a 3-of-5 [multi-signature wallet with a main donation address](https://bitcoincashnode.org/) for general funding of operations, including personnel, equipment and contracting. We appreciate donations, but will also have further announcements on how we intend to participate in crowd-funding activities and potentially, development sponsorship engagements with industry.

*   Defining further roles that the project seeks to establish, such as professional liaison with key users of our software and engagement with wider Bitcoin Cash user base. We intend to be responsive to the requirements of the Bitcoin Cash ecosystem.

*   Evaluating the amount of personnel available for the planned tasks and crafting an appropriate budget for the upcoming fundraiser.

*   Help establish better ecosystem-wide processes so that the details and priorities of the common [Bitcoin Cash specification](https://reference.cash/) and roadmap are responsive to real ecosystem needs and _evidence-based_ research.

**<u>Proposed Research</u>**

*   We are starting an evaluation to improve the difficulty adjustment algorithm (DAA) in order to reduce variance of the block confirmation time. Much research has already been done in this field. We will not change DAA validation rules in May. However, we want to proactively look at possible improvements that might be needed as long as Bitcoin Cash has a relatively low hashrate compared to BTC.

*   UTXO/[UtreeXO](https://eprint.iacr.org/2019/611.pdf) commitment as a critical step in scaling, and to enable faster synchronization as well as fast Simplified Payment Verification (SPV)

*   [Merklix tree](https://blog.vermorel.com/journal/2019/1/9/merklix-tree-for-bitcoin.html) use for more efficient synchronization, especially in weak-block schemes.

*   Evaluation of adaptive blocksize algorithms under various scenarios is planned as a research project after other scaling improvements are in place.

We plan to issue advice to pools, exchanges and other wallet users ahead of the Bitcoin Cash upgrade in May to recommend certain operational procedures including switchover and switchback for those who have been using Bitcoin ABC until now and need to take operational steps to ensure a smooth upgrade.

### Looking toward the November upgrade

<figure class="text-center">
    <img class="rounded img-fluid" src="https://rcimg.net/images/11af0b52/yLAn4vlNyUapw1q4kIitoxRPuYwlMFRK9ITR3pcd.jpeg">
</figure>

Bitcoin Cash has established - through five successful upgrade cycles - that hard fork upgrades are valuable. Parts of the industry have communicated a desire to move to a more ecosystem-friendly schedule of a one-year upgrade cycle that leaves more room for research and coordination.

The "automatic replay protection" feature that is currently active on the network in ABC clients forces another software update by 15 November 2020.

Therefore, we intend to work together with all stakeholders to ensure a successful upgrade in November 2020 as well.

As ecosystem-wide decision processes are established, future schedules may need to be reassessed - many have expressed that the current semi-annual upgrade schedule creates difficulties in adoption and operational cost.

There are a number of low-contention improvements already suggested for the client software. We will be investigating the feasibility of these in collaboration with other teams.

**Consensus relevant** (or quasi-consensus):

*   UTXO commitments for faster synchronization of newly joined network nodes

*   Script improvements (64 bit integers, perhaps `op_txinfo`)

*   DAA upgrade if evaluation results indicate that it is useful

*   Resolving the unconfirmed transaction chain limits in a more permanent way than the current (May 2020) bump of defaults by a factor of two from 25 to 50.

*   Possible adjustments to Child-Pays-For-Parent (CPFP) feature (relates to above)

*   Continue supporting research on pre-consensus techniques such as Avalanche and Storm, objectively presenting their strengths and weaknesses to the community

**Non-consensus work** that Bitcoin Cash Node client implementation can progress independently:

*   Block propagation techniques for scaling (Graphene, Xthinner)

*   Double spend proof work (implemented in Flowee, currently being ported to Bitcoin Unlimited)

*   Secure RPC access for SPV wallets (useful e.g. for Neutrino Wallet to talk to our node software)

We will shortly announce an initiative to more formally engage with key users and the larger user base.

If you have any questions or feel that we omitted something important from our planning list above, please contact the project through any of our communication channels or leave comments in the section below.

Thank you for your support!

— The Bitcoin Cash Node Project

<figure class="image-width-normal">
    <img class="img-fluid rounded" src="https://rcimg.net/images/11af0b52/XZOUQgq2gN9eXUxkgiSzbKEZVRxyXJQ33HcuqqUE.png">
</figure>

* * *

Footnotes:

1.  _This is an official Bitcoin Cash Node project account. Monetary tips to it will be channeled towards the project's main multi-signature funding address, however such transfers need to be done manually at this point and may therefore happen at irregular intervals. Project management will strive to keep the funds kept on the read.cash account to a minimum._

2.  _A markup text version of this announcement post is available in our announcement repository:_  
    [https://gitlab.com/bitcoin-cash-node/announcements/-/blob/master/20200303_bitcoin_cash_node_2020_plans_for_may_upgrade_and_beyond.md](https://gitlab.com/bitcoin-cash-node/announcements/-/blob/master/20200303_bitcoin_cash_node_2020_plans_for_may_upgrade_and_beyond.md)

* * *

Image credits:

*   Lead image and wireframe 'Bitcoin Cash Node' : [Leandrodimarco](https://read.cash/@Leandrodimarco)

*   man jumping: Photo by [Karina Carvalho](https://unsplash.com/@karinacarvalho?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/human?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)

*   female software engineer writing on whiteboard: Photo by [ThisisEngineering RAEng](https://unsplash.com/@thisisengineering?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/clapper-board?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)

*   woman looking out on multiple screens: Photo by [Christina @ wocintechchat.com](https://unsplash.com/@wocintechchat?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/software-installation?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)
