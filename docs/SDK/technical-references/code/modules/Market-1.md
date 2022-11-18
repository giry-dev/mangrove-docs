[@mangrovedao/mangrove.js](../README.md) / [Exports](../modules.md) / Market

# Namespace: Market

## Table of contents

### Type Aliases

- [BA](Market-1.md#ba)
- [BS](Market-1.md#bs)
- [MgvReader](Market-1.md#mgvreader)
- [Failure](Market-1.md#failure)
- [Success](Market-1.md#success)
- [Summary](Market-1.md#summary)
- [OrderResult](Market-1.md#orderresult)
- [BookSubscriptionEvent](Market-1.md#booksubscriptionevent)
- [TradeParams](Market-1.md#tradeparams)
- [MangroveOrderParams](Market-1.md#mangroveorderparams)
- [SnipeParams](Market-1.md#snipeparams)
- [RawSnipeParams](Market-1.md#rawsnipeparams)
- [VolumeParams](Market-1.md#volumeparams)
- [DirectionlessVolumeParams](Market-1.md#directionlessvolumeparams)
- [BookOptions](Market-1.md#bookoptions)
- [OfferSlim](Market-1.md#offerslim)
- [Offer](Market-1.md#offer)
- [BookSubscriptionCbArgument](Market-1.md#booksubscriptioncbargument)
- [MarketCallback](Market-1.md#marketcallback)
- [StorableMarketCallback](Market-1.md#storablemarketcallback)
- [MarketFilter](Market-1.md#marketfilter)
- [SubscriptionParam](Market-1.md#subscriptionparam)
- [Book](Market-1.md#book)
- [VolumeEstimate](Market-1.md#volumeestimate)

### Namespaces

- [BookReturns](Market-1.BookReturns.md)

## Type Aliases

### <a id="ba" name="ba"></a> BA

Ƭ **BA**: ``"bids"`` \| ``"asks"``

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:34

___

### <a id="bs" name="bs"></a> BS

Ƭ **BS**: ``"buy"`` \| ``"sell"``

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:35

___

### <a id="mgvreader" name="mgvreader"></a> MgvReader

Ƭ **MgvReader**: `typechain.MgvReader`

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:36

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

@mangrovedao/mangrove.js/src/market.ts:37

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

@mangrovedao/mangrove.js/src/market.ts:43

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

@mangrovedao/mangrove.js/src/market.ts:48

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

@mangrovedao/mangrove.js/src/market.ts:55

___

### <a id="booksubscriptionevent" name="booksubscriptionevent"></a> BookSubscriptionEvent

Ƭ **BookSubscriptionEvent**: { `name`: ``"OfferWrite"``  } & `TCM.OfferWriteEvent` \| { `name`: ``"OfferFail"``  } & `TCM.OfferFailEvent` \| { `name`: ``"OfferSuccess"``  } & `TCM.OfferSuccessEvent` \| { `name`: ``"OfferRetract"``  } & `TCM.OfferRetractEvent` \| { `name`: ``"SetGasbase"``  } & `TCM.SetGasbaseEvent`

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:64

___

### <a id="tradeparams" name="tradeparams"></a> TradeParams

Ƭ **TradeParams**: { `slippage?`: `number`  } & { `mangroveOrder?`: [`MangroveOrderParams`](Market-1.md#mangroveorderparams)  } \| { `offerId?`: `number`  } & { `volume`: `Bigish` ; `price`: `Bigish`  } \| { `total`: `Bigish` ; `price`: `Bigish`  } \| { `wants`: `Bigish` ; `gives`: `Bigish` ; `fillWants?`: `boolean`  }

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:71

___

### <a id="mangroveorderparams" name="mangroveorderparams"></a> MangroveOrderParams

Ƭ **MangroveOrderParams**: { `fillOrKill`: `boolean`  } \| { `expiryDate?`: `number` ; `restingOrder`: `boolean` ; `provision`: `Bigish`  }

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:80

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

### <a id="bookoptions" name="bookoptions"></a> BookOptions

Ƭ **BookOptions**: `Object`

Options that control how the book cache behaves.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `maxOffers?` | `number` | The maximum number of offers to store in the cache.  `maxOffers` and `desiredPrice` are mutually exclusive. |
| `chunkSize?` | `number` | The number of offers to fetch in one call.  Defaults to `maxOffers` if it is set and positive; Otherwise `Semibook.DEFAULT_MAX_OFFERS` is used. |
| `desiredPrice?` | `Bigish` | The price that is expected to be used in calls to the market. The cache will initially contain all offers with this price or better. This can be useful in order to ensure a good pivot is readily available.  `maxOffers` and `desiredPrice` are mutually exclusive. |
| `desiredVolume?` | [`VolumeParams`](Market-1.md#volumeparams) | The volume that is expected to be used in trades on the market. |

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:129

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
| `price` | `Big` |

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:152

___

### <a id="offer" name="offer"></a> Offer

Ƭ **Offer**: [`OfferSlim`](Market-1.md#offerslim) & { `next`: `number` \| `undefined` ; `offer_gasbase`: `number`  }

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:164

___

### <a id="booksubscriptioncbargument" name="booksubscriptioncbargument"></a> BookSubscriptionCbArgument

Ƭ **BookSubscriptionCbArgument**: { `ba`: [`BA`](Market-1.md#ba) ; `offerId`: `number` ; `offer?`: [`Offer`](Market-1.md#offer)  } & { `type`: ``"OfferWrite"``  } \| { `type`: ``"OfferFail"`` ; `taker`: `string` ; `takerWants`: `Big` ; `takerGives`: `Big` ; `mgvData`: `string`  } \| { `type`: ``"OfferSuccess"`` ; `taker`: `string` ; `takerWants`: `Big` ; `takerGives`: `Big`  } \| { `type`: ``"OfferRetract"``  }

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:179

___

### <a id="marketcallback" name="marketcallback"></a> MarketCallback

Ƭ **MarketCallback**<`T`\>: (`cbArg`: [`BookSubscriptionCbArgument`](Market-1.md#booksubscriptioncbargument), `event?`: [`BookSubscriptionEvent`](Market-1.md#booksubscriptionevent), `ethersLog?`: `ethers.providers.Log`) => `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

▸ (`cbArg`, `event?`, `ethersLog?`): `T`

##### Parameters

| Name | Type |
| :------ | :------ |
| `cbArg` | [`BookSubscriptionCbArgument`](Market-1.md#booksubscriptioncbargument) |
| `event?` | [`BookSubscriptionEvent`](Market-1.md#booksubscriptionevent) |
| `ethersLog?` | `ethers.providers.Log` |

##### Returns

`T`

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:196

___

### <a id="storablemarketcallback" name="storablemarketcallback"></a> StorableMarketCallback

Ƭ **StorableMarketCallback**: [`MarketCallback`](Market-1.md#marketcallback)<`any`\>

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:201

___

### <a id="marketfilter" name="marketfilter"></a> MarketFilter

Ƭ **MarketFilter**: [`MarketCallback`](Market-1.md#marketcallback)<`boolean` \| `Promise`<`boolean`\>\>

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:202

___

### <a id="subscriptionparam" name="subscriptionparam"></a> SubscriptionParam

Ƭ **SubscriptionParam**: { `type`: ``"multiple"``  } \| { `type`: ``"once"`` ; `ok`: (...`a`: `any`[]) => `any` ; `ko`: (...`a`: `any`[]) => `any` ; `filter?`: (...`a`: `any`[]) => `boolean` \| `Promise`<`boolean`\>  }

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:203

___

### <a id="book" name="book"></a> Book

Ƭ **Book**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `asks` | [`Semibook`](../classes/Semibook.md) |
| `bids` | [`Semibook`](../classes/Semibook.md) |

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:212

___

### <a id="volumeestimate" name="volumeestimate"></a> VolumeEstimate

Ƭ **VolumeEstimate**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `estimatedVolume` | `Big` |
| `givenResidue` | `Big` |

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:214
