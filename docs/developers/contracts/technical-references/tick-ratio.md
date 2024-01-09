---
description: Introduction to the concepts of ticks, ratios, and prices
sidebar_position: 1
---

# Ticks, ratios, and prices

On Mangrove, the price space of a market is discretized into _ticks_: It contains the price 1 `quote/base` and the smallest price increment (and decrement) is 1 basis point = 0.01%.

Formally, a $tick \in \Z$ corresponds to the %%ratio|ratio%% $1.0001^{tick} = wants/gives$ between the amount $gives$ promised by an offer and the amount $wants$ it requests. This corresponds to a %%price|price%% in the following way:

$$
price_{side \in \{asks, bids\}}(tick) = \begin{cases}
   ratio = wants/gives = 1.0001^{tick} &\text{if } side \equiv asks \\
   1/ratio = gives/wants = 1.0001^{-tick} &\text{if } side \equiv bids.
\end{cases}
$$

Note that the relationship between ratio and price **depends on which side** of the book you are looking at:

* On the _asks_ side, it's fairly natural: The price is the ratio $wants/gives$ between the amount $gives$ of base tokens promised by an offer and the amount $wants$ of quote tokens it requests.

* On the _bids_ side, however, the price is the reciprocal of the $wants/gives$ ratio, i.e. price = $gives/wants$. This is because a bid wants base tokens and offers quote tokens and thus the ratio $wants/gives$ is in `base/quote`.


:::info Example
On a WETH/DAI market:
* The price would be expressed in DAI per WETH (DAI/WETH)
    * Eg. 2,224 DAI/WETH
* On the asks side WETH-DAI (selling WETH or buying DAI), the ratio equals the price and has unit DAI/WETH
    * Eg. 2,224 DAI/WETH
* On the bids side DAI-WETH (buying WETH or selling DAI), the ratio equals 1/price and has unit WETH/DAI.
    * Eg. 0.0004496 WETH/DAI
:::


:::warning Beware decimals!
Note that ratio and price are in raw numbers, ie, disregarding token decimals. Care must be taken when converting raw prices and ratios to their human readable counterparts with decimals.
:::

:::info Remember
We often casually use the word ’price’ to refer to the ratio between the amount promised by an offer and the amount it requests. In the code however, we use the generic word ’ratio’ to avoid confusion with the normal notion of market price expressed in ’quote’ tokens per ‘base’ token.
:::


## Converting a price to a tick

Since the price space is discretized, not all prices can be represented exactly. Converting a price to a tick may therefore require rounding and one should take care to round appropriately; We'll discuss this in detail below.

First, calculate an exact but possibly non-representable `tick'` which may have a real component:

$$
tick`_{side \in \{asks, bids\}}(price) = \begin{cases}
   log_{1.0001}(price) &\text{if } side \equiv asks \\
   -log_{1.0001}(price) &\text{if } side \equiv bids.
\end{cases}
$$

Next, round this value to an integer to get a representable tick. One will typically want to round down or up depending on whether the price is used in a maker or taker context:

| Role           | Tick rounding | Explanation |
| -------------- | ------------- | ----------- |
| Taker          | Round down    | Takers specify a max price they're willing to pay. Rounding down the tick corresponds to choosing the tick closest to but not exceeding the specified price. This ensures the taker doesn't pay too much. |
| Maker          | Round up      | Makers specify the price they're willing to accept. Rounding up the tick corresponds to choosing the tick closest to but not below the specified price. This ensures the maker doesn't receive too little. |


## `tickSpacing` - markets with bigger price increments

Mangrove allows markets to require bigger price increments than 0.01%. This is achieved through use of the `tickSpacing` parameter which restricts the allowed ticks to multiples of `tickSpacing`: Only ticks where `tick % tickSpacing == 0` are valid on a market.

This means that the price increments are $1.0001^{tickSpacing} - 1$.


:::info Example
For a market with `tickSpacing = 5`, the allowed ticks are `..., -15, -10, -5, 0, 5, 10, 15, ...` and the price increments are $1.0001^{5} - 1 = 0.0005001 = 0,05001\%$.
:::



## Tick, ratio, and price ranges

The supported ranges for ticks, ratios, and price in Mangrove are:

| Value | Min     | Max    |
| ----- | ------- | ------ |
| Tick  | -887272 | 887272 |
| Ratio | 2.9e-39 | 3.4e38 |
| Price | 2.9e-39 | 3.4e38 |



## Comparison to Uniswap ticks
Mangrove's ticks are inspired by Uniswap’s tick, with the following notable differences:
* Directly computing ticks base 1.0001 (not base `sqrt(1.0001)`)
* Directly computing ratios (not `sqrt(ratio)` - it makes the code simpler when dealing with actual ratios and logs of ratios)
* Ratios are floating-point numbers, not fixed-point numbers (it increases the precision when computing amounts).
