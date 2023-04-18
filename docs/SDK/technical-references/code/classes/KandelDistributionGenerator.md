---
id: "KandelDistributionGenerator"
title: "Class: KandelDistributionGenerator"
sidebar_label: "KandelDistributionGenerator"
sidebar_position: 0
custom_edit_url: null
---

**`Title`**

Helper for generating Kandel distributions.

## Properties

### <a id="distributionhelper" name="distributionhelper"></a> distributionHelper

• **distributionHelper**: `KandelDistributionHelper`

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelDistributionGenerator.ts:12

___

### <a id="pricecalculation" name="pricecalculation"></a> priceCalculation

• **priceCalculation**: `KandelPriceCalculation`

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelDistributionGenerator.ts:13

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new KandelDistributionGenerator**(`distributionHelper`, `priceCalculation`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `distributionHelper` | `KandelDistributionHelper` |
| `priceCalculation` | `KandelPriceCalculation` |

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelDistributionGenerator.ts:15

## Methods

### <a id="calculateminimumdistribution" name="calculateminimumdistribution"></a> calculateMinimumDistribution

▸ **calculateMinimumDistribution**(`params`): [`KandelDistribution`](KandelDistribution.md)

Calculates a minimal recommended volume distribution of bids and asks and their base and quote amounts to match the geometric price distribution given by parameters.

**`Remarks`**

The price distribution may not match the priceDistributionParams exactly due to limited precision.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | The parameters for the geometric distribution. |
| `params.priceParams` | `PriceDistributionParams` | The parameters for the geometric price distribution. |
| `params.midPrice` | `any` | The mid-price used to determine when to switch from bids to asks. |
| `params.constantBase?` | `boolean` | Whether the base amount should be constant for all offers. |
| `params.constantQuote?` | `boolean` | Whether the quote amount should be constant for all offers. |
| `params.minimumBasePerOffer` | `any` | The minimum amount of base to give for each offer. Should be at least minimumBasePerOfferFactor from KandelConfiguration multiplied with the minimum volume for the market. |
| `params.minimumQuotePerOffer` | `any` | The minimum amount of quote to give for each offer. Should be at least minimumQuotePerOfferFactor from KandelConfiguration multiplied with the minimum volume for the market. |

#### Returns

[`KandelDistribution`](KandelDistribution.md)

The distribution of bids and asks and their base and quote amounts.

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelDistributionGenerator.ts:34

___

### <a id="calculatedistribution" name="calculatedistribution"></a> calculateDistribution

▸ **calculateDistribution**(`params`): [`KandelDistribution`](KandelDistribution.md)

Calculates distribution of bids and asks and their base and quote amounts to match the geometric price distribution given by parameters.

**`Remarks`**

The price distribution may not match the priceDistributionParams exactly due to limited precision.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | The parameters for the geometric distribution. |
| `params.priceParams` | `PriceDistributionParams` | The parameters for the geometric price distribution. |
| `params.midPrice` | `any` | The mid-price used to determine when to switch from bids to asks. |
| `params.initialAskGives?` | `any` | The initial amount of base to give for all asks. Should be at least minimumBasePerOfferFactor from KandelConfiguration multiplied with the minimum volume for the market. If not provided, then initialBidGives is used as quote for asks, and the base the ask gives is set to according to the price. |
| `params.initialBidGives?` | `any` | The initial amount of quote to give for all bids. Should be at least minimumQuotePerOfferFactor from KandelConfiguration multiplied with the minimum volume for the market. If not provided, then initialAskGives is used as base for bids, and the quote the bid gives is set to according to the price. |

#### Returns

[`KandelDistribution`](KandelDistribution.md)

The distribution of bids and asks and their base and quote amounts.

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelDistributionGenerator.ts:74

___

### <a id="recalculatedistributionfromavailable" name="recalculatedistributionfromavailable"></a> recalculateDistributionFromAvailable

▸ **recalculateDistributionFromAvailable**(`params`): [`KandelDistribution`](KandelDistribution.md)

Recalculates the gives for offers in the distribution such that the available base and quote is consumed uniformly, while preserving the price distribution.

**`Remarks`**

The required volume can be slightly less than available due to rounding due to token decimals.
Note that the resulting offered base volume for each offer should be at least minimumBasePerOfferFactor from KandelConfiguration multiplied with the minimum volume for the market - and similar for quote.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | The parameters for the recalculation. |
| `params.distribution` | [`KandelDistribution`](KandelDistribution.md) | The distribution to reset the gives for. |
| `params.availableBase?` | `any` | The available base to consume. If not provided, then the quote for bids is also used as quote for asks, and the base the ask gives is set to according to the price. |
| `params.availableQuote?` | `any` | The available quote to consume. If not provided, then the base for asks is also used as base for bids, and the quote the bid gives is set to according to the price. |

#### Returns

[`KandelDistribution`](KandelDistribution.md)

The distribution of bids and asks and their base and quote amounts.

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelDistributionGenerator.ts:105

___

### <a id="createdistributionwithoffers" name="createdistributionwithoffers"></a> createDistributionWithOffers

▸ **createDistributionWithOffers**(`params`): [`KandelDistribution`](KandelDistribution.md)

Creates a distribution based on an explicit set of offers. Either based on an original distribution or parameters for one.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | The parameters for the distribution. |
| `params.explicitOffers` | { `index`: `number` ; `offerType`: [`BA`](../namespaces/Market-1.md#ba) ; `price`: `any` ; `gives`: `any`  }[] | The explicit offers to use. |
| `params.distribution` | [`KandelDistribution`](KandelDistribution.md) \| { `ratio`: `any` ; `pricePoints`: `number`  } | The original distribution or parameters for one. If pricePoints is not provided, then the number of offers is used. |

#### Returns

[`KandelDistribution`](KandelDistribution.md)

The new distribution.

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelDistributionGenerator.ts:135
