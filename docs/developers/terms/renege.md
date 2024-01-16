---
id: renege
title: Renege
hoverText: Makers can renege on the offer to trade by incorporating defensive code in the maker contract (e.g., because the market conditions changed).
---

Makers can [compensate the taker and renege](../contracts/background/taker-compensation.md) on the offer to trade (e.g., because the market conditions changed) by incorporating defensive code in the maker contract. This is also known as [last look](/docs/developers/terms/last-look.md).

## References
* The Strat Lib provides [hooks](/docs/developers/terms/hook.md) for last look - see the guide on [reneging with last look](../strat-lib/guides/howToRenege.md).
