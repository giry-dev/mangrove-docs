---
id: ratio
title: Ratio
hoverText: The ratio between the amount promised by an offer and the amount it requests.
---

The _ratio_ corresponds to the comparison between the amount promised by an offer and the amount it requests.

Example on a WETH/DAI market:
* The ratio would be expressed in WETH per DAI (WETH/DAI)
* The bids side would be DAI-WETH (buying WETH)
    * The price therefore equals to the ratio (how many WETH can I get per DAI)
* The asks side would be WETH-DAI (selling WETH, or buying DAI)
    * The price then equals to the ratio^(-1) (how many DAI can I get per WETH)

## References
* Technical reference for [ratio](../contracts/technical-references/tick-ratio.md)