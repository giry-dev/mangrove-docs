## OfferForwarder

### constructor

```solidity
constructor(contract IMangrove mgv, address deployer) public
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

### __posthookSuccess__

```solidity
function __posthookSuccess__(struct MgvLib.SingleOrder order, bytes32 maker_data) internal returns (bytes32 data)
```

Post-hook that implements default behavior when Taker Order's execution succeeded.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| order | struct MgvLib.SingleOrder | is a recall of the taker order that is at the origin of the current trade. |
| maker_data | bytes32 | is the returned value of the `__lastLook__` hook, triggered during trade execution. The special value `"lastLook/retract"` should be treated as an instruction not to repost the offer on the book. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| data | bytes32 | can be: * `"posthook/filled"` when offer was completely filled * `"posthook/reposted"` when offer was partially filled and successfully reposted * Mangrove's revert reason (cast to a bytes32) when residual is below density or `this` balance on Mangrove is too low (and thus not reposted) |

