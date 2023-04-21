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

@mangrovedao/mangrove.js/src/mangrove.ts:86

___

### <a id="signer" name="signer"></a> signer

• **signer**: `Signer`

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:87

___

### <a id="network" name="network"></a> network

• **network**: [`ProviderNetwork`](../interfaces/eth.ProviderNetwork.md)

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:88

___

### <a id="_readonly" name="_readonly"></a> \_readOnly

• **\_readOnly**: `boolean`

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:89

___

### <a id="address" name="address"></a> address

• **address**: `string`

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:90

___

### <a id="contract" name="contract"></a> contract

• **contract**: `Mangrove`

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:91

___

### <a id="readercontract" name="readercontract"></a> readerContract

• **readerContract**: `MgvReader`

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:92

___

### <a id="cleanercontract" name="cleanercontract"></a> cleanerContract

• **cleanerContract**: `MgvCleaner`

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:93

___

### <a id="multicallcontract" name="multicallcontract"></a> multicallContract

• **multicallContract**: `Multicall2`

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:94

___

### <a id="ordercontract" name="ordercontract"></a> orderContract

• **orderContract**: `MangroveOrder`

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:95

___

### <a id="typechain" name="typechain"></a> typechain

▪ `Static` **typechain**: `__module` = `typechain`

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:96

___

### <a id="addresses" name="addresses"></a> addresses

▪ `Static` **addresses**: `Object` = `addresses`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `mainnet` | {} |
| `rinkeby` | {} |
| `goerli` | {} |
| `kovan` | {} |
| `ropsten` | {} |
| `maticmum` | { `WETH`: `string` = "0xD087ff96281dcf722AEa82aCA57E8545EA9e6C96"; `WMATIC`: `string` = "0xf237dE5664D3c2D2545684E76fef02A3A58A364c"; `USDC`: `string` = "0xe9DcE89B076BA6107Bb64EF30678efec11939234"; `DAI`: `string` = "0xF14f9596430931E177469715c591513308244e8F"; `Multicall2`: `string` = "0xe9939e7Ea7D7fb619Ac57f648Da7B1D425832631" } |
| `maticmum.WETH` | `string` |
| `maticmum.WMATIC` | `string` |
| `maticmum.USDC` | `string` |
| `maticmum.DAI` | `string` |
| `maticmum.Multicall2` | `string` |
| `local` | {} |
| `matic` | { `DAI`: `string` = "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063"; `USDC`: `string` = "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"; `WETH`: `string` = "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619"; `Multicall2`: `string` = "0x275617327c958bD06b5D6b871E7f491D76113dd8" } |
| `matic.DAI` | `string` |
| `matic.USDC` | `string` |
| `matic.WETH` | `string` |
| `matic.Multicall2` | `string` |

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:97

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
| `options?` | `string` \| [`CreateSignerOptions`](../interfaces/eth.CreateSignerOptions.md) | Optional provider options. |

#### Returns

`Promise`<[`Mangrove`](Mangrove.md)\>

Returns an instance mangrove.js

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:121

___

### <a id="disconnect" name="disconnect"></a> disconnect

▸ **disconnect**(): `void`

#### Returns

`void`

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:159

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

@mangrovedao/mangrove.js/src/mangrove.ts:219

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

@mangrovedao/mangrove.js/src/mangrove.ts:236

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

@mangrovedao/mangrove.js/src/mangrove.ts:251

___

### <a id="token" name="token"></a> token

