---
sidebar_position: 4
---

# Executing offers

## Offer execution

Offers are created with an associated account (a [maker contract](/docs/developers/terms/maker-contract.md) or EOA) and listed on Mangrove [offer lists](../offer-list.md#offer-lists).

* If the account is an EOA, no logic will be associated to the offer. These [on-the-fly](/docs/developers/terms/on-the-fly-offer.md) offers should have the promised liquidity on the EOA when the offer is matched during a taker order.
* If the account is a maker contract, it should implement the offer logic through the [IMaker interface](https://github.com/mangrovedao/mangrove-core/blob/2ae172805fd8b309c30b2dc877dba66245abbb3e/src/core/MgvLib.sol#L420-L430). It must at least implement the `makerExecute` function, otherwise all offer executions will fail.

Here is the offer lifecycle, with the parts addressed in this section bolded:

1. A contract `maker.eth` creates an offer.
2. Mangrove stores the offer info, including the address `maker.eth`.
3. Account `user.eth` sends a taker order to mangrove which matches that offer.
4. Mangrove transfers tokens from `user.eth` to `maker.eth`.
5. **Mangrove calls the function **[**`makerExecute`**](maker-contract.md#offer-execution)** of `maker.eth`**.
6. Mangrove transfers tokens from `maker.eth` to `user.eth`.
7. The offer is now out of its offer list, but may be updated at step 9 by `maker.eth`.
8. If the transfer at step 6 is not a success, Mangrove reverts to the state prior to the transfer of step 4, and sends a [bounty](/docs/developers/terms/bounty.md) to `user.eth` taken from the offer's [provision](/docs/developers/terms/provision.md).
9. **Mangrove calls the function **[**`makerPosthook`**](maker-contract.md#offer-post-hook)** of `maker.eth`**.

:::info **Multiple offers per address**

An account can post more than one offer. When it gets called through `makerExecute`, it will receive the [id](/docs/developers/terms/offer-id.md) of the offer being executed as well as additional information.

:::

:::info **Example scenario** 
Suppose that an [offer](README.md) managed by a contract promises 100,000 DAI in exchange for 100,000 USDC.

Upon being called, the contract has 100,000 USDC available (just given to it by Mangrove) and may source DAI from anywhere on the chain. It needs to end execution with 100,000 DAI available and ready to be transferred by Mangrove through `transferFrom`.

:::
