## Mango

In case of a partial fill of an offer at position i, the offer residual is reposted (see `Persistent` strat class)

### Initialized

```solidity
event Initialized(uint256 from, uint256 to)
```

### IMPLEMENTATION

```solidity
address IMPLEMENTATION
```

### NSLOTS

```solidity
uint256 NSLOTS
```

### BASE

```solidity
contract IERC20 BASE
```

### QUOTE

```solidity
contract IERC20 QUOTE
```

### constructor

```solidity
constructor(contract IMangrove mgv, contract IERC20 base, contract IERC20 quote, uint256 base_0, uint256 quote_0, uint256 nslots, uint256 price_incr, address deployer) public
```

### initialize

```solidity
function initialize(bool reset, uint256 lastBidPosition, uint256 from, uint256 to, uint256[][2] pivotIds, uint256[] tokenAmounts) public
```

### resetPending

```solidity
function resetPending() external
```

### delta

```solidity
function delta() external view returns (uint256)
```

Setters and getters

### setDelta

```solidity
function setDelta(uint256 delta_) public
```

### shift

```solidity
function shift() external view returns (int256)
```

### pending

```solidity
function pending() external view returns (uint256[2])
```

### retractOffers

```solidity
function retractOffers(uint256 ba, uint256 from, uint256 to) external returns (uint256 collected)
```

### setShift

```solidity
function setShift(int256 s, bool withBase, uint256[] amounts) public
```

New positions 0<= i < s are initialized with amount[i] in base tokens if `withBase`. In quote tokens otherwise

### setMinOfferType

```solidity
function setMinOfferType(uint256 m) external
```

### _staticdelegatecall

```solidity
function _staticdelegatecall(bytes data) external
```

### getOffers

```solidity
function getOffers(bool liveOnly) external view returns (uint256[][2] offers)
```

### pause

```solidity
function pause() public
```

### restart

```solidity
function restart() external
```

### isPaused

```solidity
function isPaused() external view returns (bool)
```

### __lastLook__

```solidity
function __lastLook__(struct MgvLib.SingleOrder order) internal virtual returns (bytes32)
```

Hook that implements a last look check during Taker Order's execution.

___lastLook__ should revert if trade is to be reneged on. If not, returned `bytes32` are passed to `makerPosthook` in the `makerData` field._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| order | struct MgvLib.SingleOrder | is a recall of the taker order that is at the origin of the current trade. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes32 |  |

### __residualGives__

```solidity
function __residualGives__(struct MgvLib.SingleOrder order) internal virtual returns (uint256)
```

Given the current taker order that (partially) consumes an offer, this hook is used to declare how much `order.outbound_tkn` the offer gives after it is reposted.

_default is to require the original amount of tokens minus those that have been sent to the taker during trade execution._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| order | struct MgvLib.SingleOrder | is a recall of the taker order that is being treated. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 |  |

### __residualWants__

```solidity
function __residualWants__(struct MgvLib.SingleOrder order) internal virtual returns (uint256)
```

Given the current taker order that (partially) consumes an offer, this hook is used to declare how much `order.inbound_tkn` the offer wants after it is reposted.

_default is to require the original amount of tokens minus those that have been given by the taker during trade execution._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| order | struct MgvLib.SingleOrder | is a recall of the taker order that is being treated. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 |  |

### __posthookSuccess__

```solidity
function __posthookSuccess__(struct MgvLib.SingleOrder order, bytes32 maker_data) internal virtual returns (bytes32)
```

