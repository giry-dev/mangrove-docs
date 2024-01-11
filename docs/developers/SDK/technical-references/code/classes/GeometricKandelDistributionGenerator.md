---
id: "GeometricKandelDistributionGenerator"
title: "Class: GeometricKandelDistributionGenerator"
sidebar_label: "GeometricKandelDistributionGenerator"
sidebar_position: 0
custom_edit_url: null
---

**`Title`**

Helper for generating geometric Kandel distributions.

## Properties

### <a id="geometricdistributionhelper" name="geometricdistributionhelper"></a> geometricDistributionHelper

• **geometricDistributionHelper**: `GeometricKandelDistributionHelper`

#### Defined in

@mangrovedao/mangrove.js/src/kandel/geometricKandel/geometricKandelDistributionGenerator.ts:13

___

### <a id="generaldistributionhelper" name="generaldistributionhelper"></a> generalDistributionHelper

• **generalDistributionHelper**: `GeneralKandelDistributionHelper`

#### Defined in

@mangrovedao/mangrove.js/src/kandel/geometricKandel/geometricKandelDistributionGenerator.ts:14

___

### <a id="geometrickandellib" name="geometrickandellib"></a> geometricKandelLib

• **geometricKandelLib**: `GeometricKandelLib`

#### Defined in

