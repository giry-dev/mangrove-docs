---
description: Example - Limit order
sidebar_position: 2
---

# Example - Limit order

So, what would be a more concrete yet simple illustration of Mangrove key concepts?

Mangrove core protocol is permission-less, and fairly minimalistic: it mainly handles Maker/Taker matching. Features and capabilities outside of that scope plug themselves to the core protocol; [limit orders](../../web-app-doc/trade/how-to-limit-order.md) are a good example.

* From a Web App user's standpoint, it feels like any other limit order
* From a developer's perspective though, that is where things get hot (see below) 🔥


## Taking a closer look

If we zoom in (only a little, we promise), we recognize several powerful aspects of Mangrove:

1. **Reactive liquidity**⚡<br />
Until a limit order is taken, funds can generate yield elsewhere.

2.  **Persistence** 🔁<br />
In case a limit order isn't entirely filled, a Maker can ensure that it reposts itself according to what is left on offer.

3. **Last look** 🛡️<br />
Limit orders become reactive thanks to custom code embedded in them (we could even call it a smart limit order, referring to [smart offers](./smart-offers.md)):
   * It is normally difficult and impractical to track market changes on chain, because of the immutability of the blockchain.
   * However, if you have already baked in your checks, threshold, and protection in your smart offer, it can lay in the order book forever until it is taken.
   * If the market conditions are not anymore satisfactory at the time the offer is taken VS when it was posted, the offer can be canceled, and [a compensation](./bounty.md) is paid.
