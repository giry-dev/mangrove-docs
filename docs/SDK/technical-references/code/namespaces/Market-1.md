---
id: "Market-1"
title: "Namespace: Market"
sidebar_label: "Market"
sidebar_position: 0
custom_edit_url: null
---

## Namespaces

- [BookReturns](Market-1.BookReturns.md)

## Type Aliases

### <a id="ba" name="ba"></a> BA

Ƭ **BA**: ``"bids"`` \| ``"asks"``

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:31

___

### <a id="bs" name="bs"></a> BS

Ƭ **BS**: ``"buy"`` \| ``"sell"``

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:32

___

### <a id="mgvreader" name="mgvreader"></a> MgvReader

Ƭ **MgvReader**: `typechain.MgvReader`

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:33

___

### <a id="failure" name="failure"></a> Failure

Ƭ **Failure**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `offerId` | `number` |
| `reason` | `string` |
| `FailToDeliver?` | `Big` |
| `volumeGiven?` | `Big` |

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:34

___

### <a id="success" name="success"></a> Success

Ƭ **Success**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `offerId` | `number` |
| `got` | `Big` |
| `gave` | `Big` |

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:40

___

### <a id="summary" name="summary"></a> Summary

Ƭ **Summary**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `got` | `Big` |
| `gave` | `Big` |
| `partialFill` | `boolean` |
| `bounty` | `Big` |
| `feePaid` | `Big` |

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:45

___

### <a id="orderresult" name="orderresult"></a> OrderResult

