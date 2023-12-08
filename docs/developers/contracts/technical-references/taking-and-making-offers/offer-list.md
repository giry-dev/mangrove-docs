---
description: Introducing Mangrove's Offer Lists a low level representation of (half) an order book.
sidebar_position: 2
---

# Offer Lists

## General structure

:::danger There are 2 offer lists per market
An "offer list" corresponds to either the "asks" or "bids" side of an order book. Mangrove being fully on-chain, there is no actual concept of an order book, only offer lists.

Hence, a full market will always feature two offer lists. For instance, a WETH/DAI market has one DAI-WETH offer list (where WETH is requested and DAI is offered), and a WETH-DAI offer list (where DAI is requested and WETH is offered).

[Mangrove's SDK ](../../../SDK/README.md) offers Market abstractions that allows liquidity providers and takers to interact with Mangrove using standard trading _base_ and _quote_ denominations.
:::

### Dealing with offer lists

For more information on ticks, head over the [previous section](../tick-ratio.md).

1. An offer list is identified by a tuple of (`outbound_tkn`, `inbound_tkn`, `tickSpacing`). For example in a WETH-DAI offer list:
    * `outbound_tkn` is the address of the WETH token (i.e., sent by the offer)
    * `inbound_tkn` is the address of the DAI token (i.e., wanted by the offer)
    * `tickSpacing` corresponds to the space between [bins](#bins-doubly-linked-lists)

2. Offers are grouped by tick into "[tick bins](../tick-ratio.md#3-tick-bins)" - one bin per valid tick. Within a tick bin, the offers are stored in a FIFO doubly linked-list (an offer points to the previous **and** to the next one).

import useBaseUrl from '@docusaurus/useBaseUrl';

<div class="text--center">
<img src={useBaseUrl('/img/assets/bin.png')} width="60%"/>
</div>

3. Posting and updating offers are done with constant gas thanks to tick bins being organized internally in a [tree structure](../tick-ratio.md#2-tick-tree).


 ### Example

We will repeat ourselves a bit here, but grasping the concept of offer lists is very important for you to interact with Mangrove. Let's take our WETH/DAI market, and look at its two corresponding offer lists:
* DAI-WETH
* WETH-DAI

:::caution Note
If you haven't done it yet, we strongly suggest that you first get familiar with the [Ticks and ratio](../tick-ratio.md#price--wants) page.
:::

#### Offer list #1 - DAI-WETH

In this DAI-WETH offer list:
* WETH is the base token
* DAI the quote token (giving DAI to buy WETH)
* Thus, since the ratio is in WETH/DAI, **the price is the `ratio`**

We can illustrate this with the following sample DAI-WETH offer list with three offers. Only the main characteristics of the offers are shown (see the [offer data structure](reactive-offer/offer-data-structures.md#mgvlib-offer)).


|  Tick   | Ratio (WETH/DAI) | Offer ID | Gives (DAI) | Gas required | Maker Contract | Offer Gas Price |
| ------- | ---------------- | -------- | ----------- | ------------ | -------------- | --------------- |
| -79815  | 0.0003419        | 77       | 925.26      | 250,000      | 0x5678def      | 150             |
|         |                  | 177      | 916.47      | 270,000      | 0x9101ghi      | 170             |   
| -79748  | 0.0003442        | 42       | 871.76      | 300,000      | 0x1234abc      | 200             |


##### Understanding the table
* **Tick**: a number derived from the ratio (price), pointing to a [tick bin](../tick-ratio.md#3-tick-bins). All offers in a bin have the same tick.
* **Ratio**: tells us how much WETH (base) we get per DAI (quote).
* **Offer ID**: more information [below](#offer-id).
* **Gives**: more information on the [Ticks and ratio](../tick-ratio.md#price--wants) page.
* **Gas required**: the amount of gas needed to cover all calls to the maker contract's [offer logic](./reactive-offer/maker-contract.md).
* **Maker contract**: the address of the [maker contract](./reactive-offer/README.md) (smart offer).
* **Offer gas price**: gas price override used to compute the order's %%provision|provision%% (see also [offer bounties](../taking-and-making-offers/reactive-offer/offer-provision.md#bounty-calculation)).


#### Offer list #2 - WETH-DAI

This is the mirrored offer list, where:
* DAI is the base token
* WETH the quote token (giving WETH to buy DAI)
* Thus, since the ratio is in WETH/DAI (WETH per DAI), **the price in this offer list is `ratio^(-1)` (DAI per WETH)**


[TO RECALCULATE TICKS WITH DIFFERENT RATIO?]

|  Tick   | Ratio (WETH/DAI) | Offer ID | Gives (WETH) | Gas required | Maker Contract | Offer Gas Price |
| ------- | ---------------- | -------- | -----------  | ------------ | -------------- | --------------- |
| -79815  | 0.0003419        | 13       | 0.7          | 220,000      | 0x2468xyz      | 160             |
|         |                  | 96       | 1.3          | 280,000      | 0x1357klm      | 140             |   
| -79748  | 0.0003442        | 7        | 0.6          | 210,000      | 0x3287opq      | 190             |


:::caution **Decimals**
We display human-readable values in the examples, but Mangrove stores raw token values and never uses the `decimals` field of a token.
:::



## Some terminology

### Offer ID

The identifier of the offer in the offer list.

:::danger **Important**
Two offers may have the same ID as long as they belong to different offer lists. For instance, there may be an offer with ID 42 on the WETH-DAI offer list with different volumes, gas required, maker contract, etc., than the offer with ID 42 in the DAI-WETH offer list shown above.
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
