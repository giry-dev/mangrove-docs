## OfferType

```solidity
enum OfferType {
  Bid,
  Ask
}
```

## IHasOfferListOfOfferType

### offerListOfOfferType

```solidity
function offerListOfOfferType(enum OfferType ba) internal view virtual returns (struct OLKey olKey)
```

turns an offer type into an (outbound_tkn, inbound_tkn, tickSpacing) pair identifying an offer list.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ba | enum OfferType | whether one wishes to access the offer lists where asks or bids are posted. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| olKey | struct OLKey | the olKey defining the token pair |

### offerTypeOfOutbound

```solidity
function offerTypeOfOutbound(contract IERC20 outbound_tkn) internal view virtual returns (enum OfferType ba)
```

returns the offer type of the offer list whose outbound token is given in the argument.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| outbound_tkn | contract IERC20 | the outbound token |

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

_Implements the IHasOfferListOfOfferType interface contract._

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

### TICK_SPACING

```solidity
uint256 TICK_SPACING
```

tickSpacing of the market Kandel is making

### OfferListKey

```solidity
event OfferListKey(bytes32 olKeyHash)
```

The traded offer list
we only emit this, so that the events for a Kandel is self contained. If one uses the KandelSeeder to deploy, then this information is already available from NewKandel or NewAaveKandel events.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| olKeyHash | bytes32 | of the market Kandel is making |

### constructor

```solidity
constructor(struct OLKey olKeyBaseQuote) internal
```

Constructor

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| olKeyBaseQuote | struct OLKey | The OLKey for the outbound_tkn base and inbound_tkn quote offer list Kandel will act on, the flipped OLKey is used for the opposite offer list. |

### offerListOfOfferType

```solidity
function offerListOfOfferType(enum OfferType ba) internal view returns (struct OLKey olKey)
```

turns an offer type into an (outbound_tkn, inbound_tkn, tickSpacing) pair identifying an offer list.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ba | enum OfferType | whether one wishes to access the offer lists where asks or bids are posted. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| olKey | struct OLKey | the olKey defining the token pair |

### offerTypeOfOutbound

```solidity
function offerTypeOfOutbound(contract IERC20 outbound_tkn) internal view returns (enum OfferType)
```

returns the offer type of the offer list whose outbound token is given in the argument.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| outbound_tkn | contract IERC20 | the outbound token |

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

