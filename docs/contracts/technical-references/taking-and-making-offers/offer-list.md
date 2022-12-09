---
description: Introducing Mangrove's Offer Lists a low level representation of (half) an order book.
sidebar_position: 1
---

# Offer Lists

## General structure

The offer list is the basic Mangrove data structure. It contains offers (created by offer makers) that promise an **%%outbound|outbound%% token**, and request an **%%inbound|inbound%% token** in return (offer takers execute these offers by providing the **inbound token**, and receive **outbound tokens** in return).

For example in a DAI-wETH offer list, DAI is the outbound token (i.e., to be sent by the offer) and wETH the inbound token (i.e., wanted by the offer).

:::info Relationship to markets

A full market will always feature two offer lists. For instance, a wETH/DAI **market** has one DAI-wETH offer list (where wETH is requested and DAI is offered), and a wETH-DAI offer list (where DAI is requested and wETH is offered).

[Mangrove's SDK ](../../../SDK/README.md) offers Market abstractions that allows liquidity providers and takers to interact with Mangrove using standard trading _base_ and _quote_ denominations.

:::

Here's a sample DAI-wETH offer list with two offers. Only the main characteristics of the offers are shown (see the [offer data structure](reactive-offer/offer-data-structures.md#mgvlib-offer)).


| Rank | Offer ID | Wants (wETH) | Gives (DAI) | Gas required | Maker Contract | Offer Gas Price |
| ---- | -------- | ------------ | ----------- | ------------ | -------------- | --------------- |
| #1   | 77       | 1            | 2 925.26    | 250,000      | 0x5678def      | 150             |
| #2   | 42       | 0.3          | 871.764     | 300,000      | 0x1234abc      | 200             |

:::caution **Decimals**

We display human-readable values in the examples, but Mangrove stores raw token values and never uses the `decimals` field of a token.

:::

## Some terminology

### Offer rank

Offers are ordered from best to worst. Offers are compared based on _price_, and then on [_gas required_](#gas-required), if they have the same price.

:::info **Example**

The price of the offer with ID 42 is ~0.0003441298 wETH per DAI while the price of offer with ID 77 is ~0.00034185 wETH per DAI. The offer with ID 77 is therefore the best offer (lowest price) of this offer list, and is ranked first.

:::

### Offer ID

The identifier of the offer in the offer list.

:::danger **Important**

Two offers may have the same ID as long as they belong to different offer lists. For instance, there may be an offer with ID 42 on the wETH-DAI offer list with different volumes, gas required, maker contract, etc., than the offer with ID 42 in the DAI-wETH offer list shown above.

:::

### Wants, gives and entailed price

Taken together, the **wants** and **gives** values define 1) a max volume, 2) a price. The **entailed price** `p` is `p = wants/gives`, and an offer promises delivery of up to **gives** %%outbound|outbound%% tokens at a price of `p` tokens delivered per %%inbound|inbound%% token received.

:::info **Examples**

* The offer with ID 42 _wants_ 0.3 wETH to deliver its promised 871.764 DAI.
* If the offer with ID 77 is executed and receives 0.5 wETH, it _gives_ 1462.63 DAI.

:::

### Gas required

The maximum amount of gas the %%maker contract|maker-contract%% managing the offer will be allowed to spend if called by Mangrove.

:::info **Example**

The offer with ID 77 may consume up to 250K gas units.

:::

### Maker Contract

The address of the %%maker contract|maker-contract%% bound to the offer. The %%makerExecute|makerExecute%% function of this contract's %%offer logic|offer-logic%% will be called when one of its offers is executed, and the corresponding %%makerPosthook|makerPosthook%% will be called immediately after trade settlement.

An offer _may_ also be posted from EOA with no logic attached - see %%On-the-fly offers|on-the-fly-offer%%.

### Gas Price

Gas price that was used to compute the %%offer provision|provision%%. If the offer fails to deliver the promised **outbound tokens**, it will be charged based on this gasprice.

## Offer list configuration

Several [configuration](../governance-parameters/mangrove-configuration.md) parameters determine how new offers are inserted. Some are [global](../governance-parameters/mangrove-configuration.md#mgvlib.global) to Mangrove, some are [offer list specifics.](../governance-parameters/mangrove-configuration.md#mgvlib.local) See [Governance](../governance-parameters/README.md) section for details.
