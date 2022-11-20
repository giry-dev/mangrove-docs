---
sidebar_position: 5
---

# How to test your contract

You have now created your contract and would like to test it. Mangrove offers a helper contract, that can help setup everything needed for writing a test using the Mangrove core protocol.

When we write test we are going to be using the framework [Foundry](https://book.getfoundry.sh/). Foundry is a smart contract development toolchain.

When explaining "how to test" we are going to use the Amplifier contract, created in [How to create a Direct contract](DirectHowTo.md).

When creating your test, remember to use the naming convention `<name>.t.sol`, this way Foundry knows what files are test. The first thing to do is to import the relevant contracts. We are going to use `MangroveTest` which is a helper to setup the Mangrove protocol. This way you do not need to fork a existing chain, it can just deploy the Mangrove protocol for you before running your tests. It has many other helpers. We import `Polygon` which is a helper to fork the polygon chain, we do this because we want to use the real address for WETH, USDC and DAI. This is not necessary, one could just create some test tokens an use them. We import the Amplifier contract, because that is the contract we want to test. The last thing is `MgvStructs`, this helps with getting information about offers, which we need later in the test.

The console import is not needed, but can be very useful, if you want to log something during your test. Debugging solidity code is not that easy, so using console logs is sometimes faster.

Then we create a contract called AmplifierTest that inherence from MangroveTest. Making the contract a MangroveTest makes it possible to use all its helper functions. There is a few variable we know we are going to need, in order to test Amplifier, we need 3 tokens, the fork the test should run on, a taker address and the Amplifier contract.

The receive function is defined in order for the test contract to be able to receive funds. In this test we are going to use the test contract as a offer maker, this means that it should be able to receive funds. A contract i solidity that does not have the receive function defined, will not be able to receive any funds.

Before we run any tests, we want to create a setUp function that gets called before the actual test gets called. In Foundry creating a function called setUp will automatically make it run before the tests. In this case MangroveTest already has a setUp function, because of this we override it, since we only want to do part of the default setup.

In the setup function we start by creating a fork from the polygon chain and run its setup function. Next we need to setup Mangrove using the helper function from MangroveTest. We then get the 3 tokens from the polygon chain, all the addresses can be found in the `polygon.json` file where some standard addresses are saved.

The Amplifier contract is using two markets, it is there for necessary to setup the 2 markets, in this case we are using DAI/WETH and USDC/WETH market. The last thing is creating the taker address, giving it some native tokens (to pay for gas), some DAI and USDC (to be able to take the offers) and approving Mangrove to take the funds. I order to approve Mangrove the taker has to call the approve function on each token, giving the address for Mangrove. Here we are using 3 helper functions `startPrank(<address>)`, `stopPrank(<address>` and `$`. The start and stop prank, are cheatcodes offered by Foundry, they make it possible to impersonate an address as if it was that address calling. This is makes it possible for us to call as the taker and approve Mangrove. This is only possible because we are in a test, using Foundry and not on any real chain, otherwise this would not be possible. The last helper function is `$`, this MangroveTest offer a shorthand for writing `address()` and casting the contract to its address.

The setup is done, at we are now ready to write the first test.

```solidity
import {MangroveTest} from "mgv_test/lib/MangroveTest.sol";
import {PolygonFork, PinnedPolygonFork} from "mgv_test/lib/forks/Polygon.sol";
import {Amplifier, IMangrove, IERC20} from "src/toy_strategies/offer_maker/Amplifier.sol";
import {MgvStructs} from "src/MgvLib.sol";
import {MgvReader} from "src/periphery/MgvReader.sol";

import {console} from "lib/forge-std-vendored/src/console.sol";

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

When creating test using Foundry, you have to name the function that runs the test `test<the name>`. This way Foundry knows what functions are tests. I our first test we want to test that when the offer is fully taken, we therefore call the test `test_success_fill`.

The first thing we need to do in our test is to deploy the Amplifier contract on our local chain. Since we know that this is going to be necessary for all the test, we write how to deploy the test on the local chain in its own function.

Deploying a contract locally is just calling its constructor of the contract. We are setting address of the testing contract(`$(this)`), as admin of the Amplifier contract, this way we can use the testing contract as maker. When the contract is deployed, we then need to activate it. We know which tokens we are going to use, so we first create an array with the 3 tokens, next we call Amplifier to check if any of the tokens have the correct approvals. Since we haven't activated Amplifier, we then expect it to revert with a specific message. Foundry has a cheatcode to catch excepted reverts called `expectRevert(<message>)`. This way we can call the checklist and see if the get the expected revert. The last thing we do in our deploy function, is activating Amplifier for the tokens we need.

```solidity
  function test_success_fill() public {
    deployStrat();

    execTraderStratWithFillSuccess();
  }

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
```

We now have a function that can deploy a new Amplifier contract on our local chain. Next is writing the actual test. In the first test we want to create a new offer using Amplifier, sniping one of the offer and then checking that the maker and taker got what they were promised and that both offers now are inactive.

First we save what amounts we want to use for the 2 offers. For the amount of WETH, we use the solidity shorthand `ether`. This is a way of multiplying a number with 10^18, which is the number of decimals ether has and because we are using WETH, it as the same amount of decimals. For both DAI and USDC we use the function `cash(token, amount)`. This is a helper function by MangroveTest, it makes sure to multiply the amount with the correct amount of decimals that the token is using. This way we now have the correct amounts of all tokens, using the correct decimals for each token.

Next we need to approve the %%router|router%% of Amplifier the use the WETH of the tester contract. This is needed because we are using the tester contract as the reserve for Amplifier. We then need to give the tester contract som WETH in order to be able to complete the offers. Foundry has a cheatcode to give an address an amount of a token. This function is called `deal(address_of_token, address_to_receive_token, amount)`. We again use weth in order to use the correct amount of decimals.

```solidity
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
```

We are now ready to post the offers using Amplifier and take one of the offers. Posting new offers and taken an offer, is something all the test are going to do, so we implement a function for each thing. This way we make it easier to write the next test.

When posting offers using Amplifier, we need to fund it, in order to cover gas and provision, giving 1 ether is more than enough to cover the gas. For the pivot ids, we just give 0, since we know that there are no other offers on those markets.

When taking an offer, we need to know what offer to take. Because of this we need the inbound token, in order to snipe the correct offer. We again use a cheatcode by Foundry `prank(address)`, this works like `startPrank`but only for the next call, where `startPrank` works for all calls, until `stopPrank` is called. When using `prank`one should be aware of nested calls, e.g. had we used a call to figure out the pivot1 and just called it inline like this `pivot1: strat.getPivot1()` then it would be that called that gets pranked and not the snipe call.

```solidity
  function postAndFundOffers(uint makerGivesAmount, uint makerWantsAmountDAI, uint makerWantsAmountUSDC)
    public
    returns (uint offerId1, uint offerId2)
  {
    (offerId1, offerId2) = strat.newAmplifiedOffers{value: 1 ether}({
      gives: makerGivesAmount, // WETH
      wants1: makerWantsAmountUSDC, // USDC
      wants2: makerWantsAmountDAI, // DAI
      pivot1: 0,
      pivot2: 0
    });
  }

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
```

After having posted and taken one of the offers, we can now check whether everything happen as excepted. We use `assertEq` and ´assertTrue´ which are Foundry methods for asserting. The first thing we want to check, is whether the taker got the expected amount of WETH minus the fees taken by Mangrove. MangroveTest has a function ´minusFee(address\_outbound,address\_inbound, price)´, that will calculate the fee for a given market and price. The next thing is if the taker gave the correct amount of DAI.

Having tested that the taker got and gave the correct amounts, we then want to check whether the offers are no longer live on Mangrove. To do this we use Mangrove to get the packed offers and then using Mangroves `isLive` function to check if an offer is live. In this case we except that both offers are inactive.

```solidity
...
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
...
```

We have now written our first test. In Foundry you can run all your tests by running `forge test`, if you want to run only for one specific contract you can add `--match-contract <name_of_contract>` and if you only want to run one test on that contract, you can add `--match-test <name_of_test>`. In our case we would run `forge test --match-contract AmplifierTest --match-test test_success_fill`. You can get full stacktraces by uses `-vvv`, you can read more about how `--verbose` works on [Foundry](https://book.getfoundry.sh/)'s own website.

Writing your next test is now a lot easier since have create all the helper functions. E.g. writing a test for a on only being partially taken, would look like this:

```solidity
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
```

A full test of the contract can be found [here](https://github.com/mangrovedao/mangrove-core/blob/master/test/toy\_strategies/Amplifier.t.sol).

When you have create all your tests, you may want to deploy your contract to a real chain. Read more about how to deploy [here](HowToDeploy.md).
