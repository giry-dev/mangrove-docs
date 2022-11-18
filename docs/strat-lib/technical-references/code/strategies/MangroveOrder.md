## MangroveOrder

A GTC order is a market buy (sell) order complemented by a bid (ask) order, called a resting order, that occurs when the buy (sell) order was partially filled.
If the GTC is for some amount $a_goal$ at a price $(1+s)*p$ with slippage $s$, and the corresponding market order was partially filled for $a_now < a_goal$,
the resting order should be posted for an amount $a_later = a_goal - a_now$ at price $p$ (slippage is discarded).
A FOK order is simply a buy or sell order that is either completely filled or cancelled. No resting order is posted.

_requiring no partial fill *and* a resting order is interpreted here as an instruction to revert if the resting order fails to be posted (e.g., if below density)._

### expiring

```solidity
mapping(contract IERC20 => mapping(contract IERC20 => mapping(uint256 => uint256))) expiring
```

`expiring[outbound_tkn][inbound_tkn][offerId]` gives timestamp beyond which `offerId` on the `(outbound_tkn, inbound_tkn)` offer list should renege on trade.
if the order tx is included after the expriry date, it reverts.

_0 means no expiry._

### additionalGasreq

```solidity
uint256 additionalGasreq
```

if evm gas cost is updated, one may need to increase gas requirements for new offers to avoid failing.
Setting `additionalGasreq` is an alternative to redeployment.

### constructor

```solidity
constructor(contract IMangrove mgv, address deployer, uint256 gasreq) public
```

MangroveOrder is a Forwarder logic with a simple router.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| mgv | contract IMangrove | The mangrove contract on which this logic will run taker and maker orders. |
| deployer | address | The address of the admin of `this` at the end of deployment |
| gasreq | uint256 | The gas required for `this` to execute `makerExecute` and `makerPosthoook` when called by mangrove for a resting order. |

### setExpiry

```solidity
function setExpiry(contract IERC20 outbound_tkn, contract IERC20 inbound_tkn, uint256 offerId, uint256 date) public
```

Updates the expiry date for a specific offer.

_We also allow Mangrove to call this so that it can part of an offer logic._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| outbound_tkn | contract IERC20 | The outbound token of the order. |
| inbound_tkn | contract IERC20 | The inbound token of the order. |
| offerId | uint256 | The offer id whose expiry date is to be set. |
| date | uint256 | in seconds since unix epoch |

### setAdditionalGasreq

```solidity
function setAdditionalGasreq(uint256 additionalGasreq_) external
```

Increase gas requirement for all new offers.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| additionalGasreq_ | uint256 | additional gas requirement |

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

### postRestingOrder

```solidity
function postRestingOrder(struct IOrderLogic.TakerOrder tko, contract IERC20 outbound_tkn, contract IERC20 inbound_tkn, struct IOrderLogic.TakerOrderResult res, uint256 fund) internal returns (uint256 refund)
```

posts a maker order on the (`outbound_tkn`, `inbound_tkn`) offer list.

_entailed price of the (instant) market order includes taker's slippage tolerance. It is given by:
* `tko.takerGives/tko.takerWants` for buy orders (i.e `fillWants==true`)
* `tko.takerWants/tko.takerGives` for sell orders (i.e `fillWants==false`)
Price w/o slippage for potential resting order is thus:
* `(tko.takerGives - tko.slippageAmount)/tko.takerWants` for the resting bid
* `(tko.takerWants + tko.slippageAmount)/tko.takerGives` for the resting ask._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| tko | struct IOrderLogic.TakerOrder |  |
| outbound_tkn | contract IERC20 |  |
| inbound_tkn | contract IERC20 |  |
| res | struct IOrderLogic.TakerOrderResult |  |
| fund | uint256 | amount of WEIs used to cover for the offer bounty (covered gasprice is derived from `fund`). |

### __logOwnershipRelation__

```solidity
function __logOwnershipRelation__(address owner, contract IERC20 outbound_tkn, contract IERC20 inbound_tkn, uint256 offerId) internal virtual
```

This is invoked for each new offer created for resting orders, e.g., to maintain an inverse mapping from owner to offers.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| owner | address | the owner of the new offer |
| outbound_tkn | contract IERC20 | the outbound token used to identify the order book |
| inbound_tkn | contract IERC20 | the inbound token used to identify the order book |
| offerId | uint256 | the id of the new offer |

