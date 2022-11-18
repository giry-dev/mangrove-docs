---
id: "AaveV3Module"
title: "Class: AaveV3Module"
sidebar_label: "AaveV3Module"
sidebar_position: 0
custom_edit_url: null
---

The OfferLogic class connects to a OfferLogic contract.
It posts onchain offers.

## Properties

### <a id="mgv" name="mgv"></a> mgv

• **mgv**: [`Mangrove`](Mangrove.md)

#### Defined in

@mangrovedao/mangrove.js/src/aaveV3Module.ts:18

___

### <a id="contract" name="contract"></a> contract

• **contract**: `AaveV3Module`

#### Defined in

@mangrovedao/mangrove.js/src/aaveV3Module.ts:19

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new AaveV3Module**(`mgv`, `address`, `signer?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `mgv` | [`Mangrove`](Mangrove.md) |
| `address` | `string` |
| `signer?` | `SignerOrProvider` |

#### Defined in

@mangrovedao/mangrove.js/src/aaveV3Module.ts:21

## Methods

### <a id="approvedelegation" name="approvedelegation"></a> approveDelegation

▸ **approveDelegation**(`tokenName`, `borrower`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenName` | `string` |
| `borrower` | `string` |
| `overrides` | `Overrides` |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

@mangrovedao/mangrove.js/src/aaveV3Module.ts:41

___

### <a id="status" name="status"></a> status

▸ **status**(`tokenName`, `account`): `Promise`<{ `available`: `Big` ; `borrowable`: `Big` ; `borrowing`: `Big`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenName` | `string` |
| `account` | `string` |

#### Returns

`Promise`<{ `available`: `Big` ; `borrowable`: `Big` ; `borrowing`: `Big`  }\>

#### Defined in

@mangrovedao/mangrove.js/src/aaveV3Module.ts:54

___

### <a id="logstatus" name="logstatus"></a> logStatus

▸ **logStatus**(`tokenNames`, `account?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenNames` | `string`[] |
| `account?` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

@mangrovedao/mangrove.js/src/aaveV3Module.ts:69
