---
id: "OfferLogic"
title: "Class: OfferLogic"
sidebar_label: "OfferLogic"
sidebar_position: 0
custom_edit_url: null
---

The OfferLogic class connects to a Maker contract

## Properties

### <a id="mgv" name="mgv"></a> mgv

• **mgv**: [`Mangrove`](Mangrove.md)

#### Defined in

@mangrovedao/mangrove.js/src/offerLogic.ts:26

___

### <a id="contract" name="contract"></a> contract

• **contract**: `ILiquidityProvider`

#### Defined in

@mangrovedao/mangrove.js/src/offerLogic.ts:27

___

### <a id="address" name="address"></a> address

• **address**: `string`

#### Defined in

@mangrovedao/mangrove.js/src/offerLogic.ts:28

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new OfferLogic**(`mgv`, `logic`, `signer?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `mgv` | [`Mangrove`](Mangrove.md) |
| `logic` | `string` |
| `signer?` | `SignerOrProvider` |

#### Defined in

@mangrovedao/mangrove.js/src/offerLogic.ts:30

## Methods

### <a id="deploy" name="deploy"></a> deploy

▸ `Static` **deploy**(`mgv`, `gasreq?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `mgv` | [`Mangrove`](Mangrove.md) |
| `gasreq?` | `number` |

#### Returns

`Promise`<`string`\>

#### Defined in

@mangrovedao/mangrove.js/src/offerLogic.ts:39

___

### <a id="router" name="router"></a> router

▸ **router**(): `Promise`<`AbstractRouter`\>

**`Note`**

Returns this logic's router. If logic has no router this call will return `undefined`

#### Returns

`Promise`<`AbstractRouter`\>

the router ethers.js contract responding to the `AbstractRouter` abi.

#### Defined in

@mangrovedao/mangrove.js/src/offerLogic.ts:57

___

### <a id="approvetoken" name="approvetoken"></a> approveToken

▸ **approveToken**(`tokenName`, `arg?`): `Promise`<`ContractTransaction`\>

**`Note`**

Approves the logic to spend `token`s on signer's behalf.
This has to be done for each token the signer's wishes to ask or bid for.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tokenName` | `string` | - |
| `arg` | `any` | optional `arg.amount` can be used if one wishes to approve a finite amount |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

@mangrovedao/mangrove.js/src/offerLogic.ts:72

___

### <a id="allowance" name="allowance"></a> allowance

▸ **allowance**(`tokenName`): `Promise`<`Big`\>

**`Note`**

returns logic's allowance to trade `tokenName` on signer's behalf

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenName` | `string` |

#### Returns

`Promise`<`Big`\>

#### Defined in

@mangrovedao/mangrove.js/src/offerLogic.ts:88

___

### <a id="connect" name="connect"></a> connect

▸ **connect**(`sOp`): [`OfferLogic`](OfferLogic.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `sOp` | `SignerOrProvider` |

#### Returns

[`OfferLogic`](OfferLogic.md)

#### Defined in

@mangrovedao/mangrove.js/src/offerLogic.ts:105

___

### <a id="offergasreq" name="offergasreq"></a> offerGasreq

▸ **offerGasreq**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

#### Defined in

@mangrovedao/mangrove.js/src/offerLogic.ts:109

___

### <a id="setadmin" name="setadmin"></a> setAdmin

▸ **setAdmin**(`newAdmin`, `overrides?`): `Promise`<`TransactionResponse`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `newAdmin` | `string` |
| `overrides` | `Overrides` |

#### Returns

`Promise`<`TransactionResponse`\>

#### Defined in

@mangrovedao/mangrove.js/src/offerLogic.ts:114

___

### <a id="admin" name="admin"></a> admin

▸ **admin**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Defined in

@mangrovedao/mangrove.js/src/offerLogic.ts:125

___

### <a id="activate" name="activate"></a> activate

▸ **activate**(`tokenNames`, `overrides?`): `Promise`<`TransactionResponse`\>

**`Note`**

(contract admin action) activates logic

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tokenNames` | `string`[] | the names of the tokens one wishes the logic to trade |
| `overrides` | `Overrides` | - |

#### Returns

`Promise`<`TransactionResponse`\>

#### Defined in

@mangrovedao/mangrove.js/src/offerLogic.ts:137

___

### <a id="retractoffer" name="retractoffer"></a> retractOffer

▸ **retractOffer**(`outbound_tkn`, `inbound_tkn`, `id`, `deprovision`, `overrides`): `Promise`<`TransactionResponse`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `outbound_tkn` | `string` |
| `inbound_tkn` | `string` |
| `id` | `number` |
| `deprovision` | `boolean` |
| `overrides` | `Overrides` |

#### Returns

`Promise`<`TransactionResponse`\>

#### Defined in

@mangrovedao/mangrove.js/src/offerLogic.ts:148

___

### <a id="withdrawfrommangrove" name="withdrawfrommangrove"></a> withdrawFromMangrove

▸ **withdrawFromMangrove**(`amount`, `overrides?`): `Promise`<`TransactionResponse`\>

tx will revert is signer is not the admin of the OfferLogic onchain contract

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `any` |
| `overrides` | `Overrides` |

#### Returns

`Promise`<`TransactionResponse`\>

#### Defined in

@mangrovedao/mangrove.js/src/offerLogic.ts:166

___

### <a id="liquidityprovider" name="liquidityprovider"></a> liquidityProvider

▸ **liquidityProvider**(`p`): `Promise`<[`LiquidityProvider`](LiquidityProvider.md)\>

Connects the logic to a Market in order to pass market orders. The function returns a LiquidityProvider object

#### Parameters

| Name | Type |
| :------ | :------ |
| `p` | [`Market`](Market.md) \| { `base`: `string` ; `quote`: `string` ; `bookOptions?`: [`BookOptions`](../namespaces/Market-1.md#bookoptions)  } |

#### Returns

`Promise`<[`LiquidityProvider`](LiquidityProvider.md)\>

#### Defined in

@mangrovedao/mangrove.js/src/offerLogic.ts:178
