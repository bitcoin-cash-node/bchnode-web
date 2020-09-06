---
layout: layout.html
---

<% set('title', 'BCHN Financial Report 2020-09-03') %>
<% set('date', '3 September 2020') %>
<% set('author', 'Bitcoin Cash Node Team') %>

The Bitcoin Cash Node (BCHN) project practices and promotes transparent reporting.

Project funds are held by team members in a 3-of-5 multi-signature wallet.

This wallet is used to receive [donations](https://bitcoincashnode.org/#donate) and pay for project expenses (general funding of BCH Node operations, including personnel, equipment and contracting).

All our transactions are on the Bitcoin Cash (BCH) blockchain.

We use open source wallet software ([Electron Cash](https://www.electroncash.org/)) and maintain our accounts using [plain text accounting](https://plaintextaccounting.org/) in a [ledger file](https://gitlab.com/bitcoin-cash-node/bchn-project-management/bchn-pm-public/-/blob/master/finance/bookkeeping/prnc2exht3zxlrqqcat690tc85cvfuypngh7szx6mk.journal) which is part of the public [project management repository](https://gitlab.com/bitcoin-cash-node/bchn-project-management/bchn-pm-public) on GitLab.

Based on this public ledger, the project can account for all its income and expenses and produce financial reports using auditable open source software.

Please refer to the Links section at the bottom for links to previous financial reports.

### Project account details as of 2020-09-03

The statements below cover transactions up to and including on 3 September 2020.

`2144.54018089` BCH was held by the project at the time of writing. This represents an increase in available funds of almost 98% since the previous report in July, even counting in expenses since. This was due to a very generous anonymous donation received in August 2020 (see Income section below for details). Overall this puts the project in a very good financial state.

All expenses below fall within the scope of our funding proposal (link above). Since project start, a total of `189.35026424` BCH has been spent so far, broken down as indicated. About 56% (~105.8 BCH) of the total expense amount has been spent since the [last report](https://read.cash/@bitcoincashnode/bchn-financial-report-2020-07-07-d04c7e65) .

           2144.54018089 BCH  assets:crypto:bitcoincash
            189.35026424 BCH  expenses
            173.55323670 BCH    development
             84.56507162 BCH      backporting
              6.09334702 BCH      bounty:review
             62.65460295 BCH      daa
              5.48696844 BCH      general verification
             14.75324667 BCH      website
              6.80363425 BCH        flipstarter
              7.94961242 BCH        i18n
              0.06955928 BCH    infrastructure
              0.00018678 BCH    mining fees
             14.08115446 BCH    pr:representative
              1.64612702 BCH    translation
          -2333.89044513 BCH  income:donation

### Income

Currently BCHN derives all its income from donations.

The donations below include those made directly to our project donation address and those forwarded from tips on this site.

<figure class="text-center">
    <img src="https://sigma.rcimg.net/images/0/d/d/bitcoincashnode/9dfca0f7/4285c142c4ca35b6f3c6b10003722bde.png" class="rounded img-fluid">
    <figcaption>BCHN donations</figcaption>
</figure>

A total of `2333.89044513` BCH had been received in donations since the start of the project in February 2020\. About half of that was raised via a Flipstarter campaign which [successfully completed](https://bitcoincashnode.org/en/newsroom/bchn-flipstarted) on 26 April, yielding `978` BCH in funding for BCHN's initial [project proposal](https://gitlab.com/bitcoin-cash-node/bchn-project-management/bchn-pm-public/-/raw/master/finance/funding/campaigns/2020-q2-flipstarter/pdf/Bitcoin_Cash_Node_Flipstarter_Funding_Proposal_v1_1.pdf). Another `1000` BCH was received in an anonymous donation in August 2020 (thank you!)

There are many other anonymous donations making up the remainder, but some of our biggest known donors include ASICseer.com and Marc de Mesel.

We thank all our donors for their support!

<figure class="text-center">
    <img src="https://sigma.rcimg.net/images/0/d/d/bitcoincashnode/9dfca0f7/0df2cd3a141a0bfd7bec23bf5fd2b9fe.png" class="rounded img-fluid">
    <figcaption>BCHN donations over time</figcaption>
</figure>

### Expenses

Below are the project's expenses since the last overview. The `mining fees` have been excluded. These are the network fees paid by BCHN when transacting on the Bitcoin Cash network, totalling only 0.00018678 BCH or less than 10 US cents for ALL financial transactions conducted by the project in its life up to now!

        2020/08/01  ex:pr:representative         4.01929260 BCH
        2020/08/03  ex:de:bounty:review          2.75463122 BCH
        2020/08/03  ex:development:backporting   4.13282863 BCH
        2020/08/03  ex:development:backporting  10.15680684 BCH
        2020/08/03  ex:dev:bounty:review         0.48500000 BCH
        2020/08/11  ex:translation               0.04950495 BCH
        2020/08/17  ex:translation               0.04578476 BCH
        2020/09/01  ex:pr:representative         4.47227191 BCH
        2020/09/02  ex:development:daa           5.43933054 BCH
        2020/09/02  ex:development:backporting   5.43933055 BCH
        2020/09/02  ex:development:daa          13.00527241 BCH
        2020/09/02  ex:backporting              11.24780316 BCH
        2020/09/02  ex:development:daa          23.37000000 BCH
        2020/09/02  ex:development:daa           6.95000000 BCH
        2020/09/03  ex:development:daa          13.89000000 BCH

In the last two months since the last report, BCHN activity was focused intensely on resolving the DAA replacement specification and implementation ahead of the August 15 feature freeze for November. The DAA replacement task was concluded in August with the ASERT algorithm being scheduled for November 2020 deployment.

DAA review/development related payments were made at the beginning of September, at the end of that development task.

Further, two code review bounties were awarded in August for reviews of the ASERT implementation in BCHN.

Backport related work comprised the second largest expense during the last two months, with translation and public relations costs making up the remaining expenses.

### Basic statistics about BCHN project ledger

These are derived from hledger tool's statistic report.

        Main file                : bchn.journal
        Included files           : prnc2exht3zxlrqqcat690tc85cvfuypngh7szx6mk.journal
                                   pp03e95qz7yene7v4vdx2vfsqx4qsq4wfvw8z3pkjf.journal
        Transactions span        : 2020-02-22 to 2020-09-04 (195 days)
        Last transaction         : 2020-09-03 (0 days ago)
        Transactions             : 175 (0.9 per day)
        Transactions last 30 days: 31 (1.0 per day)
        Transactions last 7 days : 11 (1.6 per day)
        Payees/descriptions      : 1
        Accounts                 : 14 (depth 4)
        Commodities              : 2 (, BCH)

### Notes about balances displayed on block explorers

Block explorers may show a slightly lower amount for the main wallet address `prnc2exht3zxlrqqcat690tc85cvfuypngh7szx6mk` (2,144.53942266 BCH at block 651,190).

This is because a small amount in donations (currently 0.00075823 BCH) are stored on a subsequent address (`pp03e95qz7yene7v4vdx2vfsqx4qsq4wfvw8z3pkjf`) in BCHN's multi-signature wallet which was issued to Coin.dance who are collecting donations on behalf of node client projects. They requested this separate address for their own accounting purposes. BCHN will probably periodically receive some donations coming in from there - should significant amounts accrue, they will eventually be moved to the main wallet, but the report (as above) will reflect the total donated amounts on both our main and this secondary address.

### SLP donation address

The project has a SimpleLedger (SLP) token donation address.

`simpleledger:qrjv4klcn9z5kqeye3ps64pr6aa4mzux8cy776pm6k`

Currently, the project has received and is holding a donation of 2,000,000 SPICE 🌶️ on that address.

A few other unknown tokens have been sent to the address.

As we conduct our payments exclusively in Bitcoin Cash up to now, we have yet to set up a ledger file to account for token holdings. We may do so for main tokens like SPICE, but not generally for all random tokens sent our way, as this would be a way to spam the project.

### Development bounties

The project has had good experience with bountied work so far and plans to increase that share of its expenditure.

Developers who are interested in partaking in upcoming bounties, are invited to join the project Slack (link below) for announcements in the development channels and [keep an eye out for Issues on GitLab marked with a](https://gitlab.com/bitcoin-cash-node/bitcoin-cash-node/-/issues?scope=all&utf8=%E2%9C%93&state=opened&label_name%5B%5D=bounty) `bounty` [label](https://gitlab.com/bitcoin-cash-node/bitcoin-cash-node/-/issues?scope=all&utf8=%E2%9C%93&state=opened&label_name%5B%5D=bounty).

* * *

### Links

Previous financial overviews:

*   [Financial overview in report of 14 March 2020](https://read.cash/@freetrader/bchn-lead-maintainer-report-2020-03-14-84f2992d#financial-overview)

*   [Financial overview in report of 31 March 2020](https://read.cash/@freetrader/bchn-lead-maintainer-report-2020-03-31-1e0a4c39#financial-overview)

*   [Financial overview in report of 15 April 2020](https://read.cash/@freetrader/bchn-lead-maintainer-report-2020-04-15-449fc115#financial-overview)

*   [BCHN Financial Report 2020-06-03](https://read.cash/@bitcoincashnode/bchn-financial-report-2020-06-03-d2a0232f) (3 June 2020)

*   [BCHN Financial Report 2020-07-07](https://read.cash/@bitcoincashnode/bchn-financial-report-2020-07-07-d04c7e65) (7 July 2020)

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
