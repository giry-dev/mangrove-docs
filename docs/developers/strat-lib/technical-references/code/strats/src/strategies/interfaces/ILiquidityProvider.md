## ILiquidityProvider

### newOffer

```solidity
function newOffer(struct OLKey olKey, Tick tick, uint256 gives, uint256 gasreq) external payable returns (uint256 offerId)
```

creates a new offer on Mangrove with an override for gas requirement

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| olKey | struct OLKey | the offer list key. |
| tick | Tick | the tick |
| gives | uint256 | the amount of inbound tokens the offer maker gives for a complete fill |
| gasreq | uint256 | the gas required by the offer logic |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| offerId | uint256 | the Mangrove offer id. |

### updateOffer

```solidity
function updateOffer(struct OLKey olKey, Tick tick, uint256 gives, uint256 offerId, uint256 gasreq) external payable
```

updates an offer existing on Mangrove (not necessarily live) with an override for gas requirement

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| olKey | struct OLKey | the offer list key. |
| tick | Tick | the tick |
| gives | uint256 | the new amount of inbound tokens the offer maker gives for a complete fill |
| offerId | uint256 | the id of the offer in the offer list. |
| gasreq | uint256 | the gas required by the offer logic |

### retractOffer

```solidity
function retractOffer(struct OLKey olKey, uint256 offerId, bool deprovision) external returns (uint256 freeWei)
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

