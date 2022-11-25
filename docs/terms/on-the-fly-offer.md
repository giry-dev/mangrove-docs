---
id: on-the-fly-offer
title: On-the-fly offer
hoverText: An offer posted by an EOA, in contrast with a smart offer, which is posted by a smart contract.
---

An *on-the-fly offer* is posted by an EOA (i.e., an Externally-Owned Account, cf. [ethereum.org -> Account Types](https://ethereum.org/en/developers/docs/accounts/#types-of-account)). This is in contrast with a %%smart offer|smart-offer%% that is posted by a smart contract. 

An on-the-fly offer can be listed on Mangrove but is not equipped with any on-chain [logic](../contracts/technical-references/taking-and-making-offers/reactive-offer/README.md) that executes when the offer is taken.

Whenever an on-the-fly offer is matched by a [taker order](contracts/background/offer-taker.md#taking-offers), the offer sources its liquidity on the EOA.

:::caution

An on-the-fly offer is not reactive (it has no code) and therefore cannot repost its residual if any. For example, an on-the-fly offer of 1500 DAI (outbound) for 1 wETH (inbound) that is matched by a taker order of 750 DAI for 0.5 wETH will be removed from the book after it has been partially filled.

:::