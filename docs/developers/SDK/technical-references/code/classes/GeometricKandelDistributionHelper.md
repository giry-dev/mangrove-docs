---
id: "GeometricKandelDistributionHelper"
title: "Class: GeometricKandelDistributionHelper"
sidebar_label: "GeometricKandelDistributionHelper"
sidebar_position: 0
custom_edit_url: null
---

**`Title`**

Helper for handling geometric Kandel offer distributions.

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new GeometricKandelDistributionHelper**(`market`): [`GeometricKandelDistributionHelper`](GeometricKandelDistributionHelper.md)

Constructor

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `market` | [`KeyResolvedForCalculation`](../namespaces/Market-1.md#keyresolvedforcalculation) | The key data about the market. |

#### Returns

[`GeometricKandelDistributionHelper`](GeometricKandelDistributionHelper.md)

#### Defined in

@mangrovedao/mangrove.js/src/kandel/geometricKandel/geometricKandelDistributionHelper.ts:55

## Properties

### <a id="helper" name="helper"></a> helper

• **helper**: [`KandelDistributionHelper`](KandelDistributionHelper.md)

#### Defined in

@mangrovedao/mangrove.js/src/kandel/geometricKandel/geometricKandelDistributionHelper.ts:50

## Methods

### <a id="getbasequoteticksfromtick" name="getbasequoteticksfromtick"></a> getBaseQuoteTicksFromTick

▸ **getBaseQuoteTicksFromTick**(`offerType`, `index`, `tickAtIndex`, `baseQuoteTickOffset`, `pricePoints`): `number`[]

Gets the ticks for the geometric distribution based on a single known tick at an index.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `offerType` | [`BA`](../namespaces/Market-1.md#ba) | The offer type. |
| `index` | `number` | The index of the known price. |
| `tickAtIndex` | `number` | The known tick (the tick price of base per quote for bids and quote per base for asks). |
| `baseQuoteTickOffset` | `number` | The offset in ticks between two price points of the geometric distribution. |
| `pricePoints` | `number` | The number of price points in the distribution. |

#### Returns

`number`[]

The quote per base ticks in the distribution.

#### Defined in

@mangrovedao/mangrove.js/src/kandel/geometricKandel/geometricKandelDistributionHelper.ts:67

___

### <a id="calculatebasequotetickoffset" name="calculatebasequotetickoffset"></a> calculateBaseQuoteTickOffset

▸ **calculateBaseQuoteTickOffset**(`priceRatio`): `number`

Calculates the base quote tick offset closely corresponding to the given ratio.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `priceRatio` | `Big` | the price ratio. |

#### Returns

`number`

The base quote tick offset.

#### Defined in

@mangrovedao/mangrove.js/src/kandel/geometricKandel/geometricKandelDistributionHelper.ts:94

___

### <a id="getpriceratiofrombasequoteoffset" name="getpriceratiofrombasequoteoffset"></a> getPriceRatioFromBaseQuoteOffset

▸ **getPriceRatioFromBaseQuoteOffset**(`baseQuoteTickOffset`): `Big`

Gets the price ratio given by the baseQuoteTickOffset.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `baseQuoteTickOffset` | `number` | The base quote tick offset. |

#### Returns

`Big`

The price ratio.

#### Defined in

@mangrovedao/mangrove.js/src/kandel/geometricKandel/geometricKandelDistributionHelper.ts:116

___

### <a id="gettickdistributionparams" name="gettickdistributionparams"></a> getTickDistributionParams

▸ **getTickDistributionParams**(`params`): `Object`

Gets tick based parameters for a distribution based on tick or price params.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Omit`<[`DistributionParams`](../modules.md#distributionparams), ``"generateFromMid"``\> | The distribution parameters, see [DistributionParams](../modules.md#distributionparams) |

#### Returns

`Object`

The tick based parameters, see [TickDistributionParams](../modules.md#tickdistributionparams)

| Name | Type |
| :------ | :------ |
| `minBaseQuoteTick` | `number` |
| `baseQuoteTickOffset` | `number` |
| `midBaseQuoteTick` | `number` |
| `pricePoints` | `number` |

#### Defined in

@mangrovedao/mangrove.js/src/kandel/geometricKandel/geometricKandelDistributionHelper.ts:129
