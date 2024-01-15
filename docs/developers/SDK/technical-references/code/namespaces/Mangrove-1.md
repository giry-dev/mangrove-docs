---
id: "Mangrove-1"
title: "Namespace: Mangrove"
sidebar_label: "Mangrove"
sidebar_position: 0
custom_edit_url: null
---

## Type Aliases

### <a id="rawconfig" name="rawconfig"></a> RawConfig

Ƭ **RawConfig**: `Awaited`<`ReturnType`<`typechain.MgvReader`[``"functions"``][``"configInfo"``]\>\>

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:42

___

### <a id="localconfig" name="localconfig"></a> LocalConfig

Ƭ **LocalConfig**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `active` | `boolean` |
| `fee` | `number` |
| `density` | [`Density`](../classes/Density.md) |
| `offer_gasbase` | `number` |

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:46

___

### <a id="localconfigfull" name="localconfigfull"></a> LocalConfigFull

Ƭ **LocalConfigFull**: [`LocalConfig`](Mangrove-1.md#localconfig) & \{ `lock`: `boolean` ; `last`: `number` \| `undefined` ; `binPosInLeaf`: `number` ; `root`: `number` ; `level1`: `ethers.BigNumber` ; `level2`: `ethers.BigNumber` ; `level3`: `ethers.BigNumber`  }

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:53

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
| `maxRecursionDepth` | `number` |
| `maxGasreqForFailingOffers` | `number` |

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:63

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

@mangrovedao/mangrove.js/src/mangrove.ts:74

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

@mangrovedao/mangrove.js/src/mangrove.ts:84

___

### <a id="openmarketinfo" name="openmarketinfo"></a> OpenMarketInfo

Ƭ **OpenMarketInfo**: [`KeyResolved`](Market-1.md#keyresolved) & \{ `asksConfig?`: [`LocalConfig`](Mangrove-1.md#localconfig) ; `bidsConfig?`: [`LocalConfig`](Mangrove-1.md#localconfig)  }

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:94

___

### <a id="createoptions" name="createoptions"></a> CreateOptions

Ƭ **CreateOptions**: [`CreateSignerOptions`](../interfaces/eth.CreateSignerOptions.md) & \{ `shouldNotListenToNewEvents?`: `boolean` ; `blockManagerOptions?`: `BlockManager.Options` ; `reliableWebsocketProviderOptions?`: `ReliableWebsocketProvider.Options` ; `reliableHttpProviderOptions?`: `ReliableHttpProvider.Options`  }

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:99

___

### <a id="configuration" name="configuration"></a> Configuration

Ƭ **Configuration**: [`Configuration`](../modules.md#configuration)

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:106

___

### <a id="partialconfiguration" name="partialconfiguration"></a> PartialConfiguration

Ƭ **PartialConfiguration**: [`PartialConfiguration`](../modules.md#partialconfiguration)

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:108

___

### <a id="offerprovisionparams" name="offerprovisionparams"></a> OfferProvisionParams

Ƭ **OfferProvisionParams**: `Object`

Parameters used to calculate provision for an offer

**`Param`**

the gas price for the offer in Mwei.

**`Param`**

the gas requirement for the offer

**`Param`**

the offer list's offer_gasbase.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `gasprice` | `number` |
| `gasreq` | `number` |
| `gasbase` | `number` |

#### Defined in

@mangrovedao/mangrove.js/src/mangrove.ts:115
