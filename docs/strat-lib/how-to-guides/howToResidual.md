---
description: How to repost an offer in the posthook
sidebar_position: 2
---

# How to repost an offer in the posthook

In the [smart offer tutorial](../tutorials/smart-offer.md) the offer was fully taken by the taker at the end.

In case a offer is partially taken, the maker may want to repost a new offer for the residual.

## Repost in posthook

In the tutorials [posthook](../tutorials/smart-offer.md#emit-in-posthook) emitted an event. However, since reposting is such a common action, it is already implemented for the simple cases - if you invoke `super` like below, then the base implementation of [`__posthookSuccess__`](./TODOnatspec) will repost the residual.

```solidity reference title="OfferMakerTutorial.sol"
https://github.com/mangrovedao/mangrove-core/blob/5fb08b2b2742a0e9dee57662085fab03279afc72/src/toy_strategies/offer_maker/tutorial/OfferMakerTutorialResidual.sol#L69-L81
```

When writing posthooks to repost residuals there are some caveats. One should

* Use [`updateOffer`](../technical-references/code/strategies/interfaces/IOfferLogic.md#updateoffer) instead of posting a new offer. The old offer is not alive and can be reused (and the memory is hot), this is [cheaper](./howtoGasreq.md) than using [`_newOffer`](../technical-references/code/strategies/offer_maker/abstract/Direct.md#_newoffer).
* Use the helper methods supplied to calculate the residual (see below).
* Beware that updates can fail, e.g., due to too low density.
* Be aware of [how to implement safe offer logic](./HowToImplement.md).
* Note that the parameters to `__posthookSuccess__` already point out the old offer, this can save storage since we do not have to store IDs of posted offers.
* Beware of gas usage changes on different code paths - for instance the [gas requirements](./howtoGasreq.md) for the tutorial increase to 80,000 to be able to repost.

If you need to write a custom hook to, e.g., repost multiple offers, then it can be a good idea to look at the base implementation below. A good exercise is to change the code above to emit the value returned from `super` and trigger the `reposted` and `dust` (see %%density|density%%) scenarios.

<!-- 

cast send --rpc-url $LOCAL_URL "$MANGROVE" "snipes(address, address, uint[4][], bool)" "$WETH" "$DAI" "[[$OFFER_ID,999999999999999999,1700000000000000000000,100000000000000000]]" 1 --private-key "$PRIVATE_KEY"

cast send --rpc-url $LOCAL_URL "$MANGROVE" "snipes(address, address, uint[4][], bool)" "$WETH" "$DAI" "[[$OFFER_ID,500000000000000000,1700000000000000000000,100000000000000000]]" 1 --private-key "$PRIVATE_KEY"

-->

```solidity reference title="MangroveOffer.sol"
https://github.com/mangrovedao/mangrove-core/blob/5fb08b2b2742a0e9dee57662085fab03279afc72/src/strategies/MangroveOffer.sol#L277-L321
```
