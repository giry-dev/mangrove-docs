## OfferType

```solidity
enum OfferType {
  Bid,
  Ask
}
```

## IHasTokenPairOfOfferType

### tokenPairOfOfferType

```solidity
function tokenPairOfOfferType(enum OfferType ba) internal view virtual returns (contract IERC20, contract IERC20 pair)
```

turns an offer type into an (outbound, inbound) pair identifying an offer list.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ba | enum OfferType | whether one wishes to access the offer lists where asks or bids are posted. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | contract IERC20 | pair the token pair |
| pair | contract IERC20 |  |

### offerTypeOfOutbound

```solidity
function offerTypeOfOutbound(contract IERC20 outbound_tkn) internal view virtual returns (enum OfferType ba)
```

returns the offer type of the offer list whose outbound token is given in the argument.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| outbound_tkn | contract IERC20 | the outbound token of the offer list. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| ba | enum OfferType | the offer type |

### outboundOfOfferType

```solidity
function outboundOfOfferType(enum OfferType ba) internal view virtual returns (contract IERC20 token)
```

returns the outbound token for the offer type

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ba | enum OfferType | the offer type |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract IERC20 | the outbound token |

## TradesBaseQuotePair

_Implements the IHasTokenPairOfOfferType interface contract._

### BASE

```solidity
contract IERC20 BASE
```

base of the market Kandel is making

### QUOTE

```solidity
contract IERC20 QUOTE
```

quote of the market Kandel is making

### Pair

```solidity
event Pair(contract IERC20 base, contract IERC20 quote)
```

The traded pair

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| base | contract IERC20 | of the market Kandel is making |
| quote | contract IERC20 | of the market Kandel is making |

### constructor

```solidity
constructor(contract IERC20 base, contract IERC20 quote) internal
```

Constructor

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| base | contract IERC20 | Address of the base token of the market Kandel will act on |
| quote | contract IERC20 | Address of the quote token of the market Kandel will act on |

### tokenPairOfOfferType

```solidity
function tokenPairOfOfferType(enum OfferType ba) internal view returns (contract IERC20, contract IERC20)
```

turns an offer type into an (outbound, inbound) pair identifying an offer list.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ba | enum OfferType | whether one wishes to access the offer lists where asks or bids are posted. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | contract IERC20 | pair the token pair |
| [1] | contract IERC20 |  |

### offerTypeOfOutbound

```solidity
function offerTypeOfOutbound(contract IERC20 outbound_tkn) internal view returns (enum OfferType)
```

returns the offer type of the offer list whose outbound token is given in the argument.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| outbound_tkn | contract IERC20 | the outbound token of the offer list. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | enum OfferType |  |

### outboundOfOfferType

```solidity
function outboundOfOfferType(enum OfferType ba) internal view returns (contract IERC20 token)
```

returns the outbound token for the offer type

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ba | enum OfferType | the offer type |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract IERC20 | the outbound token |

### dual

```solidity
function dual(enum OfferType ba) internal pure returns (enum OfferType baDual)
```

returns the dual offer type

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ba | enum OfferType | whether the offer is an ask or a bid |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| baDual | enum OfferType | is the dual offer type (ask for bid and conversely) |

