---
id: "LiquidityProvider"
title: "Class: LiquidityProvider"
sidebar_label: "LiquidityProvider"
sidebar_position: 0
custom_edit_url: null
---

The LiquidityProvider class connects an offerLogic (or an EOA) to a market.
It posts onchain offers.

## Properties

### <a id="mgv" name="mgv"></a> mgv

• **mgv**: [`Mangrove`](Mangrove.md)

#### Defined in

@mangrovedao/mangrove.js/src/liquidityProvider.ts:57

___

### <a id="logic" name="logic"></a> logic

• `Optional` **logic**: [`OfferLogic`](OfferLogic.md)

#### Defined in

@mangrovedao/mangrove.js/src/liquidityProvider.ts:58

___

### <a id="contract" name="contract"></a> contract

• `Optional` **contract**: `ILiquidityProvider`

#### Defined in

@mangrovedao/mangrove.js/src/liquidityProvider.ts:59

___

### <a id="eoa" name="eoa"></a> eoa

• `Optional` **eoa**: `string`

#### Defined in

@mangrovedao/mangrove.js/src/liquidityProvider.ts:60

___

### <a id="market" name="market"></a> market

• **market**: [`Market`](Market.md)

#### Defined in

@mangrovedao/mangrove.js/src/liquidityProvider.ts:61

___

### <a id="prettyp" name="prettyp"></a> prettyP

• **prettyP**: `PrettyPrint`

#### Defined in

@mangrovedao/mangrove.js/src/liquidityProvider.ts:62

___

### <a id="gasreq" name="gasreq"></a> gasreq

• **gasreq**: `number`

#### Defined in

