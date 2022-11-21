---
sidebar_position: 4
---

# How to create a Direct contract

:::info

This section will go through two implementations of a **Direct** %%maker contract|maker-contract%%. If you don't know what a Direct contract is, we recommend reading both [MangroveOffer](../explanations/offer-maker/mangrove-offer.md) and [Direct](../explanations/offer-maker/direct.md) before continuing.

:::

## A simple Offer Maker

### Offer Maker's constructor

The Direct constructor is:
```solidity reference title="Direct contract's constructor"
https://github.com/mangrovedao/mangrove-core/blob/d2bcb7dd1723569bb9c4449572c74aa901e187d2/src/strategies/offer_maker/abstract/Direct.sol#L26-L30
```
which passes `mgv`, the address of Mangrove contract and  `gasreq`, the default gas requirement of the strat you wish to implement, to the [MangroveOffer](../explanations/offer-maker/mangrove-offer.md)'s constructor. The additional element that is required to build Direct is `router_` that should be either the address of a deployed %%router|router%%, or the zero address (`NO_ROUTER` is just an alias for `AbstractRouter(address(0))`), when building a Direct contract that will do its own liquidity routing.

So let's use the following constructor for our contract:
```solidity
pragma solidity ^0.8.10;

pragma abicoder v2;

import {Direct, AbstractRouter, IMangrove, IERC20} from "src/strategies/offer_maker/abstract/Direct.sol";
import {IMakerLogic} from "src/strategies/interfaces/IMakerLogic.sol";

contract OfferMaker is Direct, IMakerLogic {

  constructor(IMangrove mgv, AbstractRouter router_, address deployer) Direct(mgv, router_, 30_000) {
    // liquidity reserve of (unique) offer manager is this maker contract
    setReserve(deployer, address(this));
    // if contract is deployed with static address, then one must set admin to something else than msg.sender
    if (deployer != msg.sender) {
      setAdmin(deployer);
    }
  }
...
```
:::caution `gasreq`
We use 30K for default %%`gasreq`|gasreq%% of our strat. This does not leave room for any advanced %%offer logic|offer-logic%%, so we'll stick here with a very simple one where liquidity is stored on this contract. See [how to evaluate `gasreq`](./howtoGasreq.md) for more information.
::: 

:::info `reserve`
This constructor sets deployer %%reserve|reserve%% to be the %%maker contract|maker-contract%% itself. This means that %%outbound|outbound%% tokens have to be present on the maker contract's balance when needed (no just in time liquidity). 
:::

### Simple offer management

With this constructor in place we have almost a deployable maker contract, because Direct provides the implementation of a default offer logic as well as public functions to update and retract offers posted by our contract.

However Direct does not expose any function able to create new offers on Mangrove, since the [`_newOffer`](../technical-references/code/strategies/offer_maker/abstract/Direct.md) function of Direct is internal. The requirement in our constructor to implement `IMakerLogic` imposes to have a public `newOffer` function. Using `IMakerLogic` ensures our contract is compatible with the [Mangrove SDK](../../SDK/README.md), which expects the `IMakerLogic` ABI.

Our implementation of `newOffer` is simply to expose `_newOffer` provided by Direct, making sure the function is admin restricted (Direct provides the appropriate modifier `onlyAdmin`):

