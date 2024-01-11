---
id: "KandelSeeder"
title: "Class: KandelSeeder"
sidebar_label: "KandelSeeder"
sidebar_position: 0
custom_edit_url: null
---

Seeder for creating Kandel instances on-chain.

## Properties

### <a id="mgv" name="mgv"></a> mgv

• **mgv**: [`Mangrove`](Mangrove.md)

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelSeeder.ts:27

___

### <a id="configuration" name="configuration"></a> configuration

• **configuration**: `KandelConfiguration`

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelSeeder.ts:28

___

### <a id="tradeeventmanagement" name="tradeeventmanagement"></a> tradeEventManagement

• **tradeEventManagement**: `TradeEventManagement`

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelSeeder.ts:29

___

### <a id="aavekandelseeder" name="aavekandelseeder"></a> aaveKandelSeeder

• **aaveKandelSeeder**: `AaveKandelSeeder`

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelSeeder.ts:31

___

### <a id="kandelseeder" name="kandelseeder"></a> kandelSeeder

• **kandelSeeder**: `KandelSeeder`

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelSeeder.ts:32

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new KandelSeeder**(`mgv`)

Constructor

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mgv` | [`Mangrove`](Mangrove.md) | The Mangrove to deploy to. |

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelSeeder.ts:37

## Methods

### <a id="sow" name="sow"></a> sow

▸ **sow**(`seed`, `overrides?`): `Promise`<[`Transaction`](../namespaces/Market-1.md#transaction)<[`GeometricKandelInstance`](GeometricKandelInstance.md)\>\>

Create a new Kandel instance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `seed` | `KandelSeed` | The parameters for sowing the Kandel instance. |
| `overrides` | `Overrides` | - |

#### Returns

`Promise`<[`Transaction`](../namespaces/Market-1.md#transaction)<[`GeometricKandelInstance`](GeometricKandelInstance.md)\>\>

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelSeeder.ts:62

___

### <a id="getkandelfromreceipt" name="getkandelfromreceipt"></a> getKandelFromReceipt

▸ **getKandelFromReceipt**(`params`): `Promise`<[`GeometricKandelInstance`](GeometricKandelInstance.md)\>

Gets the Kandel instance created in a transaction via sow.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | The parameters. |
| `params.receipt` | `ContractReceipt` | The receipt of the transaction. |
| `params.onAave` | `boolean` | Whether the Kandel is an AaveKandel. |
| `params.market` | [`Market`](Market.md) | The market the Kandel is for. |

#### Returns

`Promise`<[`GeometricKandelInstance`](GeometricKandelInstance.md)\>

The Kandel instance created in the transaction.

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelSeeder.ts:105

___

### <a id="getdefaultgasreq" name="getdefaultgasreq"></a> getDefaultGasreq

▸ **getDefaultGasreq**(`onAave`): `Promise`<`number`\>

Retrieves the default gasreq for the Kandel type.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `onAave` | `boolean` | Whether to get the gasreq for an AaveKandel or a standard Kandel. |

#### Returns

`Promise`<`number`\>

The gasreq for the Kandel type.

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelSeeder.ts:145

___

### <a id="getbufferedgasprice" name="getbufferedgasprice"></a> getBufferedGasprice

▸ **getBufferedGasprice**(`gaspriceFactor`, `gasprice?`): `Promise`<`number`\>

Retrieves the gasprice for the Kandel type multiplied by the buffer factor.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `gaspriceFactor` | `number` | The factor to multiply the gasprice by. This is used to ensure that the Kandel offers do not fail to be reposted even if Mangrove's gasprice increases up to this. |
| `gasprice?` | `number` | The gasprice (in Mwei) to use for the Kandel (before multiplying with the factor). If null, then Mangrove's global gasprice will be used. |

#### Returns

`Promise`<`number`\>

The gasprice for the Kandel type multiplied by the buffer factor.

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelSeeder.ts:159

___

### <a id="getrequiredprovision" name="getrequiredprovision"></a> getRequiredProvision

▸ **getRequiredProvision**(`seed`, `distribution`, `gaspriceFactor?`, `gasprice?`, `gasreq?`): `Promise`<`Big`\>

Determines the required provision for the distribution prior to sowing based on the number of price points.

**`Remarks`**

This takes into account that each price point can become both an ask and a bid which both require provision.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `seed` | `KandelSeed` | The parameters for sowing the Kandel instance. |
| `distribution` | [`KandelDistribution`](KandelDistribution.md) | The distribution to determine the provision for. |
| `gaspriceFactor?` | `number` | The factor to multiply the gasprice by. This is used to ensure that the Kandel offers do not fail to be reposted even if Mangrove's gasprice increases up to this. If null, then the default gaspriceFactor for the market will be used. |
| `gasprice?` | `number` | The gasprice (in Mwei) to use for the Kandel (before multiplying with the factor). If null, then Mangrove's global gasprice will be used. |
| `gasreq?` | `number` | The gasreq to use for the Kandel. If null, then the default gasreq for the Kandel type will be used. |

#### Returns

`Promise`<`Big`\>

The provision required for the distribution.

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelSeeder.ts:172

___

### <a id="getminimumvolume" name="getminimumvolume"></a> getMinimumVolume

▸ **getMinimumVolume**(`params`): `Promise`<`Big`\>

Determines the minimum recommended volume for an offer of the given type to avoid density issues.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | The parameters. |
| `params.market` | [`Market`](Market.md) | The market the Kandel is deployed to. |
| `params.offerType` | [`BA`](../namespaces/Market-1.md#ba) | The type of offer. |
| `params.onAave` | `boolean` | Whether the Kandel is an AaveKandel. |
| `params.factor?` | `number` | The factor to multiply the minimum volume by. Defaults to minimumBasePerOfferFactory / minimumQuotePerOfferFactor from KandelConfiguration. |

#### Returns

`Promise`<`Big`\>

The minimum recommended volume.

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelSeeder.ts:198

___

### <a id="getminimumvolumeforgasreq" name="getminimumvolumeforgasreq"></a> getMinimumVolumeForGasreq

▸ **getMinimumVolumeForGasreq**(`params`): `Big`

Determines the minimum recommended volume for an offer of the given type to avoid density issues.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | The parameters. |
| `params.market` | [`Market`](Market.md) | The market the Kandel is deployed to. |
| `params.offerType` | [`BA`](../namespaces/Market-1.md#ba) | The type of offer. |
| `params.factor?` | `number` | The factor to multiply the minimum volume by. Defaults to minimumBasePerOfferFactory / minimumQuotePerOfferFactor from KandelConfiguration. |
| `params.gasreq` | `number` | The gasreq to use. |

#### Returns

`Big`

The minimum recommended volume.

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelSeeder.ts:216
