---
id: ratio
title: Ratio
hoverText: The ratio 'wants/gives' between the amount an offer 'gives' and the amount it 'wants'.
---

The _ratio_ `inbound_tkn_amount/outbound_tkn_amount` between the amount `outbound_tkn_amount` promised by an offer and the amount `inbound_tkn_amount` it requests. The unit of ratios on an %%offer list|offer-list%% `outbound_tkn-inbound_tkn` is thus `inbound_tkn/outbound_tkn`.

A ratio corresponds to a %%price|price%% in the follow way:

* For an _ask_, $price = ratio$
* For a _bid_, $price = 1/ratio$.

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
As always when dealing with ERC-20 tokens, care must be taken to handle decimals appropriately.

Just as for token *amounts*, ratios and prices have both raw and user representations.

See the [Ticks, ratios, and prices](../protocol/technical-references/tick-ratio.md) page for a detailed explanation, including formulae for converting between these representations.
:::


## References
* Technical reference for [ticks, ratios, and prices](../protocol/technical-references/tick-ratio.md)
