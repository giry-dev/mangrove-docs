## OfferForwarder

### constructor

```solidity
constructor(contract IMangrove mgv, address deployer) public
```

### newOffer

```solidity
function newOffer(contract IERC20 outbound_tkn, contract IERC20 inbound_tkn, uint256 wants, uint256 gives, uint256 pivotId, uint256 gasreq) public payable returns (uint256 offerId)
```

creates a new offer on Mangrove with an override for gas requirement

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| outbound_tkn | contract IERC20 | the outbound token of the offer list of the offer |
| inbound_tkn | contract IERC20 | the outbound token of the offer list of the offer |
| wants | uint256 | the amount of outbound tokens the offer maker requires for a complete fill |
| gives | uint256 | the amount of inbound tokens the offer maker gives for a complete fill |
| pivotId | uint256 | the pivot to use for inserting the offer in the list |
| gasreq | uint256 | the gas required by the offer logic |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| offerId | uint256 | the Mangrove offer id. |

### newOffer

```solidity
function newOffer(contract IERC20 outbound_tkn, contract IERC20 inbound_tkn, uint256 wants, uint256 gives, uint256 pivotId) public payable returns (uint256 offerId)
```

### updateOffer

```solidity
function updateOffer(contract IERC20 outbound_tkn, contract IERC20 inbound_tkn, uint256 wants, uint256 gives, uint256 pivotId, uint256 offerId, uint256 gasreq) public payable
```

updates an offer existing on Mangrove (not necessarily live) with an override for gas requirement

_the `gasprice` argument is always ignored in `Forwarder` logic, since it has to be derived from `msg.value` of the call (see `_newOffer`)._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| outbound_tkn | contract IERC20 | the outbound token of the offer list of the offer |
| inbound_tkn | contract IERC20 | the outbound token of the offer list of the offer |
| wants | uint256 | the new amount of outbound tokens the offer maker requires for a complete fill |
| gives | uint256 | the new amount of inbound tokens the offer maker gives for a complete fill |
| pivotId | uint256 | the pivot to use for re-inserting the offer in the list (use `offerId` if updated offer is live) |
| offerId | uint256 | the id of the offer in the offer list. |
| gasreq | uint256 | the gas required by the offer logic |

### updateOffer

```solidity
function updateOffer(contract IERC20 outbound_tkn, contract IERC20 inbound_tkn, uint256 wants, uint256 gives, uint256 pivotId, uint256 offerId) public payable
```

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
| deprovision | bool | if set to `true` if offer owner wishes to redeem the offer's provision. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| freeWei | uint256 | the amount of native tokens (in WEI) that have been retrieved by retracting the offer. |

### __posthookSuccess__

```solidity
function __posthookSuccess__(struct MgvLib.SingleOrder order, bytes32 maker_data) internal returns (bytes32 data)
```

