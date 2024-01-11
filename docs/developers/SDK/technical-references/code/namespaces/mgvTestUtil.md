---
id: "mgvTestUtil"
title: "Namespace: mgvTestUtil"
sidebar_label: "mgvTestUtil"
sidebar_position: 0
custom_edit_url: null
---

## Enumerations

- [AccountName](../enums/mgvTestUtil.AccountName.md)

## Type Aliases

### <a id="account" name="account"></a> Account

Ƭ **Account**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `address` | `string` |
| `signer` | `ethers.Signer` |
| `connectedContracts` | { `mangrove`: `typechain.IMangrove` ; `testMaker`: `typechain.SimpleTestMaker` ; `tokenA`: `typechain.TestToken` ; `tokenB`: `typechain.TestToken`  } |
| `connectedContracts.mangrove` | `typechain.IMangrove` |
| `connectedContracts.testMaker` | `typechain.SimpleTestMaker` |
| `connectedContracts.tokenA` | `typechain.TestToken` |
| `connectedContracts.tokenB` | `typechain.TestToken` |

#### Defined in

@mangrovedao/mangrove.js/src/util/test/mgvIntegrationTestUtil.ts:10

___

### <a id="balances" name="balances"></a> Balances

Ƭ **Balances**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ether` | `ethers.BigNumber` |
| `tokenA` | `ethers.BigNumber` |
| `tokenB` | `ethers.BigNumber` |

#### Defined in

@mangrovedao/mangrove.js/src/util/test/mgvIntegrationTestUtil.ts:23

___

### <a id="addressandsigner" name="addressandsigner"></a> AddressAndSigner

Ƭ **AddressAndSigner**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `signer` | `string` |

#### Defined in

@mangrovedao/mangrove.js/src/util/test/mgvIntegrationTestUtil.ts:31

___

### <a id="addresses" name="addresses"></a> Addresses

Ƭ **Addresses**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `mangrove` | [`AddressAndSigner`](mgvTestUtil.md#addressandsigner) |
| `testMaker` | [`AddressAndSigner`](mgvTestUtil.md#addressandsigner) |
| `tokenA` | [`AddressAndSigner`](mgvTestUtil.md#addressandsigner) |
| `tokenB` | [`AddressAndSigner`](mgvTestUtil.md#addressandsigner) |

#### Defined in

@mangrovedao/mangrove.js/src/util/test/mgvIntegrationTestUtil.ts:33

___

### <a id="contracts" name="contracts"></a> Contracts

Ƭ **Contracts**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `mangrove` | `typechain.IMangrove` |
| `testMaker` | `typechain.SimpleTestMaker` |
| `tokenA` | `typechain.TestToken` |
| `tokenB` | `typechain.TestToken` |

#### Defined in

@mangrovedao/mangrove.js/src/util/test/mgvIntegrationTestUtil.ts:89

___

### <a id="newoffer" name="newoffer"></a> NewOffer

Ƭ **NewOffer**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `market` | [`Market`](../classes/Market.md) |
| `ba` | [`BA`](Market-1.md#ba) |
| `maker` | [`Account`](mgvTestUtil.md#account) |
| `tick?` | `ethers.BigNumberish` |
| `gives?` | `ethers.BigNumberish` |
| `gasreq?` | `ethers.BigNumberish` |
| `shouldFail?` | `boolean` |
| `shouldReturnData?` | `boolean` |
| `shouldRevert?` | `boolean` |

#### Defined in

@mangrovedao/mangrove.js/src/util/test/mgvIntegrationTestUtil.ts:218

## Variables

### <a id="bidsasks" name="bidsasks"></a> bidsAsks

• `Const` **bidsAsks**: [`BA`](Market-1.md#ba)[]

#### Defined in

@mangrovedao/mangrove.js/src/util/test/mgvIntegrationTestUtil.ts:29

___

### <a id="rawmingivesbase" name="rawmingivesbase"></a> rawMinGivesBase

• `Const` **rawMinGivesBase**: `BigNumber`

#### Defined in

@mangrovedao/mangrove.js/src/util/test/mgvIntegrationTestUtil.ts:46

___

### <a id="rawmingivesquote" name="rawmingivesquote"></a> rawMinGivesQuote

• `Const` **rawMinGivesQuote**: `BigNumber`

#### Defined in

@mangrovedao/mangrove.js/src/util/test/mgvIntegrationTestUtil.ts:47

___

### <a id="istrackingpolls" name="istrackingpolls"></a> isTrackingPolls

• **isTrackingPolls**: `boolean` = `false`

#### Defined in

@mangrovedao/mangrove.js/src/util/test/mgvIntegrationTestUtil.ts:230

___

### <a id="eventsforlasttxhavebeengeneratedpromise" name="eventsforlasttxhavebeengeneratedpromise"></a> eventsForLastTxHaveBeenGeneratedPromise

• **eventsForLastTxHaveBeenGeneratedPromise**: `Promise`<`void`\>

Await this when you want to wait for all events corresponding to the last sent tx to have been sent.

#### Defined in

@mangrovedao/mangrove.js/src/util/test/mgvIntegrationTestUtil.ts:239

## Functions

### <a id="setconfig" name="setconfig"></a> setConfig

▸ **setConfig**(`_mgv`, `accounts`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_mgv` | [`Mangrove`](../classes/Mangrove.md) |
| `accounts` | `any` |

