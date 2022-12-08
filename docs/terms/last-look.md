---
id: last-look
title: Last Look
hoverText: Feature of an offer logic that verifies whether trade execution should be cancelled.
---

Liquidity providers can incorporate defensive code, called _lastLook_, to cancel offers under certain conditions that are verifiable onchain. For instance, if market conditions are unfavorable in order to avoid price exposure. 

## References
* [Maker contracts' hooks: last look](../strat-lib/technical-references/main-hooks.md#last-look-before-trade)
* [MangroveOffer's code: `lastLook`](../strat-lib/technical-references/code/strategies/MangroveOffer.md#lastlook)
* %%Reneging on offers|renege%%.
