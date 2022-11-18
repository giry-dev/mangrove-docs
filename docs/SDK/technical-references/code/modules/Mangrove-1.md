[@mangrovedao/mangrove.js](../README.md) / [Exports](../modules.md) / Mangrove

# Namespace: Mangrove

## Table of contents

### Type Aliases

- [RawConfig](Mangrove-1.md#rawconfig)
- [LocalConfig](Mangrove-1.md#localconfig)
- [GlobalConfig](Mangrove-1.md#globalconfig)

## Type Aliases

### <a id="rawconfig" name="rawconfig"></a> RawConfig

Ƭ **RawConfig**: `Awaited`<`ReturnType`<`typechain.Mangrove`[``"functions"``][``"configInfo"``]\>\>

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:31

___

### <a id="localconfig" name="localconfig"></a> LocalConfig

Ƭ **LocalConfig**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `active` | `boolean` |
| `fee` | `number` |
| `density` | `Big` |
| `offer_gasbase` | `number` |
| `lock` | `boolean` |
| `best` | `number` \| `undefined` |
| `last` | `number` \| `undefined` |

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:35

___

### <a id="globalconfig" name="globalconfig"></a> GlobalConfig

Ƭ **GlobalConfig**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `monitor` | `string` |
| `useOracle` | `boolean` |
| `notify` | `boolean` |
| `gasprice` | `number` |
| `gasmax` | `number` |
| `dead` | `boolean` |

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:45
