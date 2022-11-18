## Direct

`Direct` strats is an extension of MangroveOffer that allows contract's admin to manage offers on Mangrove.

### constructor

```solidity
constructor(contract IMangrove mgv, contract AbstractRouter router_, uint256 gasreq) internal
```

### __checkReserveApproval__

```solidity
function __checkReserveApproval__(address reserve_, address maker) internal view returns (bool)
```

verifies that maker is allowed to use a reserve for pooling funds

_function throws if `reserve_` has not approved `maker`_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| reserve_ | address | the reserve on which one is pooling funds |
| maker | address | the pooler of the reserve |

### __checkList__

```solidity
function __checkList__(contract IERC20 token) internal view virtual
```

_override conservatively to define strat-specific additional check list_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract IERC20 | the ERC20 one wishes this contract to trade on. |

### withdrawToken

```solidity
function withdrawToken(contract IERC20 token, address receiver, uint256 amount) external returns (bool success)
```

Withdraws tokens from `msg.sender`'s reserve

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract IERC20 | the type of asset one is willing to retrieve |
| receiver | address | the address of the receiver of the tokens (must not be `address(0)`) |
| amount | uint256 | the quantity of tokens to withdraw from reserve (in WEI units). |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| success | bool | whether funds were successfully transferred to `receiver` |

### pull

```solidity
function pull(contract IERC20 outbound_tkn, uint256 amount, bool strict) internal returns (uint256)
```

### push

```solidity
function push(contract IERC20 token, uint256 amount) internal
```

### flush

```solidity
function flush(contract IERC20[] tokens) internal
```

### _newOffer

```solidity
function _newOffer(struct IOfferLogic.OfferArgs args) internal returns (uint256)
```

### updateOffer

```solidity
function updateOffer(contract IERC20 outbound_tkn, contract IERC20 inbound_tkn, uint256 wants, uint256 gives, uint256 gasreq, uint256 gasprice, uint256 pivotId, uint256 offerId) public payable
```

updates an offer existing on Mangrove (not necessarily live).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| outbound_tkn | contract IERC20 | the outbound token of the offer list of the offer |
| inbound_tkn | contract IERC20 | the outbound token of the offer list of the offer |
| wants | uint256 | the new amount of outbound tokens the offer maker requires for a complete fill |
| gives | uint256 | the new amount of inbound tokens the offer maker gives for a complete fill |
| gasreq | uint256 | the new amount of gas units that are required to execute the trade (use type(uint).max for using `this.offerGasReq()`) |
| gasprice | uint256 | the new gasprice used to compute offer's provision (use 0 to use Mangrove's gasprice) |
| pivotId | uint256 | the pivot to use for re-inserting the offer in the list (use `offerId` if updated offer is live) |
| offerId | uint256 | the id of the offer in the offer list. |

### _updateOffer

```solidity
function _updateOffer(struct IOfferLogic.OfferArgs args, uint256 offerId) internal returns (uint256)
```

### retractOffer

```solidity
function retractOffer(contract IERC20 outbound_tkn, contract IERC20 inbound_tkn, uint256 offerId, bool deprovision) public returns (uint256 free_wei)
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
| free_wei | uint256 |  |

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

### __put__

```solidity
function __put__(uint256, struct MgvLib.SingleOrder) internal virtual returns (uint256 missing)
```

### __get__

```solidity
function __get__(uint256 amount, struct MgvLib.SingleOrder order) internal virtual returns (uint256 missing)
```

Hook that implements where the outbound token, which are promised to the taker, should be fetched from, during Taker Order's execution.

_if the last nested call to `__get__` returns a non zero value, trade execution will revert_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| amount | uint256 | of `outbound` tokens that still needs to be brought to the balance of `this` contract when entering this function |
| order | struct MgvLib.SingleOrder | is a recall of the taker order that is at the origin of the current trade. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| missing | uint256 |  |

### __posthookSuccess__

```solidity
function __posthookSuccess__(struct MgvLib.SingleOrder order, bytes32 makerData) internal virtual returns (bytes32)
```

