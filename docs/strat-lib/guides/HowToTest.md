---
sidebar_position: 5
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

```solidity
import {MangroveTest} from "mgv_test/lib/MangroveTest.sol";
import {PolygonFork, PinnedPolygonFork} from "mgv_test/lib/forks/Polygon.sol";
import {Amplifier, IMangrove, IERC20} from "src/toy_strategies/offer_maker/Amplifier.sol";
import {MgvStructs} from "src/MgvLib.sol";
import {MgvReader} from "src/periphery/MgvReader.sol";

import {console} from "lib/forge-std-vendored/src/console.sol";
...
```

## Test Class and Setup

We call the test class `AmplifierTest` and let it inherit from `MangroveTest` to be able to use all helper functions. We override the basic `setUp()` function provided by `MangroveTest` to setup the actors we shall need in the test. We need 3 tokens, the fork the test should run on, a taker address and the `Amplifier` contract.

For this test, we are going to use the test contract as the offer maker. Consequentially, it should be able to receive funds (from the taker), so we make sure to define the `receive()` function.

We do the following in `setUp()` - refer to the full implementation below:

* use the pinned fork of Polygon provided the Mangrove test library
* get three tokens from the fork
* setup the two relevant markets - DAI/WETH and USDC/WETH (using a helper from `MangroveTest`)
* create an address for the taker, and provide it with native tokens, as well as DAI and USDC for taking the offer(s)
* as the taker, we also need to approve Mangrove for taking the funds

