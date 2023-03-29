## GeometricKandel

### PRECISION

```solidity
uint256 PRECISION
```

`compoundRateBase`, and `compoundRateQuote` have PRECISION decimals, and ditto for GeometricKandel's `ratio`.
setting PRECISION higher than 5 will produce overflow in limit cases for GeometricKandel.

### SetGeometricParams

```solidity
event SetGeometricParams(uint256 spread, uint256 ratio)
```

the parameters for Geometric Kandel have been set.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| spread | uint256 | in amount of price slots to jump for posting dual offer |
| ratio | uint256 | of price progression |

### Params

```solidity
struct Params {
  uint16 gasprice;
  uint24 gasreq;
  uint24 ratio;
  uint24 compoundRateBase;
  uint24 compoundRateQuote;
  uint8 spread;
  uint8 pricePoints;
}
```

### params

```solidity
struct GeometricKandel.Params params
```

Storage of the parameters for the strat.

### constructor

```solidity
constructor(contract IMangrove mgv, contract IERC20 base, contract IERC20 quote, uint256 gasreq, uint256 gasprice, address reserveId) internal
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
function setParams(struct GeometricKandel.Params newParams) internal
```

Updates the params to new values.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| newParams | struct GeometricKandel.Params | the new params to set. |

### setCompoundRates

```solidity
function setCompoundRates(uint256 compoundRateBase, uint256 compoundRateQuote) public
```

set the compound rates. It will take effect for future compounding.

_For low compound rates Kandel can end up with everything as pending and nothing offered.
To avoid this, then for equal compound rates `C` then $C >= 1/(sqrt(ratio^spread)+1)$.
With one rate being 0 and the other 1 the amount earned from the spread will accumulate as pending
for the token at 0 compounding and the offered volume will stay roughly static (modulo rounding)._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| compoundRateBase | uint256 | the compound rate for base. |
| compoundRateQuote | uint256 | the compound rate for quote. |

### compoundRateForDual

```solidity
function compoundRateForDual(enum OfferType baDual, struct GeometricKandel.Params memoryParams) private pure returns (uint256 compoundRate)
```

Gets the compound rate for the given offer type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| baDual | enum OfferType | the dual offer type. |
| memoryParams | struct GeometricKandel.Params | the Kandel params. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| compoundRate | uint256 | to use for the gives of the offer type. Asks give base so this would be the `compoundRateBase`, and vice versa. |

### populate

```solidity
function populate(struct DirectWithBidsAndAsksDistribution.Distribution distribution, uint256[] pivotIds, uint256 firstAskIndex, struct GeometricKandel.Params parameters, uint256 baseAmount, uint256 quoteAmount) external payable
```

publishes bids/asks for the distribution in the `indices`. Caller should follow the desired distribution in `baseDist` and `quoteDist`.

_This function is used at initialization and can fund with provision for the offers.
Use `populateChunk` to split up initialization or re-initialization with same parameters, as this function will emit.
If this function is invoked with different ratio, pricePoints, spread, then first retract all offers.
msg.value must be enough to provision all posted offers (for chunked initialization only one call needs to send native tokens)._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| distribution | struct DirectWithBidsAndAsksDistribution.Distribution | the distribution of base and quote for Kandel indices |
| pivotIds | uint256[] | the pivot to be used for the offer |
| firstAskIndex | uint256 | the (inclusive) index after which offer should be an ask. |
| parameters | struct GeometricKandel.Params | the parameters for Kandel. Only changed parameters will cause updates. Set `gasreq` and `gasprice` to 0 to keep existing values. |
| baseAmount | uint256 | base amount to deposit |
| quoteAmount | uint256 | quote amount to deposit |

### populateChunkInternal

```solidity
function populateChunkInternal(struct DirectWithBidsAndAsksDistribution.Distribution distribution, uint256[] pivotIds, uint256 firstAskIndex) internal
```

