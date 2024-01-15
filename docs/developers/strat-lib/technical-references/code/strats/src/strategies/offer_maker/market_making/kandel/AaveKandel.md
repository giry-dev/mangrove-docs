## AaveKandel

### IS_FIRST_PULLER

```solidity
bytes32 IS_FIRST_PULLER
```

Indication that this is first puller (returned from __lastLook__) so posthook should deposit liquidity on AAVE

### constructor

```solidity
constructor(contract IMangrove mgv, struct OLKey olKeyBaseQuote, address reserveId) public
```

Constructor

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| mgv | contract IMangrove | The Mangrove deployment. |
| olKeyBaseQuote | struct OLKey | The OLKey for the outbound_tkn base and inbound_tkn quote offer list Kandel will act on, the flipped OLKey is used for the opposite offer list. |
| reserveId | address | identifier of this contract's reserve when using a router. |

### isOverlying

```solidity
function isOverlying(address token) internal view returns (bool)
```

Verifies that token is not an official AAVE overlying.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | address | the token to verify. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | true if overlying; otherwise, false. |

### initialize

```solidity
function initialize(contract AavePooledRouter router_, uint256 gasreq) external
```

Sets the AaveRouter as router and activates router for base and quote

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| router_ | contract AavePooledRouter | the Aave router to use. |
| gasreq | uint256 | the gas required to execute an offer of this Kandel strat |

### setRouter

```solidity
function setRouter(contract AbstractRouter router) public virtual
```

### depositFunds

```solidity
function depositFunds(uint256 baseAmount, uint256 quoteAmount) public
```

deposits funds to be available for being offered. Will increase `pending`.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| baseAmount | uint256 | the amount of base tokens to deposit. |
| quoteAmount | uint256 | the amount of quote tokens to deposit. |

### withdrawFundsForToken

```solidity
function withdrawFundsForToken(contract IERC20 token, uint256 amount, address recipient) internal
```

tries to withdraw funds on this contract's balance and then reaches out to the router available funds for the remainder

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract IERC20 | the token to withdraw. |
| amount | uint256 | the amount of tokens to withdraw. Use type(uint).max to denote the entire reserve balance. |
| recipient | address | the address to which the withdrawn funds should be sent to. |

### reserveBalance

```solidity
function reserveBalance(enum OfferType ba) public view returns (uint256 balance)
```

returns the amount of the router's that can be used by this contract, as well as local balance for the token offered for the offer type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ba | enum OfferType | the offer type. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| balance | uint256 | the balance of the token. |

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

