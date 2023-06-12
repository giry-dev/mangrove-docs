---
id: "Mangrove-1"
title: "Namespace: Mangrove"
sidebar_label: "Mangrove"
sidebar_position: 0
custom_edit_url: null
---

## Type Aliases

### <a id="rawconfig" name="rawconfig"></a> RawConfig

Ƭ **RawConfig**: `Awaited`<`ReturnType`<`typechain.Mangrove`[``"functions"``][``"configInfo"``]\>\>

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:48

___

### <a id="localconfig" name="localconfig"></a> LocalConfig

Ƭ **LocalConfig**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `active` | `boolean` |
| `fee` | `number` |
| `density` | `Big` |
| `offer_gasbase` | `number` |
| `lock` | `boolean` |
| `best` | `number` \| `undefined` |
| `last` | `number` \| `undefined` |

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:52

___

### <a id="globalconfig" name="globalconfig"></a> GlobalConfig

Ƭ **GlobalConfig**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `monitor` | `string` |
| `useOracle` | `boolean` |
| `notify` | `boolean` |
| `gasprice` | `number` |
| `gasmax` | `number` |
| `dead` | `boolean` |

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:62

___

### <a id="simplepermitdata" name="simplepermitdata"></a> SimplePermitData

Ƭ **SimplePermitData**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `outbound_tkn` | `string` |
| `inbound_tkn` | `string` |
| `owner` | `string` |
| `spender` | `string` |
| `value` | `ethers.BigNumber` |
| `nonce?` | `number` \| `ethers.BigNumber` |
| `deadline` | `number` \| `Date` |

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:71

___

### <a id="permitdata" name="permitdata"></a> PermitData

Ƭ **PermitData**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `outbound_tkn` | `string` |
| `inbound_tkn` | `string` |
| `owner` | `string` |
| `spender` | `string` |
| `value` | `ethers.BigNumber` |
| `nonce` | `ethers.BigNumber` |
| `deadline` | `number` |

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:81

___

### <a id="openmarketinfo" name="openmarketinfo"></a> OpenMarketInfo

Ƭ **OpenMarketInfo**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `base` | { `address`: `string` ; `symbol`: `string` ; `decimals`: `number`  } |
| `base.address` | `string` |
| `base.symbol` | `string` |
| `base.decimals` | `number` |
| `quote` | { `address`: `string` ; `symbol`: `string` ; `decimals`: `number`  } |
| `quote.address` | `string` |
| `quote.symbol` | `string` |
| `quote.decimals` | `number` |
| `asksConfig` | [`LocalConfig`](Mangrove-1.md#localconfig) |
| `bidsConfig` | [`LocalConfig`](Mangrove-1.md#localconfig) |

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:91

___

### <a id="createoptions" name="createoptions"></a> CreateOptions

Ƭ **CreateOptions**: [`CreateSignerOptions`](../interfaces/eth.CreateSignerOptions.md) & { `blockManagerOptions?`: `BlockManager.Options` ; `reliableWebsocketProviderOptions?`: `ReliableWebsocketProvider.Options` ; `reliableHttpProviderOptions?`: `ReliableHttpProvider.Options`  }

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:98