Publishes bids/asks for the distribution in the `indices`. Caller should follow the desired distribution in `baseDist` and `quoteDist`.

_internal version does not check onlyAdmin_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| distribution | struct DirectWithBidsAndAsksDistribution.Distribution | the distribution of base and quote for Kandel indices |
| pivotIds | uint256[] | the pivot to be used for the offer |
| firstAskIndex | uint256 | the (inclusive) index after which offer should be an ask. |

### populateChunk

```solidity
function populateChunk(struct DirectWithBidsAndAsksDistribution.Distribution distribution, uint256[] pivotIds, uint256 firstAskIndex) external
```

Publishes bids/asks for the distribution in the `indices`. Caller should follow the desired distribution in `baseDist` and `quoteDist`.
This function is used publicly after `populate` to reinitialize some indices or if multiple transactions are needed to split initialization due to gas cost.
This function is not payable, use `populate` to fund along with populate.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| distribution | struct DirectWithBidsAndAsksDistribution.Distribution | the distribution of base and quote for Kandel indices. |
| pivotIds | uint256[] | the pivot to be used for the offer. |
| firstAskIndex | uint256 | the (inclusive) index after which offer should be an ask. |

### dualWantsGivesOfOffer

```solidity
function dualWantsGivesOfOffer(enum OfferType baDual, uint256 dualOfferGives, struct MgvLib.SingleOrder order, struct GeometricKandel.Params memoryParams) internal pure returns (uint256 wants, uint256 gives)
```

calculates the wants and gives for the dual offer according to the geometric price distribution.

_Define the (maker) price of the order as `p_order := order.offer.wants() / order.offer.gives()` (what the offer originally wants by what the offer originally gives).
the (maker) price of the dual order must be `p_dual := p_order / ratio^spread` at which one should buy back at least what was sold.
thus `min_offer_wants := order.wants` at price `p_dual`
with `min_offer_gives / min_offer_wants = p_dual` we derive `min_offer_gives = order.gives/ratio^spread`.
Now at maximal compounding, maker wants to give all what taker gave. That is `max_offer_gives := order.gives`
So with compound rate we have:
`offer_gives := min_offer_gives + (max_offer_gives - min_offer_gives) * compoundRate`.
and we derive the formula:
`offer_gives = order.gives * ( 1/ratio^spread + (1 - 1/ratio^spread) * compoundRate)`
which we use in the code below where we also account for existing gives of the dual offer._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| baDual | enum OfferType | the dual offer type. |
| dualOfferGives | uint256 | the dual offer's current gives (can be 0) |
| order | struct MgvLib.SingleOrder | a recap of the taker order (order.offer is the executed offer) |
| memoryParams | struct GeometricKandel.Params | the Kandel params (possibly with modified spread due to boundary condition) |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| wants | uint256 | the new wants for the dual offer |
| gives | uint256 | the new gives for the dual offer |

### transportDestination

```solidity
function transportDestination(enum OfferType ba, uint256 index, uint256 step, uint256 pricePoints) internal pure returns (uint256 better, uint8 spread)
```

returns the destination index to transport received liquidity to - a better (for Kandel) price index for the offer type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ba | enum OfferType | the offer type to transport to |
| index | uint256 | the price index one is willing to improve |
| step | uint256 | the number of price steps improvements |
| pricePoints | uint256 | the number of price points |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| better | uint256 | destination index |
| spread | uint8 | the size of the price jump, which is `step` if the index boundaries were not reached |

### transportLogic

```solidity
function transportLogic(enum OfferType ba, struct MgvLib.SingleOrder order) internal virtual returns (enum OfferType baDual, uint256 dualOfferId, uint256 dualIndex, struct IOfferLogic.OfferArgs args)
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
| dualOfferId | uint256 |  |
| dualIndex | uint256 |  |
| args | struct IOfferLogic.OfferArgs | the argument for `populateIndex` specifying gives and wants |

