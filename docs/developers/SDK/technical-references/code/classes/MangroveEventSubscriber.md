---
id: "MangroveEventSubscriber"
title: "Class: MangroveEventSubscriber"
sidebar_label: "MangroveEventSubscriber"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- `LogSubscriber`<[`BookSubscriptionEvent`](../namespaces/Market-1.md#booksubscriptionevent)\>

  ↳ **`MangroveEventSubscriber`**

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new MangroveEventSubscriber**(`provider`, `contract`, `blockManager`): [`MangroveEventSubscriber`](MangroveEventSubscriber.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `provider` | `Provider` |
| `contract` | `Contract` |
| `blockManager` | `BlockManager` |

#### Returns

[`MangroveEventSubscriber`](MangroveEventSubscriber.md)

#### Overrides

LogSubscriber\&lt;Market.BookSubscriptionEvent\&gt;.constructor

#### Defined in

@mangrovedao/mangrove.js/src/mangroveEventSubscriber.ts:27

## Properties

### <a id="initializedat" name="initializedat"></a> initializedAt

• `Optional` **initializedAt**: `BlockWithoutParentHash`

#### Inherited from

LogSubscriber.initializedAt

#### Defined in

@mangrovedao/reliable-event-subscriber/dist/logSubscriber.d.ts:14

___

### <a id="lastseeneventblock" name="lastseeneventblock"></a> lastSeenEventBlock

• `Optional` **lastSeenEventBlock**: `BlockWithoutParentHash`

#### Inherited from

LogSubscriber.lastSeenEventBlock

#### Defined in

@mangrovedao/reliable-event-subscriber/dist/logSubscriber.d.ts:15

## Methods

### <a id="optionsidentifier" name="optionsidentifier"></a> optionsIdentifier

▸ **optionsIdentifier**(`options`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`Options`](../namespaces/Semibook-1.md#options) |

#### Returns

`string`

#### Defined in

@mangrovedao/mangrove.js/src/mangroveEventSubscriber.ts:36

___

### <a id="enablesubscriptions" name="enablesubscriptions"></a> enableSubscriptions

▸ **enableSubscriptions**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

@mangrovedao/mangrove.js/src/mangroveEventSubscriber.ts:46

___

### <a id="computebookidentifier" name="computebookidentifier"></a> computeBookIdentifier

▸ **computeBookIdentifier**(`market`, `ba`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `market` | [`Market`](Market.md) |
| `ba` | [`BA`](../namespaces/Market-1.md#ba) |

#### Returns

`string`

#### Defined in

@mangrovedao/mangrove.js/src/mangroveEventSubscriber.ts:56

___

### <a id="getsemibook" name="getsemibook"></a> getSemibook

▸ **getSemibook**(`market`, `ba`, `options`): `undefined` \| [`Semibook`](Semibook.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `market` | [`Market`](Market.md) |
| `ba` | [`BA`](../namespaces/Market-1.md#ba) |
| `options` | [`Options`](../namespaces/Semibook-1.md#options) |

#### Returns

`undefined` \| [`Semibook`](Semibook.md)

#### Defined in

@mangrovedao/mangrove.js/src/mangroveEventSubscriber.ts:62

___

### <a id="subscribetosemibook" name="subscribetosemibook"></a> subscribeToSemibook

▸ **subscribeToSemibook**(`semibook`, `rec?`): `Promise`<`void`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `semibook` | [`Semibook`](Semibook.md) | `undefined` |
| `rec` | `number` | `0` |

#### Returns

`Promise`<`void`\>

#### Defined in

@mangrovedao/mangrove.js/src/mangroveEventSubscriber.ts:83

___

### <a id="initialize" name="initialize"></a> initialize

▸ **initialize**(`wantedBlock`): `Promise`<`InitializeErrorOrBlock`\>

initialize subscriber at block number `blockNumber`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `wantedBlock` | `BlockWithoutParentHash` |

#### Returns

`Promise`<`InitializeErrorOrBlock`\>

#### Overrides

LogSubscriber.initialize

#### Defined in

@mangrovedao/mangrove.js/src/mangroveEventSubscriber.ts:129

___

### <a id="handlelog" name="handlelog"></a> handleLog

▸ **handleLog**(`log`): `Promise`<`void`\>

handle log

#### Parameters

| Name | Type |
| :------ | :------ |
| `log` | `Log` |

#### Returns

`Promise`<`void`\>

#### Overrides

LogSubscriber.handleLog

#### Defined in

@mangrovedao/mangrove.js/src/mangroveEventSubscriber.ts:151

___

### <a id="rollback" name="rollback"></a> rollback

▸ **rollback**(`block`): `void`

rollback subscriber to block `block`

#### Parameters

| Name | Type |
| :------ | :------ |
| `block` | `Block` |

#### Returns

`void`

#### Overrides

LogSubscriber.rollback

#### Defined in

@mangrovedao/mangrove.js/src/mangroveEventSubscriber.ts:175
