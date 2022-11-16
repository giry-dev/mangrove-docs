---
id: makerContract
hoverText: A maker contract is a smart contract that is bound to an offer posted on Mangrove. 
title: Maker Contract
---

# Offer Logic
A [maker contract](../contracts/technical-references/taking-and-making-offers/reactive-offer/maker-contract.md) is a smart contract that is bound to an offer posted on Mangrove. 
It is the contract that is called by Mangrove should the offer be matched during a [taker order](../contracts/technical-references/taking-and-making-offers/taker-order/README.md).
In addition to implementing the %%offer logic|offerLogic%% it must provide public functions to post and update offers on Mangrove.