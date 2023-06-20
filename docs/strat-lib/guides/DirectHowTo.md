---
sidebar_position: 4
---

# Creating a Direct contract

:::info

This section will go through two implementations of a %%maker contract|maker-contract%%, which inherits from the **Direct** contract. If you don't know what the Direct contract is, we recommend reading through both the documentation on [MangroveOffer](../background/offer-maker/mangrove-offer.md) and on [Direct](../background/offer-maker/direct.md) before continuing.

:::

## A simple `Direct` implementation - the `OfferMaker` 

Below, we start by going through a fairly simple implementation of the abstract [Direct](../background/offer-maker/direct.md) contract. 

Recall that `Direct` is an abstract implementation of `MangroveOffer`, which is itself a partial implementation of [`IOfferLogic`](../technical-references/code/strategies/interfaces/IOfferLogic.md) - the basic interface for maker contracts built with the Strat Library.

### Constructor

The Direct constructor looks like this:
```solidity reference title="Direct contract's constructor"
https://github.com/mangrovedao/mangrove-core/blob/d6a2aae336a7ea89abe2479ab797b5ffcd5abb02/src/strategies/offer_maker/abstract/Direct.sol#L26-L33
```
which provides `mgv` (the address of the Mangrove contract) to MangroveOffer and %%`gasreq`|gasreq%% the gas that is required to execute the %%offer logic|offer-logic%%. The specific arguments of the Direct's constructor are the %%`router_`|router%%'s address and its %%`reserveId`|reserve-id%%. Notice that passing `address(0)` as `reserveId` is interpreted by Direct as requiring `reserveId` to be the contract's address.

