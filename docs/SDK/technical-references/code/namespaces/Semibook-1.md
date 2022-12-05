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

@mangrovedao/mangrove.js/src/semibook.ts:15

___

### <a id="eventlistener" name="eventlistener"></a> EventListener

Ƭ **EventListener**: (`e`: [`Event`](Semibook-1.md#event)) => `void`

#### Type declaration

▸ (`e`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `e` | [`Event`](Semibook-1.md#event) |

##### Returns

`void`

#### Defined in

@mangrovedao/mangrove.js/src/semibook.ts:21

___

### <a id="blocklistener" name="blocklistener"></a> BlockListener

Ƭ **BlockListener**: (`n`: `number`) => `void`

#### Type declaration

▸ (`n`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

##### Returns

`void`

#### Defined in

@mangrovedao/mangrove.js/src/semibook.ts:23

___

### <a id="volumeparams" name="volumeparams"></a> VolumeParams

Ƭ **VolumeParams**: `Object`

Specification of how much volume to (potentially) trade on the semibook.

`{given:100, to:"buy"}` means buying 100 base tokens.
`{given:100, to:"buy", boundary: 10})` means buying 100 quote tokens for a max. avg. price of 1/10 (boundary/given).

`{given:10, to:"sell"})` means selling 10 quote tokens.
`{given:10, to:"sell", boundary: 5})` means selling 10 quote tokens for a min. avg. price of 0.5 (given/boundary).

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `given` | `Bigish` | Amount of token to trade. |
| `to` | [`BS`](Market-1.md#bs) | Whether `given` is base to be bought or quote to be sold. |
| `boundary?` | `Bigish` | Optional: induce a max avg. price after which to stop buying/selling. |

#### Defined in

@mangrovedao/mangrove.js/src/semibook.ts:34

___

### <a id="options" name="options"></a> Options

Ƭ **Options**: `Object`

Options that control how the book cache behaves.

`maxOffers` and `desiredPrice` are mutually exclusive.
If none of these are specfied, the default is `maxOffers` = `Semibook.DEFAULT_MAX_OFFERS`.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `maxOffers?` | `number` | The maximum number of offers to store in the cache. `maxOffers` and `desiredPrice` are mutually exclusive. |
| `chunkSize?` | `number` | The number of offers to fetch in one call. Defaults to `maxOffers` if it is set and positive; Otherwise `Semibook.DEFAULT_MAX_OFFERS` is used. |
| `desiredPrice?` | `Bigish` | The price that is expected to be used in calls to the market. The cache will initially contain all offers with this price or better. This can be useful in order to ensure a good pivot is readily available. |
| `desiredVolume?` | [`VolumeParams`](Semibook-1.md#volumeparams) | The volume that is expected to be used in trades on the market. |

#### Defined in

@mangrovedao/mangrove.js/src/semibook.ts:49
