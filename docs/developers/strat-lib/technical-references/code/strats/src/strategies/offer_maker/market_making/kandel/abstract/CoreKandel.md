## CoreKandel

`CoreKandel` is agnostic to the chosen price distribution.

### SetGasprice

```solidity
event SetGasprice(uint256 value)
```

the gasprice has been set.
By emitting this data, an indexer will be able to keep track of what gasprice is used.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| value | uint256 | the gasprice for offers. |

### SetGasreq

```solidity
event SetGasreq(uint256 value)
```

the gasreq has been set.
By emitting this data, an indexer will be able to keep track of what gasreq is used.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| value | uint256 | the gasreq (including router's gasreq) for offers |

### SetStepSize

```solidity
event SetStepSize(uint256 value)
```

the step size has been set.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| value | uint256 | the step size in amount of price points to jump for posting dual offer |

### Credit

```solidity
event Credit(contract IERC20 token, uint256 amount)
```

the Kandel instance is credited of `amount` by its owner.
By emitting this data, an indexer will be able to keep track of what credits are made.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract IERC20 | the asset. This is indexed so that RPC calls can filter on it. |
| amount | uint256 | the amount. |

### Debit

```solidity
event Debit(contract IERC20 token, uint256 amount)
```

the Kandel instance is debited of `amount` by its owner.
By emitting this data, an indexer will be able to keep track of what debits are made.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract IERC20 | the asset. This is indexed so that RPC calls can filter on it. |
| amount | uint256 | the amount. |

### Params

Core Kandel parameters

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |

```solidity
struct Params {
  uint32 gasprice;
  uint24 gasreq;
  uint32 stepSize;
  uint32 pricePoints;
}
```

### params

```solidity
struct CoreKandel.Params params
```

Storage of the parameters for the strat.

### setStepSize

```solidity
function setStepSize(uint256 stepSize) public
```

sets the step size

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| stepSize | uint256 | the step size. |

### setGasprice

```solidity
function setGasprice(uint256 gasprice) public
```

sets the gasprice for offers

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| gasprice | uint256 | the gasprice. |

### setGasreq

```solidity
function setGasreq(uint256 gasreq) public
```

sets the gasreq (including router's gasreq) for offers

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| gasreq | uint256 | the gasreq. |

### setParams

```solidity
function setParams(struct CoreKandel.Params newParams) internal
```

Updates the params to new values.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| newParams | struct CoreKandel.Params | the new params to set. |

### constructor

```solidity
constructor(contract IMangrove mgv, struct OLKey olKeyBaseQuote, address reserveId) internal
```

Constructor

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| mgv | contract IMangrove | The Mangrove deployment. |
| olKeyBaseQuote | struct OLKey | The OLKey for the outbound_tkn base and inbound_tkn quote offer list Kandel will act on, the flipped OLKey is used for the opposite offer list. |
| reserveId | address | identifier of this contract's reserve when using a router. |

### populate

```solidity
function populate(struct DirectWithBidsAndAsksDistribution.Distribution distribution, struct CoreKandel.Params parameters, uint256 baseAmount, uint256 quoteAmount) public payable
```

publishes bids/asks for the distribution in the `indices`. Care must be taken to publish offers in meaningful chunks. For Kandel an offer and its dual should be published in the same chunk (one being optionally initially dead).

_This function is used at initialization and can fund with provision for the offers.
Use `populateChunk` to split up initialization or re-initialization with same parameters, as this function will emit.
If this function is invoked with different pricePoints or stepSize, then first retract all offers.
msg.value must be enough to provision all posted offers (for chunked initialization only one call needs to send native tokens)._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| distribution | struct DirectWithBidsAndAsksDistribution.Distribution | the distribution of bids and asks to populate |
| parameters | struct CoreKandel.Params | the parameters for Kandel. Only changed parameters will cause updates. Set `gasreq` and `gasprice` to 0 to keep existing values. |
| baseAmount | uint256 | base amount to deposit |
| quoteAmount | uint256 | quote amount to deposit |

### populateChunk

```solidity
function populateChunk(struct DirectWithBidsAndAsksDistribution.Distribution distribution) external
```

Publishes bids/asks for the distribution in the `indices`. Care must be taken to publish offers in meaningful chunks. For Kandel an offer and its dual should be published in the same chunk (one being optionally initially dead).
This function is used externally after `populate` to reinitialize some indices or if multiple transactions are needed to split initialization due to gas cost.
This function is not payable, use `populate` to fund along with populate.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| distribution | struct DirectWithBidsAndAsksDistribution.Distribution | the distribution of bids and asks to populate |

### reserveBalance

```solidity
function reserveBalance(enum OfferType ba) public view virtual returns (uint256 balance)
```

the total balance available for the strat of the offered token for the given offer type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ba | enum OfferType | the offer type. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| balance | uint256 | the balance of the token. |

### logUpdateOfferStatus

```solidity
function logUpdateOfferStatus(uint256 offerId, struct IOfferLogic.OfferArgs args, bytes32 updateOfferStatus) internal
```

takes care of status for updating dual and logging of potential issues.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| offerId | uint256 | the Mangrove offer id. |
| args | struct IOfferLogic.OfferArgs | the arguments of the offer. |
| updateOfferStatus | bytes32 | the status returned from the `_updateOffer` function. |

### transportSuccessfulOrder

```solidity
function transportSuccessfulOrder(struct MgvLib.SingleOrder order) internal
```

update or create dual offer according to transport logic

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| order | struct MgvLib.SingleOrder | is a recall of the taker order that is at the origin of the current trade. |

### transportLogic

```solidity
function transportLogic(enum OfferType ba, struct MgvLib.SingleOrder order) internal virtual returns (uint256 dualOfferId, struct IOfferLogic.OfferArgs args)
```

transport logic followed by Kandel

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ba | enum OfferType | whether the offer that was executed is a bid or an ask |
| order | struct MgvLib.SingleOrder | a recap of the taker order (order.offer is the executed offer) |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| dualOfferId | uint256 | the offer id of the dual offer |
| args | struct IOfferLogic.OfferArgs | the argument for updating an offer |

### pending

```solidity
function pending(enum OfferType ba) external view returns (int256)
```

gets pending liquidity for base (ask) or quote (bid). Will be negative if funds are not enough to cover all offer's promises.

_Gas costly function, better suited for off chain calls._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ba | enum OfferType | offer type. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | int256 | the pending amount |

### depositFunds

```solidity
function depositFunds(uint256 baseAmount, uint256 quoteAmount) public virtual
```

Deposits funds to the contract's reserve

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| baseAmount | uint256 | the amount of base tokens to deposit. |
| quoteAmount | uint256 | the amount of quote tokens to deposit. |

### withdrawFunds

```solidity
function withdrawFunds(uint256 baseAmount, uint256 quoteAmount, address recipient) public virtual
```

withdraws funds from the contract's reserve

_it is up to the caller to make sure there are still enough funds for live offers._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| baseAmount | uint256 | the amount of base tokens to withdraw. Use type(uint).max to denote the entire reserve balance. |
| quoteAmount | uint256 | the amount of quote tokens to withdraw. Use type(uint).max to denote the entire reserve balance. |
| recipient | address | the address to which the withdrawn funds should be sent to. |

### withdrawFundsForToken

```solidity
function withdrawFundsForToken(contract IERC20 token, uint256 amount, address recipient) internal virtual
```

withdraws funds from the contract's reserve for the given token

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract IERC20 | the token to withdraw. |
| amount | uint256 | the amount of tokens to withdraw. Use type(uint).max to denote the entire reserve balance. |
| recipient | address | the address to which the withdrawn funds should be sent to. |

### retractAndWithdraw

```solidity
function retractAndWithdraw(uint256 from, uint256 to, uint256 baseAmount, uint256 quoteAmount, uint256 freeWei, address payable recipient) external
```

Retracts offers, withdraws funds, and withdraws free wei from Mangrove.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| from | uint256 | retract offers starting from this index. |
| to | uint256 | retract offers until this index. |
| baseAmount | uint256 | the amount of base tokens to withdraw. Use type(uint).max to denote the entire reserve balance. |
| quoteAmount | uint256 | the amount of quote tokens to withdraw. Use type(uint).max to denote the entire reserve balance. |
| freeWei | uint256 | the amount of wei to withdraw from Mangrove. Use type(uint).max to withdraw entire available balance. |
| recipient | address payable | the recipient of the funds. |

