---
id: offer-entailed-price
title: Offer Entailed Price
hoverText: The entailed price is the price for the taker for a specific offer
---

The entailed price of a specific offer in an %%offer list|offer-list%% is %%wants|wants%%/%%gives|gives%%. It is the unit price that a taker must pay, when taking that offer.

:::info example

If a maker has posted an offer with `wants = 1` WETH and `gives = 2 925.26` DAI, then the entailed price of that offer is `1/2925.26 = ~0.00034185` wETH per DAI. That means that a taker must give `~0.00034185` wETH per DAI received.

:::

## References
* [Offer List -> Wants, gives and entailed price](../contracts/technical-references/taking-and-making-offers/offer-list.md#wants-gives-and-entailed-price)
