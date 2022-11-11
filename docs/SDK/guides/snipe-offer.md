---
description: Snipe a offer using mangrove.js
sidebar_position: 2
---

# Snipe An Offer

## Intro

This will go through sniping an offer using mangrove.js. In this section we assume that you already know how to connect to Mangrove either on a real chain or on a local chain. When sniping we need to make sure that we actually have the funds. If we do not have the funds the transaction will revert with the error `mgv/takerTransferFail`.  This means that the taker is the cause of the failed transfer and since we are trying to snipe an offer, we are the taker. Another result could be that the transfer failed because of the maker, then we will get this error `mgv/makerTransferFail`. This means that for some reason the makers funds was not transferred and the transfer therefore failed. In this case the taker (us), will be compensated for the gas we just used to make the offer fail. We are compensated in form of a %%bounty|bounty%.

### Connect to market (and mint tokens)

As mentioned we assume that you are already connected to Mangrove, if not you can look at [github](https://github.com/mangrovedao/mangrove-ts/blob/master/packages/mangrove.js/examples/how-tos/snipe-offer.js), to see the full script.

When connected to Mangrove we need to connect to a market. We do this to check whether the market is live and has offers. In this case we look at all the asks for the market. In this case the best offer is id 5572. Another way to check the market is to go to [testnet](https://testnet.mangrove.exchange/trade) and look at the DAI-USDC market.

If we want to snipe this offer, then it requires that we have enough USDC. In this case we need $$100.5 \times 1.00345 \approx 100.85$$. If we look at UI for the testnet, we will also be able to see that the required USDC is 100.85.

If you do not have the funds need for this, we can mint them using the out-commented lines 4 to 7. In this example we mint 10.000 USDC, which is plenty for taking this offer.

```bash
> market.consoleAsks();
┌─────────┬──────┬──────────────────────────────────────────────┬────────────────────┬────────────────────────┐
│ (index) │  id  │                    maker                     │       volume       │         price          │
├─────────┼──────┼──────────────────────────────────────────────┼────────────────────┼────────────────────────┤
│    0    │ 5572 │ '0xA4C7c59EB3D4Ab5CA4E6fB012CeD9c8F9A5Ecdd8' │       100.5        │        1.00345         │
│    1    │ 3137 │ '0x2CB51201CD176CcEa67a9c0B64391aE34e50C058' │  1883.81894460173  │ 1.00346413248309787013 │
│    2    │ 1384 │ '0x4326Ab97823d7509C1f0CB3bF68151081B26c970' │ 1143.1714506162793 │ 1.00346467660785745789 │
│    3    │ 1669 │ '0x4326Ab97823d7509C1f0CB3bF68151081B26c970' │ 1376.6273438550415 │ 1.00346478817687987934 │
```

import useBaseUrl from '@docusaurus/useBaseUrl';

<div class="container">
<img src={useBaseUrl('img/assets/snipe-offer-ui.png')} title="UI of offers" width="50%"/>
<div class="top-left">UI of offers</div>
</div>

```javascript showLineNumbers reference
https://github.com/mangrovedao/mangrove-ts/blob/f0bdd04f0953024831c50f0b1c0cdc0daf1ea61d/packages/mangrove.js/examples/how-tos/snipe-offer.js#L15-L24
```

### Snipe best offer

We now know that we want to snipe the best offer on the book, which is offer 5572. In order to snipe the offer, want to get all the info about the offer. We do this because we want the precise numbers for wants and gives.

Before sniping the offer with the information we just gathered, we have to [approve](TODO) Mangrove to be able to take the funds (USDC), from our account. We need to do this, because when taking any offer, the first thing Mangrove does, is to transfer the takers funds to the maker. If we have not approved this, the transfer will fail with a `mgv/takerTransferFail`.

We can now snipe the offer. Be ware that the information on the offer, is from the makers side. This means that what we, the taker, wants is what the offer (the maker) gives. And the same with gives, what we, the taker, gives, is what the offer (the maker) wants. When taking a offer we should be aware that if we do not give a [`gasLimit`](TODO), mangrove.js will get the `gasLimit` from the offers %%`gasreq`|gasreq%%. The `gasLimit` sets a limit on how much gas we max want to use, when taking the offer. This way we can control, that if it is very costly to take the offer and it ends up costing more than our `gasLimit`, then the transfer will revert.

```javascript reference
https://github.com/mangrovedao/mangrove-ts/blob/f0bdd04f0953024831c50f0b1c0cdc0daf1ea61d/packages/mangrove.js/examples/how-tos/snipe-offer.js#L27-L49
```

### Check the result of sniping

After sniping we will get a result. We can look at the result to see if the transaction was successful or failed.

If the transaction was successful then we should see a result like this. In this case we sniped offerId 5572, we got 100.5 `DAI` and gave 100.6 `USDC`.

```bash title="Snipe successful"
    feePaid: 0
  },
  successes: [ { offerId: 5572, got: 100.5, gave: 100.6 } ],
  tradeFailures: [],
  posthookFailures: [],
```

If the transaction failed, it is most likely that the account that posted the offer (the maker) couldn't complete the transaction. Because of this we will receive a %%bounty|bounty%% for making an offer fail.

```bash title="Snipe failed because of maker"
    events: [ [Object], [Object], [Object], [Object] ]
  },
  summary: { got: 0, gave: 0, partialFill: false, bounty: 0.000426, feePaid: 0 },
  successes: [],
  tradeFailures: [
    {
      offerId: 3137,
      reason: '0x6d67762f6d616b65725472616e736665724661696c0000000000000000000000',
      FailToDeliver: 1883.81894460173,
      volumeGiven: 1890.344743
    }
  ],
```

We will also see the offer being gone when we log the asks on the market.

```javascript reference
https://github.com/mangrovedao/mangrove-ts/blob/f0bdd04f0953024831c50f0b1c0cdc0daf1ea61d/packages/mangrove.js/examples/how-tos/snipe-offer.js#L51-L55
```

```bash 
> market.consoleAsks();
┌─────────┬──────┬──────────────────────────────────────────────┬────────────────────┬────────────────────────┐
│ (index) │  id  │                    maker                     │       volume       │         price          │
├─────────┼──────┼──────────────────────────────────────────────┼────────────────────┼────────────────────────┤
│    0    │ 1384 │ '0x4326Ab97823d7509C1f0CB3bF68151081B26c970' │ 1143.1714506162793 │ 1.00346467660785745789 │
│    1    │ 1669 │ '0x4326Ab97823d7509C1f0CB3bF68151081B26c970' │ 1376.6273438550415 │ 1.00346478817687987934 │
│    2    │ 3344 │ '0x2CB51201CD176CcEa67a9c0B64391aE34e50C058' │ 1622.836373407379  │ 1.00346894837019272508 │
```
