---
id: gives
title: Gives
hoverText: The volume of tokens an offer promises in exchange of the full volume of required (or wanted) tokens.
---

The volume of tokens an offer promises to _give_ in exchange of the full volume of required (or %%wanted|wants%%) tokens.

:::caution

Note, that we also refer to a taker's *gives* (and %%wants|wants%%). When not given from the context, we specify the viewpoint by referring to `takerGives` (and `takerWants`). This is done, for instance, in the naming of the parameters for a [market order](../contracts/technical-references/taking-and-making-offers/taker-order/README.md#market-order).

When considering a *specific offer*, note that from the point of view of a taker, `gives` for an offer is used to fill `takerWants`.

For instance, if an offer `gives` 5 USDC, that may be met by a `takerWants` of 5 USDC.

:::
