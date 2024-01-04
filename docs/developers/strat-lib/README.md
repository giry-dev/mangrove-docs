---
description: The Mangrove strat library comprises contract building blocks for writing safe and efficient market making strats for Mangrove.
sidebar_position: 1
---

# What is the Strat Library?

The Mangrove strat library is a repository of Solidity code that will help you write a custom %%maker contracts|maker-contract%% able to post %%smart offers|smart-offer%% on Mangrove.

The strat library provides several good starting points for writing your own custom maker contract for providing liquidity on Mangrove, but the library should be used responsibly.

:::info Note
The [`mangrove-strats`](https://github.com/mangrovedao/mangrove-strats) repository is separate from [`mangrove-core`](https://github.com/mangrovedao/mangrove-core).
:::


## Open source and free to use - on your own responsibility

The strat library is open source, and is provided freely to the community as a starting point for writing maker contracts. However, do note that the strat library as a whole may still contain bugs, and should be used responsibly and with care (see also [Safety first](#safety-first)).

If you have questions about how to use the Strat library, which are not answered sufficiently in this documentation, do reach out on the Mangrove [Discord](https://discord.gg/rk9Qthz5YE). And pull requests to the strategy library are, of course, welcome!

## How do I use the Strat Library?

### Choosing the right starting point

Depending on the complexity of the %%offer logic|offer-logic%% your contract implements, you need to choose from which building block you will start to build your %%maker contract|maker-contract%% from. At the very least your logic must provide an implementation of the [`IMaker`](https://github.com/mangrovedao/mangrove-core/blob/a1acdb6038382e78616fbb00503ccbdb11e23d62/src/core/MgvLib.sol#L420-L430) interface [required by Mangrove](../contracts/technical-references/taking-and-making-offers/reactive-offer/maker-contract.md).

However, we suggest utilizing the building blocks in the strat lib. The first design choice is to decide whether owning offers posted by your contract is the sole privilege of the contract's admin or whether your contract's logic wishes to support multiple offer owners, in a permissionless fashion. In the first case, you want your contract to inherit [Direct](./background/offer-maker/direct.md), in the latter you want to start from a [Forwarder](./background/offer-maker/forwarder.md) contract which has a pre-established code infrastructure to handle multiple ownership.

To get an idea of what it is all about, you can try out the [smart offer](./getting-started/smart-offer.md) tutorial to make a simple `Direct` maker contract.

### Customizing the strat using hooks

Default behavior of maker contracts built on top of Mangrove's strat library can be modified by overriding various %%hooks|hook%%, see [how-to's](./guides/DirectHowTo.md) for some concrete examples.

### Advanced cash management

The strat library also provides [router building blocks](./technical-references/router.md) and example of %%router|router%% contracts, which are convenient when the offer logic of your maker contract handles multiple offer owners funds or involves some interaction with other DeFi bricks (such as a lender).

### Safety first

Writing a maker contract that will post and update offers on Mangrove exposes you to smart contract risks. We recommend reading some important [developer guidelines](./guides/HowToImplement.md) on the topic to understand better important design principles you should follow.


