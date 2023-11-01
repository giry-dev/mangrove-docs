## IOrderLogic

### TakerOrder

Information for creating a market order with a GTC or FOK semantics.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |

```solidity
struct TakerOrder {
  struct OLKey olKey;
  bool fillOrKill;
  Tick tick;
  uint256 fillVolume;
  bool fillWants;
  bool restingOrder;
  uint256 expiryDate;
  uint256 offerId;
  uint256 restingOrderGasreq;
}
```

### TakerOrderResult

Result of an order from the takers side.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |

```solidity
struct TakerOrderResult {
  uint256 takerGot;
  uint256 takerGave;
  uint256 bounty;
  uint256 fee;
  uint256 offerId;
  bytes32 offerWriteData;
}
```

### MangroveOrderStart

```solidity
event MangroveOrderStart(bytes32 olKeyHash, address taker, bool fillOrKill, Tick tick, uint256 fillVolume, bool fillWants, bool restingOrder, uint256 offerId)
```

Information about the order.
By emitting this data, an indexer will be able to tell that we are in the context of an mangroveOrder and keep track of what parameters was use to start the order.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| olKeyHash | bytes32 | the hash of the offer list key. This could be found by the OrderStart event, but is needed for RPC call. This is indexed so that RPC calls can filter on it. |
| taker | address | The address of the taker. This could be found by the OrderStart event, but is needed for RPC call. This is indexed so that RPC calls can filter on it. |
| fillOrKill | bool | The fillOrKill that take was called with |
| tick | Tick | The tick of the order. This is not needed for an indexer, as it can get it from the OrderStart event. It is only emitted for RPC calls. |
| fillVolume | uint256 | the volume to fill. This is not needed for an indexer, as it can get it from the OrderStart event. It is only emitted for RPC calls. |
| fillWants | bool | if true (buying), the market order stops when `fillVolume` units of `olKey.outbound_tkn` have been obtained (fee included); otherwise (selling), the market order stops when `fillVolume` units of `olKey.inbound_tkn` have been sold. |
| restingOrder | bool | The restingOrder boolean take was called with. |
| offerId | uint256 | The optional offerId take was called with, 0 if not passed. This is not needed for an indexer. It is only emitted for RPC calls. |

### MangroveOrderComplete

```solidity
event MangroveOrderComplete()
```

Indicates that the MangroveOrder has been completed.
We only emit this, so that an indexer can know that the order is completed and can thereby keep a correct context

### SetExpiry

```solidity
event SetExpiry(bytes32 olKeyHash, uint256 offerId, uint256 date)
```

The expiry of the offer has been set
By emitting this data, an indexer will be able to keep track of the expiry date of an offer.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| olKeyHash | bytes32 | the hash of the offer list key. It is indexed so RPC call can filter on it. |
| offerId | uint256 | the Mangrove offer id. |
| date | uint256 | in seconds since unix epoch |

### expiring

```solidity
function expiring(bytes32 olKeyHash, uint256 offerId) external returns (uint256)
```

Timestamp beyond which the given `offerId` should renege on trade.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| olKeyHash | bytes32 | the hash of the offer list key. |
| offerId | uint256 | The id of the offer to query for expiry for. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | res The timestamp beyond which `offerId` on the `olKey` offer list should renege on trade. 0 means no expiry. |

### setExpiry

```solidity
function setExpiry(bytes32 olKeyHash, uint256 offerId, uint256 date) external
```

Updates the expiry date for a specific offer.

_If new date is in the past of the current block's timestamp, offer will renege on trade._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| olKeyHash | bytes32 | the hash of the offer list key. |
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

