---
description: Introducing Mangrove's Offer Lists a low level representation of (half) an order book.
sidebar_position: 1
---

# Offer Lists

## General structure

The offer list is the basic Mangrove data structure. Mangrove holds offer lists for **%%outbound|outbound%% token** (`outbound_tkn`), **%%inbound|inbound%% token** (`inbound_tkn`) pairs with a given **%%tick spacing|tickSpacing%%** (`tickSpacing`).
Offers are sorted in a tree (the “[tick tree](#tick-tree)") where each available price point (a [bin](#bins-doubly-linked-lists)) holds a doubly linked list of offers. Each offer promises `outbound_tkn` and requests `inbound_tkn`.

For example in a DAI-WETH offer list, DAI is the outbound token (i.e., to be sent by the offer) and WETH the inbound token (i.e., wanted by the offer).

:::danger There are 2 offer lists per market

A full market will always feature two offer lists. For instance, a WETH/DAI **market** has one DAI-WETH offer list (where WETH is requested and DAI is offered), and a WETH-DAI offer list (where DAI is requested and WETH is offered).

[Mangrove's SDK ](../../../SDK/README.md) offers Market abstractions that allows liquidity providers and takers to interact with Mangrove using standard trading _base_ and _quote_ denominations.

:::
 ### Example
 
Here's a sample DAI-WETH offer list with two offers. Only the main characteristics of the offers are shown (see the [offer data structure](reactive-offer/offer-data-structures.md#mgvlib-offer)).


|  Tick   | Ratio (WETH/DAI) | Offer ID | Gives (DAI) | Gas required | Maker Contract | Offer Gas Price |
| ------- | ---------------- | -------- | ----------- | ------------ | -------------- | --------------- |
| -79815  | 0.0003419        | 77       | 925.26      | 250,000      | 0x5678def      | 150             |
|         |                  | 177      | 916.47      | 270,000      | 0x9101ghi      | 170             |   
| -79748  | 0.0003442        | 42       | 871.76      | 300,000      | 0x1234abc      | 200             |


:::caution **Decimals**

We display human-readable values in the examples, but Mangrove stores raw token values and never uses the `decimals` field of a token.

:::

## Some terminology

### Tick tree

Offers are stored in a tree we call a “tick tree”. Thanks to this tree structure, offer operations (insert, update, and retract) take constant time (the height of the tree is fixed).

### Bins (doubly linked lists)

Below the bottom of the tree are bins.

import useBaseUrl from '@docusaurus/useBaseUrl';

<div class="text--center">
<img src={useBaseUrl('/img/assets/bin.png')} width="60%"/>
</div>

:::caution **Note**
All offers in a bin have the same tick. During a market order, offers in a bin are executed in order, from the first to the last. Inserted offers are always appended at the end of a bin.
:::

Bins are laid in sequence. In the context of an offer list, each bin has an associated tick (and a tick determines a price). If a bin has tick `t`, the following bin has tick `t+tickSpacing`.

### Offer ID

The identifier of the offer in the offer list.

:::danger **Important**

Two offers may have the same ID as long as they belong to different offer lists. For instance, there may be an offer with ID 42 on the WETH-DAI offer list with different volumes, gas required, maker contract, etc., than the offer with ID 42 in the DAI-WETH offer list shown above.

:::

### Gives, ratio and entailed price

Taken together, the **gives** and **ratio** values define 1) a max volume, 2) a price. The **entailed price** `p` is `p = ratio`:
* An offer promises to deliver up to **gives** %%outbound|outbound%% tokens at a price of `p` tokens delivered per %%inbound|inbound%% token received.
* How much an offer wants can be simply calculated by multiplying the Gives by the ratio (ex: `offer ID 77 wants = 925.26 * 0.0003419 = 0.316 WETH`).

:::info **Examples**

Based on the above table:
* The offer with ID 77 promises 925.26 DAI at a ratio of 0.0003419, i.e. it wants `925.26 * 0.0003419 = 0.316` WETH.
* The offer with ID 177 is part of the same bin as offer 77, hence has a similar tick and ratio. It promises 916.47 DAI at a ratio of 0.0003419, i.e. it wants `916.47 * 0.0003419 = 0.313` WETH.
* The offer with ID 42 is in a different bin, and has a different tick and ratio. It promises 871.76 DAI at a ratio of 0.0003442, i.e. it wants `871.76 * 0.0003442 = 0.300` WETH.

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

Several [configuration](../governance-parameters/mangrove-configuration.md) parameters determine how new offers are inserted. Some are [global](../governance-parameters/global-variables.md) to Mangrove, some are [offer list specific.](../governance-parameters/local-variables.md) See [Governance](../governance-parameters/README.md) section for details.