@mangrovedao/mangrove.js/src/liquidityProvider.ts:63

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new LiquidityProvider**(`p`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `p` | [`ConstructionParams`](../namespaces/LiquidityProvider-1.md#constructionparams) |

#### Defined in

@mangrovedao/mangrove.js/src/liquidityProvider.ts:65

## Methods

### <a id="connect" name="connect"></a> connect

▸ `Static` **connect**(`offerLogic`, `p`): `Promise`<[`LiquidityProvider`](LiquidityProvider.md)\>

Connects the logic to a Market in order to pass market orders. This assumes the underlying contract of offer logic is an ILiquidityProvider.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `offerLogic` | [`OfferLogic`](OfferLogic.md) | The offer logic. |
| `p` | [`Market`](Market.md) \| { `base`: `string` ; `quote`: `string` ; `bookOptions?`: [`BookOptions`](../namespaces/Market-1.md#bookoptions)  } | The market to connect to. Can be a Market object or a market descriptor. |

#### Returns

`Promise`<[`LiquidityProvider`](LiquidityProvider.md)\>

A LiquidityProvider.

#### Defined in

@mangrovedao/mangrove.js/src/liquidityProvider.ts:90

___

### <a id="computeofferprovision" name="computeofferprovision"></a> computeOfferProvision

▸ **computeOfferProvision**(`ba`, `opts?`): `Promise`<`Big`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ba` | [`BA`](../namespaces/Market-1.md#ba) |
| `opts` | `Object` |
| `opts.id?` | `number` |
| `opts.gasreq?` | `number` |
| `opts.gasprice?` | `number` |

#### Returns

`Promise`<`Big`\>

#### Defined in

@mangrovedao/mangrove.js/src/liquidityProvider.ts:117

___

### <a id="computebidprovision" name="computebidprovision"></a> computeBidProvision

▸ **computeBidProvision**(`opts?`): `Promise`<`Big`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `Object` |
| `opts.id?` | `number` |
| `opts.gasreq?` | `number` |
| `opts.gasprice?` | `number` |

#### Returns

`Promise`<`Big`\>

#### Defined in

@mangrovedao/mangrove.js/src/liquidityProvider.ts:124

___

### <a id="computeaskprovision" name="computeaskprovision"></a> computeAskProvision

▸ **computeAskProvision**(`opts?`): `Promise`<`Big`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `Object` |
| `opts.id?` | `number` |
| `opts.gasreq?` | `number` |
| `opts.gasprice?` | `number` |

#### Returns

`Promise`<`Big`\>

#### Defined in

@mangrovedao/mangrove.js/src/liquidityProvider.ts:130

___

### <a id="getbidpivotid" name="getbidpivotid"></a> getBidPivotId

▸ **getBidPivotId**(`price`): `Promise`<`number`\>

Given a price, find the id of the immediately-better offer in the
semibook. If there is no offer with a better price, `undefined` is returned.

#### Parameters

| Name | Type |
| :------ | :------ |
| `price` | `any` |

#### Returns

`Promise`<`number`\>

#### Defined in

@mangrovedao/mangrove.js/src/liquidityProvider.ts:139

___

### <a id="getaskpivotid" name="getaskpivotid"></a> getAskPivotId

▸ **getAskPivotId**(`price`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `price` | `any` |

#### Returns

`Promise`<`number`\>

#### Defined in

@mangrovedao/mangrove.js/src/liquidityProvider.ts:144

___

### <a id="asks" name="asks"></a> asks

▸ **asks**(): [`Offer`](../namespaces/Market-1.md#offer)[]

List all of the maker's asks in the cache

#### Returns

[`Offer`](../namespaces/Market-1.md#offer)[]

#### Defined in

@mangrovedao/mangrove.js/src/liquidityProvider.ts:150

___

### <a id="bids" name="bids"></a> bids

▸ **bids**(): [`Offer`](../namespaces/Market-1.md#offer)[]

List all of the maker's bids in the cache

#### Returns

[`Offer`](../namespaces/Market-1.md#offer)[]

#### Defined in

@mangrovedao/mangrove.js/src/liquidityProvider.ts:160

___

### <a id="consoleasks" name="consoleasks"></a> consoleAsks

▸ **consoleAsks**(`filter?`): `void`

Pretty prints the current state of the asks for the maker

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter?` | `prettyPrintFilter` |

#### Returns

`void`

#### Defined in

@mangrovedao/mangrove.js/src/liquidityProvider.ts:170

___

### <a id="consolebids" name="consolebids"></a> consoleBids

▸ **consoleBids**(`filter?`): `void`

Pretty prints the current state of the bids for the maker

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter?` | `prettyPrintFilter` |

#### Returns

`void`

#### Defined in

@mangrovedao/mangrove.js/src/liquidityProvider.ts:175

___

### <a id="normalizeofferparams" name="normalizeofferparams"></a> normalizeOfferParams

▸ `Static` **normalizeOfferParams**(`p`): `Object`

Given offer params (bids/asks + price info as wants&gives or price&volume),
 return {price,wants,gives}

#### Parameters

| Name | Type |
| :------ | :------ |
| `p` | `Object` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `price` | `Big` |
| `wants` | `Big` |
| `gives` | `Big` |
| `gasreq?` | `number` |
| `gasprice?` | `number` |
| `fund?` | `any` |

#### Defined in

@mangrovedao/mangrove.js/src/liquidityProvider.ts:183

___

### <a id="optvaluetopayableoverride" name="optvaluetopayableoverride"></a> optValueToPayableOverride

▸ `Static` **optValueToPayableOverride**(`overrides`, `fund?`): `PayableOverrides`

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides` | `Overrides` |
| `fund?` | `any` |

#### Returns

`PayableOverrides`

#### Defined in

@mangrovedao/mangrove.js/src/liquidityProvider.ts:214

___

### <a id="newask" name="newask"></a> newAsk

▸ **newAsk**(`p`, `overrides?`): `Promise`<{ `id`: `number` ; `event`: `Log`  }\>

Post a new ask

#### Parameters

| Name | Type |
| :------ | :------ |
| `p` | [`OfferParams`](../namespaces/LiquidityProvider-1.md#offerparams) |
| `overrides` | `Overrides` |

#### Returns

`Promise`<{ `id`: `number` ; `event`: `Log`  }\>

#### Defined in

@mangrovedao/mangrove.js/src/liquidityProvider.ts:226

___

### <a id="newbid" name="newbid"></a> newBid

▸ **newBid**(`p`, `overrides?`): `Promise`<{ `id`: `number` ; `event`: `Log`  }\>

Post a new bid

#### Parameters

| Name | Type |
| :------ | :------ |
| `p` | [`OfferParams`](../namespaces/LiquidityProvider-1.md#offerparams) |
| `overrides` | `Overrides` |

#### Returns

`Promise`<{ `id`: `number` ; `event`: `Log`  }\>

#### Defined in

@mangrovedao/mangrove.js/src/liquidityProvider.ts:234

___

### <a id="newoffer" name="newoffer"></a> newOffer

▸ **newOffer**(`p`, `overrides?`): `Promise`<{ `id`: `number` ; `pivot`: `number` ; `event`: `Log`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `p` | `Object` |
| `overrides` | `Overrides` |

#### Returns

`Promise`<{ `id`: `number` ; `pivot`: `number` ; `event`: `Log`  }\>

#### Defined in

@mangrovedao/mangrove.js/src/liquidityProvider.ts:255

___

### <a id="updateask" name="updateask"></a> updateAsk

▸ **updateAsk**(`id`, `p`, `overrides?`): `Promise`<{ `event`: `Log`  }\>

to change volume and price of the offer, and update its gas requirement and fund 0.01 ether to maker balance

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |
| `p` | [`OfferParams`](../namespaces/LiquidityProvider-1.md#offerparams) |
| `overrides` | `PayableOverrides` |

#### Returns

`Promise`<{ `event`: `Log`  }\>

#### Defined in

@mangrovedao/mangrove.js/src/liquidityProvider.ts:344

___

### <a id="updatebid" name="updatebid"></a> updateBid

▸ **updateBid**(`id`, `p`, `overrides?`): `Promise`<{ `event`: `Log`  }\>

Update an existing offer

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |
| `p` | [`OfferParams`](../namespaces/LiquidityProvider-1.md#offerparams) |
| `overrides` | `PayableOverrides` |

#### Returns

`Promise`<{ `event`: `Log`  }\>

#### Defined in

@mangrovedao/mangrove.js/src/liquidityProvider.ts:353

___

### <a id="updateoffer" name="updateoffer"></a> updateOffer

▸ **updateOffer**(`id`, `p`, `overrides?`): `Promise`<{ `event`: `Log`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |
| `p` | `Object` |
| `overrides` | `PayableOverrides` |

#### Returns

`Promise`<{ `event`: `Log`  }\>

#### Defined in

@mangrovedao/mangrove.js/src/liquidityProvider.ts:365

___

### <a id="retractask" name="retractask"></a> retractAsk

▸ **retractAsk**(`id`, `deprovision?`, `overrides?`): `Promise`<`void`\>

Cancel an ask. If deprovision is true, will return the offer's provision to the maker balance at Mangrove.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `id` | `number` | `undefined` |
| `deprovision` | `boolean` | `false` |
| `overrides` | `Overrides` | `{}` |

#### Returns

`Promise`<`void`\>

#### Defined in

@mangrovedao/mangrove.js/src/liquidityProvider.ts:432

___

### <a id="retractbid" name="retractbid"></a> retractBid

▸ **retractBid**(`id`, `deprovision?`, `overrides?`): `Promise`<`void`\>

Cancel a bid. If deprovision is true, will return the offer's provision to the maker balance at Mangrove.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `id` | `number` | `undefined` |
| `deprovision` | `boolean` | `false` |
| `overrides` | `Overrides` | `{}` |

#### Returns

`Promise`<`void`\>

#### Defined in

@mangrovedao/mangrove.js/src/liquidityProvider.ts:441

___

### <a id="retractoffer" name="retractoffer"></a> retractOffer

▸ **retractOffer**(`ba`, `id`, `deprovision?`, `overrides?`): `Promise`<`void`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `ba` | [`BA`](../namespaces/Market-1.md#ba) | `undefined` |
| `id` | `number` | `undefined` |
| `deprovision` | `boolean` | `false` |
| `overrides` | `Overrides` | `{}` |

#### Returns

`Promise`<`void`\>

#### Defined in

@mangrovedao/mangrove.js/src/liquidityProvider.ts:450

___

### <a id="approveasks" name="approveasks"></a> approveAsks

▸ **approveAsks**(`arg?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg` | `any` |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

@mangrovedao/mangrove.js/src/liquidityProvider.ts:497

___

### <a id="approvebids" name="approvebids"></a> approveBids

▸ **approveBids**(`arg?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg` | `any` |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

@mangrovedao/mangrove.js/src/liquidityProvider.ts:500

___

### <a id="getmissingprovision" name="getmissingprovision"></a> getMissingProvision

▸ **getMissingProvision**(`ba`, `opts?`): `Promise`<`Big`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ba` | [`BA`](../namespaces/Market-1.md#ba) |
| `opts` | `Object` |
| `opts.id?` | `number` |
| `opts.gasreq?` | `number` |
| `opts.gasprice?` | `number` |

#### Returns

`Promise`<`Big`\>

#### Defined in

@mangrovedao/mangrove.js/src/liquidityProvider.ts:504
