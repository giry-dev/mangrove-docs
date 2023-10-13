---
id: "KandelFarm"
title: "Class: KandelFarm"
sidebar_label: "KandelFarm"
sidebar_position: 0
custom_edit_url: null
---

**`Title`**

Repository for Kandel instances.

## Properties

### <a id="mgv" name="mgv"></a> mgv

• **mgv**: [`Mangrove`](Mangrove.md)

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelFarm.ts:11

___

### <a id="tradeeventmanagement" name="tradeeventmanagement"></a> tradeEventManagement

• **tradeEventManagement**: `TradeEventManagement`

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelFarm.ts:12

___

### <a id="aavekandelseeder" name="aavekandelseeder"></a> aaveKandelSeeder

• **aaveKandelSeeder**: `AaveKandelSeeder`

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelFarm.ts:14

___

### <a id="kandelseeder" name="kandelseeder"></a> kandelSeeder

• **kandelSeeder**: `KandelSeeder`

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelFarm.ts:15

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new KandelFarm**(`mgv`)

Constructor

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mgv` | [`Mangrove`](Mangrove.md) | The Mangrove to get kandels for. |

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelFarm.ts:20

## Methods

### <a id="getkandels" name="getkandels"></a> getKandels

▸ **getKandels**(`filter?`): `Promise`<{ `kandelAddress`: `string` = x.args.kandel; `ownerAddress`: `string` = x.args.owner; `onAave`: `boolean` = false; `baseAddress`: `string` = baseToken.address; `base`: `undefined` \| [`MgvToken`](MgvToken.md) = baseToken.token; `quoteAddress`: `string` = quoteToken.address; `quote`: `undefined` \| [`MgvToken`](MgvToken.md) = quoteToken.token }[]\>

Gets all Kandels matching a given filter.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filter?` | `Object` | The filter to apply. |
| `filter.owner?` | ``null`` \| `PromiseOrValue`<`string`\> | The Kandel instance owner - the one who invoked sow. |
| `filter.base?` | ``null`` \| `PromiseOrValue`<`string`\> | The base token for the Kandel instance. |
| `filter.quote?` | ``null`` \| `PromiseOrValue`<`string`\> | The quote token for the Kandel instance. |
| `filter.onAave?` | `boolean` | Whether the Kandel instance uses the Aave router. |

#### Returns

`Promise`<{ `kandelAddress`: `string` = x.args.kandel; `ownerAddress`: `string` = x.args.owner; `onAave`: `boolean` = false; `baseAddress`: `string` = baseToken.address; `base`: `undefined` \| [`MgvToken`](MgvToken.md) = baseToken.token; `quoteAddress`: `string` = quoteToken.address; `quote`: `undefined` \| [`MgvToken`](MgvToken.md) = quoteToken.token }[]\>

All kandels matching the filter.

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelFarm.ts:51
