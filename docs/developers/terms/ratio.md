---
id: ratio
title: Ratio
hoverText: The ratio $wants/gives$ between the amount $gives$ promised by an offer and the amount $wants$ it requests.
---

The _ratio_ $wants/gives$ between the amount $gives$ promised by an offer and the amount $wants$ it requests. The unit of ratios on an %%offer list|offer-list%% `outbound_tkn-inbound_tkn` is thus `inbound_tkn/outbound_tkn`.

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


## References
* Technical reference for [ticks, ratios, and prices](../contracts/technical-references/tick-ratio.md)
