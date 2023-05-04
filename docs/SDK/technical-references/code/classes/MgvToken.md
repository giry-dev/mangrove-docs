---
id: "MgvToken"
title: "Class: MgvToken"
sidebar_label: "MgvToken"
sidebar_position: 0
custom_edit_url: null
---

## Properties

### <a id="mgv" name="mgv"></a> mgv

• **mgv**: [`Mangrove`](Mangrove.md)

#### Defined in

@mangrovedao/mangrove.js/src/mgvtoken.ts:55

___

### <a id="name" name="name"></a> name

• **name**: `string`

#### Defined in

@mangrovedao/mangrove.js/src/mgvtoken.ts:56

___

### <a id="address" name="address"></a> address

• **address**: `string`

#### Defined in

@mangrovedao/mangrove.js/src/mgvtoken.ts:57

___

### <a id="displayeddecimals" name="displayeddecimals"></a> displayedDecimals

• **displayedDecimals**: `number`

#### Defined in

@mangrovedao/mangrove.js/src/mgvtoken.ts:58

___

### <a id="decimals" name="decimals"></a> decimals

• **decimals**: `number`

#### Defined in

@mangrovedao/mangrove.js/src/mgvtoken.ts:59

___

### <a id="contract" name="contract"></a> contract

• **contract**: `TestToken`

#### Defined in

@mangrovedao/mangrove.js/src/mgvtoken.ts:61

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new MgvToken**(`name`, `mgv`, `options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `mgv` | [`Mangrove`](Mangrove.md) |
| `options` | [`ConstructorOptions`](../namespaces/MgvToken-1.md#constructoroptions) |

#### Defined in

@mangrovedao/mangrove.js/src/mgvtoken.ts:62

## Methods

### <a id="fromunits" name="fromunits"></a> fromUnits

▸ **fromUnits**(`amount`): `Big`

Convert base/quote from internal amount to public amount.
Uses each token's `decimals` parameter.

**`Example`**

```
const usdc = mgv.token("USDC");
token.fromUnits("1e7") // 10
const dai = mgv.token("DAI")
market.fromUnits("1e18") // 1
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `string` \| `number` \| `BigNumber` |

#### Returns

`Big`

#### Defined in

@mangrovedao/mangrove.js/src/mgvtoken.ts:105

___

### <a id="tounits" name="tounits"></a> toUnits

▸ **toUnits**(`amount`): `BigNumber`

Convert base/quote from public amount to internal contract amount.
Uses each token's `decimals` parameter.

If `bq` is `"base"`, will convert the base, the quote otherwise.

**`Example`**

```
const usdc = mgv.token("USDC");
token.toUnits(10) // 10e7 as ethers.BigNumber
const dai = mgv.token("DAI")
market.toUnits(1) // 1e18 as ethers.BigNumber
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `any` |

#### Returns

`BigNumber`

#### Defined in

@mangrovedao/mangrove.js/src/mgvtoken.ts:122

___

### <a id="tofixed" name="tofixed"></a> toFixed

▸ **toFixed**(`amount`, `decimals?`): `string`

Convert human-readable amounts to a string with the given
number of decimal places. Defaults to the token's decimals places.

**`Example`**

```
token.toFixed("10.123"); // "10.12"
token.toFixed(token.fromUnits("1e7"));
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `any` |
| `decimals?` | `number` |

#### Returns

`string`

#### Defined in

@mangrovedao/mangrove.js/src/mgvtoken.ts:136

___

### <a id="allowance" name="allowance"></a> allowance

▸ **allowance**(`params?`): `Promise`<`Big`\>

Return allowance of `owner` given to `spender`.
If `owner` is not specified, defaults to current signer.
If `spender` is not specified, defaults to Mangrove instance.

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `Object` |
| `params.owner?` | `string` |
| `params.spender?` | `string` |

#### Returns

`Promise`<`Big`\>

#### Defined in

@mangrovedao/mangrove.js/src/mgvtoken.ts:148

___

### <a id="getdecimals" name="getdecimals"></a> getDecimals

▸ `Static` **getDecimals**(`tokenName`): `number`

Read decimals for `tokenName` on given network.
To read decimals directly onchain, use `fetchDecimals`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenName` | `string` |

#### Returns

`number`

#### Defined in

@mangrovedao/mangrove.js/src/mgvtoken.ts:171

___

### <a id="setdecimals" name="setdecimals"></a> setDecimals

▸ `Static` **setDecimals**(`tokenName`, `dec`): `void`

Set decimals for `tokenName` on current network.

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenName` | `string` |
| `dec` | `number` |

#### Returns

`void`

#### Defined in

@mangrovedao/mangrove.js/src/mgvtoken.ts:182

___

### <a id="approvemangrove" name="approvemangrove"></a> approveMangrove

▸ **approveMangrove**(`arg?`): `Promise`<`ContractTransaction`\>

Set approval for Mangrove to `amount`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg` | `any` |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

@mangrovedao/mangrove.js/src/mgvtoken.ts:189

___

### <a id="approve" name="approve"></a> approve

▸ **approve**(`spender`, `arg?`): `Promise`<`ContractTransaction`\>

Set approval for `spender` to `amount`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `spender` | `string` |
| `arg` | `any` |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

@mangrovedao/mangrove.js/src/mgvtoken.ts:196

___

### <a id="approveifhigher" name="approveifhigher"></a> approveIfHigher

▸ **approveIfHigher**(`spender`, `arg?`): `Promise`<`ContractTransaction`\>

Sets the allowance for the spender if it is not already enough.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `spender` | `string` | The spender to approve |
| `arg` | `any` | The approval arguments |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

@mangrovedao/mangrove.js/src/mgvtoken.ts:213

___

### <a id="increaseapproval" name="increaseapproval"></a> increaseApproval

▸ **increaseApproval**(`spender`, `arg?`): `Promise`<`ContractTransaction`\>

Increases the allowance for the spender unless it is already max.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `spender` | `string` | The spender to approve |
| `arg` | `any` | The approval arguments |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

@mangrovedao/mangrove.js/src/mgvtoken.ts:226

___

### <a id="balanceof" name="balanceof"></a> balanceOf

▸ **balanceOf**(`account`, `overrides?`): `Promise`<`Big`\>

Returns the balance of `account`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | `string` |
| `overrides` | `Overrides` |

#### Returns

`Promise`<`Big`\>

#### Defined in

@mangrovedao/mangrove.js/src/mgvtoken.ts:248

___

### <a id="transfer" name="transfer"></a> transfer

▸ **transfer**(`to`, `value`, `overrides?`): `Promise`<`ContractTransaction`\>

Transfers `value` amount of tokens to address `to`

#### Parameters

| Name | Type |
| :------ | :------ |
| `to` | `string` |
| `value` | `any` |
| `overrides` | `Overrides` |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

@mangrovedao/mangrove.js/src/mgvtoken.ts:259
