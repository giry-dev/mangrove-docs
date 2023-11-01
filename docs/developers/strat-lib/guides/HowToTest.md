---
sidebar_position: 6
---

# Testing a maker contract

After following the tutorial [Post a Smart Offer](../getting-started/smart-offer.md) or some of the guides in this section, you have created a %%maker contract|maker-contract%% and are ready to test it. Mangrove offers a helper contract, [`MangroveTest`](https://github.com/mangrovedao/mangrove-core/blob/master/test/lib/MangroveTest.sol), that helps setup everything needed for writing a test using the Mangrove core protocol.

We are going to use [Foundry](https://book.getfoundry.sh/) as the test runner - and we are going to use some of the features that Foundry provides for testing. Please refer to [Set Up Your Local Environment](../getting-started/preparation.md) for instructions on how to get and setup Foundry. For this guide, we assume basic knowledge of writing and running tests with Foundry - as can be gained by reading the relevant sections on [Foundry -> Tests](https://book.getfoundry.sh/forge/tests) in the Foundry book.

For this example, we are going to write a simple test for the `Amplifier` contract that we implemented in the advanced part of [Creating a Direct contract](DirectHowTo.md).

## Creating the test file

When creating the test file, remember to use the naming convention `<name>.t.sol`, this way Foundry knows what files are tests. 

## Imports

The first thing to do is to import the relevant contracts. As mentioned, we are going to use the helper contract provided by the Mangrove test library, [`MangroveTest`](https://github.com/mangrovedao/mangrove-core/blob/master/test/lib/MangroveTest.sol). This allows us to avoid having to fork an existing chain with Mangrove deployed. We may simply deploy a Mangrove protocol for this specific purpose before running our tests. 

The Mangrove test library provides other helpers. We import `Polygon` - a helper to fork the polygon chain. We do this because we want to use the real addresses for WETH, USDC and DAI. (This is not strictly necessary - we could just create some test tokens and use those instead.) 

We also import the `Amplifier` contract - the contract that we wish to test. The last thing we import is `MgvStructs`, which contain struct definitions for the [offer views](../../contracts/technical-references/taking-and-making-offers/views-on-offers.md), which we shall need in the test.

The console import is not strictly needed - however, it can be very useful, if we want to log something to the console while we are developing the test. Let us import it for now.

```solidity reference title="Amplifier.t.sol - Imports"
https://github.com/mangrovedao/mangrove-strats/blob/fc2c2058414ff5fc76dab340a2ada48a95d0f6b2/test/toy_strategies/Amplifier.t.sol#L1-L10
```


## Test Contract and Setup

We call the test contract `AmplifierTest` and let it inherit from `MangroveTest` to be able to use all helper functions. We override the basic `setUp()` function provided by `MangroveTest` to setup the actors we shall need in the test. We need 3 tokens, the fork the test should run on, a taker address and the `Amplifier` contract.

For this test, we are going to use the test contract as the offer maker. Consequentially, it should be able to receive funds (from the taker), so we make sure to define the `receive()` function.

We do the following in `setUp()` - refer to the full implementation below:

* use the pinned fork of Polygon provided the Mangrove test library
* get three tokens from the fork
* setup the two relevant markets - DAI/WETH and USDC/WETH (using a helper from `MangroveTest`)
* create an address for the taker, and provide it with native tokens, as well as DAI and USDC for taking the offer(s)
* as the taker, we also need to approve Mangrove for taking the funds

In the implementation, we use standard *cheatcodes*, `startPrank(<address>)`, `stopPrank(<address>` provided by Foundry for setting up the test (see [Foundry -> Cheatcodes](https://book.getfoundry.sh/forge/cheatcodes])).

We also use a helper function `$()` provided by the Mangrove testing library offering a shorthand for writing `address()` and casting the contract to its address.

```solidity reference title="Amplifier.t.sol - Contract and Setup"
https://github.com/mangrovedao/mangrove-strats/blob/fc2c2058414ff5fc76dab340a2ada48a95d0f6b2/test/toy_strategies/Amplifier.t.sol#L12-L58
```


## Testing a Successful Fill

With `setUp` done, let us write the first test.

We start by testing that we can take the offer fully without any rejections, and that after [trade execution](../../contracts/technical-references/taking-and-making-offers/reactive-offer/maker-contract.md#trade-execution) both offers are retracted (recall that was how we [decided to implement](DirectHowTo.md#advanced-direct-offer-liquidity-amplification-with-amplifier) `Amplifier`). Let us call the test `test_success_fill` - in line with the naming guidelines of the [Foundry test framework](https://book.getfoundry.sh/forge/tests).

Breaking the problem down, for this test, we need to

* deploy `Amplifier` on our local fork,
* take one of the offers, and verify our conditions

We implement these two steps as separate functions (we need to deploy the contract for other tests, also).

```solidity reference title="Amplifier.t.sol - Testing a successful fill"
https://github.com/mangrovedao/mangrove-strats/blob/fc2c2058414ff5fc76dab340a2ada48a95d0f6b2/test/toy_strategies/Amplifier.t.sol#L60-L64
```

Now, of course, we need to implement `deployStrat()` and `execTraderStratWithFillSuccess()`.

### Deploying `Amplifier` on the fork

Deploying a contract on the fork is just calling its constructor of the contract. We give the address of the testing contract(`$(this)`) as the administrator of the `Amplifier` contract to be able to use that directly as the maker. 

After deployment, we use the [`activate()`](../background/offer-maker/mangrove-offer.md#other-maker-contracts-hooks) helper provided by [MangroveOffer](../background/offer-maker/mangrove-offer.md), which helps setup the correct token approvals for Mangrove for our %%maker contract|maker-contract%%.

Before calling `activate()` we also take the opportunity to demonstrate the related helper, [`checkList()`](../background/offer-maker/mangrove-offer.md#other-maker-contracts-hooks), which *checks* whether necessary approvals have been setup, and, if not, reverts (recall that `expectRevert(<message>)` is a [Foundry cheatcode](https://book.getfoundry.sh/forge/cheatcodes])).

```solidity reference title="Amplifier.t.sol - Deploying on a fork"
https://github.com/mangrovedao/mangrove-strats/blob/fc2c2058414ff5fc76dab340a2ada48a95d0f6b2/test/toy_strategies/Amplifier.t.sol#L90-L117
```

With this, we have a function that can deploy a new `Amplifier` contract on our local chain. Let us turn to writing the actual test. 

### Breaking down the test-specification further

Let us unfold the specification for the test itself.

For this first test, we want to 

* post and fund a pair of offers using [`Amplifier.newAmplifiedOffers(...)`](./DirectHowTo.md#publishing-amplified-liquidity), 
* [snipe](../../contracts/technical-references/taking-and-making-offers/taker-order/README.md#offer-sniping) *one* of the offers, and,
* verify these properties
    * both maker and taker received tokens as expected
    * after trade execution *both* offers are retracted
    
Let us continue our divide-and-conquer strategy and write helper methods for the two first steps, before writing the body of the test. (As we shall see, we can reuse these helper methods, later.)

#### Post and Fund Offers 

Posting offers with `Amplifier` is simply a call to [`newAmplifiedOffers`](./DirectHowTo.md#publishing-amplified-liquidity), sending along funds for the %%provision|provision%%. (And we make a note to ensure in the test body that the testing contract has the funds for the %%provision|provision%%.)


```solidity reference title="Amplifier.t.sol - Post and fund offers"
https://github.com/mangrovedao/mangrove-strats/blob/fc2c2058414ff5fc76dab340a2ada48a95d0f6b2/test/toy_strategies/Amplifier.t.sol#L119-L129
```


#### Taking a Single Offer

Mangrove provides [snipe](../../contracts/technical-references/taking-and-making-offers/taker-order/README.md#offer-sniping) exactly for taking a *specific* offer. 

We make sure to impersonate the taker that we setup an address for [above](#test-contract-and-setup). (Recall that Foundry provides [`vm.prank()`](https://book.getfoundry.sh/cheatcodes/prank) for this exact purpose.)

```solidity reference title="Amplifier.t.sol - Take a single offer"
https://github.com/mangrovedao/mangrove-strats/blob/fc2c2058414ff5fc76dab340a2ada48a95d0f6b2/test/toy_strategies/Amplifier.t.sol#L131-L141
```

#### And Finally, The Test

With these helper methods, the test body amounts to the following steps:

* Approve the %%router|router%% of `Amplifier` to access the WETH of the tester contract, which was given as %%reserveId|reserve-id%% when deploying the Amplifier (read more about [Approvals](./approvals.md)).
* Provide the tester contract with some WETH to be able to successfully %%give|gives%% what the offer promises. (Using another cheatcode from Foundry, [`deal()`](https://book.getfoundry.sh/cheatcodes/deal).)
* Post and fund offers with [`postAndFundOffers()`](#post-and-fund-offers).
* Snipe *one* offer with [`takeOffer()`](#taking-a-single-offer).
* Assert and verify the properties [we listed above](#breaking-down-the-test-specification-further).


```solidity reference title="Amplifier.t.sol - Putting it all together"
https://github.com/mangrovedao/mangrove-strats/blob/fc2c2058414ff5fc76dab340a2ada48a95d0f6b2/test/toy_strategies/Amplifier.t.sol#L171-L194
```

In verifying, we use a few helper functions provided by `MangroveTest`

* `cash(token, amount)` - that helps us ensure that we use the correct decimals for a specific token,
* `minusFee(address_outbound, address_inbound, price)` - that calculates the fee for a given market and price,

and a few view functions provided by Mangrove, `offers()` and `isLive()` (see [Views on Offers](../../contracts/technical-references/taking-and-making-offers/views-on-offers.md)).

## Running Tests with Foundry

In Foundry tests are run with the Forge tool, typically invoking something like `forge test`. Please refer to the [Foundry Book -> Tests](https://book.getfoundry.sh/forge/tests) for updated documentation.

## Adding More Tests - Testing Partial Fills

With our helper functions for posting and sniping offers, we we can easily add more tests. For instance, testing that an offer was correctly handled for a %%partial fill|maker-partial-fill%% looks like this:

```solidity reference title="Amplifier.t.sol - Testing partial fill"
https://github.com/mangrovedao/mangrove-strats/blob/fc2c2058414ff5fc76dab340a2ada48a95d0f6b2/test/toy_strategies/Amplifier.t.sol#L72-L76
```
```solidity reference title="Amplifier.t.sol - Helper function"
https://github.com/mangrovedao/mangrove-strats/blob/fc2c2058414ff5fc76dab340a2ada48a95d0f6b2/test/toy_strategies/Amplifier.t.sol#L143-L169
```

A full test file for for the `Amplifier` contract can be found [here](https://github.com/mangrovedao/mangrove-strats/blob/fc2c2058414ff5fc76dab340a2ada48a95d0f6b2/test/toy_strategies/Amplifier.t.sol).

When you have sufficiently tested your %%maker contract|maker-contract%%, you may want to [deploy your contract](HowToDeploy.md) to a real chain.
