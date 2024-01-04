---
id: tickSpacing
title: tickSpacing
hoverText: Controls the granularity of available price points in an offer list.
---

The granularity of available price points in an [offer list](../contracts/technical-references/taking-and-making-offers/offer-list.md) is controlled by the `tickSpacing` parameter. With a high `tickSpacing`, fewer price points are available, but the gas cost of market orders is lower since a smaller part of the tick tree has to be explored.

The available prices in an offer list are `1.0001^i` for all `MIN_TICK <= i <= MAX_TICK` such that `i % tickSpacing = 0`.

## References

* More information on the [Tick and Ratio](../contracts/technical-references/tick-ratio.md) page.