In the implementation, we use standard *cheatcodes*, `startPrank(<address>)`, `stopPrank(<address>` provided by Foundry for setting up the test (see [Foundry -> Cheatcodes](https://book.getfoundry.sh/forge/cheatcodes])).

We also use a helper function `$()` provided by the Mangrove testing library offering a shorthand for writing `address()` and casting the contract to its address.

```solidity
...
contract AmplifierTest is MangroveTest {
  IERC20 weth;
  IERC20 dai;
  IERC20 usdc;

  PolygonFork fork;

  address payable taker;
  Amplifier strat;

  receive() external payable virtual {} // Needed if the contract should receive funds

  function setUp() public override {
    // use the pinned Polygon fork
    fork = new PinnedPolygonFork(); // use polygon fork to use dai, usdc and weth addresses
    fork.setUp();

    // use convenience helpers to setup Mangrove
    mgv = setupMangrove();

    // setup tokens, markets and approve them
    dai = IERC20(fork.get("DAI"));
    weth = IERC20(fork.get("WETH"));
    usdc = IERC20(fork.get("USDC"));

    setupMarket(dai, weth);
    setupMarket(usdc, weth);

    // setup separate taker and give some native token (for gas) + USDC and DAI
    taker = freshAddress("taker");
    deal(taker, 10_000_000);

    deal($(usdc), taker, cash(usdc, 10_000));
    deal($(dai), taker, cash(dai, 10_000));

    // approve DAI and USDC on Mangrove for taker
    vm.startPrank(taker);
    dai.approve($(mgv), type(uint).max);
    usdc.approve($(mgv), type(uint).max);
    vm.stopPrank();
  }
...
```


## Testing a Successful Fill

With `setUp` done, let us write the first test.

We start by testing that we can take the offer fully without any rejections, and that after [trade execution](../../contracts/technical-references/taking-and-making-offers/reactive-offer/maker-contract.md#trade-execution) both offers are retracted (recall that was how we [decided to implement](DirectHowTo.md#advanced-direct-offer-liquidity-amplification-with-amplifier) `Amplifier`). Let us call the test `test_success_fill` - in line with the naming guidelines of the [Foundry test framework](https://book.getfoundry.sh/forge/tests).

Breaking the problem down, for this test, we need to

* deploy `Amplifier` on our local fork,
* take one of the offers, and verify our conditions

We implement these two steps as separate functions (we need to deploy the contract for other tests, also).

```solidity
...
  function test_success_fill() public {
    deployStrat();

    execTraderStratWithFillSuccess();
  }
...
```

Now, of course, we need to implement `deployStrat()` and `execTraderStratWithFillSuccess()`.

### Deploying `Amplifier` on the fork

Deploying a contract on the fork is just calling its constructor of the contract. We give the address of the testing contract(`$(this)`) as the administrator of the `Amplifier` contract to be able to use that directly as the maker. 

After deployment, we use the [`activate()`](../background/offer-maker/mangrove-offer.md#other-maker-contracts-hooks) helper provided by [MangroveOffer](../background/offer-maker/mangrove-offer.md), which helps setup the correct token approvals for Mangrove for our %%maker contract|maker-contract%%.

Before calling `activate()` we also take the opportunity to demonstrate the related helper, [`checkList()`](../background/offer-maker/mangrove-offer.md#other-maker-contracts-hooks), which *checks* whether necessary approvals have been setup, and, if not, reverts (recall that `expectRevert(<message>)` is a [Foundry cheatcode](https://book.getfoundry.sh/forge/cheatcodes])).

```solidity
...
  function deployStrat() public {
    strat = new Amplifier({
      mgv: IMangrove($(mgv)),
      base: weth,
      stable1: usdc, 
      stable2: dai,
      admin: $(this) 
      });

    IERC20[] memory tokens = new IERC20[](3);
    tokens[0] = dai;
    tokens[1] = usdc;
    tokens[2] = weth;

    vm.expectRevert("mgvOffer/LogicMustApproveMangrove");
    strat.checkList(tokens);

    // and now activate them
    strat.activate(tokens);
  }
...
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

```solidity
...
  function postAndFundOffers(uint makerGivesAmount, uint makerWantsAmountDAI, uint makerWantsAmountUSDC)
    public
    returns (uint offerId1, uint offerId2)
  {
    (offerId1, offerId2) = strat.newAmplifiedOffers{value: 1 ether}({
      gives: makerGivesAmount, // WETH
      wants1: makerWantsAmountUSDC, // USDC
      wants2: makerWantsAmountDAI, // DAI
      pivot1: 0, // we are testing, so there are no other offers in the offer lists
      pivot2: 0  // --- || ---
    });
  }
...
```

#### Taking a Single Offer

Mangrove provides [snipe](../../contracts/technical-references/taking-and-making-offers/taker-order/README.md#offer-sniping) exactly for taking a *specific* offer. 

We make sure to impersonate the taker that we setup an address for [above](#test-class-and-setup). (Recall that Foundry provides [`vm.prank()`](https://book.getfoundry.sh/cheatcodes/prank) for this exact purpose.)

```solidity
...
  function takeOffer(uint makerGivesAmount, uint makerWantsAmount, IERC20 makerWantsToken, uint offerId)
    public
    returns (uint takerGot, uint takerGave, uint bounty)
  {
    // try to snipe one of the offers (using the separate taker account)
    vm.prank(taker);
    (, takerGot, takerGave, bounty,) = mgv.snipes({
      outbound_tkn: $(weth),
      inbound_tkn: $(makerWantsToken),
      targets: wrap_dynamic([offerId, makerGivesAmount, makerWantsAmount, type(uint).max]),
      fillWants: true
    });
  }
...
```

#### And Finally, The Test

With these helper methods, the test body amounts to the following steps:

* Approve the %%router|router%% of `Amplifier` to access the WETH of the tester contract, which was given as %%reserveId|reserve-id%% when deploying the Amplifier (read more about [Approvals](./approvals.md)).
* Provide the tester contract with some WETH to be able to successfully %%give|gives%% what the offer promises. (Using another cheatcode from Foundry, [`deal()`](https://book.getfoundry.sh/cheatcodes/deal).)
* Post and fund offers with [`postAndFundOffers()`](#post-and-fund-offers).
* Snipe *one* offer with [`takeOffer()`](#taking-a-single-offer).
* Assert and verify the properties [we listed above](#breaking-down-the-test-specification-further).


```solidity
...
  function execTraderStratWithFillSuccess() public {
    uint makerGivesAmount = 0.15 ether;
    uint makerWantsAmountDAI = cash(dai, 300);
    uint makerWantsAmountUSDC = cash(usdc, 300);

    weth.approve($(strat.router()), type(uint).max);

    deal($(weth), $(this), cash(weth, 10));

    (uint offerId1, uint offerId2) = postAndFundOffers(makerGivesAmount, makerWantsAmountDAI, makerWantsAmountUSDC);

    (uint takerGot, uint takerGave,) = takeOffer(makerGivesAmount, makerWantsAmountDAI, dai, offerId1);

    // assert that
    assertEq(takerGot, minusFee($(dai), $(weth), makerGivesAmount), "taker got wrong amount");
    assertEq(takerGave, makerWantsAmountDAI, "taker gave wrong amount");

    // assert that neither offer posted by Amplifier are live (= have been retracted)
    MgvStructs.OfferPacked offer_on_dai = mgv.offers($(weth), $(dai), offerId1);
    MgvStructs.OfferPacked offer_on_usdc = mgv.offers($(weth), $(usdc), offerId2);
    assertTrue(!mgv.isLive(offer_on_dai), "weth->dai offer should have been retracted");
    assertTrue(!mgv.isLive(offer_on_usdc), "weth->usdc offer should have been retracted");
  }
...
```

In verifying, we use a few helper functions provided by `MangroveTest`

* `cash(token, amount)` - that helps us ensure that we use the correct decimals for a specific token,
* `minusFee(address_outbound, address_inbound, price)` - that calculates the fee for a given market and price,

and a few view functions provided by Mangrove, `offers()` and `isLive()` (see [Views on Offers](../../contracts/technical-references/taking-and-making-offers/views-on-offers.md)).

## Running Tests with Foundry

In Foundry tests are run with the Forge tool, typically invoking something like `forge test`. Please refer to the [Foundry Book -> Tests](https://book.getfoundry.sh/forge/tests) for updated documentation.

## Adding More Tests - Testing Partial Fills

With our helper functions for posting and sniping offers, we we can easily add more tests. For instance, testing that an offer was correctly handled for a %%partial fill|maker-partial-fill%% looks like this:

```solidity
...
  function test_success_partialFill() public {
    deployStrat();

    execTraderStratWithPartialFillSuccess();
  }

  function execTraderStratWithPartialFillSuccess() public {
    uint makerGivesAmount = 0.15 ether;
    uint makerWantsAmountDAI = cash(dai, 300);
    uint makerWantsAmountUSDC = cash(usdc, 300);

    weth.approve($(strat.router()), type(uint).max);

    deal($(weth), $(this), cash(weth, 5));

    // post offers with Amplifier liquidity
    (uint offerId1, uint offerId2) = postAndFundOffers(makerGivesAmount, makerWantsAmountDAI, makerWantsAmountUSDC);

    //only take half of the offer
    (uint takerGot, uint takerGave,) = takeOffer(makerGivesAmount / 2, makerWantsAmountDAI / 2, dai, offerId1);

    // assert that
    assertEq(takerGot, minusFee($(dai), $(weth), makerGivesAmount / 2), "taker got wrong amount");
    assertEq(takerGave, makerWantsAmountDAI / 2, "taker gave wrong amount");

    // assert that neither offer posted by Amplifier are live (= have been retracted)
    MgvStructs.OfferPacked offer_on_dai = mgv.offers($(weth), $(dai), offerId1);
    MgvStructs.OfferPacked offer_on_usdc = mgv.offers($(weth), $(usdc), offerId2);
    assertTrue(mgv.isLive(offer_on_dai), "weth->dai offer should not have been retracted");
    assertTrue(mgv.isLive(offer_on_usdc), "weth->usdc offer should not have been retracted");
  }
...
```

A full test file for for the `Amplifier` contract can be found [here](https://github.com/mangrovedao/mangrove-core/blob/d6a2aae336a7ea89abe2479ab797b5ffcd5abb02/test/toy_strategies/Amplifier.t.sol).

When you have sufficiently tested your %%maker contract|maker-contract%%, you may want to [deploy your contract](HowToDeploy.md) to a real chain.
