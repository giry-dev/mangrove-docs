---
description: How to update an offer using mangrove.js
sidebar_position: 1
---

# Update Your Offer

## Intro

This will explain how you update an offer using mangrove.js.

Since you need to have an offer on the book in order to update it, this will assume that you already have an offer on the book. In this case we will use the offer id 5572. But make sure you use your own offer id. See for instance [Post a simple offer](../getting-started/basic-offer.md).

### Update offer

We start by logging all the asks on the DAI-USDC market. For this guide we will assume that the offer is an ask on the DAI-USDC market. If your offer is on another market, make sure to connect to the market where your offer is posted.

Here we can see that my offer has a volume of 100.5 and a price of 1.00099. Lets say we want to update the offer to match the price of the next best offer.

```js
market.consoleAsks();
```

```bash
┌─────────┬──────┬──────────────────────────────────────────────┬────────────────────┬────────────────────────┐
│ (index) │  id  │                    maker                     │       volume       │         price          │
├─────────┼──────┼──────────────────────────────────────────────┼────────────────────┼────────────────────────┤
│    0    │ 5572 │ '0xA4C7c59EB3D4Ab5CA4E6fB012CeD9c8F9A5Ecdd8' │       100.5        │ 1.00099502487562189055 │
│    1    │ 3137 │ '0x2CB51201CD176CcEa67a9c0B64391aE34e50C058' │  1883.81894460173  │ 1.00346413248309787013 │
│    2    │ 1384 │ '0x4326Ab97823d7509C1f0CB3bF68151081B26c970' │ 1143.1714506162793 │ 1.00346467660785745789 │
│    3    │ 1669 │ '0x4326Ab97823d7509C1f0CB3bF68151081B26c970' │ 1376.6273438550415 │ 1.00346478817687987934 │
```

To update the offer we use the [`updateAsk`](../technical-references/code/classes/LiquidityProvider.md#-updateask) function on our `liquidityProvider`. This has two options available in the [OfferParams](../technical-references/code/namespaces/LiquidityProvider-1.md#offerparams). First, you can provide `wants` and `gives`. If we chose to use this, we would have to calculate what `gives` should be, given that `wants` stays a 100.5 and we want the price to be slightly better than the next best offer, e.g. 1.00345. $$\frac{wants}{price}=gives$$ -> $$\frac{100.5}{1.00345}\approx 100.1494$$.

Second, you can provide `volume` and `price`, since this is exactly what we want to use, we don't have to calculate `gives`. We then just update the offer using `volume: 100.5` and `price: 1.00345`.

```js reference
https://github.com/mangrovedao/mangrove.js/blob/2753b3148231a2541d0055a77a169f8f1381dcd1/examples/how-tos/update-offer.js#L23-L41
```

```bash
┌─────────┬──────┬──────────────────────────────────────────────┬────────────────────┬────────────────────────┐
│ (index) │  id  │                    maker                     │       volume       │         price          │
├─────────┼──────┼──────────────────────────────────────────────┼────────────────────┼────────────────────────┤
│    0    │ 5572 │ '0xA4C7c59EB3D4Ab5CA4E6fB012CeD9c8F9A5Ecdd8' │       100.5        │        1.00345         │
│    1    │ 3137 │ '0x2CB51201CD176CcEa67a9c0B64391aE34e50C058' │  1883.81894460173  │ 1.00346413248309787013 │
│    2    │ 1384 │ '0x4326Ab97823d7509C1f0CB3bF68151081B26c970' │ 1143.1714506162793 │ 1.00346467660785745789 │
│    3    │ 1669 │ '0x4326Ab97823d7509C1f0CB3bF68151081B26c970' │ 1376.6273438550415 │ 1.00346478817687987934 │
```

Changing the price of an offer can change its %%rank|offer-rank%% in the offer book.

### Update offer using OfferLogic

When we updated our offer before, we used a `liquidityProvider` and we created this using Mangrove. This means that when we updated our offer, we did using Mangrove directly. But if you have your own contract with your own update offer logic, you can use that by creating an [`OfferLogic`](../technical-references/code/classes/OfferLogic). This is simply done by calling the constructor with Mangrove (remember to import the type first, e.g., using `const { OfferLogic } = require("@mangrovedao/mangrove.js");`).

```js reference
https://github.com/mangrovedao/mangrove.js/blob/2753b3148231a2541d0055a77a169f8f1381dcd1/examples/how-tos/update-offer.js#L43-L46
```

When you have a OfferLogic you can the call update offer directly on the underlying contract (which is assumed to implement the [`ILiquidityProvider` interface](../../strat-lib/technical-references/code/strategies/interfaces/ILiquidityProvider.md), but this requires a lot more info and unit conversions.

```js reference
https://github.com/mangrovedao/mangrove.js/blob/2753b3148231a2541d0055a77a169f8f1381dcd1/examples/how-tos/update-offer.js#L49-L60
```

To keep things more simple you can create a `liquidityProvider` with your offerLogic and a market. This way the LiquidityProvider will make sure to update your offer using your offerLogic. This saves you for taking any other decisions than `wants` and `gives` or `volume` and `price`.

```js reference
https://github.com/mangrovedao/mangrove.js/blob/2753b3148231a2541d0055a77a169f8f1381dcd1/examples/how-tos/update-offer.js#L62-L67
```

You can only update offers you own as a maker. And from the `consoleAsks()` above you can see the `maker` of each offer. So for instance, you cannot update an offer posted directly in [Post a simple offer](../getting-started/basic-offer.md) using your `offerLogic`'s `liquitidyProvider` - it has to be an offer posted by the `offerLogic`.
