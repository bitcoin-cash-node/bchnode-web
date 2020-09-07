---
layout: layout.html
---

<% set('title', 'BCHN Financial Report 2020-06-03') %>
<% set('date', '3 June 2020') %>
<% set('author', 'Bitcoin Cash Node Team') %>

The Bitcoin Cash Node (BCHN) project practices and promotes transparent reporting.

Project funds are held by team members in a 3-of-5 multi-signature wallet.

This wallet is used to receive [donations](https://bitcoincashnode.org/#donate) and pay for project expenses (general funding of BCH Node operations, including personnel, equipment and contracting).

We use open source wallet software ([Electron Cash](https://www.electroncash.org/)) and all our transactions are on the Bitcoin Cash (BCH) blockchain.

Previous financial overviews have been published in the context of the project's lead maintainer reports (see [Links](https://read.cash/@bitcoincashnode/bchn-financial-report-2020-06-03-d2a0232f#links) section at bottom for links to historic reports).

Since early May 2020, the project has moved to maintain its accounts using [plain text accounting](https://plaintextaccounting.org/) in a [ledger file](https://gitlab.com/bitcoin-cash-node/bchn-project-management/bchn-pm-public/-/blob/master/finance/bookkeeping/prnc2exht3zxlrqqcat690tc85cvfuypngh7szx6mk.journal) which is part of its public [project management repository](https://gitlab.com/bitcoin-cash-node/bchn-project-management/bchn-pm-public) on GitLab.

Based on this public ledger, the project can account for all its income and expenses and produce financial reports using auditable open source software.

Going forward, BCHN financial reporting will be done in separate reports like this one, initially published here on read.cash at first and replicated in time to the project website's publication section (the "Newsroom").

### Project account details as of 2020-06-02

The statements below cover transactions up to and including on 2 June 2020.

A total of 1162.54074823 BCH had been received in donations, most of that via the Flipstarter campaign which [successfully completed](https://bitcoincashnode.org/en/newsroom/bchn-flipstarted) on 26 April, yielding 978 BCH in funding for BCHN's initial [project proposal](https://gitlab.com/bitcoin-cash-node/bchn-project-management/bchn-pm-public/-/raw/master/finance/funding/campaigns/2020-q2-flipstarter/pdf/Bitcoin_Cash_Node_Flipstarter_Funding_Proposal_v1_1.pdf).

All expenses below falls within the scope of our funding proposal (link above). A total of 37.37468895 BCH has been spent so far, broken down as indicated.

1125.16605928 BCH was held by the project at the time of writing.

       1125.16605928 BCH  assets:crypto:bitcoincash
         37.37468895 BCH  expenses
         36.11360824 BCH    development
         16.46090532 BCH      backporting
          2.85371580 BCH      bounty:review
          5.48696844 BCH      general verification
         11.31201868 BCH      website
          3.36240626 BCH        flipstarter
          7.94961242 BCH        i18n
          0.06955928 BCH    infrastructure
          0.00008392 BCH    mining fees
          1.19143751 BCH    translation
      -1162.54074823 BCH  income:donation

### Income

While donation income is not further broken down, the main component has been the Flipstarter. This has been broken down further into its individual contributions, and is graphed with all other donations received to the project wallet below:

<figure class="text-center">
    <img src="/static/img/newsroom/2020-06-03/donations.png" class="img-fluid rounded">
    <figcaption>Segments represent the individual donation shares, forming total of 1162.54074823 BCH</figcaption>
</figure>

### Expenses

Below is an expenses listing since the last overview. The `mining fees` have been excluded. These are the network fees paid by BCHN when transacting on the Bitcoin Cash network - around 516 to 616 satoshis per transaction during this time.)

    2020/04/21  expenses:translation          0.19202826 BCH
    2020/04/29  expenses:translation          0.42920000 BCH
    2020/05/06  ex:development:website:i18n   4.00464539 BCH
    2020/05/07  expenses:translation          0.03254281 BCH
    2020/05/07  ex:de:bounty:review           0.85371580 BCH
    2020/05/09  ex:development:website:i18n   0.05597014 BCH
    2020/05/11  ex:development:website:i18n   0.06373486 BCH
    2020/05/11  ex:de:bounty:review           2.00000000 BCH
    2020/05/13  expenses:infrastructure       0.06955393 BCH
    2020/05/19  ex:de:website:flipstarter     3.36240626 BCH
    2020/06/02  ex:development:backporting   16.46090532 BCH
    2020/06/02  ex:de:general verification    5.48696844 BCH
    2020/06/02  ex:development:website:i18n   3.82526203 BCH

The project has decided to distribute backporting workload over existing team members for now as opposed to hiring new developers.  
This resulted in a distribution of some funds allocated to `backporting` and `general verification` over the period up to end of May.

In May, for the first time in the project's history, review bounties were offered and paid out for critical review work contracted for the development of a new feature (the new `getblocktemplatelight` [mining-related interface](https://read.cash/@bitcoincashnode/bchn-technical-bulletin-2020-05-04-51b0305f)).

BCHN made several payments relating to internationalization (`i18n`) capabilities on its website and translation work for previous published reports / articles.  
The general website translation functionality was completed by [Corentin Mercier](https://merc1er.com/). So far it has been used to deploy translations in several languages done by volunteers.

BCHN is co-funding [further work on Flipstarter](https://read.cash/@flipstarter/flipstarter-next-step-easy-to-deploy-same-user-experience-9fd8a8c1), which it plans to use on its website for future targeted fundraising campaigns. The first half of that contribution was paid on 19 May.

### Basic statistics about BCHN project ledger

These are derived from `hledger` tool's statistic report.

    Main file                : bchn.journal
    Included files           : prnc2exht3zxlrqqcat690tc85cvfuypngh7szx6mk.journal
                               pp03e95qz7yene7v4vdx2vfsqx4qsq4wfvw8z3pkjf.journal
    Transactions span        : 2020-02-22 to 2020-06-03 (102 days)
    Last transaction         : 2020-06-02 (1 days ago)
    Transactions             : 103 (1.0 per day)
    Transactions last 30 days: 21 (0.7 per day)
    Transactions last 7 days : 4 (0.6 per day)
    Payees/descriptions      : 1
    Accounts                 : 11 (depth 4)
    Commodities              : 2 (, BCH)

### Notes about balances displayed on block explorers

Block explorers may show a slightly lower amount for the main wallet address `prnc2exht3zxlrqqcat690tc85cvfuypngh7szx6mk` (1125.16530105 BCH at block 637855).

This is because a small amount in donations (currently 0.00075823 BCH) are stored on a subsequent address (`pp03e95qz7yene7v4vdx2vfsqx4qsq4wfvw8z3pkjf`) in BCHN's multi-signature wallet which was issued to Coin.dance who are collecting donations on behalf of node client projects. They requested this separate address for their own accounting purposes. BCHN will probably periodically receive some donations coming in from there - should significant amounts accrue, they will eventually be moved to the main wallet, but the report (as above) will reflect the total donated amounts on both our main and this secondary address.

* * *

### Links

Previous financial overviews:

*   [Financial overview in report of 14 March 2020](https://read.cash/@freetrader/bchn-lead-maintainer-report-2020-03-14-84f2992d#financial-overview)

*   [Financial overview in report of 31 March 2020](https://read.cash/@freetrader/bchn-lead-maintainer-report-2020-03-31-1e0a4c39#financial-overview)

*   [Financial overview in report of 15 April 2020](https://read.cash/@freetrader/bchn-lead-maintainer-report-2020-04-15-449fc115#financial-overview)

Flipstarter funding proposal:

*   [English, v1.1](https://gitlab.com/bitcoin-cash-node/bchn-project-management/bchn-pm-public/-/raw/master/finance/funding/campaigns/2020-q2-flipstarter/pdf/Bitcoin_Cash_Node_Flipstarter_Funding_Proposal_v1_1.pdf) (PDF)

*   [Chinese, v1.1](https://gitlab.com/bitcoin-cash-node/bchn-project-management/bchn-pm-public/-/blob/master/finance/funding/campaigns/2020-q2-flipstarter/pdf/Bitcoin_Cash_Node_Flipstarter_Funding_Proposal_v1_1_CN.pdf) (PDF)

*   [Spanish, 1.1](https://gitlab.com/bitcoin-cash-node/bchn-project-management/bchn-pm-public/-/blob/master/finance/funding/campaigns/2020-q2-flipstarter/proposal/proposal-es.mediawiki) (mediawiki)

Getting in touch with BCHN:

*   Website: [https://bitcoincashnode.org](https://bitcoincashnode.org)

*   Development & support Slack chat invite link:

    [https://join.slack.com/t/bitcoincashnode/shared_invite/zt-egg3c36d-2cglIrKcbnGpIQFaKFzCWA](https://join.slack.com/t/bitcoincashnode/shared_invite/zt-egg3c36d-2cglIrKcbnGpIQFaKFzCWA)

*   Telegram: [https://t.me/bitcoincashnode](https://t.me/bitcoincashnode) (there is a bridge channel to our Slack)

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
