---
layout: layout.html
---

<% set('title', 'BCHN Financial Report 2020-10-20') %>
<% set('date', '20 October 2020') %>
<% set('author', 'Bitcoin Cash Node Team') %>

The Bitcoin Cash Node (BCHN) project practices and promotes transparent reporting.

Project funds are held by team members in a 3-of-5 multi-signature wallet.

This wallet is used to receive [donations](https://bitcoincashnode.org/#donate) and pay for project expenses (general funding of BCH Node operations, including personnel, equipment and contracting).

All our transactions are on the Bitcoin Cash (BCH) blockchain.

We use open source wallet software ([Electron Cash](https://www.electroncash.org/)) and maintain our accounts using [plain text accounting](https://plaintextaccounting.org/) in a [ledger file](https://gitlab.com/bitcoin-cash-node/bchn-project-management/bchn-pm-public/-/blob/master/finance/bookkeeping/prnc2exht3zxlrqqcat690tc85cvfuypngh7szx6mk.journal) which is part of the public [project management repository](https://gitlab.com/bitcoin-cash-node/bchn-project-management/bchn-pm-public) on GitLab.

Based on this public ledger, the project can account for all its income and expenses and produce financial reports using auditable open source software.

Please refer to the Links section at the bottom for links to previous financial reports.


### Project account details as of 2020-10-20

The statements below cover transactions up to and including on October 20, 2020 (more precisely, up to block 657,989.

2109.93838878 BCH was held by the project at the time of writing. This represents a decrease in available funds of about 36.1 BCH since the previous report in September. The project remains in a very good financial state.

All expenses below fall within the scope of our funding proposal (link above). Since project start, a total of 277.43677588 BCH has been spent so far, broken down as indicated.

           2109.93838878 BCH  assets:crypto:bitcoincash
            277.43677588 BCH  expenses
            247.77313278 BCH    development
             87.97578591 BCH      backporting
             24.04174199 BCH      bounty
              0.25000000 BCH        doc
              0.50000000 BCH        feature
              6.09334702 BCH        review
              1.25000000 BCH        test
             15.94839497 BCH        website
             62.65460295 BCH      daa
             48.94642857 BCH      general
              5.48696844 BCH      general verification
             18.66760492 BCH      website
              6.80363425 BCH        flipstarter
              3.91435825 BCH        general
              7.94961242 BCH        i18n
              6.40508893 BCH    infrastructure
              0.00029924 BCH    mining fees
             21.61212791 BCH    pr
             19.61212791 BCH      representative
              2.00000000 BCH      video
              1.64612702 BCH    translation
          -2387.37516466 BCH  income:donation


### Income

Currently BCHN derives all its income from donations.

The donations below include those made directly to our project donation address and those forwarded from tips on this site.

We thank Georg Engelmann for a very generous personal donation of 50 BCH during the time since our last report.

A total of 2387.37516466 BCH had been received in donations since the start of the project in February 2020. About half of that was raised via a Flipstarter campaign which [successfully completed](https://bitcoincashnode.org/en/newsroom/bchn-flipstarted) on 26 April, yielding 978 BCH in funding for BCHN's initial [project proposal](https://gitlab.com/bitcoin-cash-node/bchn-project-management/bchn-pm-public/-/raw/master/finance/funding/campaigns/2020-q2-flipstarter/pdf/Bitcoin_Cash_Node_Flipstarter_Funding_Proposal_v1_1.pdf).  Another 1000 BCH was received in an anonymous donation in August 2020, and the remainder is from several business and personal donations.

There are many other anonymous donations making up the remainder, but some of our biggest known donors include ASICseer.com, Marc de Mesel and Georg Engelmann.

We thank all our donors for their support!


### Expenses

Below are the project's expenses since the last overview on September 3, 2020. They amount to 88.08639918 BCH over that period.
The mining fees have been excluded. These are the network fees paid by BCHN when transacting on the Bitcoin Cash network, totalling only 0.00029924 BCH or less than 10 US cents for ALL financial transactions conducted by the project in its life up to now!

        2020/09/04  ex:de:website:general        1.27118644 BCH
        2020/09/07  ex:de:bounty:website         1.96506550 BCH
        2020/09/07  ex:de:bounty:website         0.44052863 BCH
        2020/09/07  ex:de:bounty:website         0.22366360 BCH
        2020/09/07  ex:de:bounty:website         1.55832591 BCH
        2020/09/07  ex:de:bounty:website         1.32450331 BCH
        2020/09/09  ex:de:bounty:website         2.27272727 BCH
        2020/09/09  ex:development:backporting   3.41071429 BCH
        2020/09/09  ex:development:general       8.94642857 BCH
        2020/09/10  ex:de:bounty:website         2.22222222 BCH
        2020/09/10  ex:de:bounty:website         0.87336245 BCH
        2020/09/11  ex:de:bounty:website         3.57941834 BCH
        2020/09/18  ex:de:bounty:website         1.27118644 BCH
        2020/09/20  ex:de:bounty:website         0.21739130 BCH
        2020/09/27  ex:pr:video                  2.00000000 BCH
        2020/09/30  ex:de:website:general        2.64317181 BCH
        2020/09/30  ex:pr:representative         5.53097345 BCH
        2020/10/01  ex:development:general      40.00000000 BCH
        2020/10/02  ex:de:bounty:feature         0.50000000 BCH
        2020/10/07  ex:development:bounty:test   1.25000000 BCH
        2020/10/09  ex:development:bounty:doc    0.25000000 BCH
        2020/10/10  ex:infrastructure            6.33552965 BCH

In the time since the last report, BCHN activity was focused on general development (with backporting activity reduced due to developer resource constraints).
Several bounties were awarded in this period for website-related content imports and test and feature developments.

19.86275322 BCH were spent on website maintenance and improvement.

54.35714286 BCH were spent on client software (and documentation) development.

7.53097345 BCH were spent on public relations, including a video to introduce the team.

6.33552965 BCH were spent on project infrastructure.


### Basic statistics about BCHN project ledger

These are derived from hledger tool's statistic report.

        Main file                : bchn.journal
        Included files           : prnc2exht3zxlrqqcat690tc85cvfuypngh7szx6mk.journal
                                   pp03e95qz7yene7v4vdx2vfsqx4qsq4wfvw8z3pkjf.journal
        Transactions span        : 2020-02-22 to 2020-10-14 (235 days)
        Last transaction         : 2020-10-13 (7 days ago)
        Transactions             : 207 (0.9 per day)
        Transactions last 30 days: 17 (0.6 per day)
        Transactions last 7 days : 1 (0.1 per day)
        Payees/descriptions      : 1
        Accounts                 : 20 (depth 4)
        Commodities              : 2 (, BCH)


### Notes about balances displayed on block explorers

Block explorers may show a slightly lower amount for the main wallet address `prnc2exht3zxlrqqcat690tc85cvfuypngh7szx6mk` (2,109.93763055 BCH at block 657,989).

This is because a small amount in donations (currently 0.00075823 BCH) are stored on a subsequent address (`pp03e95qz7yene7v4vdx2vfsqx4qsq4wfvw8z3pkjf`) in BCHN's multi-signature wallet which was issued to Coin.dance who are collecting donations on behalf of node client projects. They requested this separate address for their own accounting purposes. BCHN will probably periodically receive some donations coming in from there - should significant amounts accrue, they will eventually be moved to the main wallet, but the report (as above) will reflect the total donated amounts on both our main and this secondary address.


### SLP donation address

The project has a SimpleLedger (SLP) token donation address.

`simpleledger:qrjv4klcn9z5kqeye3ps64pr6aa4mzux8cy776pm6k`

Currently, the project has received and is holding donations of 2,000,000 SPICE 🌶️ and 1,000 USDt on that address.

A few other unknown tokens have been sent to the address.

As we conduct our payments exclusively in Bitcoin Cash up to now, we have yet to set up a ledger file to account for token holdings. We may do so for main tokens like SPICE, but not generally for all random tokens sent our way, as this would be a way to spam the project.


### Development bounties

The project has had good experience with bountied work so far and has increased that share of its expenditure.

In this last period, bounties were used to successfully source

* website content (importing from read.cash to the Newsroom)

* development of a relatively complex new functional test related to ongoing performance improvements

* development of a new `indexdir` feature (complete with implementation, development and documentation) requested by a user

Developers who are interested in partaking in upcoming bounties, are invited to join the project Slack (link below) for announcements in the development channels and keep an eye out for [Issues on GitLab marked with a `bounty` label](https://gitlab.com/bitcoin-cash-node/bitcoin-cash-node/-/issues?scope=all&utf8=%E2%9C%93&state=opened&label_name[]=bounty).

* * *

### Links

Previous financial overviews:

*   [Financial overview in report of 14 March 2020](https://read.cash/@freetrader/bchn-lead-maintainer-report-2020-03-14-84f2992d#financial-overview)

*   [Financial overview in report of 31 March 2020](https://read.cash/@freetrader/bchn-lead-maintainer-report-2020-03-31-1e0a4c39#financial-overview)

*   [Financial overview in report of 15 April 2020](https://read.cash/@freetrader/bchn-lead-maintainer-report-2020-04-15-449fc115#financial-overview)

*   [BCHN Financial Report 2020-06-03](https://read.cash/@bitcoincashnode/bchn-financial-report-2020-06-03-d2a0232f) (3 June 2020)

*   [BCHN Financial Report 2020-07-07](https://read.cash/@bitcoincashnode/bchn-financial-report-2020-07-07-d04c7e65) (7 July 2020)

*   [BCHN Financial Report 2020-09-03](https://read.cash/@bitcoincashnode/bchn-financial-report-2020-09-03-a477d4e2)

Flipstarter funding proposal:

*   [English, v1.1](https://gitlab.com/bitcoin-cash-node/bchn-project-management/bchn-pm-public/-/raw/master/finance/funding/campaigns/2020-q2-flipstarter/pdf/Bitcoin_Cash_Node_Flipstarter_Funding_Proposal_v1_1.pdf) (PDF)

*   [Chinese, v1.1](https://gitlab.com/bitcoin-cash-node/bchn-project-management/bchn-pm-public/-/blob/master/finance/funding/campaigns/2020-q2-flipstarter/pdf/Bitcoin_Cash_Node_Flipstarter_Funding_Proposal_v1_1_CN.pdf) (PDF)

*   [Spanish, 1.1](https://gitlab.com/bitcoin-cash-node/bchn-project-management/bchn-pm-public/-/blob/master/finance/funding/campaigns/2020-q2-flipstarter/proposal/proposal-es.mediawiki) (mediawiki)

**Getting in touch with BCHN:**

*   Website: [https://bitcoincashnode.org](https://bitcoincashnode.org)

*   Development & support Slack chat invite link:

    [https://join.slack.com/t/bitcoincashnode/shared_invite/zt-egg3c36d-2cglIrKcbnGpIQFaKFzCWA](https://join.slack.com/t/bitcoincashnode/shared_invite/zt-egg3c36d-2cglIrKcbnGpIQFaKFzCWA)

*   Telegram: https://t.me/bitcoincashnode (there is a bridge channel to our Slack)

*   IRC channel: Join [#bchnode](/search?q=%23bchnode) on Freenode (we see messages on our Slack via an IRC bridge channel)

*   Logs of our development Slack: [http://logs.bchnode.org/](http://logs.bchnode.org/)

*   Main development repository on GitLab:

    [https://gitlab.com/bitcoin-cash-node/bitcoin-cash-node](https://gitlab.com/bitcoin-cash-node/bitcoin-cash-node)

*   Easy download link via our website:

    [https://bitcoincashnode.org/download.html](https://bitcoincashnode.org/download.html)

*   Full releases on Github:

    [https://github.com/bitcoin-cash-node/bitcoin-cash-node/releases](https://github.com/bitcoin-cash-node/bitcoin-cash-node/releases)

*   Donation address: [https://bitcoincashnode.org/#donate](https://bitcoincashnode.org/#donate)

Follow us on Twitter: [https://twitter.com/bitcoincashnode](https://twitter.com/bitcoincashnode)

* * *

Image credits:

*   Lead background image based on [work by Gerd Altmann](https://pixabay.com/users/geralt-9301/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=5180477) from [Pixabay](https://pixabay.com)