Ƭ **OrderResult**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `txReceipt` | `ethers.ContractReceipt` |
| `summary` | [`Summary`](Market-1.md#summary) |
| `successes` | [`Success`](Market-1.md#success)[] |
| `tradeFailures` | [`Failure`](Market-1.md#failure)[] |
| `posthookFailures` | [`Failure`](Market-1.md#failure)[] |
| `offerWrites` | { `ba`: [`BA`](Market-1.md#ba) ; `offer`: [`OfferSlim`](Market-1.md#offerslim)  }[] |
| `restingOrder?` | [`OfferSlim`](Market-1.md#offerslim) |

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:52

___

### <a id="booksubscriptionevent" name="booksubscriptionevent"></a> BookSubscriptionEvent

Ƭ **BookSubscriptionEvent**: { `name`: ``"OfferWrite"``  } & `TCM.OfferWriteEvent` \| { `name`: ``"OfferFail"``  } & `TCM.OfferFailEvent` \| { `name`: ``"OfferSuccess"``  } & `TCM.OfferSuccessEvent` \| { `name`: ``"OfferRetract"``  } & `TCM.OfferRetractEvent` \| { `name`: ``"SetGasbase"``  } & `TCM.SetGasbaseEvent`

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:62

___

### <a id="orderroute" name="orderroute"></a> OrderRoute

Ƭ **OrderRoute**: ``"Mangrove"`` \| ``"MangroveOrder"``

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:69

___

### <a id="tradeparams" name="tradeparams"></a> TradeParams

Ƭ **TradeParams**: { `forceRoutingToMangroveOrder?`: `boolean` ; `slippage?`: `number` ; `fillOrKill?`: `boolean` ; `expiryDate?`: `number` ; `gasLowerBound?`: `ethers.ethers.BigNumberish`  } & { `restingOrder?`: [`RestingOrderParams`](Market-1.md#restingorderparams)  } \| { `offerId?`: `number`  } & { `volume`: `Bigish` ; `price`: `Bigish`  } \| { `total`: `Bigish` ; `price`: `Bigish`  } \| { `wants`: `Bigish` ; `gives`: `Bigish` ; `fillWants?`: `boolean`  }

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:71

___

### <a id="restingorderparams" name="restingorderparams"></a> RestingOrderParams

Ƭ **RestingOrderParams**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `provision` | `Bigish` |

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:84

___

### <a id="snipeparams" name="snipeparams"></a> SnipeParams

Ƭ **SnipeParams**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `targets` | { `offerId`: `number` ; `takerWants`: `Bigish` ; `takerGives`: `Bigish` ; `gasLimit?`: `number`  }[] |
| `ba` | [`BA`](Market-1.md#ba) |
| `fillWants?` | `boolean` |
| `requireOffersToFail?` | `boolean` |

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:88

___

### <a id="rawsnipeparams" name="rawsnipeparams"></a> RawSnipeParams

Ƭ **RawSnipeParams**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ba` | [`BA`](Market-1.md#ba) |
| `outboundTkn` | `string` |
| `inboundTkn` | `string` |
| `targets` | [`Promise`<`ethers.ethers.BigNumberish`\> \| `ethers.ethers.BigNumberish`, `Promise`<`ethers.ethers.BigNumberish`\> \| `ethers.ethers.BigNumberish`, `Promise`<`ethers.ethers.BigNumberish`\> \| `ethers.ethers.BigNumberish`, `Promise`<`ethers.ethers.BigNumberish`\> \| `ethers.ethers.BigNumberish`][] |
| `fillWants` | `boolean` |

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:100

___

### <a id="volumeparams" name="volumeparams"></a> VolumeParams

Ƭ **VolumeParams**: [`VolumeParams`](Semibook-1.md#volumeparams) & { `what`: ``"base"`` \| ``"quote"``  }

Specification of how much volume to (potentially) trade on the market.

`{given:100, what:"base", to:"buy"}` means buying 100 base tokens.

`{given:10, what:"quote", to:"sell"})` means selling 10 quote tokens.

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:120

___

### <a id="directionlessvolumeparams" name="directionlessvolumeparams"></a> DirectionlessVolumeParams

Ƭ **DirectionlessVolumeParams**: `Omit`<[`VolumeParams`](Market-1.md#volumeparams), ``"to"``\>

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:124

___

### <a id="optionalparams" name="optionalparams"></a> OptionalParams

Ƭ **OptionalParams**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `bookOptions` | [`BookOptions`](Market-1.md#bookoptions) |
| `noInit` | `boolean` |

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:126

___

### <a id="cachecontentsoptions" name="cachecontentsoptions"></a> CacheContentsOptions

Ƭ **CacheContentsOptions**: { `maxOffers?`: `number`  } \| { `desiredPrice`: `Bigish`  } \| { `desiredVolume`: [`VolumeParams`](Market-1.md#volumeparams)  }

Options that specify what the cache fetches and retains.

`maxOffers`, `desiredPrice`, and `desiredVolume` are mutually exclusive.
If none of these are specified, the default is `maxOffers` = `Semibook.DEFAULT_MAX_OFFERS`.

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:137

___

### <a id="bookoptions" name="bookoptions"></a> BookOptions

Ƭ **BookOptions**: [`CacheContentsOptions`](Market-1.md#cachecontentsoptions) & { `chunkSize?`: `number`  }

Options that control how the book cache behaves.

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:162

___

### <a id="offerslim" name="offerslim"></a> OfferSlim

Ƭ **OfferSlim**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `number` |
| `prev` | `number` \| `undefined` |
| `gasprice` | `number` |
| `maker` | `string` |
| `gasreq` | `number` |
| `wants` | `Big` |
| `gives` | `Big` |
| `volume` | `Big` |
| `price` | `Big` \| `undefined` |

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:169

___

### <a id="offer" name="offer"></a> Offer

Ƭ **Offer**: [`OfferSlim`](Market-1.md#offerslim) & { `next`: `number` \| `undefined` ; `offer_gasbase`: `number`  }

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:181

___

### <a id="booksubscriptioncbargument" name="booksubscriptioncbargument"></a> BookSubscriptionCbArgument

Ƭ **BookSubscriptionCbArgument**: { `ba`: [`BA`](Market-1.md#ba) ; `offerId?`: `number` ; `offer?`: [`Offer`](Market-1.md#offer)  } & { `type`: ``"OfferWrite"``  } \| { `type`: ``"OfferFail"`` ; `taker`: `string` ; `takerWants`: `Big` ; `takerGives`: `Big` ; `mgvData`: `string`  } \| { `type`: ``"OfferSuccess"`` ; `taker`: `string` ; `takerWants`: `Big` ; `takerGives`: `Big`  } \| { `type`: ``"OfferRetract"``  } \| { `type`: ``"SetGasbase"``  }

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:196

___

### <a id="marketcallback" name="marketcallback"></a> MarketCallback

Ƭ **MarketCallback**<`T`\>: (`cbArg`: [`BookSubscriptionCbArgument`](Market-1.md#booksubscriptioncbargument), `event?`: [`BookSubscriptionEvent`](Market-1.md#booksubscriptionevent), `ethersLog?`: `ethers.providers.Log`) => `T` \| `Promise`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

▸ (`cbArg`, `event?`, `ethersLog?`): `T` \| `Promise`<`T`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `cbArg` | [`BookSubscriptionCbArgument`](Market-1.md#booksubscriptioncbargument) |
| `event?` | [`BookSubscriptionEvent`](Market-1.md#booksubscriptionevent) |
| `ethersLog?` | `ethers.providers.Log` |

##### Returns

`T` \| `Promise`<`T`\>

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:214

___

### <a id="storablemarketcallback" name="storablemarketcallback"></a> StorableMarketCallback

Ƭ **StorableMarketCallback**: [`MarketCallback`](Market-1.md#marketcallback)<`any`\>

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:219

___

### <a id="marketfilter" name="marketfilter"></a> MarketFilter

Ƭ **MarketFilter**: [`MarketCallback`](Market-1.md#marketcallback)<`boolean`\>

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:220

___

### <a id="subscriptionparam" name="subscriptionparam"></a> SubscriptionParam

Ƭ **SubscriptionParam**: { `type`: ``"multiple"``  } \| { `type`: ``"once"`` ; `ok`: (...`a`: `any`[]) => `any` ; `ko`: (...`a`: `any`[]) => `any` ; `filter?`: (...`a`: `any`[]) => `boolean` \| `Promise`<`boolean`\>  }

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:221

___

### <a id="book" name="book"></a> Book

Ƭ **Book**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `asks` | [`Semibook`](../classes/Semibook.md) |
| `bids` | [`Semibook`](../classes/Semibook.md) |

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:230

___

### <a id="volumeestimate" name="volumeestimate"></a> VolumeEstimate

Ƭ **VolumeEstimate**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `estimatedVolume` | `Big` |
| `givenResidue` | `Big` |

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:232
