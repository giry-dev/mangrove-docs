---
description: How to use last look to renege on a trade
sidebar_position: 3

---

# Using last look to renege trades

## Example

A maker can %%renege|renege%% on a trade if the market conditions are no longer favorable. This can be done in [multiple ways](../../protocol/technical-references/reactive-offer/maker-contract.md), but the strat lib has made it easy by adding a [`__lastLook__`](../technical-references/code/strats/src/strategies/MangroveOffer.md#lastlook) function which can be overridden.

You can follow the [smart offer tutorial](../getting-started/smart-offer.md), and extend it with the following function:

```solidity reference title="OfferMakerTutorial.sol"
https://github.com/mangrovedao/mangrove-strats/blob/a265abeb96a053e386d346c7c9e431878382749c/src/toy_strategies/offer_maker/tutorial/OfferMakerTutorialResidual.sol#L77-L80
```

This override of the `__lastLook__` will renege if the offer is not fully taken. Note that since the %%provision|provision%% is lost as a %%bounty|bounty%% to the taker, care must be taken to select the right circumstances to renege. This uses the mechanisms for compensating the taker on failure, and therefore the maker should [renege early](../../protocol/background/taker-compensation.md#encouraging-early-renege).

## Exercises

1. Try posting an offer with a %%maker contract|maker-contract%% with the above implementation of `__lastlook__` above.

2. Then, try out targeting this offer with a [market order](../../protocol/technical-references/market-order/README.md) that takes only _part_ of the tokens that the offer %%gives|gives%%. The result should be a `makerExecute` fail with the reason that the offer must be fully taken.

:::info Note
For your offer to be targeted by a market order, it needs to sit at the top of the order book. Make sure to choose a very favorable price (i.e. tick) when posting your offer. For an example of how to calculate a tick from a ratio, check the Solidity snippets of [Posting a new offer](../../protocol/technical-references/reactive-offer/README.md).
:::

In a [Foundry](https://book.getfoundry.sh/getting-started/installation) trace, it would look like this:

```js
    │   │   └─ ← 0x0000000000000000000000000000000000000000000000000000000000000001
    │   ├─ [623] OfferMakerTutorial::makerExecute((0x63E537A69b3f5B03F4f46c5765c82861BD874b6e, 0xC87385b5E62099f92d490750Fcd6C901a524BBcA, 565, 13965252376515437924197781608061731723491045742767017537776374226616320, 100000000000000000, 170000000000000000000, 114972889140951241694864433974031885472888135242322246917362470694355803832320, 95685385232850624329487581946028423310341827134083876137913628388789126692864, 452312848583266388373324160192082719549164520795168960635552751154278432768)) 
    │   │   └─ ← "tutorial/mustBeFullyTaken"
    │   └─ ← "Custom Error 6d67762f:(0x0000000000000000000000000000000000000000, 15120238736495)"
```
