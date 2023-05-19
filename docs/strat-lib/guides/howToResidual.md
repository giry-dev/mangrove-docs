---
description: How to repost an offer in the posthook
sidebar_position: 2
---

# Reposting an offer in the posthook

In the [smart offer tutorial](../getting-started/smart-offer.md) the offer was fully taken by the taker at the end.

In case an offer is %%partially taken|maker-partial-fill%%, the maker may want to repost a new offer for the residual.

## Repost in posthook

In the tutorials the [posthook](../getting-started/smart-offer.md#emit-in-posthook) emitted an event. However, since reposting is such a common action, it is already implemented for the simple cases - if you invoke `super` like below, then the base implementation of [`__posthookSuccess__`](../technical-references/code/strategies/MangroveOffer.md#posthooksuccess) will repost the residual.

```solidity reference title="OfferMakerTutorial.sol"
https://github.com/mangrovedao/mangrove-core/blob/182eaddc982140667a9d95f3ba957e7d016ed0d1/src/toy_strategies/offer_maker/tutorial/OfferMakerTutorialResidual.sol#L108-L117
```

When writing posthooks to repost residuals there are both caveats and points to be aware:

* Use [`_updateOffer`](../technical-references/code/strategies/offer_maker/abstract/Direct.md#_updateoffer) instead of posting a new offer. The old offer is not alive and can be reused (and the storage is possibly hot during the execution of the offer logic), this is [cheaper](./howtoGasreq.md) than using [`_newOffer`](../technical-references/code/strategies/offer_maker/abstract/Direct.md#_newoffer).
* Use the helper  methods [`__residualGives__`](../technical-references/code/strategies/MangroveOffer.md#residualgives) and [`__residualWants__`](../technical-references/code/strategies/MangroveOffer.md#residualwants) supplied to calculate the residual (see example below).
* Beware that updates can fail, e.g., due to too low density.
* Make sure to refer to the guidelines on [Safe offer logic guidelines](./HowToImplement.md).
* Note that the parameters to `__posthookSuccess__` already point out the old offer. This can save storage since we do not have to store %%IDs|offer-id%% of posted offers.
* Beware of gas usage changes on different code paths. As an example, the [gas requirements](./howtoGasreq.md) for the tutorial increases to 80,000 to be able to repost.

If you need to write a custom hook, for instance, for reposting multiple offers, then it can be a good idea to look at the base implementation below. A good exercise is to change the code above to emit the value returned from `super` and trigger the `reposted` and `dust` (see %%density|density%%) scenarios.

<!-- 

cast send --rpc-url $LOCAL_URL "$MANGROVE" "snipes(address, address, uint[4][], bool)" "$WETH" "$DAI" "[[$OFFER_ID,999999999999999999,1700000000000000000000,100000000000000000]]" 1 --private-key "$PRIVATE_KEY"

cast send --rpc-url $LOCAL_URL "$MANGROVE" "snipes(address, address, uint[4][], bool)" "$WETH" "$DAI" "[[$OFFER_ID,500000000000000000,1700000000000000000000,100000000000000000]]" 1 --private-key "$PRIVATE_KEY"

-->

```solidity reference title="MangroveOffer.sol"
https://github.com/mangrovedao/mangrove-core/blob/182eaddc982140667a9d95f3ba957e7d016ed0d1/src/strategies/MangroveOffer.sol#L284-L314
```
