---
id: tick
title: Tick
hoverText: A 'price point' corresponding to the ratio $1.0001^{tick}$
---

On Mangrove, market prices are discretized into ticks: A $tick \in \Z$ corresponds to the %%ratio|ratio%% $1.0001^{tick}$. The smallest price increment is thus 1 basis point = 0.01%.

Note that some markets may use bigger increments by setting %%tickSpacing|tickSpacing%% > 1. This restricts the allowed ticks to multiples of `tickSpacing`.


## References

* Technical reference for [ticks, ratios, and prices](../contracts/technical-references/tick-ratio.md)
