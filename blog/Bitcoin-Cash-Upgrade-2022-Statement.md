---
layout: layout.html
---

<% set('title', 'Bitcoin Cash Upgrade 2022') %>
<% set('date', '15 November 2021') %>
<% set('author', 'Bitcoin Cash Node Team') %>

### Bitcoin Cash Upgrade 2022

On May 15th, 2022, Bitcoin Cash will undergo a technical upgrade to further
expand its virtual machine (VM) contracting capabilities.
The upgrade will enable a variety of new financial products and services by:

1. Supporting arithmetic operations on significantly larger numbers.
   An expanded arithmetic range will allow contracts to manage very large
   balances with full precision, enabling contract-based treasuries and
   improving the efficiency of existing contract designs.

2. Adding new operations, including native introspection operations. These
   new operations will enable the development of far more secure wallets,
   efficient recurring payments, and more.

This upgrade has been discussed, developed and reviewed by a large
consortium of companies, development teams, and independent developers -
including all existing node software teams. As of November 15, 2021,
deliberation has concluded without contest, and the upgrade will activate
on May 15, 2022 without a network split.

The Bitcoin Cash Node (BCHN) software will include support for the 2022
Bitcoin Cash upgrade in its upcoming release v24.0.0.


#### Upgrade Schedule

* Sep 15, 2021 - The upgrade was activated on a public test network.
* Nov 15, 2021 - BCHN commits to upgrade scope and a November release of v24.0.0
* Feb 15, 2022 - All ecosystem software is expected to have a stable
  release supporting the upgrade.
* May 15, 2022 - Upgrade is activated on the main network.


#### Upgrade Preparation

For Bitcoin Cash users, this upgrade requires no preparation; payments
can safely be made and accepted throughout activation. Existing wallet
software will continue to function without upgrades.

Miners, exchanges and other node operators are advised to upgrade node
software before May 15, 2022 to avoid service disruptions. The upgrade
requires no downtime, and operations can proceed normally.


#### Technical Details

The May 15, 2022 upgrade includes the following consensus changes:

- [CHIP-2021-03: Bigger Script Integers](https://gitlab.com/GeneralProtocols/research/chips/-/blob/master/CHIP-2021-02-Bigger-Script-Integers.md)
  [(Discussion)](https://bitcoincashresearch.org/t/chip-2021-03-bigger-script-integers/39)
- [CHIP-2021-02: Native Introspection Opcodes](https://gitlab.com/GeneralProtocols/research/chips/-/blob/master/CHIP-2021-02-Add-Native-Introspection-Opcodes.md)
  [(Discussion)](https://bitcoincashresearch.org/t/chip-2021-02-add-native-introspection-opcodes/307)

For more BCHN-related information about the May 15, 2021 network upgrade,
please visit

  [https://upgradespecs.bitcoincashnode.org/2022-05-15-upgrade/](https://upgradespecs.bitcoincashnode.org/2022-05-15-upgrade/)

Sincerely,

The Bitcoin Cash Node team.
