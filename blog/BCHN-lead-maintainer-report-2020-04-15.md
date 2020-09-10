---
layout: layout.html
---

<% set('title', 'BCHN lead maintainer report 2020-04-15') %>
<% set('date', '16 April 2020') %>
<% set('author', 'freetrader') %>


I want to open by thanking everyone who supports Bitcoin Cash Node (BCHN) and makes it possible for us to begin a new chapter in evolving the Satoshi codebase that we inherited from Bitcoin ABC.

There are two joyful items of news for me today.

1.  Firstly, BCHN has, in the first week of April, wrapped up its [Flipstarter node campaign proposal](https://gitlab.com/bitcoin-cash-node/bchn-project-management/bchn-pm-public/-/blob/master/finance/funding/campaigns/2020-q2-flipstarter/pdf/Bitcoin_Cash_Node_Flipstarter_Funding_Proposal_v1_1.pdf), and from what I heard these crowdfunding campaigns will be kicking off shortly. The proposal is available in [English](https://gitlab.com/bitcoin-cash-node/bchn-project-management/bchn-pm-public/-/blob/master/finance/funding/campaigns/2020-q2-flipstarter/pdf/Bitcoin_Cash_Node_Flipstarter_Funding_Proposal_v1_1.pdf) and [Chinese](https://gitlab.com/bitcoin-cash-node/bchn-project-management/bchn-pm-public/-/blob/master/finance/funding/campaigns/2020-q2-flipstarter/pdf/Bitcoin_Cash_Node_Flipstarter_Funding_Proposal_v1_1_CN.pdf) (thank to [imaginary_username](https://read.cash/@im_uname/) for translating, and to [emergent_reasons](https://read.cash/@emergent_reasons/) for holding us to a reasonable standards :)

2.  Secondly, we are on the cusp of releasing a minor roll-up version, v0.21.1, that delivers what we have been working on since our initial release on 27 February. As promised, we are sticking to our deadline of 15 April, and have tagged the release today and I have the first matching reproducible builds. As you will be able to see from the [Release Notes](https://gitlab.com/bitcoin-cash-node/bitcoin-cash-node/-/releases/v0.21.1), it contains a lot of improvements, but <u>it remains</u> **<u>optional to install</u>** <u>– there are no consensus changes that are urgent for the May upgrade</u>, although I would recommend everyone to upgrade if only for the various little bug fixes and all-round improvements.

In this issue of my report, I have added a new section: “[_Issues on which BCHN seeks feedback_](https://read.cash/@freetrader/bchn-lead-maintainer-report-2020-04-15-449fc115#issues-on-which-bchn-seeks-feedback)”. More explanation about that section later on.

### Project uptake

Our project thanks [Bitcoin.com](https://bitcoin.com) for steadfastly supporting us on chain. Thank you, the actions that really matter are those that are on the blockchain.

Kudos to SBI Crypto too- we noticed you are back mining BCH with and indicating support for us. Thanks for continuing to support for BCHN !

Current stats of signaling support are 52/1000 recent blocks on [coin.dance](https://cash.coin.dance/blocks) and 5% over voting period 628993 - 631008(2016 blocks) on [https://bitcoincash.network/voting/](https://bitcoincash.network/voting/) .

Our network node numbers are stable (55 at time of writing according to coin.dance).

NOTE: _Not that node numbers matter much in terms of blockchain consensus, but it would be nice we had a more visible share of that metric. I appreciate everyone who runs a node to show their support._

_Do not be discouraged from running your own node if you have an interest in Bitcoin Cash. Although most people do not need to run full nodes, for now, it is inexpensive and provides a good way to learn about the software and gain some hands-on experience if you like tinkering with the protocol’s features. In the future it may become more difficult if the hardware or network requirements rise._

### Financial overview

As of block 630966 , the project’s current wallet balance is 143.96420253 BCH, an increase of 0.72729636 BCH from the last report. Thank you to all who donated to us.

There was only one payout transaction since last time:

*   a payment on 3 April 2020 for Chinese translation of the last maintainer report. Total expense: -0.24095885 BCH.

I have a feeling I will look back someday with nostalgia at how little financial activity there was to report in the early days of this project. 😊

#### Crowdfunding outlook

Our [Flipstarter campaign](https://gitlab.com/bitcoin-cash-node/bchn-project-management/bchn-pm-public/-/blob/master/finance/funding/campaigns/2020-q2-flipstarter/pdf/Bitcoin_Cash_Node_Flipstarter_Funding_Proposal_v1_1.pdf) is configured to transfer its output funds - assuming its target is reached - into the project’s multi-signature donation address [bitcoincash:prnc2exht3zxlrqqcat690tc85cvfuypngh7szx6mk](https://blockchair.com/bitcoin-cash/address/prnc2exht3zxlrqqcat690tc85cvfuypngh7szx6mk) . Of course, since it is based on a Kickstarter-like model of assurance contract, the campaign, which starts very soon and according to my information will last about 4 weeks, will either succeed for the total amount (978 BCH) or will yield 0.

I ask people who wish to donate to us during the time of the Flipstarter campaign (April – May), to _preferentially do so using Flipstarter_, because this helps our project the most towards achieving the funding goal which will enable us to implement our development goals. I will post the link to our campaign page where one can donate, as soon as it is published (not in our hands!)

### Project work items update

Since initial release:

*   [Issues](https://gitlab.com/bitcoin-cash-node/bitcoin-cash-node/-/issues): 76 raised, 39 closed, 37 open

*   [Merge Requests](https://gitlab.com/bitcoin-cash-node/bitcoin-cash-node/-/merge_requests): 151 raised, 130 merged, 15 closed (read: rejected or aborted), 6 open

Since last maintainer report (2020-03-31):

*   [Issues](https://gitlab.com/bitcoin-cash-node/bitcoin-cash-node/-/issues): +10 raised, +12 closed, +-2 open

*   [Merge Requests](https://gitlab.com/bitcoin-cash-node/bitcoin-cash-node/-/merge_requests): +18 raised, +17 merged, +3 closed, -2 open

More detail on work items:

**Code optimization**:

*   Performance improvements for JSON RPC calls through optimization of Univalue have been included in release 0.21.1.

**Documentation updates**:

*   A large amount of document updates will now finally be available with release 0.21.1\. A list of _new_ documents is included in the release notes, but the list of improved documents overall is even more extensive. A special thank you to our contributors who have worked on improving the documentation during the last month and a half.

    *   [xversionmessage.md](https://gitlab.com/bitcoin-cash-node/bitcoin-cash-node/-/blob/master/doc/xversionmessage.md) : (protocol) xversion / extversion draft specification

    *   [ninja_targets.md](https://gitlab.com/bitcoin-cash-node/bitcoin-cash-node/-/blob/master/doc/ninja_targets.md) : (development) describes build system targets

    *   [bchn-gitlab-usage-rules-and-guidelines.md](https://gitlab.com/bitcoin-cash-node/bitcoin-cash-node/-/blob/master/doc/bchn-gitlab-usage-rules-and-guidelines.md) : (process) rules for working on BCHN

    *   [release-notes/release-notes-0.21.0.md](https://gitlab.com/bitcoin-cash-node/bitcoin-cash-node/-/blob/master/doc/release-notes/release-notes-0.21.0.md) : previous version release notes

    *   [build-unix-arch.md](https://gitlab.com/bitcoin-cash-node/bitcoin-cash-node/-/blob/master/doc/build-unix-arch.md) : (build, refactor) split out from [build-unix.md](https://gitlab.com/bitcoin-cash-node/bitcoin-cash-node/-/blob/master/doc/build-unix.md)

    *   [build-unix-deb.md](https://gitlab.com/bitcoin-cash-node/bitcoin-cash-node/-/blob/master/doc/build-unix-deb.md) : (build, refactor) split out from [build-unix.md](https://gitlab.com/bitcoin-cash-node/bitcoin-cash-node/-/blob/master/doc/build-unix.md)

    *   [build-unix-rpm.md](https://gitlab.com/bitcoin-cash-node/bitcoin-cash-node/-/blob/master/doc/build-unix-rpm.md) : (build, refactor) split out from [build-unix.md](https://gitlab.com/bitcoin-cash-node/bitcoin-cash-node/-/blob/master/doc/build-unix.md)

**Quality assurance**:

*   In v0.21.1, Calin Culianu fixed several code quailty issues that were detected using PVS-Studio static analyzer.

*   We fixed several other compiler warnings and some Python code static check issues. Details can be found in the ‘Code quality’ section of the Release Notes for v0.21.1.

**Creation of accurate May upgrade specifications for our project:**

*   No further changes have been made to the May upgrade specification so far. I am monitoring some discussions about the SigChecks function and the reporting of SigOps / SigChecks via the getblocktemplate RPC call. Related Issues are [#42](/search?q=%2342), [#70](/search?q=%2370), [#71](/search?q=%2371), which link to Github issues raised on the bitcoincash.org repository.

**Public Consultation System (PCS):**

*   I am still engaged in evaluating the feedback, due to time constraints imposed by the Flipstarter campaign kickoff, other urgent project management work and the release preparations for 0.21.1, a publication of results will only be possible in the next two weeks.

**Repository for BCHN Project Management:**

*   [Team information data section](https://gitlab.com/bitcoin-cash-node/bchn-project-management/bchn-pm-public/-/tree/master/team) is slowly taking shape! This information is used to feed our [website’s team page](https://bitcoincashnode.org/team). If you have not seen it yet, have a look! We have 9 entries listed up to now and I encourage any project contributors not yet listed to provide some short profile information and a picture to get listed. Pseudonymous contributors are welcome in our project and also on our team page. We judge contributions to our project on their technical merit and not by who submitted them.

*   The April 2020 flipstarter campaign data files (English and Chinese versions of proposal and abstract) have been added to our [campaign section](https://gitlab.com/bitcoin-cash-node/bchn-project-management/bchn-pm-public/-/tree/master/finance/funding/campaigns/2020-q2-flipstarter). The proposal is extensive and instead of going into much detail in this post, I might talk about it in a separate article in a while, once the crowdfunding has kicked off.

### Ongoing inter-project collaboration activities](#ongoing-inter-project-collaboration-activities)

#### Xversion (BU)

`Xversion` is an extended 'version' message protocol first introduced by Bitcoin Unlimited. Network peers can use it to announce their protocol capabilities and preferences to each other. This will be highly useful e.g. when deploying new block propagation protocols such as Graphene or Xthinner. Bitcoin Unlimited has already been using this protocol in the past.

Recently I reviewed and accepted a [draft of a revised specification](https://gitlab.com/bitcoin-cash-node/bitcoin-cash-node/-/blob/master/doc/xversionmessage.md) which was submitted to our project by Greg Griffith after initial discussions. I've included this draft specification in our 0.21.1 documentation set so that it can get more reviewing eyeballs before implementation. It is tentatively envisioned to rename the protocol message that will come out from this activity to `extversion` so that existing nodes which support the original `xversion` can fall back to its earlier behaviour.

The overall integration is being tracked on our side via [Issue #45 (Port Xversion from BU)](https://gitlab.com/bitcoin-cash-node/bitcoin-cash-node/-/issues/45).

The specification may still receive some minor updates now that it’s out in the real world (also going up on reference.cash). Greg Griffith from Bitcoin Unlimited will hopefully correct me if I’m wrong, but my understanding is that in the next phase, BCHN works together with him to get that specification implemented in our software, while BU is simultaneously implementing it or has done so already.

Greg has kindly offered to provide some code, and from BCHN side I look forward to working together with him and anyone else from Bitcoin Unlimited to ensure it is fully tested on our side.

#### Xthinner (Jonathan Toomim)

No news to report in this period.

### Issues on which BCHN seeks feedback

It happens in the course of maintaining the software that we come to some point where a decision needs to be made but it seems best to get some input from some part of the ecosystem.

In this new section, which I will include whenever there is something on the table, I will describe any such issues we currently have.

It will serve as a kind of opening dialogue for feedback in the comments section. I'll try to explain what a problem is that we are facing, who we are seeking to hear from on that issue, what the choices are that the project currently sees or faces regarding it, and what we perceive as their benefits and drawbacks. Then I will keep my ears open and listen to your advice. On our repository issue tracker, items which require decision feedback from the ecosystem are identified with a special label (_"HODLGANG"_).

Although sometimes my requests for input may be targeted at specific user groups, anyone is welcome at any time to give me such feedback. I will take responses to such requests of mine and enter them either directly into open issues (where applicable) or into our Public Communication System (PCS) which is a public repository of input we have received from the community. Increasingly, although not exclusively, I will use this system to log feedback and try to develop into something capable of guiding our project's decisions.

**<u>"BIP9-like" code from ABC - keep? / remove? / upgrade ?</u>**

We have a merge request in our system : [number 62, titled "Remove BIP9 support"](https://gitlab.com/bitcoin-cash-node/bitcoin-cash-node/-/merge_requests/62).

[BIP9](https://github.com/bitcoin/bips/blob/master/bip-0009.mediawiki) is a blockchain signaling mechanism that was historically used to activate soft-forks on Bitcoin BTC.

It was removed from Bitcoin ABC over a period of time between July 2018 - June 2019, as using such signaling for activation of upgrade s was deemed unsafe then, BCH being in a position of relatively low hashpower compared to overall SHA256.

However, in February 2020 Bitcoin ABC re-introduced it in a modified way, lowering the activation threshold from the customary 95% described in BIP9 to merely 66% -- in preparation for the controversial "Infrastructure Funding Plan" (IFP).

Bitcoin Cash Node removed the soft-fork activation of the IFP and related emission of signals, but so far we have not removed the BIP9-like mechanism entirely.

Not surprisingly, there are various opinions on whether to do so or not, resulting in several options forward.

1.  _Option 1 - keep the "BIP9-like" code_. The benefit here is that it is the least amount of effort for now, and could be used either to get back to BIP9 conformance, or extend it to BIP135 conformance (both those would require a bit of work). As it stands, this "BIP9-like" implementation does not conform properly to any BIP (it's not exactly BIP9, and it's not as capable as the more general BIP135 which could have been cleanly configured to handle what ABC wanted to get for the IFP).  
    The folly of triggering consensus changes based on 66% of ~1,5-3% of total SHA256 hashpower has been extensively discussed, and makes use of this BIP9-like unsuitable at this time and for the foreseeable future.

2.  _Option 2 - remove the "BIP9-like" code_. This would be very little effort - it is already implemented in the cited Merge Request, although that might need to be rebased on current state of the software. The downside is that if we want or need to follow some rule activation that premises on this kind of signaling, we'd have to add it back.  
    However, I'd argue that is highly unlikely, and quite manageable even if it did occur (the code is not that much and quite easy to separate out or add back in).  
    Whereas keeping the ABC code in its current form results in BCHN carrying something around which is not actively used, and we do not have any requirement to use it for the IFP or any other planned upgrade.  
    Retaining code around which is not required is bad from a code quality point and maintenance view. Such code can lead to programming errors (the risk is somewhat low here, but nevertheless). It bloats not only the source code but also the resulting executables, even if it is to a small degree. Personally, I am highly in favor of removing this code. I think that _if_ we need a triggering mechanism like that, it will not be in the near term (next 6 months).  
    I'd feel comfortable with thinking of using such a mechanism if BCH had supermajority of SHA256 hashpower. If and when that might happen is something no-one can say for sure. Does it make sense to keep that code in until such undefined time? I'd argue it is much safer to remove it now and re-introduce whatever finds consensus later on, because we are talking here about a mechanism used primarily to activate consensus changes!

3.  _Option 3 - upgrade it to BIP9._ This seems possible with little effort, but the benefit is still unclear. BIP9 is very rigid in terms of its threshold requirements and even in situations of majority hashpower, it only takes over 5% of the coin's relative hashpower to veto a consensus change.

4.  _Option 4 - upgrade it to full BIP135 and configure in the same way that ABC's "BIP9-like" was configured._ This is certainly more effort, as BIP135 is more complex than BIP9\. However, they function in the same basic way, and BIP135 is no more safe in the current hashpower situation. So again there is no clear benefit except being able to claim some conformance and gaining some flexibility for the future.

I've put off making a decision for 0.21.1, because I did not find a good way to gather feedback on this question from more users and even potential users. Hopefully, raising such questions in reports will help me get more opinions on which to reach decisions, so that we don't need to repeat the cycle of taking things out, putting them back, taking things out etc.

**<u>Gitian building on Fedora - to maintain or not to maintain ?</u>**

In [Issue #76](https://gitlab.com/bitcoin-cash-node/bitcoin-cash-node/-/issues/76), raised today, it was pointed out that the documentation for Gitian builds (reproducible building) does not work on the Fedora distribution of Linux.

I don't see much benefit in keeping Fedora instructions for reproducible builds from upstream around if it is not adequately maintained. But I do not like throwing documentation away without asking first if anyone is interested to maintain this specifically. If people are using it, please get in touch with me, I'd like to find out _how_ you currently do gitian builds on Fedora and if your input can bring the document up to speed. Even better would be to find someone who would be willing to invest a bit of effort to keep maintaining this document as long as they use gitian on Fedora.

Maintaining it ourselves is not so easy, we need to find someone with a host system running Fedora on which they could experiment to correct the documentation -- if that is possible (unlikely but theoretically it could be unmaintained due to a limitation that entered Fedora). It seems like we should rather devote efforts to other things, since Debian support for gitian already makes reproducible builds a possibility on a variety of Debian derivatives.

### Coming up

In the next day or so, we release our minor update 0.21.1 . I am quite excited to finally get this out the door. It took a while longer than I wanted to, but this is sometimes the case when everyone is scrambling on a variety of projects.

After release we are going to add benchmarks for the JSON improvements to measure them with larger block sizes.

I'll also be able to devote more time to catching up with backports and setting up vital project management plans, checklists, CI/quality mechanisms and starting off work on closing the 'rolling checkpoints' specification gap.

Then of course there is our node campaign crowdfunding which all of us are eagerly looking forward to. A ton of gratitude to the hard-working team at Flipstarter who are making all that possible.

Going over our flipstarter proposal could fill a post of its own. I hope reading the proposal already answers most questions, but if you have any left over I'll try to answer them in the comments.

### How to get in touch with our project - links and resources

*   Website: [bitcoincashnode.org](https://bitcoincashnode.org)

*   Development & support Slack chat invite link (expires on May 8):  
    [https://join.slack.com/t/bitcoincashnode/shared_invite/zt-dpfqi4o2-kw05DhMfYVEOWAiOg_z3Yg](https://join.slack.com/t/bitcoincashnode/shared_invite/zt-dpfqi4o2-kw05DhMfYVEOWAiOg_z3Yg)

*   Telegram: [t.me/bitcoincashnode](https://t.me/bitcoincashnode) (there is a bridge channel to our Slack)

*   IRC channel: Join `#bchnode` on Freenode (we see messages on our Slack via an IRC bridge channel)

*   Logs of our development Slack: [http://logs.bchnode.org/](http://logs.bchnode.org/)

*   Main development repository on GitLab:  
    [https://gitlab.com/bitcoin-cash-node/bitcoin-cash-node](https://gitlab.com/bitcoin-cash-node/bitcoin-cash-node)

*   Easy download link via our website:  
    [https://bitcoincashnode.org/download.html](https://bitcoincashnode.org/download.html)

*   Full releases on Github:  
    [https://github.com/bitcoin-cash-node/bitcoin-cash-node/releases](https://github.com/bitcoin-cash-node/bitcoin-cash-node/releases)

*   Donation address: [https://bitcoincashnode.org/#donate](https://bitcoincashnode.org/#donate)

*   Follow us on Twitter: [https://twitter.com/bitcoincashnode](https://twitter.com/bitcoincashnode)
