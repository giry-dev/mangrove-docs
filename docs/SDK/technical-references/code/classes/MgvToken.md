[@mangrovedao/mangrove.js](../README.md) / [Exports](../modules.md) / MgvToken

# Class: MgvToken

## Table of contents

### Properties

- [mgv](MgvToken.md#mgv)
- [name](MgvToken.md#name)
- [address](MgvToken.md#address)
- [displayedDecimals](MgvToken.md#displayeddecimals)
- [decimals](MgvToken.md#decimals)
- [contract](MgvToken.md#contract)
- [unitCalculations](MgvToken.md#unitcalculations)

### Constructors

- [constructor](MgvToken.md#constructor)

### Methods

- [fromUnits](MgvToken.md#fromunits)
- [toUnits](MgvToken.md#tounits)
- [toFixed](MgvToken.md#tofixed)
- [allowance](MgvToken.md#allowance)
- [getDecimals](MgvToken.md#getdecimals)
- [setDecimals](MgvToken.md#setdecimals)
- [approveMangrove](MgvToken.md#approvemangrove)
- [approve](MgvToken.md#approve)
- [balanceOf](MgvToken.md#balanceof)
- [transfer](MgvToken.md#transfer)

## Properties

### <a id="mgv" name="mgv"></a> mgv

• **mgv**: [`Mangrove`](Mangrove.md)

#### Defined in

@mangrovedao/mangrove.js/src/mgvtoken.ts:19

___

### <a id="name" name="name"></a> name

• **name**: `string`

#### Defined in

@mangrovedao/mangrove.js/src/mgvtoken.ts:20

___

### <a id="address" name="address"></a> address

• **address**: `string`

#### Defined in

@mangrovedao/mangrove.js/src/mgvtoken.ts:21

___

### <a id="displayeddecimals" name="displayeddecimals"></a> displayedDecimals

• **displayedDecimals**: `number`

#### Defined in

@mangrovedao/mangrove.js/src/mgvtoken.ts:22

___

### <a id="decimals" name="decimals"></a> decimals

• **decimals**: `number`

#### Defined in

@mangrovedao/mangrove.js/src/mgvtoken.ts:23

___

### <a id="contract" name="contract"></a> contract

• **contract**: `TestToken`

#### Defined in

@mangrovedao/mangrove.js/src/mgvtoken.ts:25

___

### <a id="unitcalculations" name="unitcalculations"></a> unitCalculations

• **unitCalculations**: `UnitCalculations`

#### Defined in

@mangrovedao/mangrove.js/src/mgvtoken.ts:26

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new MgvToken**(`name`, `mgv`, `options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `mgv` | [`Mangrove`](Mangrove.md) |
| `options` | [`ConstructorOptions`](../modules/MgvToken-1.md#constructoroptions) |

#### Defined in

@mangrovedao/mangrove.js/src/mgvtoken.ts:27

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

@mangrovedao/mangrove.js/src/mgvtoken.ts:71

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

@mangrovedao/mangrove.js/src/mgvtoken.ts:88

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

@mangrovedao/mangrove.js/src/mgvtoken.ts:102

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

@mangrovedao/mangrove.js/src/mgvtoken.ts:114

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

@mangrovedao/mangrove.js/src/mgvtoken.ts:131

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

@mangrovedao/mangrove.js/src/mgvtoken.ts:142

___

### <a id="approvemangrove" name="approvemangrove"></a> approveMangrove

▸ **approveMangrove**(`arg?`, `overrides?`): `Promise`<`ContractTransaction`\>

Set approval for Mangrove on `amount`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg` | `Object` |
| `arg.amount?` | `any` |
| `overrides` | `Overrides` |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

@mangrovedao/mangrove.js/src/mgvtoken.ts:149

___

### <a id="approve" name="approve"></a> approve

▸ **approve**(`spender`, `arg?`, `overrides?`): `Promise`<`ContractTransaction`\>

Set approval for `spender` on `amount`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `spender` | `string` |
| `arg` | `Object` |
| `arg.amount?` | `any` |
| `overrides` | `Overrides` |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

@mangrovedao/mangrove.js/src/mgvtoken.ts:159

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

@mangrovedao/mangrove.js/src/mgvtoken.ts:173

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

@mangrovedao/mangrove.js/src/mgvtoken.ts:184
