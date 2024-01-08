---
id: price
title: Price
hoverText: Amount of quote tokens per base token that an offer demands or a taker is willing to pay
---

A _price_ describes what an offer request per unit it delivers. Prices on a market are expressed in quote per base (`quote/base`) for both asks and bids (as indicated by the base-quote terminology), allowing prices to be directly compared across asks and bids.

On the _asks_ side, this is fairly natural: The price is the ratio $wants/gives$ between the amount $gives$ of base tokens promised by an offer and the amount $wants$ of quote tokens it requests.

On the _bids_ side, however, the price is the reciprocal of the $wants/gives$ ratio, i.e. price = $gives/wants$. This is because a bid wants base tokens and offers quote tokens and thus the ratio $wants/gives$ is in `base/quote`.

Thus, a _price_ corresponds the $wants/gives$ %%ratio|ratio%% of an offer in the following way:

* For an _ask_, $price = ratio = wants/gives$
* For a _bid_, $price = 1/ratio = gives/wants$.

:::info Example
On a WETH/DAI market, prices are expressed in DAI per WETH (DAI/WETH), eg. 2,224 DAI/WETH.
:::

## References
* Technical reference for [ticks, ratios, and prices](../contracts/technical-references/tick-ratio.md)
