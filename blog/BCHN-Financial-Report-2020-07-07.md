---
layout: layout.html
---

<% set('title', 'BCHN Financial Report 2020-07-07') %>
<% set('date', '7 July 2020') %>
<% set('author', 'Bitcoin Cash Node Team') %>

The Bitcoin Cash Node (BCHN) project practices and promotes transparent reporting.

Project funds are held by team members in a 3-of-5 multi-signature wallet.

This wallet is used to receive [donations](https://bitcoincashnode.org/#donate) and pay for project expenses (general funding of BCH Node operations, including personnel, equipment and contracting).

All our transactions are on the Bitcoin Cash (BCH) blockchain.

We use open source wallet software ([Electron Cash](https://www.electroncash.org/)) and maintain our accounts using [plain text accounting](https://plaintextaccounting.org/) in a [ledger file](https://gitlab.com/bitcoin-cash-node/bchn-project-management/bchn-pm-public/-/blob/master/finance/bookkeeping/prnc2exht3zxlrqqcat690tc85cvfuypngh7szx6mk.journal) which is part of the public [project management repository](https://gitlab.com/bitcoin-cash-node/bchn-project-management/bchn-pm-public) on GitLab.

Based on this public ledger, the project can account for all its income and expenses and produce financial reports using auditable open source software.

Please refer to the [Links](https://read.cash/@bitcoincashnode/bchn-financial-report-2020-07-07-d04c7e65#links) section at the bottom for links to previous financial reports.

### Project account details as of 2020-07-06

The statements below cover transactions up to and including on 6 July 2020.

A total of 1167.32876742 BCH had been received in donations, most of that via the Flipstarter campaign which [successfully completed](https://bitcoincashnode.org/en/newsroom/bchn-flipstarted) on 26 April, yielding 978 BCH in funding for BCHN's initial [project proposal](https://gitlab.com/bitcoin-cash-node/bchn-project-management/bchn-pm-public/-/raw/master/finance/funding/campaigns/2020-q2-flipstarter/pdf/Bitcoin_Cash_Node_Flipstarter_Funding_Proposal_v1_1.pdf).

All expenses below fall within the scope of our funding proposal (link above). Since project start, a total of 83.53292538 BCH has been spent so far, broken down as indicated. About 55% of that total amount has been spent since the last reporting period (see Expenses section for breakdown).

1083.79584204 BCH was held by the project at the time of writing.

           1083.79584204 BCH  assets:crypto:bitcoincash
             83.53292538 BCH  expenses
             76.68223335 BCH    development
             53.58830244 BCH      backporting
              2.85371580 BCH      bounty:review
              5.48696844 BCH      general verification
             14.75324667 BCH      website
              6.80363425 BCH        flipstarter
              7.94961242 BCH        i18n
              0.06955928 BCH    infrastructure
              0.00010529 BCH    mining fees
              5.58958995 BCH    pr:representative
              1.19143751 BCH    translation
          -1167.32876742 BCH  income:donation

### Income

Currently BCHN derives all its income from donations.

The donations below include those made directly to our project donation address and those forwarded from tips on this site.

We thank all our donors for their support!

<figure class="text-center">
    <img src="/static/img/newsroom/2020-07-07/income.png" class="rounded img-fluid">
</figure>

### Expenses

Below are the project's expenses since the last overview. The `mining fees` have been excluded (they are the network fees paid by BCHN when transacting on the Bitcoin Cash network - around 516 to 616 satoshis per transaction during this time.)

        2020/06/23  ex:dev:website:flipstarter    3.44122799 BCH
        2020/06/30  ex:pr:representative          5.58958995 BCH
        2020/06/30  ex:development:backporting    9.58291956 BCH 
        2020/06/30  ex:development:backporting    27.54447756 BCH

The flipstarter payment constitutes the second (final) payment for development of [easy deployment](https://read.cash/@flipstarter/flipstarter-next-step-easy-to-deploy-same-user-experience-9fd8a8c1) functionality by Corentin Mercier.

No review bounties were paid in June.

Backport related work comprised the majority of expenses.

#### Notes about balances displayed on block explorers

Block explorers may show a slightly lower amount for the main wallet address `prnc2exht3zxlrqqcat690tc85cvfuypngh7szx6mk` (1,083.79508381 BCH at block 642,846).

This is because a small amount in donations (currently 0.00075823 BCH) are stored on a subsequent address (`pp03e95qz7yene7v4vdx2vfsqx4qsq4wfvw8z3pkjf`) in BCHN's multi-signature wallet which was issued to Coin.dance who are collecting donations on behalf of node client projects. They requested this separate address for their own accounting purposes. BCHN will probably periodically receive some donations coming in from there - should significant amounts accrue, they will eventually be moved to the main wallet, but the report (as above) will reflect the total donated amounts on both our main and this secondary address.

### SLP donation address

The project has a [SimpleLedger (SLP)](https://simpleledger.cash) token donation address.

`simpleledger:qrjv4klcn9z5kqeye3ps64pr6aa4mzux8cy776pm6k`

Currently, the project has received and is holding a donation of 2,000,000 SPICE 🌶️ on that address.

As we plan to conduct our payments in Bitcoin Cash, we have yet to set up a ledger file to account for token holdings. We may do so for main tokens like SPICE, but not generally for all random tokens sent our way, as this would be a way to spam the project.

* * *

### Links

Previous financial overviews:

*   [Financial overview in report of 14 March 2020](https://read.cash/@freetrader/bchn-lead-maintainer-report-2020-03-14-84f2992d#financial-overview)

*   [Financial overview in report of 31 March 2020](https://read.cash/@freetrader/bchn-lead-maintainer-report-2020-03-31-1e0a4c39#financial-overview)

*   [Financial overview in report of 15 April 2020](https://read.cash/@freetrader/bchn-lead-maintainer-report-2020-04-15-449fc115#financial-overview)

*   [BCHN Financial Report 2020-06-03](https://read.cash/@bitcoincashnode/bchn-financial-report-2020-06-03-d2a0232f)

*   Flipstarter funding proposal:

    *   [English, v1.1](https://gitlab.com/bitcoin-cash-node/bchn-project-management/bchn-pm-public/-/raw/master/finance/funding/campaigns/2020-q2-flipstarter/pdf/Bitcoin_Cash_Node_Flipstarter_Funding_Proposal_v1_1.pdf) (PDF)

    *   [Chinese, v1.1](https://gitlab.com/bitcoin-cash-node/bchn-project-management/bchn-pm-public/-/blob/master/finance/funding/campaigns/2020-q2-flipstarter/pdf/Bitcoin_Cash_Node_Flipstarter_Funding_Proposal_v1_1_CN.pdf) (PDF)

    *   [Spanish, 1.1](https://gitlab.com/bitcoin-cash-node/bchn-project-management/bchn-pm-public/-/blob/master/finance/funding/campaigns/2020-q2-flipstarter/proposal/proposal-es.mediawiki) (mediawiki)

*   Getting in touch with BCHN:

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

*   Follow us on Twitter: [https://twitter.com/bitcoincashnode](https://twitter.com/bitcoincashnode)
