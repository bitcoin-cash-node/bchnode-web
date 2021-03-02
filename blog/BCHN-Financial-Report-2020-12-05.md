---
layout: layout.html
---

<% set('title', 'BCHN Financial Report 2020-12-05') %>
<% set('date', '5 December 2020') %>
<% set('author', 'Bitcoin Cash Node Team') %>

The Bitcoin Cash Node (BCHN) project practices and promotes transparent
reporting.

Project funds are held by team members in a 3-of-5 multi-signature wallet.

This wallet is used to receive [donations](https://bitcoincashnode.org/#donate)
and pay for project expenses (general funding of BCH Node operations,
including personnel, equipment and contracting).

All our spending transactions are on the Bitcoin Cash (BCH) blockchain
except when we dispose of airdropped equity caused by fork coins which we
convert into BCH.

We use open source wallet software ([Electron Cash](https://www.electroncash.org/))
and maintain our accounts using [plain text accounting](https://plaintextaccounting.org/)
in a [ledger file](https://gitlab.com/bitcoin-cash-node/bchn-project-management/bchn-pm-public/-/blob/master/finance/bookkeeping/prnc2exht3zxlrqqcat690tc85cvfuypngh7szx6mk.journal)
which is part of the public
[project management repository](https://gitlab.com/bitcoin-cash-node/bchn-project-management/bchn-pm-public)
on GitLab.

Based on this public ledger, the project can account for all its income and
expenses and produce financial reports using auditable open source software.

Please refer to the Links section at the bottom for links to previous
financial reports.


### Project account details as of 2020-12-05

The statements below cover transactions up to and including on December 04, 2020
(more precisely, up to block 664,382).

2177.84148852 BCH was held by the project at the time of writing.
This represents an increase in available funds of about 67.9 BCH since the
previous report in October. The project remains in a very good financial state.

All expenses below fall within the scope of our funding proposal (link above).
Since project start, a total of 370.61975809 BCH has been spent so far,
broken down as indicated.

                              assets:crypto
              0.08897101 ABC    bchabc
           2177.84148852 BCH    bitcoincash
            370.61975809 BCH  expenses
            331.13872961 BCH    development
             87.97578591 BCH      backporting
             39.04174199 BCH      bounty
              0.25000000 BCH        doc
              0.50000000 BCH        feature
              6.09334702 BCH        review
             10.00000000 BCH        security
              6.25000000 BCH        test
             15.94839497 BCH        website
             62.65460295 BCH      daa
            113.40409007 BCH      general
              5.48696844 BCH      general verification
             22.57554025 BCH      website
              6.80363425 BCH        flipstarter
              7.82229358 BCH        general
              7.94961242 BCH        i18n
              6.88657041 BCH    infrastructure
                                mining fees
              0.00107688 BCH      bch
              0.00705620 ABC      bchabc
             30.68725417 BCH    pr
             28.68725417 BCH      representative
              2.00000000 BCH      video
              1.90612702 BCH    translation
                              income
          -2388.85971266 BCH    donation
             -0.12418489 ABC    donation_replay
          -2063.99958445 ABC  equity:abc_fork


### Income

Currently BCHN derives its income mainly from donations.

The donations below include those made directly to our project donation
address and those forwarded from tips on this site.

A total of 2388.85971266 BCH had been received in donations since the start
of the project in February 2020. About half of that was raised via a Flipstarter campaign which [successfully completed](https://bitcoincashnode.org/en/newsroom/bchn-flipstarted) on 26 April, yielding 978 BCH in funding for BCHN's initial [project proposal](https://gitlab.com/bitcoin-cash-node/bchn-project-management/bchn-pm-public/-/raw/master/finance/funding/campaigns/2020-q2-flipstarter/pdf/Bitcoin_Cash_Node_Flipstarter_Funding_Proposal_v1_1.pdf).
Another 1000 BCH was received in an anonymous donation in August 2020, and the remainder is from several business and personal donations.

There are many other anonymous donations making up the remainder, but some
of our biggest known donors include ASICseer.com, Marc de Mesel and
Georg Engelmann.

We thank everyone who has generously donated to us during the time since
our last report.


### Airdrop

On November 15, 2020, Bitcoin ABC created a spin-off currency by forking
away from the Bitcoin Cash (BCH) currency.

The BCHN project received an amount of ABC's new coin equal to the amount
of BCH held in our wallet at the time,
and announced on November 18, 2020 that the ABC coin had been transferred
to an exchange with intent to sell.

By November 19, 2020, the sale of approximately 2064 ABC coins had been
executed, yielding just over 159.6 BCH which was transferred back to our
wallet.

Since then, the project holds virtually no more ABC coins except a minimal
amount which has been received since due to replaying of regular donations
made to our BCH wallet.


### Expenses

Below are the project's expenses since the last overview on October 20, 2020.
They amount to 93.18220457 BCH over that period.
The mining fees have been excluded.

        2020/10/21  ex:de:bounty:test       5.00000000 BCH
        2020/10/31  ex:de:general           3.03030303 BCH
        2020/10/31  ex:de:website:general   1.70454550 BCH
        2020/10/31  ex:pr:representative    4.73484848 BCH
        2020/10/31  ex:de:general          12.68939394 BCH
        2020/11/03  ex:de:general          18.60833300 BCH
        2020/11/09  ex:infrastructure       0.48148148 BCH
        2020/11/16  ex:de:bounty:security  10.00000000 BCH
        2020/11/20  ex:translation          0.26000000 BCH
        2020/11/30  ex:de:general          13.75838926 BCH
        2020/11/30  ex:de:website:general   2.20338983 BCH
        2020/12/01  ex:pr:representative    4.34027778 BCH
        2020/12/01  ex:de:general           5.88173178 BCH
        2020/12/03  ex:de:general           2.79720280 BCH
        2020/12/03  ex:de:general           7.69230769 BCH

In the time since the last report, BCHN activity was focused on general
development (with backporting activity reduced due to developer resource
constraints).

Two bounties were awarded in this period, one for test development and one
for a responsible security disclosure.

4.16793533 BCH were spent on website maintenance and improvement.

64.4576615 BCH were spent on client software (and documentation) development.

9.07512626 BCH were spent on public relations, covering two monthly
payments to our representative.

0.48148148 BCH were spent on project infrastructure.


### Basic statistics about BCHN project ledger

These are derived from hledger tool's statistic report.

        Main file                : bchn.journal
        Included files           : prnc2exht3zxlrqqcat690tc85cvfuypngh7szx6mk.journal
                                   pp03e95qz7yene7v4vdx2vfsqx4qsq4wfvw8z3pkjf.journal
        Transactions span        : 2020-02-22 to 2020-12-05 (287 days)
        Last transaction         : 2020-12-04 (1 days ago)
        Transactions             : 252 (0.9 per day)
        Transactions last 30 days: 35 (1.2 per day)
        Transactions last 7 days : 13 (1.9 per day)
        Payees/descriptions      : 1
        Accounts                 : 25 (depth 4)
        Commodities              : 3 (, ABC, BCH)


### Consolidation of funds after November 15, 2020

Prior to the November upgrade, a small amount in donations (0.00075823 BCH)
was stored on a second address in our wallet (`pp03e95qz7yene7v4vdx2vfsqx4qsq4wfvw8z3pkjf`).
This adddress was issued to Coin.dance who were collecting donations on behalf
of node client projects.

As part of replay protection for its BCH transactions, the BCHN project has
consolidated these funds back into the main wallet address after the recent
BCH / BCHA split.

At the time of writing there are no funds on the secondary address, but this
may change if Coin.dance collects and forwards any further funds to that
address.


### SLP donation address

The project has a SimpleLedger (SLP) token donation address.

`simpleledger:qrjv4klcn9z5kqeye3ps64pr6aa4mzux8cy776pm6k`

Currently, the project has received and is holding donations of
2,000,000 SPICE 🌶️ and 1,000 USDt on that address.

A few other tokens have been sent to the address.

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

*   [BCHN Financial Report 2020-09-03](https://read.cash/@bitcoincashnode/bchn-financial-report-2020-09-03-a477d4e2) (20 October 2020)

&   [BCHN Financial Report 2020-10-20](https://read.cash/@bitcoincashnode/bchn-financial-report-2020-10-20-85ecb54c) (5 December 2020)

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
