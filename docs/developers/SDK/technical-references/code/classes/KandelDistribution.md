---
id: "KandelDistribution"
title: "Class: KandelDistribution"
sidebar_label: "KandelDistribution"
sidebar_position: 0
custom_edit_url: null
---

**`Title`**

A distribution of bids and ask for Kandel.

## Hierarchy

- **`KandelDistribution`**

  ↳ [`GeneralKandelDistribution`](GeneralKandelDistribution.md)

  ↳ [`GeometricKandelDistribution`](GeometricKandelDistribution.md)

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new KandelDistribution**(`pricePoints`, `stepSize`, `offers`, `market`): [`KandelDistribution`](KandelDistribution.md)

Constructor

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pricePoints` | `number` | The number of price points in the distribution. |
| `stepSize` | `number` | The step size used when transporting funds from an offer to its dual. Should be >=1. |
| `offers` | [`OfferDistribution`](../modules.md#offerdistribution) | The distribution of bids and asks. |
| `market` | [`KeyResolvedForCalculation`](../namespaces/Market-1.md#keyresolvedforcalculation) | The key data about the market. |

#### Returns

[`KandelDistribution`](KandelDistribution.md)

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelDistribution.ts:39

## Properties

### <a id="offers" name="offers"></a> offers

• **offers**: [`OfferDistribution`](../modules.md#offerdistribution)

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelDistribution.ts:27

___

### <a id="market" name="market"></a> market

• **market**: [`KeyResolvedForCalculation`](../namespaces/Market-1.md#keyresolvedforcalculation)

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelDistribution.ts:28

___

### <a id="pricepoints" name="pricepoints"></a> pricePoints

• **pricePoints**: `number`

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelDistribution.ts:29

___

### <a id="stepsize" name="stepsize"></a> stepSize

• **stepSize**: `number`

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelDistribution.ts:30

___

### <a id="helper" name="helper"></a> helper

• **helper**: [`KandelDistributionHelper`](KandelDistributionHelper.md)

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelDistribution.ts:31

## Methods

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

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelDistribution.ts:141

___

### <a id="getfirstliveaskindex" name="getfirstliveaskindex"></a> getFirstLiveAskIndex

▸ **getFirstLiveAskIndex**(): `number`

Gets the index of the first ask in the distribution. If there are no live asks, then the length of the distribution is returned.

#### Returns

`number`

The index of the first ask in the distribution. If there are no live asks, then the length of the distribution is returned.

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelDistribution.ts:166

___

### <a id="getlastlivebidindex" name="getlastlivebidindex"></a> getLastLiveBidIndex

▸ **getLastLiveBidIndex**(): `number`

Gets the index of the last live ask in the distribution. If there are no live bids, then -1 is returned.

#### Returns

`number`

The index of the last live ask in the distribution. If there are no live bids, then -1 is returned.

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

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelDistribution.ts:187

___

### <a id="verifydistribution" name="verifydistribution"></a> verifyDistribution

▸ **verifyDistribution**(): `void`

Verifies the distribution is valid.

#### Returns

`void`

**`Remarks`**

Throws if the distribution is invalid.
The verification checks that indices are ascending and bids come before asks.
The price distribution is not verified, except that the tick of each offer is a multiple of the tick spacing.

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelDistribution.ts:199

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

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelDistribution.ts:292
