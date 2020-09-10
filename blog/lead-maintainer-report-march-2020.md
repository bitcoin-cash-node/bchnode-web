---
layout: layout.html
---

<% set('title', 'BCHN lead maintainer report 2020-03-14') %>
<% set('date', '14 March 2020') %>
<% set('author', 'freetrader') %>

Hello Bitcoin Cash and Bitcoin Cash Node user communities!

More than 2 weeks have passed since the initial release (v0.21.0) of Bitcoin Cash Node, and today I want to take some time to report back to you on what's happened since, and the activities we've been busy on and are working/planning right now.

These reports will hopefully become a much more regular publication as things settle down a bit and we get our project processes up to speed.

### Project uptake

Since release, at least 3 mining pools have mined blocks signaling support of Bitcoin Cash Node (and implying their disagreement with the IFP):

*   pool.bitcoin.com

*   ASICseer

*   SBI Crypto

Several sites have sprung up to monitor adoption of `/BCHN/` signaling miners / pools:

*   [bitcoincash.network/voting/](https://bitcoincash.network/voting/) (at time of writing, 6.9% over last 2016 blocks in period 624961 - 626976)

*   [cash.coin.dance/blocks](https://cash.coin.dance/blocks) has added a diagram over last 1000 blocks, it is at 9,3% at time of writing

Blockchain signaling shows that support for BCHN among hashpower is steadily increasing.

### Financial overview

The project is at the moment collecting funds through its multi-signature donation address bitcoincash:prnc2exht3zxlrqqcat690tc85cvfuypngh7szx6mk

<figure class="text-center">
    <img src="/static/img/newsroom/2020-03-14/n8PD37HFoxJBijpKr86RvNng1rFp9p2GPZBB6x39.png" class="rounded img-fluid">
</figure>

Source: [bitcoincashnode.org/](https://bitcoincashnode.org/)

At the time of writing, this address hold 141.0527805 BCH, and no funds from the wallet have been spent yet except for an initial expenditure shortly after setting it up:

*   -0.00000535 BCH : registration of cashaccount `BitcoinCashNode#59780; 🎈`

An additional amount (1.13385917 BCH) has been received to address 1 (`bitcoincash:pp03e95qz7yene7v4vdx2vfsqx4qsq4wfvw8z3pkjf` of the multisig wallet. This was received from donation funds collected and held on behalf of BCHN by Coin.dance, who requested a dedicated address to which to transfer these holding funds.

There are some funds being donated to the project voluntarily by mining pools using Bitcoin Cash Node.

### Project work items update

First some brief statistics from our [Gitlab repository](https://gitlab.com/bitcoin-cash-node/bitcoin-cash-node):

Since starting:

*   [Issues](https://gitlab.com/bitcoin-cash-node/bitcoin-cash-node/-/issues): 51 raised, 18 closed, 33 open

*   [Merge Requests](https://gitlab.com/bitcoin-cash-node/bitcoin-cash-node/-/merge_requests): 100 raised, 86 merged, 10 closed (read: rejected or aborted), 4 open

_Reminder: we use Gitlab for working repository, Github is just a mirror for our releases and tagged release versions of the code._

With regards to the project's previously announced plans, progress has been made on the following items:

*   **Documentation updates**:

    *   developer / build related documents  
        (gitian, CONTRIBUTING, ninja build docs, renaming in Doxygen top level docs and linking to [https://bitcoindoxygen.art/](https://bitcoindoxygen.art/))

    *   creation of a new document describing our Gitlab working rules and meaning of tags/labels

    *   update of security disclosure policy

    *   removal of obsolete references (Segwit, BIP9, BIP145) on RPC interface help outputs

*   **_"Putting in place a development process that is completely open and inviting to the public and new developers, testers and other professionals and hobbyists who want to help Bitcoin Cash Node"_**:

    *   Thanks to generous help from Alexander Levin from ASICseer, bridges have been established between our development slack and both Telegram and IRC, there is now increased flow of information.  
        Alexander has also helped to set up logging of public channels on our slack to [http://logs.bchnode.org/](http://logs.bchnode.org/) . We hope there will be further refinements to the logging, such as displaying from which channel a logged message originated - but this requires some vendor support ticket resolutions which we're waiting on.

    *   We have dedicated public channels on our Slack for interaction with the community:

        *   [#dev](/search?q=%23dev)-general <- our main development channel, open to anyone

        *   [#dev](/search?q=%23dev)-newbie <- our novice developer channel, visited by our senior developers on semi-regular basis. Anyone can ask & learn here.

        *   [#support](/search?q=%23support)-general <- in case you require more interactive support than via Gitlab issues, anyone is welcome here!

        *   [#testing](/search?q=%23testing) <- testing channel used by the project itself. We welcome any software testers to join, participate, observe etc.

        *   [#quality](/search?q=%23quality) <- our main QA channel, open to all to raise and discuss any issues related to quality assurance on our project.

        *   [#general](/search?q=%23general)-discuss <- general discussion channel, open on any project related issues that do not fit better to other channels. Feel free to enquire about anything here.

        *   [#introduction](/search?q=%23introduction) <- for members of our Slack to introduce themselves.

*   **_"Identifying existing_ **[**_gaps in software tests_**](https://gitlab.com/bitcoin-cash-node/bitcoin-cash-node/issues/35)** _as well as inadequacies of the verification tools and methods, and formulating appropriate plans to improve the quality assurance"_**:

    *   I am starting to work on a software verification and validation plan (VVP) suitable for this project. This plan will identify roles and activities related to the V&V process, and will be a living document that will be committed to the repository after review.

    *   It will likely be followed soon after by plans covering other parts of the software lifecycle (development, maintenance, the QA process etc). Getting these project aspects documented will likely be a multi-month activity, as we will simultaneously be busy on many other things (we don't have the luxury to put ongoing development on hold to first polish our plans and processes to perfection).

    *   I've started to gather review checklists based on which we will build up a database of QA checklists to be used during various project activities (starting from requirements, test plans and code review and expanding to cover design, implementation and configuration / release management)

*   **_"Setting up more efficient reproducible build and release processes"_**:

    *   Following from the initial release, we gained some insight into where we need to improve (e.g. common build hash formats), and plan to conduct a minor release in the next week or two to practise and hone our release process a little.

*   **_"Revising our project infrastructure (seeders, seeds) and looking into setting up better file hosting for our_ **[**_release packages_**](https://github.com/bitcoin-cash-node/bitcoin-cash-node/releases)**_"_**:

    *   I'll be revising our seeds/seeders ahead of the next minor release (1-2 weeks from now).

*   **_"Setting up continuous deployment of our project through Gitlab / Docker integration with a view to setting up additional testing, external to Gitlab"_**:

    *   Docker builds are not yet automated through Gitlab. Josh Ellithorpe has kindly assisted us on the initial release's Docker build provision. The project has registered a Docker account and a bit of work will be needed to integrate our Gitlab pipeline with Docker. This might not be completed before the upcoming minor release - it depends on developer resources.

*   **"Establishing our support and contact process"**:

    *   We have updated our security disclosure policy document and contacted several other projects to establish mutual disclosure relationship.  
        So far, relationships have been established with BCHD, Flowee and Knuth, with more to follow soon hopefully.

*   **"Establishing an accountable and transparent process for funding continued maintenance and development of Bitcoin Cash Node"**:

    *   Part of this is the financial reporting I am starting with this post, to keep everyone appraised of the state of project funding, our income and expenditures and plans around that. Speaking of plans, I am going to be working on a Fundraising Proposal for the Flipstarter campaign, which requires a plan to be submitted by 30 March 2020\. More information about our plan will be made available as it progresses into reviewable form. I have an offer of assistance to work with me on this from @imaginary_username (thanks!)

*   **"Defining further roles that the project seeks to establish, such as professional liaison with key users of our software and engagement with wider Bitcoin Cash user base"**:

    *   A role for such a liaison position has been written up by @emergent_reasons, but I have not published on it yet as I expect it might flow into the Fundraising Proposal together with definition of some other roles that the project will seek to fill.

*   **_"Evaluating the amount of personnel available for the planned tasks and crafting an appropriate budget for the upcoming fundraiser"_**:

    *   This forms part of my proposal drafting work to be completed until 30 March - with the help of many project members on whose inputs I will depend.

### Contact with other client teams regarding feature implementation

#### Xversion (Bitcoin Unlimited, champion: Greg Griffith)

Bitcoin Cash Node was approached by BU developer Greg Griffith with a request to implement the `xversion` protocol message in BCHN.

There was healthy discussion both internally and on the Gitlab issue tracker (ref. [https://gitlab.com/bitcoin-cash-node/bitcoin-cash-node/-/issues/45](https://gitlab.com/bitcoin-cash-node/bitcoin-cash-node/-/issues/45)) and it seems BCHN developers are not opposed to the latest proposition to implement xversion based on a service bit. More technical discussion and refinement of an adapted specification is expected, but the process also led me to formulate a rough set of guidelines for what BCHN needs from other clients who want to bring features across into it:

**<u>BCHN Lead maintainer's general "requirements" for accepting merge requests from other implementations:</u>**

_(I have yet to formally describe these in our project documentation, and they are subject to review, but I'm listing here the common sense ones known at this time.)_

1.  `Conforming to our coding style which is basically identical to Bitcoin ABC still, but we have internally agreed on a soft line length limit of 80 and a hard one of 132 for the C/C++ code - the rest stays the same as ABC for now (Python code etc)`

2.  `Accompanied by covering tests and appropriate documentation`

3.  `Accepted and validated upstream (in that case it means merged and tested in the other client). We will then verify it on BCHN and suggest adjustments that might be necessary technically.`

4.  `Our users must support the feature/fix that is proposed. This is ensured by raising such cross-port proposals via issues on our Gitlab tracker, where they can be seen and discussed by all our users, correctly assessed and prioritized.`

#### Xthinner (independent, Jonathan Toomim)

Bitcoin Cash Node was approached by Jonathan Toomim to discuss whether Xthinner and parts of the stress testing tooling developed for it, could be incorporated in BCHN.

The discussion and thinking about it (on BCHN side) is still in early phases, but interesting observations have been made by Jonathan with regard to the rather slow, but also good coin selection algorithm used in the node code, which could be augmented by an alternative, faster but less optimal coin selector, useful in some situations (such as stress testing for bigger blocks).

Generally, I see a lot of potential for the cooperation between Bitcoin Cash Node and Jonathan on these features.

### State of BCH specification repository & IFP (non-)consensus

As some of you might be aware, I and other developers raised objections when the IFP proposal - roughly as previously described by Jiang Zhuoer and implemented by Bitcoin ABC - was merged into the "Bitcoin Cash organization"'s specification folder in the bitcoincash.org repository on Github, against the expressed disagreement with the IFP by many in the Bitcoin Cash community.

Not only did the specification merge occur despite the protests, but also

1.  against established convention not to merge extremely controversial consensus changes into what was supposed to be the commonly used repository for the regular hard-fork upgrade specifications

2.  Eighteen (18) days after the feature freeze of the specification!

So I entered a [Pull Request on Github to revert this IFP merger](https://github.com/bitcoincashorg/bitcoincash.org/pull/453).

**The discussion was subsequently locked and closed** by the maintainer(s), who refused to reveal themselves despite my repeated enquiries about who made these decisions.

Additionally, I found out via automated email notification that my Github account (ftrader) had been removed from the Bitcoin Cash organization on 3 March, again by parties unknown and unwilling to acknowledge their responsibility. I raised an [Issue on Github to ask about this](https://github.com/bitcoincashorg/bitcoincash.org/issues/460), which has been **ignored for the last five (5) days now**.

Two pull requests by our project team to add the Bitcoin Cash Node client to the list of full nodes on the bitcoincash.org website have also been refused on spurious grounds:

*   [https://github.com/bitcoincashorg/bitcoincash.org/pull/450](https://github.com/bitcoincashorg/bitcoincash.org/pull/450)

*   [https://github.com/bitcoincashorg/bitcoincash.org/pull/459](https://github.com/bitcoincashorg/bitcoincash.org/pull/459)

This treatment of our project and the concerns of the community about the IFP by "the Bitcoin Cash organization" will encourage me and many of those who support Bitcoin Cash Node and are against the IFP and do not consider it as part of the May 2020 upgrade, to seek alternatives when it comes to a home for the Bitcoin Cash protocol specification and information around compatible implementations for the upcoming May network upgrade.

### Looking forward...

Please help me with your input to the direction of the BCHN project, by giving me feedback in the comments below, and also by participating in the [March 2020 Bitcoin Cash Node Community Survey](https://read.cash/@freetrader/bitcoin-cash-node-community-survey-march-2020-c23eb5a8) - the inaugural use of the [BCHN Public Consultation System](https://gitlab.com/bitcoin-cash-node/bchn-public-consultation-system).
