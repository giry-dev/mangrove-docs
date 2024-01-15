# Solidity API

## Forwarder

Each offer posted via this contract are managed by their offer maker, not by this contract's admin.
This class implements IForwarder, which contains specific Forwarder logic functions in additions to IOfferLogic interface.

### GAS_APPROX

```solidity
uint256 GAS_APPROX
```

approx of amount of gas units required to complete `__posthookFallback__` when evaluating penalty.

### OwnerData

data associated to each offer published on Mangrove by this contract.

_`OwnerData` packs into one word._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |

```solidity
struct OwnerData {
  address owner;
  uint96 weiBalance;
}
```

### ownerData

```solidity
mapping(bytes32 => mapping(uint256 => struct Forwarder.OwnerData)) ownerData
```

Owner data mapping.

_mapping is olKeyHash -> offerId -> OwnerData
'ownerData[olKeyHash][offerId].owner == maker` if `maker` is offer owner of `offerId` in the `(out, in)` offer list._

### onlyOwner

```solidity
modifier onlyOwner(bytes32 olKeyHash, uint256 offerId)
```

modifier to enforce function caller to be offer owner

### mgvOrOwner

```solidity
modifier mgvOrOwner(bytes32 olKeyHash, uint256 offerId)
```

modifier to enforce function caller to be offer owner or MGV (for use in the offer logic)

### constructor

```solidity
constructor(contract IMangrove mgv, contract AbstractRouter router) internal
```

Forwarder constructor

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| mgv | contract IMangrove | the deployed Mangrove contract on which this contract will post offers. |
| router | contract AbstractRouter | the router that this contract will use to pull/push liquidity from offer maker's reserve. This must not be `NO_ROUTER`. |

### setRouter

```solidity
function setRouter(contract AbstractRouter router) public virtual
```

### offerOwners

```solidity
function offerOwners(bytes32 olKeyHash, uint256[] offerIds) public view returns (address[] offerOwners_)
```

view on offer owners.

_if `offerIds[i]==address(0)` if and only if this offer has no owner._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| olKeyHash | bytes32 | the hash of the offer list key. |
| offerIds | uint256[] | an array of offer identifiers on the offer list. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| offerOwners_ | address[] |  |

### addOwner

```solidity
function addOwner(bytes32 olKeyHash, uint256 offerId, address owner, uint256 leftover) internal
```

grants managing (update/retract) rights on a particular offer.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| olKeyHash | bytes32 | the hash of the offer list key. |
| offerId | uint256 | the offer identifier in the offer list. |
| owner | address | the address of the offer maker. |
| leftover | uint256 | the fraction of `msg.value` that is not locked in the offer provision due to rounding error (see `_newOffer`). |

### deriveGasprice

```solidity
function deriveGasprice(uint256 gasreq, uint256 provision, uint256 offerGasbase) internal pure returns (uint256 gasprice, uint256 leftover)
```

computes the maximum `gasprice` that can be covered by the amount of provision given in argument.

_the returned gasprice is slightly lower than the real gasprice that the provision can cover because of the rounding error due to division_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| gasreq | uint256 | the gas required by the offer |
| provision | uint256 | the amount of native token one wishes to use, to provision the offer on Mangrove. |
| offerGasbase | uint256 | Mangrove's offer_gasbase. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| gasprice | uint256 | the gas price that is covered by `provision` - `leftover`. |
| leftover | uint256 | the sub amount of `provision` that is not used to provision the offer. |

### ownerOf

```solidity
function ownerOf(bytes32 olKeyHash, uint256 offerId) public view returns (address owner)
```

view on an offer owner.

_`ownerOf(in,out,id)` is equivalent to `offerOwners(in, out, [id])` but more gas efficient._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| olKeyHash | bytes32 | the hash of the offer list key. |
| offerId | uint256 | the offer identifier on the offer list. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| owner | address | the offer maker that can manage the offer. |

### deriveAndCheckGasprice

```solidity
function deriveAndCheckGasprice(struct IOfferLogic.OfferArgs args) internal view returns (uint256 gasprice, uint256 leftover)
```

Derives the gas price for the new offer and verifies it against the global configuration.

_the returned gasprice is slightly lower than the real gasprice that the provision can cover because of the rounding error due to division_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| args | struct IOfferLogic.OfferArgs | function's arguments in memory |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| gasprice | uint256 | the gas price that is covered by `provision` - `leftover`. |
| leftover | uint256 | the sub amount of `provision` that is not used to provision the offer. |

### _newOffer

```solidity
function _newOffer(struct IOfferLogic.OfferArgs args, address owner) internal returns (uint256 offerId, bytes32 status)
```

Inserts a new offer on a Mangrove Offer List.

