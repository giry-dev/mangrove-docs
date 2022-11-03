---
sidebar_position: 4
---

# Executing offers

## Offer execution

[Offers](README.mdx) are [created](README.mdx) with an associated account (contract or EOA) and listed on Mangrove [offer lists](../market.md)

* If the account is an EOA, no logic will be associated to the offer.
* If the account is a contract, it should implement the offer logic through the [IMaker interface](https://github.com/giry-dev/mangrove/blob/0414196f4c30fddc0e364bd245ed0131b3362078/packages/mangrove-solidity/contracts/MgvLib.sol#L217). It must at least implement the `makerExecute` function, otherwise all their offer executions will fail.

Here is the offer lifecycle, with the parts addressed in this section bolded:

1. A contract `maker.eth` creates an offer.
2. Mangrove stores the offer info, including the address `maker.eth`.
3. Account `user.eth` executes that offer.
4. Mangrove transfers tokens from `user.eth` to `maker.eth`.
5. **Mangrove calls the function **[**`makerExecute`**](maker-contract.mdx#offer-execution)** of `maker.eth`**.
6. Mangrove transfers tokens from `maker.eth` to `user.eth`.
7. **Mangrove calls the function **[**`makerPosthook`**](maker-contract.mdx#offer-post-hook)** of `maker.eth`**.
8. The offer is now out of its offer list, but may be updated at a later time by `maker.eth`.

:::info **Multiple offers per address**

An account can post more than one offer. When it gets called through `makerExecute`, it will receive the id of the offer being executed as well as additional information.

:::

:::info **Example scenario** Suppose that an [offer](README.mdx) managed by a contract promises 100,000 DAI in exchange for 100,000 USDC.

Upon being called, the contract has 100,000 USDC available (just given to it by Mangrove) and may source DAI from anywhere on the chain. It needs to end execution with 100,000 DAI available and ready to be transferred by Mangrove through `transferFrom`.

:::

![Example of a the execution of two offers during a market order. Offer #1 has the best price and is called first. Notice the posthook of Offer #2 is called first at the end of the maker order.](@site/static/img/assets/execution.png)