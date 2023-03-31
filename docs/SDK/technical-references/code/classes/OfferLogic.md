---
id: "OfferLogic"
title: "Class: OfferLogic"
sidebar_label: "OfferLogic"
sidebar_position: 0
custom_edit_url: null
---

**`Title`**

The OfferLogic class connects to a Maker contract implementing the IOfferLogic interface.

## Properties

### <a id="mgv" name="mgv"></a> mgv

• **mgv**: [`Mangrove`](Mangrove.md)

#### Defined in

@mangrovedao/mangrove.js/src/offerLogic.ts:22

___

### <a id="contract" name="contract"></a> contract

• **contract**: `IOfferLogic`

#### Defined in

@mangrovedao/mangrove.js/src/offerLogic.ts:23

___

### <a id="address" name="address"></a> address

• **address**: `string`

#### Defined in

@mangrovedao/mangrove.js/src/offerLogic.ts:24

___

### <a id="signerorprovider" name="signerorprovider"></a> signerOrProvider

• **signerOrProvider**: `SignerOrProvider`

#### Defined in

@mangrovedao/mangrove.js/src/offerLogic.ts:25

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

@mangrovedao/mangrove.js/src/offerLogic.ts:27

## Methods

### <a id="router" name="router"></a> router

▸ **router**(): `Promise`<`AbstractRouter`\>

**`Note`**

Returns this logic's router. If logic has no router this call will return `undefined`

#### Returns

`Promise`<`AbstractRouter`\>

the router ethers.js contract responding to the `AbstractRouter` abi.

#### Defined in

@mangrovedao/mangrove.js/src/offerLogic.ts:41

___

### <a id="hasrouter" name="hasrouter"></a> hasRouter

▸ **hasRouter**(): `Promise`<`boolean`\>

Determines whether the offer logic has a router

#### Returns

`Promise`<`boolean`\>

True if the offer logic has a router, false otherwise.

#### Defined in

@mangrovedao/mangrove.js/src/offerLogic.ts:54

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

@mangrovedao/mangrove.js/src/offerLogic.ts:63

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

@mangrovedao/mangrove.js/src/offerLogic.ts:79

___

### <a id="connect" name="connect"></a> connect

▸ **connect**(`signerOrProvider`): [`OfferLogic`](OfferLogic.md)

Returns a new `OfferLogic` object with a different signer or provider connected to its ethers.js `contract`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `signerOrProvider` | `SignerOrProvider` | the new signer or provider to connect to the contract. |

#### Returns

[`OfferLogic`](OfferLogic.md)

a new `OfferLogic` object with a different signer or provider.

#### Defined in

@mangrovedao/mangrove.js/src/offerLogic.ts:99

___

### <a id="offergasreq" name="offergasreq"></a> offerGasreq

▸ **offerGasreq**(): `Promise`<`number`\>

Retrieves the gasreq necessary for offers of this OfferLogic to execute a trade.

#### Returns

`Promise`<`number`\>

#### Defined in

@mangrovedao/mangrove.js/src/offerLogic.ts:104

___

### <a id="setadmin" name="setadmin"></a> setAdmin

▸ **setAdmin**(`newAdmin`, `overrides?`): `Promise`<`TransactionResponse`\>

Sets the admin of the contract if the Contract implements the AccessControlled interface.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newAdmin` | `string` | the new admin address. |
| `overrides` | `Overrides` | The ethers overrides to use when calling the setAdmin function. |

#### Returns

`Promise`<`TransactionResponse`\>

The transaction used to set the new admin.

#### Defined in

@mangrovedao/mangrove.js/src/offerLogic.ts:114

___

### <a id="admin" name="admin"></a> admin

▸ **admin**(): `Promise`<`string`\>

Retrieves the current admin of the contract if the contract implements the AccessControlled interface

#### Returns

`Promise`<`string`\>

The address of the current admin.

#### Defined in

@mangrovedao/mangrove.js/src/offerLogic.ts:128

___

### <a id="activate" name="activate"></a> activate

▸ **activate**(`tokenNames`, `overrides?`): `Promise`<`TransactionResponse`\>

**`Note`**

(contract admin action) activates logic

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tokenNames` | `string`[] | the names of the tokens one wishes the logic to trade |
| `overrides` | `Overrides` | The ethers overrides to use when calling the activate function. |

#### Returns

`Promise`<`TransactionResponse`\>

The transaction used to activate the OfferLogic.

#### Defined in

@mangrovedao/mangrove.js/src/offerLogic.ts:142

___

### <a id="getmangrovebalance" name="getmangrovebalance"></a> getMangroveBalance

▸ **getMangroveBalance**(): `Promise`<`Big`\>

Retrieves the provision available on Mangrove for the offer logic, in ethers

#### Returns

`Promise`<`Big`\>

#### Defined in

@mangrovedao/mangrove.js/src/offerLogic.ts:153

___

### <a id="fundonmangrove" name="fundonmangrove"></a> fundOnMangrove

▸ **fundOnMangrove**(`funds`, `overrides?`): `Promise`<`ContractTransaction`\>

Adds ethers for provisioning offers on Mangrove for the offer logic.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `funds` | `any` | The amount of funds to add in ethers. |
| `overrides` | `Overrides` | The ethers overrides to use when calling the fund function. |

#### Returns

`Promise`<`ContractTransaction`\>

The transaction used to fund the offer logic.

#### Defined in

@mangrovedao/mangrove.js/src/offerLogic.ts:162

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

@mangrovedao/mangrove.js/src/offerLogic.ts:168
