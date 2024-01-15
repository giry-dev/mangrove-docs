---
id: "TradeEventManagement"
title: "Class: TradeEventManagement"
sidebar_label: "TradeEventManagement"
sidebar_position: 0
custom_edit_url: null
---

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new TradeEventManagement**(): [`TradeEventManagement`](TradeEventManagement.md)

#### Returns

[`TradeEventManagement`](TradeEventManagement.md)

## Methods

### <a id="createcleansummaryfromevent" name="createcleansummaryfromevent"></a> createCleanSummaryFromEvent

▸ **createCleanSummaryFromEvent**(`event`): [`CleanSummary`](../namespaces/Market-1.md#cleansummary)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `CleanStartEvent` |

#### Returns

[`CleanSummary`](../namespaces/Market-1.md#cleansummary)

#### Defined in

@mangrovedao/mangrove.js/src/util/tradeEventManagement.ts:32

___

### <a id="createsummaryfromevent" name="createsummaryfromevent"></a> createSummaryFromEvent

▸ **createSummaryFromEvent**(`event`, `fillToken`): [`OrderSummary`](../namespaces/Market-1.md#ordersummary)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Object` |
| `event.args` | `Object` |
| `event.args.olKeyHash` | `string` |
| `event.args.taker` | `string` |
| `event.args.fillOrKill?` | `boolean` |
| `event.args.tick?` | `BigNumber` |
| `event.args.maxTick?` | `BigNumber` |
| `event.args.fillVolume` | `BigNumber` |
| `event.args.fillWants` | `boolean` |
| `event.args.restingOrder?` | `boolean` |
| `event.args.restingOrderId?` | `number` |
| `fillToken` | [`Token`](Token.md) |

#### Returns

[`OrderSummary`](../namespaces/Market-1.md#ordersummary)

#### Defined in

@mangrovedao/mangrove.js/src/util/tradeEventManagement.ts:40

___

### <a id="createsuccessfromevent" name="createsuccessfromevent"></a> createSuccessFromEvent

▸ **createSuccessFromEvent**(`evt`, `got`, `gave`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `evt` | `OfferSuccessEvent` |
| `got` | [`Token`](Token.md) |
| `gave` | [`Token`](Token.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `offerId` | `number` |
| `got` | `Big` |
| `gave` | `Big` |

#### Defined in

@mangrovedao/mangrove.js/src/util/tradeEventManagement.ts:77

___

### <a id="createtradefailurefromevent" name="createtradefailurefromevent"></a> createTradeFailureFromEvent

▸ **createTradeFailureFromEvent**(`evt`, `got`, `gave`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `evt` | `OfferFailEvent` |
| `got` | [`Token`](Token.md) |
| `gave` | [`Token`](Token.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `offerId` | `number` |
| `reason` | `string` |
| `FailToDeliver` | `Big` |
| `volumeGiven` | `Big` |
| `penalty` | `BigNumber` |

#### Defined in

@mangrovedao/mangrove.js/src/util/tradeEventManagement.ts:86

___

### <a id="createposthookfailurefromevent" name="createposthookfailurefromevent"></a> createPosthookFailureFromEvent

▸ **createPosthookFailureFromEvent**(`evt`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `evt` | `OfferFailWithPosthookDataEvent` \| `OfferSuccessWithPosthookDataEvent` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `offerId` | `number` |
| `reason` | `string` |

#### Defined in

@mangrovedao/mangrove.js/src/util/tradeEventManagement.ts:97

___

### <a id="createofferwritefromevent" name="createofferwritefromevent"></a> createOfferWriteFromEvent

▸ **createOfferWriteFromEvent**(`market`, `evt`): `undefined` \| \{ `ba`: [`BA`](../namespaces/Market-1.md#ba) ; `offer`: [`OfferSlim`](../namespaces/Market-1.md#offerslim)  }

#### Parameters

| Name | Type |
| :------ | :------ |
| `market` | [`Market`](Market.md) |
| `evt` | `OfferWriteEvent` |

#### Returns

`undefined` \| \{ `ba`: [`BA`](../namespaces/Market-1.md#ba) ; `offer`: [`OfferSlim`](../namespaces/Market-1.md#offerslim)  }

#### Defined in

@mangrovedao/mangrove.js/src/util/tradeEventManagement.ts:107

___

### <a id="createsummaryfromordersummaryevent" name="createsummaryfromordersummaryevent"></a> createSummaryFromOrderSummaryEvent

▸ **createSummaryFromOrderSummaryEvent**(`evt`, `fillToken`): [`OrderSummary`](../namespaces/Market-1.md#ordersummary)

#### Parameters

| Name | Type |
| :------ | :------ |
| `evt` | `MangroveOrderStartEvent` |
| `fillToken` | [`Token`](Token.md) |

#### Returns

[`OrderSummary`](../namespaces/Market-1.md#ordersummary)

#### Defined in

@mangrovedao/mangrove.js/src/util/tradeEventManagement.ts:135

___

### <a id="createrestingorderfromidandba" name="createrestingorderfromidandba"></a> createRestingOrderFromIdAndBA

▸ **createRestingOrderFromIdAndBA**(`ba`, `offerId`, `offerWrites`): `undefined` \| [`OfferSlim`](../namespaces/Market-1.md#offerslim)

#### Parameters

| Name | Type |
| :------ | :------ |
| `ba` | [`BA`](../namespaces/Market-1.md#ba) |
| `offerId` | `undefined` \| `number` |
| `offerWrites` | \{ `ba`: [`BA`](../namespaces/Market-1.md#ba) ; `offer`: [`OfferSlim`](../namespaces/Market-1.md#offerslim)  }[] |

#### Returns

`undefined` \| [`OfferSlim`](../namespaces/Market-1.md#offerslim)

#### Defined in

@mangrovedao/mangrove.js/src/util/tradeEventManagement.ts:156

___

### <a id="createpartialfillfunc" name="createpartialfillfunc"></a> createPartialFillFunc

▸ **createPartialFillFunc**(`fillWants`, `fillVolume`): (`takerGotWithFee`: `BigNumber`, `takerGave`: `BigNumber`) => `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fillWants` | `boolean` |
| `fillVolume` | `BigNumber` |

#### Returns

`fn`

▸ (`takerGotWithFee`, `takerGave`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `takerGotWithFee` | `BigNumber` |
| `takerGave` | `BigNumber` |

##### Returns

`boolean`

#### Defined in

@mangrovedao/mangrove.js/src/util/tradeEventManagement.ts:165

___

### <a id="resultofmangroveeventcore" name="resultofmangroveeventcore"></a> resultOfMangroveEventCore

▸ **resultOfMangroveEventCore**(`evt`, `ba`, `partialFillFunc`, `fillWants`, `result`, `market`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `evt` | `LogDescription` \| `Event` |
| `ba` | [`BA`](../namespaces/Market-1.md#ba) |
| `partialFillFunc` | (`takerGotWithFee`: `BigNumber`, `takerGave`: `BigNumber`) => `boolean` |
| `fillWants` | `boolean` |
| `result` | [`OrderResultWithOptionalSummary`](../modules.md#orderresultwithoptionalsummary) |
| `market` | [`Market`](Market.md) |

#### Returns

`void`

#### Defined in

@mangrovedao/mangrove.js/src/util/tradeEventManagement.ts:175

___

### <a id="resultofmangroveordereventcore" name="resultofmangroveordereventcore"></a> resultOfMangroveOrderEventCore

▸ **resultOfMangroveOrderEventCore**(`receipt`, `evt`, `ba`, `fillWants`, `result`, `market`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `receipt` | `ContractReceipt` |
| `evt` | `LogDescription` \| `Event` |
| `ba` | [`BA`](../namespaces/Market-1.md#ba) |
| `fillWants` | `boolean` |
| `result` | [`OrderResultWithOptionalSummary`](../modules.md#orderresultwithoptionalsummary) |
| `market` | [`Market`](Market.md) |

#### Returns

`void`

#### Defined in

@mangrovedao/mangrove.js/src/util/tradeEventManagement.ts:341

___

### <a id="getcontracteventsfromreceipt" name="getcontracteventsfromreceipt"></a> getContractEventsFromReceipt

▸ **getContractEventsFromReceipt**(`receipt`, `contract`): `Event`[] \| `LogDescription`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `receipt` | `ContractReceipt` |
| `contract` | `BaseContract` |

#### Returns

`Event`[] \| `LogDescription`[]

#### Defined in

@mangrovedao/mangrove.js/src/util/tradeEventManagement.ts:398

___

### <a id="processmangroveevents" name="processmangroveevents"></a> processMangroveEvents

▸ **processMangroveEvents**(`result`, `receipt`, `ba`, `fillWants`, `fillVolume`, `market`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `result` | [`OrderResultWithOptionalSummary`](../modules.md#orderresultwithoptionalsummary) |
| `receipt` | `ContractReceipt` |
| `ba` | [`BA`](../namespaces/Market-1.md#ba) |
| `fillWants` | `boolean` |
| `fillVolume` | `BigNumber` |
| `market` | [`Market`](Market.md) |

#### Returns

`void`

#### Defined in

@mangrovedao/mangrove.js/src/util/tradeEventManagement.ts:414

___

### <a id="processmangroveorderevents" name="processmangroveorderevents"></a> processMangroveOrderEvents

▸ **processMangroveOrderEvents**(`result`, `receipt`, `ba`, `fillWants`, `market`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `result` | [`OrderResultWithOptionalSummary`](../modules.md#orderresultwithoptionalsummary) |
| `receipt` | `ContractReceipt` |
| `ba` | [`BA`](../namespaces/Market-1.md#ba) |
| `fillWants` | `boolean` |
| `market` | [`Market`](Market.md) |

#### Returns

`void`

#### Defined in

@mangrovedao/mangrove.js/src/util/tradeEventManagement.ts:437

___

### <a id="isorderresult" name="isorderresult"></a> isOrderResult

▸ **isOrderResult**(`result`): result is OrderResult

#### Parameters

| Name | Type |
| :------ | :------ |
| `result` | [`OrderResultWithOptionalSummary`](../modules.md#orderresultwithoptionalsummary) |

#### Returns

result is OrderResult

#### Defined in

@mangrovedao/mangrove.js/src/util/tradeEventManagement.ts:459

___

### <a id="iscleanresult" name="iscleanresult"></a> isCleanResult

▸ **isCleanResult**(`result`): result is OrderResult

#### Parameters

| Name | Type |
| :------ | :------ |
| `result` | [`OrderResultWithOptionalSummary`](../modules.md#orderresultwithoptionalsummary) |

#### Returns

result is OrderResult

#### Defined in

@mangrovedao/mangrove.js/src/util/tradeEventManagement.ts:465
