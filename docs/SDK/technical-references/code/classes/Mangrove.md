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

@mangrovedao/mangrove.js/src/mangrove.ts:56

___

### <a id="signer" name="signer"></a> signer

• **signer**: `Signer`

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:57

___

### <a id="network" name="network"></a> network

• **network**: [`ProviderNetwork`](../interfaces/eth.ProviderNetwork.md)

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:58

___

### <a id="_readonly" name="_readonly"></a> \_readOnly

• **\_readOnly**: `boolean`

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:59

___

### <a id="address" name="address"></a> address

• **address**: `string`

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:60

___

### <a id="contract" name="contract"></a> contract

• **contract**: `Mangrove`

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:61

___

### <a id="readercontract" name="readercontract"></a> readerContract

• **readerContract**: `MgvReader`

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:62

___

### <a id="cleanercontract" name="cleanercontract"></a> cleanerContract

• **cleanerContract**: `MgvCleaner`

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:63

___

### <a id="ordercontract" name="ordercontract"></a> orderContract

• **orderContract**: `MangroveOrderEnriched`

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:66

___

### <a id="typechain" name="typechain"></a> typechain

▪ `Static` **typechain**: `__module` = `typechain`

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:67

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
| `maticmum` | { `DAI_AAVE`: `string` = "0x9A753f0F7886C9fbF63cF59D0D4423C5eFaCE95B"; `USDC_AAVE`: `string` = "0x9aa7fEc87CA69695Dd1f879567CcF49F3ba417E2"; `USDT_AAVE`: `string` = "0x21c561e551638401b937b03fe5a0a0652b99b7dd"; `WETH_AAVE`: `string` = "0xd575d4047f8c667e064a4ad433d04e25187f40bb"; `aWETH`: `string` = "0x685bF4eab23993E94b4CFb9383599c926B66cF57"; `aDAI`: `string` = "0xDD4f3Ee61466C4158D394d57f3D4C397E91fBc51"; `aUSDC`: `string` = "0xCdc2854e97798AfDC74BC420BD5060e022D14607"; `DAI`: `string` = "0xc87385b5e62099f92d490750fcd6c901a524bbca"; `USDC`: `string` = "0xF61Cffd6071a8DB7cD5E8DF1D3A5450D9903cF1c"; `WETH`: `string` = "0x63e537a69b3f5b03f4f46c5765c82861bd874b6e" } |
| `maticmum.DAI_AAVE` | `string` |
| `maticmum.USDC_AAVE` | `string` |
| `maticmum.USDT_AAVE` | `string` |
| `maticmum.WETH_AAVE` | `string` |
| `maticmum.aWETH` | `string` |
| `maticmum.aDAI` | `string` |
| `maticmum.aUSDC` | `string` |
| `maticmum.DAI` | `string` |
| `maticmum.USDC` | `string` |
| `maticmum.WETH` | `string` |
| `local` | {} |
| `matic` | { `DAI`: `string` = "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063"; `USDC`: `string` = "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"; `WETH`: `string` = "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619" } |
| `matic.DAI` | `string` |
| `matic.USDC` | `string` |
| `matic.WETH` | `string` |

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:68

___

### <a id="unitcalculations" name="unitcalculations"></a> unitCalculations

• **unitCalculations**: `UnitCalculations`

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:69

## Methods

### <a id="connect" name="connect"></a> connect

▸ `Static` **connect**(`options?`): `Promise`<[`Mangrove`](Mangrove.md)\>

Creates an instance of the Mangrove Typescript object

**`Example`**

```
const mgv = await require('mangrove.js').connect(options); // web browser
```

if options is a string `s`, it is considered to be {provider:s}
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

@mangrovedao/mangrove.js/src/mangrove.ts:93

___

### <a id="disconnect" name="disconnect"></a> disconnect

▸ **disconnect**(): `void`

#### Returns

`void`

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:130

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

@mangrovedao/mangrove.js/src/mangrove.ts:188

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

@mangrovedao/mangrove.js/src/mangrove.ts:205

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

@mangrovedao/mangrove.js/src/mangrove.ts:220

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

@mangrovedao/mangrove.js/src/mangrove.ts:246

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

@mangrovedao/mangrove.js/src/mangrove.ts:255

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

@mangrovedao/mangrove.js/src/mangrove.ts:264

___

### <a id="tounits" name="tounits"></a> toUnits

▸ **toUnits**(`amount`, `nameOrDecimals`): `BigNumber`

Convert public token amount to internal token representation.

if `nameOrDecimals` is a string, it is interpreted as a token name. Otherwise
it is the number of decimals.

**`Example`**

```
 mgv.toUnits(10,"USDC") // 10e6 as ethers.BigNumber
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

@mangrovedao/mangrove.js/src/mangrove.ts:279

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

@mangrovedao/mangrove.js/src/mangrove.ts:294

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

@mangrovedao/mangrove.js/src/mangrove.ts:302

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

@mangrovedao/mangrove.js/src/mangrove.ts:310

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

@mangrovedao/mangrove.js/src/mangrove.ts:319

___

### <a id="approvemangrove" name="approvemangrove"></a> approveMangrove

▸ **approveMangrove**(`tokenName`, `arg?`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenName` | `string` |
| `arg` | `Object` |
| `arg.amount?` | `any` |
| `overrides` | `Overrides` |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:326

___

### <a id="config" name="config"></a> config

▸ **config**(): `Promise`<[`GlobalConfig`](../namespaces/Mangrove-1.md#globalconfig)\>

Return global Mangrove config

#### Returns

`Promise`<[`GlobalConfig`](../namespaces/Mangrove-1.md#globalconfig)\>

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:338

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

@mangrovedao/mangrove.js/src/mangrove.ts:359

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

@mangrovedao/mangrove.js/src/mangrove.ts:370

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

@mangrovedao/mangrove.js/src/mangrove.ts:385

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

@mangrovedao/mangrove.js/src/mangrove.ts:397

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

@mangrovedao/mangrove.js/src/mangrove.ts:404

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

@mangrovedao/mangrove.js/src/mangrove.ts:411

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

@mangrovedao/mangrove.js/src/mangrove.ts:420

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

@mangrovedao/mangrove.js/src/mangrove.ts:427

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

@mangrovedao/mangrove.js/src/mangrove.ts:434

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

@mangrovedao/mangrove.js/src/mangrove.ts:441

___

### <a id="watchlocaladdresses" name="watchlocaladdresses"></a> watchLocalAddresses

▸ `Static` **watchLocalAddresses**(`devNode`): `Promise`<`void`\>

Returns all addresses registered at the local server's Toy ENS contract.
Assumes provider is connected to a local server (typically for testing/experimentation).

#### Parameters

| Name | Type |
| :------ | :------ |
| `devNode` | `DevNode` |

#### Returns

`Promise`<`void`\>

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:459

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

@mangrovedao/mangrove.js/src/mangrove.ts:139
