---
layout: layout.html
---

<% set('title', 'BCHN lead maintainer report 2020-03-31') %>
<% set('date', '31 March 2020') %>
<% set('author', 'freetrader') %>

Time flies - more than a month has passed since [BCHN](https://bitcoincashnode.org/) v0.21.0 was released, and a little over two weeks since [my last report](https://read.cash/@freetrader/bchn-lead-maintainer-report-2020-03-14-84f2992d). Since then the COVID-19 pandemic has touched us all in different ways, but I hope everyone is taking the necessary precautions, staying as safe and healthy as possible and helping others do the same.

I'd like to make these maintainer reports a bi-monthly occurrence. If we get much busier with developments in the coming weeks, I might only have time for a monthly report myself, with other reports (e.g. BCHN financial statements) possibly being done separately.

### [Project uptake](https://read.cash/@freetrader/bchn-lead-maintainer-report-2020-03-14-84f2992d#project-uptake)

Blockchain [signaling](https://bitcoincash.network/voting/) for BCHN decreased -

*   SBI crypto mining on BCH seems to have dropped away to almost nothing, losing us some support. I do not know the precise reason for this removal of hashrate by the pool, but they contributed a fair amount to signaling for our project. I thank them for their past support and hope they can come back. If they do have feedback for our project, contact me!  
    (_Update 2 April: I've heard now, inofficially, that allegedly the drop-off from SBI is due to testing of their pool, and that the intention is to continue signaling for BCHN - this seems good news and we hope they return!_)

*   We lost some signaling from ASICseer pool, who stopped their pool project. They gave me an official statement on the reason:  
    _"ASICseer remains a strong supporter of the BCHN project. However, ASICseer has terminated its pool project due to the broken BCH DAA. The current version of the algorithm allows BTC mining pools to exploit periods of low difficulty by bringing exahashes of foreign hashrate onto the BCH chain, leaving all other honest pools at a competitive disadvantage."_  
    (note: "foreign" here is not talking about nationality, it refers to hashrate which does not originate from miners who care about BCH)

*   Bitcoin.com pool is still signaling support for BCHN. Thank you [Bitcoin.com](https://bitcoin.com/) for your continued support.

Due to the above, the amount of blocks signaling for us has dropped from a high of ~12.5% of BCH blocks in this last 2-week period, to about ~ 5.5% over last 1000 blocks, per [https://cash.coin.dance/blocks](https://cash.coin.dance/blocks) at time of writing.

Our [listening node levels have risen from 42 to 55](https://cash.coin.dance/nodes/bchn) over this time period. This figure does not cover all nodes, since some node operators do not open incoming connections to their nodes.

### [Financial overview](https://read.cash/@freetrader/bchn-lead-maintainer-report-2020-03-14-84f2992d#financial-overview)

Since last report, the project has received funds through its multi-signature donation address [bitcoincash:prnc2exht3zxlrqqcat690tc85cvfuypngh7szx6mk](https://read.cash/@freetrader/bchn-lead-maintainer-report-2020-03-14-84f2992d#bad-link) .  
However, we are on the verge of participating in the Flipstarter node crowd-funding campaign, which may see the addition of further funding addresses earmarked for specific tasks which will be outlined in our funding proposal.

As of today (block [628882](https://blockchair.com/bitcoin-cash/block/628882)), our public wallet, which holds all our funds at the above address, contains **a balance of 143.23690617 BCH**, which represents a **net increase of 2.18412567 BCH** from last time.

There were **three payments made** from our multisig wallet during this last period:

*   2020-03-18: -0.26542268 BCH for two article translations to Chinese (the previous maintainer report, and our 'May 2020 and beyond' plans)

*   2020-03-18: -0.0000048 BCH due to a wallet configuration mistake, the change from the preceding transaction was sent to a new address instead of being returned to the main donation address. We made another transaction costing a small network fee directly afterwards to return the change from `pplgxva6cdkl9ye3par05yspm37jmjpv7vj569rw0a` back to the main address `prnc2exht3zxlrqqcat690tc85cvfuypngh7szx6mk`

*   2020-03-27: -0.03130073 BCH , another re-imbursement for a Chinese translation, this one for announcement of maintaining our own BCH specification (without the IFP parts) for the May 2020 upgrade

The **total expenses** over the period were **-0.29672821 BCH**.

### [Project work items update](https://read.cash/@freetrader/bchn-lead-maintainer-report-2020-03-14-84f2992d#project-work-items-update)

Since initial release:

*   [Issues](https://gitlab.com/bitcoin-cash-node/bitcoin-cash-node/-/issues): 66 raised, 27 closed, 39 open

*   [Merge Requests](https://gitlab.com/bitcoin-cash-node/bitcoin-cash-node/-/merge_requests): 133 raised, 113 merged, 12 closed (read: rejected or aborted), 8 open

Since last maintainer report (2020-03-14):

*   [Issues](https://gitlab.com/bitcoin-cash-node/bitcoin-cash-node/-/issues): +15 raised, +9 closed, +6 open

*   [Merge Requests](https://gitlab.com/bitcoin-cash-node/bitcoin-cash-node/-/merge_requests): +33 raised, +27 merged, +2 closed, +4 open

At the moment, most issues being raised are by contributors to the project who are finding things to fix, and need to track those items. As I remember, there were very few support requests from users (less than 5), and some of those were raised and addressed on our Slack.

With regards to the project's previously announced plans, progress has been made on the following items:

*   **Code optimization**:

    *   BCHN developers have been [looking at the univalue library](https://gitlab.com/bitcoin-cash-node/bitcoin-cash-node/-/issues/51) (originally created by Jeff Garzik, and nowadays maintained by various projects such as Bitcoin Core independently), which is used extensively by RPC calls.  
        It appear significant performance gains through optimization are possible, and some [early promising results](https://gitlab.com/bitcoin-cash-node/bitcoin-cash-node/-/merge_requests/122) been achieved by a collaboration of two BCHN developers (Calin Culianu and BigBlockIfTrue).

*   [**Documentation updates**](https://gitlab.com/bitcoin-cash-node/bitcoin-cash-node/-/merge_requests?scope=all&utf8=%E2%9C%93&state=merged&label_name[]=documentation):

    *   further updates of developer and build related documents

    *   overhaul of UNIX installation documents, splitting out separate documents for Debian-based, RPM-based, Arch Linux and FreeBSD operating systems

    *   finalization of our security [disclosure document](https://gitlab.com/bitcoin-cash-node/bitcoin-cash-node/-/blob/master/DISCLOSURE_POLICY.md), including our security contacts, PGP key, security email address and confirmed disclosure relationships with other projects (see below for more info)

*   **Platform testing:**

    *   FreeBSD platform instructions for GUI build were added and validated, and a failing regression test was fixed. We were able to confirm that all unit and regression tests pass on FreeBSD 12.1.

*   **Quality assurance:**

    *   A static checking pipeline stage has been added to our Continuous Integration (CI). At the moment it runs the same checks as Bitcoin ABC's "linting", but can be extended as we come across more static checking tools that appear useful to our project. A manual run of Clang Static Analyzer has been performed on a recent `master` state (see Appendix A), with no significant issues detected in the application code. In the next weeks I will familiarize myself with other tools that may give more information (I already used Coverity Scan on Bitcoin ABC in the past, but now we also have a [PVS-Studio](https://www.viva64.com/en/pvs-studio/) free license (thanks [Program Verification Systems](https://www.viva64.com/en/team/), your support of open source projects is awesome!)

*   **Creation of accurate May upgrade specifications for our project:**

    *   The protocol upgrade specifications applicable to Bitcoin Cash Node (BCHN) for the coming upgrade can be found at [https://gitlab.com/bitcoin-cash-node/bchn-sw/bitcoincash-upgrade-specifications.git](https://gitlab.com/bitcoin-cash-node/bchn-sw/bitcoincash-upgrade-specifications.git) . I [wrote in my last report](https://read.cash/@freetrader/bchn-lead-maintainer-report-2020-03-14-84f2992d#state-of-bch-specification-repository-amp-ifp-non-consensus) about how our concerns around the IFP were not given room for discussion on the repository used in the past for these topics. Well, now we had to take action. The BCHN project has outlined the events and decisions that led to the creation of this separate set of specifications in our March 25 article entitled '[BCHN announcement regarding Bitcoin Cash (BCH) upgrade specifications](https://read.cash/@bitcoincashnode/bchn-announcement-regarding-bitcoin-cash-bch-upgrade-specifications-c23d7d58)'.

    *   Our specifications for May exclude the IFP consensus changes but are otherwise the same in terms of features.

*   **Public Consultation System (PCS):**

    *   We have gathered community feedback ([25 responses](https://gitlab.com/bitcoin-cash-node/bchn-public-consultation-system/-/tree/master/input/campaigns/202003_BCHN-PCS_initial_survey)) to our March 2020 survey and stored it in our [PCS repository](https://gitlab.com/bitcoin-cash-node/bchn-public-consultation-system). We are beginning to evaluate it (see Appendix B) and will store evaluation outputs in the `output` section of that repository. After some more evaluation I will report some summary results which should be easier to digest. Just reading through the feedback has already been very useful to me in forming a mental picture of the issues that are most important to many users. As we did not receive much feedback from the Chinese community through this, I am considering to launch a separate survey targeted at that part of the Bitcoin Cash community in April, to see if we can get a clearer view of their needs.

*   **Repository for BCHN Project Management:**

    *   A new [public project management repository](https://gitlab.com/bitcoin-cash-node/bchn-project-management/bchn-pm-public) has been created. This repository will be filled with various PM documents related to the project setup and life cycle of BCHN software, its quality control processes, its financial activities including funding campaign materials and more. At this time, some team profile inputs are being collected there to supply the construction of our [Team page on the website](https://bitcoincashnode.org/team). The team page is being filled on a voluntary basis with short biographies and pictures (where available) of our project contributors. This is in response to community feedback that we should represent ourselves and our resumes a bit more personally. I'm looking forward to seeing more of our developers and testers on there soon!

*   **Repository for benchmark data:**

    *   A new [repository for benchmark data](https://gitlab.com/bitcoin-cash-node/bchn-sw/benchmark-data) files has been created, primarily because there is a [need for benchmarks running on larger data files](https://gitlab.com/bitcoin-cash-node/bitcoin-cash-node/-/merge_requests/124) which are not advisable to commit to the main source code repository.

*   **Draft of our upcoming Flipstarter crowdfunding campaign:**

    *   I'm working together with our team on the abstract and [proposal](https://read.cash/@flipstarter/node-teams-lets-raise-the-bar-for-voluntary-funding-campaign-offer-starts-in-4-weeks-90935b0e) text which we will hopefully be able to submit to the [Flipstarter](https://flipstarter.cash) team in the next day or two. Can't give too much away yet as the details are not all final at this time, but it will be out soon anyway, so patience grasshoppers!

### Ongoing inter-project collaboration activities

#### Xversion (BU)

This is being managed on our side via [Issue #45 (Port Xversion from BU)](https://gitlab.com/bitcoin-cash-node/bitcoin-cash-node/-/issues/45). Our current status is that a working agreement on the required adaptation has been reached to make Xversion palatable to BCHN and others, and that BU developer Greg Griffith is going to work on adapting a specification which will then serve as basis for common implementations.

#### [Xthinner (independent, Jonathan Toomim)](https://read.cash/@freetrader/bchn-lead-maintainer-report-2020-03-14-84f2992d#xthinner-independent-jonathan-toomim)

No news to report at this time.

### Security disclosure relationships

In the process of confirming which projects were amenable to forming a security relationship with the "new kid on the block", BCHN, I reached out to multiple projects. The following projects confirmed and we have entered a mutual (reciprocal) disclosure relationship:

*   Bitcoin Unlimited

*   BCHD

*   Flowee

*   Knuth

I believe we have a similar _informal_ understanding at this time with Bitcoin Verde, but I still need to confirm that formally. Congratulations to Josh Green of Software Verde on the birth of his daughter, all the best from me & our project.

Unfortuntely, the following projects did not respond at all to my explicit invitation to form a responsible disclosure relationship with us. I sent them invitation emails on 11 March 2020 to their official security addresses.

*   Bitcoin ABC

*   Bitcoin Core

*   ZCash

Our figurative doors at BCHN remain open to any projects that are closely related (protocol wise) and would like to form a security relationship with Bitcoin Cash Node. Contact us at `security at bitcoincashnode dot org` , or come visit us on our Slack and have a chat.

### Coming up

Our main focus in the next days will be on getting our fundraising campaign into gear, but in parallel I will push a minor roll-up patch release of our project. We are committed to a hard deadline of no later than 15 April, to give at least a full month for users to install and test. Reminder: this will be a completely optional release - users already running BCHN do NOT have to upgrade again before 15 May unless they wish to run our latest software (which we encourage, of course!)

### How to get in touch with our project - links and resources

*   Website: [bitcoincashnode.org](https://bitcoincashnode.org)

*   Development & support Slack chat invite link (expires in 20 days):  
    [https://join.slack.com/t/bitcoincashnode/shared_invite/zt-ctozdnpv-pUknwZpANybRg5xyeKyx8Q](https://join.slack.com/t/bitcoincashnode/shared_invite/zt-ctozdnpv-pUknwZpANybRg5xyeKyx8Q)

*   Telegram: [https://t.me/bitcoincashnode](https://t.me/bitcoincashnode) (there is a bridge channel to our Slack)

*   IRC channel: Join `[#bchnode](/search?q=%23bchnode)` on Freenode (we see messages on our Slack via an IRC bridge channel)

*   Logs of our development Slack: [http://logs.bchnode.org/](http://logs.bchnode.org/)

*   Main development repository on GitLab:  
    [https://gitlab.com/bitcoin-cash-node/bitcoin-cash-node](https://gitlab.com/bitcoin-cash-node/bitcoin-cash-node)

*   Easy download link via our website:  
    [https://bitcoincashnode.org/download.html](https://bitcoincashnode.org/download.html)

*   Full releases on Github:  
    [https://github.com/bitcoin-cash-node/bitcoin-cash-node/releases](https://github.com/bitcoin-cash-node/bitcoin-cash-node/releases)

*   Donation address: [https://bitcoincashnode.org/#donate](https://bitcoincashnode.org/#donate)

*   Follow us on Twitter: [https://twitter.com/bitcoincashnode](https://twitter.com/bitcoincashnode)

* * *

### Appendix A

Output of Clang Static Analyzer test run (clang 8, default checkers):

<figure class="text-center">
    <img src="/static/img/newsroom/2020-03-31/5g1oip4jhY95UWmV1lgiXN3l5pA8njDajCUqUHaH.png" class="rounded img-fluid">
</figure>

The reported code sections were all in the third party libsecp256k1 library which is cryptographic code and likely takes special measures that static analyzers will find objectionable but which have good reasons for being the way they are (e.g. to defend against timing attacks or making extra sure secret data does not leak).

### Appendix B

Preliminary classification of PCS March 2020 survey inputs (up to March 31).

This is a spreadsheet print view of the data in [this file](https://gitlab.com/bitcoin-cash-node/bchn-public-consultation-system/-/blob/master/output/campaigns/202003_BCHN-PCS_initial_survey/202003_BCHN-PCS_initial_survey-input_classification.csv). Further analysis and visualization will be done and presented separately.

<figure class="text-center">
    <img src="/static/img/newsroom/2020-03-31/OQHiTG6V9simg0ozpNfeIUETWje2SRbcXxxr1YFi.png" class="rounded img-fluid">
</figure>

<figure class="text-center">
    <img src="/static/img/newsroom/2020-03-31/cEXN2jch4RT6xRIZ39jiewhE4W9qS2KdqYo91CvJ.png" class="rounded img-fluid">
</figure>

* * *

_Small spoiler_

<figure class="text-center">
    <img src="/static/img/newsroom/2020-03-31/S94aKk27ZSJueUmpDorCOCiBMklNEi5bNl89i0GF.jpeg" class="rounded img-fluid">
</figure>
