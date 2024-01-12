---
id: "Semibook-1"
title: "Namespace: Semibook"
sidebar_label: "Semibook"
sidebar_position: 0
custom_edit_url: null
---

## Interfaces

- [CacheIterator](../interfaces/Semibook-1.CacheIterator.md)

## Type Aliases

### <a id="event" name="event"></a> Event

Ƭ **Event**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `cbArg` | [`BookSubscriptionCbArgument`](Market-1.md#booksubscriptioncbargument) |
| `event` | [`BookSubscriptionEvent`](Market-1.md#booksubscriptionevent) |
| `ethersLog` | `ethers.providers.Log` |

#### Defined in

@mangrovedao/mangrove.js/src/semibook.ts:36

___

### <a id="eventlistener" name="eventlistener"></a> EventListener

Ƭ **EventListener**: (`e`: [`Event`](Semibook-1.md#event)) => `Promise`<`void`\>

#### Type declaration

▸ (`e`): `Promise`<`void`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `e` | [`Event`](Semibook-1.md#event) |

##### Returns

`Promise`<`void`\>

#### Defined in

@mangrovedao/mangrove.js/src/semibook.ts:42

___

### <a id="blocklistener" name="blocklistener"></a> BlockListener

Ƭ **BlockListener**: (`n`: `number`) => `Promise`<`void`\>

#### Type declaration

▸ (`n`): `Promise`<`void`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

##### Returns

`Promise`<`void`\>

#### Defined in

@mangrovedao/mangrove.js/src/semibook.ts:44

___

### <a id="volumeparams" name="volumeparams"></a> VolumeParams

Ƭ **VolumeParams**: `Object`

Specification of how much volume to (potentially) trade on the semibook.

`{given:100, to:"buy"}` means buying 100 base tokens.
`{given:100, to:"buy", limitPrice: 0.1})` means buying 100 base tokens for a max. price of 0.1 quote/base.

`{given:10, to:"sell"})` means selling 10 quote tokens.
`{given:10, to:"sell", limitPrice: 0.5})` means selling 10 quote tokens for a max. price of 0.5 quote/base (i.e. a min. "price" of 1/(0.5) = 2 base/quote).

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `given` | `Bigish` | Amount of token to trade. |
| `to` | [`BS`](Market-1.md#bs) | Whether `given` is base to be bought or quote to be sold. |
| `limitPrice?` | `Bigish` | Optional: a max price after which to stop buying/selling. |

#### Defined in

@mangrovedao/mangrove.js/src/semibook.ts:55

___

### <a id="cachecontentsoptions" name="cachecontentsoptions"></a> CacheContentsOptions

Ƭ **CacheContentsOptions**: \{ `targetNumberOfTicks?`: `number`  } \| \{ `desiredPrice`: `Bigish`  } \| \{ `desiredVolume`: [`VolumeParams`](Semibook-1.md#volumeparams)  }

Options that specify what the cache fetches and retains.

`targetNumberOfTicks`, `desiredPrice`, and `desiredVolume` are mutually exclusive.
If none of these are specified, the default is `targetNumberOfTicks` = `Semibook.DEFAULT_TARGET_NUMBER_OF_TICKS`.

#### Defined in

@mangrovedao/mangrove.js/src/semibook.ts:70

___

### <a id="options" name="options"></a> Options

Ƭ **Options**: [`CacheContentsOptions`](Semibook-1.md#cachecontentsoptions) & \{ `chunkSize?`: `number`  }

Options that control how the book cache behaves.

#### Defined in

@mangrovedao/mangrove.js/src/semibook.ts:96

___

### <a id="resolvedoptions" name="resolvedoptions"></a> ResolvedOptions

Ƭ **ResolvedOptions**: \{ `targetNumberOfTicks`: `number`  } \| \{ `desiredPrice`: `Bigish`  } \| \{ `desiredVolume`: [`VolumeParams`](Semibook-1.md#volumeparams)  } & \{ `chunkSize`: `number`  }

Options with defaults resolved

#### Defined in

@mangrovedao/mangrove.js/src/semibook.ts:106

___

### <a id="bin" name="bin"></a> Bin

Ƭ **Bin**: `Object`

An ordered list of all offers in the cache with a given tick. In the Mangrove protoocol this is called a "bin".

Only non-empty bins are stored in the cache and they are linked together in a doubly-linked list for easy traversal and update.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `tick` | `number` |
| `offerCount` | `number` |
| `firstOfferId` | `number` |
| `lastOfferId` | `number` |
| `prev` | [`Bin`](Semibook-1.md#bin) \| `undefined` |
| `next` | [`Bin`](Semibook-1.md#bin) \| `undefined` |

#### Defined in

@mangrovedao/mangrove.js/src/semibook.ts:159

___

### <a id="state" name="state"></a> State

Ƭ **State**: `Object`

The cache at a given block. It holds a prefix of the on-chain offer list: All offers with a tick less than or equal to a max tick.

Must only be modified using the methods in `SemibookCacheOperations` to ensure cache consistency.

Invariants:
- tick in binCache                                                   =>  all offers for that tick are in offerCache and there is at least one such offer
- tick1 in binCache && tick2 < tick1 && ∃offer: offer.tick == tick2  =>  tick2 in binCache
- bestBinInCache.tick != undefined                                   =>  bestBinInCache.tick is the best tick in the offer list
- isComplete                                                         =>  all offers in the offer list are in the cache

#### Type declaration

| Name | Type |
| :------ | :------ |
| `localConfig` | [`LocalConfig`](Mangrove-1.md#localconfig) |
| `offerCache` | `Map`<`number`, [`Offer`](Market-1.md#offer)\> |
| `binCache` | `Map`<`number`, [`Bin`](Semibook-1.md#bin)\> |
| `bestBinInCache` | [`Bin`](Semibook-1.md#bin) \| `undefined` |
| `worstBinInCache` | [`Bin`](Semibook-1.md#bin) \| `undefined` |
| `isComplete` | `boolean` |

#### Defined in

@mangrovedao/mangrove.js/src/semibook.ts:179

___

### <a id="fetchofferlistresult" name="fetchofferlistresult"></a> FetchOfferListResult

Ƭ **FetchOfferListResult**: `Result`<\{ `bins`: `Map`<`number`, [`Offer`](Market-1.md#offer)[]\> ; `endOfListReached`: `boolean`  }, `LogSubscriber.Error`\>

#### Defined in

@mangrovedao/mangrove.js/src/semibook.ts:188

___

### <a id="fetchconfigresult" name="fetchconfigresult"></a> FetchConfigResult

Ƭ **FetchConfigResult**: `Result`<[`LocalConfigFull`](Mangrove-1.md#localconfigfull), `LogSubscriber.Error`\>

#### Defined in

@mangrovedao/mangrove.js/src/semibook.ts:196

___

### <a id="rawofferslim" name="rawofferslim"></a> RawOfferSlim

Ƭ **RawOfferSlim**: `Omit`<`OfferWriteEventObject`, ``"olKeyHash"``\>

#### Defined in

@mangrovedao/mangrove.js/src/semibook.ts:203
