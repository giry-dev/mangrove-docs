---
id: "eth.Mnemonic"
title: "Class: Mnemonic"
sidebar_label: "eth.Mnemonic"
custom_edit_url: null
---

[eth](../namespaces/eth.md).Mnemonic

## Properties

### <a id="mnemonic" name="mnemonic"></a> mnemonic

• **mnemonic**: `string`

#### Defined in

@mangrovedao/mangrove.js/src/eth.ts:48

___

### <a id="iterateon" name="iterateon"></a> iterateOn

• **iterateOn**: ``"index"`` \| ``"change"`` \| ``"account"``

#### Defined in

@mangrovedao/mangrove.js/src/eth.ts:49

## Methods

### <a id="path" name="path"></a> path

▸ `Static` **path**(`iterator`, `iterateOn`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `iterator` | `number` |
| `iterateOn` | ``"index"`` \| ``"change"`` \| ``"account"`` |

#### Returns

`string`

#### Defined in

@mangrovedao/mangrove.js/src/eth.ts:50

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

@mangrovedao/mangrove.js/src/eth.ts:66

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

@mangrovedao/mangrove.js/src/eth.ts:71

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

@mangrovedao/mangrove.js/src/eth.ts:75

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new Mnemonic**(`mnemonic`, `iterateOn?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `mnemonic` | `string` | `undefined` |
| `iterateOn` | ``"index"`` \| ``"change"`` \| ``"account"`` | `"index"` |

#### Defined in

@mangrovedao/mangrove.js/src/eth.ts:58
