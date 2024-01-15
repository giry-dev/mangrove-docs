---
id: "GeometricKandelLib"
title: "Class: GeometricKandelLib"
sidebar_label: "GeometricKandelLib"
sidebar_position: 0
custom_edit_url: null
---

**`Title`**

Management of a single Kandel instance.

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new GeometricKandelLib**(`params`): [`GeometricKandelLib`](GeometricKandelLib.md)

Creates a KandelLib object to perform static calls toward a KandelLib.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | The parameters used to create an instance. |
| `params.address` | `string` | The address of the KandelLib instance. |
| `params.signer` | `Signer` | The signer used to interact with the KandelLib instance. |
| `params.market` | [`KeyResolvedForCalculation`](../namespaces/Market-1.md#keyresolvedforcalculation) | The key data about the market. |
| `params.kandelLibInstance?` | `GeometricKandel` | A KandelLib instance to inject. If not provided, a new one will be created. |

#### Returns

[`GeometricKandelLib`](GeometricKandelLib.md)

A new KandelLib.

#### Defined in

@mangrovedao/mangrove.js/src/kandel/geometricKandel/geometricKandelLib.ts:22

## Properties

### <a id="kandellib" name="kandellib"></a> kandelLib

• **kandelLib**: `GeometricKandel`

#### Defined in

@mangrovedao/mangrove.js/src/kandel/geometricKandel/geometricKandelLib.ts:11

___

### <a id="market" name="market"></a> market

• **market**: [`KeyResolvedForCalculation`](../namespaces/Market-1.md#keyresolvedforcalculation)

#### Defined in

@mangrovedao/mangrove.js/src/kandel/geometricKandel/geometricKandelLib.ts:12

## Methods

### <a id="createpartialgeometricdistribution" name="createpartialgeometricdistribution"></a> createPartialGeometricDistribution

▸ **createPartialGeometricDistribution**(`params`): `Promise`<[`OfferDistribution`](../modules.md#offerdistribution)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `Object` |
| `params.from` | `number` |
| `params.to` | `number` |
| `params.baseQuoteTickIndex0` | `number` |
| `params.baseQuoteTickOffset` | `number` |
| `params.firstAskIndex` | `number` |
| `params.bidGives` | `undefined` \| `BigSource` |
| `params.askGives` | `undefined` \| `BigSource` |
| `params.pricePoints` | `number` |
| `params.stepSize` | `number` |

#### Returns

`Promise`<[`OfferDistribution`](../modules.md#offerdistribution)\>

#### Defined in

@mangrovedao/mangrove.js/src/kandel/geometricKandel/geometricKandelLib.ts:35

___

### <a id="createfullgeometricdistribution" name="createfullgeometricdistribution"></a> createFullGeometricDistribution

▸ **createFullGeometricDistribution**(`params`): `Promise`<[`GeometricKandelDistribution`](GeometricKandelDistribution.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `Object` |
| `params.baseQuoteTickIndex0` | `number` |
| `params.baseQuoteTickOffset` | `number` |
| `params.firstAskIndex` | `number` |
| `params.bidGives` | `undefined` \| `BigSource` |
| `params.askGives` | `undefined` \| `BigSource` |
| `params.pricePoints` | `number` |
| `params.stepSize` | `number` |

#### Returns

`Promise`<[`GeometricKandelDistribution`](GeometricKandelDistribution.md)\>

#### Defined in

@mangrovedao/mangrove.js/src/kandel/geometricKandel/geometricKandelLib.ts:84
