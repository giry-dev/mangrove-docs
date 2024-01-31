---
id: "GeometricKandelDistribution"
title: "Class: GeometricKandelDistribution"
sidebar_label: "GeometricKandelDistribution"
sidebar_position: 0
custom_edit_url: null
---

**`Title`**

A geometric distribution of bids and ask for a geometric Kandel.

## Hierarchy

- [`KandelDistribution`](KandelDistribution.md)

  ↳ **`GeometricKandelDistribution`**

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new GeometricKandelDistribution**(`geometricHelper`, `baseQuoteTickIndex0`, `baseQuoteTickOffset`, `firstAskIndex`, `bidGives`, `askGives`, `pricePoints`, `stepSize`, `offers`, `market`): [`GeometricKandelDistribution`](GeometricKandelDistribution.md)

Constructor

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `geometricHelper` | [`GeometricKandelDistributionHelper`](GeometricKandelDistributionHelper.md) | - |
| `baseQuoteTickIndex0` | `number` | The base quote tick index of the first price point. |
| `baseQuoteTickOffset` | `number` | The number of ticks to jump between two price points - this gives the geometric progression. Should be >=1. |
| `firstAskIndex` | `number` | The index of the first live ask in the distribution. |
| `bidGives` | `undefined` \| `BigSource` | The amount of quote to give for each bid (undefined means derive from constant ask gives) |
| `askGives` | `undefined` \| `BigSource` | The amount of base to give for each ask (undefined means derive from constant bid gives) |
| `pricePoints` | `number` | The number of price points in the distribution. |
| `stepSize` | `number` | The step size used when transporting funds from an offer to its dual. Should be >=1. |
| `offers` | [`OfferDistribution`](../modules.md#offerdistribution) | The distribution of bids and asks. |
| `market` | [`KeyResolvedForCalculation`](../namespaces/Market-1.md#keyresolvedforcalculation) | The key data about the market. |

#### Returns

[`GeometricKandelDistribution`](GeometricKandelDistribution.md)

#### Overrides

[KandelDistribution](KandelDistribution.md).[constructor](KandelDistribution.md#constructor)

#### Defined in

@mangrovedao/mangrove.js/src/kandel/geometricKandel/geometricKandelDistribution.ts:28

## Properties

### <a id="basequotetickindex0" name="basequotetickindex0"></a> baseQuoteTickIndex0

• **baseQuoteTickIndex0**: `number`

#### Defined in

@mangrovedao/mangrove.js/src/kandel/geometricKandel/geometricKandelDistribution.ts:9

___

### <a id="basequotetickoffset" name="basequotetickoffset"></a> baseQuoteTickOffset

• **baseQuoteTickOffset**: `number`

#### Defined in

@mangrovedao/mangrove.js/src/kandel/geometricKandel/geometricKandelDistribution.ts:10

___

### <a id="bidgives" name="bidgives"></a> bidGives

• **bidGives**: `undefined` \| `BigSource`

#### Defined in

@mangrovedao/mangrove.js/src/kandel/geometricKandel/geometricKandelDistribution.ts:11

___

### <a id="askgives" name="askgives"></a> askGives

• **askGives**: `undefined` \| `BigSource`

#### Defined in

@mangrovedao/mangrove.js/src/kandel/geometricKandel/geometricKandelDistribution.ts:12

___

### <a id="firstaskindex" name="firstaskindex"></a> firstAskIndex

• **firstAskIndex**: `number`

#### Defined in

@mangrovedao/mangrove.js/src/kandel/geometricKandel/geometricKandelDistribution.ts:14

___

### <a id="geometrichelper" name="geometrichelper"></a> geometricHelper

• **geometricHelper**: [`GeometricKandelDistributionHelper`](GeometricKandelDistributionHelper.md)

#### Defined in

@mangrovedao/mangrove.js/src/kandel/geometricKandel/geometricKandelDistribution.ts:15

___

### <a id="offers" name="offers"></a> offers

• **offers**: [`OfferDistribution`](../modules.md#offerdistribution)

#### Inherited from

[KandelDistribution](KandelDistribution.md).[offers](KandelDistribution.md#offers)

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelDistribution.ts:27

___

### <a id="market" name="market"></a> market

• **market**: [`KeyResolvedForCalculation`](../namespaces/Market-1.md#keyresolvedforcalculation)

#### Inherited from

[KandelDistribution](KandelDistribution.md).[market](KandelDistribution.md#market)

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelDistribution.ts:28

___

### <a id="pricepoints" name="pricepoints"></a> pricePoints

• **pricePoints**: `number`

#### Inherited from

[KandelDistribution](KandelDistribution.md).[pricePoints](KandelDistribution.md#pricepoints)

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelDistribution.ts:29

___

### <a id="stepsize" name="stepsize"></a> stepSize

• **stepSize**: `number`

#### Inherited from

[KandelDistribution](KandelDistribution.md).[stepSize](KandelDistribution.md#stepsize)

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelDistribution.ts:30

___

### <a id="helper" name="helper"></a> helper

• **helper**: [`KandelDistributionHelper`](KandelDistributionHelper.md)

#### Inherited from

[KandelDistribution](KandelDistribution.md).[helper](KandelDistribution.md#helper)

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelDistribution.ts:31

## Methods

### <a id="getpriceratio" name="getpriceratio"></a> getPriceRatio

▸ **getPriceRatio**(): `Big`

Gets the price ratio given by the baseQuoteTickOffset.

#### Returns

`Big`

#### Defined in

@mangrovedao/mangrove.js/src/kandel/geometricKandel/geometricKandelDistribution.ts:51

___

### <a id="chunkgeometricdistribution" name="chunkgeometricdistribution"></a> chunkGeometricDistribution

▸ **chunkGeometricDistribution**(`maxOffersInChunk`): \{ `from`: `number` ; `to`: `number`  }[]

Split a distribution into chunks according to the maximum number of offers in a single chunk.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `maxOffersInChunk` | `number` | The maximum number of offers in a single chunk. |

#### Returns

\{ `from`: `number` ; `to`: `number`  }[]

The chunks.

#### Defined in

@mangrovedao/mangrove.js/src/kandel/geometricKandel/geometricKandelDistribution.ts:62

___

### <a id="verifydistribution" name="verifydistribution"></a> verifyDistribution

▸ **verifyDistribution**(): `void`

Verifies the distribution is valid.

#### Returns

`void`

**`Remarks`**

Throws if the distribution is invalid.

#### Overrides

[KandelDistribution](KandelDistribution.md).[verifyDistribution](KandelDistribution.md#verifydistribution)

#### Defined in

@mangrovedao/mangrove.js/src/kandel/geometricKandel/geometricKandelDistribution.ts:74

___

### <a id="calculateoffergives" name="calculateoffergives"></a> calculateOfferGives

▸ **calculateOfferGives**(`offerType`, `offerCount`, `totalVolume`): `Big`

Calculates the gives for a single offer of the given type given the total available volume and the count of offers of that type.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `offerType` | [`BA`](../namespaces/Market-1.md#ba) | The type of offer. |
| `offerCount` | `number` | The count of offers of the given type. |
| `totalVolume` | `Big` | The total available volume. |

#### Returns

`Big`

The amount of base or quote to give for the offer.

#### Inherited from

[KandelDistribution](KandelDistribution.md).[calculateOfferGives](KandelDistribution.md#calculateoffergives)

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelDistribution.ts:60

___

### <a id="getoffers" name="getoffers"></a> getOffers

▸ **getOffers**(`offerType`): [`OfferList`](../modules.md#offerlist)

Gets all offers of the given type

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `offerType` | [`BA`](../namespaces/Market-1.md#ba) | The type of offer. |

#### Returns

[`OfferList`](../modules.md#offerlist)

All offers of the given type.

#### Inherited from

[KandelDistribution](KandelDistribution.md).[getOffers](KandelDistribution.md#getoffers)

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelDistribution.ts:88

___

### <a id="getliveoffers" name="getliveoffers"></a> getLiveOffers

▸ **getLiveOffers**(`offerType`): \{ `index`: `number` ; `gives`: `Big` ; `tick`: `number`  }[]

Gets all live offers of the given type (offers with non-zero gives)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `offerType` | [`BA`](../namespaces/Market-1.md#ba) | The type of offer. |

#### Returns

\{ `index`: `number` ; `gives`: `Big` ; `tick`: `number`  }[]

All live offers of the given type (offers with non-zero gives)

#### Inherited from

[KandelDistribution](KandelDistribution.md).[getLiveOffers](KandelDistribution.md#getliveoffers)

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelDistribution.ts:96

___

### <a id="getdeadoffers" name="getdeadoffers"></a> getDeadOffers

▸ **getDeadOffers**(`offerType`): \{ `index`: `number` ; `gives`: `Big` ; `tick`: `number`  }[]

Gets all dead offers of the given type (offers with 0 gives)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `offerType` | [`BA`](../namespaces/Market-1.md#ba) | The type of offer. |

#### Returns

\{ `index`: `number` ; `gives`: `Big` ; `tick`: `number`  }[]

All dead offers of the given type (offers with 0 gives)

#### Inherited from

[KandelDistribution](KandelDistribution.md).[getDeadOffers](KandelDistribution.md#getdeadoffers)

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelDistribution.ts:104

___

### <a id="getofferatindex" name="getofferatindex"></a> getOfferAtIndex

▸ **getOfferAtIndex**(`offerType`, `index`): `undefined` \| \{ `index`: `number` ; `gives`: `Big` ; `tick`: `number`  }

Gets the offer at the given index for the given offer type

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `offerType` | [`BA`](../namespaces/Market-1.md#ba) | The type of offer. |
| `index` | `number` | The index of the offer. |

#### Returns

`undefined` \| \{ `index`: `number` ; `gives`: `Big` ; `tick`: `number`  }

The offer at the given index for the given offer type.

#### Inherited from

[KandelDistribution](KandelDistribution.md).[getOfferAtIndex](KandelDistribution.md#getofferatindex)

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelDistribution.ts:115

___

### <a id="getofferswithprices" name="getofferswithprices"></a> getOffersWithPrices

▸ **getOffersWithPrices**(): `Object`

Gets an offer distribution adorned with prices of offers.

#### Returns

`Object`

An offer distribution adorned with prices of offers.

| Name | Type |
| :------ | :------ |
| `bids` | \{ `index`: `number` ; `gives`: `Big` ; `tick`: `number` ; `price`: `Big`  }[] |
| `asks` | \{ `index`: `number` ; `gives`: `Big` ; `tick`: `number` ; `price`: `Big`  }[] |

#### Inherited from

[KandelDistribution](KandelDistribution.md).[getOffersWithPrices](KandelDistribution.md#getofferswithprices)

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelDistribution.ts:122

___

### <a id="calculateconstantgivesperoffer" name="calculateconstantgivesperoffer"></a> calculateConstantGivesPerOffer

▸ **calculateConstantGivesPerOffer**(`availableBase?`, `availableQuote?`): `Object`

Calculates the gives for bids and asks based on the available volume for the distribution.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `availableBase?` | `Big` | The available base to consume. |
| `availableQuote?` | `Big` | The available quote to consume. |

#### Returns

`Object`

The amount of base or quote to give for each offer.

| Name | Type |
| :------ | :------ |
| `askGives` | `undefined` \| `Big` |
| `bidGives` | `undefined` \| `Big` |

#### Inherited from

[KandelDistribution](KandelDistribution.md).[calculateConstantGivesPerOffer](KandelDistribution.md#calculateconstantgivesperoffer)

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelDistribution.ts:141

___

### <a id="getfirstliveaskindex" name="getfirstliveaskindex"></a> getFirstLiveAskIndex

▸ **getFirstLiveAskIndex**(): `number`

Gets the index of the first ask in the distribution. If there are no live asks, then the length of the distribution is returned.

#### Returns

`number`

The index of the first ask in the distribution. If there are no live asks, then the length of the distribution is returned.

#### Inherited from

[KandelDistribution](KandelDistribution.md).[getFirstLiveAskIndex](KandelDistribution.md#getfirstliveaskindex)

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelDistribution.ts:166

___

### <a id="getlastlivebidindex" name="getlastlivebidindex"></a> getLastLiveBidIndex

▸ **getLastLiveBidIndex**(): `number`

Gets the index of the last live ask in the distribution. If there are no live bids, then -1 is returned.

#### Returns

`number`

The index of the last live ask in the distribution. If there are no live bids, then -1 is returned.

#### Inherited from

[KandelDistribution](KandelDistribution.md).[getLastLiveBidIndex](KandelDistribution.md#getlastlivebidindex)

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelDistribution.ts:176

___

### <a id="getofferedvolumefordistribution" name="getofferedvolumefordistribution"></a> getOfferedVolumeForDistribution

▸ **getOfferedVolumeForDistribution**(): `Object`

Gets the required volume of base and quote for the distribution to be fully provisioned.

#### Returns

`Object`

The offered volume of base and quote for the distribution to be fully provisioned.

| Name | Type |
| :------ | :------ |
| `requiredBase` | `Big` |
| `requiredQuote` | `Big` |

#### Inherited from

[KandelDistribution](KandelDistribution.md).[getOfferedVolumeForDistribution](KandelDistribution.md#getofferedvolumefordistribution)

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelDistribution.ts:187

___

### <a id="getrequiredprovision" name="getrequiredprovision"></a> getRequiredProvision

▸ **getRequiredProvision**(`params`): `Promise`<`Big`\>

Determines the required provision for the price points in the distribution.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | The parameters used to calculate the provision. |
| `params.market` | [`Market`](Market.md) | The market to get provisions for bids and asks from. |
| `params.gasreq` | `number` | The gas required to execute a trade. |
| `params.gasprice` | `number` | The gas price to calculate provision for. |

#### Returns

`Promise`<`Big`\>

The provision required for the number of offers.

**`Remarks`**

This takes into account that each of the offers represent a price point which can become both an ask and a bid which both require provision.

#### Inherited from

[KandelDistribution](KandelDistribution.md).[getRequiredProvision](KandelDistribution.md#getrequiredprovision)

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelDistribution.ts:251

___

### <a id="calculateminimuminitialgives" name="calculateminimuminitialgives"></a> calculateMinimumInitialGives

▸ **calculateMinimumInitialGives**(`minimumBasePerOffer`, `minimumQuotePerOffer`): `Object`

Calculates the minimum initial gives for each offer such that all possible gives of fully taken offers at all price points will be above the minimums provided.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `minimumBasePerOffer` | `Big` | The minimum base to give for each offer. |
| `minimumQuotePerOffer` | `Big` | The minimum quote to give for each offer. |

#### Returns

`Object`

The minimum initial gives for each offer such that all possible gives of fully taken offers at all price points will be above the minimums provided.

| Name | Type |
| :------ | :------ |
| `askGives` | `Big` |
| `bidGives` | `Big` |

#### Inherited from

[KandelDistribution](KandelDistribution.md).[calculateMinimumInitialGives](KandelDistribution.md#calculateminimuminitialgives)

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelDistribution.ts:268

___

### <a id="mapasyncoffers" name="mapasyncoffers"></a> mapAsyncOffers

▸ **mapAsyncOffers**<`T`, `R`\>(`offers`, `f`): `Promise`<\{ `bids`: `Awaited`<`R`\>[] ; `asks`: `Awaited`<`R`\>[]  }\>

Maps bids and asks arrays to a new value using an async function

#### Type parameters

| Name |
| :------ |
| `T` |
| `R` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `offers` | `Object` |
| `offers.bids` | `T`[] |
| `offers.asks` | `T`[] |
| `f` | (`x`: `T`, `ba`: [`BA`](../namespaces/Market-1.md#ba)) => `Promise`<`R`\> |

#### Returns

`Promise`<\{ `bids`: `Awaited`<`R`\>[] ; `asks`: `Awaited`<`R`\>[]  }\>

#### Inherited from

[KandelDistribution](KandelDistribution.md).[mapAsyncOffers](KandelDistribution.md#mapasyncoffers)

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelDistribution.ts:281

___

### <a id="mapoffers" name="mapoffers"></a> mapOffers

▸ **mapOffers**<`T`, `R`\>(`offers`, `f`): `Object`

Maps bids and asks arrays to a new value using a function

#### Type parameters

| Name |
| :------ |
| `T` |
| `R` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `offers` | `Object` |
| `offers.bids` | `T`[] |
| `offers.asks` | `T`[] |
| `f` | (`x`: `T`, `ba`: [`BA`](../namespaces/Market-1.md#ba)) => `R` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `bids` | `R`[] |
| `asks` | `R`[] |

#### Inherited from

[KandelDistribution](KandelDistribution.md).[mapOffers](KandelDistribution.md#mapoffers)

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelDistribution.ts:292
