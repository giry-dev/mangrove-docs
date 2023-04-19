---
id: "KandelDistribution"
title: "Class: KandelDistribution"
sidebar_label: "KandelDistribution"
sidebar_position: 0
custom_edit_url: null
---

**`Title`**

A distribution of bids and ask for Kandel.

## Properties

### <a id="offers" name="offers"></a> offers

• **offers**: `OfferDistribution`

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelDistribution.ts:20

___

### <a id="basedecimals" name="basedecimals"></a> baseDecimals

• **baseDecimals**: `number`

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelDistribution.ts:21

___

### <a id="quotedecimals" name="quotedecimals"></a> quoteDecimals

• **quoteDecimals**: `number`

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelDistribution.ts:22

___

### <a id="ratio" name="ratio"></a> ratio

• **ratio**: `Big`

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelDistribution.ts:23

___

### <a id="pricepoints" name="pricepoints"></a> pricePoints

• **pricePoints**: `number`

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelDistribution.ts:24

___

### <a id="helper" name="helper"></a> helper

• **helper**: `KandelDistributionHelper`

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelDistribution.ts:25

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new KandelDistribution**(`ratio`, `pricePoints`, `offers`, `baseDecimals`, `quoteDecimals`)

Constructor

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ratio` | `Big` | The ratio used when calculating the price distribution. |
| `pricePoints` | `number` | The number of price points in the distribution. Can be more than the number of offers if a subset is considered. |
| `offers` | `OfferDistribution` | The distribution of bids and asks. |
| `baseDecimals` | `number` | The number of decimals for the base token. |
| `quoteDecimals` | `number` | The number of decimals for the quote token. |

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelDistribution.ts:34

## Methods

### <a id="getoffercount" name="getoffercount"></a> getOfferCount

▸ **getOfferCount**(): `number`

Gets the number of offers in the distribution. This can be lower than the number of price points when a subset is considered.

#### Returns

`number`

The number of offers in the distribution.

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelDistribution.ts:53

___

### <a id="calculateoffergives" name="calculateoffergives"></a> calculateOfferGives

▸ **calculateOfferGives**(`offerType`, `offerCount`, `totalVolume`): `any`

Calculates the gives for a single offer of the given type given the total available volume and the count of offers of that type.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `offerType` | [`BA`](../namespaces/Market-1.md#ba) | The type of offer. |
| `offerCount` | `number` | The count of offers of the given type. |
| `totalVolume` | `Big` | The total available volume. |

#### Returns

`any`

The amount of base or quote to give for the offer.

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelDistribution.ts:63

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
| `askGives` | `any` |
| `bidGives` | `any` |

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelDistribution.ts:83

___

### <a id="getfirstaskindex" name="getfirstaskindex"></a> getFirstAskIndex

▸ **getFirstAskIndex**(): `number`

Gets the index of the first ask in the distribution. If there are no asks, then the length of the distribution is returned.

#### Returns

`number`

The index of the first ask in the distribution; or the length of the distribution if there are no asks.

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelDistribution.ts:103

___

### <a id="chunkdistribution" name="chunkdistribution"></a> chunkDistribution

▸ **chunkDistribution**(`pivots`, `maxOffersInChunk`): { `pivots`: `number`[] ; `distribution`: `OfferDistribution`  }[]

Split a distribution and its pivots into chunks according to the maximum number of offers in a single chunk.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pivots` | `number`[] | The pivots for the distribution. |
| `maxOffersInChunk` | `number` | The maximum number of offers in a single chunk. |

#### Returns

{ `pivots`: `number`[] ; `distribution`: `OfferDistribution`  }[]

The chunks.

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelDistribution.ts:114

___

### <a id="getpricesfordistribution" name="getpricesfordistribution"></a> getPricesForDistribution

▸ **getPricesForDistribution**(): `Big`[]

Gets the prices for the distribution for the given subset of offers.

#### Returns

`Big`[]

The prices in the distribution.

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelDistribution.ts:133

___

### <a id="getofferedvolumefordistribution" name="getofferedvolumefordistribution"></a> getOfferedVolumeForDistribution

▸ **getOfferedVolumeForDistribution**(): `Object`

Gets the required volume of base and quote for the distribution to be fully provisioned.

#### Returns

`Object`

The offered volume of base and quote for the distribution to be fully provisioned.

| Name | Type |
| :------ | :------ |
| `requiredBase` | `any` |
| `requiredQuote` | `any` |

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelDistribution.ts:145

___

### <a id="verifydistribution" name="verifydistribution"></a> verifyDistribution

▸ **verifyDistribution**(): `void`

Verifies the distribution is valid.

**`Remarks`**

Throws if the distribution is invalid.

#### Returns

`void`

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelDistribution.ts:167

___

### <a id="getrequiredprovision" name="getrequiredprovision"></a> getRequiredProvision

▸ **getRequiredProvision**(`params`): `Promise`<`any`\>

Determines the required provision for the offers in the distribution.

**`Remarks`**

This takes into account that each price point can become both an ask and a bid which both require provision.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | The parameters used to calculate the provision. |
| `params.market` | [`Market`](Market.md) | The market to get provisions for bids and asks from. |
| `params.gasreq` | `number` | The gas required to execute a trade. |
| `params.gasprice` | `number` | The gas price to calculate provision for. |

#### Returns

`Promise`<`any`\>

The provision required for the number of offers.

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelDistribution.ts:196
