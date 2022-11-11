---
id: OTF
hoverText: An offer that is not posted by a smart contract and that can only source liquidity from an EOA.
title: On-the-fly offer (OTF)
---

An **On-the-fly offer** (OTF) can be listed on Mangrove but is not equipped with any on-chain [logic](../contracts/explanations/offer-maker/README.md#executing-offers) that executes when the offer is taken. Whenever it is matched by a [taker order](contracts/explanations/offer-taker.md#taking-offers), the offer sources its liquidity on an [Externally Owned Account (EOA)](#externally-owned-account-eoa).

:::caution

An OTF is not reactive (it has no code) and therefore cannot repost its residual if any. For example, an OTF offer of 1500 DAI (outbound) for 1 wETH (inbound) that is matched by a taker order of 750 DAI for 0.5 wETH will be removed from the book after it has been partially filled.

:::