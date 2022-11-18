---
sidebar_position: 4
---

# How to create a Direct contract

This section will go through a few different ways of how a Direct contract could be implemented. If you don't know what a Direct contract is, we recommend reading both [MangroveOffer](../explanations/offer-maker/mangrove-offer.md) and [Direct](../explanations/offer-maker/direct.md) before continuing.

## Simple Direct implementation

When creating a Direct contract, the first thing you need is to import the necessary contracts needed for the constructor. Next is creating a constructor that calls the constructor of Direct. We set the gas requirement to 30.000, since we are not doing much in the posthook, it does not need anymore than that.

In the constructor we check if the deployer of the contract is the same as `msg.sender`, if not, it means that the sender is deploying the contract on behalf of another address and wants that address to be admin of the contract.

```solidity
pragma solidity ^0.8.10;

pragma abicoder v2;

import {Direct, AbstractRouter, IMangrove, IERC20} from "src/strategies/offer_maker/abstract/Direct.sol";
import {IMakerLogic} from "src/strategies/interfaces/IMakerLogic.sol";

contract OfferMaker is Direct {

  constructor(IMangrove mgv, AbstractRouter router_, address deployer) Direct(mgv, router_, 30_000) {
    // stores total gas requirement of this strat (depends on router gas requirements)
    // if contract is deployed with static address, then one must set admin to something else than msg.sender
    if (deployer != msg.sender) {
      setAdmin(deployer);
    }
  }
...
```

Technically Direct does not require anything else. But since the `_newOffer` function of Direct is an internal function, deploying the contract as-is, would not allow anyone to post an offer. Because of this we want to add one thing. We want to implement the `IMakerLogic`, which only says that the contract has to have a `newOffer` function with the correct parameters. You could choose to not use this interface, but it is a nice help, that enforces that the offer maker gives all the relevant information for posting a new offer. Using `IMakerLogic` also makes it compatible with the Mangrove SDK, which expects the `IMakerLogic` ABI. Since we only want the admin of the contract to be able to post offers, we add the modifier `onlyAdmin` to the function. This is a modifier Direct can use, because it is a `AccessControlled` contract.

When this is added, then the contract is ready to be [deployed](HowToDeploy.md). The contract can now post new offers, update offers and retract offers, using all the default behavior from a Direct contract.

