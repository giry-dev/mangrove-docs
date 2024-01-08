---
id: ticks
title: Ticks
hoverText: Controls the granularity of available price points in an offer list.
---

On Mangrove, markets (and therefore offer lists) are discretized in ticks. Ticks are a way of sorting offers by price (into [tick bins](../contracts/technical-references/tick-ratio.md#3-tick-bins)). All the offers in a tick bin have the same tick. We also need a way to know where are the previous and next best bins: that's what [tickSpacing](../contracts/technical-references/tick-ratio.md#4-tickspacing) is for.

## References

* More information on the [Tick and Ratio](../contracts/technical-references/tick-ratio.md) page.