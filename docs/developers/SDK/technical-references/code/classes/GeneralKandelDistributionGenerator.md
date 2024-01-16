---
id: "GeneralKandelDistributionGenerator"
title: "Class: GeneralKandelDistributionGenerator"
sidebar_label: "GeneralKandelDistributionGenerator"
sidebar_position: 0
custom_edit_url: null
---

**`Title`**

Helper for generating general Kandel distributions with fully specified bids and asks with tick and volumes.

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new GeneralKandelDistributionGenerator**(`generalDistributionHelper`): [`GeneralKandelDistributionGenerator`](GeneralKandelDistributionGenerator.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `generalDistributionHelper` | [`GeneralKandelDistributionHelper`](GeneralKandelDistributionHelper.md) |

#### Returns

[`GeneralKandelDistributionGenerator`](GeneralKandelDistributionGenerator.md)

#### Defined in

@mangrovedao/mangrove.js/src/kandel/generalKandelDistributionGenerator.ts:11

## Properties

### <a id="generaldistributionhelper" name="generaldistributionhelper"></a> generalDistributionHelper

• **generalDistributionHelper**: [`GeneralKandelDistributionHelper`](GeneralKandelDistributionHelper.md)

#### Defined in

@mangrovedao/mangrove.js/src/kandel/generalKandelDistributionGenerator.ts:9

## Methods

### <a id="uniformlychangevolume" name="uniformlychangevolume"></a> uniformlyChangeVolume

▸ **uniformlyChangeVolume**(`params`): `Object`

Creates a new distribution with uniformly changed volume.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | The parameters for the change. |
| `params.distribution` | [`KandelDistribution`](KandelDistribution.md) | The distribution to change. |
| `params.baseDelta?` | `BigSource` | The change in base volume. |
| `params.quoteDelta?` | `BigSource` | The change in quote volume. |
| `params.minimumBasePerOffer` | `BigSource` | The minimum amount of base to give for each offer. Should be at least minimumBasePerOfferFactor from KandelConfiguration multiplied with the minimum volume for the market. |
| `params.minimumQuotePerOffer` | `BigSource` | The minimum amount of quote to give for each offer. Should be at least minimumQuotePerOfferFactor from KandelConfiguration multiplied with the minimum volume for the market. |

#### Returns

`Object`

The new distribution.

| Name | Type |
| :------ | :------ |
| `distribution` | [`GeneralKandelDistribution`](GeneralKandelDistribution.md) |
| `totalBaseChange` | `Big` |
| `totalQuoteChange` | `Big` |

**`Remarks`**

The decrease has to respect minimums, and thus may decrease some offers more than others.

#### Defined in

@mangrovedao/mangrove.js/src/kandel/generalKandelDistributionGenerator.ts:27

___

### <a id="createdistributionwithoffers" name="createdistributionwithoffers"></a> createDistributionWithOffers

▸ **createDistributionWithOffers**(`params`): [`GeneralKandelDistribution`](GeneralKandelDistribution.md)

Creates a distribution based on an explicit set of offers. Either based on an original distribution or parameters for one.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | The parameters for the distribution. |
| `params.explicitOffers` | `Object` | The explicit offers to use. |
| `params.explicitOffers.bids` | [`OffersWithGives`](../modules.md#offerswithgives) | - |
| `params.explicitOffers.asks` | [`OffersWithGives`](../modules.md#offerswithgives) | - |
| `params.distribution` | [`KandelDistribution`](KandelDistribution.md) \| \{ `pricePoints`: `number` ; `stepSize`: `number`  } | The original distribution or parameters for one. If pricePoints is not provided, then the number of offers is used. |

#### Returns

[`GeneralKandelDistribution`](GeneralKandelDistribution.md)

The new distribution.

#### Defined in

@mangrovedao/mangrove.js/src/kandel/generalKandelDistributionGenerator.ts:56
