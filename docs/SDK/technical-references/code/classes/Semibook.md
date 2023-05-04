---
id: "Semibook"
title: "Class: Semibook"
sidebar_label: "Semibook"
sidebar_position: 0
custom_edit_url: null
---

The Semibook is a data structure for maintaining a cached prefix
of an offer list for one side (asks or bids) of a market.

While offer lists on-chain for a market A-B are symmetric (the offer lists are
the same for the market B-A), a `Semibook` depends on the market:

- Prices are in terms of quote tokens
- Volumes are in terms of base tokens

## Hierarchy

- `StateLogSubscriber`<[`State`](../namespaces/Semibook-1.md#state), [`BookSubscriptionEvent`](../namespaces/Market-1.md#booksubscriptionevent)\>

  ↳ **`Semibook`**

## Implements

- `Iterable`<[`Offer`](../namespaces/Market-1.md#offer)\>

## Properties

### <a id="default_max_offers" name="default_max_offers"></a> DEFAULT\_MAX\_OFFERS

▪ `Static` `Readonly` **DEFAULT\_MAX\_OFFERS**: ``50``

#### Defined in

@mangrovedao/mangrove.js/src/semibook.ts:134

___

### <a id="ba" name="ba"></a> ba

• `Readonly` **ba**: [`BA`](../namespaces/Market-1.md#ba)

#### Defined in

@mangrovedao/mangrove.js/src/semibook.ts:136

___

### <a id="market" name="market"></a> market

• `Readonly` **market**: [`Market`](Market.md)

#### Defined in

@mangrovedao/mangrove.js/src/semibook.ts:137

___

### <a id="options" name="options"></a> options

• `Readonly` **options**: [`Options`](../namespaces/Semibook-1.md#options)

#### Defined in

@mangrovedao/mangrove.js/src/semibook.ts:138

___

### <a id="trademanagement" name="trademanagement"></a> tradeManagement

• **tradeManagement**: `Trade`

#### Defined in

@mangrovedao/mangrove.js/src/semibook.ts:145

___

### <a id="optionsidentifier" name="optionsidentifier"></a> optionsIdentifier

• **optionsIdentifier**: `string`

#### Defined in

@mangrovedao/mangrove.js/src/semibook.ts:147

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

▸ `Static` **connect**(`market`, `ba`, `eventListener`, `options`): `Promise`<[`Semibook`](Semibook.md)\>

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

@mangrovedao/mangrove.js/src/semibook.ts:149

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

@mangrovedao/mangrove.js/src/semibook.ts:176

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

@mangrovedao/mangrove.js/src/semibook.ts:180

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

@mangrovedao/mangrove.js/src/semibook.ts:200

___

### <a id="getconfig" name="getconfig"></a> getConfig

▸ **getConfig**(`blockNumber?`): `Promise`<[`LocalConfig`](../namespaces/Mangrove-1.md#localconfig)\>

Return config local to a semibook.
Notes:
Amounts are converted to plain numbers.
density is converted to public token units per gas used
fee *remains* in basis points of the token being bought

#### Parameters

| Name | Type |
| :------ | :------ |
| `blockNumber?` | `number` |

#### Returns

`Promise`<[`LocalConfig`](../namespaces/Mangrove-1.md#localconfig)\>

#### Defined in

@mangrovedao/mangrove.js/src/semibook.ts:237

___

### <a id="getrawconfig" name="getrawconfig"></a> getRawConfig

▸ **getRawConfig**(`blockNumber?`): `Promise`<[`GlobalUnpackedStructOutput`, `LocalUnpackedStructOutput`] & {}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `blockNumber?` | `number` |

#### Returns

`Promise`<[`GlobalUnpackedStructOutput`, `LocalUnpackedStructOutput`] & {}\>

#### Defined in

@mangrovedao/mangrove.js/src/semibook.ts:242

___

### <a id="permit" name="permit"></a> permit

▸ **permit**(`data`): `void`

Sign permit data for buying outbound_tkn with spender's inbound_tkn
See mangrove.ts.

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Omit`<[`SimplePermitData`](../namespaces/Mangrove-1.md#simplepermitdata), ``"outbound_tkn"`` \| ``"inbound_tkn"``\> |

#### Returns

`void`

#### Defined in

@mangrovedao/mangrove.js/src/semibook.ts:257

___

### <a id="size" name="size"></a> size

▸ **size**(): `number`

Returns the number of offers in the cache.

#### Returns

`number`

#### Defined in

@mangrovedao/mangrove.js/src/semibook.ts:272

___

### <a id="getbestincache" name="getbestincache"></a> getBestInCache

▸ **getBestInCache**(): `number`

Returns the id of the best offer in the cache

#### Returns

`number`

#### Defined in

@mangrovedao/mangrove.js/src/semibook.ts:278

___

### <a id="[iterator]" name="[iterator]"></a> [iterator]

▸ **[iterator]**(): [`CacheIterator`](../interfaces/Semibook-1.CacheIterator.md)

Returns an iterator over the offers in the cache.

#### Returns

[`CacheIterator`](../interfaces/Semibook-1.CacheIterator.md)

#### Implementation of

Iterable.\_\_@iterator@89

#### Defined in

@mangrovedao/mangrove.js/src/semibook.ts:284

___

### <a id="iter" name="iter"></a> iter

▸ **iter**(): [`CacheIterator`](../interfaces/Semibook-1.CacheIterator.md)

Convenience method for getting an iterator without having to call `[Symbol.iterator]()`.

#### Returns

[`CacheIterator`](../interfaces/Semibook-1.CacheIterator.md)

#### Defined in

@mangrovedao/mangrove.js/src/semibook.ts:291

___

### <a id="getpivotid" name="getpivotid"></a> getPivotId

▸ **getPivotId**(`price`): `Promise`<`number`\>

Given a price, find the id of the immediately-better offer in the
semibook. If there is no offer with a better price, `undefined` is returned.

#### Parameters

| Name | Type |
| :------ | :------ |
| `price` | `any` |

#### Returns

`Promise`<`number`\>

#### Defined in

@mangrovedao/mangrove.js/src/semibook.ts:298

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

if you add a `boundary` field, it either means
- the minimum amount you want to receive if you spend all `given` (if to:"sell"), or
- the maximum amount you are ready to spend if you buy all `given` (if to:"buy")

So for instance, if you say `{given:10,to:"sell",boundary:"5"}`, estimateVolume will return the volume you will be able to receive if selling up to 10 at a min price of 10/5.

The returned `givenResidue` is how much of the given token that cannot be
traded due to insufficient volume on the book / price becoming bad.

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`VolumeParams`](../namespaces/Semibook-1.md#volumeparams) |

#### Returns

`Promise`<[`VolumeEstimate`](../namespaces/Market-1.md#volumeestimate)\>

#### Defined in

@mangrovedao/mangrove.js/src/semibook.ts:350

___

### <a id="simulatemarketorder" name="simulatemarketorder"></a> simulateMarketOrder

▸ **simulateMarketOrder**(`initialWants`, `initialGives`, `fillWants`): `Promise`<{ `wants`: `Big` ; `gives`: `Big` ; `totalGot`: `Big` ; `totalGave`: `Big`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `initialWants` | `Big` |
| `initialGives` | `Big` |
| `fillWants` | `boolean` |

#### Returns

`Promise`<{ `wants`: `Big` ; `gives`: `Big` ; `totalGot`: `Big` ; `totalGave`: `Big`  }\>

#### Defined in

@mangrovedao/mangrove.js/src/semibook.ts:377

___

### <a id="ispricebetter" name="ispricebetter"></a> isPriceBetter

▸ **isPriceBetter**(`price`, `referencePrice`): `boolean`

Returns `true` if `price` is better than `referencePrice`; Otherwise, `false` is returned.

#### Parameters

| Name | Type |
| :------ | :------ |
| `price` | `any` |
| `referencePrice` | `any` |

#### Returns

`boolean`

#### Defined in

@mangrovedao/mangrove.js/src/semibook.ts:452

___

### <a id="ispriceworse" name="ispriceworse"></a> isPriceWorse

▸ **isPriceWorse**(`price`, `referencePrice`): `boolean`

Returns `true` if `price` is worse than `referencePrice`; Otherwise, `false` is returned.

#### Parameters

| Name | Type |
| :------ | :------ |
| `price` | `any` |
| `referencePrice` | `any` |

#### Returns

`boolean`

#### Defined in

@mangrovedao/mangrove.js/src/semibook.ts:458

___

### <a id="getmaxgasreq" name="getmaxgasreq"></a> getMaxGasReq

▸ **getMaxGasReq**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

#### Defined in

@mangrovedao/mangrove.js/src/semibook.ts:462

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

@mangrovedao/mangrove.js/src/semibook.ts:607

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

@mangrovedao/mangrove.js/src/semibook.ts:654

___

### <a id="rawlocalconfigtolocalconfig" name="rawlocalconfigtolocalconfig"></a> rawLocalConfigToLocalConfig

▸ `Static` **rawLocalConfigToLocalConfig**(`local`, `outboundDecimals`): [`LocalConfig`](../namespaces/Mangrove-1.md#localconfig)

#### Parameters

| Name | Type |
| :------ | :------ |
| `local` | `LocalUnpackedStructOutput` |
| `outboundDecimals` | `number` |

#### Returns

[`LocalConfig`](../namespaces/Mangrove-1.md#localconfig)

#### Defined in

@mangrovedao/mangrove.js/src/semibook.ts:980

___

### <a id="getminimumvolume" name="getminimumvolume"></a> getMinimumVolume

▸ **getMinimumVolume**(`gasreq`): `Promise`<`any`\>

Determines the minimum volume required to stay above density limit for the given gasreq.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `gasreq` | `number` | The gas requirement for the offer. |

#### Returns

`Promise`<`any`\>

The minimum volume required to stay above density limit.

#### Defined in

@mangrovedao/mangrove.js/src/semibook.ts:999

___

### <a id="rawidtoid" name="rawidtoid"></a> rawIdToId

▸ `Static` **rawIdToId**(`rawId`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rawId` | `BigNumber` |

#### Returns

`number`

#### Defined in

@mangrovedao/mangrove.js/src/semibook.ts:1004

___

### <a id="getisvolumedesiredforasks" name="getisvolumedesiredforasks"></a> getIsVolumeDesiredForAsks

▸ `Static` **getIsVolumeDesiredForAsks**(`opts`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`BookOptions`](../namespaces/Market-1.md#bookoptions) |

#### Returns

`boolean`

#### Defined in

@mangrovedao/mangrove.js/src/semibook.ts:1042

___

### <a id="getisvolumedesiredforbids" name="getisvolumedesiredforbids"></a> getIsVolumeDesiredForBids

▸ `Static` **getIsVolumeDesiredForBids**(`opts`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`BookOptions`](../namespaces/Market-1.md#bookoptions) |

#### Returns

`boolean`

#### Defined in

@mangrovedao/mangrove.js/src/semibook.ts:1051

___

### <a id="checkiflastseeneventblockexists" name="checkiflastseeneventblockexists"></a> checkIfLastSeenEventBlockExists

▸ `Protected` **checkIfLastSeenEventBlockExists**(): `void`

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
