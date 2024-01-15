## GeometricKandel

### SetBaseQuoteTickOffset

```solidity
event SetBaseQuoteTickOffset(uint256 value)
```

The tick offset for absolute price used for the on-chain geometric progression deployment in `createDistribution`. It is recommended that this is a multiple of tickSpacing for the offer lists to avoid rounding.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| value | uint256 | the tick offset. |

### baseQuoteTickOffset

```solidity
uint256 baseQuoteTickOffset
```

The tick offset for absolute price used for the on-chain geometric progression deployment in `createDistribution`. It is recommended that this is a multiple of tickSpacing for the offer lists to avoid rounding.

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

### setBaseQuoteTickOffset

```solidity
function setBaseQuoteTickOffset(uint256 _baseQuoteTickOffset) public
```

sets the tick offset if different from existing.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _baseQuoteTickOffset | uint256 | the new tick offset. |

### createDistribution

```solidity
function createDistribution(uint256 from, uint256 to, Tick baseQuoteTickIndex0, uint256 _baseQuoteTickOffset, uint256 firstAskIndex, uint256 bidGives, uint256 askGives, uint256 pricePoints, uint256 stepSize) public pure returns (struct DirectWithBidsAndAsksDistribution.Distribution distribution)
```

Creates a distribution of bids and asks given by the parameters. Dual offers are included with gives=0.

_the absolute price of an offer is the ratio of quote/base volumes of tokens it trades
the tick of offers on Mangrove are in relative taker price of maker's inbound/outbound volumes of tokens it trades
for Bids, outbound_tkn=quote, inbound_tkn=base so relative taker price of a a bid is the inverse of the absolute price.
for Asks, outbound_tkn=base, inbound_tkn=quote so relative taker price of an ask coincides with absolute price.
Index0 will contain the ask with the lowest relative price and the bid with the highest relative price. Absolute price is geometrically increasing over indexes.
tickOffset moves an offer relative price s.t. `AskTick_{i+1} = AskTick_i + tickOffset` and `BidTick_{i+1} = BidTick_i - tickOffset`
A hole is left in the middle at the size of stepSize - either an offer or its dual is posted, not both.
The caller should make sure the minimum and maximum tick does not exceed the MIN_TICK and MAX_TICK from respectively; otherwise, populate will fail for those offers.
If type(uint).max is used for `bidGives` or `askGives` then very high or low prices can yield gives=0 (which results in both offer an dual being dead) or gives>=type(uin96).max which is not supported by Mangrove._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| from | uint256 | populate offers starting from this index (inclusive). Must be at most `pricePoints`. |
| to | uint256 | populate offers until this index (exclusive). Must be at most `pricePoints`. |
| baseQuoteTickIndex0 | Tick | the tick for the price point at index 0 given as a tick on the `base, quote` offer list, i.e. corresponding to an ask with a quote/base ratio. It is recommended that this is a multiple of tickSpacing for the offer lists to avoid rounding. |
| _baseQuoteTickOffset | uint256 | the tick offset used for the geometric progression deployment. Must be at least 1. It is recommended that this is a multiple of tickSpacing for the offer lists to avoid rounding. |
| firstAskIndex | uint256 | the (inclusive) index after which offer should be an ask. Must be at most `pricePoints`. |
| bidGives | uint256 | The initial amount of quote to give for all bids. If 0, only book the offer, if type(uint).max then askGives is used as base for bids, and the quote the bid gives is set to according to the price. |
| askGives | uint256 | The initial amount of base to give for all asks. If 0, only book the offer, if type(uint).max then bidGives is used as quote for asks, and the base the ask gives is set to according to the price. |
| pricePoints | uint256 | the number of price points for the Kandel instance. Must be at least 2. |
| stepSize | uint256 | in amount of price points to jump for posting dual offer. Must be less than `pricePoints`. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| distribution | struct DirectWithBidsAndAsksDistribution.Distribution | the distribution of bids and asks to populate |

### populateFromOffset

```solidity
function populateFromOffset(uint256 from, uint256 to, Tick baseQuoteTickIndex0, uint256 _baseQuoteTickOffset, uint256 firstAskIndex, uint256 bidGives, uint256 askGives, struct CoreKandel.Params parameters, uint256 baseAmount, uint256 quoteAmount) public payable
```

publishes bids/asks according to a geometric distribution, and sets all parameters according to inputs.

_See `createDistribution` for further details._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| from | uint256 | populate offers starting from this index (inclusive). |
| to | uint256 | populate offers until this index (exclusive). |
| baseQuoteTickIndex0 | Tick | the tick for the price point at index 0 given as a tick on the `base, quote` offer list, i.e. corresponding to an ask with a quote/base ratio. It is recommended that this is a multiple of tickSpacing for the offer lists to avoid rounding. |
| _baseQuoteTickOffset | uint256 | the tick offset used for the geometric progression deployment. It is recommended that this is a multiple of tickSpacing for the offer lists to avoid rounding. |
| firstAskIndex | uint256 | the (inclusive) index after which offer should be an ask. |
| bidGives | uint256 | The initial amount of quote to give for all bids. If 0, only book the offer, if type(uint).max then askGives is used as base for bids, and the quote the bid gives is set to according to the price. |
| askGives | uint256 | The initial amount of base to give for all asks. If 0, only book the offer, if type(uint).max then bidGives is used as quote for asks, and the base the ask gives is set to according to the price. |
| parameters | struct CoreKandel.Params | the parameters for Kandel. Only changed parameters will cause updates. Set `gasreq` and `gasprice` to 0 to keep existing values. |
| baseAmount | uint256 | base amount to deposit |
| quoteAmount | uint256 | quote amount to deposit |

### populateChunkFromOffset

```solidity
function populateChunkFromOffset(uint256 from, uint256 to, Tick baseQuoteTickIndex0, uint256 firstAskIndex, uint256 bidGives, uint256 askGives) public payable
```

publishes bids/asks according to a geometric distribution, and reads parameters from the Kandel instance.

_This is typically used after a call to `populateFromOffset` to populate the rest of the offers with the same parameters. See that function for further details._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| from | uint256 | populate offers starting from this index (inclusive). |
| to | uint256 | populate offers until this index (exclusive). |
| baseQuoteTickIndex0 | Tick | the tick for the price point at index 0 given as a tick on the `base, quote` offer list, i.e. corresponding to an ask with a quote/base ratio. It is recommended that this is a multiple of tickSpacing for the offer lists to avoid rounding. |
| firstAskIndex | uint256 | the (inclusive) index after which offer should be an ask. |
| bidGives | uint256 | The initial amount of quote to give for all bids. If 0, only book the offer, if type(uint).max then askGives is used as base for bids, and the quote the bid gives is set to according to the price. |
| askGives | uint256 | The initial amount of base to give for all asks. If 0, only book the offer, if type(uint).max then bidGives is used as quote for asks, and the base the ask gives is set to according to the price. |

