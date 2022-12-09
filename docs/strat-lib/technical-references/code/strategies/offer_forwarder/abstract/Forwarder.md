## Forwarder

Each offer posted via this contract are managed by their offer maker, not by this contract's admin.
This class implements IForwarder, which contains specific Forwarder logic functions in additions to IOfferLogic interface.

### GAS_APPROX

```solidity
uint256 GAS_APPROX
```

### OwnerData

```solidity
struct OwnerData {
  address owner;
  uint96 weiBalance;
}
```

### ownerData

```solidity
mapping(contract IERC20 => mapping(contract IERC20 => mapping(uint256 => struct Forwarder.OwnerData))) ownerData
```

Owner data mapping.

_mapping is outbound_tkn -> inbound_tkn -> offerId -> OwnerData
'ownerData[out][in][offerId].owner == maker` if `maker` is offer owner of `offerId` in the `(out, in)` offer list._

### onlyOwner

```solidity
modifier onlyOwner(contract IERC20 outbound_tkn, contract IERC20 inbound_tkn, uint256 offerId)
```

modifier to enforce function caller to be offer owner

### mgvOrOwner

```solidity
modifier mgvOrOwner(contract IERC20 outbound_tkn, contract IERC20 inbound_tkn, uint256 offerId)
```

modifier to enforce function caller to be offer owner or MGV (for use in the offer logic)

### constructor

```solidity
constructor(contract IMangrove mgv, contract AbstractRouter router, uint256 gasreq) internal
```

Forwarder constructor

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| mgv | contract IMangrove | the deployed Mangrove contract on which this contract will post offers. |
| router | contract AbstractRouter | the router that this contract will use to pull/push liquidity from offer maker's reserve. This must not be `NO_ROUTER`. |
| gasreq | uint256 | Gas requirement when posting offers via this strategy, excluding router requirement. |

### offerOwners

```solidity
function offerOwners(contract IERC20 outbound_tkn, contract IERC20 inbound_tkn, uint256[] offerIds) public view returns (address[] offerOwners_)
```

view on offer owners.

_if `offerIds[i]==address(0)` if and only if this offer has no owner._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| outbound_tkn | contract IERC20 | the outbound token of the offer list. |
| inbound_tkn | contract IERC20 | the inbound token of the offer list. |
| offerIds | uint256[] | an array of offer identifiers on the offer list. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| offerOwners_ | address[] |  |

### addOwner

```solidity
function addOwner(contract IERC20 outbound_tkn, contract IERC20 inbound_tkn, uint256 offerId, address owner, uint256 leftover) internal
```

grants managing (update/retract) rights on a particular offer.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| outbound_tkn | contract IERC20 | the outbound token coordinate of the offer list. |
| inbound_tkn | contract IERC20 | the inbound token coordinate of the offer list. |
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
function ownerOf(contract IERC20 outbound_tkn, contract IERC20 inbound_tkn, uint256 offerId) public view returns (address owner)
```

view on an offer owner.

_`ownerOf(in,out,id)` is equivalent to `offerOwners(in, out, [id])` but more gas efficient._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| outbound_tkn | contract IERC20 | the outbound token of the offer list. |
| inbound_tkn | contract IERC20 | the inbound token of the offer list. |
| offerId | uint256 | the offer identifier on the offer list. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| owner | address | the offer maker that can manage the offer. |

### _newOffer

```solidity
function _newOffer(struct IOfferLogic.OfferArgs args) internal returns (uint256 offerId)
```

Inserts a new offer on a Mangrove Offer List.

_If inside a hook, one should call `_newOffer` to create a new offer and not directly `MGV.newOffer` to make sure one is correctly dealing with:
* offer ownership
* offer provisions and gasprice_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| args | struct IOfferLogic.OfferArgs | memory location of the function's arguments |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| offerId | uint256 | the identifier of the new offer on the offer list. Can be 0 if posting was rejected by Mangrove and `args.noRevert` is `true`. Forwarder logic does not manage user funds on Mangrove, as a consequence: An offer maker's redeemable provisions on Mangrove is just the sum $S_locked(maker)$ of locked provision in all live offers it owns plus the sum $S_free(maker)$ of `weiBalance`'s in all dead offers it owns (see `OwnerData.weiBalance`). Notice $\sum_i S_free(maker_i)$ <= MGV.balanceOf(address(this))`. Any fund of an offer maker on Mangrove that is either not locked on Mangrove or stored in the `OwnerData` free wei's is thus not recoverable by the offer maker (although it is admin recoverable). Therefore we need to make sure that all `msg.value` is either used to provision the offer at `gasprice` or stored in the offer data under `weiBalance`. To do so, we do not let offer maker fix a gasprice. Rather we derive the gasprice based on `msg.value`. Because of rounding errors in `deriveGasprice` a small amount of WEIs will accumulate in mangrove's balance of `this` contract We assign this leftover to the corresponding `weiBalance` of `OwnerData`. |

