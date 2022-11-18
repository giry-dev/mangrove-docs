[@mangrovedao/mangrove.js](../README.md) / [Exports](../modules.md) / [eth](../modules/eth.md) / Mnemonic

# Class: Mnemonic

[eth](../modules/eth.md).Mnemonic

## Table of contents

### Properties

- [mnemonic](eth.Mnemonic.md#mnemonic)
- [iterateOn](eth.Mnemonic.md#iterateon)

### Methods

- [path](eth.Mnemonic.md#path)
- [signer](eth.Mnemonic.md#signer)
- [address](eth.Mnemonic.md#address)
- [key](eth.Mnemonic.md#key)

### Constructors

- [constructor](eth.Mnemonic.md#constructor)

## Properties

### <a id="mnemonic" name="mnemonic"></a> mnemonic

• **mnemonic**: `string`

#### Defined in

@mangrovedao/mangrove.js/src/eth.ts:45

___

### <a id="iterateon" name="iterateon"></a> iterateOn

• **iterateOn**: ``"index"`` \| ``"change"`` \| ``"account"``

#### Defined in

@mangrovedao/mangrove.js/src/eth.ts:46

## Methods

### <a id="path" name="path"></a> path

▸ `Static` **path**(`iterator`, `iterateOn`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `iterator` | `any` |
| `iterateOn` | ``"index"`` \| ``"change"`` \| ``"account"`` |

#### Returns

`string`

#### Defined in

@mangrovedao/mangrove.js/src/eth.ts:47

___

### <a id="signer" name="signer"></a> signer

▸ **signer**(`iterator`): `Wallet`

#### Parameters

| Name | Type |
| :------ | :------ |
| `iterator` | `number` |

#### Returns

`Wallet`

#### Defined in

@mangrovedao/mangrove.js/src/eth.ts:60

___

### <a id="address" name="address"></a> address

▸ **address**(`iterator`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `iterator` | `number` |

#### Returns

`string`

#### Defined in

@mangrovedao/mangrove.js/src/eth.ts:65

___

### <a id="key" name="key"></a> key

▸ **key**(`iterator`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `iterator` | `number` |

#### Returns

`string`

#### Defined in

@mangrovedao/mangrove.js/src/eth.ts:69

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new Mnemonic**(`mnemonic`, `iterateOn?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `mnemonic` | `string` | `undefined` |
| `iterateOn` | ``"index"`` \| ``"change"`` \| ``"account"`` | `"index"` |

#### Defined in

@mangrovedao/mangrove.js/src/eth.ts:52