The full code can be found in [here](https://github.com/mangrovedao/mangrove-core/blob/master/src/strategies/offer\_maker/OfferMaker.sol).

```solidity
...

  function newOffer(
    IERC20 outbound_tkn,
    IERC20 inbound_tkn,
    uint wants,
    uint gives,
    uint gasreq,
    uint gasprice,
    uint pivotId
  ) public payable override onlyAdmin returns (uint offerId) {
    offerId = _newOffer(
      OfferArgs({
        outbound_tkn: outbound_tkn,
        inbound_tkn: inbound_tkn,
        wants: wants,
        gives: gives,
        gasreq: gasreq,
        gasprice: gasprice,
        pivotId: pivotId,
        fund: msg.value,
        noRevert: false,
        caller: msg.sender
      })
    );
  }
}
```

## Posting ghost liquidity with Direct

One option when using Direct/MangroveOffer is to not only post one offer but two or more. E.g. lets say you want to sell some WETH, but you do not care if you get USDC or DAI in return. That means you could post 2 equivalent offers, one WETH/USDC and one WETH/DAI. And when one of the offers was taken, you would like to retract the other offer. This means that you don't actually have enough WETH for both offers, but it doesn't matter since we're retracting the offer, as soon as it is taken. Doing this, makes the "retracted offer" a "Ghost" offer.

As before we start by creating a constructor, since we now want to post 2 offers, we need some information about what kind of offers the contract should post. The contract needs to know the `BASE` token, and what 2 kinds of stable coins to post (`STABLE1` & `STABLE2`). These are saved in public immutable variables. Besides knowing what kind of tokens that should be used for the offers, the contract needs to know the ids of the offers. This is needed to be able to retract the offers in posthook. We again call the Direct contract, but this time we set the gas requirement to 100.000, because our posthook will require more gas.

In the constructor for Ghost, we create a SimpleRouter and sets it as the %%router|router%% for the contract. It also binds the contract address to the router, allowing the contract to use the router and sets the admin of the router as the given admin. Direct does not require a router, but we use one in this example to show how to use one. The last thing is to set the admin of the contract, to the admin given to the constructor.

```solidity
pragma solidity ^0.8.10;

pragma abicoder v2;

import {Direct, IMangrove, IERC20 } from "src/strategies/offer_maker/abstract/Direct.sol";
import {SimpleRouter, AbstractRouter} from "src/strategies/routers/SimpleRouter.sol";
import {MgvLib, MgvStructs} from "src/MgvLib.sol";

contract Ghost is Direct {
  IERC20 public immutable BASE;
  IERC20 public immutable STABLE1;
  IERC20 public immutable STABLE2;

  uint offerId1; // id of the offer on stable 1
  uint offerId2; // id of the offer on stable 2

  constructor(IMangrove mgv, IERC20 base, IERC20 stable1, IERC20 stable2, address admin)
    Direct(mgv, NO_ROUTER, 100_000)
  {
    // SimpleRouter takes promised liquidity from admin's address (wallet)
    STABLE1 = stable1;
    STABLE2 = stable2;
    BASE = base;
    AbstractRouter router_ = new SimpleRouter();
    setRouter(router_);
    // adding `this` to the allowed makers of `router_` to pull/push liquidity
    // Note: `reserve(admin)` needs to approve `this.router()` for base token transfer
    router_.bind(address(this));
    router_.setAdmin(admin);
    setAdmin(admin);
  }
}
```

As before we need to create a way for the offer maker to post an offer. Before we used IMakerLogic, because it helped us using the correct parameters. But for ghost we already know some of the parameters beforehand, since we gave them in the constructor. We know the inbound and the outbound of both offers. Besides this we don't want the offer maker to specify the gas price and gas requirement, but just use the standard implementations. Because of this, we don't use IMakerLogic for this contract. If the gas price is left at zero, then Mangrove will use its own gas price. And for the gas requirement, we can use the function ´offerGasreq()´ which returns the gas requirement for the contract plus the gas requirement for the router. Because of this we only have to give the amount of `gives` which is the base token, amount of stable1 and stable2 (`wants1` & `wants2`) and the pivots for the to offers (`pivot1` & `pivot2`). As before, we only want the admin of the contract to able to post offers, so we add the modifier `onlyAdmin`.

This contract will only be able to handle 1 pair of offers, because of this we have to check if the 2 offers are already active when we try to post new offers. Mangrove offers a way to do this, by calling `MGV.isLive(offer)` and we can get the offer by calling `MGV.offers(outbound,inbound,offerId)`. This way we can require that both offers are inactive.

An offer is inactive if `gives` of the offer is zero. This means that there are different ways an offer can become inactive. One way is that the offer has never been posted before, but another way could be that the offer had been posted and the fully taken or retracted. If an offer is fully taken or retracted, then the offer still exist, but it is just inactive. The reason for this is, that Mangrove can reuse the offer, instead of posting a completely new offer. Updating an offer is cheaper in gas, than posting a new one. Because of this we need to handle if we should post new offers or update the offers.

We first setup all the arguments that is required for posting or updating an offer. The first offer uses everything relevant for offer1 and the second offer uses everything relevant for offer2. But one difference is that we choose to fund everything through the first offer and nothing through the second offer. Because Direct can only be used by one offer maker, then there is no bookkeeping on how much was funded foreach offer, since all offers a poster by the same offer maker.

To know if an offer already exist or not, we have to get more details from the offers. We do this using `MGV.offerDetails(outbound,inbound, offerId)`. This gives you a packed version of the details. From the this the maker of the offer can be retrieved. If the maker of the offer is empty, it means that the offer doesn't exist.

We now have all the necessary information to know if we should post a new offer or updated one. We then create a function `postOrUpdateOffer` that checks whether the maker is empty and then either posts a new offer or updates the existing one. If it is post a new offer, it will return the new offer id else it will return the old offer id. We use this function for both offers, save the offer ids and return the ids.

Our contract can now post new offers and update them if they are inactive.

```solidity
  function newGhostOffers(
    // this function posts two asks
    uint gives,
    uint wants1,
    uint wants2,
    uint pivot1,
    uint pivot2
  ) external payable onlyAdmin returns (uint, uint) {

    MgvStructs.OfferPacked offer1 = MGV.offers(address(BASE), address(STABLE1), offerId1);
    MgvStructs.OfferPacked offer2 = MGV.offers(address(BASE), address(STABLE2), offerId2);

    require(!MGV.isLive(offer1), "Ghost/offer1AlreadyActive");
    require(!MGV.isLive(offer2), "Ghost/offer2AlreadyActive");

    OfferArgs memory offerArgs1 = OfferArgs({
      outbound_tkn: BASE,
      inbound_tkn: STABLE1,
      wants: wants1,
      gives: gives,
      gasreq: offerGasreq(),
      gasprice: 0,
      pivotId: pivot1,
      fund: msg.value,
      noRevert: false,
      owner: msg.sender
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
      noRevert: false,
      owner: msg.sender
    });

    MgvStructs.OfferDetailPacked offerDetails1 = MGV.offerDetails(address(BASE), address(STABLE1), offerId1);
    MgvStructs.OfferDetailPacked offerDetails2 = MGV.offerDetails(address(BASE), address(STABLE2), offerId2);

    offerId1 = postOrUpdateOffer(offerArgs1, offerDetails1, offerId1);
    offerId2 = postOrUpdateOffer(offerArgs2, offerDetails2, offerId2);
    return (offerId1, offerId2);
  }

  function postOrUpdateOffer(OfferArgs memory offerArgs, MgvStructs.OfferDetailPacked offerDetails, uint offerId)
    internal
    returns (uint)
  {
    if (offerDetails.maker() == address(0)) {
      return _newOffer(offerArgs);
    } else {
      _updateOffer(offerArgs, offerId);
      return offerId;
    }
  }
```

Since we now can post new offers, these offer will get taken at some point. And if one of the offers was taken, we wanted to retract the other offer, since we no longer have the funds for that offer. To do this we use the hook `posthookSuccess`. This hook gets called if the offer was successfully taken.

The first thing we want to do is use Directs own implementation of `posthookSuccess`. This makes sure to repost the offer if it was only partially taken. Next we need to figure out which of the two offers was taken. In `SingleOrder`we can get what the inbound token was for the taken offer. Using this we can figure out if it was `STABLE1` or `STABLE2`, and thereby also the offer id.

Next we need to know whether the Directs `posthookSuccess` reposted the offer or not. Posthooks returns values that the offer maker can use, to know what the hook did and if the was a success. In this case, if the posthook returns `posthook/reposted` it means that the posthook successfully reposted the offer. Knowing that the offers was reposted, we now know that the other offer also needs to be updated, to use the correct gives and wants.

To do this we need information about the remaining `gives` of the offer, so we use `residualGives`, which calculates the remaining `gives`. And we again use `MGV.offers()` and `MGV.offerDetails` to get information about the other offer. With this information we now know what the old `wants` was for the offer and the old and new `gives` for the offer. Using this we can calculate what the new `wants` should be.

With this we can now use Directs own `updateOffer` (you should always use the contracts own newOffer, updateOffer or retractOffer, and never call Mangrove directly, since Direct/Forwarder/MangroveOffer might do some extra bookkeeping). We use the same gas requirement as the old offer, since it still requires the same amount of gas. We use a pivot id right next to the old, since this offer basically the same price as the old one. If we use zero as pivot id, it might be very gas costly the find the right position for the offer. When the offer is updated, we return a value that indicates that this hook successfully reposted both offers.

We can now handle if the offer was partially taken and the other offer needed to be updated. But we still need to handle if the offer was fully taken or the posthook failed. In the case where the offer was fully taken, we want only want to retract the other offer, but if the posthook failed, we want to retract both offers. If `posthookSuccess` failed, then we don't know why and the safest is to retract both offers. We can use the returned value from `posthookSuccess` to check if the offer was fully taken (`posthook/filled`) or failed (any other value). When we retract the offers, we don't want to deprovision. Since deprovisioning is gas costly, it is better to leave the funds, this way the provision can be used to post a new offer, without having to fully fund the new offer. Lastly we return a value that indicates that both offers have been retracted.

The `posthookSuccess`is now done and we can handle the different scenarios that might be triggered.

```solidity
function __posthookSuccess__(MgvLib.SingleOrder calldata order, bytes32 makerData)
    internal
    override
    returns (bytes32)
  {
    bytes32 repost_status = super.__posthookSuccess__(order, makerData);
    (IERC20 alt_stable, uint alt_offerId) =
      IERC20(order.inbound_tkn) == STABLE1 ? (STABLE2, offerId2) : (STABLE1, offerId1);

    if (repost_status == "posthook/reposted") {
      uint new_alt_gives = __residualGives__(order); // in base units
      MgvStructs.OfferPacked alt_offer = MGV.offers(order.outbound_tkn, address(alt_stable), alt_offerId);
      MgvStructs.OfferDetailPacked alt_detail = MGV.offerDetails(order.outbound_tkn, address(alt_stable), alt_offerId);

      uint old_alt_wants = alt_offer.wants();
      uint old_alt_gives = order.offer.gives();
      uint new_alt_wants;
      unchecked {
        new_alt_wants = (old_alt_wants * new_alt_gives) / old_alt_gives;
      }
      // the call below might throw
      updateOffer({
        outbound_tkn: IERC20(order.outbound_tkn),
        inbound_tkn: IERC20(alt_stable),
        gives: new_alt_gives,
        wants: new_alt_wants,
        offerId: alt_offerId,
        gasreq: alt_detail.gasreq(),
        pivotId: alt_offer.next(),
        gasprice: 0
      });
      return "posthook/bothOfferReposted";
    } else {
      // repost failed or offer was entirely taken
      if (repost_status != "posthook/filled") {
        retractOffer({
          outbound_tkn: IERC20(order.outbound_tkn),
          inbound_tkn: IERC20(order.inbound_tkn),
          offerId: order.offerId,
          deprovision: false
        });
      }
      retractOffer({
        outbound_tkn: IERC20(order.outbound_tkn),
        inbound_tkn: IERC20(alt_stable),
        offerId: alt_offerId,
        deprovision: false
      });
      return "posthook/bothRetracted";
    }
  }
```

When writing posthooks, you want to consider all outcomes. The first outcome was that the offer was successfully, but i might be that the offer failed when it was taken. This now means that the offer that was unsuccessfully taken, is now inactive, but the other offer, would probably also fail, if the first offer failed. For this reason we want to write a `posthookFallback` that makes sure to retract the other offer.

Just as we did in the `posthookSuccess`, we find the inbound token and offer id, by looking at the inbound token of the offer that failed. This way we now know which offer we want to retract. When retracting the offer, we again choose to not deprovision, for the same reason as in `posthookSuccess`. Lastly we return a value that indicates that both offers failed.

The `posthookFallback` is now done and we can handle if the offer was unsuccessfully taken.

```solidity
  function __posthookFallback__(MgvLib.SingleOrder calldata order, MgvLib.OrderResult calldata)
    internal
    override
    returns (bytes32)
  {
    // if we reach this code, trade has failed for lack of base token
    (IERC20 alt_stable, uint alt_offerId) =
      IERC20(order.inbound_tkn) == STABLE1 ? (STABLE2, offerId2) : (STABLE1, offerId1);
    retractOffer({
      outbound_tkn: IERC20(order.outbound_tkn),
      inbound_tkn: IERC20(alt_stable),
      offerId: alt_offerId,
      deprovision: false
    });
    return "posthook/bothFailing";
  }
```

The contract is almost done. One last thing that we should offer to the offer maker, is to offer a way to get the provision back. This could simply be because the offer maker wants the pull their offers or that the offers had been retracted doing `posthookSuccess` or `posthookFallback` but not deprovisioned (as explained earlier). Since Direct has its own implementation of retracting a offer, the offer maker would technically be able to retract them themselves, but that would require that the offer maker had stored the offer ids themselves, otherwise they would not know what offers to retract. One way of fixing this would be to make the offer ids of the Ghost contract public, this way the offer maker would be able to retrieve the offer ids themselves and then retract the offers, but another way would be to create a function that would retract both offers. In this example we choose to make a retract function that retracts both offers.

Since we know everything about the two offers, retracting them is simple calling Directs own retractOffer function on both offers. The offer maker might just want to retract the offers, without deprovisioning them, because of this we add a parameter to the function, that tells if the offers should be deprovisioned.

The offer maker can now post new offer, where all posthooks are handled and they can retract their offers again. The contract is now done. The next thing would be to test that the contract works as planned. This can be found in this [section](HowToTest.md).

The full code for the contract can be found [here](https://github.com/mangrovedao/mangrove-core/blob/master/src/toy\_strategies/offer\_maker/Ghost.sol)

```solidity
  function retractOffers(bool deprovision) public {
    retractOffer({outbound_tkn: BASE, inbound_tkn: STABLE1, offerId: offerId1, deprovision: deprovision});
    retractOffer({outbound_tkn: BASE, inbound_tkn: STABLE2, offerId: offerId2, deprovision: deprovision});
  }
```