@mangrovedao/mangrove.js/src/kandel/geometricKandel/geometricKandelDistributionGenerator.ts:15

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new GeometricKandelDistributionGenerator**(`geometricDistributionHelper`, `generalDistributionHelper`, `geometricKandelLib`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `geometricDistributionHelper` | `GeometricKandelDistributionHelper` |
| `generalDistributionHelper` | `GeneralKandelDistributionHelper` |
| `geometricKandelLib` | `GeometricKandelLib` |

#### Defined in

@mangrovedao/mangrove.js/src/kandel/geometricKandel/geometricKandelDistributionGenerator.ts:17

## Methods

### <a id="calculategeometricdistributionparams" name="calculategeometricdistributionparams"></a> calculateGeometricDistributionParams

▸ **calculateGeometricDistributionParams**(`params`): `Object`

Generates a geometric price distribution.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `DistributionParams` | Parameters for the distribution. Exactly three of minPrice (or minBaseQuoteTick), maxPrice (or maxBaseQuoteTick), priceRatio (or baseQuoteTickOffset), and pricePoints must be provided. If tick-based arguments are provided, they take precedence. |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `baseQuoteTickOffset` | `number` |
| `pricePoints` | `number` |
| `firstAskIndex` | `number` |
| `baseQuoteTickIndex0` | `number` |
| `stepSize` | `number` |

#### Defined in

@mangrovedao/mangrove.js/src/kandel/geometricKandel/geometricKandelDistributionGenerator.ts:30

___

### <a id="calculatefirstofferindexandfirstaskindex" name="calculatefirstofferindexandfirstaskindex"></a> calculateFirstOfferIndexAndFirstAskIndex

▸ **calculateFirstOfferIndexAndFirstAskIndex**(`generateFromMid`, `minBaseQuoteTick`, `midBaseQuoteTick`, `baseQuoteTickOffset`, `pricePoints`, `stepSize`): `Object`

Calculates the tick of the lowest priced price point and the index of the first ask. It is assumed the parameters are sensible based on, e.g., a call to getTickDistributionParams.

**`Dev`**

if midBaseQuoteTick becomes a tick, then it is arbitrarily chosen to be a bid to simplify the math. So, if mid==min then firstAskIndex is 1. To have no bids, mid should be strictly less than min.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `generateFromMid` | `boolean` | Whether to generate the distribution outwards from the midPrice or upwards from the minPrice. |
| `minBaseQuoteTick` | `number` | The minimum base quote tick in the distribution. |
| `midBaseQuoteTick` | `number` | The mid-price as base quote tick used to determine when to switch from bids to asks. |
| `baseQuoteTickOffset` | `number` | The number of ticks to jump between two price points. |
| `pricePoints` | `number` | The number of price points in the distribution. |
| `stepSize` | `number` | The step size used when transporting funds from an offer to its dual. |

#### Returns

`Object`

The tick of the lowest priced price point and the index of the first ask

| Name | Type |
| :------ | :------ |
| `baseQuoteTickIndex0` | `number` |
| `firstAskIndex` | `number` |

#### Defined in

@mangrovedao/mangrove.js/src/kandel/geometricKandel/geometricKandelDistributionGenerator.ts:69

___

### <a id="calculateminimumdistribution" name="calculateminimumdistribution"></a> calculateMinimumDistribution

▸ **calculateMinimumDistribution**(`params`): `Promise`<[`GeometricKandelDistribution`](GeometricKandelDistribution.md)\>

Calculates a minimal recommended volume distribution of bids and asks and their base and quote amounts to match the geometric price distribution given by parameters.

**`Remarks`**

The price distribution may not match the distributionParams exactly due to limited precision.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | The parameters for the geometric price distribution. |
| `params.distributionParams` | `DistributionParams` | The parameters for the geometric price distribution. |
| `params.constantBase?` | `boolean` | Whether the base amount should be constant for all offers. |
| `params.constantQuote?` | `boolean` | Whether the quote amount should be constant for all offers. |
| `params.minimumBasePerOffer` | `BigSource` | The minimum amount of base to give for each offer. Should be at least minimumBasePerOfferFactor from KandelConfiguration multiplied with the minimum volume for the market. |
| `params.minimumQuotePerOffer` | `BigSource` | The minimum amount of quote to give for each offer. Should be at least minimumQuotePerOfferFactor from KandelConfiguration multiplied with the minimum volume for the market. |

#### Returns

`Promise`<[`GeometricKandelDistribution`](GeometricKandelDistribution.md)\>

The distribution of bids and asks and their base and quote amounts.

#### Defined in

@mangrovedao/mangrove.js/src/kandel/geometricKandel/geometricKandelDistributionGenerator.ts:111

___

### <a id="calculatedistribution" name="calculatedistribution"></a> calculateDistribution

▸ **calculateDistribution**(`params`): `Promise`<[`GeometricKandelDistribution`](GeometricKandelDistribution.md)\>

Calculates distribution of bids and asks and their base and quote amounts to match the geometric price distribution given by parameters.

**`Remarks`**

The price distribution may not match the priceDistributionParams exactly due to limited precision.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | The parameters for the geometric distribution. |
| `params.distributionParams` | `DistributionParams` | The parameters for the geometric price distribution. |
| `params.initialAskGives?` | `BigSource` | The initial amount of base to give for all asks. Should be at least minimumBasePerOfferFactor from KandelConfiguration multiplied with the minimum volume for the market. If not provided, then initialBidGives is used as quote for asks, and the base the ask gives is set to according to the price. |
| `params.initialBidGives?` | `BigSource` | The initial amount of quote to give for all bids. Should be at least minimumQuotePerOfferFactor from KandelConfiguration multiplied with the minimum volume for the market. If not provided, then initialAskGives is used as base for bids, and the quote the bid gives is set to according to the price. |

#### Returns

`Promise`<[`GeometricKandelDistribution`](GeometricKandelDistribution.md)\>

The distribution of bids and asks and their base and quote amounts.

#### Defined in

@mangrovedao/mangrove.js/src/kandel/geometricKandel/geometricKandelDistributionGenerator.ts:154

___

### <a id="calculatedistributionfromgeometricparams" name="calculatedistributionfromgeometricparams"></a> calculateDistributionFromGeometricParams

▸ **calculateDistributionFromGeometricParams**(`params`): `Promise`<[`GeometricKandelDistribution`](GeometricKandelDistribution.md)\>

Calculates distribution of bids and asks and their base and quote amounts to match the geometric price distribution given by parameters.

**`Remarks`**

The price distribution may not match the priceDistributionParams exactly due to limited precision.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | The parameters for the geometric distribution. |
| `params.geometricParams` | `Object` | The parameters for the geometric price distribution. |
| `params.geometricParams.baseQuoteTickOffset` | `number` | - |
| `params.geometricParams.pricePoints` | `number` | - |
| `params.geometricParams.firstAskIndex` | `number` | - |
| `params.geometricParams.baseQuoteTickIndex0` | `number` | - |
| `params.geometricParams.stepSize` | `number` | - |
| `params.initialAskGives?` | `BigSource` | The initial amount of base to give for all asks. Should be at least minimumBasePerOfferFactor from KandelConfiguration multiplied with the minimum volume for the market. If not provided, then initialBidGives is used as quote for asks, and the base the ask gives is set to according to the price. |
| `params.initialBidGives?` | `BigSource` | The initial amount of quote to give for all bids. Should be at least minimumQuotePerOfferFactor from KandelConfiguration multiplied with the minimum volume for the market. If not provided, then initialAskGives is used as base for bids, and the quote the bid gives is set to according to the price. |

#### Returns

`Promise`<[`GeometricKandelDistribution`](GeometricKandelDistribution.md)\>

The distribution of bids and asks and their base and quote amounts.

#### Defined in

@mangrovedao/mangrove.js/src/kandel/geometricKandel/geometricKandelDistributionGenerator.ts:183

___

### <a id="recalculatedistributionfromavailable" name="recalculatedistributionfromavailable"></a> recalculateDistributionFromAvailable

▸ **recalculateDistributionFromAvailable**(`params`): `Promise`<[`GeometricKandelDistribution`](GeometricKandelDistribution.md)\>

Recalculates the gives for offers in the distribution such that the available base and quote is consumed uniformly, while preserving the price distribution.

**`Remarks`**

The required volume can be slightly less than available due to rounding due to token decimals.
Note that the resulting offered base volume for each offer should be at least minimumBasePerOfferFactor from KandelConfiguration multiplied with the minimum volume for the market - and similar for quote.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | The parameters for the recalculation. |
| `params.distribution` | [`GeometricKandelDistribution`](GeometricKandelDistribution.md) | The distribution to reset the gives for. |
| `params.availableBase?` | `BigSource` | The available base to consume. If not provided, then the quote for bids is also used as quote for asks, and the base the ask gives is set to according to the price. |
| `params.availableQuote?` | `BigSource` | The available quote to consume. If not provided, then the base for asks is also used as base for bids, and the quote the bid gives is set to according to the price. |

#### Returns

`Promise`<[`GeometricKandelDistribution`](GeometricKandelDistribution.md)\>

The distribution of bids and asks and their base and quote amounts.

#### Defined in

@mangrovedao/mangrove.js/src/kandel/geometricKandel/geometricKandelDistributionGenerator.ts:217

___

### <a id="getminimumvolumeforindex" name="getminimumvolumeforindex"></a> getMinimumVolumeForIndex

▸ **getMinimumVolumeForIndex**(`params`): `Big`

Retrieves the minimum volume for a given offer type at the given index.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | The parameters for the minimum volume. |
| `params.offerType` | [`BA`](../namespaces/Market-1.md#ba) | The offer type to get the minimum volume for. |
| `params.index` | `number` | The Kandel index. |
| `params.tick` | `number` | The tick at the index (the tick price of base per quote for bids and quote per base for asks). |
| `params.baseQuoteTickOffset` | `number` | The number of ticks to jump between two price points - this gives the geometric progression. |
| `params.stepSize` | `number` | The step size used when transporting funds from an offer to its dual. |
| `params.pricePoints` | `number` | The number of price points. |
| `params.minimumBasePerOffer` | `BigSource` | The minimum base token volume per offer. If not provided, then the minimum base token volume is used. |
| `params.minimumQuotePerOffer` | `BigSource` | The minimum quote token volume per offer. If not provided, then the minimum quote token volume is used. |

#### Returns

`Big`

The minimum volume for the given offer type and the index.

#### Defined in

@mangrovedao/mangrove.js/src/kandel/geometricKandel/geometricKandelDistributionGenerator.ts:246
