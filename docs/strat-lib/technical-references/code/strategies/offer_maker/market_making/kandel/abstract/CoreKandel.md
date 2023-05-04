## CoreKandel

`CoreKandel` is agnostic to the chosen price distribution.

### constructor

```solidity
constructor(contract IMangrove mgv, contract IERC20 base, contract IERC20 quote, uint256 gasreq, address reserveId) internal
```

Constructor

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| mgv | contract IMangrove | The Mangrove deployment. |
| base | contract IERC20 | Address of the base token of the market Kandel will act on |
| quote | contract IERC20 | Address of the quote token of the market Kandel will act on |
| gasreq | uint256 | the gasreq to use for offers |
| reserveId | address | identifier of this contract's reserve when using a router. |

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

### logPopulateStatus

```solidity
function logPopulateStatus(uint256 offerId, struct IOfferLogic.OfferArgs args, bytes32 populateStatus) internal
```

takes care of status for populating dual and logging of potential issues.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| offerId | uint256 | the Mangrove offer id (or 0 if newOffer failed). |
| args | struct IOfferLogic.OfferArgs | the arguments of the offer. |
| populateStatus | bytes32 | the status returned from the populateIndex function. |

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
function transportLogic(enum OfferType ba, struct MgvLib.SingleOrder order) internal virtual returns (enum OfferType baDual, uint256 offerId, uint256 index, struct IOfferLogic.OfferArgs args)
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
| baDual | enum OfferType | the type of dual offer that will re-invest inbound liquidity |
| offerId | uint256 | the offer id of the dual offer |
| index | uint256 | the index of the dual offer |
| args | struct IOfferLogic.OfferArgs | the argument for `populateIndex` specifying gives and wants |

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

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| baseAmount | uint256 | the amount of base tokens to withdraw. Use type(uint).max to denote the entire reserve balance. |
| quoteAmount | uint256 | the amount of quote tokens to withdraw. Use type(uint).max to denote the entire reserve balance. |
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

