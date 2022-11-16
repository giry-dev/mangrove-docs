---
description: The Mangrove strat library are contract building blocks for writing safe and efficient market making strats for Mangrove.
sidebar_position: 1
---

# How to use the Strat Library?

The Mangrove strat library is a repository of solidity code that will help you write a custom %%maker contracts|makerContract%% able to manage offers on the Mangrove.

## Choosing the right starting point

Depending on the complexity of the %%offer logic|offerLogic%% your contract implements, you need to choose from which building block you will start to build your %%maker contract|makerContract%% from. At the very least your logic must provide an implementation of the [`IMaker`](https://github.com/mangrovedao/mangrove-core/blob/8c2724650c8b0cf3180cbbeb0d4b48d9c1cf9f98/src/MgvLib.sol#L159) interface [required by Mangrove](../contracts/technical-references/taking-and-making-offers/reactive-offer/maker-contract.md), see [technical references](../contracts/technical-references/taking-and-making-offers/reactive-offer/executing-offers.md) for more details.

The first design choice is to decide whether the maker contract you wish to implement will post and update offers on behalf of a privileged user, or whether it will be used by mulitple offer makers in a permissionless fashion. In the first case, you want your contract to inherit [Direct](./explanations/offer-maker/direct.md), in the latter you want to start from a [Forwarder](./explanations/offer-maker/forwarder.md) contract. 

## Customizing the strat using hooks

Default behavior of maker contracts built on top of Mangrove's strat library can be modified by overriding various %%hooks|hook%%, see [how-to's](./how-to-guides/DirectHowTo.md) for some examples.

## Advanced cash management

The strat library also provides a collection of %%router|router%% contracts, which are convenient when the offer logic of your contract involves some interaction with other DeFi bricks (such as a lender).

## Safety first

Writing a maker contract that will post and update offers on Mangrove exposes you to smart contract risks. We recommend reading some important [developper guidelines](./how-to-guides/HowToImplement.md) on the topic to understand better important design principles you should follow.


