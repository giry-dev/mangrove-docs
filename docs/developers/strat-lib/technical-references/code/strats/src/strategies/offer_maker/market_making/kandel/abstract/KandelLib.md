## KandelLib

### transportDestination

```solidity
function transportDestination(enum OfferType ba, uint256 index, uint256 step, uint256 pricePoints) internal pure returns (uint256 better)
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

### createGeometricDistribution

```solidity
function createGeometricDistribution(uint256 from, uint256 to, Tick baseQuoteTickIndex0, uint256 _baseQuoteTickOffset, uint256 firstAskIndex, uint256 bidGives, uint256 askGives, uint256 pricePoints, uint256 stepSize) external pure returns (struct DirectWithBidsAndAsksDistribution.Distribution distribution)
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
| baseQuoteTickIndex0 | Tick | the tick of base per quote for the price point at index 0. It is recommended that this is a multiple of tickSpacing for the offer lists to avoid rounding. |
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

