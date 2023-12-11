---
description: Audits
sidebar_position: 4
---


# Audits

Mangrove has been thoroughly audited. You will find here official reports of the audits we passed:

* <a target="\_blank" href={require('/static/img/assets/ChainSecurity_Mangrove_Association_(ADDMA)_Mangrove_audit.pdf').default}>Mangrove protocol audit</a>

* <a target="\_blank" href={require('/static/img/assets/ChainSecurity_Mangrove_Association_ADDMA_MangroveOrder_audit.pdf').default}>MangroveOrder audit</a>

* <a target="\_blank" href={require('/static/img/assets/ChainSecurity_Mangrove_Association_ADDMA_Kandel_Strats_audit.pdf').default}>Kandel audit</a>

:::note
* [MangroveOrder](/docs/developers/strat-lib/technical-references/code/strats/src/strategies/MangroveOrder.md) is a peripheral contract for the Mangrove core protocol which allows users to submit limit orders such as:
    * [Good-til-cancelled](./web-app/trade/more-on-order-types.md#good-til-time-gtt) (GTC, or GTT)
    * [Fill-or-kill](./web-app/trade/more-on-order-types.md#fill-or-kill-fok) (FOK)

* [Kandel](./kandel/README.md) is "buy low, sell high" market making strategy that leverages Mangrove core protocol