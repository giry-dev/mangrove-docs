## OfferMaker

### constructor

```solidity
constructor(contract IMangrove mgv, contract AbstractRouter router_, address deployer) public
```

### newOffer

```solidity
function newOffer(contract IERC20 outbound_tkn, contract IERC20 inbound_tkn, uint256 wants, uint256 gives, uint256 pivotId) external payable returns (uint256 offerId)
```

creates a new offer on Mangrove.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| outbound_tkn | contract IERC20 | the outbound token of the offer list of the offer |
| inbound_tkn | contract IERC20 | the outbound token of the offer list of the offer |
| wants | uint256 | the amount of outbound tokens the offer maker requires for a complete fill |
| gives | uint256 | the amount of inbound tokens the offer maker gives for a complete fill |
| pivotId | uint256 | the pivot to use for inserting the offer in the list |

### updateOffer

```solidity
function updateOffer(contract IERC20 outbound_tkn, contract IERC20 inbound_tkn, uint256 wants, uint256 gives, uint256 pivotId, uint256 offerId) external payable
```

updates an offer existing on Mangrove (not necessarily live).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| outbound_tkn | contract IERC20 | the outbound token of the offer list of the offer |
| inbound_tkn | contract IERC20 | the outbound token of the offer list of the offer |
| wants | uint256 | the new amount of outbound tokens the offer maker requires for a complete fill |
| gives | uint256 | the new amount of inbound tokens the offer maker gives for a complete fill |
| pivotId | uint256 | the pivot to use for re-inserting the offer in the list (use `offerId` if updated offer is live) |
| offerId | uint256 | the id of the offer in the offer list. |

