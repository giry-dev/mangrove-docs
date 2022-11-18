[@mangrovedao/mangrove.js](../README.md) / [Exports](../modules.md) / Semibook

# Class: Semibook

The Semibook is a data structure for maintaining a cached prefix
of an offer list for one side (asks or bids) of a market.

While offer lists on-chain for a market A-B are symmetric (the offer lists are
the same for the market B-A), a `Semibook` depends on the market:

- Prices are in terms of quote tokens
- Volumes are in terms of base tokens

## Implements

- `Iterable`<[`Offer`](../modules/Market-1.md#offer)\>

## Table of contents

### Properties

- [DEFAULT\_MAX\_OFFERS](Semibook.md#default_max_offers)
- [ba](Semibook.md#ba)
- [market](Semibook.md#market)
- [options](Semibook.md#options)
- [tradeManagement](Semibook.md#trademanagement)

### Methods

- [connect](Semibook.md#connect)
- [disconnect](Semibook.md#disconnect)
- [requestOfferListPrefix](Semibook.md#requestofferlistprefix)
- [offerInfo](Semibook.md#offerinfo)
- [getConfig](Semibook.md#getconfig)
- [getRawConfig](Semibook.md#getrawconfig)
- [size](Semibook.md#size)
- [getBestInCache](Semibook.md#getbestincache)
- [[iterator]](Semibook.md#[iterator])
- [iter](Semibook.md#iter)
- [getPivotId](Semibook.md#getpivotid)
- [estimateVolume](Semibook.md#estimatevolume)
- [simulateMarketOrder](Semibook.md#simulatemarketorder)
- [isPriceBetter](Semibook.md#ispricebetter)
- [isPriceWorse](Semibook.md#ispriceworse)
- [getMaxGasReq](Semibook.md#getmaxgasreq)
- [lastReadBlockNumber](Semibook.md#lastreadblocknumber)
- [getIsVolumeDesiredForAsks](Semibook.md#getisvolumedesiredforasks)
- [getIsVolumeDesiredForBids](Semibook.md#getisvolumedesiredforbids)

## Properties

### <a id="default_max_offers" name="default_max_offers"></a> DEFAULT\_MAX\_OFFERS

▪ `Static` `Readonly` **DEFAULT\_MAX\_OFFERS**: ``50``

#### Defined in

@mangrovedao/mangrove.js/src/semibook.ts:108

___

### <a id="ba" name="ba"></a> ba

• `Readonly` **ba**: [`BA`](../modules/Market-1.md#ba)

#### Defined in

@mangrovedao/mangrove.js/src/semibook.ts:110

___

### <a id="market" name="market"></a> market

• `Readonly` **market**: [`Market`](Market.md)

#### Defined in

@mangrovedao/mangrove.js/src/semibook.ts:111

___

### <a id="options" name="options"></a> options

• `Readonly` **options**: [`Options`](../modules/Semibook-1.md#options)

#### Defined in

@mangrovedao/mangrove.js/src/semibook.ts:112

___

### <a id="trademanagement" name="trademanagement"></a> tradeManagement

• **tradeManagement**: `Trade`

#### Defined in

@mangrovedao/mangrove.js/src/semibook.ts:129

## Methods

### <a id="connect" name="connect"></a> connect

▸ `Static` **connect**(`market`, `ba`, `eventListener`, `blockListener`, `options`): `Promise`<[`Semibook`](Semibook.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `market` | [`Market`](Market.md) |
| `ba` | [`BA`](../modules/Market-1.md#ba) |
| `eventListener` | [`EventListener`](../modules/Semibook-1.md#eventlistener) |
| `blockListener` | [`BlockListener`](../modules/Semibook-1.md#blocklistener) |
| `options` | [`Options`](../modules/Semibook-1.md#options) |

#### Returns

`Promise`<[`Semibook`](Semibook.md)\>

#### Defined in

@mangrovedao/mangrove.js/src/semibook.ts:130

___

### <a id="disconnect" name="disconnect"></a> disconnect

▸ **disconnect**(): `void`

Stop listening to events from mangrove

#### Returns

`void`

#### Defined in

@mangrovedao/mangrove.js/src/semibook.ts:151

___

### <a id="requestofferlistprefix" name="requestofferlistprefix"></a> requestOfferListPrefix

▸ **requestOfferListPrefix**(`options`): `Promise`<[`Offer`](../modules/Market-1.md#offer)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`Options`](../modules/Semibook-1.md#options) |

#### Returns

`Promise`<[`Offer`](../modules/Market-1.md#offer)[]\>

#### Defined in

@mangrovedao/mangrove.js/src/semibook.ts:155

___

### <a id="offerinfo" name="offerinfo"></a> offerInfo

▸ **offerInfo**(`offerId`): `Promise`<[`Offer`](../modules/Market-1.md#offer)\>

Returns struct containing offer details in the current offer list

#### Parameters

| Name | Type |
| :------ | :------ |
| `offerId` | `number` |

#### Returns

`Promise`<[`Offer`](../modules/Market-1.md#offer)\>

#### Defined in

@mangrovedao/mangrove.js/src/semibook.ts:166

___

### <a id="getconfig" name="getconfig"></a> getConfig

▸ **getConfig**(`blockNumber?`): `Promise`<[`LocalConfig`](../modules/Mangrove-1.md#localconfig)\>

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

`Promise`<[`LocalConfig`](../modules/Mangrove-1.md#localconfig)\>

#### Defined in

@mangrovedao/mangrove.js/src/semibook.ts:202

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

@mangrovedao/mangrove.js/src/semibook.ts:207

___

### <a id="size" name="size"></a> size

▸ **size**(): `number`

Returns the number of offers in the cache.

#### Returns

`number`

#### Defined in

@mangrovedao/mangrove.js/src/semibook.ts:221

___

### <a id="getbestincache" name="getbestincache"></a> getBestInCache

▸ **getBestInCache**(): `number`

Returns the id of the best offer in the cache

#### Returns

`number`

#### Defined in

@mangrovedao/mangrove.js/src/semibook.ts:226

___

### <a id="[iterator]" name="[iterator]"></a> [iterator]

▸ **[iterator]**(): [`CacheIterator`](../interfaces/Semibook-1.CacheIterator.md)

Returns an iterator over the offers in the cache.

#### Returns

[`CacheIterator`](../interfaces/Semibook-1.CacheIterator.md)

#### Implementation of

Iterable.\_\_@iterator@90

#### Defined in

@mangrovedao/mangrove.js/src/semibook.ts:231

___

### <a id="iter" name="iter"></a> iter

▸ **iter**(): [`CacheIterator`](../interfaces/Semibook-1.CacheIterator.md)

Convenience method for getting an iterator without having to call `[Symbol.iterator]()`.

#### Returns

[`CacheIterator`](../interfaces/Semibook-1.CacheIterator.md)

#### Defined in

@mangrovedao/mangrove.js/src/semibook.ts:236

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

@mangrovedao/mangrove.js/src/semibook.ts:243

___

### <a id="estimatevolume" name="estimatevolume"></a> estimateVolume

▸ **estimateVolume**(`params`): `Promise`<[`VolumeEstimate`](../modules/Market-1.md#volumeestimate)\>

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

So for instance, if you say {given:10,to:"sell",boundary:"5"}, estimateVolume will return the volume you will be able to receive if selling up to 10 at a min price of 10/5.

The returned `givenResidue` is how much of the given token that cannot be
traded due to insufficient volume on the book / price becoming bad.

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`VolumeParams`](../modules/Semibook-1.md#volumeparams) |

#### Returns

`Promise`<[`VolumeEstimate`](../modules/Market-1.md#volumeestimate)\>

#### Defined in

@mangrovedao/mangrove.js/src/semibook.ts:291

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

@mangrovedao/mangrove.js/src/semibook.ts:318

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

@mangrovedao/mangrove.js/src/semibook.ts:389

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

@mangrovedao/mangrove.js/src/semibook.ts:395

___

### <a id="getmaxgasreq" name="getmaxgasreq"></a> getMaxGasReq

▸ **getMaxGasReq**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

#### Defined in

@mangrovedao/mangrove.js/src/semibook.ts:399

___

### <a id="lastreadblocknumber" name="lastreadblocknumber"></a> lastReadBlockNumber

▸ **lastReadBlockNumber**(): `number`

#### Returns

`number`

#### Defined in

@mangrovedao/mangrove.js/src/semibook.ts:578

___

### <a id="getisvolumedesiredforasks" name="getisvolumedesiredforasks"></a> getIsVolumeDesiredForAsks

▸ `Static` **getIsVolumeDesiredForAsks**(`opts`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`BookOptions`](../modules/Market-1.md#bookoptions) |

#### Returns

`boolean`

#### Defined in

@mangrovedao/mangrove.js/src/semibook.ts:971

___

### <a id="getisvolumedesiredforbids" name="getisvolumedesiredforbids"></a> getIsVolumeDesiredForBids

▸ `Static` **getIsVolumeDesiredForBids**(`opts`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`BookOptions`](../modules/Market-1.md#bookoptions) |

#### Returns

`boolean`

#### Defined in

@mangrovedao/mangrove.js/src/semibook.ts:980
