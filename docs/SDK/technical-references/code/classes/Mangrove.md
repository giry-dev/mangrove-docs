---
id: "Mangrove"
title: "Class: Mangrove"
sidebar_label: "Mangrove"
sidebar_position: 0
custom_edit_url: null
---

## Properties

### <a id="provider" name="provider"></a> provider

• **provider**: `Provider`

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:104

___

### <a id="signer" name="signer"></a> signer

• **signer**: `Signer`

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:105

___

### <a id="network" name="network"></a> network

• **network**: [`ProviderNetwork`](../interfaces/eth.ProviderNetwork.md)

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:106

___

### <a id="_readonly" name="_readonly"></a> \_readOnly

• **\_readOnly**: `boolean`

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:107

___

### <a id="address" name="address"></a> address

• **address**: `string`

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:108

___

### <a id="contract" name="contract"></a> contract

• **contract**: `Mangrove`

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:109

___

### <a id="readercontract" name="readercontract"></a> readerContract

• **readerContract**: `MgvReader`

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:110

___

### <a id="cleanercontract" name="cleanercontract"></a> cleanerContract

• **cleanerContract**: `MgvCleaner`

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:111

___

### <a id="multicallcontract" name="multicallcontract"></a> multicallContract

• **multicallContract**: `Multicall2`

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:112

___

### <a id="ordercontract" name="ordercontract"></a> orderContract

• **orderContract**: `MangroveOrder`

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:113

___

### <a id="reliableprovider" name="reliableprovider"></a> reliableProvider

• **reliableProvider**: `ReliableProvider`

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:114

___

### <a id="mangroveeventsubscriber" name="mangroveeventsubscriber"></a> mangroveEventSubscriber

• **mangroveEventSubscriber**: `MangroveEventSubscriber`

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:115

___

### <a id="eventemitter" name="eventemitter"></a> eventEmitter

• **eventEmitter**: `EventEmitter`

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:117

___

### <a id="devnode" name="devnode"></a> devNode

▪ `Static` **devNode**: `DevNode`

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:119

___

### <a id="typechain" name="typechain"></a> typechain

▪ `Static` **typechain**: `__module` = `typechain`

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:120

## Methods

### <a id="connect" name="connect"></a> connect

▸ `Static` **connect**(`options?`): `Promise`<[`Mangrove`](Mangrove.md)\>

Creates an instance of the Mangrove Typescript object

**`Example`**

```
const mgv = await require('mangrove.js').connect(options); // web browser
```

if options is a string `s`, it is considered to be `{provider:s}`
const mgv = await require('mangrove.js').connect('http://127.0.0.1:8545'); // HTTP provider