```solidity
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

Our maker contract is now complete and ready to be [tested](./HowToTest.md) and [deployed](./HowToDeploy.md). Its offer logic is simple: %%outbound|outbound%% tokens must be present in the contract when called by Mangrove and %%inbound|inbound%% tokens will be stored in the contract when the taker's payment is received. Admin can redeem those tokens by calling the public `withdrawToken` function (see [here](../technical-references/code/strategies/interfaces/IOfferLogic.md) for all public functions that our contract inherits from Direct). 

## Advanced Direct offer: liquidity amplification

We now show how we can tweak our maker contract to do something more interesting that posting plain offers on Mangrove.

Suppose we have a certain amount `N` of some `BASE` token and we wish to sell it on two markets at the same time. To simplify assume that `BASE` is some volatile asset like ETH and we wish to sell it for any of two (equivalent-ish) stables `STABLE1` and `STABLE2` (e.g. DAI and USDC).

Of course if we offer twice `N` tokens on the (`BASE`, `STABLE1`) and the (`BASE`, `STABLE2`) %%offer lists|offer-list%%, one of our offers will fail if both are taken.

We have two design choices here: either we let the second offer fail and compensate the taker with our offer's %%bounty|bounty%% or we incorporate in our offer logic that we wish to retract the second offer when the first one is taken. Let's follow the second design principle as it allows us to illustrate how to use offer logic's hooks to update offer prices or retract them.

### Amplifier's constructor

We modify the simple offer's constructor to take into account the additional gas requirement of the amplifier's logic, which now requires retracting the second offer each time an offer is taken. We also chose here to specialize our maker contract to a particular choice of `BASE`, `STABLE1` and `STABLE2` tokens.

We also show how to use a simple %%router|router%% in order to use deployer's account as %%reserve|reserve%%.

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

  constructor(IMangrove mgv, IERC20 base, IERC20 stable1, IERC20 stable2, address admin)
    Direct(mgv, NO_ROUTER, 60_000)
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

:::caution Admin's reserve

In the above constructor we have not set deployer's reserve. By default this sets deployer's reserve as deployer's address. Deployer must therefore approve maker contract's router for outbound token transfer (see [approvals](../how-to-guides/approvals.md) for more details.)

:::

As in the example above, we need to create a way for the maker contract to post an offer. Here we will not try to comply to the `IMakerLogic` interface (and therefore this contract will no longer be fully usable with the SDK) and use a custom way of posting our two offers in the same transaction.

### Publishing amplified liquidity

We already know some of the parameters of new offers beforehand, since we gave them in the constructor: we know the inbound and the outbound tokens of both offers. Besides this we don't want the %%offer owner|offer-owner%% to specify new offer's %%`gasprice`|gasprice%% and %%`gasreq`|gasreq%%, and just use default values.  

If `gasprice` is set to zero, Mangrove will use its own gas price. For `gasreq`, we can use the public getter `offerGasreq()` which returns the default gas requirement for the contract plus the gas required for the router. 

So we only have to provide the amount of `gives` which is the `BASE` token, and the amount of `STABLE1` and `STABLE2` (`wants1` & `wants2`) as well as the %%pivots|pivot-id%% for the to offers (`pivot1` & `pivot2`). As before, we only want the admin of the contract to able to post offers, so we keep the modifier `onlyAdmin`.

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

    offerId1 = _newOffer(offerArgs1);
    offerId2 = _newOffer(offerArgs2);
  }
```
Notice in the above code, the calls to the offer data getter `MGV.offers(address, address, uint)`, which returns a packed data structure `offer` whose fields `f` can be unpacked by doing `offer.f()` (see offer [data structure](../../contracts/technical-references/taking-and-making-offers/views-on-offers.md#views-on-offers)).

::: info possible gas optimization

If both our amplified offers were once live on Mangrove, but are no longer (either after a retract or because one of them was consumed by a taker), it is more gas efficient to [update the offers](../../contracts/technical-references/taking-and-making-offers/reactive-offer/README.md#creating--updating-offers) to reinstate them on the offer list, rather than creating new ones as we do in the above code.

:::

### Updating under-collateralized offer on the fly

Since we can now post new offers, one of these offers might be taken at some point. When this happens we wish to retract the other offer, which is now un(der)-collateralized, in order to save some %%provision|provision%%. To do this we override the `posthookSuccess` %%hook|hook%%.

The begining of our custom hook looks like:

```solidity
function __posthookSuccess__(MgvLib.SingleOrder calldata order, bytes32 makerData)
    internal
    override
    returns (bytes32)
  {
    bytes32 repost_status = super.__posthookSuccess__(order, makerData);
```
Notice we call `super`'s implementation of the hook, which tries to repost offer residual. The `repost_status` tells us whether the offer had a residual (in case of a %%maker partial fill|maker-partial-fill%).

Because both offers should always give the same volume, we now have two cases:
* either the current offer's logic has reposted a residual and we need to update immediately the other offer to give the same residual, and adapt wants accordingly.
* or the current offer was not reposted, in which case it is no longer in the offer list, and we need to retract the second offer.

So we continue our custom hook with:

```solidity
...
// alt_stable and alt_offerId are the parameters of the offer that was not taken
(IERC20 alt_stable, uint alt_offerId) = IERC20(order.inbound_tkn) == STABLE1 
? (STABLE2, offerId2) 
: (STABLE1, offerId1);

if (repost_status == "posthook/reposted") {
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
} // end if
```  

Notice the use of the hook `__residualGives__` in the above code snippet. It returns what the offer, whose logic is currently executed, will give when reposted. By default, this is simply what the offer was originally giving, minus what it gave to the the taker after %%`makerExecute`|makerExecute%%.

We cannot use `__residualWants__` to deduce how much token the other offer should want because we cannot assume both `STABLE1` and `STABLE2` have the same decimals (we only assume here that they have the same value with respect to `BASE`). We could zero pad or truncate but it's more elegant to compute the new %%wants|wants%% based on the new %%gives|gives%% with the constraint wish to preserve the [entailed price](../../contracts/technical-references/taking-and-making-offers/offer-list.md#wants-gives-and-entailed-price).

### Retracting uncollateralized offer on the fly

During the offer logic's execution it might be that the taken offer does not repost itself on the book. This may happen for the following reasons:
* the offer was completely filled
* the offer is partially filled but its residual is below the offer list's %%density|density%%.
* the offer no longer has enough %%provision|provision%%. This last case may occur if one is reposting an offer that has failed (because a part of the provision was turned into a bounty), or because Mangrove's %%gasprice|gasprice%% is now above the offer's gasprice (because Mangrove updated its gasprice after the offer was last posted).

In each of this cases we wish to retract the other offer from the book, so we continue our hook with:

```solidity
...
else { // if offer was not reposted
  retractOffer({
    outbound_tkn: IERC20(order.outbound_tkn),
    inbound_tkn: IERC20(alt_stable),
    offerId: alt_offerId,
    deprovision: false
  });
  return "posthook/bothRetracted";
}
```

:::warning Refunding offer automatically

An alternative to retracting both offers in case the taken offer failed to repost itself for lack of provision, might be to replenish the maker contract's balance on Mangrove. However we advise against refunding provisions within the offer logic: if some attackers found a way to make your offer fail, they will iterate the attack for as long as you repost an reprovision your offer, draining your native token balance.

:::

### Managing offer failure

When writing posthooks, we need to consider all possible outcomes. The first outcome was that the offer was successfull, but it might be that the offer failed when it was taken. This may happen in this case because we opted for using a router that brings liquidity from deployer's account. Nothing prevents this account to be empty when the taker order arrives.

This now means that the offer that was unsuccessfully taken is no longer live on Mangrove, and that some bounty has been sent to the taker. However the other offer will also fail if taken. For this reason we want to override `posthookFallback` in order to retract the other offer as well:

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

The full code for the contract can be found [here](https://github.com/mangrovedao/mangrove-core/blob/master/src/toy\_strategies/offer\_maker/Amplifier.sol).
