---
id: "LiquidityProvider"
title: "Class: LiquidityProvider"
sidebar_label: "LiquidityProvider"
sidebar_position: 0
custom_edit_url: null
---

The LiquidityProvider class connects an offerLogic (or an EOA) to a market.
It posts onchain offers.

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new LiquidityProvider**(`p`): [`LiquidityProvider`](LiquidityProvider.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `p` | [`ConstructionParams`](../namespaces/LiquidityProvider-1.md#constructionparams) |

#### Returns

[`LiquidityProvider`](LiquidityProvider.md)

#### Defined in

@mangrovedao/mangrove.js/src/liquidityProvider.ts:63

## Properties

### <a id="mgv" name="mgv"></a> mgv

• **mgv**: [`Mangrove`](Mangrove.md)

#### Defined in

@mangrovedao/mangrove.js/src/liquidityProvider.ts:54

___

### <a id="logic" name="logic"></a> logic

• `Optional` **logic**: [`OfferLogic`](OfferLogic.md)

#### Defined in

@mangrovedao/mangrove.js/src/liquidityProvider.ts:55

___

### <a id="contract" name="contract"></a> contract

• `Optional` **contract**: `ILiquidityProvider`

#### Defined in

@mangrovedao/mangrove.js/src/liquidityProvider.ts:56

___

### <a id="eoa" name="eoa"></a> eoa

• `Optional` **eoa**: `string`

#### Defined in

@mangrovedao/mangrove.js/src/liquidityProvider.ts:57

___

### <a id="market" name="market"></a> market

• **market**: [`Market`](Market.md)

#### Defined in

@mangrovedao/mangrove.js/src/liquidityProvider.ts:58

___

### <a id="prettyp" name="prettyp"></a> prettyP

• **prettyP**: `PrettyPrint`

#### Defined in

@mangrovedao/mangrove.js/src/liquidityProvider.ts:59

___

### <a id="gasreq" name="gasreq"></a> gasreq

• **gasreq**: `number`

#### Defined in

@mangrovedao/mangrove.js/src/liquidityProvider.ts:60

___

### <a id="trade" name="trade"></a> trade

• **trade**: [`Trade`](Trade.md)

#### Defined in

@mangrovedao/mangrove.js/src/liquidityProvider.ts:61

## Methods

### <a id="connect" name="connect"></a> connect

▸ **connect**(`offerLogic`, `offerGasreq`, `p`): `Promise`<[`LiquidityProvider`](LiquidityProvider.md)\>

Connects the logic to a Market in order to pass market orders. This assumes the underlying contract of offer logic is an ILiquidityProvider.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `offerLogic` | [`OfferLogic`](OfferLogic.md) | The offer logic. |
| `offerGasreq` | `number` | The gas required for the offer execution on the offer logic. |
| `p` | [`Market`](Market.md) \| \{ `base`: `string` ; `quote`: `string` ; `tickSpacing`: `number` ; `bookOptions?`: [`BookOptions`](../namespaces/Market-1.md#bookoptions)  } | The market to connect to. Can be a Market object or a market descriptor. |

#### Returns

`Promise`<[`LiquidityProvider`](LiquidityProvider.md)\>

A LiquidityProvider.

#### Defined in

@mangrovedao/mangrove.js/src/liquidityProvider.ts:89

___

### <a id="computeofferprovision" name="computeofferprovision"></a> computeOfferProvision

▸ **computeOfferProvision**(`ba`, `opts?`): `Promise`<`Big`\>

Gets the missing provision in ethers for an offer to be posted or updated with the given parameters, while taking already locked provision into account.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ba` | [`BA`](../namespaces/Market-1.md#ba) | bids or asks |
| `opts` | `Object` | optional parameters for the calculation. |
| `opts.id?` | `number` | the id of the offer to update. If undefined, then the offer is a new offer and nothing is locked. |
| `opts.gasreq?` | `number` | gas required for the offer execution. If undefined, the liquidity provider's gasreq. |
| `opts.gasprice?` | `number` | gas price to use for the calculation. If undefined, then Mangrove's current gas price is used. |

#### Returns

`Promise`<`Big`\>

the additional required provision, in ethers.

#### Defined in

@mangrovedao/mangrove.js/src/liquidityProvider.ts:126

___

### <a id="computebidprovision" name="computebidprovision"></a> computeBidProvision

▸ **computeBidProvision**(`opts?`): `Promise`<`Big`\>

Gets the missing provision in ethers for a bid using [computeOfferProvision](LiquidityProvider.md#computeofferprovision).

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

@mangrovedao/mangrove.js/src/liquidityProvider.ts:156

___

### <a id="computeaskprovision" name="computeaskprovision"></a> computeAskProvision

▸ **computeAskProvision**(`opts?`): `Promise`<`Big`\>

Gets the missing provision in ethers for an ask using [computeOfferProvision](LiquidityProvider.md#computeofferprovision).

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

@mangrovedao/mangrove.js/src/liquidityProvider.ts:163

___

### <a id="asks" name="asks"></a> asks

▸ **asks**(): [`Offer`](../namespaces/Market-1.md#offer)[]

List all of the maker's asks in the cache

#### Returns

[`Offer`](../namespaces/Market-1.md#offer)[]

#### Defined in

@mangrovedao/mangrove.js/src/liquidityProvider.ts:170

___

### <a id="bids" name="bids"></a> bids

▸ **bids**(): [`Offer`](../namespaces/Market-1.md#offer)[]

List all of the maker's bids in the cache

#### Returns

[`Offer`](../namespaces/Market-1.md#offer)[]

#### Defined in

@mangrovedao/mangrove.js/src/liquidityProvider.ts:180

___

### <a id="consoleasks" name="consoleasks"></a> consoleAsks

▸ **consoleAsks**(`filter?`): `void`

Pretty prints the current state of the asks for the maker

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter?` | [`prettyPrintFilter`](../modules.md#prettyprintfilter) |

#### Returns

`void`

#### Defined in

@mangrovedao/mangrove.js/src/liquidityProvider.ts:190

___

### <a id="consolebids" name="consolebids"></a> consoleBids

▸ **consoleBids**(`filter?`): `void`

Pretty prints the current state of the bids for the maker

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter?` | [`prettyPrintFilter`](../modules.md#prettyprintfilter) |

#### Returns

`void`

#### Defined in

@mangrovedao/mangrove.js/src/liquidityProvider.ts:195

___

### <a id="normalizeofferparams" name="normalizeofferparams"></a> normalizeOfferParams

▸ **normalizeOfferParams**(`p`, `market`): `Object`

Given offer params (bids/asks + price info as wants&gives or price&volume),
 return `{tick,gives,fund}`

#### Parameters

| Name | Type |
| :------ | :------ |
| `p` | \{ `ba`: [`BA`](../namespaces/Market-1.md#ba)  } & [`OfferParams`](../namespaces/LiquidityProvider-1.md#offerparams) |
| `market` | [`KeyResolvedForCalculation`](../namespaces/Market-1.md#keyresolvedforcalculation) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `tick` | `number` |
| `gives` | `Big` |
| `fund?` | `BigSource` |

#### Defined in

@mangrovedao/mangrove.js/src/liquidityProvider.ts:203

___

### <a id="newask" name="newask"></a> newAsk

▸ **newAsk**(`p`, `overrides?`): `Promise`<\{ `id`: `number` ; `event`: `Log`  }\>

Post a new ask

#### Parameters

| Name | Type |
| :------ | :------ |
| `p` | [`OfferParams`](../namespaces/LiquidityProvider-1.md#offerparams) |
| `overrides` | `Overrides` |

#### Returns

`Promise`<\{ `id`: `number` ; `event`: `Log`  }\>

#### Defined in

@mangrovedao/mangrove.js/src/liquidityProvider.ts:238

___

### <a id="newbid" name="newbid"></a> newBid

▸ **newBid**(`p`, `overrides?`): `Promise`<\{ `id`: `number` ; `event`: `Log`  }\>

Post a new bid

#### Parameters

| Name | Type |
| :------ | :------ |
| `p` | [`OfferParams`](../namespaces/LiquidityProvider-1.md#offerparams) |
| `overrides` | `Overrides` |

#### Returns

`Promise`<\{ `id`: `number` ; `event`: `Log`  }\>

#### Defined in

@mangrovedao/mangrove.js/src/liquidityProvider.ts:246

___

### <a id="newoffer" name="newoffer"></a> newOffer

▸ **newOffer**(`p`, `overrides?`): `Promise`<\{ `id`: `number` ; `event`: `Log`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `p` | \{ `ba`: [`BA`](../namespaces/Market-1.md#ba)  } & [`OfferParams`](../namespaces/LiquidityProvider-1.md#offerparams) |
| `overrides` | `Overrides` |

#### Returns

`Promise`<\{ `id`: `number` ; `event`: `Log`  }\>

#### Defined in

@mangrovedao/mangrove.js/src/liquidityProvider.ts:267

___

### <a id="updateask" name="updateask"></a> updateAsk

▸ **updateAsk**(`id`, `p`, `overrides?`): `Promise`<\{ `event`: `Log`  }\>

to change volume and price of the offer, and update its gas requirement and fund 0.01 ether to maker balance

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |
| `p` | [`OfferParams`](../namespaces/LiquidityProvider-1.md#offerparams) |
| `overrides` | `PayableOverrides` |

#### Returns

`Promise`<\{ `event`: `Log`  }\>

#### Defined in

@mangrovedao/mangrove.js/src/liquidityProvider.ts:353

___

### <a id="updatebid" name="updatebid"></a> updateBid

▸ **updateBid**(`id`, `p`, `overrides?`): `Promise`<\{ `event`: `Log`  }\>

Update an existing offer

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |
| `p` | [`OfferParams`](../namespaces/LiquidityProvider-1.md#offerparams) |
| `overrides` | `PayableOverrides` |

#### Returns

`Promise`<\{ `event`: `Log`  }\>

#### Defined in

@mangrovedao/mangrove.js/src/liquidityProvider.ts:362

___

### <a id="updateoffer" name="updateoffer"></a> updateOffer

▸ **updateOffer**(`id`, `p`, `overrides?`): `Promise`<\{ `event`: `Log`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |
| `p` | \{ `ba`: [`BA`](../namespaces/Market-1.md#ba)  } & [`OfferParams`](../namespaces/LiquidityProvider-1.md#offerparams) |
| `overrides` | `PayableOverrides` |

#### Returns

`Promise`<\{ `event`: `Log`  }\>

#### Defined in

@mangrovedao/mangrove.js/src/liquidityProvider.ts:374

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

@mangrovedao/mangrove.js/src/liquidityProvider.ts:443

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

@mangrovedao/mangrove.js/src/liquidityProvider.ts:452

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

@mangrovedao/mangrove.js/src/liquidityProvider.ts:461
