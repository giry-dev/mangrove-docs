# Solidity API

## Direct

### SetReserveId

```solidity
event SetReserveId(address reserveId)
```

`reserveId` is set in the constructor
by emitting this event, an indexer will be able to keep track of what reserve is used.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| reserveId | address | identifier of this contract's reserve when using a router. This is indexed so that RPC calls can filter on it. |

### RESERVE_ID

```solidity
address RESERVE_ID
```

identifier of this contract's reserve when using a router

_two contracts using the same RESERVE_ID will share funds, therefore strat builder must make sure this contract is allowed to pull into the given reserve Id.
a safe value for `RESERVE_ID` is `address(this)` in which case the funds will never be shared with another maker contract._

### constructor

```solidity
constructor(contract IMangrove mgv, contract AbstractRouter router_, address reserveId) internal
```

`Direct`'s constructor.

_reserveId==address(0) will set RESERVE_ID to address(this)._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| mgv | contract IMangrove | The Mangrove deployment that is allowed to call `this` for trade execution and posthook. |
| router_ | contract AbstractRouter | the router that this contract will use to pull/push liquidity from offer maker's reserve. This can be `NO_ROUTER`. |
| reserveId | address | identifier of this contract's reserve when using a router. |

### _newOffer

```solidity
function _newOffer(struct IOfferLogic.OfferArgs args) internal returns (uint256 offerId, bytes32 status)
```

Inserts a new offer in Mangrove Offer List.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| args | struct IOfferLogic.OfferArgs | Function arguments stored in memory. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| offerId | uint256 | Identifier of the newly created offer. Returns 0 if offer creation was rejected by Mangrove and `args.noRevert` is set to `true`. |
| status | bytes32 | NEW_OFFER_SUCCESS if the offer was successfully posted on Mangrove. Returns Mangrove's revert reason otherwise. |

### _updateOffer

```solidity
function _updateOffer(struct IOfferLogic.OfferArgs args, uint256 offerId) internal returns (bytes32 status)
```

Updates the offer specified by `offerId` on Mangrove with the parameters in `args`.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| args | struct IOfferLogic.OfferArgs | A memory struct containing the offer parameters to update. |
| offerId | uint256 | An unsigned integer representing the identifier of the offer to be updated. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| status | bytes32 | status a `bytes32` value representing either `REPOST_SUCCESS` if the update is successful, or an error message if an error occurs and `OfferArgs.noRevert` is `true`. If `OfferArgs.noRevert` is `false`, the function reverts with the error message as the reason. |

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
| deprovision | bool | if set to `true` if offer admin wishes to redeem the offer's provision. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| freeWei | uint256 | the amount of native tokens (in WEI) that have been retrieved by retracting the offer. |

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

### __put__

```solidity
function __put__(uint256, struct MgvLib.SingleOrder) internal virtual returns (uint256)
```

direct contract do not need to do anything specific with incoming funds during trade

_one should override this function if one wishes to leverage taker's fund during trade execution_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
|  | uint256 |  |
|  | struct MgvLib.SingleOrder |  |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 |  |

### __get__

```solidity
function __get__(uint256 amount, struct MgvLib.SingleOrder order) internal virtual returns (uint256)
```

`__get__` hook for `Direct` is to ask the router to pull liquidity from `reserveId` if strat is using a router
otherwise the function simply returns what's missing in the local balance

_if the last nested call to `__get__` returns a non zero value, trade execution will revert_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| amount | uint256 | of `outbound` tokens that still needs to be brought to the balance of `this` contract when entering this function |
| order | struct MgvLib.SingleOrder | is a recall of the taker order that is at the origin of the current trade. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 |  |

### __posthookSuccess__

```solidity
function __posthookSuccess__(struct MgvLib.SingleOrder order, bytes32 makerData) internal virtual returns (bytes32)
```

Direct posthook flushes outbound and inbound token back to the router (if any)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| order | struct MgvLib.SingleOrder | is a recall of the taker order that is at the origin of the current trade. |
| makerData | bytes32 | is the returned value of the `__lastLook__` hook, triggered during trade execution. The special value `"lastLook/retract"` should be treated as an instruction not to repost the offer on the list. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes32 |  |

### __checkList__

```solidity
function __checkList__(contract IERC20 token) internal view virtual
```

if strat has a router, verifies that the router is ready to pull/push on behalf of reserve id

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract IERC20 | a token that is traded by this contract |

