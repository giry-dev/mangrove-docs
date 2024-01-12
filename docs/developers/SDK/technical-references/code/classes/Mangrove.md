---
id: "Mangrove"
title: "Class: Mangrove"
sidebar_label: "Mangrove"
sidebar_position: 0
custom_edit_url: null
---

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new Mangrove**(`params`): [`Mangrove`](Mangrove.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `Object` |
| `params.signer` | `Signer` |
| `params.network` | [`ProviderNetwork`](../interfaces/eth.ProviderNetwork.md) |
| `params.readOnly` | `boolean` |
| `params.blockManagerOptions` | `Options` |
| `params.reliableHttpProvider` | `Options` |
| `params.getLogsTimeout` | `number` |
| `params.eventEmitter` | `EventEmitter` |
| `params.reliableWebSocketOptions?` | `Object` |
| `params.reliableWebSocketOptions.options` | `Options` |
| `params.reliableWebSocketOptions.wsUrl` | `string` |
| `params.shouldNotListenToNewEvents?` | `boolean` |
| `params.multicallContract` | `Multicall2` |
| `params.address` | `string` |
| `params.contract` | `IMangrove` |
| `params.readerContract` | `MgvReader` |
| `params.orderContract` | `MangroveOrder` |
| `params.config` | [`GlobalConfig`](../namespaces/Mangrove-1.md#globalconfig) |

#### Returns

[`Mangrove`](Mangrove.md)

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:294

## Properties

### <a id="provider" name="provider"></a> provider

• **provider**: `Provider`

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:111

___

### <a id="signer" name="signer"></a> signer

• **signer**: `Signer`

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:112

___

### <a id="network" name="network"></a> network

• **network**: [`ProviderNetwork`](../interfaces/eth.ProviderNetwork.md)

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:113

___

### <a id="_readonly" name="_readonly"></a> \_readOnly

• **\_readOnly**: `boolean`

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:114

___

### <a id="address" name="address"></a> address

• **address**: `string`

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:115

___

### <a id="contract" name="contract"></a> contract

• **contract**: `IMangrove`

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:116

___

### <a id="readercontract" name="readercontract"></a> readerContract

• **readerContract**: `MgvReader`

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:117

___

### <a id="multicallcontract" name="multicallcontract"></a> multicallContract

• **multicallContract**: `Multicall2`

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:118

___

### <a id="ordercontract" name="ordercontract"></a> orderContract

• **orderContract**: `MangroveOrder`

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:119

___

### <a id="reliableprovider" name="reliableprovider"></a> reliableProvider

• **reliableProvider**: `ReliableProvider`

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:120

___

### <a id="mangroveeventsubscriber" name="mangroveeventsubscriber"></a> mangroveEventSubscriber

• **mangroveEventSubscriber**: `MangroveEventSubscriber`

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:121

___

### <a id="shouldnotlistentonewevents" name="shouldnotlistentonewevents"></a> shouldNotListenToNewEvents

• **shouldNotListenToNewEvents**: `boolean`

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:122

___

### <a id="olkeyhashtoolkeystructmap" name="olkeyhashtoolkeystructmap"></a> olKeyHashToOLKeyStructMap

• **olKeyHashToOLKeyStructMap**: `Map`<`string`, `OLKeyStruct`\>

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:123

___

### <a id="olkeystructtoolkeyhashmap" name="olkeystructtoolkeyhashmap"></a> olKeyStructToOlKeyHashMap

• **olKeyStructToOlKeyHashMap**: `Map`<`string`, `string`\>

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:124

___

### <a id="nativetoken" name="nativetoken"></a> nativeToken

• **nativeToken**: `TokenCalculations`

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:125

___

### <a id="eventemitter" name="eventemitter"></a> eventEmitter

• **eventEmitter**: `EventEmitter`

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:127

___

### <a id="_config" name="_config"></a> \_config

• **\_config**: [`GlobalConfig`](../namespaces/Mangrove-1.md#globalconfig)

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:128

___

### <a id="devnode" name="devnode"></a> devNode

▪ `Static` **devNode**: `DevNode`

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:130

___

### <a id="typechain" name="typechain"></a> typechain

▪ `Static` **typechain**: `__module` = `typechain`

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:131

## Methods

### <a id="connect" name="connect"></a> connect

▸ **connect**(`options?`): `Promise`<[`Mangrove`](Mangrove.md)\>

Creates an instance of the Mangrove Typescript object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `string` \| [`CreateOptions`](../namespaces/Mangrove-1.md#createoptions) | Optional provider options |

#### Returns

`Promise`<[`Mangrove`](Mangrove.md)\>

Returns an instance mangrove.js

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

**`See`**

[Mangrove.CreateOptions](../namespaces/Mangrove-1.md#createoptions) for more details on optional provider parameters.

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:156

___

### <a id="disconnect" name="disconnect"></a> disconnect

▸ **disconnect**(): `void`

Disconnect from Mangrove.

Removes all listeners from the provider and stops the reliable provider.

#### Returns

`void`

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:283

___

### <a id="getolkeyhash" name="getolkeyhash"></a> getOlKeyHash

▸ **getOlKeyHash**(`olKey`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `olKey` | `OLKeyStruct` |

#### Returns

`string`

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:372

___

### <a id="getolkeystruct" name="getolkeystruct"></a> getOlKeyStruct

▸ **getOlKeyStruct**(`olKeyHash`): `Promise`<`undefined` \| `OLKeyStruct`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `olKeyHash` | `string` |

#### Returns

`Promise`<`undefined` \| `OLKeyStruct`\>

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:385

___

### <a id="calculateolkeyhash" name="calculateolkeyhash"></a> calculateOLKeyHash

▸ **calculateOLKeyHash**(`olKey`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `olKey` | `OLKeyStruct` |

#### Returns

`string`

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:405

___

### <a id="updateconfiguration" name="updateconfiguration"></a> updateConfiguration

▸ **updateConfiguration**(`config?`): `void`

Update the configuration by providing a partial configuration containing only the values that should be changed/added.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config?` | `RecursivePartial`<`Configuration`\> | Partial configuration that should be merged into the existing configuration. |

#### Returns

`void`

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

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:428

___

### <a id="resetconfiguration" name="resetconfiguration"></a> resetConfiguration

▸ **resetConfiguration**(): `void`

Reset the configuration to defaults provided by mangrove.js

#### Returns

`void`

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:433

___

### <a id="market" name="market"></a> market

▸ **market**(`params`): `Promise`<[`Market`](Market.md)\>

************

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`Key`](../namespaces/Market-1.md#key) & \{ `bookOptions?`: [`BookOptions`](../namespaces/Market-1.md#bookoptions)  } |

#### Returns

`Promise`<[`Market`](Market.md)\>

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:469

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

@mangrovedao/mangrove.js/src/mangrove.ts:494

___

### <a id="liquidityprovider" name="liquidityprovider"></a> liquidityProvider

▸ **liquidityProvider**(`p`): `Promise`<[`LiquidityProvider`](LiquidityProvider.md)\>

Get a LiquidityProvider object to enable Mangrove's signer to pass buy and sell orders.

#### Parameters

| Name | Type |
| :------ | :------ |
| `p` | [`Market`](Market.md) \| \{ `base`: `string` ; `quote`: `string` ; `tickSpacing`: `number` ; `bookOptions?`: [`BookOptions`](../namespaces/Market-1.md#bookoptions)  } |

#### Returns

`Promise`<[`LiquidityProvider`](LiquidityProvider.md)\>

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:510

___

### <a id="token" name="token"></a> token

▸ **token**(`symbolOrId`, `options?`): `Promise`<[`Token`](Token.md)\>

Return Token instance, fetching data (decimals) from chain if needed.

#### Parameters

| Name | Type |
| :------ | :------ |
| `symbolOrId` | `string` |
| `options?` | [`ConstructorOptions`](../namespaces/Token-1.md#constructoroptions) |

#### Returns

`Promise`<[`Token`](Token.md)\>

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:539

___

### <a id="tokenfromsymbol" name="tokenfromsymbol"></a> tokenFromSymbol

▸ **tokenFromSymbol**(`symbol`, `options?`): `Promise`<[`Token`](Token.md)\>

Return Token instance, fetching data (decimals) from chain if needed.

#### Parameters

| Name | Type |
| :------ | :------ |
| `symbol` | `string` |
| `options?` | [`ConstructorOptions`](../namespaces/Token-1.md#constructoroptions) |

#### Returns

`Promise`<[`Token`](Token.md)\>

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:547

___

### <a id="tokenfromid" name="tokenfromid"></a> tokenFromId

▸ **tokenFromId**(`tokenId`, `options?`): `Promise`<[`Token`](Token.md)\>

Return Token instance, fetching data (decimals) from chain if needed.

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenId` | `string` |
| `options?` | [`ConstructorOptions`](../namespaces/Token-1.md#constructoroptions) |

#### Returns

`Promise`<[`Token`](Token.md)\>

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:555

___

### <a id="tokenfromaddress" name="tokenfromaddress"></a> tokenFromAddress

▸ **tokenFromAddress**(`address`): `Promise`<[`Token`](Token.md)\>

Return token instance from address, fetching data (decimals) from chain if needed.

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

`Promise`<[`Token`](Token.md)\>

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:565

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

@mangrovedao/mangrove.js/src/mangrove.ts:574

___

### <a id="gettokenaddress" name="gettokenaddress"></a> getTokenAddress

▸ **getTokenAddress**(`symbolOrId`): `string`

Read a token address on the current network.

Note that this reads from the static `Mangrove` address registry which is shared across instances of this class.

#### Parameters

| Name | Type |
| :------ | :------ |
| `symbolOrId` | `string` |

#### Returns

`string`

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:586

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

@mangrovedao/mangrove.js/src/mangrove.ts:595

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

@mangrovedao/mangrove.js/src/mangrove.ts:604

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

@mangrovedao/mangrove.js/src/mangrove.ts:612

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

@mangrovedao/mangrove.js/src/mangrove.ts:624

___

### <a id="optvaluetopayableoverride" name="optvaluetopayableoverride"></a> optValueToPayableOverride

▸ **optValueToPayableOverride**(`overrides`, `fund?`): `PayableOverrides`

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides` | `Overrides` |
| `fund?` | `BigSource` |

#### Returns

`PayableOverrides`

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:631

___

### <a id="approvemangrove" name="approvemangrove"></a> approveMangrove

▸ **approveMangrove**(`tokenId`, `arg?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenId` | `string` |
| `arg` | `ApproveArgs` |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:642

___

### <a id="calculateofferprovision" name="calculateofferprovision"></a> calculateOfferProvision

▸ **calculateOfferProvision**(`gasprice`, `gasreq`, `gasbase`): `Big`

Calculates the provision required or locked for an offer based on the given parameters

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `gasprice` | `number` | the gas price for the offer in Mwei. |
| `gasreq` | `number` | the gas requirement for the offer |
| `gasbase` | `number` | the offer list's offer_gasbase. |

#### Returns

`Big`

the required provision, in ethers.

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:656

___

### <a id="calculateoffersprovision" name="calculateoffersprovision"></a> calculateOffersProvision

▸ **calculateOffersProvision**(`offers`): `Big`

Calculates the provision required or locked for offers based on the given parameters

#### Parameters

| Name | Type |
| :------ | :------ |
| `offers` | \{ `gasprice`: `number` ; `gasreq`: `number` ; `gasbase`: `number`  }[] |

#### Returns

`Big`

the required provision, in ethers.

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:671

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

@mangrovedao/mangrove.js/src/mangrove.ts:692

___

### <a id="config" name="config"></a> config

▸ **config**(): [`GlobalConfig`](../namespaces/Mangrove-1.md#globalconfig)

Return global Mangrove config from cache.

#### Returns

[`GlobalConfig`](../namespaces/Mangrove-1.md#globalconfig)

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:704

___

### <a id="fetchconfig" name="fetchconfig"></a> fetchConfig

▸ **fetchConfig**(): `Promise`<[`GlobalConfig`](../namespaces/Mangrove-1.md#globalconfig)\>

Return global Mangrove config from chain.

#### Returns

`Promise`<[`GlobalConfig`](../namespaces/Mangrove-1.md#globalconfig)\>

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:711

___

### <a id="rawconfigtoconfig" name="rawconfigtoconfig"></a> rawConfigToConfig

▸ **rawConfigToConfig**(`rawConfig`): [`GlobalConfig`](../namespaces/Mangrove-1.md#globalconfig)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rawConfig` | `GlobalUnpackedStructOutput` |

#### Returns

[`GlobalConfig`](../namespaces/Mangrove-1.md#globalconfig)

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:717

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

@mangrovedao/mangrove.js/src/mangrove.ts:736

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

@mangrovedao/mangrove.js/src/mangrove.ts:767

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

@mangrovedao/mangrove.js/src/mangrove.ts:773

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

@mangrovedao/mangrove.js/src/mangrove.ts:809

___

### <a id="getalladdresses" name="getalladdresses"></a> getAllAddresses

▸ **getAllAddresses**(`network`): [`string`, `string`][]

Read all contract addresses on the given network.

#### Parameters

| Name | Type |
| :------ | :------ |
| `network` | `string` |

#### Returns

[`string`, `string`][]

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:841

___

### <a id="getaddress-1" name="getaddress-1"></a> getAddress

▸ **getAddress**(`name`, `network`): `string`

Read a contract address on a given network.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `network` | `string` |

#### Returns

`string`

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:848

___

### <a id="setaddress-1" name="setaddress-1"></a> setAddress

▸ **setAddress**(`name`, `address`, `network`): `void`

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

@mangrovedao/mangrove.js/src/mangrove.ts:855

___

### <a id="initandlistentodevnode" name="initandlistentodevnode"></a> initAndListenToDevNode

▸ **initAndListenToDevNode**(`devNode`): `Promise`<`void`\>

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

@mangrovedao/mangrove.js/src/mangrove.ts:864

___

### <a id="openmarkets" name="openmarkets"></a> openMarkets

▸ **openMarkets**(`params?`): `Promise`<[`OpenMarketInfo`](../namespaces/Mangrove-1.md#openmarketinfo)[]\>

Returns open markets data according to MgvReader.

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `Object` |
| `params.from?` | `number` |
| `params.maxLen?` | `number` \| `BigNumber` |
| `params.configs?` | `boolean` |

#### Returns

`Promise`<[`OpenMarketInfo`](../namespaces/Mangrove-1.md#openmarketinfo)[]\>

**`Note`**

If an open market has a token with no/bad decimals/symbol function, this function will revert.

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:895

___

### <a id="tobasequotebycashness" name="tobasequotebycashness"></a> toBaseQuoteByCashness

▸ **toBaseQuoteByCashness**(`token0`, `token1`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `token0` | [`Token`](Token.md) |
| `token1` | [`Token`](Token.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `base` | [`Token`](Token.md) |
| `quote` | [`Token`](Token.md) |

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:972
