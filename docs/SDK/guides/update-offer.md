---
description: How to update an offer using mangrove.js
sidebar_position: 1
---

# Update Your Offer

## Intro

This will explain how you update an offer using mangrove.js.

Since you need to have an offer on the book in order to update it, this will assume that you already have an offer on the book. In this case we will use the offer id 5572. But make sure you use your own offer id.

<details>

<summary>Post offer</summary>

```javascript reference
https://github.com/mangrovedao/mangrove-ts/blob/bbb41b873cb235f106746f113c720ec80da1a4f7/packages/mangrove.js/examples/tutorials/on-the-fly-offer.js
```

</details>

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

To update the offer we use the [`updateAsk`](../technical-references/code/classes/LiquidityProvider#-updateask) function on our `liquidityProvider`. This has two options, you can either post using a `wants` and a `gives`. If we chose to use this, we would have to calculate what `gives` should be, given that `wants` stays a 100.5 and we want the price to be slightly better than the next best offer, e.g. 1.00345. $$\frac{wants}{price}=gives$$ -> $$\frac{100.5}{1.00345}\approx 100.1494$$.

There is another option when updating an offer. You can use `volume` and `price`, since this is exactly what we want to use, we don't have to calculate `gives`. We then just update the offer using the `volume:100.5` and the `price:1.00345`.

```js reference
https://github.com/mangrovedao/mangrove-ts/blob/3fcbba7737f5206e4e8392c94807ec38dd65f391/packages/mangrove.js/examples/how-tos/update-offer.js#L23-L42
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

### Update offer using OfferLogic

When we updated our offer before, we used a `liquidityProvider` and we created this using Mangrove. This means that when we updated our offer, we did using Mangrove directly. But if you have your own contract with your own update offer logic, you can use that by creating an [`OfferLogic`](../technical-references/code/classes/OfferLogic). This is simply done by calling the constructor with Mangrove, your contracts address and if your contract is a [forwarder](../../strat-lib/explanations/offer-maker/forwarder.md).

```js reference
https://github.com/mangrovedao/mangrove-ts/blob/3fcbba7737f5206e4e8392c94807ec38dd65f391/packages/mangrove.js/examples/how-tos/update-offer.js#L44-L48
```

When you have a OfferLogic you can the call update offer directly on that, but this requires a lot more info like %%gasreq|gasreq%%, %%gasprice|gasprice%% and %%pivot|pivotId%%.

```js reference
https://github.com/mangrovedao/mangrove-ts/blob/3fcbba7737f5206e4e8392c94807ec38dd65f391/packages/mangrove.js/examples/how-tos/update-offer.js#L51-L63
```

To keep things more simple you can create a `liquidityProvider` with your offerLogic and a market. This way the LiquidityProvider will make sure to update your offer using your offerLogic. This saves you for taking any other decisions than `wants` and `gives` or `volume` and `price`.

```js reference
https://github.com/mangrovedao/mangrove-ts/blob/3fcbba7737f5206e4e8392c94807ec38dd65f391/packages/mangrove.js/examples/how-tos/update-offer.js#L65-L70
```
