---
description: How to use last look to renege on a trade
sidebar_position: 3

---

# How to use last look to renege on a trade

A maker can %%renege|renege%% on a trade if the market conditions are no longer favorable. This can be done in [multiple ways](../../contracts/technical-references/taking-and-making-offers/reactive-offer/maker-contract.md), but the strat lib has made it easy by adding a [`__lastLook__`](../technical-references/code/strategies/MangroveOffer.md#lastlook) function which can be overridden.

You can follow the [smart offer tutorial](../tutorials/smart-offer.md) and extend it with the following function

```solidity reference title="OfferMakerTutorial.sol"
https://github.com/mangrovedao/mangrove-core/blob/d2bcb7dd1723569bb9c4449572c74aa901e187d2/src/toy_strategies/offer_maker/tutorial/OfferMakerTutorialResidual.sol#L59-L63
```

This override of the `__lastLook__` will renege if the offer is not fully taken. Note that since the %%provision|provision%% is lost as a bounty to the taker, care must be taken to select the right circumstances to renege. This uses the mechanisms for compensating the taker on failure, and therefore the maker should [renege early](../../contracts/explanations/taker-compensation.md#encouraging-early-renege).
