---
description: Using the API to pass taker orders on a Mangrove market.
sidebar_position: 4
---

# Sell and buy orders

Buying with cash or selling for cash can be done via the [`buy`](../technical-references/code/classes/Market.md#-buy) and [`sell`](../technical-references/code/classes/Market.md#-sell) functions of a [Market](../technical-references/api-overview.md#market) instance. The code snippets below send limit buy (taker) orders on the market, with an allowed slippage of 2%:

```typescript
// buy limit order for 100 base tokens at an average price of 0.1 quote per base
const buyPromises = await mgvMarket.buy({volume:100, price:0.1, slippage:2});
const buyResult = await buyPromises.result;
// limit order with a desired quantitiy
const butPromises_ = await mgvMarket.buy({wants:100, gives:1000, slippage:2});
const buyResult_ = await buyPromises_.result;
// sell limit order (selling 10 base tokens).
const sellPromises = await mgvMarket.sell({volume:10, price: 0.09, slippage:2});
const sellResult = await sellPromises.result;
```

:::info

`sell` and `buy` orders return a pair `{ response: Promise<ContractTransaction>, result: Promise<OrderResult> }`

The result (`OrderResult`) returns a triple `{`takerGave:Big, takerGot:Big, bounty:Big`}` where:  

* `takerGave` is the total amount of base (for a sell) or quote (for a buy) tokens that the taker spent for the order
* `takerGot` is the total amount of quote (for a sell) or base (for a buy) tokens that the taker received as a result of the order
* `bounty` is the amount of native tokens the taker received to compensate for the gas lost of executing failing offer during the order execution see [bounty](/docs/developers/terms/bounty.md).

:::
