---
description: How to use last look to renege on a trade
sidebar_position: 3

---

# Using last look to renege trades

A maker can %%renege|renege%% on a trade if the market conditions are no longer favorable. This can be done in [multiple ways](../../contracts/technical-references/taking-and-making-offers/reactive-offer/maker-contract.md), but the strat lib has made it easy by adding a [`__lastLook__`](../technical-references/code/strategies/MangroveOffer.md#lastlook) function which can be overridden.

You can follow the [smart offer tutorial](../getting-started/smart-offer.md), and extend it with the following function:

```solidity reference title="OfferMakerTutorial.sol"
https://github.com/mangrovedao/mangrove-strats/blob/fc2c2058414ff5fc76dab340a2ada48a95d0f6b2/src/toy_strategies/offer_maker/tutorial/OfferMakerTutorialResidual.sol#L77-L80
```

This override of the `__lastLook__` will renege if the offer is not fully taken. Note that since the %%provision|provision%% is lost as a %%bounty|bounty%% to the taker, care must be taken to select the right circumstances to renege. This uses the mechanisms for compensating the taker on failure, and therefore the maker should [renege early](../../contracts/background/taker-compensation.md#encouraging-early-renege).

As an exercise, try posting an offer with a %%maker contract|maker-contract%% with the implementation of `__lastlook__` above. Now try out targeting this offer with a [snipe](../../contracts/technical-references/taking-and-making-offers/taker-order/README.md#offer-sniping) that takes only _part_ of the tokens that the offer %%gives|gives%%. The result should be a `makerExecute` fail with the reason that the offer must be fully taken. 

In a [Foundry](https://book.getfoundry.sh/getting-started/installation) trace this might look something like this:

```js
    │   │   └─ ← 0x0000000000000000000000000000000000000000000000000000000000000001
    │   ├─ [623] OfferMakerTutorial::makerExecute((0x63E537A69b3f5B03F4f46c5765c82861BD874b6e, 0xC87385b5E62099f92d490750Fcd6C901a524BBcA, 565, 13965252376515437924197781608061731723491045742767017537776374226616320, 100000000000000000, 170000000000000000000, 114972889140951241694864433974031885472888135242322246917362470694355803832320, 95685385232850624329487581946028423310341827134083876137913628388789126692864, 452312848583266388373324160192082719549164520795168960635552751154278432768)) 
    │   │   └─ ← "tutorial/mustBeFullyTaken"
    │   └─ ← "Custom Error 6d67762f:(0x0000000000000000000000000000000000000000, 15120238736495)"
```
