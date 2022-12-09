## IOrderLogic

### TakerOrder

```solidity
struct TakerOrder {
  contract IERC20 outbound_tkn;
  contract IERC20 inbound_tkn;
  bool fillOrKill;
  uint256 takerWants;
  uint256 takerGives;
  bool fillWants;
  bool restingOrder;
  uint256 pivotId;
  uint256 expiryDate;
}
```

### TakerOrderResult

```solidity
struct TakerOrderResult {
  uint256 takerGot;
  uint256 takerGave;
  uint256 bounty;
  uint256 fee;
  uint256 offerId;
}
```

### OrderSummary

```solidity
event OrderSummary(contract IMangrove mangrove, contract IERC20 outbound_tkn, contract IERC20 inbound_tkn, address taker, bool fillWants, uint256 takerGot, uint256 takerGave, uint256 penalty)
```

Information about the order.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| mangrove | contract IMangrove | The Mangrove contract on which the offer was posted |
| outbound_tkn | contract IERC20 | The outbound token of the order. |
| inbound_tkn | contract IERC20 | The inbound token of the order. |
| taker | address | The address of the taker |
| fillWants | bool | If true, the market order stopped when `takerWants` units of `outbound_tkn` had been obtained; otherwise, the market order stopped when `takerGives` units of `inbound_tkn` had been sold. |
| takerGot | uint256 | How much the taker got |
| takerGave | uint256 | How much the taker gave |
| penalty | uint256 | How much penalty was given |

### expiring

```solidity
function expiring(contract IERC20 outbound_tkn, contract IERC20 inbound_tkn, uint256 offerId) external returns (uint256)
```

Timestamp beyond which the given `offerId` should renege on trade.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| outbound_tkn | contract IERC20 | The outbound token of the order. |
| inbound_tkn | contract IERC20 | The inbound token of the order. |
| offerId | uint256 | The id of the offer to query for expiry for. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | res The timestamp beyond which `offerId` on the `(outbound_tkn, inbound_tkn)` offer list should renege on trade. 0 means no expiry. |

### setExpiry

```solidity
function setExpiry(contract IERC20 outbound_tkn, contract IERC20 inbound_tkn, uint256 offerId, uint256 date) external
```

Updates the expiry date for a specific offer.

_If new date is in the past of the current block's timestamp, offer will renege on trade._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| outbound_tkn | contract IERC20 | The outbound token of the order. |
| inbound_tkn | contract IERC20 | The inbound token of the order. |
| offerId | uint256 | The offer id whose expiry date is to be set. |
| date | uint256 | in seconds since unix epoch |

### take

```solidity
function take(struct IOrderLogic.TakerOrder tko) external payable returns (struct IOrderLogic.TakerOrderResult res)
```

Implements "Fill or kill" or "Good till cancelled" orders on a given offer list.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| tko | struct IOrderLogic.TakerOrder | the arguments in memory of the taker order |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| res | struct IOrderLogic.TakerOrderResult | the result of the taker order. If `offerId==0`, no resting order was posted on `msg.sender`'s behalf. |

