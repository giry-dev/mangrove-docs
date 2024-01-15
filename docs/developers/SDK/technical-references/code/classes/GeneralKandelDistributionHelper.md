---
id: "GeneralKandelDistributionHelper"
title: "Class: GeneralKandelDistributionHelper"
sidebar_label: "GeneralKandelDistributionHelper"
sidebar_position: 0
custom_edit_url: null
---

**`Title`**

Helper for handling general Kandel offer distributions.

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new GeneralKandelDistributionHelper**(`helper`): [`GeneralKandelDistributionHelper`](GeneralKandelDistributionHelper.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `helper` | [`KandelDistributionHelper`](KandelDistributionHelper.md) |

#### Returns

[`GeneralKandelDistributionHelper`](GeneralKandelDistributionHelper.md)

#### Defined in

@mangrovedao/mangrove.js/src/kandel/generalKandelDistributionHelper.ts:12

## Properties

### <a id="helper" name="helper"></a> helper

• **helper**: [`KandelDistributionHelper`](KandelDistributionHelper.md)

#### Defined in

@mangrovedao/mangrove.js/src/kandel/generalKandelDistributionHelper.ts:10

## Methods

### <a id="createdistributionwithoffers" name="createdistributionwithoffers"></a> createDistributionWithOffers

▸ **createDistributionWithOffers**(`explicitOffers`, `distribution`): [`GeneralKandelDistribution`](GeneralKandelDistribution.md)

Creates a distribution based on an explicit set of offers. Either based on an original distribution or parameters for one.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `explicitOffers` | `Object` | The explicit offers to use. |
| `explicitOffers.bids` | [`OffersWithGives`](../modules.md#offerswithgives) | The explicit bids to use. |
| `explicitOffers.asks` | [`OffersWithGives`](../modules.md#offerswithgives) | The explicit asks to use. |
| `distribution` | [`KandelDistribution`](KandelDistribution.md) \| \{ `pricePoints`: `number` ; `stepSize`: `number`  } | The original distribution. If pricePoints is not provided, then the number of offers is used. |

#### Returns

[`GeneralKandelDistribution`](GeneralKandelDistribution.md)

The new distribution.

#### Defined in

@mangrovedao/mangrove.js/src/kandel/generalKandelDistributionHelper.ts:23

___

### <a id="uniformlychangevolume" name="uniformlychangevolume"></a> uniformlyChangeVolume

▸ **uniformlyChangeVolume**(`params`): `Object`

Creates a new distribution with uniformly changed volume.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | The parameters for the change. |
| `params.distribution` | [`KandelDistribution`](KandelDistribution.md) | The distribution to change. |
| `params.baseDelta?` | `Big` | The change in base volume. |
| `params.quoteDelta?` | `Big` | The change in quote volume. |
| `params.minimumBasePerOffer` | `Big` | The minimum base per offer. Only applies for decrease in base volume. |
| `params.minimumQuotePerOffer` | `Big` | The minimum quote per offer. Only applies for decrease in quote volume. |

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

@mangrovedao/mangrove.js/src/kandel/generalKandelDistributionHelper.ts:59
