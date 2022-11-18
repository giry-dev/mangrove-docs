---
id: "OfferLogic"
title: "Class: OfferLogic"
sidebar_label: "OfferLogic"
sidebar_position: 0
custom_edit_url: null
---

The OfferLogic class connects to a OfferLogic contract.
It posts onchain offers.

## Properties

### <a id="mgv" name="mgv"></a> mgv

• **mgv**: [`Mangrove`](Mangrove.md)

#### Defined in

@mangrovedao/mangrove.js/src/offerLogic.ts:29

___

### <a id="contract" name="contract"></a> contract

• **contract**: `OfferForwarder`

#### Defined in

@mangrovedao/mangrove.js/src/offerLogic.ts:30

___

### <a id="address" name="address"></a> address

• **address**: `string`

#### Defined in

@mangrovedao/mangrove.js/src/offerLogic.ts:31

___

### <a id="isforwarder" name="isforwarder"></a> isForwarder

• **isForwarder**: `boolean`

#### Defined in

@mangrovedao/mangrove.js/src/offerLogic.ts:32

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new OfferLogic**(`mgv`, `logic`, `isForwarder`, `signer?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `mgv` | [`Mangrove`](Mangrove.md) |
| `logic` | `string` |
| `isForwarder` | `boolean` |
| `signer?` | `SignerOrProvider` |

#### Defined in

@mangrovedao/mangrove.js/src/offerLogic.ts:34

## Methods

### <a id="deploy" name="deploy"></a> deploy

▸ `Static` **deploy**(`mgv`): `Promise`<`string`\>

**`Note`**

Deploys a fresh MangroveOffer contract

#### Parameters

| Name | Type |
| :------ | :------ |
| `mgv` | [`Mangrove`](Mangrove.md) |

#### Returns

`Promise`<`string`\>

The new contract address

#### Defined in

@mangrovedao/mangrove.js/src/offerLogic.ts:52

___

### <a id="mangroveallowance" name="mangroveallowance"></a> mangroveAllowance

▸ **mangroveAllowance**(`tokenName`): `Promise`<`Big`\>

**`Note`**

Returns the allowance Mangrove has to spend token on the contract's
behalf.

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenName` | `string` |

#### Returns

`Promise`<`Big`\>

the current allowance the contract has on Mangrove

#### Defined in

@mangrovedao/mangrove.js/src/offerLogic.ts:69

___

### <a id="router" name="router"></a> router

▸ **router**(): `Promise`<`AbstractRouter`\>

**`Note`**

Returns this logic's router. If logic has no router this call will return `undefined`

#### Returns

`Promise`<`AbstractRouter`\>

the router ethers.js contract responding to the `AbstractRouter` abi.

#### Defined in

@mangrovedao/mangrove.js/src/offerLogic.ts:79

___

### <a id="aavemodule" name="aavemodule"></a> aaveModule

▸ **aaveModule**(`address`): [`AaveV3Module`](AaveV3Module.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

[`AaveV3Module`](AaveV3Module.md)

#### Defined in

@mangrovedao/mangrove.js/src/offerLogic.ts:89

___

### <a id="approvetoken" name="approvetoken"></a> approveToken

▸ **approveToken**(`tokenName`, `arg?`, `overrides`): `Promise`<`TransactionResponse`\>

**`Note`**

Approves the logic to spend `token`s on signer's behalf.
This has to be done for each token the signer's wishes to ask or bid for.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tokenName` | `string` | - |
| `arg` | `Object` | optional `arg.amount` can be used if one wishes to approve a finite amount |
| `arg.amount?` | `any` | - |
| `overrides` | `Overrides` | - |

#### Returns

`Promise`<`TransactionResponse`\>

#### Defined in

@mangrovedao/mangrove.js/src/offerLogic.ts:98

___

### <a id="allowance" name="allowance"></a> allowance

▸ **allowance**(`tokenName`): `Promise`<`Big`\>

**`Note`**

returns logic allowance to trade `tokenName` on signer's behalf

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenName` | `string` |

#### Returns

`Promise`<`Big`\>

#### Defined in

@mangrovedao/mangrove.js/src/offerLogic.ts:115

___

### <a id="balanceonmangrove" name="balanceonmangrove"></a> balanceOnMangrove

▸ **balanceOnMangrove**(`owner?`, `overrides?`): `Promise`<`Big`\>

**`Note`**

Get the current provision balance (native token) the logic has on Mangrove

**`Dev`**

if the underlying logic is multi user, then this only shows the pooled provision the contract has on Mangrove

#### Parameters

| Name | Type |
| :------ | :------ |
| `owner` | `string` |
| `overrides` | `Overrides` |

#### Returns

`Promise`<`Big`\>

#### Defined in

@mangrovedao/mangrove.js/src/offerLogic.ts:135

___

### <a id="tokenbalance" name="tokenbalance"></a> tokenBalance

▸ **tokenBalance**(`tokenName`, `maker?`, `overrides?`): `Promise`<`Big`\>

**`Note`**

a contract's reserve is where contract's liquidity is stored (waiting for a trade execution)
This function returns the balance of a token type on contract's reserve (note that where tokens are stored depends on the contracts implementation)
if this contract is single user this is the contracts's unique reserve, if it is multi user this is the signer's reserve of tokens

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tokenName` | `string` | one wishes to know the balance of. |
| `maker?` | `string` | optional maker to get balance for; otherwise, the signer. |
| `overrides` | `Overrides` | ethers.js overrides |

#### Returns

`Promise`<`Big`\>

the balance of tokens

#### Defined in

@mangrovedao/mangrove.js/src/offerLogic.ts:152

___

### <a id="withdrawtoken" name="withdrawtoken"></a> withdrawToken

▸ **withdrawToken**(`tokenName`, `recipient`, `amount`, `overrides?`): `Promise`<`TransactionResponse`\>

**`Note`**

Withdraws `amount` tokens from offer logic
if contract is single user tokens are redeems from the contract's reserve (admin only tx)
if contract is multi user, tokens are redeemed form signer's reserve

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tokenName` | `string` | the token type on wishes to withdraw |
| `recipient` | `string` | the address to which the withdrawn tokens should be sent |
| `amount` | `any` | - |
| `overrides` | `Overrides` | ethers.js overrides |

#### Returns

`Promise`<`TransactionResponse`\>

#### Defined in

@mangrovedao/mangrove.js/src/offerLogic.ts:173

___

### <a id="connect" name="connect"></a> connect

▸ **connect**(`sOp`, `isForwarder`): [`OfferLogic`](OfferLogic.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `sOp` | `SignerOrProvider` |
| `isForwarder` | `boolean` |

#### Returns

[`OfferLogic`](OfferLogic.md)

#### Defined in

@mangrovedao/mangrove.js/src/offerLogic.ts:188

___

### <a id="fundmangrove" name="fundmangrove"></a> fundMangrove

▸ **fundMangrove**(`amount`, `overrides?`): `Promise`<`TransactionResponse`\>

Fund the current contract balance with ethers sent from current signer.

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `any` |
| `overrides` | `Overrides` |

#### Returns

`Promise`<`TransactionResponse`\>

#### Defined in

@mangrovedao/mangrove.js/src/offerLogic.ts:194

___

### <a id="getdefaultgasreq" name="getdefaultgasreq"></a> getDefaultGasreq

▸ **getDefaultGasreq**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

#### Defined in

@mangrovedao/mangrove.js/src/offerLogic.ts:201

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

@mangrovedao/mangrove.js/src/offerLogic.ts:206

___

### <a id="getadmin" name="getadmin"></a> getAdmin

▸ **getAdmin**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Defined in

@mangrovedao/mangrove.js/src/offerLogic.ts:213

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

@mangrovedao/mangrove.js/src/offerLogic.ts:221

___

### <a id="newoffer" name="newoffer"></a> newOffer

▸ **newOffer**(`outbound_tkn`, `inbound_tkn`, `wants`, `gives`, `gasreq`, `gasprice`, `pivot`, `overrides`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `outbound_tkn` | [`MgvToken`](MgvToken.md) |
| `inbound_tkn` | [`MgvToken`](MgvToken.md) |
| `wants` | `any` |
| `gives` | `any` |
| `gasreq` | `number` |
| `gasprice` | `number` |
| `pivot` | `number` |
| `overrides` | `PayableOverrides` |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

@mangrovedao/mangrove.js/src/offerLogic.ts:231

___

### <a id="updateoffer" name="updateoffer"></a> updateOffer

▸ **updateOffer**(`outbound_tkn`, `inbound_tkn`, `wants`, `gives`, `gasreq`, `gasprice`, `pivot`, `offerId`, `overrides`): `Promise`<`TransactionResponse`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `outbound_tkn` | [`MgvToken`](MgvToken.md) |
| `inbound_tkn` | [`MgvToken`](MgvToken.md) |
| `wants` | `any` |
| `gives` | `any` |
| `gasreq` | `number` |
| `gasprice` | `number` |
| `pivot` | `number` |
| `offerId` | `number` |
| `overrides` | `PayableOverrides` |

#### Returns

`Promise`<`TransactionResponse`\>

#### Defined in

@mangrovedao/mangrove.js/src/offerLogic.ts:276

___

### <a id="retractoffer" name="retractoffer"></a> retractOffer

▸ **retractOffer**(`outbound_tkn`, `inbound_tkn`, `id`, `deprovision`, `overrides`): `Promise`<`TransactionResponse`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `outbound_tkn` | [`MgvToken`](MgvToken.md) |
| `inbound_tkn` | [`MgvToken`](MgvToken.md) |
| `id` | `number` |
| `deprovision` | `boolean` |
| `overrides` | `Overrides` |

#### Returns

`Promise`<`TransactionResponse`\>

#### Defined in

@mangrovedao/mangrove.js/src/offerLogic.ts:301

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

@mangrovedao/mangrove.js/src/offerLogic.ts:319

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

@mangrovedao/mangrove.js/src/offerLogic.ts:331
