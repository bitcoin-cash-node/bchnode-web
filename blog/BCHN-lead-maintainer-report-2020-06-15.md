---
layout: layout.html
---

<% set('title', 'BCHN lead maintainer report 2020-06-15') %>
<% set('date', '15 June 2020') %>
<% set('author', 'freetrader') %>

This is my first report since the May upgrade, and I must apologize for the long delay. A lot has happened since my [last report](BCHN-lead-maintainer-report-2020-04-15).

On the bright side (not an exhaustive list):

*   The community rallied to prevent a currency split around the Infrastructure Funding Plan (IFP) and prevented a mass exodus of investors in face of the threat of damage to the incentive structure of Bitcoin Cash.  
    I believe the BCH ecosystem demonstrated commitment to the necessary kind of decentralization that makes BCH worth having in the first place.
    
*   BCHN [achieved its first funding goal](https://read.cash/@bitcoincashnode/bchn-flipstarted-thank-you-to-the-community-81e2fd64) through Flipstarter!
    
*   We released two [updates](https://github.com/bitcoin-cash-node/bitcoin-cash-node/releases) (v0.21.1 and [v0.21.2](https://read.cash/@bitcoincashnode/announcing-bitcoin-cash-node-v0212-a413f3a1))
    
*   Our software attained a range of interface performance improvements in its client as well as a [new API feature](https://read.cash/@bitcoincashnode/bchn-technical-bulletin-2020-05-04-51b0305f) requested by mining pools.
    
*   We are embarking to put out more information about [our project's vision and objectives](https://read.cash/@bitcoincashnode/bitcoin-cash-node-vision-and-objectives-ce17507b), since many are wondering what lies ahead.
    
*   The project [welcomed Tracy Chen as BCHN Representative](https://read.cash/@bitcoincashnode/bchn-welcomes-tracy-chen-as-representative-b10aec81) to help it keep in touch with the global BCH ecosystem and abreast of the needs of BCHN users.  
    Tracy has been active for us by establishing a WeChat presence, writing articles for the Chinese audience and contacting users in the mining and exchange sectors to find out what they view as most important.

On the somewhat dimmer side:

*   The difficulty adjustment algorithm (DAA) is still being exploited by bigger pools which game its vulnerability to oscillations. Jonathan Toomim has published an [excellent video on why this algorithm is broken](https://youtu.be/Fd6GFpZjLxU), and explored some possible solutions.
    
*   Some mining pools supporting BCHN have been crowded out due unprofitable mining conditions on Bitcoin Cash (the aforementioned exploitation).

### [On the upgrade frequency](#on-the-upgrade-frequency)
Now that the May upgrade has passed, people are logically enquiring about BCHN's stance toward the 6-monthly network upgrade cycle.

In our [proposal document](https://gitlab.com/bitcoin-cash-node/bchn-project-management/bchn-pm-public/-/raw/master/finance/funding/campaigns/2020-q2-flipstarter/pdf/Bitcoin_Cash_Node_Flipstarter_Funding_Proposal_v1_1.pdf), we wrote:

_The 6-monthly network upgrade cycle and very rapid client release cycles have been identified as sub-optimal, causing development centralization and practical troubles even for its staunch proponents. In consultation with users, BCHN will engage on well-considered adaptation of the upgrade cycle after November 2020 (the November upgrade is already encoded into the current software in terms of some parameters and cannot simply be abandoned)._

Let me be clear: Most of our contributors, including myself, support an extension of the upgrade cycle (perhaps to 9-12 months at least) as an improvement step compared to the status quo.

The semi-annual flag day upgrade procedures have hardly lived up the qualities people (including myself) expected. An intention was to increase awareness and ensure a certain amount of pressure on everyone to get their ducks in a row.

But even in May 2020, there were incidents on the Bitcoin Cash network due to users being caught unaware by the upgrade and failing to update their systems in time. Maybe this is due to the too-short cycle. Since February, we have received real feedback from BCH users in industry who feel that the current upgrade cycle is too rapid. It's time to listen and take the concerns seriously.

What was good at first for the BTC->BCH fork, has since repeatedly led to problems in subsequent upgrades.

We can see by their actions that even leading client developers are not able to meet the constraints of the 6 months. They slipped in specifications past the feature freeze date in Q1 of this year, leading to annoyance and confusion about the planned features. This state of affairs is not conducive to winning new businesses over to run their critical systems on Bitcoin Cash. It is hurting adoption.

As mentioned in our proposal from April, for technical reasons we (BCHN) are committed to the next network upgrade in November, but open to reconsideration after that.

The November commitment is related to the "Automatic Replay Protection" in the upgrade specifications -- a full node version-deprecation mechanism which is sometimes referred to as the "poison pill".

It makes non-upgraded nodes alter their transaction signatures so that they can no longer talk to the upgraded network once the next upgrade comes around. Effectively hard-forking non-upgraded nodes to a chain of their own. This mechanism locks us in the 6-monthly cycle, because deployed nodes are already programmed to make certain changes on that future date.

Come November, BCHN plans to permanently remove this poison pill code from its major upgrade release.

And after that the ecosystem will have an opportunity to re-shape the way Bitcoin Cash does network upgrades.

The process is currently unhealthy. Not only are working procedures, specification time frames and the completeness of functional specifications no longer adhered to - this has contributed to developmental centralization and formation of a renewed "reference client" mindset which would stifle innovation and progress if left uncorrected.

If we can collectively re-orient our ecosystem culture to allow room for technical disagreement while resolving it through evidence-based evaluation, combined with safe activation mechanisms that do not put the chain at risk of splitting by hostile hashpower, then we can reach much better decisions and a swifter advancement on the Bitcoin Cash roadmap towards global adoption.

### [Project uptake](#project-uptake)
Since IFP is no longer an immediate threat, miner signaling for BCHN has decreased.

This was expected to some degree: when there is not a burning issue, miners signal less willingly for particular clients that seek to address the issue.

The IFP hot button issue has passed and BCH has been safely upgraded without a chain split. Subsequently, the percentage of miners signaling for us has gone down from an all time high of almost 17% to a steady state comprising our most steadfast supporters.

We are thankful to those miners who have supported us during the run-up to May and helped to keep Bitcoin Cash free of a forced levy.

Our special thanks to those who continue to signal support for our software using `/BCHN/` in their coinbase strings. Thanks [bitcoin.com](https://www.bitcoin.com/) , Hashpipe and P2Pool.

<figure class="text-center">
    <img src="/static/img/newsroom/2020-06-15/3bneA5i1D0usLADh1f7AAIro3asfIlIK1AUSOFhU.png" class="rounded img-fluid" alt="" title="">
    <figcaption>Hashpower signaling for BCHN in their coinbase strings. Guess where's May 2020 in this diagram!
    </figcaption>
</figure>

The data for the above graph is from Dagurval's site, [https://bitcoincash.network/voting/](https://bitcoincash.network/voting/) which counts percentages over the 2015-block voting windows.

In terms of network nodes, I'm pleased to report an increase to ~91 nodes, up significantly from 55 at the last report. This represents pleasing growth over this time interval.

<figure class="text-center">
    <img src="/static/img/newsroom/2020-06-15/fpkC1f1Qv7xR6IdzXkEtMoHPtRce4HgCvsLgwhUX.png" class="rounded img-fluid" alt="" title="">
</figure>

The spike in BCHN nodes in the coin.dance data at the end of May 2020 was due to an experiment that a BCHN contributor (@mtrycz) conducted, to measure network performance using a short-lived set of cloud nodes.

## [Financial overview](#financial-overview)
In the time since April, I have set up a public book-keeping based on [plain text accounting](https://plaintextaccounting.org/) . At the beginning of June we issued [our first separate Financial Report](https://read.cash/@bitcoincashnode/bchn-financial-report-2020-06-03-d2a0232f).

This report will replace this "Financial Overview" section going forward (I will only reference it in future reports).

Our full Financial Report contains links to all our previous financial overviews and allows us to go into more financial details than would be suitable for this maintainer report.

BCHN intends to publish these Financial Reports on a monthly basis, allowing anyone to see how the money donated to us is being spent.

We do not shy away from transparency and accountability. No other Bitcoin Cash full node software project I know of releases such detailed financial information. I am confident in claiming that BCHN is leading by example here.

## [Project work items update](#project-work-items-update)
Since initial release:
*   Issues: 123 raised, 57 closed, 66 open
    
*   Merge Requests: 545 raised, 455 merged, 28 closed (read: rejected or aborted), 62 open

Since last maintainer report (2020-04-15):
*   Issues: 47 raised, 18 closed, 29 open
    
*   Merge Requests: 394 raised, 325 merged, 13 closed (read: rejected or aborted), 56 open

### [Backporting](#backporting)
What probably stands out most from the above numbers is a sharp increase in Merge Requests over this period. This is due to a concerted effort (still underway) to tackle outstanding backports from upstream projects.

Backporting isn't simply copying changes from upstream, it requires experienced developers to review and test (and in some instances: develop tests for) those changes. In some instances we have found problems and reject upstream changes.

We are currently still playing catch up. Both Core and ABC have more developers, so we need to figure out how to work smart.

The graph below gives an overview of our backporting activities.

<figure class="text-center">
    <img src="/static/img/newsroom/2020-06-15/lR0FGkOAhTyIFTxBaH4JWgtTww5EyLee2YaYD4eU.png" class="rounded img-fluid" alt="" title="">
</figure>

We need to ramp those up further (to make dents in yellow and red lines and bump up the green line).

The slope of the increasing red line indicates rate at which backports from upstream (in this case, ABC) are heading towards us. They then get sorted into various categories (planned, deferred, rejected) and planned ones get worked on until they are integrated (merged).

Internal project discussions were in May and held and concluded that the backporting effort would, for now, be shared by existing contributors to the project. This may change at a later date, but two BCHN developers have firmly committed time to this activity, while another developer has flexibly contributed to it. This is in accordance with our Flipstarter proposal, where we did foresee that

_we may either share it across developers or contract further development resources with these funds._

Starting June, BCHN has begun paying out funds monthly from its backport budget to contributing developers based on their efforts.

## [Project Planning / Scheduling](#project-planning-scheduling)
_Backport status tracking_

To facilitate the planning and status tracking of backports, I've set up a [shared tracking database maintained in GitLab](https://gitlab.com/bitcoin-cash-node/bchn-project-management/bchn-pm-public/-/blob/master/planning/bchn-backporting.csv) which can be used by maintainers & developers. Below shows an extract from this database.

```
bp_id,bp_status,mr,abc_diff,core_pr,depends,upstream_commit,commit_desc,comment
...
9145,planned,,D5726,,"D5710,D5712,D5713,D5714",02ab89366a5a6623835b65038544e4e061b44031,Complete PR14796 by cleaning up some old functions and names (Nico Guiton),
9144,deferred,,D5725,,,969731122b25481f237eaad32d9ad2386ac0cf32,Pass rpc/avalanche RPC argument descriptions to RPCHelpMan (Nico Guiton),Deferral reason: postpone all further Avalanche integration until after pre-/post-consensus evaluation
9143,rejected,,D5724,,,b33ec898c04aa0b4b2f5716b4ff2becedf8e44ed,Add upgraded nodes as seeds (Jason B. Cox),Rejection reason: inapplicable (BCHN maintains its own seeds)
9142,unevaluated,,D5723,,,b9e3d1272c0230c0d96b6063392cad06966ae8d4,Extract smoke tests from automated commits (Jason B. Cox),
9141,planned,,D5722,,,a0950966fd8578ac25f54eadcefd27daf103a6f7,Finish passing the remainder of wallet/rpcwallet RPC argument descriptions to RPCHelpMan (Nico Guiton),
9140,unevaluated,,D5721,,,baf31e908e8d0c348d2fb139d71c09a5486e60f5,Remove win32 from Github release (Jason B. Cox),
9139,planned,,D5720,,,c69d41b2bc44d190dd3d115303024c5e222368fa,Pass rpc/rawtransaction RPC argument descriptions to RPCHelpMan (Nico Guiton),
9138,deferred,,D5719,,,1d6e7ce3a40551ff588cc65f60599f2c1dfd6480,[avalanche] Modernize the code via using instead of typedef (Amaury Séchet),Deferral reason: postpone all further Avalanche integration until after pre-/post-consensus evaluation
9137,planned,!508,D5718,,D5715,2f3cc194c824c16f652cb65ba672919f28fe13a8,Move PSBT definitions and code to separate files (Glenn Willen),
...
```

There is also a [planning page](https://schedule.bitcoincashnode.org/bchn-backport-diffs-planning.html) with hyperlinks to Merge Requests (for backports already in progress) and Phabricators Diffs.

<figure class="text-center">
    <img src="/static/img/newsroom/2020-06-15/ugyqlZNeYQoFWthiucMrb3M4s3CpBwp7M5bV7AbJ.png" class="rounded img-fluid" alt="" title="">
</figure>

_Project work package planning_

I've started to set up an open project schedule of our project work packages, currently reflecting our initial Flipstarter proposal plans.

*   [High level view](https://schedule.bitcoincashnode.org/)
    
*   [Detailed view](https://schedule.bitcoincashnode.org/BCHN-task-detail.html)

These plans are hosted on [https://schedule.bitcoincashnode.org](https://schedule.bitcoincashnode.org) and we plan to update them as needed. All the data and configuration files used to generate these scheduling pages are in our [public project management repository](https://gitlab.com/bitcoin-cash-node/bchn-project-management/bchn-pm-public).

<figure class="text-center">
    <img src="/static/img/newsroom/2020-06-15/ksQTYkCr1voHPKFalgEHj1CDFl9KmUyIBu5ck8IO.png" class="rounded img-fluid" alt="" title="">
    <figcaption>Preliminary project schedule based on Flipstarter proposal</figcaption>
</figure>

We are currently hard-pressed to gather development resources to meet these plans.

The schedule for higher-precision numerical script operators has already slipped a bit, and our schedule there will need updating.

BCHN is looking for experienced Bitcoin Cash developers to drive this specification and implementation forward, but that is proving more difficult than originally anticipated.

There have been productive internal discussions on the requirements and options (such as choosing between a 64-bit, 128-bit or arbitrary precision initial specification. Tobias Ruck has presented findings from his 128-bit specification work in progress where he found a DoS vector when using Boost. There have been suggestions to emulate 128-bit integer arithmetic using 64-bit operations and the same principle could be used to arrive at higher precision without a need to use arbitrary precision libraries. Arbitrary precision arithmetic comes with significantly more effort and complexity and would almost certainly be out of reach for August. Even for a fixed precision proposal, BCHN may not be able to make the feature freeze unless we soon find skilled people with time to write this specification, implement it and test it.

Currently, the DAA is considered as the most urgent problem and is seen as make-or-break in the very near term. Consequently many developers are giving it attention. Lively discussion on several promising proposals was held among developers Jonathan Toomim, Karol Trzeszczkowski, Tom Zander and others.
The best way to conduct an evaluation and come to a firm consensus on a replacement algorithm is still a matter of internal debate, but we are in touch with people who may be able to drive this work.

@im_username has started to gather requirements and determine the scope of the testnet improvement work package. Contact him if you have suggestions or wish to participate in this activity. You can reach him on BCHN Slack or Telegram.

I'll be focusing a large part of my efforts in the next 2-3 weeks on the rolling checkpoints specification and validation. I'm behind on the specification parts, but think I can make up sufficient ground.

On the website improvement work package, [Corentin Mercier](https://merc1er.com/) (@merc1er) has moved the project forward significantly by setting up translations via Crowdin and building a Newsroom page to which we can add content.

<figure class="text-center">
    <img src="/static/img/newsroom/2020-06-15/Fr4hoBC9t5dYGodpfRAizdoSxBQTrGYkAjM4OGmA.png" class="rounded img-fluid" alt="" title="">
</figure>

He is current working on improving the user experience of our site (front page needs an overhaul) and [progressing Flipstarter deployment capability](https://gitlab.com/flipstarter/backend/-/issues/27) via a project jointly funded by BCHN and the Flipstarter team. This will allow BCHN to easily deploy Flipstarter technology to raise funds in future for further development.

## [Additional improvements](#additional-improvements)

### [New API: `getblocktemplatelight` + `submitblocklight`](#new-api-getblocktemplatelight-submitblocklight)

This is a major new RPC interface developed by Calin Culianu in conjunction with WaYi / easy2mine pool.

It offers a significant speed improvement to pools over the legacy `getblocktemplate`/`submitblock` method. BCHN published an earlier [Technical Bulletin](https://read.cash/@bitcoincashnode/bchn-technical-bulletin-2020-05-04-51b0305f) about the performance improvements. The new feature comprised significant amounts of new code and is a great benefit for mining pools.

Since any defect in such critical mining code could result in pools losing money due to invalid blocks or downtime, it was decided to spend some extra funds on review of this code. BCHN paid out two bounties to project contributors for review of this development (these were announced in our Slack developer channel). In return the project obtained a high quality of code reviews and could confidently release this new feature in v0.21.2.

## [Performance optimizations to JSON library and RPC interface](#performance-optimizations-to-json-library-and-rpc-interface)

BCHN developers continue to improve the performance of JSON RPC, chiefly through optimization of the Univalue library, but not limited to that.

This work is driven by BCHN developers @BigBlockIfTrue and Calin Culianu.

Significant improvements have been achieved since BCHN project start, and since v0.21.2 release. More of these will be available in our next minor release v0.21.3.

Work is progressing toward catching up with the performance of [rapidjson](https://rapidjson.org/), the leading JSON library in the field. Currently UniValue's JSON is slower by a factor of 2. This isn't actually that much difference anymore and we hope to release more benchmark results in the near future to showcase relevant BCHN improvements.

These RPC performance improvements play an important part to contribute to scaling the data that can be transferred efficiently over these interfaces.

The performance gains also translate into faster processing of your application's requests when interacting with the full node.

### [Better documentation](#better-documentation)

BCHN developer @BigBlockIfTrue has done great work on supplementing the documentation by adding generated Markdown documents for BCHN software invocation options and JSON RPC interface calls. Together with Dagur and merc1er, the deployment and hosting of the documentation has been set up at [https://docs.bitcoincashnode.org](https://docs.bitcoincashnode.org) .

<figure class="text-center">
    <img src="/static/img/newsroom/2020-06-15/8WclYIB57F0E63KYRDtanwyAcJecC8JbEPgDb991.png" class="rounded img-fluid" alt="" title="">
    <figcaption>Part of the new document site, showing RPC API usage</figcaption>
</figure>

External BCHN contributor Søren Bredlund Caspersen has greatly assisted in the correction and improvement of various documents in the BCHN set. For example, he cleaned up installation and build documents and contributed a better way of building our documentation site for deployment. This allows us to present more of the documents and eliminate broken links.

Now nearly the complete documentation is easily accessible for anyone who wishes to participate in the project or understand how to use the software.

A big thanks to BigBlockIfTrue, Dagur, Søren and merc1er for all their continuing work to make better documentation happen.

Nevertheless, documentation is never perfect. If there are questions remaining, we welcome anyone to join our Slack to get more support.

### [Removal of BIP9 and prototype code from the application](#removal-of-bip9-and-prototype-code-from-the-application)

Based on feedback, we have removed the following (a mix of technical debt, code not suitable for production and obsolete/unused instructions):

*   Code: the BIP9-like (but not quite BIP9) signalling mechanism. If anything we would like to replace this with BIP135 or whatever is agreed to be a safer alternative - maybe even something related to BMP.
    
*   Code: the Avalanche prototype. The feature is unspecified, undocumented and not even remotely production ready. BCHN remains open to evaluating pre-consensus solutions, including Avalanche, but few here share a view that integrating such early-stage experimental code into the regular production node client is advisable. We will however continue to monitor upstream development on it, and when the feature approaches a more complete, testable form, we are open to carefully re-integrating it with thorough review.
    
*   Documentation: obsolete instructions for reproducible building (gitian) on Fedora

### [Testing Tools](#testing-tools)

BCHN contributor @mtrycz has developed a cloud-based (Amazon AWS) test framework and used it to conduct some highly interesting test runs to:

*   measure time of propagation of transactions across a network of nodes under various settings of the 'trickle' emission (relating to MRs [143](https://gitlab.com/bitcoin-cash-node/bitcoin-cash-node/-/merge_requests/143), [289](https://gitlab.com/bitcoin-cash-node/bitcoin-cash-node/-/merge_requests/289))
    
*   conduct measurements related to Jonathan Toomim's MR [442](https://gitlab.com/bitcoin-cash-node/bitcoin-cash-node/-/merge_requests/442) ("Faster sendtoaddress RPC and p2p\_stresstest.py spam generation/stress testing script")

Among other interesting findings, @mtrycz's results demonstrate clearly a delay induced by the current transaction forwarding algorithm. This delay is something that could affect the user experience and we are looking at reducing it to improve 0-conf for users (and wallet developers).

The graph below is taken from transaction propagation data collected on the BCH mainnet by a network of `scatter`'ed nodes (the spike of additional BCHN network nodes that was mentioned earlier).

It shows that for the bulk of transactions, propagation across the full measurent network happened in under 3 seconds (the Y axis graphs the time taken for a sample transaction to propagate to all the `scatter` nodes).

<figure class="text-center">
    <img src="/static/img/newsroom/2020-06-15/cezA3clrrBb7AMexPjc9dyjKfKhZDsQdLUjJpUsP.jpeg" class="rounded img-fluid" alt="" title="">
    <figcaption>Measurements obtained using 'scatter' test tool developed by @mtrycz</figcaption>
</figure>

@mtrycz has offered to release the testing framework (currently named `scatter`) as open source under the BCHN project. You can \[find it in his personal repository\]([https://gitlab.com/mtrycz/scatter](https://gitlab.com/mtrycz/scatter)) for now where it is available for review. Please note that it is considered early stage (probably alpha) and as such users should read it carefully and take their own responsibility for using it.

Developers from other node projects have already shown interest in using `scatter` for their own testing. It is not limited to conducting BCHN tests - it can be used to test similar node software just as easily. BCHN owes thanks to @mtrycz for developing this tool - it will no doubt serve well for a lot of future tests which exceed the constraints of local regtest networks.

## [Ongoing inter-project collaboration activities](#ongoing-inter-project-collaboration-activities)

There are no progress updates we can report on Xversion or Xthinner, but collaboration with both independent developers like Jonathan Toomim and those from other node projects (e.g. Greg Griffith from BU) is ongoing.

Jonathan recently submitted a merge request ([MR 442](https://gitlab.com/bitcoin-cash-node/bitcoin-cash-node/-/merge_requests/442)) which contains a number of improvements and a stress-testing tool that may be helpful in scaling work.

His work could provide a faster `sendtoaddress` RPC implementation which could be activated through additional RPC command options in future.

This work is currently under consideration for integration, and there is feedback that we could use from others on the proposed changes. BCHN will first need to improve its test and benchmarking facilities to ensure that changes like this can be introduced with the appropriate verification.

Jonathan has also been very active in the DAA improvement sphere, where we benefit from his advice and insight. We thank both him and Mark Lundeberg, who agreed to let Jonathan publish the [DA-ASERT paper](http://toom.im/files/da-asert.pdf) on Jonathan's website.

DA-ASERT is an original contribution by Mark which has already been mentioned in the [recent literature](https://arxiv.org/abs/2006.03044).

### [Security relations](#security-relations)
One security issue was found in upstream (Core + ABC) software by Calin Culianu. It does not directly affect BCHN, but is triggering some software improvements related to management of (auto-)banned nodes.

Our disclosure relationship partners were advised to check whether the original issue might affect their software.

## [Issues on which BCHN seeks feedback](#issues-on-which-bchn-seeks-feedback)

**CPFP**

I published a new [PCS questionnaire to ask who is using Child-Pays-For-Parent](https://gitlab.com/bitcoin-cash-node/bchn-public-consultation-system/-/raw/master/output/campaigns/202006_BCHN-PCS_CPFP_survey/202006_BCHN-PCS_CPFP_survey-en.md) and if anyone, what their use cases are.

Feedback I got so far via other channels was that majority of people were not using it, but a minority of Chinese users (seems related to exchange activities) had used it before and would like to use it in the future.

The feedback sample size is currently small, so I'm looking for further input.

We would like to explore technical solutions that involve eliminating CPFP in return for better scaling for unconfirmed transaction chains.

`sendtoaddress` **interface extensions**

[MR 442](https://gitlab.com/bitcoin-cash-node/bitcoin-cash-node/-/merge_requests/442) suggested some `sendtoaddress` interface extensions. If you are a user of that interface and have some thoughts on those proposed extensions, please get in touch in some way.

## [Coming Up](#coming-up)
BCHN plans to move to [Semantic Versioning](https://semver.org/) (semver) in next <ins>major</ins> release (i.e. most likely the November upgrade).

Semantic versioning will make it easier for our users to determine whether a release breaks existing public interfaces or not.

This means the next major release version will be v22.0.0 .

Until then, minor release continue to follow the current v0.21.x schema.

----------------------------------------------------------------------

### [How to get in touch with our project - links and resources](#how-to-get-in-touch-with-our-project-links-and-resources)


*   Website: [https://bitcoincashnode.org](https://bitcoincashnode.org)
    
*   Development & support Slack chat invite link (should be non-expiring): [https://join.slack.com/t/bitcoincashnode/shared\_invite/zt-egg3c36d-2cglIrKcbnGpIQFaKFzCWA](https://join.slack.com/t/bitcoincashnode/shared_invite/zt-egg3c36d-2cglIrKcbnGpIQFaKFzCWA)
    
*   Telegram: https://t.me/bitcoincashnode (there is a bridge channel to our Slack)
    
*   IRC channel: Join [#bchnode](/search?q=%23bchnode) on Freenode (we see messages on our Slack via an IRC bridge channel)
    
*   Logs of our development Slack: [http://logs.bchnode.org/](http://logs.bchnode.org/)
    
*   Main development repository on GitLab:[https://gitlab.com/bitcoin-cash-node/bitcoin-cash-node](https://gitlab.com/bitcoin-cash-node/bitcoin-cash-node)
    
*   Easy download link via our website:[https://bitcoincashnode.org/download.html](https://bitcoincashnode.org/download.html)
    
*   Full releases on Github:[https://github.com/bitcoin-cash-node/bitcoin-cash-node/releases](https://github.com/bitcoin-cash-node/bitcoin-cash-node/releases)
    
*   Donation address: [https://bitcoincashnode.org/#donate](https://bitcoincashnode.org/#donate)
    
*   Follow us on Twitter: [https://twitter.com/bitcoincashnode](https://twitter.com/bitcoincashnode)
    
*   WeChat group: [Bitcoin Cash Node WeChat](https://weixin.qq.com/g/AQYAAJAOatfv0Pe7UnstYGWU9tybJCvmP05-KfUhUKCFdzWTZnXdhHTl1tBkzo81) (see also QR code below)


<figure class="text-center">
    <img src="/static/img/newsroom/2020-06-15/nKJEj6XrugZddptFCXDudSvekyGhaUjKpIiDSlfn.png" class="rounded img-fluid" alt="" title="">
    <figcaption>BCHN WeChat QR code</figcaption>
</figure>

**Image credits:**

Lead image and wireframe 'Bitcoin Cash Node' : Leandrodimarco

