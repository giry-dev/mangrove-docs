---
description: The Mangrove strat library are contract building blocks for writing safe and efficient market making strats for Mangrove.
sidebar_position: 1
---

# What is the Strat Library?

The Mangrove strat library is a repository of solidity code that will help you write a custom %%maker contracts|makerContract%% able to manage offers on the Mangrove.

## Choosing the right starting point

Depending on the complexity of the %%offer logic|offerLogic%% your contract implements, you need to choose from which building block you will base your contract on. At the very least your logic must provide an implementation of the [`IMaker`](https://github.com/mangrovedao/mangrove-core/blob/8c2724650c8b0cf3180cbbeb0d4b48d9c1cf9f98/src/MgvLib.sol#L159) interface [required by Mangrove](../contracts/technical-references/taking-and-making-offers/reactive-offer/maker-contract.md). 

The first design choice is to decide whether the maker contract you wish to implement is expected to post and update offers on behalf of a privileged user, or whether it should act as the executionner of multiple makers. If the first case, you want your contract to inherit [Direct](./explanations/offer-maker/direct.md), in the latter you want to start from a [Forwarder](./explanations/offer-maker/forwarder.md) contract. 

## Customizing the strat using hooks
Default behavior of maker contracts built on top of Mangrove's strat library can be modified by overriding various %%hooks|hook%%. 

### Cash management

Once you know whether your maker contract is a Direct or Forwarder contract, you need to decide what the offer logic should do with the tokens given by the offer taker, and where to fetch the liquidity that it should send. Taker's liquidity is always sent to the maker contract by Mangrove but this is customizable by overriding the cash management hooks.

### Last look

### Offer positioning

#### Residual 
In case of a %%maker partial fill|makerPartialFill%%, the residual of an offer is reposted on Mangrove by both Direct and Forwarder derived contracts (provided offer has enough %%provision|provision%% and offered volume is %%density|density%% compliant). 

#### Market making
Some offer logic might require more sophisticated interaction with Mangrove. For instance one may wish to repost residual at a different price, or implement an automated market maker: if the offer was taken on the (A,B) offer list, post a dual offer on the (B,A) offer list to take profit from the spread if the price fluctuates.