_If inside a hook, one should call `_newOffer` to create a new offer and not directly `MGV.newOffer` to make sure one is correctly dealing with:
* offer ownership
* offer provisions and gasprice_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| args | struct IOfferLogic.OfferArgs | function's arguments in memory |
| owner | address | the address of the offer owner |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| offerId | uint256 | the identifier of the new offer on the offer list. Can be 0 if posting was rejected by Mangrove and `args.noRevert` is `true`. |
| status | bytes32 | the status of the new offer on Mangrove if the call has not reverted. It may be NEW_OFFER_SUCCESS or Mangrove's revert reason if `args.noRevert` was set to true. Forwarder logic does not manage user funds on Mangrove, as a consequence: An offer maker's redeemable provisions on Mangrove is just the sum $S_locked(maker)$ of locked provision in all live offers it owns plus the sum $S_free(maker)$ of `weiBalance`'s in all dead offers it owns (see `OwnerData.weiBalance`). Notice $\sum_i S_free(maker_i)$ <= MGV.balanceOf(address(this))`. Any fund of an offer maker on Mangrove that is either not locked on Mangrove or stored in the `OwnerData` free wei's is thus not recoverable by the offer maker (although it is admin recoverable). Therefore we need to make sure that all `msg.value` is either used to provision the offer at `gasprice` or stored in the offer data under `weiBalance`. To do so, we do not let offer maker fix a gasprice. Rather we derive the gasprice based on `msg.value`. Because of rounding errors in `deriveGasprice` a small amount of WEIs will accumulate in mangrove's balance of `this` contract We assign this leftover to the corresponding `weiBalance` of `OwnerData`. |

### UpdateOfferVars

```solidity
struct UpdateOfferVars {
  uint256 leftover;
  Global global;
  Local local;
  OfferDetail offerDetail;
}
```

### _updateOffer

```solidity
function _updateOffer(struct IOfferLogic.OfferArgs args, uint256 offerId) internal returns (bytes32 reason)
```

Internal `updateOffer`, using arguments and variables on memory to avoid stack too deep.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| args | struct IOfferLogic.OfferArgs | A memory struct containing the offer parameters to update. |
| offerId | uint256 | An unsigned integer representing the identifier of the offer to be updated. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| reason | bytes32 | Either REPOST_SUCCESS or Mangrove's revert reason if update was rejected by Mangrove and `args.noRevert` is `true`. |

### provisionOf

```solidity
function provisionOf(struct OLKey olKey, uint256 offerId) external view returns (uint256 provision)
```

computes the amount of native tokens that can be redeemed when deprovisioning a given offer.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| olKey | struct OLKey | the offer list key. |
| offerId | uint256 | the identifier of the offer in the offer list |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| provision | uint256 | the amount of native tokens that can be redeemed when deprovisioning the offer |

### _retractOffer

```solidity
function _retractOffer(struct OLKey olKey, uint256 offerId, bool deprovision) internal returns (uint256 freeWei)
```

Retracts an offer from an Offer List of Mangrove.

_An offer that is retracted without `deprovision` is retracted from the offer list, but still has its provisions locked by Mangrove.
Calling this function, with the `deprovision` flag, on an offer that is already retracted must be used to retrieve the locked provisions._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| olKey | struct OLKey | the offer list key. |
| offerId | uint256 | the identifier of the offer in the offer list |
| deprovision | bool | if set to `true` if offer owner wishes to redeem the offer's provision. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| freeWei | uint256 | the amount of native tokens (in WEI) that have been retrieved by retracting the offer. |

### __put__

```solidity
function __put__(uint256 amount, struct MgvLib.SingleOrder order) internal virtual returns (uint256)
```

Hook that implements where the inbound token, which are brought by the Offer Taker, should go during Taker Order's execution.

_put received inbound tokens on offer maker's reserve during `makerExecute`
if nothing is done at that stage then it could still be done during `makerPosthook`.
However one would then need to pay attention to the following fact:
if `order.olKey.inbound_tkn` is not pushed to reserve during `makerExecute`, in the posthook of this offer execution, the `order.olKey.inbound_tkn` balance of this contract would then contain
the sum of all payments of offers managed by `this` that are in a better position in the offer list (because posthook is called in the call stack order).
here we maintain an invariant that `this` balance is empty (both for `order.olKey.inbound_tkn` and `order.olKey.outbound_tkn`) at the end of `makerExecute`._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| amount | uint256 | of `inbound` tokens that are on `this` contract's balance and still need to be deposited somewhere |
| order | struct MgvLib.SingleOrder | is a recall of the taker order that is at the origin of the current trade. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 |  |

### __get__

```solidity
function __get__(uint256 amount, struct MgvLib.SingleOrder order) internal virtual returns (uint256)
```

Hook that implements where the outbound token, which are promised to the taker, should be fetched from, during Taker Order's execution.

_get outbound tokens from offer owner reserve_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| amount | uint256 | of `outbound` tokens that still needs to be brought to the balance of `this` contract when entering this function |
| order | struct MgvLib.SingleOrder | is a recall of the taker order that is at the origin of the current trade. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 |  |

### __handleResidualProvision__

```solidity
function __handleResidualProvision__(struct MgvLib.SingleOrder order) internal virtual
```

Hook that defines what needs to be done to the part of an offer provision that was added to the balance of `this` on Mangrove after an offer has failed.

_if offer failed to execute, Mangrove retracts and deprovisions it after the posthook call.
As a consequence if this hook is reached, `this` balance on Mangrove *will* increase, after the posthook,
of some amount $n$ of native tokens. We evaluate here an underapproximation $~n$ in order to credit the offer maker in a pull based manner:
failed offer owner can retrieve $~n$ by calling `retractOffer` on the failed offer.
because $~n<n$ a small amount of WEIs will accumulate on the balance of `this` on Mangrove over time.
Note that these WEIs are not burnt since they can be admin retrieved using `withdrawFromMangrove`._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| order | struct MgvLib.SingleOrder | is a recall of the taker order that failed |

### __checkList__

```solidity
function __checkList__(contract IERC20 token) internal view virtual
```

verifies that msg.sender is an allowed reserve id to trade tokens with this contract

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract IERC20 | a token that is traded by this contract |

