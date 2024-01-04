---
description: Introduction to the concepts of tick and ratio
sidebar_position: 1
---

# Ticks and ratio

On Mangrove, markets (and therefore [offer lists](./taking-and-making-offers/offer-list.md)) are discretized in ticks. That means that every offer posted and every order placed are using them. Since this is of importance to use Mangrove as a developer, we will spend time in this page explaining what they are and how they are connected to pricing ([ratio](#ratio)).

## Ticks

To put it simply, ticks are a way of sorting offers by price (into [tick bins](#3-tick-bins)). All the offers in a tick bin have the same tick. We also need a way to know where are the previous and next best bins: that's what [`tickSpacing`](#4-tickspacing) is for.

:::danger Important
Ticks are derived from the [ratio](#ratio).
:::

[?? To add a solidity example about `tickFromRatio()` ??]

:::info Note
We will briefly mention the notions of "tick tree" and "tick bins", however note that as a developer, they won't have much of an impact with your experience using Mangrove. What you really want to focus on is **ticks**.
:::

Let's break it down a bit.

### 1. Order book basics

Mangrove's order book contains real-time, continuously updated lists of offers for trading pairs ([markets](./taking-and-making-offers/offer-list.md)). The book is organized by price levels (ticks), with the highest bid (buy order) and the lowest ask (sell order) sitting at the top of their respective side of the book ([offer lists](./taking-and-making-offers/offer-list.md)).

### 2. Tick tree

As previously said, offers are stored in bins, which are sorted in a "tick tree". Thanks to this tree structure, **offer operations (insert, update, and retract) take constant gas** (the height of the tree is fixed).

### 3. Tick bins

Below the bottom of the tree are tick bins - they are laid in sequence. In the context of an [offer list](./taking-and-making-offers/offer-list.md), each tick bin has an associated tick (and a tick determines a price).

:::danger Important
All offers in a bin have the same tick. During a [market order](./taking-and-making-offers/taker-order/README.md), **offers in a tick bin are executed in order**, from the first to the last. Inserted offers are **always appended at the end of a tick bin**.
:::


### 4. `tickSpacing`

As previously said, each tick points to a single tick bin, where all offers with an identical price are stored. We use a `tickSpacing` value to link the tick bins (i.e. the ticks, i.e. the prices) of an offer list together. If a bin has tick `t`, the following bin has tick `t+tickSpacing`.

:::info Note
* A larger `tickSpacing` means the jumps in tick (i.e. price) are bigger.
* A smaller `tickSpacing` means the jumps in tick are narrower.
    * Example: a high-volatility market would require a larger `tickSpacing` compared to a more stable one.
:::

### 5. Our approach to ticks

Our approach to ticks is inspired from Uniswap’s, with the following notable changes:
* Directly computing ticks base 1.0001 (not base `sqrt(1.0001)`)
* Directly computing ratios (not `sqrt(ratio)` - it makes the code simpler when dealing with actual ratios and logs of ratios)
* Ratios are floating-point numbers, not fixed-point numbers (it increases the precision when computing amounts)

The available prices in an offer list are `1.0001^i` for all `MIN_TICK <= i <= MAX_TICK` such that `i % tickSpacing = 0`.

### 6. Recap on ticks

The granularity of available price points in an [offer list](./taking-and-making-offers/offer-list.md) is controlled by the `tickSpacing` parameter. With a high `tickSpacing`, fewer price points are available, but the gas cost of market orders is lower since a smaller part of the tick tree structure has to be explored.


## Ratio

:::info Remember
We often casually use the word ‘price’ to refer to the ratio between the amount promised by an offer and the amount it requests. In the code however, we use the generic word 'ratio' to avoid confusion with notions of price based on concepts such as ‘quote’ and ‘base’ tokens.
:::

Now that it is said, it's important to note that a tick does correspond to a given price, or more exactly: a ratio. Ratios are represented as a (mantissa,exponent) pair which represents the number `mantissa * 2**-exponent`.

[??? To add a reference to function `tickFromRatio` ??]

In order to translate 'ratio' to 'price', one must decide which of the tokens is the base and which is the quote. You will see in the coming "[offer lists](./taking-and-making-offers/offer-list.md)" section that a given market (ex: WETH/DAI) is present on the two sides of the book (bids and asks).

It means that **depending on which side** you are looking at, the ratio will be **inverted**. Let's illustrate that:

:::info Example
On a WETH/DAI market:
* The ratio would be expressed in WETH per DAI (WETH/DAI)
* The bids side would be DAI-WETH (buying WETH)
    * The price therefore equals to the `ratio` (how many WETH can I get per DAI)
* The asks side would be WETH-DAI (selling WETH, or buying DAI)
    * The price then equals to the `ratio^(-1)` (how many DAI can I get per WETH)
:::

### Price & Wants

Later, you will learn that [posting offers](./taking-and-making-offers/reactive-offer/README.md) requires you to provide (among other things) a `tick` and a `gives` amount (how much the offer sends). However, it's not using how much the offer requests. But we can retrieve it with our handy ratio!

How much an offer wants can be simply calculated for the two sides of the book (assuming here that both offers have an identical ratio):
* Bids side (buying WETH)
    * Offer A is giving `1000` DAI, at a ratio of `0.00035`
    * It wants `gives * ratio = 1000 * 0.00035 = 0.35` WETH
* Asks side (selling WETH)
    * Offer B is giving `0.25` WETH, at a similar ratio
    * It wants `gives * ratio^(-1) = 0.25 * (1 / 0.00035) = 714.28` DAI