▸ **token**(`name`, `options?`): [`MgvToken`](MgvToken.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `options?` | [`ConstructorOptions`](../namespaces/MgvToken-1.md#constructoroptions) |

#### Returns

[`MgvToken`](MgvToken.md)

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:279

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

@mangrovedao/mangrove.js/src/mangrove.ts:288

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

@mangrovedao/mangrove.js/src/mangrove.ts:297

___

### <a id="getnamefromaddress" name="getnamefromaddress"></a> getNameFromAddress

▸ **getNameFromAddress**(`address`): `string`

Gets the name of an address on the current network.

Note that this reads from the static `Mangrove` address registry which is shared across instances of this class.

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

`string`

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:306

___

### <a id="gettokenandaddress" name="gettokenandaddress"></a> getTokenAndAddress

▸ **getTokenAndAddress**(`address`): `Object`

Gets the token corresponding to the address if it is known; otherwise, null.

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `token` | [`MgvToken`](MgvToken.md) |

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:325

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
| `amount` | `any` |
| `nameOrDecimals` | `string` \| `number` |

#### Returns

`BigNumber`

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:343

___

### <a id="tounits-1" name="tounits-1"></a> toUnits

▸ **toUnits**(`amount`, `nameOrDecimals`): `BigNumber`

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `any` |
| `nameOrDecimals` | `string` \| `number` |

#### Returns

`BigNumber`

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:349

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

@mangrovedao/mangrove.js/src/mangrove.ts:364

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

@mangrovedao/mangrove.js/src/mangrove.ts:372

___

### <a id="fundmangrove" name="fundmangrove"></a> fundMangrove

▸ **fundMangrove**(`amount`, `maker`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `any` |
| `maker` | `string` |
| `overrides` | `Overrides` |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:380

___

### <a id="withdraw" name="withdraw"></a> withdraw

▸ **withdraw**(`amount`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `any` |
| `overrides` | `Overrides` |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:389

___

### <a id="approvemangrove" name="approvemangrove"></a> approveMangrove

▸ **approveMangrove**(`tokenName`, `arg?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenName` | `string` |
| `arg` | `any` |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:396

___

### <a id="config" name="config"></a> config

▸ **config**(): `Promise`<[`GlobalConfig`](../namespaces/Mangrove-1.md#globalconfig)\>

Return global Mangrove config

#### Returns

`Promise`<[`GlobalConfig`](../namespaces/Mangrove-1.md#globalconfig)\>

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:407

___

### <a id="normalizepermitdata" name="normalizepermitdata"></a> normalizePermitData

▸ **normalizePermitData**(`params`): `Promise`<[`PermitData`](../namespaces/Mangrove-1.md#permitdata)\>

Permit data normalization
Autofill/convert 'nonce' field of permit data if needd, convert deadline to
num if needed.

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`SimplePermitData`](../namespaces/Mangrove-1.md#simplepermitdata) |

#### Returns

`Promise`<[`PermitData`](../namespaces/Mangrove-1.md#permitdata)\>

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:426

___

### <a id="simplesignpermitdata" name="simplesignpermitdata"></a> simpleSignPermitData

▸ **simpleSignPermitData**(`params`): `Promise`<`string`\>

Sign typed data for permit().
To set the deadline to +days or +months, you can do
let date = new Date();
date.setDate(date.getDate() + days);
date.setMonth(date.getMonth() + months);
- Nonce is autoselected if needed and can be a number
- Date can be a Date or a number

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`SimplePermitData`](../namespaces/Mangrove-1.md#simplepermitdata) |

#### Returns

`Promise`<`string`\>

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:457

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

@mangrovedao/mangrove.js/src/mangrove.ts:463

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

@mangrovedao/mangrove.js/src/mangrove.ts:499

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

@mangrovedao/mangrove.js/src/mangrove.ts:531

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

@mangrovedao/mangrove.js/src/mangrove.ts:542

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

@mangrovedao/mangrove.js/src/mangrove.ts:557

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

@mangrovedao/mangrove.js/src/mangrove.ts:569

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

@mangrovedao/mangrove.js/src/mangrove.ts:576

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

@mangrovedao/mangrove.js/src/mangrove.ts:583

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

@mangrovedao/mangrove.js/src/mangrove.ts:592

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

@mangrovedao/mangrove.js/src/mangrove.ts:599

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

@mangrovedao/mangrove.js/src/mangrove.ts:606

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

@mangrovedao/mangrove.js/src/mangrove.ts:613

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

@mangrovedao/mangrove.js/src/mangrove.ts:632

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

@mangrovedao/mangrove.js/src/mangrove.ts:660

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

@mangrovedao/mangrove.js/src/mangrove.ts:769

___

### <a id="setcashness" name="setcashness"></a> setCashness

▸ **setCashness**(`symbol`, `cashness`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `symbol` | `string` |
| `cashness` | `number` |

#### Returns

`void`

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:810

___

### <a id="tobasequotebycashness" name="tobasequotebycashness"></a> toBaseQuoteByCashness

▸ `Static` **toBaseQuoteByCashness**(`symbol0`, `symbol1`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `symbol0` | `string` |
| `symbol1` | `string` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `baseSymbol` | `string` |
| `quoteSymbol` | `string` |

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:818

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

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:168
