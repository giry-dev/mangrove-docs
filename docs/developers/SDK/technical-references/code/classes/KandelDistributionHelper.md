---
id: "KandelDistributionHelper"
title: "Class: KandelDistributionHelper"
sidebar_label: "KandelDistributionHelper"
sidebar_position: 0
custom_edit_url: null
---

**`Title`**

Helper for handling Kandel offer distributions.

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new KandelDistributionHelper**(`market`): [`KandelDistributionHelper`](KandelDistributionHelper.md)

Constructor

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `market` | [`KeyResolvedForCalculation`](../namespaces/Market-1.md#keyresolvedforcalculation) | The key data about the market. |

#### Returns

[`KandelDistributionHelper`](KandelDistributionHelper.md)

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelDistributionHelper.ts:26

## Properties

### <a id="asktickpricehelper" name="asktickpricehelper"></a> askTickPriceHelper

• **askTickPriceHelper**: [`TickPriceHelper`](TickPriceHelper.md)

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelDistributionHelper.ts:19

___

### <a id="bidtickpricehelper" name="bidtickpricehelper"></a> bidTickPriceHelper

• **bidTickPriceHelper**: [`TickPriceHelper`](TickPriceHelper.md)

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelDistributionHelper.ts:20

___

### <a id="market" name="market"></a> market

• **market**: [`KeyResolvedForCalculation`](../namespaces/Market-1.md#keyresolvedforcalculation)

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelDistributionHelper.ts:21

## Methods

### <a id="sortbyindex" name="sortbyindex"></a> sortByIndex

▸ **sortByIndex**(`list`): \{ `index`: `number`  }[]

Sorts an array in-place according to an index property in ascending order.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `list` | \{ `index`: `number`  }[] | The list to sort. |

#### Returns

\{ `index`: `number`  }[]

The sorted list.

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelDistributionHelper.ts:36

___

### <a id="changevalues" name="changevalues"></a> changeValues

▸ **changeValues**(`delta`, `values`, `minimumValue`, `round`): `Object`

Uniformly changes values by a total amount without decreasing below a minimum for each value. A value already below minimum will not be changed.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `delta` | `undefined` \| `Big` | The total amount to change. |
| `values` | `Big`[] | The values to change. |
| `minimumValue` | `Big` | The minimum value for each value. |
| `round` | (`value`: `Big`) => `Big` | The function to round the values. |

#### Returns

`Object`

The new values and the total change.

| Name | Type |
| :------ | :------ |
| `newValues` | `any`[] |
| `totalChange` | `Big` |

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelDistributionHelper.ts:47

___

### <a id="uniformlyincrease" name="uniformlyincrease"></a> uniformlyIncrease

▸ **uniformlyIncrease**(`values`, `totalDelta`, `round`): `Object`

Uniformly increases values by a total amount.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `values` | `Big`[] | The values to increase. |
| `totalDelta` | `Big` | The total amount to increase. |
| `round` | (`value`: `Big`) => `Big` | The function to round the values. |

#### Returns

`Object`

The new values and the total change.

| Name | Type |
| :------ | :------ |
| `newValues` | `any`[] |
| `totalChange` | `Big` |

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelDistributionHelper.ts:75

___

### <a id="uniformlydecrease" name="uniformlydecrease"></a> uniformlyDecrease

▸ **uniformlyDecrease**(`values`, `totalDelta`, `minimumValue`, `round`): `Object`

Uniformly decreases values by a total amount without decreasing below a minimum for each value. A value already below minimum will not be changed.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `values` | `Big`[] | The values to decrease. |
| `totalDelta` | `Big` | The total amount to decrease. |
| `minimumValue` | `Big` | The minimum value for each value. |
| `round` | (`value`: `Big`) => `Big` | The function to round each value. |

#### Returns

`Object`

The new values and the total change.

| Name | Type |
| :------ | :------ |
| `newValues` | `Big`[] |
| `totalChange` | `Big` |

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelDistributionHelper.ts:108

___

### <a id="calculateminimuminitialgives" name="calculateminimuminitialgives"></a> calculateMinimumInitialGives

▸ **calculateMinimumInitialGives**(`minimumBasePerOffer`, `minimumQuotePerOffer`, `bidTicks`, `askTicks`): `Object`

Calculates the minimum initial gives for each offer such that all possible gives of fully taken offers at all price points will be above the minimums provided.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `minimumBasePerOffer` | `Big` | The minimum base to give for each offer. |
| `minimumQuotePerOffer` | `Big` | The minimum quote to give for each offer. |
| `bidTicks` | `number`[] | The ticks for bids. |
| `askTicks` | `number`[] | The ticks for asks. |

#### Returns

`Object`

The minimum initial gives for each offer such that all possible gives of fully taken offers at all price points will be above the minimums provided.

| Name | Type |
| :------ | :------ |
| `askGives` | `Big` |
| `bidGives` | `Big` |

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelDistributionHelper.ts:147

___

### <a id="getdualindex" name="getdualindex"></a> getDualIndex

▸ **getDualIndex**(`offerType`, `index`, `pricePoints`, `stepSize`): `number`

Gets the dual index for an offer in the same manner as the solidity implementation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `offerType` | [`BA`](../namespaces/Market-1.md#ba) | The offer type to get the index for. |
| `index` | `number` | The index of the originating offer. |
| `pricePoints` | `number` | The number of price points in the distribution. |
| `stepSize` | `number` | The step size to use. |

#### Returns

`number`

The dual index.

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelDistributionHelper.ts:187

___

### <a id="chunkindices" name="chunkindices"></a> chunkIndices

▸ **chunkIndices**(`from`, `to`, `maxOffersInChunk`): \{ `from`: `number` ; `to`: `number`  }[]

Splits a range of indices into chunks according to the maximum number of offers in a single chunk.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `from` | `number` | The start of the range. |
| `to` | `number` | The end of the range. |
| `maxOffersInChunk` | `number` | The maximum number of offers in a single chunk. |

#### Returns

\{ `from`: `number` ; `to`: `number`  }[]

The chunks.

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelDistributionHelper.ts:215

___

### <a id="chunkindicesaroundmiddle" name="chunkindicesaroundmiddle"></a> chunkIndicesAroundMiddle

▸ **chunkIndicesAroundMiddle**(`from`, `to`, `maxOffersInChunk`, `middle?`): \{ `from`: `number` ; `to`: `number`  }[]

Splits a range of indices into chunks starting from the middle index according to the maximum number of offers in a single chunk.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `from` | `number` | The start of the range. |
| `to` | `number` | The end of the range. |
| `maxOffersInChunk` | `number` | The maximum number of offers in a single chunk. |
| `middle?` | `number` | The middle to split around; typically the index of the first ask in the distribution; if not provided, the midpoint between from and to is used. |

#### Returns

\{ `from`: `number` ; `to`: `number`  }[]

The chunks.

**`Dev`**

Since each chunk should contain pairs of offers and their duals the returned chunks will each have size less than maxOffersInChunk/2.

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelDistributionHelper.ts:234

___

### <a id="getrequiredprovision" name="getrequiredprovision"></a> getRequiredProvision

▸ **getRequiredProvision**(`params`): `Promise`<`Big`\>

Determines the required provision for the offers in the distribution.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | The parameters used to calculate the provision. |
| `params.market` | [`Market`](Market.md) | The market to get provisions for bids and asks from. |
| `params.gasreq` | `number` | The gas required to execute a trade. |
| `params.gasprice` | `number` | The gas price to calculate provision for. |
| `params.bidCount` | `number` | The number of bids to calculate provision for. |
| `params.askCount` | `number` | The number of asks to calculate provision for. |

#### Returns

`Promise`<`Big`\>

The provision required for the number of offers.

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelDistributionHelper.ts:294
