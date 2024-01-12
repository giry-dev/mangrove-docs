---
id: "Semibook"
title: "Class: Semibook"
sidebar_label: "Semibook"
sidebar_position: 0
custom_edit_url: null
---

The Semibook is a data structure for maintaining a cache
of an offer list for one side (asks or bids) of a market.

While offer lists on-chain for a market A-B are symmetric (the offer lists are
the same for the market B-A), a `Semibook` depends on the market:

- Prices are in terms of quote tokens per base token
- Volumes are in terms of base tokens

## Hierarchy

- `StateLogSubscriber`<[`State`](../namespaces/Semibook-1.md#state), [`BookSubscriptionEvent`](../namespaces/Market-1.md#booksubscriptionevent)\>

  ↳ **`Semibook`**

## Implements

- `Iterable`<[`Offer`](../namespaces/Market-1.md#offer)\>

## Properties

### <a id="default_target_number_of_ticks" name="default_target_number_of_ticks"></a> DEFAULT\_TARGET\_NUMBER\_OF\_TICKS

▪ `Static` `Readonly` **DEFAULT\_TARGET\_NUMBER\_OF\_TICKS**: ``50``

#### Defined in

@mangrovedao/mangrove.js/src/semibook.ts:220

___

### <a id="default_chunk_size" name="default_chunk_size"></a> DEFAULT\_CHUNK\_SIZE

▪ `Static` `Readonly` **DEFAULT\_CHUNK\_SIZE**: ``50``

#### Defined in

@mangrovedao/mangrove.js/src/semibook.ts:221

___

### <a id="ba" name="ba"></a> ba

• `Readonly` **ba**: [`BA`](../namespaces/Market-1.md#ba)

#### Defined in

@mangrovedao/mangrove.js/src/semibook.ts:223

___

### <a id="market" name="market"></a> market

• `Readonly` **market**: [`Market`](Market.md)

#### Defined in

@mangrovedao/mangrove.js/src/semibook.ts:224

___

### <a id="tickpricehelper" name="tickpricehelper"></a> tickPriceHelper

• `Readonly` **tickPriceHelper**: [`TickPriceHelper`](TickPriceHelper.md)

#### Defined in

@mangrovedao/mangrove.js/src/semibook.ts:225

___

### <a id="options" name="options"></a> options

• `Readonly` **options**: [`ResolvedOptions`](../namespaces/Semibook-1.md#resolvedoptions)

#### Defined in

@mangrovedao/mangrove.js/src/semibook.ts:226

___

### <a id="trademanagement" name="trademanagement"></a> tradeManagement

• **tradeManagement**: `Trade`

#### Defined in

@mangrovedao/mangrove.js/src/semibook.ts:232

___

### <a id="optionsidentifier" name="optionsidentifier"></a> optionsIdentifier

• **optionsIdentifier**: `string`

#### Defined in

@mangrovedao/mangrove.js/src/semibook.ts:234

___

### <a id="olkey" name="olkey"></a> olKey

• **olKey**: `OLKeyStruct`

#### Defined in

@mangrovedao/mangrove.js/src/semibook.ts:235

___

### <a id="initializedat" name="initializedat"></a> initializedAt

• `Optional` **initializedAt**: `BlockWithoutParentHash`

#### Inherited from

StateLogSubscriber.initializedAt

#### Defined in

@mangrovedao/reliable-event-subscriber/dist/logSubscriber.d.ts:14

___

### <a id="lastseeneventblock" name="lastseeneventblock"></a> lastSeenEventBlock

• `Optional` **lastSeenEventBlock**: `BlockWithoutParentHash`

#### Inherited from

StateLogSubscriber.lastSeenEventBlock

#### Defined in

@mangrovedao/reliable-event-subscriber/dist/logSubscriber.d.ts:15

___

### <a id="cachelock" name="cachelock"></a> cacheLock

• `Protected` **cacheLock**: `Mutex`

#### Inherited from

StateLogSubscriber.cacheLock

#### Defined in

@mangrovedao/reliable-event-subscriber/dist/stateLogSubscriber.d.ts:12

## Methods

### <a id="connect" name="connect"></a> connect

▸ **connect**(`market`, `ba`, `eventListener`, `options`): `Promise`<[`Semibook`](Semibook.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `market` | [`Market`](Market.md) |
| `ba` | [`BA`](../namespaces/Market-1.md#ba) |
| `eventListener` | [`EventListener`](../namespaces/Semibook-1.md#eventlistener) |
| `options` | [`Options`](../namespaces/Semibook-1.md#options) |

#### Returns

`Promise`<[`Semibook`](Semibook.md)\>

#### Defined in

@mangrovedao/mangrove.js/src/semibook.ts:237

___

### <a id="copy" name="copy"></a> copy

▸ **copy**(`state`): [`State`](../namespaces/Semibook-1.md#state)

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`State`](../namespaces/Semibook-1.md#state) |

#### Returns

[`State`](../namespaces/Semibook-1.md#state)

#### Overrides

StateLogSubscriber.copy

#### Defined in

@mangrovedao/mangrove.js/src/semibook.ts:268

___

### <a id="addeventlistener" name="addeventlistener"></a> addEventListener

▸ **addEventListener**(`listener`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | [`EventListener`](../namespaces/Semibook-1.md#eventlistener) |

#### Returns

`void`

#### Defined in

@mangrovedao/mangrove.js/src/semibook.ts:316

___

### <a id="removeeventlistener" name="removeeventlistener"></a> removeEventListener

▸ **removeEventListener**(`listener`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | [`EventListener`](../namespaces/Semibook-1.md#eventlistener) |

#### Returns

`void`

#### Defined in

@mangrovedao/mangrove.js/src/semibook.ts:320

___

### <a id="requestofferlistprefix" name="requestofferlistprefix"></a> requestOfferListPrefix

▸ **requestOfferListPrefix**(`options`): `Promise`<[`Offer`](../namespaces/Market-1.md#offer)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`Options`](../namespaces/Semibook-1.md#options) |

#### Returns

`Promise`<[`Offer`](../namespaces/Market-1.md#offer)[]\>

#### Defined in

@mangrovedao/mangrove.js/src/semibook.ts:324

___

### <a id="offerinfo" name="offerinfo"></a> offerInfo

▸ **offerInfo**(`offerId`): `Promise`<[`Offer`](../namespaces/Market-1.md#offer)\>

Returns struct containing offer details in the current offer list

#### Parameters

| Name | Type |
| :------ | :------ |
| `offerId` | `number` |

#### Returns

`Promise`<[`Offer`](../namespaces/Market-1.md#offer)\>

#### Defined in

@mangrovedao/mangrove.js/src/semibook.ts:344

___

### <a id="config" name="config"></a> config

▸ **config**(): [`LocalConfig`](../namespaces/Mangrove-1.md#localconfig)

Return config local to a semibook.
Notes:
Amounts are converted to human readable numbers.
density is converted to public token units per gas used
fee *remains* in basis points of the token being bought

#### Returns

[`LocalConfig`](../namespaces/Mangrove-1.md#localconfig)

#### Defined in

@mangrovedao/mangrove.js/src/semibook.ts:374

___

### <a id="permit" name="permit"></a> permit

▸ **permit**(`data`): `Promise`<`ContractTransaction`\>

Sign permit data for buying outbound_tkn with spender's inbound_tkn
See mangrove.ts.

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Omit`<[`SimplePermitData`](../namespaces/Mangrove-1.md#simplepermitdata), ``"outbound_tkn"`` \| ``"inbound_tkn"``\> |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

@mangrovedao/mangrove.js/src/semibook.ts:396

___

### <a id="size" name="size"></a> size

▸ **size**(): `number`

Returns the number of offers in the cache.

#### Returns

`number`

#### Defined in

@mangrovedao/mangrove.js/src/semibook.ts:407

___

### <a id="getbestincache" name="getbestincache"></a> getBestInCache

▸ **getBestInCache**(): `undefined` \| `number`

Returns the id of the best offer in the cache

#### Returns

`undefined` \| `number`

#### Defined in

@mangrovedao/mangrove.js/src/semibook.ts:413

___

### <a id="getbest" name="getbest"></a> getBest

▸ **getBest**(): `Promise`<`undefined` \| [`Offer`](../namespaces/Market-1.md#offer)\>

Returns the best offer if any

#### Returns

`Promise`<`undefined` \| [`Offer`](../namespaces/Market-1.md#offer)\>

#### Defined in

@mangrovedao/mangrove.js/src/semibook.ts:419

___

### <a id="[iterator]" name="[iterator]"></a> [iterator]

▸ **[iterator]**(): [`CacheIterator`](../interfaces/Semibook-1.CacheIterator.md)

Returns an iterator over the offers in the cache.

#### Returns

[`CacheIterator`](../interfaces/Semibook-1.CacheIterator.md)

#### Implementation of

Iterable.[iterator]

#### Defined in

@mangrovedao/mangrove.js/src/semibook.ts:443

___

### <a id="iter" name="iter"></a> iter

▸ **iter**(): [`CacheIterator`](../interfaces/Semibook-1.CacheIterator.md)

Convenience method for getting an iterator without having to call `[Symbol.iterator]()`.

#### Returns

[`CacheIterator`](../interfaces/Semibook-1.CacheIterator.md)

#### Defined in

@mangrovedao/mangrove.js/src/semibook.ts:454

___

### <a id="estimatevolume" name="estimatevolume"></a> estimateVolume

▸ **estimateVolume**(`params`): `Promise`<[`VolumeEstimate`](../namespaces/Market-1.md#volumeestimate)\>

Volume estimator.

if you say `estimateVolume({given:100,to:"buy"})`,

it will give you an estimate of how much quote token you would have to
spend to get 100 base tokens.

if you say `estimateVolume({given:10,to:"sell"})`,

it will given you an estimate of how much base tokens you'd have to buy in
order to spend 10 quote tokens.

if you add a `limitPrice` field, only offers with that price or better will be considered.

So for instance, if you say `{given:10,to:"sell",limitPrice:"2"}`, estimateVolume
will return the volume you will be able to receive if selling up to 10 quote
at a max. price of 2 quote/base, i.e. a min. "price" of 1/2 = 0.5 base/quote.

The returned `remainingFillVolume` is how much of the given token that cannot be
traded due to insufficient volume on the book / price becoming bad.

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`VolumeParams`](../namespaces/Semibook-1.md#volumeparams) |

#### Returns

`Promise`<[`VolumeEstimate`](../namespaces/Market-1.md#volumeestimate)\>

#### Defined in

@mangrovedao/mangrove.js/src/semibook.ts:480

___

### <a id="simulatemarketorder" name="simulatemarketorder"></a> simulateMarketOrder

▸ **simulateMarketOrder**(`maxTick`, `fillVolume`, `fillWants`): `Promise`<\{ `totalGot`: `Big` ; `totalGave`: `Big` ; `feePaid`: `Big` ; `fillVolume`: `Big` ; `maxTickMatched?`: `number` ; `gas`: `BigNumber`  }\>

Reproduces the logic of Mangrove's generalMarketOrder function faithfully
with the exception of:

- the overflow protections due to bounds on input sizes.
- offers are assumed not to fail.

#### Parameters

| Name | Type |
| :------ | :------ |
| `maxTick` | `number` |
| `fillVolume` | `Big` |
| `fillWants` | `boolean` |

#### Returns

`Promise`<\{ `totalGot`: `Big` ; `totalGave`: `Big` ; `feePaid`: `Big` ; `fillVolume`: `Big` ; `maxTickMatched?`: `number` ; `gas`: `BigNumber`  }\>

#### Defined in

@mangrovedao/mangrove.js/src/semibook.ts:513

___

### <a id="ispricebetter" name="ispricebetter"></a> isPriceBetter

▸ **isPriceBetter**(`price`, `referencePrice`): `boolean`

Returns `true` if `price` is better than `referencePrice`; Otherwise, `false` is returned.

#### Parameters

| Name | Type |
| :------ | :------ |
| `price` | `undefined` \| `BigSource` |
| `referencePrice` | `undefined` \| `BigSource` |

#### Returns

`boolean`

#### Defined in

@mangrovedao/mangrove.js/src/semibook.ts:671

___

### <a id="ispriceworse" name="ispriceworse"></a> isPriceWorse

▸ **isPriceWorse**(`price`, `referencePrice`): `boolean`

Returns `true` if `price` is worse than `referencePrice`; Otherwise, `false` is returned.

#### Parameters

| Name | Type |
| :------ | :------ |
| `price` | `undefined` \| `BigSource` |
| `referencePrice` | `undefined` \| `BigSource` |

#### Returns

`boolean`

#### Defined in

@mangrovedao/mangrove.js/src/semibook.ts:680

___

### <a id="getminimumvolume" name="getminimumvolume"></a> getMinimumVolume

▸ **getMinimumVolume**(`gasreq`): `Big`

Determines the minimum volume required to stay above density limit for the given gasreq (with a minimum of 1 unit of outbound, since 0 gives is not allowed).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `gasreq` | `number` | The gas requirement for the offer. |

#### Returns

`Big`

The minimum volume required to stay above density limit.

#### Defined in

@mangrovedao/mangrove.js/src/semibook.ts:691

___

### <a id="getmaxgasreq" name="getmaxgasreq"></a> getMaxGasReq

▸ **getMaxGasReq**(): `Promise`<`undefined` \| `number`\>

#### Returns

`Promise`<`undefined` \| `number`\>

#### Defined in

@mangrovedao/mangrove.js/src/semibook.ts:701

___

### <a id="stateinitialize" name="stateinitialize"></a> stateInitialize

▸ **stateInitialize**(`block`): `Promise`<`ErrorOrState`<[`State`](../namespaces/Semibook-1.md#state)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `block` | `BlockWithoutParentHash` |

#### Returns

`Promise`<`ErrorOrState`<[`State`](../namespaces/Semibook-1.md#state)\>\>

#### Overrides

StateLogSubscriber.stateInitialize

#### Defined in

@mangrovedao/mangrove.js/src/semibook.ts:873

___

### <a id="statehandlelog" name="statehandlelog"></a> stateHandleLog

▸ **stateHandleLog**(`state`, `log`, `event?`): [`State`](../namespaces/Semibook-1.md#state)

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`State`](../namespaces/Semibook-1.md#state) |
| `log` | `Log` |
| `event?` | [`BookSubscriptionEvent`](../namespaces/Market-1.md#booksubscriptionevent) |

#### Returns

[`State`](../namespaces/Semibook-1.md#state)

#### Overrides

StateLogSubscriber.stateHandleLog

#### Defined in

@mangrovedao/mangrove.js/src/semibook.ts:922

___

### <a id="rawlocalconfigtolocalconfig" name="rawlocalconfigtolocalconfig"></a> rawLocalConfigToLocalConfig

▸ **rawLocalConfigToLocalConfig**(`local`): [`LocalConfigFull`](../namespaces/Mangrove-1.md#localconfigfull)

#### Parameters

| Name | Type |
| :------ | :------ |
| `local` | `LocalUnpackedStructOutput` |

#### Returns

[`LocalConfigFull`](../namespaces/Mangrove-1.md#localconfigfull)

#### Defined in

@mangrovedao/mangrove.js/src/semibook.ts:1363

___

### <a id="rawlocalconfigtolocalconfig-1" name="rawlocalconfigtolocalconfig-1"></a> rawLocalConfigToLocalConfig

▸ **rawLocalConfigToLocalConfig**(`local`, `outboundDecimals`): [`LocalConfigFull`](../namespaces/Mangrove-1.md#localconfigfull)

#### Parameters

| Name | Type |
| :------ | :------ |
| `local` | `LocalUnpackedStructOutput` |
| `outboundDecimals` | `number` |

#### Returns

[`LocalConfigFull`](../namespaces/Mangrove-1.md#localconfigfull)

#### Defined in

@mangrovedao/mangrove.js/src/semibook.ts:1370

___

### <a id="rawofferslimtoofferslim" name="rawofferslimtoofferslim"></a> rawOfferSlimToOfferSlim

▸ **rawOfferSlimToOfferSlim**(`raw`): [`OfferSlim`](../namespaces/Market-1.md#offerslim)

#### Parameters

| Name | Type |
| :------ | :------ |
| `raw` | [`RawOfferSlim`](../namespaces/Semibook-1.md#rawofferslim) |

#### Returns

[`OfferSlim`](../namespaces/Market-1.md#offerslim)

#### Defined in

@mangrovedao/mangrove.js/src/semibook.ts:1389

___

### <a id="rawidtoid" name="rawidtoid"></a> rawIdToId

▸ **rawIdToId**(`rawId`): `undefined` \| `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rawId` | `BigNumber` |

#### Returns

`undefined` \| `number`

#### Defined in

@mangrovedao/mangrove.js/src/semibook.ts:1412

___

### <a id="idtorawid" name="idtorawid"></a> idToRawId

▸ **idToRawId**(`id`): `BigNumber`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `undefined` \| `number` |

#### Returns

`BigNumber`

#### Defined in

@mangrovedao/mangrove.js/src/semibook.ts:1417

___

### <a id="getisvolumedesiredforasks" name="getisvolumedesiredforasks"></a> getIsVolumeDesiredForAsks

▸ **getIsVolumeDesiredForAsks**(`opts`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`BookOptions`](../namespaces/Market-1.md#bookoptions) |

#### Returns

`boolean`

#### Defined in

@mangrovedao/mangrove.js/src/semibook.ts:1454

___

### <a id="getisvolumedesiredforbids" name="getisvolumedesiredforbids"></a> getIsVolumeDesiredForBids

▸ **getIsVolumeDesiredForBids**(`opts`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`BookOptions`](../namespaces/Market-1.md#bookoptions) |

#### Returns

`boolean`

#### Defined in

@mangrovedao/mangrove.js/src/semibook.ts:1465

___

### <a id="checkiflastseeneventblockexists" name="checkiflastseeneventblockexists"></a> checkIfLastSeenEventBlockExists

▸ **checkIfLastSeenEventBlockExists**(): `void`

#### Returns

`void`

#### Inherited from

StateLogSubscriber.checkIfLastSeenEventBlockExists

#### Defined in

@mangrovedao/reliable-event-subscriber/dist/stateLogSubscriber.d.ts:16

___

### <a id="getlateststate" name="getlateststate"></a> getLatestState

▸ **getLatestState**(): [`State`](../namespaces/Semibook-1.md#state)

#### Returns

[`State`](../namespaces/Semibook-1.md#state)

#### Inherited from

StateLogSubscriber.getLatestState

#### Defined in

@mangrovedao/reliable-event-subscriber/dist/stateLogSubscriber.d.ts:17

___

### <a id="initialize" name="initialize"></a> initialize

▸ **initialize**(`wantedBlock`): `Promise`<`InitializeErrorOrBlock`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `wantedBlock` | `BlockWithoutParentHash` |

#### Returns

`Promise`<`InitializeErrorOrBlock`\>

#### Inherited from

StateLogSubscriber.initialize

#### Defined in

@mangrovedao/reliable-event-subscriber/dist/stateLogSubscriber.d.ts:18

___

### <a id="handlelog" name="handlelog"></a> handleLog

▸ **handleLog**(`log`, `event?`): `Promise`<`void`\>

handle received log by creating new cached state if we found a block that is newer
than our cache. Then let implementation `stateHandleLog` modify the state.

#### Parameters

| Name | Type |
| :------ | :------ |
| `log` | `Log` |
| `event?` | [`BookSubscriptionEvent`](../namespaces/Market-1.md#booksubscriptionevent) |

#### Returns

`Promise`<`void`\>

#### Inherited from

StateLogSubscriber.handleLog

#### Defined in

@mangrovedao/reliable-event-subscriber/dist/stateLogSubscriber.d.ts:27

___

### <a id="rollback" name="rollback"></a> rollback

▸ **rollback**(`block`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `block` | `Block` |

#### Returns

`void`

#### Inherited from

StateLogSubscriber.rollback

#### Defined in

@mangrovedao/reliable-event-subscriber/dist/stateLogSubscriber.d.ts:28
