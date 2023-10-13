## AaveKandel

### IS_FIRST_PULLER

```solidity
bytes32 IS_FIRST_PULLER
```

Indication that this is first puller (returned from __lastLook__) so posthook should deposit liquidity on AAVE

### constructor

```solidity
constructor(contract IMangrove mgv, contract IERC20 base, contract IERC20 quote, uint256 gasreq, uint256 gasprice, address reserveId) public
```

Constructor

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| mgv | contract IMangrove | The Mangrove deployment. |
| base | contract IERC20 | Address of the base token of the market Kandel will act on |
| quote | contract IERC20 | Address of the quote token of the market Kandel will act on |
| gasreq | uint256 | the gasreq to use for offers |
| gasprice | uint256 | the gasprice to use for offers |
| reserveId | address | identifier of this contract's reserve when using a router. |

### pooledRouter

```solidity
function pooledRouter() private view returns (contract AavePooledRouter)
```

returns the router as an Aave router

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | contract AavePooledRouter | The aave router. |

### initialize

```solidity
function initialize(contract AavePooledRouter router_) external
```

Sets the AaveRouter as router and activates router for base and quote

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| router_ | contract AavePooledRouter | the Aave router to use. |

### depositFunds

```solidity
function depositFunds(uint256 baseAmount, uint256 quoteAmount) public
```

### withdrawFunds

```solidity
function withdrawFunds(uint256 baseAmount, uint256 quoteAmount, address recipient) public
```

### reserveBalance

```solidity
function reserveBalance(enum OfferType ba) public view returns (uint256 balance)
```

returns the amount of the router's balance that belong to this contract for the token offered for the offer type.

### __lastLook__

```solidity
function __lastLook__(struct MgvLib.SingleOrder order) internal returns (bytes32)
```

Verifies, prior to pulling funds from the router, whether pull will be fetching funds on AAVE

___lastLook__ should revert if trade is to be reneged on. If not, returned `bytes32` are passed to `makerPosthook` in the `makerData` field._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| order | struct MgvLib.SingleOrder | is a recall of the taker order that is at the origin of the current trade. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes32 |  |

### __posthookSuccess__

```solidity
function __posthookSuccess__(struct MgvLib.SingleOrder order, bytes32 makerData) internal returns (bytes32 repostStatus)
```

overrides and replaces Direct's posthook in order to push and supply on AAVE with a single call when offer logic is the first to pull funds from AAVE

