---
layout: layout.html
---

<% set('title', 'BCHN Financial Report 2021-06-11') %>
<% set('date', '11 June 2021') %>
<% set('author', 'Bitcoin Cash Node Team') %>

The Bitcoin Cash Node (BCHN) project practices and promotes transparent reporting.

Project funds are held by team members in a 3-of-5 multi-signature wallet.

This wallet is used to receive [donations](https://bitcoincashnode.org/#donate) and pay for project expenses (general funding of BCH Node operations, including personnel, equipment and contracting).

All our transactions are on the Bitcoin Cash (BCH) blockchain.

We use open source wallet software ([Electron Cash](https://www.electroncash.org/)) and maintain our accounts using [plain text accounting](https://plaintextaccounting.org/) in a [ledger file](https://gitlab.com/bitcoin-cash-node/bchn-project-management/bchn-pm-public/-/blob/master/finance/bookkeeping/bchn.journal) which is part of the public [project management repository](https://gitlab.com/bitcoin-cash-node/bchn-project-management/bchn-pm-public) on GitLab.

Based on this public ledger, the project can account for all its income and expenses and produce financial reports using auditable open source software.

Please refer to the Links section at the bottom for links to previous financial reports.


### Project account details as of 2021-06-11

The statements below cover transactions up to and including on June 10, 2021
(more precisely, up to block 690,897).

3957.65628515 BCH was held by the project at the time of writing.
This represents an decrease in available funds of about 59.16 BCH since the
previous report in April 2021.
The project remains in an excellent financial state.

All expenses below fall within the scope of our funding proposal (link above).
Since project start, a total of 591.88857884 BCH has been spent so far,
broken down as indicated.

                              assets:crypto
              0.13095132 ABC    bchabc
           3957.65628515 BCH    bitcoincash
            591.88857884 BCH  expenses
            536.23495784 BCH    development
             87.97578591 BCH      backporting
             40.54174199 BCH      bounty
              0.25000000 BCH        doc
              0.50000000 BCH        feature
              6.09334702 BCH        review
             11.00000000 BCH        security
              6.75000000 BCH        test
             15.94839497 BCH        website
             62.65460295 BCH      daa
            315.40196352 BCH      general
              5.48696844 BCH      general verification
             24.17389503 BCH      website
              6.80363425 BCH        flipstarter
              9.42064836 BCH        general
              7.94961242 BCH        i18n
              7.98748784 BCH    infrastructure
                                mining fees
              0.00789288 BCH      bch
              0.00705620 ABC      bchabc
             45.40359841 BCH    pr
             43.40359841 BCH      representative
              2.00000000 BCH      video
              2.25464187 BCH    translation
                              income
          -4389.94333004 BCH    donation
             -0.16616520 ABC    donation_replay
          -2063.99958445 ABC  equity:abc_fork

### Income

Currently BCHN derives its income mainly from donations.

The donations below include those made directly to our project donation
address and those forwarded from tips on this site.

A total of 4389.94333004 BCH had been received in donations since the start
of the project in February 2020. About 22% of that was raised via the original Flipstarter campaign which [successfully completed](https://bitcoincashnode.org/en/newsroom/bchn-flipstarted) on 26 April 2020, yielding 978 BCH in funding for BCHN's initial [project proposal](https://gitlab.com/bitcoin-cash-node/bchn-project-management/bchn-pm-public/-/raw/master/finance/funding/campaigns/2020-q2-flipstarter/pdf/Bitcoin_Cash_Node_Flipstarter_Funding_Proposal_v1_1.pdf).
1000 BCH was received in an anonymous donation in August 2020, another 1000 BCH in January 2021 and a 1000 BCH more in February 2021.
The remainder was received from several business and personal donations.

There are many other anonymous donations making up the remainder, but some
of our biggest known donors include ASICseer.com, Marc de Mesel and
Georg Engelmann.

We thank everyone who has generously donated to us during the time since
our last report.


### Expenses

Below are the project's expenses since the last overview on April 17, 2021.
They amount to 59.24736180 BCH over that period.
The mining fees have been excluded.

        2021-04-30 ex:pr:representative        1.32696391 BCH
        2021-04-30 ex:development:general      8.81104034 BCH
        2021-05-03 ex:development:general      0.40281974 BCH
        2021-05-03 ex:development:general      3.39805825 BCH
        2021-05-05 ex:development:general      0.58920000 BCH
        2021-05-09 ex:development:general      2.50000000 BCH
        2021-05-10 ex:development:general      7.09795524 BCH
        2021-05-14 ex:development:bounty:test  0.50000000 BCH
        2021-05-31 ex:development:general      4.67153280 BCH
        2021-06-01 ex:pr:representative        1.81159420 BCH
        2021-06-01 ex:development:general     10.14492800 BCH
        2021-06-01 ex:development:general      9.55882350 BCH
        2021-06-04 ex:development:general      8.43444582 BCH

In the time since the last report, BCHN activity was focused on the
May 15, 2021 upgrade, further DSProof work, draft implementation of
some CHIPs, general optimization, bug fixing and user support.

One test development bounty of 0.5 BCH was awarded in this period.

3.13855811 BCH were spent on public relations, covering two monthly
payments to our representative.

56.10880369 BCH were spent on client software development and maintenance.


### Basic statistics about BCHN project ledger

These are derived from hledger tool's statistic report.

        Main file                : bchn.journal
        Included files           : prnc2exht3zxlrqqcat690tc85cvfuypngh7szx6mk.journal
                                   prnc2exht3zxlrqqcat690tc85cvfuypngh7szx6mk_replays_to_abc.journal
                                   pp03e95qz7yene7v4vdx2vfsqx4qsq4wfvw8z3pkjf.journal
        Transactions span        : 2020-02-22 to 2021-06-06 (470 days)
        Last transaction         : 2021-06-05 (6 days ago)
        Transactions             : 2357 (5.0 per day)
        Transactions last 30 days: 13 (0.4 per day)
        Transactions last 7 days : 3 (0.4 per day)
        Payees/descriptions      : 1
        Accounts                 : 25 (depth 4)
        Commodities              : 3 (, ABC, BCH)


### BCHA fork coin airdrop and policy

On November 15, 2020, Bitcoin ABC created a spin-off currency by forking
away from the Bitcoin Cash (BCH) currency.

This new coins is referred to as 'ABC' or 'bchabc' in our ledger files.

The BCHN project received an amount of ABC's coin equal to the amount
of BCH held in our wallet at the time and entirely converted these (approx.
2064 ABC coins at the time) into around 159.6 BCH by November 19, 2020.

Since then, the project holds virtually no more ABC coins except a minimal
amount which has been received since due to replaying of regular donations
made to our BCH wallet (the 'donation_replay' income position).

If ABC coin donations reach a significant amount, the project may convert
them to BCH in the future as it does not intend to hold them.
At time of this report the ABC coin holdings amounted to less than 5 USD,
the decrease from the last report being due mostly to a price decrease
of the ABC coin.


### SLP donation address

The project has a SimpleLedger (SLP) token donation address.

    simpleledger:qrjv4klcn9z5kqeye3ps64pr6aa4mzux8cy776pm6k

Currently, the project has received and is holding donations of
2,000,000 SPICE 🌶️ , 1,000 USDt and few other tokens have been
sent to the address.

As we conduct our payments exclusively in Bitcoin Cash up to now, we have
yet to set up a ledger file to account for token holdings. We may do so for
main tokens like SPICE, but not generally for all random tokens sent our way,
as this would be a way to spam the project.


* * *

### Links

Previous financial overviews:

*   [Financial overview in report of 14 March 2020](https://read.cash/@freetrader/bchn-lead-maintainer-report-2020-03-14-84f2992d#financial-overview)

*   [Financial overview in report of 31 March 2020](https://read.cash/@freetrader/bchn-lead-maintainer-report-2020-03-31-1e0a4c39#financial-overview)

*   [Financial overview in report of 15 April 2020](https://read.cash/@freetrader/bchn-lead-maintainer-report-2020-04-15-449fc115#financial-overview)

*   [BCHN Financial Report 2020-06-03](https://read.cash/@bitcoincashnode/bchn-financial-report-2020-06-03-d2a0232f) (3 June 2020)

*   [BCHN Financial Report 2020-07-07](https://read.cash/@bitcoincashnode/bchn-financial-report-2020-07-07-d04c7e65) (7 July 2020)

*   [BCHN Financial Report 2020-09-03](https://read.cash/@bitcoincashnode/bchn-financial-report-2020-09-03-a477d4e2) (9 September 2020)

*   [BCHN Financial Report 2020-10-20](https://read.cash/@bitcoincashnode/bchn-financial-report-2020-10-20-85ecb54c) (20 October 2020)

*   [BCHN Financial Report 2020-12-05](https://read.cash/@bitcoincashnode/bchn-financial-report-2020-12-05-db64dbdf) (5 December 2020)

*   [BCHN Financial Report 2021-02-08](https://read.cash/@bitcoincashnode/bchn-financial-report-2021-02-08-ae9d834d) (8 February 2021)

*   [BCHN Financial Report 2021-04-17](https://read.cash/@bitcoincashnode/bchn-financial-report-2021-04-17-d849b874)

Flipstarter funding proposal:

*   [English, v1.1](https://gitlab.com/bitcoin-cash-node/bchn-project-management/bchn-pm-public/-/raw/master/finance/funding/campaigns/2020-q2-flipstarter/pdf/Bitcoin_Cash_Node_Flipstarter_Funding_Proposal_v1_1.pdf) (PDF)

*   [Chinese, v1.1](https://gitlab.com/bitcoin-cash-node/bchn-project-management/bchn-pm-public/-/blob/master/finance/funding/campaigns/2020-q2-flipstarter/pdf/Bitcoin_Cash_Node_Flipstarter_Funding_Proposal_v1_1_CN.pdf) (PDF)

*   [Spanish, 1.1](https://gitlab.com/bitcoin-cash-node/bchn-project-management/bchn-pm-public/-/blob/master/finance/funding/campaigns/2020-q2-flipstarter/proposal/proposal-es.mediawiki) (mediawiki)

Getting in touch with BCHN:

*   Website: [https://bitcoincashnode.org](https://bitcoincashnode.org)

*   Development & support Slack chat invite link:

    [https://join.slack.com/t/bitcoincashnode/shared_invite/zt-egg3c36d-2cglIrKcbnGpIQFaKFzCWA](https://join.slack.com/t/bitcoincashnode/shared_invite/zt-egg3c36d-2cglIrKcbnGpIQFaKFzCWA)

*   Telegram: https://t.me/bitcoincashnode (there is a bridge channel to our Slack)

*   IRC channel: Join **#bchnode** on Freenode (we see messages on our Slack via an IRC bridge channel)

*   Logs of our development Slack: [http://logs.bchnode.org/](http://logs.bchnode.org/)

*   Main development repository on GitLab:

    [https://gitlab.com/bitcoin-cash-node/bitcoin-cash-node](https://gitlab.com/bitcoin-cash-node/bitcoin-cash-node)

*   Easy download link via our website:

    [https://bitcoincashnode.org/download.html](https://bitcoincashnode.org/download.html)

*   Full releases on Github:

    [https://github.com/bitcoin-cash-node/bitcoin-cash-node/releases](https://github.com/bitcoin-cash-node/bitcoin-cash-node/releases)

*   Donation address: [https://bitcoincashnode.org/#donate](https://bitcoincashnode.org/#donate)

*   Follow us on Twitter: [https://twitter.com/bitcoincashnode](https://twitter.com/bitcoincashnode)
