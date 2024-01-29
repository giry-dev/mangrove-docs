---
description: Using the API to pass market orders on a Mangrove market.
sidebar_position: 4
---

# Sell and buy orders

Buying with cash or selling for cash can be done via the [`buy`](../technical-references/code/classes/Market.md#-buy) and [`sell`](../technical-references/code/classes/Market.md#-sell) functions of a [Market](../technical-references/api-overview.md#market) instance. The code snippets below send limit buy (taker) orders on the market, with an allowed slippage of 2%:

```typescript
// buy limit order for 100 base tokens at an average price of 0.1 quote per base
const buyPromises = await mgvMarket.buy({volume:100, limitPrice:0.1, slippage:2});
const buyResult = await buyPromises.result;
// limit order with a desired quantitiy
const butPromises_ = await mgvMarket.buy({wants:100, gives:1000, slippage:2});
const buyResult_ = await buyPromises_.result;
// sell limit order (selling 10 base tokens).
const sellPromises = await mgvMarket.sell({volume:10, limitPrice: 0.09, slippage:2});
const sellResult = await sellPromises.result;
```

The [`buy`](../technical-references/code/classes/Market.md#-buy) and [`sell`](../technical-references/code/classes/Market.md#-sell) functions return types with a wealth of information about the trades that happened, or information about why a trade failed. Please refer to the description of these functions and their return types for more information.
