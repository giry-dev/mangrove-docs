---
description: Audits
sidebar_position: 4
---


# Audits

Mangrove has been thoroughly audited. You will find here official reports of the audits we passed:

#### Mangrove core

* <a target="\_blank" href={require('/static/img/assets/ChainSecurity_Mangrove_Association_(ADDMA)_Mangrove_audit.pdf').default}>Audit #1</a>
* <a target="\_blank" href={require('/static/img/assets/ChainSecurity_Mangrove_Association_ADDMA_Mangrove_Core_audit_2.pdf').default}>Audit #2</a>

#### Strategies

* <a target="\_blank" href={require('/static/img/assets/ChainSecurity_Mangrove_Association_ADDMA_MangroveOrder_audit.pdf').default}>Audit #1</a>
* <a target="\_blank" href={require('/static/img/assets/ChainSecurity_Mangrove_Association_Mangrove_Strategies_audit.pdf').default}>Audit #2</a>
* <a target="\_blank" href={require('/static/img/assets/2024-02-14-NM-0162-Nethermind_SmartRouter_MangroveOrder_MangroveAmplifier_audit.pdf').default}>Audit #3</a>

#### Kandel

* <a target="\_blank" href={require('/static/img/assets/ChainSecurity_Mangrove_Association_ADDMA_Kandel_Strats_audit.pdf').default}>Audit</a>

:::note
* Mangrove core and Strategies each have two distinct audits, which are complementary to each other.
* [MangroveOrder](/docs/developers/strat-lib/technical-references/code/strats/src/strategies/MangroveOrder.md) is a peripheral contract for the Mangrove core protocol which allows users to submit limit orders such as:
    * [Good-til-cancelled](./web-app/trade/more-on-order-types.md#good-til-time-gtt) (GTC, or GTT)
    * [Fill-or-kill](./web-app/trade/more-on-order-types.md#fill-or-kill-fok) (FOK)

* [Kandel](./kandel/README.md) is "buy low, sell high" market making strategy that leverages Mangrove core protocol.