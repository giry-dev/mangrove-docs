# Solidity API

## MangroveOrder

A GTC order is a buy (sell) limit order complemented by a bid (ask) limit order, called a resting order, that occurs when the buy (sell) order was partially filled.
If the GTC is for some amount $a_goal$ at a price $p$, and the corresponding limit order was partially filled for $a_now < a_goal$,
the resting order should be posted for an amount $a_later = a_goal - a_now$ at price $p$.
A FOK order is simply a buy or sell limit order that is either completely filled or cancelled. No resting order is posted.

_requiring no partial fill *and* a resting order is interpreted here as an instruction to revert if the resting order fails to be posted (e.g., if below density)._

### expiring

```solidity
mapping(bytes32 => mapping(uint256 => uint256)) expiring
```

`expiring[olKey.hash()][offerId]` gives timestamp beyond which `offerId` on the `olKey.(outbound_tkn, inbound_tkn, tickSpacing)` offer list should renege on trade.
if the order tx is included after the expiry date, it reverts.

_0 means no expiry._

### constructor

```solidity
constructor(contract IMangrove mgv, address deployer) public
```

MangroveOrder is a Forwarder logic with a simple router.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| mgv | contract IMangrove | The mangrove contract on which this logic will run taker and maker orders. |
| deployer | address | The address of the admin of `this` at the end of deployment |

### setExpiry

```solidity
function setExpiry(bytes32 olKeyHash, uint256 offerId, uint256 date) public
```

Updates the expiry date for a specific offer.

_We also allow Mangrove to call this so that it can part of an offer logic._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| olKeyHash | bytes32 | the hash of the offer list key. |
| offerId | uint256 | The offer id whose expiry date is to be set. |
| date | uint256 | in seconds since unix epoch |

### updateOffer

```solidity
function updateOffer(struct OLKey olKey, Tick tick, uint256 gives, uint256 gasreq, uint256 offerId) external payable
```

updates an offer on Mangrove

_this can be used to update price of the resting order_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| olKey | struct OLKey | the offer list key. |
| tick | Tick | the tick |
| gives | uint256 | new amount of `olKey.outbound_tkn` offer owner gives |
| gasreq | uint256 | new gas req for the restingOrder |
| offerId | uint256 | the id of the offer to be updated |

### retractOffer

```solidity
function retractOffer(struct OLKey olKey, uint256 offerId, bool deprovision) public returns (uint256 freeWei)
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

### __lastLook__

```solidity
function __lastLook__(struct MgvLib.SingleOrder order) internal virtual returns (bytes32)
```

Checks the current timestamps and reneges on trade (by reverting) if the offer has expired.

___lastLook__ should revert if trade is to be reneged on. If not, returned `bytes32` are passed to `makerPosthook` in the `makerData` field._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| order | struct MgvLib.SingleOrder | is a recall of the taker order that is at the origin of the current trade. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes32 |  |

### checkCompleteness

```solidity
function checkCompleteness(struct IOrderLogic.TakerOrder tko, struct IOrderLogic.TakerOrderResult res) internal pure returns (bool)
```

compares a taker order with a market order result and checks whether the order was entirely filled

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| tko | struct IOrderLogic.TakerOrder | the taker order |
| res | struct IOrderLogic.TakerOrderResult | the market order result |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | true if the order was entirely filled, false otherwise. |

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

### logOrderData

```solidity
function logOrderData(struct IOrderLogic.TakerOrder tko) internal
```

logs `MangroveOrderStart`

_this function avoids loading too many variables on the stack_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| tko | struct IOrderLogic.TakerOrder | the arguments in memory of the taker order |

### postRestingOrder

```solidity
function postRestingOrder(struct IOrderLogic.TakerOrder tko, struct OLKey olKey, struct IOrderLogic.TakerOrderResult res, uint256 fund) internal returns (uint256 refund)
```

posts a maker order on the (`olKey`) offer list.

_if relative limit price of taker order is `ratio` in the (outbound_tkn, inbound_tkn) offer list (represented by `tick=log_{1.0001}(ratio)` )
then entailed relative price for resting order must be `1/ratio` (relative price on the (inbound_tkn, outbound_tkn) offer list)
so with ticks that is `-log(ratio)`, or -tick.
the price of the resting order should be the same as for the max price for the market order._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| tko | struct IOrderLogic.TakerOrder | the arguments in memory of the taker order |
| olKey | struct OLKey | the offer list key. |
| res | struct IOrderLogic.TakerOrderResult | the result of the taker order. |
| fund | uint256 | amount of WEIs used to cover for the offer bounty (covered gasprice is derived from `fund`). |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| refund | uint256 | the amount to refund to the taker of the fund. |

