---
id: on-the-fly-offer
title: On-the-fly Offer
hoverText: An offer posted by an EOA, in contrast with a smart offer, which is posted by a smart contract.
---

An *on-the-fly offer* is posted by an EOA (i.e., an Externally-Owned Account, cf. [ethereum.org -> Account Types](https://ethereum.org/en/developers/docs/accounts/#types-of-account)). This is in contrast with a %%smart offer|smart-offer%% that is posted by a smart contract. 

An on-the-fly offer can be listed on Mangrove but is not equipped with any on-chain [logic](../protocol/technical-references/taking-and-making-offers/reactive-offer/README.md) that executes when the offer is taken.

Whenever an on-the-fly offer is matched by a [taker order](../protocol/background/offer-taker.md#taking-offers), the offer sources its liquidity on the EOA.

:::caution
An on-the-fly offer is not reactive (it has no code) and therefore cannot repost its residual if any.
* For example, let's consider a WETH/DAI market with an on-the-fly offer giving 1500 DAI (`gives`) at a [ratio](../protocol/technical-references/tick-ratio.md#ratio) of 0.0006.
* This offer is then matched by a taker order consuming only 750 DAI.
* After this transaction, it will be removed from the book since it has been partially filled.
:::