The `router_` argument can be either the address of a deployed %%router|router%%, or the zero address cast to an `AbstractRouter` type, when you wish to build a `Direct` contract that will do its own liquidity routing. (In the latter case, for clarity, you may also use the public constant [`NO_ROUTER`](../technical-references/code/strategies/MangroveOffer.md#no_router) provided by `MangroveOffer`.)

We will allow users of `OfferMaker` to supply a %%router|router%%, and use the following constructor for our contract:
```solidity
pragma solidity ^0.8.10;

pragma abicoder v2;

import {Direct, AbstractRouter, IMangrove, IERC20} from "src/strategies/offer_maker/abstract/Direct.sol";
import {IMakerLogic} from "src/strategies/interfaces/ILiquidityProvider.sol";

contract OfferMaker is Direct, ILiquidityProvider {

  constructor(IMangrove mgv, AbstractRouter router_, address admin_) Direct(mgv, router_, 30_000, address(0)) {
    // Direct sets admin to msg.sender by default
    if (admin_ != msg.sender) {
      setAdmin(deployer);
    }
  }
...
```
:::caution `gasreq`
We use 30K for default %%`gasreq`|gasreq%% of our strat. This does not leave room for any advanced %%offer logic|offer-logic%%, so we'll stick here with a very simple one where liquidity is stored on this contract. See [how to evaluate `gasreq`](./howtoGasreq.md) for more information.
::: 

### Simple offer management

With this constructor in place we almost have a deployable maker contract. `Direct` already provides the implementation of a default %%offer logic|offer-logic%% as well as internal functions to post, update and retract offers posted by our contract.

However, `Direct` does not expose any function able to [create new offers](../../contracts/technical-references/taking-and-making-offers/reactive-offer/README.md#posting-a-new-offer) on Mangrove, since the [`_newOffer`](../technical-references/code/strategies/offer_maker/abstract/Direct.md) function of Direct is internal. The requirement in our constructor to implement `ILiquidityProvider` imposes on us to have a public `newOffer` function. Using `ILiquidityProvider` ensures our contract is compatible with the [Mangrove SDK](../../SDK/README.md), which expects the `ILiquidityProvider` ABI.

Our implementation of `newOffer` is simply to expose the internal `_newOffer` provided by Direct making sure the function is admin restricted (`Direct` provides the appropriate modifier `onlyAdmin`):

```solidity
///@inheritdoc ILiquidityProvider
function newOffer(
  IERC20 outbound_tkn,
  IERC20 inbound_tkn,
  uint wants,
  uint gives,
  uint pivotId,
  uint gasreq
) public payable override onlyAdmin returns (uint offerId) {
  offerId = _newOffer(
    OfferArgs({
      outbound_tkn: outbound_tkn,
      inbound_tkn: inbound_tkn,
      wants: wants,
      gives: gives,
      gasreq: gasreq,
      gasprice: 0, // use mangrove's gasprice
      pivotId: pivotId,
      fund: msg.value,
      noRevert: false
    })
  );
}

///@inheritdoc ILiquidityProvider
function updateOffer(
  IERC20 outbound_tkn,
  IERC20 inbound_tkn,
  uint wants,
  uint gives,
  uint pivotId,
  uint offerId,
  uint gasreq
) public payable override onlyAdmin {
  _updateOffer(
    OfferArgs({
      outbound_tkn: outbound_tkn,
      inbound_tkn: inbound_tkn,
      wants: wants,
      gives: gives,
      gasreq: gasreq,
      gasprice: 0,
      pivotId: pivotId,
      fund: msg.value,
      noRevert: false
    }),
    offerId
  );
}

///@inheritdoc ILiquidityProvider
function retractOffer(IERC20 outbound_tkn, IERC20 inbound_tkn, uint offerId, bool deprovision)
  public
  adminOrCaller(address(MGV))
  returns (uint freeWei)
{
  freeWei = _retractOffer(outbound_tkn, inbound_tkn, offerId, deprovision);
  if (freeWei > 0) {
    require(MGV.withdraw(freeWei), "Direct/withdrawFail");
    // sending native tokens to `msg.sender` prevents reentrancy issues
    // (the context call of `retractOffer` could be coming from `makerExecute` and a different recipient of transfer than `msg.sender` could use this call to make offer fail)
    (bool noRevert,) = admin().call{value: freeWei}("");
    require(noRevert, "mgvOffer/weiTransferFail");
  }
}
```

Our maker contract is now complete and ready to be [tested](./HowToTest.md) and [deployed](./HowToDeploy.md). 

:::caution Redeeming funds
We do not provide any method to redeem inbound or outbound tokens from the contract. However, `MangroveOffer` provides an admin-only `approve` function, that allows contract's admin to retrieve any token, following a call sequence of the form:
```solidity
makerContract.approve(token, address(this), amount);
token.transferFrom(address(makerContract), address(this), amount);
``` 
:::

## Advanced Direct offer: Liquidity Amplification with `Amplifier`

With a simple implementation of `Direct` under our belt, let us proceed show how we can tweak our maker contract to do something more interesting that posting plain offers on Mangrove.

Suppose we have a certain amount `N` of some `BASE` token and we wish to put it for sale on two markets at the same time. To simplify assume that `BASE` is some volatile asset like ETH and we wish to sell it for any of two (equivalent-ish) stables `STABLE1` and `STABLE2` (e.g. DAI and USDC).

Of course, if we offer `N` tokens *both* on the (`BASE`, `STABLE1`) and the (`BASE`, `STABLE2`) %%offer lists|offer-list%%, one of our offers will fail if both are taken.

We have a design choice here. Either we

1. let the second offer fail and compensate the taker with our offer's %%bounty|bounty%%, or,
2. incorporate in our offer logic that we wish to [retract](../../contracts/technical-references/taking-and-making-offers/reactive-offer/README.md#retracting-an-offer) the second offer when the first one is taken. 

Let's follow the second design principle as it allows us to illustrate how to use the %%hooks|hook%% provided by `Direct` to update offer prices or to retract offers.

### Constructor

We modify the simple constructor of `OfferMaker` to take into account the additional gas requirements of `Amplifier`'s logic: To retract (or update) the second offer each time an offer is taken. We also choose to specialize instances of our maker contract to a particular choice of `BASE`, `STABLE1` and `STABLE2` tokens - requiring these to be given as arguments when construing the contract.

In the constructor below, we also show how to instantiate and setup a simple %%router|router%% in order to use the deployer's account as fund reserve.

```solidity
pragma solidity ^0.8.10;

pragma abicoder v2;

import {Direct, IMangrove, IERC20 } from "src/strategies/offer_maker/abstract/Direct.sol";
import {SimpleRouter, AbstractRouter} from "src/strategies/routers/SimpleRouter.sol";
import {MgvLib, MgvStructs} from "src/MgvLib.sol";

contract Amplifier is Direct {
  IERC20 public immutable BASE;
  IERC20 public immutable STABLE1;
  IERC20 public immutable STABLE2;

  uint offerId1; // id of the offer on stable 1
  uint offerId2; // id of the offer on stable 2

  constructor(IMangrove mgv, IERC20 base, IERC20 stable1, IERC20 stable2, address admin_)
    Direct(mgv, NO_ROUTER, 60_000, admin_)
  {
    // SimpleRouter takes promised liquidity from reserveId (here admin's wallet)
    STABLE1 = stable1;
    STABLE2 = stable2;
    BASE = base;
    AbstractRouter router_ = new SimpleRouter();
    setRouter(router_);
    // adding `this` to the allowed makers of `router_` to pull/push liquidity
    // Note: `admin_` will need to approve `this.router()` for base token transfer
    router_.bind(address(this));
    router_.setAdmin(admin_);
    setAdmin(admin);
  }
}
```

Note that as we manually construct and configure `router_` and set it as the router of `Amplifier`, we initially send the constant `NO_ROUTER` as argument to the `Direct` constructor.

As in the example above, we need to create a way for the maker contract to post an offer. For this example, we will not try to comply to the `ILiquidityProvider` interface - and therefore this contract will no longer be fully usable with the SDK. We will use a custom way of posting our two offers in the same transaction.

### Publishing amplified liquidity

We already know some of the parameters we need to implement posting new offers, since we gave them in the constructor: We know the %%inbound|inbound%% and the %%outbound|outbound%% tokens of both offers. Also, we do not want the %%offer owner|offer-owner%% to have to specify new offer's %%`gasprice`|gasprice%% and %%`gasreq`|gasreq%% so we just use default values.

If we specify a `gasprice` of zero when posting the offer, Mangrove will use [its own gas price](../../contracts/technical-references/governance-parameters/global-variables.md#gas-price-and-oracle). For `gasreq`, we can use the public getter `offerGasreq()`, which returns the default gas requirement for the contract plus the gas required for the %%router|router%%. 

This leaves us having to provide the amount that the offer should %%`give`|gives%% in `BASE` token, and the amount of `STABLE1` and `STABLE2`, which the offer %%wants|wants%% - `wants1` and `wants2`. We also need to specify the %%pivot ids|pivot-id%% for insertion of the two offers (`pivot1` and `pivot2`) in the relevant %%offer lists|offer-list%%. As for `OfferMaker`, we only want the admin of the contract to able to post offers, so we use the modifier `onlyAdmin` again.

```solidity
  function newAmplifiedOffers(
    // this function posts two asks
    uint gives,
    uint wants1,
    uint wants2,
    uint pivot1,
    uint pivot2
  ) external payable onlyAdmin returns (uint, uint) {

    // retrieving info about `offerId1` and `offerId2` on Mangrove
    MgvStructs.OfferPacked offer1 = MGV.offers(address(BASE), address(STABLE1), offerId1);
    MgvStructs.OfferPacked offer2 = MGV.offers(address(BASE), address(STABLE2), offerId2);

    // we check whether any offer Id is live on Mangrove's offer list
    // NB an offer whose id is 0 is never live
    require(!MGV.isLive(offer1), "Amplifier/offer1AlreadyActive");
    require(!MGV.isLive(offer2), "Amplifier/offer2AlreadyActive");

    // the arguments for the two offers:
    OfferArgs memory offerArgs1 = OfferArgs({
      outbound_tkn: BASE,
      inbound_tkn: STABLE1,
      wants: wants1,
      gives: gives,
      gasreq: offerGasreq(), // use default gasreq for this strat
      gasprice: 0, // we let Mangrove use its own gasprice
      pivotId: pivot1,
      fund: msg.value, 
      noRevert: false
    });

    OfferArgs memory offerArgs2 = OfferArgs({
      outbound_tkn: BASE,
      inbound_tkn: STABLE2,
      wants: wants2,
      gives: gives,
      gasreq: offerGasreq(),
      gasprice: 0,
      pivotId: pivot2,
      fund: 0, // no need to fund this second call for provision since the above call should be enough
      noRevert: false
    });

    offerId1 = _newOffer(offerArgs1);
    offerId2 = _newOffer(offerArgs2);
  }
```

In the implementation of `newAmplifiedOffers` notice the calls to the offer data getter `MGV.offers(address, address, uint)`: This returns a packed data structure `offer` whose fields `f` can be unpacked by doing `offer.f()` (see the documentation for the [offer data structure](../../contracts/technical-references/taking-and-making-offers/views-on-offers.md#views-on-offers)).

:::info possible gas optimization

If both our amplified offers were once live on Mangrove, but are no longer (either after a retract or because one of them was consumed by a taker), it is more gas efficient to [update the offers](../../contracts/technical-references/taking-and-making-offers/reactive-offer/README.md#updating-an-existing-offer) to reinstate them on the %%offer list|offer-list%%, rather than creating new ones as we do in the above code.

:::

### Updating an under-collateralized offer on the fly

With `newAmplifiedOffers` implemented, we can now post new offers. We hope that one of these offers will be taken at some point. When this happens, as per the specification we decided upon [above](#advanced-direct-offer-liquidity-amplification-with-amplifier), we wish to retract the other offer, which is now un(der)-collateralized, in order to save some %%provision|provision%%. To do this we override the `posthookSuccess` %%hook|hook%%.

The signature and first line of our custom %%hook|hook%% looks like this:

```solidity
function __posthookSuccess__(MgvLib.SingleOrder calldata order, bytes32 makerData)
    internal
    override
    returns (bytes32)
  {
    bytes32 repost_status = super.__posthookSuccess__(order, makerData);
    ...
```

Notice that we call `super`'s implementation of the hook. This ultimately ends up attempting to repost the offer residual (cf. the documentation of [Post trade hooks for MangroveOffer](../background/offer-maker/mangrove-offer.md#post-trade-hooks) and the reference for [Customizing `makerPosthook`](../technical-references/main-hooks.md#customizing-makerposthook)). The return value captured in `repost_status` tells us whether the offer had a residual (in case of a %%maker partial fill|maker-partial-fill%%).

:::info default reposting policy
Direct offers that are partially filled are automatically reposted during posthook, adapting %%wants|wants%% to remaining %%gives|gives%% in order to maintain offer's original price. Direct's posthook returns the constants `REPOST_SUCCESS` in case the offer's residual was reposted, or `COMPLETE_FILL` if the offer was entirely consumed by taker (these constants are defined in `MangroveOffer`). If the offer fails to repost, the hook returns Mangrove's reason.
:::

#### Implementing case 1: An offer was reposted with a residual

We continue our implementation of the `__posthookSuccess__` hook by handling case 1:

```solidity
...
// alt_stable and alt_offerId are the parameters of the offer that was not taken
(IERC20 alt_stable, uint alt_offerId) = IERC20(order.inbound_tkn) == STABLE1 
? (STABLE2, offerId2) 
: (STABLE1, offerId1);

if (repost_status == REPOST_SUCCESS) {
  // alt_gives is the same as what the new gives of this offer
  uint new_alt_gives = __residualGives__(order); // in base units
  // fetching current data about alt_offer
  MgvStructs.OfferPacked alt_offer = MGV.offers(order.outbound_tkn, address(alt_stable), alt_offerId);
  MgvStructs.OfferDetailPacked alt_detail = MGV.offerDetails(order.outbound_tkn, address(alt_stable), alt_offerId);

  uint old_alt_wants = alt_offer.wants();
  // alt_gives is the same at what this offer gives
  uint old_alt_gives = order.offer.gives();
  // computing new wants for the alt offer:
  uint new_alt_wants;
  // wants and gives are 96 bits wide, so no overflow possible
  unchecked {
    new_alt_wants = (old_alt_wants * new_alt_gives) / old_alt_gives;
  }
  _updateOffer(
    OfferArgs({
      outbound_tkn: IERC20(order.outbound_tkn),
      inbound_tkn: IERC20(alt_stable),
      gives: new_alt_gives,
      wants: new_alt_wants,
      gasreq: alt_detail.gasreq(),
      pivotId: alt_offer.next(),
      gasprice: 0
    }), offerId
  );
  return "posthook/bothOfferReposted";
} // end if
...
```  

Notice the use of the hook [`__residualGives__`](../technical-references/code/strategies/MangroveOffer.md#residualgives) in the code snippet above. For the offer currently being executed, it returns the %%give|gives%% at that offer when it is reposted. By default, this is calculated by subtracting what the taker took during %%`makerExecute`|makerExecute%% from what the offer originally gave.

Also notice that we go through a slightly more complex calculation to compute the updated wants for the *other* offer: We cannot use [`__residualWants__`](../technical-references/code/strategies/MangroveOffer.md#residualwants) to deduce the amount of tokens the *other* offer should %%want|wants%%, because we cannot assume both `STABLE1` and `STABLE2` have the same decimals. (For this example, we only assume that they have the same value with respect to `BASE`.) We could zero-pad or truncate, but it is more elegant to compute the new %%wants|wants%% based on the new %%gives|gives%% - we set the constraint that we wish to preserve the %%entailed price|offer-entailed-price%%.

### Retracting the uncollateralized offer on the fly

During the execution of the %%offer logic|offer-logic%% it may occur that the taken offer does not repost itself on the %%offer list|offer-list%%. This may happen for the following reasons:

* the offer was completely filled
* the offer is %%partially filled|maker-partial-fill%% but its residual is below the offer list's %%density|density%%
* the offer no longer has enough %%provision|provision%%. This last case may occur if one is reposting an offer that has failed (because a part of the %%provision|provision%% was turned into a %%bounty|bounty%%), or because Mangrove's %%gasprice|gasprice%% is now above the offer's gasprice. (This may happen, if Mangrove updated its [own gasprice](../../contracts/technical-references/governance-parameters/global-variables.md#gas-price-and-oracle) after the offer was last posted.)

In all of these cases we wish to retract the other offer from the book.

#### Implementing case 2: An offer was not reposted, and we need to retract the other offer

We continue our hook by handling case 2 from our [breakdown above](#updating-an-under-collateralized-offer-on-the-fly).

```solidity
...
else { // if offer was not reposted
  _retractOffer({
    outbound_tkn: IERC20(order.outbound_tkn),
    inbound_tkn: IERC20(alt_stable),
    offerId: alt_offerId,
    deprovision: false
  });
  return "posthook/bothRetracted";
}
```

:::warning Refunding offer automatically

There is an alternative to retracting both offers in case the taken offer failed to repost itself for lack of provision: We might replenish the maker contract's balance on Mangrove. However, we advise against refunding provisions automatically within the %%offer logic|offer-logic%% itself: 

Suppose that you instrumented your offer logic to do this. Now, if an attacker found a reproducible way of making your offer fail, they could loop that attack for as long as you repost a reprovision for your offer. This could ultimately draining your native token balance!

:::

### Managing offer failure

When writing posthooks, we need to consider all possible outcomes. The first outcome we have handled above assumed that the offer was successful. However, it might also be that the offer failed when it was taken. In this setup, this may happen, for instance, because we opted for using a router that brings liquidity from deployer's account. Nothing prevents this account from being empty when the taker order actually arrives.

If this happens, this means that the offer that was unsuccessfully taken is no longer live on Mangrove and that some %%bounty|bounty%% has been sent to the taker. However, in this case, we **know** that the *other* offer will also fail if taken. For this reason, in case if a trade fails, rather than waiting for the other offer to fail by itself, we can save some %%provision|provision%% and override [`posthookFallback`](../technical-references/main-hooks.md#posthook-after-trade-failure) to retract the other offer:

```solidity
  function __posthookFallback__(MgvLib.SingleOrder calldata order, MgvLib.OrderResult calldata)
    internal
    override
    returns (bytes32)
  {
    // if we reach this code, trade has failed for lack of base token
    (IERC20 alt_stable, uint alt_offerId) =
      IERC20(order.inbound_tkn) == STABLE1 ? (STABLE2, offerId2) : (STABLE1, offerId1);
    _retractOffer({
      outbound_tkn: IERC20(order.outbound_tkn),
      inbound_tkn: IERC20(alt_stable),
      offerId: alt_offerId,
      deprovision: false
    });
    return "posthook/bothFailing";
  }
```