Options:
* privateKey: `0x...`
* mnemonic: `horse battery ...`
* path: `m/44'/60'/0'/...`
* provider: url, provider object, or chain string

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `string` \| [`CreateOptions`](../namespaces/Mangrove-1.md#createoptions) | Optional provider options. |

#### Returns

`Promise`<[`Mangrove`](Mangrove.md)\>

Returns an instance mangrove.js

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:143

___

### <a id="disconnect" name="disconnect"></a> disconnect

▸ **disconnect**(): `void`

#### Returns

`void`

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:230

___

### <a id="updateconfiguration" name="updateconfiguration"></a> updateConfiguration

▸ **updateConfiguration**(`config?`): `void`

Update the configuration by providing a partial configuration containing only the values that should be changed/added.

**`Example`**

```
updateConfiguration({
  tokens: {
    SYM: {
      decimals: 18
    }
  }
})
```
This adds configuration for a new token with symbol "SYM". Or, if "SYM" was already configured, ensures that its `decimals` is set to 18.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config?` | `RecursivePartial`<`Configuration`\> | Partial configuration that should be merged into the existing configuration. |

#### Returns

`void`

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:343

___

### <a id="resetconfiguration" name="resetconfiguration"></a> resetConfiguration

▸ **resetConfiguration**(): `void`

Reset the configuration to defaults provided by mangrove.js

#### Returns

`void`

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:348

___

### <a id="market" name="market"></a> market

▸ **market**(`params`): `Promise`<[`Market`](Market.md)\>

************

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `Object` |
| `params.base` | `string` |
| `params.quote` | `string` |
| `params.bookOptions?` | [`BookOptions`](../namespaces/Market-1.md#bookoptions) |

#### Returns

`Promise`<[`Market`](Market.md)\>

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:379

___

### <a id="offerlogic" name="offerlogic"></a> offerLogic

▸ **offerLogic**(`logic`): [`OfferLogic`](OfferLogic.md)

Get an OfferLogic object allowing one to monitor and set up an onchain offer logic

#### Parameters

| Name | Type |
| :------ | :------ |
| `logic` | `string` |

#### Returns

[`OfferLogic`](OfferLogic.md)

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:399

___

### <a id="liquidityprovider" name="liquidityprovider"></a> liquidityProvider

▸ **liquidityProvider**(`p`): `Promise`<[`LiquidityProvider`](LiquidityProvider.md)\>

Get a LiquidityProvider object to enable Mangrove's signer to pass buy and sell orders

#### Parameters

| Name | Type |
| :------ | :------ |
| `p` | [`Market`](Market.md) \| { `base`: `string` ; `quote`: `string` ; `bookOptions?`: [`BookOptions`](../namespaces/Market-1.md#bookoptions)  } |

#### Returns

`Promise`<[`LiquidityProvider`](LiquidityProvider.md)\>

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:414

___

### <a id="token" name="token"></a> token

▸ **token**(`name`, `options?`): `Promise`<[`MgvToken`](MgvToken.md)\>

Return MgvToken instance, fetching data (decimals) from chain if needed.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `options?` | [`ConstructorOptions`](../namespaces/MgvToken-1.md#constructoroptions) |

#### Returns

`Promise`<[`MgvToken`](MgvToken.md)\>

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:442

___

### <a id="tokenfromconfig" name="tokenfromconfig"></a> tokenFromConfig

▸ **tokenFromConfig**(`name`, `options?`): [`MgvToken`](MgvToken.md)

Return MgvToken instance reading only from configuration, not from chain.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `options?` | [`ConstructorOptions`](../namespaces/MgvToken-1.md#constructoroptions) |

#### Returns

[`MgvToken`](MgvToken.md)

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:450

___

### <a id="getaddress" name="getaddress"></a> getAddress

▸ **getAddress**(`name`): `string`

Read a contract address on the current network.

Note that this reads from the static `Mangrove` address registry which is shared across instances of this class.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`string`

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:462

___

### <a id="setaddress" name="setaddress"></a> setAddress

▸ **setAddress**(`name`, `address`): `void`

Set a contract address on the current network.

Note that this writes to the static `Mangrove` address registry which is shared across instances of this class.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `address` | `string` |

#### Returns

`void`

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:474

___

### <a id="getnamefromaddress" name="getnamefromaddress"></a> getNameFromAddress

▸ **getNameFromAddress**(`address`): `undefined` \| `string`

Gets the name of an address on the current network.

Note that this reads from the static `Mangrove` address registry which is shared across instances of this class.

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

`undefined` \| `string`

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:487

___

### <a id="gettokenandaddress" name="gettokenandaddress"></a> getTokenAndAddress

▸ **getTokenAndAddress**(`address`): `Promise`<{ `address`: `string` ; `token?`: [`MgvToken`](MgvToken.md)  }\>

Gets the token corresponding to the address if it is known; otherwise, undefined.

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

`Promise`<{ `address`: `string` ; `token?`: [`MgvToken`](MgvToken.md)  }\>

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:496

___

### <a id="tounits" name="tounits"></a> toUnits

▸ `Static` **toUnits**(`amount`, `nameOrDecimals`): `BigNumber`

Convert public token amount to internal token representation.

if `nameOrDecimals` is a string, it is interpreted as a token name. Otherwise
it is the number of decimals.

For convenience, has a static and an instance version.

**`Example`**

```
 Mangrove.toUnits(10,"USDC") // 10e6 as ethers.BigNumber
 mgv.toUnits(10,6) // 10e6 as ethers.BigNumber
 ```

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `BigSource` |
| `nameOrDecimals` | `string` \| `number` |

#### Returns

`BigNumber`

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:519

___

### <a id="tounits-1" name="tounits-1"></a> toUnits

▸ **toUnits**(`amount`, `nameOrDecimals`): `BigNumber`

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `BigSource` |
| `nameOrDecimals` | `string` \| `number` |

#### Returns

`BigNumber`

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:525

___

### <a id="fromunits" name="fromunits"></a> fromUnits

▸ **fromUnits**(`amount`, `nameOrDecimals`): `Big`

Convert internal token amount to public token representation.

if `nameOrDecimals` is a string, it is interpreted as a token name. Otherwise
it is the number of decimals.

**`Example`**

```
 mgv.fromUnits("1e19","DAI") // 10
 mgv.fromUnits("1e19",18) // 10
 ```

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `string` \| `number` \| `BigNumber` |
| `nameOrDecimals` | `string` \| `number` |

#### Returns

`Big`

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:540

___

### <a id="balanceof" name="balanceof"></a> balanceOf

▸ **balanceOf**(`address`, `overrides?`): `Promise`<`Big`\>

Provision available at mangrove for address given in argument, in ethers

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `overrides` | `Overrides` |

#### Returns

`Promise`<`Big`\>

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:548

___

### <a id="fundmangrove" name="fundmangrove"></a> fundMangrove

▸ **fundMangrove**(`amount`, `maker`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `BigSource` |
| `maker` | `string` |
| `overrides` | `Overrides` |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:556

___

### <a id="withdraw" name="withdraw"></a> withdraw

▸ **withdraw**(`amount`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `BigSource` |
| `overrides` | `Overrides` |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:565

___

### <a id="approvemangrove" name="approvemangrove"></a> approveMangrove

▸ **approveMangrove**(`tokenName`, `arg?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenName` | `string` |
| `arg` | `ApproveArgs` |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:572

___

### <a id="calculateofferprovision" name="calculateofferprovision"></a> calculateOfferProvision

▸ **calculateOfferProvision**(`gasprice`, `gasreq`, `gasbase`): `Big`

Calculates the provision required or locked for an offer based on the given parameters

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `gasprice` | `number` | the gas price for the offer in gwei. |
| `gasreq` | `number` | the gas requirement for the offer |
| `gasbase` | `number` | the offer list's offer_gasbase. |

#### Returns

`Big`

the required provision, in ethers.

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:586

___

### <a id="calculateoffersprovision" name="calculateoffersprovision"></a> calculateOffersProvision

▸ **calculateOffersProvision**(`offers`): `Big`

Calculates the provision required or locked for offers based on the given parameters

#### Parameters

| Name | Type |
| :------ | :------ |
| `offers` | { `gasprice`: `number` ; `gasreq`: `number` ; `gasbase`: `number`  }[] |

#### Returns

`Big`

the required provision, in ethers.

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:602

___

### <a id="getmissingprovision" name="getmissingprovision"></a> getMissingProvision

▸ **getMissingProvision**(`lockedProvision`, `totalRequiredProvision`): `Big`

Gets the missing provision based on the required provision and the locked provision.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `lockedProvision` | `BigSource` | the provision already locked for an offer. |
| `totalRequiredProvision` | `BigSource` | the provision required for an offer. |

#### Returns

`Big`

the additional required provision, in ethers.

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:623

___

### <a id="config" name="config"></a> config

▸ **config**(): `Promise`<[`GlobalConfig`](../namespaces/Mangrove-1.md#globalconfig)\>

Return global Mangrove config

#### Returns

`Promise`<[`GlobalConfig`](../namespaces/Mangrove-1.md#globalconfig)\>

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:636

___

### <a id="normalizepermitdata" name="normalizepermitdata"></a> normalizePermitData

▸ **normalizePermitData**(`params`): `Promise`<[`PermitData`](../namespaces/Mangrove-1.md#permitdata)\>

Permit data normalization
Autofill/convert 'nonce' field of permit data if need, convert deadline to
num if needed.

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`SimplePermitData`](../namespaces/Mangrove-1.md#simplepermitdata) |

#### Returns

`Promise`<[`PermitData`](../namespaces/Mangrove-1.md#permitdata)\>

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:655

___

### <a id="simplesignpermitdata" name="simplesignpermitdata"></a> simpleSignPermitData

▸ **simpleSignPermitData**(`params`): `Promise`<`string`\>

Sign typed data for permit().
To set the deadline to +days or +months, you can do
let date = new Date();
date.setDate(date.getDate() + days);
date.setMonth(date.getMonth() + months);
- Nonce is auto-selected if needed and can be a number
- Date can be a Date or a number

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`SimplePermitData`](../namespaces/Mangrove-1.md#simplepermitdata) |

#### Returns

`Promise`<`string`\>

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:686

___

### <a id="signpermitdata" name="signpermitdata"></a> signPermitData

▸ **signPermitData**(`data`): `Promise`<`string`\>

Permit data generator for normalized permit data input

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`PermitData`](../namespaces/Mangrove-1.md#permitdata) |

#### Returns

`Promise`<`string`\>

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:692

___

### <a id="permit" name="permit"></a> permit

▸ **permit**(`params`): `Promise`<`ContractTransaction`\>

Give permit to Mangrove.
Permit params.spender to buy on behalf of owner on the outbound/inbound
offer list up to value. Default deadline is now + 1 day. Default nonce is
current owner nonce.

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`SimplePermitData`](../namespaces/Mangrove-1.md#simplepermitdata) |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:728

___

### <a id="getalladdresses" name="getalladdresses"></a> getAllAddresses

▸ `Static` **getAllAddresses**(`network`): [`string`, `string`][]

Read all contract addresses on the given network.

#### Parameters

| Name | Type |
| :------ | :------ |
| `network` | `string` |

#### Returns

[`string`, `string`][]

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:760

___

### <a id="getaddress-1" name="getaddress-1"></a> getAddress

▸ `Static` **getAddress**(`name`, `network`): `string`

Read a contract address on a given network.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `network` | `string` |

#### Returns

`string`

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:767

___

### <a id="setaddress-1" name="setaddress-1"></a> setAddress

▸ `Static` **setAddress**(`name`, `address`, `network`): `void`

Set a contract address on the given network.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `address` | `string` |
| `network` | `string` |

#### Returns

`void`

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:774

___

### <a id="getnamefromaddress-1" name="getnamefromaddress-1"></a> getNameFromAddress

▸ `Static` **getNameFromAddress**(`address`, `network`): `undefined` \| `string`

Gets the name of an address on the given network.

Note that this reads from the static `Mangrove` address registry which is shared across instances of this class.

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `network` | `string` |

#### Returns

`undefined` \| `string`

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:783

___

### <a id="getdecimals" name="getdecimals"></a> getDecimals

▸ `Static` **getDecimals**(`tokenName`): `undefined` \| `number`

Read decimals for `tokenName` on given network.
To read decimals directly onchain, use `fetchDecimals`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenName` | `string` |

#### Returns

`undefined` \| `number`

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:794

___

### <a id="getdecimalsorfail" name="getdecimalsorfail"></a> getDecimalsOrFail

▸ `Static` **getDecimalsOrFail**(`tokenName`): `number`

Read decimals for `tokenName`. Fails if the decimals are not in the configuration.
To read decimals directly onchain, use `fetchDecimals`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenName` | `string` |

#### Returns

`number`

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:802

___

### <a id="getorfetchdecimals" name="getorfetchdecimals"></a> getOrFetchDecimals

▸ `Static` **getOrFetchDecimals**(`tokenName`, `provider`): `Promise`<`number`\>

Read decimals for `tokenName` on given network.
If not found in the local configuration, fetch them from the current network and save them

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenName` | `string` |
| `provider` | `Provider` |

#### Returns

`Promise`<`number`\>

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:810

___

### <a id="fetchdecimals" name="fetchdecimals"></a> fetchDecimals

▸ `Static` **fetchDecimals**(`tokenName`, `provider`): `Promise`<`number`\>

Read chain for decimals of `tokenName` on current network and save them

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenName` | `string` |
| `provider` | `Provider` |

#### Returns

`Promise`<`number`\>

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:820

___

### <a id="getdisplayeddecimals" name="getdisplayeddecimals"></a> getDisplayedDecimals

▸ `Static` **getDisplayedDecimals**(`tokenName`): `number`

Read displayed decimals for `tokenName`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenName` | `string` |

#### Returns

`number`

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:830

___

### <a id="getdisplayedpricedecimals" name="getdisplayedpricedecimals"></a> getDisplayedPriceDecimals

▸ `Static` **getDisplayedPriceDecimals**(`tokenName`): `number`

Read displayed decimals for `tokenName` when displayed as a price.

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenName` | `string` |

#### Returns

`number`

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:837

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

@mangrovedao/mangrove.js/src/mangrove.ts:844

___

### <a id="setdisplayeddecimals" name="setdisplayeddecimals"></a> setDisplayedDecimals

▸ `Static` **setDisplayedDecimals**(`tokenName`, `dec`): `void`

Set displayed decimals for `tokenName`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenName` | `string` |
| `dec` | `number` |

#### Returns

`void`

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:851

___

### <a id="setdisplayedpricedecimals" name="setdisplayedpricedecimals"></a> setDisplayedPriceDecimals

▸ `Static` **setDisplayedPriceDecimals**(`tokenName`, `dec`): `void`

Set displayed decimals for `tokenName` when displayed as a price.

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenName` | `string` |
| `dec` | `number` |

#### Returns

`void`

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:858

___

### <a id="initandlistentodevnode" name="initandlistentodevnode"></a> initAndListenToDevNode

▸ `Static` **initAndListenToDevNode**(`devNode`): `Promise`<`void`\>

Setup dev node necessary contracts if needed, register dev Multicall2
address, listen to future additions (a script external to mangrove.js may
deploy contracts during execution).

#### Parameters

| Name | Type |
| :------ | :------ |
| `devNode` | `DevNode` |

#### Returns

`Promise`<`void`\>

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:867

___

### <a id="openmarketsdata" name="openmarketsdata"></a> openMarketsData

▸ **openMarketsData**(`params?`): `Promise`<[`OpenMarketInfo`](../namespaces/Mangrove-1.md#openmarketinfo)[]\>

Returns open markets data according to mangrove reader.

**`Note`**

If an open market has a token with no/bad decimals/symbol function, this function will revert.

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `Object` |
| `params.from?` | `number` |
| `params.maxLen?` | `number` \| `BigNumber` |
| `params.configs?` | `boolean` |
| `params.tokenInfos?` | `boolean` |

#### Returns

`Promise`<[`OpenMarketInfo`](../namespaces/Mangrove-1.md#openmarketinfo)[]\>

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:899

___

### <a id="openmarkets" name="openmarkets"></a> openMarkets

▸ **openMarkets**(`params?`): `Promise`<[`Market`](Market.md)[]\>

Returns open markets according to mangrove reader. Will internally update Mangrove token information.

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `Object` |
| `params.from?` | `number` |
| `params.maxLen?` | `number` |
| `params.noInit?` | `boolean` |
| `params.bookOptions?` | [`BookOptions`](../namespaces/Market-1.md#bookoptions) |

#### Returns

`Promise`<[`Market`](Market.md)[]\>

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:1025

___

### <a id="setcashness" name="setcashness"></a> setCashness

▸ **setCashness**(`name`, `cashness`): `void`

Set the relative cashness of a token. This determines which token is base & which is quote in a [Market](Market.md).
Lower cashness is base, higher cashness is quote, tiebreaker is lexicographic ordering of name string (name is most likely the same as the symbol).

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `cashness` | `number` |

#### Returns

`void`

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:1067

___

### <a id="tobasequotebycashness" name="tobasequotebycashness"></a> toBaseQuoteByCashness

▸ `Static` **toBaseQuoteByCashness**(`name0`, `name1`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name0` | `string` |
| `name1` | `string` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `baseName` | `string` |
| `quoteName` | `string` |

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:1075

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new Mangrove**(`params`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `Object` |
| `params.signer` | `Signer` |
| `params.network` | [`ProviderNetwork`](../interfaces/eth.ProviderNetwork.md) |
| `params.readOnly` | `boolean` |
| `params.blockManagerOptions` | `Options` |
| `params.reliableHttpProvider` | `Options` |
| `params.eventEmitter` | `EventEmitter` |
| `params.reliableWebSocketOptions?` | `Object` |
| `params.reliableWebSocketOptions.options` | `Options` |
| `params.reliableWebSocketOptions.wsUrl` | `string` |

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:242