### UpdateOfferVars

```solidity
struct UpdateOfferVars {
  uint256 leftover;
  GlobalPacked global;
  LocalPacked local;
  OfferDetailPacked offerDetail;
}
```

### _updateOffer

```solidity
function _updateOffer(struct IOfferLogic.OfferArgs args, uint256 offerId) internal returns (uint256)
```

Internal `updateOffer`, using arguments and variables on memory to avoid stack too deep.

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | 0 if update was rejected by Mangrove and `args.noRevert` is `true`. Returns `args.offerId` otherwise |

### provisionOf

```solidity
function provisionOf(contract IERC20 outbound_tkn, contract IERC20 inbound_tkn, uint256 offerId) external view returns (uint256 provision)
```

computes the amount of native tokens that can be redeemed when deprovisioning a given offer.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| outbound_tkn | contract IERC20 | the outbound token of the offer list |
| inbound_tkn | contract IERC20 | the inbound token of the offer list |
| offerId | uint256 | the identifier of the offer in the offer list |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| provision | uint256 | the amount of native tokens that can be redeemed when deprovisioning the offer |

### retractOffer

```solidity
function retractOffer(contract IERC20 outbound_tkn, contract IERC20 inbound_tkn, uint256 offerId, bool deprovision) public returns (uint256 freeWei)
```

Retracts an offer from an Offer List of Mangrove.

_An offer that is retracted without `deprovision` is retracted from the offer list, but still has its provisions locked by Mangrove.
Calling this function, with the `deprovision` flag, on an offer that is already retracted must be used to retrieve the locked provisions._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| outbound_tkn | contract IERC20 | the outbound token of the offer list. |
| inbound_tkn | contract IERC20 | the inbound token of the offer list. |
| offerId | uint256 | the identifier of the offer in the (`outbound_tkn`,`inbound_tkn`) offer list |
| deprovision | bool | positioned if `msg.sender` wishes to redeem the offer's provision. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| freeWei | uint256 |  |

### __put__

```solidity
function __put__(uint256 amount, struct MgvLib.SingleOrder order) internal virtual returns (uint256)
```

Hook that implements where the inbound token, which are brought by the Offer Taker, should go during Taker Order's execution.

_put received inbound tokens on offer maker's reserve during `makerExecute`
if nothing is done at that stage then it could still be done during `makerPosthook`.
However one would then need to pay attention to the following fact:
if `order.inbound_tkn` is not pushed to reserve during `makerExecute`, in the posthook of this offer execution, the `order.inbound_tkn` balance of this contract would then contain
the sum of all payments of offers managed by `this` that are in a better position in the offer list (because posthook is called in the call stack order).
here we maintain an invariant that `this` balance is empty (both for `order.inbound_tkn` and `order.outbound_tkn`) at the end of `makerExecute`._

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

### __posthookFallback__

```solidity
function __posthookFallback__(struct MgvLib.SingleOrder order, struct MgvLib.OrderResult result) internal virtual returns (bytes32)
```

_if offer failed to execute, Mangrove retracts and deprovisions it after the posthook call.
As a consequence if `__posthookFallback__` is reached, `this` balance on Mangrove *will* increase, after the posthook,
of some amount $n$ of native tokens. We evaluate here an underapproximation $~n$ in order to credit the offer maker in a pull based manner:
failed offer owner can retrieve $~n$ by calling `retractOffer` on the failed offer.
because $~n<n$ a small amount of WEIs will accumulate on the balance of `this` on Mangrove over time.
Note that these WEIs are not burnt since they can be admin retrieved using `withdrawFromMangrove`._

