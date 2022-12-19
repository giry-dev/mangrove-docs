---
id: wants
title: Wants
hoverText: The volume of tokens an offer wants in exchange of the full volume of promised (or given) tokens.
---

The volume of tokens an offer _wants_ in exchange of the full volume of promised (or %given|gives%) tokens.

:::caution

Note, that we also refer to a taker's *wants* (and %%gives|gives%%). When not given from the context, we specify the viewpoint by referring to `takerWants` (and `takerGives`). This is done, for instance, in the naming of the parameters for a [marker order](../contracts/technical-references/taking-and-making-offers/taker-order/README.md#market-order).

When considering a *specific offer*, note that from the point of view of a taker, `wants` for an offer must be met by a specific `takerGives`. Do note, an offer can be taken partially (see %%Maker Partial Fill|maker-partial-fill%%).

For instance, if an offer `wants` 2 USDC, that must be met by a `takerGives` of 2 USDC.

:::