#### Returns

`void`

#### Defined in

@mangrovedao/mangrove.js/src/util/test/mgvIntegrationTestUtil.ts:55

___

### <a id="getaddresses" name="getaddresses"></a> getAddresses

▸ **getAddresses**(): `Promise`<[`Addresses`](mgvTestUtil.md#addresses)\>

#### Returns

`Promise`<[`Addresses`](mgvTestUtil.md#addresses)\>

#### Defined in

@mangrovedao/mangrove.js/src/util/test/mgvIntegrationTestUtil.ts:62

___

### <a id="logaddresses" name="logaddresses"></a> logAddresses

▸ **logAddresses**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

@mangrovedao/mangrove.js/src/util/test/mgvIntegrationTestUtil.ts:82

___

### <a id="getcontracts" name="getcontracts"></a> getContracts

▸ **getContracts**(`signer`): `Promise`<[`Contracts`](mgvTestUtil.md#contracts)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer` | `Signer` |

#### Returns

`Promise`<[`Contracts`](mgvTestUtil.md#contracts)\>

#### Defined in

@mangrovedao/mangrove.js/src/util/test/mgvIntegrationTestUtil.ts:96

___

### <a id="getaccount" name="getaccount"></a> getAccount

▸ **getAccount**(`name`): `Promise`<[`Account`](mgvTestUtil.md#account)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | [`AccountName`](../enums/mgvTestUtil.AccountName.md) |

#### Returns

`Promise`<[`Account`](mgvTestUtil.md#account)\>

#### Defined in

@mangrovedao/mangrove.js/src/util/test/mgvIntegrationTestUtil.ts:127

___

### <a id="getaccountbalances" name="getaccountbalances"></a> getAccountBalances

▸ **getAccountBalances**(`account`, `provider`): `Promise`<[`Balances`](mgvTestUtil.md#balances)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | [`Account`](mgvTestUtil.md#account) |
| `provider` | `Provider` |

#### Returns

`Promise`<[`Balances`](mgvTestUtil.md#balances)\>

#### Defined in

@mangrovedao/mangrove.js/src/util/test/mgvIntegrationTestUtil.ts:140

___

### <a id="getbalances" name="getbalances"></a> getBalances

▸ **getBalances**(`accounts`, `provider`): `Promise`<`Map`<`string`, [`Balances`](mgvTestUtil.md#balances)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `accounts` | [`Account`](mgvTestUtil.md#account)[] |
| `provider` | `Provider` |

#### Returns

`Promise`<`Map`<`string`, [`Balances`](mgvTestUtil.md#balances)\>\>

#### Defined in

@mangrovedao/mangrove.js/src/util/test/mgvIntegrationTestUtil.ts:151

___

### <a id="logbalances" name="logbalances"></a> logBalances

▸ **logBalances**(`accounts`, `balancesBefore`, `balancesAfter`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `accounts` | [`Account`](mgvTestUtil.md#account)[] |
| `balancesBefore` | `Map`<`string`, [`Balances`](mgvTestUtil.md#balances)\> |
| `balancesAfter` | `Map`<`string`, [`Balances`](mgvTestUtil.md#balances)\> |

#### Returns

`Promise`<`void`\>

#### Defined in

@mangrovedao/mangrove.js/src/util/test/mgvIntegrationTestUtil.ts:162

___

### <a id="waitforblock" name="waitforblock"></a> waitForBlock

▸ **waitForBlock**(`mgv`, `blockNumber`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `mgv` | [`Mangrove`](../classes/Mangrove.md) |
| `blockNumber` | `number` |

#### Returns

`Promise`<`void`\>

#### Defined in

@mangrovedao/mangrove.js/src/util/test/mgvIntegrationTestUtil.ts:243

___

### <a id="initpolloftransactiontracking" name="initpolloftransactiontracking"></a> initPollOfTransactionTracking

▸ **initPollOfTransactionTracking**(`provider`): `void`

Call this to enable tracking of whether the last transaction sent by this library has been mined and polled.

#### Parameters

| Name | Type |
| :------ | :------ |
| `provider` | `Provider` |

#### Returns

`void`

#### Defined in

@mangrovedao/mangrove.js/src/util/test/mgvIntegrationTestUtil.ts:282

___

### <a id="stoppolloftransactiontracking" name="stoppolloftransactiontracking"></a> stopPollOfTransactionTracking

▸ **stopPollOfTransactionTracking**(): `void`

Call this disable tracking of whether the last transaction sent by this library has been mined and polled.

#### Returns

`void`

#### Defined in

@mangrovedao/mangrove.js/src/util/test/mgvIntegrationTestUtil.ts:292

___

### <a id="waitfortransactions" name="waitfortransactions"></a> waitForTransactions

▸ **waitForTransactions**(`txPromises`): `Promise`<`TransactionReceipt`[]\>

Use this to await transactions. In addition to convenience,
it allows us to track when events for the last tx have been generated.
NB: Only works when this is awaited before sending more tx's.

#### Parameters

| Name | Type |
| :------ | :------ |
| `txPromises` | (`undefined` \| `ContractTransaction` \| `Promise`<`undefined` \| `ContractTransaction`\>)[] \| `Promise`<(`undefined` \| `ContractTransaction` \| `Promise`<`undefined` \| `ContractTransaction`\>)[]\> |

#### Returns

`Promise`<`TransactionReceipt`[]\>

#### Defined in

@mangrovedao/mangrove.js/src/util/test/mgvIntegrationTestUtil.ts:303

___

### <a id="waitforoptionaltransaction" name="waitforoptionaltransaction"></a> waitForOptionalTransaction

▸ **waitForOptionalTransaction**(`txPromise`): `Promise`<`TransactionReceipt` \| `undefined`\>

Use this to await transactions or return immediately if promise returns undefined. In addition to convenience,
it allows us to track when events for the last tx have been generated.
NB: Only works when this is awaited before sending more tx's.

#### Parameters

| Name | Type |
| :------ | :------ |
| `txPromise` | `undefined` \| `ContractTransaction` \| `Promise`<`undefined` \| `ContractTransaction`\> |

#### Returns

`Promise`<`TransactionReceipt` \| `undefined`\>

#### Defined in

@mangrovedao/mangrove.js/src/util/test/mgvIntegrationTestUtil.ts:331

___

### <a id="waitfortransaction" name="waitfortransaction"></a> waitForTransaction

▸ **waitForTransaction**(`txPromise`): `Promise`<`TransactionReceipt`\>

Use this to await transactions. In addition to convenience,
it allows us to track when events for the last tx have been generated.
NB: Only works when this is awaited before sending more tx's.

#### Parameters

| Name | Type |
| :------ | :------ |
| `txPromise` | `ContractTransaction` \| `Promise`<`ContractTransaction`\> |

#### Returns

`Promise`<`TransactionReceipt`\>

#### Defined in

@mangrovedao/mangrove.js/src/util/test/mgvIntegrationTestUtil.ts:355

___

### <a id="postnewoffer" name="postnewoffer"></a> postNewOffer

▸ **postNewOffer**(`«destructured»`): `Promise`<`TransactionReceipt`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`NewOffer`](mgvTestUtil.md#newoffer) |

#### Returns

`Promise`<`TransactionReceipt`\>

#### Defined in

@mangrovedao/mangrove.js/src/util/test/mgvIntegrationTestUtil.ts:366

___

### <a id="postnewrevertingoffer" name="postnewrevertingoffer"></a> postNewRevertingOffer

▸ **postNewRevertingOffer**(`market`, `ba`, `maker`): `Promise`<`TransactionReceipt`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `market` | [`Market`](../classes/Market.md) |
| `ba` | [`BA`](Market-1.md#ba) |
| `maker` | [`Account`](mgvTestUtil.md#account) |

#### Returns

`Promise`<`TransactionReceipt`\>

#### Defined in

@mangrovedao/mangrove.js/src/util/test/mgvIntegrationTestUtil.ts:408

___

### <a id="postnewsucceedingoffer" name="postnewsucceedingoffer"></a> postNewSucceedingOffer

▸ **postNewSucceedingOffer**(`market`, `ba`, `maker`): `Promise`<`TransactionReceipt`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `market` | [`Market`](../classes/Market.md) |
| `ba` | [`BA`](Market-1.md#ba) |
| `maker` | [`Account`](mgvTestUtil.md#account) |

#### Returns

`Promise`<`TransactionReceipt`\>

#### Defined in

@mangrovedao/mangrove.js/src/util/test/mgvIntegrationTestUtil.ts:423

___

### <a id="postnewfailingoffer" name="postnewfailingoffer"></a> postNewFailingOffer

▸ **postNewFailingOffer**(`market`, `ba`, `maker`): `Promise`<`TransactionReceipt`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `market` | [`Market`](../classes/Market.md) |
| `ba` | [`BA`](Market-1.md#ba) |
| `maker` | [`Account`](mgvTestUtil.md#account) |

#### Returns

`Promise`<`TransactionReceipt`\>

#### Defined in

@mangrovedao/mangrove.js/src/util/test/mgvIntegrationTestUtil.ts:431

___

### <a id="setmgvgasprice" name="setmgvgasprice"></a> setMgvGasPrice

▸ **setMgvGasPrice**(`gasPrice`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `gasPrice` | `BigNumberish` |

#### Returns

`Promise`<`void`\>

#### Defined in

@mangrovedao/mangrove.js/src/util/test/mgvIntegrationTestUtil.ts:439

___

### <a id="mint" name="mint"></a> mint

▸ **mint**(`token`, `receiver`, `amount`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | [`Token`](../classes/Token.md) |
| `receiver` | [`Account`](mgvTestUtil.md#account) |
| `amount` | `number` |

#### Returns

`Promise`<`void`\>

#### Defined in

@mangrovedao/mangrove.js/src/util/test/mgvIntegrationTestUtil.ts:477
