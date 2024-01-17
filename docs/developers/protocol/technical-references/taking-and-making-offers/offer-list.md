---
description: Introducing Mangrove's Offer Lists a low level representation of (half) an order book.
sidebar_position: 2
---

# Offer Lists

An "offer list" corresponds to either the "asks" or "bids" side of an order book. Mangrove has no explicit on-chain representation of an order book, only offer lists.

Hence, a full market will always feature **two offer lists**. For instance, a WETH/DAI market consists of:

* a WETH-DAI offer list (where WETH is offered in exchange for DAI)
* a DAI-WETH offer list (where DAI is offered in exchange for WETH)

:::info market abstractions over offer lists
[Mangrove's SDK](../../../SDK/README.md) offers Market abstractions that allows liquidity providers and takers to interact with Mangrove using standard trading concepts such as _order book_, _base_, and _quote_.
:::

An offer list is identified by a tuple of (`outbound_tkn`, `inbound_tkn`, `tickSpacing`). For example, for a WETH-DAI offer list, the touple values would be:

* `outbound_tkn`: the address of the WETH token (i.e., sent by the offer)
* `inbound_tkn`: the address of the DAI token (i.e., wanted by the offer)
* `tickSpacing`: typically 1 meaning that all ticks are allowed (see the [previous page](../tick-ratio.md) for details).

Offers are grouped by tick. The offers for a given tick are stored in a FIFO, doubly linked-list (an offer points to the previous **and** to the next one).

import useBaseUrl from '@docusaurus/useBaseUrl';

<div class="text--center">
<img src={useBaseUrl('/img/assets/bin.png')} width="60%"/>
</div>

:::caution Note
If you haven't done it yet, we strongly suggest that you first get familiar with the [Ticks, ratios, and prices](../tick-ratio.md) page.
:::

## Example: WETH/DAI market

Let's take a WETH/DAI market and look at its two corresponding offer lists, WETH-DAI and DAI-WETH, with `tickSpacing = 1`:

### Offer list #1: WETH-DAI ("asks")

For a WETH/DAI market, the WETH-DAI offer list corresponds to the "asks" of the order book:

* WETH is the _outbound_ token, i.e, offers give WETH
* DAI is the _inbound_ token, i.e, offers want DAI
* The unit of %%ratios|ratio%% is DAI/WETH and price = ratio.

Here's an example of such an offer list:

|  Tick   | Ratio (DAI/WETH) | Offer ID | Gives (WETH) | Gas required | Maker Contract | Offer Gas Price |
| ------- | ---------------- | -------- | -----------  | ------------ | -------------- | --------------- |
| 75171   | 1838.53          | 42       | 0.7          | 220,000      | `0x2468xyz...` | 160             |
| 75171   | 1838.53          | 96       | 1.3          | 280,000      | `0x1357klm...` | 140             |
| 75200   | 1843.87          | 7        | 0.6          | 210,000      | `0x3287opq...` | 190             |

#### Understanding the table

* **Tick**: The discrete "price" %%tick|tick%% of the offer which corresponds to a ratio and price. Offers at the same tick are stored in FIFO order.
* **Ratio**: The amount of inbound token to be paid per outbound token. This is not stored on-chain, but is derived from the tick.
* **Offer ID**: An ID for the offer which is assigned by Mangrove when the offer is first created. The ID is unique only on that offer list.
* **Gives**: The amount of outbound token offered.
* **Gas required**: The amount of gas needed to execute the offer and its posthook.
* **Maker contract**: The address of the make who posted the offer. Either an EOA or a [maker contract](./reactive-offer/README.md) (for smart offers).
* **Offer gas price**: Gas price used to compute the order's %%provision|provision%% (see also [offer bounties](../taking-and-making-offers/reactive-offer/offer-provision.md#bounty-calculation)). Must be at least Mangrove's gas price when the offer is posted.

:::caution Beware Decimals
We display human-readable amounts in the examples for readability, but on-chain Mangrove only works with raw token values and never uses the `decimals` a token.

For simplicity, the tokens used in these examples have the same number of decimals (18). When that's not the case, care must be taken to handle decimals, especially for ratios.

See the [Ticks, ratios, and prices](../tick-ratio.md) page for a detailed discussion of decimals.
:::

### Offer list #2: DAI-WETH ("bids")

For a WETH/DAI market, the DAI-WETH offer list corresponds to the "bids" of the order book:

* DAI is the _outbound_ token, i.e, offers give DAI
* WETH is the _inbound_ token, i.e, offers want WETH
* The unit of %%ratios|ratio%% is WETH/DAI and price = ratio$^{-1}$.

Here's an example of such an offer list:

|  Tick   | Ratio (WETH/DAI) | Offer ID | Gives (DAI) | Gas required | Maker Contract | Offer Gas Price |
| ------- | ---------------- | -------- | ----------- | ------------ | -------------- | --------------- |
| -75103  | 0.0005476        | 77       | 925.26      | 250,000      | `0x5678def...` | 150             |
| -75103  | 0.0005476        | 177      | 916.47      | 270,000      | `0x9101ghi...` | 170             |
| -75041  | 0.0005510        | 42       | 871.76      | 300,000      | `0x1234abc...` | 200             |

## Some terminology

### Offer ID

The identifier of the offer in the offer list.

:::danger **Important**
Two offers may have the same ID as long as they belong to different offer lists. For instance, in the example above, both offer lists contain offers with ID 42.
:::

### Gas required

The maximum amount of gas the %%maker contract|maker-contract%% managing the offer will be allowed to spend if called by Mangrove. This includes both `makerExecute` and `makerPosthook`.

:::info **Example**
The offer with ID 77 in the DAI-WETH offer list above may consume up to 250K gas units.
:::

### Maker Contract

The address of the %%maker contract|maker-contract%% bound to the offer. The %%makerExecute|makerExecute%% function of this contract's %%offer logic|offer-logic%% will be called when one of its offers is executed, and the corresponding %%makerPosthook|makerPosthook%% will be called immediately after trade settlement.

An offer _may_ also be posted from EOA with no logic attached - see %%On-the-fly offers|on-the-fly-offer%%.

### Gas Price

Gas price that was used to compute the %%offer provision|provision%%. If the offer fails to deliver the promised **outbound tokens**, it will be charged based on this gasprice.

The gas price of an offer must be at least Mangrove's gas price at the time when the offer is posted.

## Offer list configuration

Several [configuration](../governance-parameters/mangrove-configuration.md) parameters determine how new offers are inserted. Some are [global](../governance-parameters/global-variables.md) to Mangrove, some are [offer list specific.](../governance-parameters/local-variables.md) See [Governance](../governance-parameters/README.md) section for details.

## Gas cost of posting, updating, and retracting offers

The gas cost for posting, updating, and retracting offers is bounded by a constant thanks to ticks being organized internally in a fixed tree structure. The details are described in the [annotated code](pathname:///MgvDoc/) of the Mangrove protocol.
