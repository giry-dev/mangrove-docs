---
id: "Market-1"
title: "Namespace: Market"
sidebar_label: "Market"
sidebar_position: 0
custom_edit_url: null
---

## Type Aliases

### <a id="key" name="key"></a> Key

Ƭ **Key**: `Object`

Parameters to identify a market on Mangrove.

**`Param`**

The base token of the market, or a string identifying the base token.

**`Param`**

The quote token of the market, or a string identifying the quote token.

**`Param`**

The tick spacing of the market.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `base` | `string` \| [`Token`](../classes/Token.md) |
| `quote` | `string` \| [`Token`](../classes/Token.md) |
| `tickSpacing` | `number` |

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:40

___

### <a id="keyresolvedforcalculation" name="keyresolvedforcalculation"></a> KeyResolvedForCalculation

Ƭ **KeyResolvedForCalculation**: `Object`

Values needed for converting between ticks/prices/volumes, is a subset of

**`See`**

[KeyResolved](Market-1.md#keyresolved)

#### Type declaration

| Name | Type |
| :------ | :------ |
| `base` | [`TokenCalculations`](../classes/TokenCalculations.md) |
| `quote` | [`TokenCalculations`](../classes/TokenCalculations.md) |
| `tickSpacing` | `number` |

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:47

___

### <a id="keyresolved" name="keyresolved"></a> KeyResolved

Ƭ **KeyResolved**: `Object`

Parameters to identify a market on Mangrove - with resolved tokens.

**`Param`**

The base token of the market.

**`Param`**

The quote token of the market.

**`Param`**

The tick spacing of the market.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `base` | [`Token`](../classes/Token.md) |
| `quote` | [`Token`](../classes/Token.md) |
| `tickSpacing` | `number` |

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:59

___

### <a id="ba" name="ba"></a> BA

Ƭ **BA**: ``"bids"`` \| ``"asks"``

Identifies the bids or asks offer list.

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:68

___

### <a id="bs" name="bs"></a> BS

Ƭ **BS**: ``"buy"`` \| ``"sell"``

Identifies a type of order.

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:73

___

### <a id="mgvreader" name="mgvreader"></a> MgvReader

Ƭ **MgvReader**: `typechain.MgvReader`

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:75

___

### <a id="failure" name="failure"></a> Failure

Ƭ **Failure**: `Object`

Result type for trade failures.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `offerId` | `number` |
| `reason` | `string` |
| `FailToDeliver?` | `Big` |
| `volumeGiven?` | `Big` |
| `penalty?` | `BigNumber` |

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:80

___

### <a id="success" name="success"></a> Success

Ƭ **Success**: `Object`

Result type for trade successes.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `offerId` | `number` |
| `got` | `Big` |
| `gave` | `Big` |

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:91

___

### <a id="ordersummary" name="ordersummary"></a> OrderSummary

Ƭ **OrderSummary**: `Object`

A summary of the result of a trade.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `olKeyHash` | `string` |
| `taker` | `string` |
| `fillOrKill?` | `boolean` |
| `tick` | `number` |
| `fillVolume` | `Big` |
| `fillWants` | `boolean` |
| `restingOrder?` | `boolean` |
| `restingOrderId?` | `number` |
| `fee?` | `Big` |
| `totalGot` | `Big` |
| `totalGave` | `Big` |
| `partialFill` | `boolean` |
| `bounty?` | `BigNumber` |

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:100

___

### <a id="cleansummary" name="cleansummary"></a> CleanSummary

Ƭ **CleanSummary**: `Object`

A summary of the result of cleaning.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `olKeyHash` | `string` |
| `taker` | `string` |
| `offersToBeCleaned` | `number` |
| `bounty?` | `BigNumber` |
| `offersCleaned?` | `number` |

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:119

___

### <a id="dirtyorderresult" name="dirtyorderresult"></a> DirtyOrderResult

Ƭ **DirtyOrderResult**: `Object`

Order results, with a summary field that may not be set.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `txReceipt` | `ethers.ContractReceipt` |
| `summary?` | [`OrderSummary`](Market-1.md#ordersummary) |
| `cleanSummary?` | [`CleanSummary`](Market-1.md#cleansummary) |
| `successes` | [`Success`](Market-1.md#success)[] |
| `tradeFailures` | [`Failure`](Market-1.md#failure)[] |
| `posthookFailures` | [`Failure`](Market-1.md#failure)[] |
| `offerWrites` | \{ `ba`: [`BA`](Market-1.md#ba) ; `offer`: [`OfferSlim`](Market-1.md#offerslim)  }[] |
| `restingOrder?` | [`OfferSlim`](Market-1.md#offerslim) |
| `restingOrderId?` | `number` |

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:130

___

### <a id="orderresult" name="orderresult"></a> OrderResult

Ƭ **OrderResult**: `Omit`<[`DirtyOrderResult`](Market-1.md#dirtyorderresult), ``"summary"`` \| ``"cleanSummary"``\> & \{ `summary`: [`OrderSummary`](Market-1.md#ordersummary)  }

Order results, with a definite summary.

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:145

___

### <a id="cleanresult" name="cleanresult"></a> CleanResult

Ƭ **CleanResult**: `Omit`<[`DirtyOrderResult`](Market-1.md#dirtyorderresult), ``"summary"`` \| ``"cleanSummary"``\> & \{ `summary`: [`CleanSummary`](Market-1.md#cleansummary)  }

Cleaning results, with a definite summary.

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:155

___

### <a id="updaterestingorderresult" name="updaterestingorderresult"></a> UpdateRestingOrderResult

Ƭ **UpdateRestingOrderResult**: `void`

Update resting order results.

No data is returned, but the transaction may fail.

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:167

___

### <a id="retractrestingorderresult" name="retractrestingorderresult"></a> RetractRestingOrderResult

Ƭ **RetractRestingOrderResult**: `void`

Retract resting order results.

No data is returned, but the transaction may fail.

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:174

___

### <a id="transaction" name="transaction"></a> Transaction

Ƭ **Transaction**<`TResult`\>: `Object`

A transaction that has been submitted to a market.

Market operations return this type so that the caller can track the state of the
low-level transaction that has been submitted as well as the result of the market operation.

#### Type parameters

| Name |
| :------ |
| `TResult` |

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `result` | `Promise`<`TResult`\> | The result of the market transaction. Resolves when the transaction has been included on-chain. Rejects if the transaction fails. |
| `response` | `Promise`<`ethers.ContractTransaction`\> | The low-level transaction that has been submitted to the chain. |

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:182

___

### <a id="orderroute" name="orderroute"></a> OrderRoute

Ƭ **OrderRoute**: ``"Mangrove"`` \| ``"MangroveOrder"``

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:195

___

### <a id="tradeparams" name="tradeparams"></a> TradeParams

Ƭ **TradeParams**: \{ `forceRoutingToMangroveOrder?`: `boolean` ; `slippage?`: `number` ; `fillOrKill?`: `boolean` ; `expiryDate?`: `number` ; `gasLowerBound?`: `ethers.BigNumberish`  } & \{ `restingOrder?`: [`RestingOrderParams`](Market-1.md#restingorderparams)  } & \{ `volume`: [`Bigish`](../modules.md#bigish) ; `limitPrice`: [`Bigish`](../modules.md#bigish)  } \| \{ `total`: [`Bigish`](../modules.md#bigish) ; `limitPrice`: [`Bigish`](../modules.md#bigish)  } \| \{ `maxTick`: `number` ; `fillVolume`: [`Bigish`](../modules.md#bigish) ; `fillWants?`: `boolean`  } \| \{ `gives`: [`Bigish`](../modules.md#bigish) ; `wants`: [`Bigish`](../modules.md#bigish) ; `fillWants?`: `boolean`  }

Parameters for trading on a market.

The parameters specify the trade to be executed, and optionally a resting order to be created. These are the base parameters, which may be given:

**`Param`**

whether to force routing to MangroveOrder, even if the market is not active.

**`Param`**

the maximum slippage to accept, in % of the amount of quote token.

**`Param`**

whether to fill the order completely or not at all.

**`Param`**

the expiry date of the order, in seconds since unix epoch.

**`Param`**

the minimum gas to use for the trade.

**`Param`**

whether to create a resting order, and if so, the parameters for the resting order.

The remaining parameters specify the kind of trade to be executed in one of the following ways:

* `{volume, limitPrice}` the volume of base token to buy or sell, and the limit price to accept.
* `{total, limitPrice}` the total amount of quote token to spend or receive, and the limit price to accept.
* `{maxTick, fillVolume, fillWants}` the maximum tick to accept, the volume of token to buy (if `fillWants=true`), or sell (if `fillWants=false`, and a boolean indicating whether to try to get all the tokens that the taker wants (`fillWants=true`), or, to sell all the token the taker gives (`fillWants=false`).
* `{gives, wants, fillWants}` the amount of token to sell, the amount of token to buy, and a boolean indicating whether to try to get all the tokens that the taker wants (`fillWants=true`), or, to sell all the token the taker gives (`fillWants=false`).

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:216

___

### <a id="restingorderparams" name="restingorderparams"></a> RestingOrderParams

Ƭ **RestingOrderParams**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `provision?` | [`Bigish`](../modules.md#bigish) |
| `offerId?` | `number` |
| `restingOrderGasreq?` | `number` |
| `restingOrderGaspriceFactor?` | `number` |

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:235

___

### <a id="updaterestingorderparams" name="updaterestingorderparams"></a> UpdateRestingOrderParams

Ƭ **UpdateRestingOrderParams**: \{ `offerId`: `number`  } & \{ `gives`: [`Bigish`](../modules.md#bigish)  } \| \{ `tick`: `number`  } \| \{ `gives`: [`Bigish`](../modules.md#bigish) ; `tick`: `number`  } \| \{ `price`: [`Bigish`](../modules.md#bigish)  } \| \{ `volume`: [`Bigish`](../modules.md#bigish)  } \| \{ `total`: [`Bigish`](../modules.md#bigish)  } \| \{ `price`: [`Bigish`](../modules.md#bigish) ; `volume`: [`Bigish`](../modules.md#bigish)  } \| \{ `price`: [`Bigish`](../modules.md#bigish) ; `total`: [`Bigish`](../modules.md#bigish)  } & `Omit`<[`RestingOrderParams`](Market-1.md#restingorderparams), ``"offerId"``\>

Parameters for updating an existing resting order.

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:243

___

### <a id="cleanparams" name="cleanparams"></a> CleanParams

Ƭ **CleanParams**: `Object`

Parameters for cleaning a set of offers.

**`Param`**

an array of targets to clean, each target is an object with the following fields:
* `offerId`: the offer to be cleaned
* `takerWants`: the amount of base token (for asks) or quote token (for bids) the taker wants
* `tick`: the tick of the offer to be cleaned
* `gasreq`: the maximum gasreq the taker/cleaner, wants to use to clean the offer, has to be at least the same as the gasreq of the offer in order for it be cleaned.

**`Param`**

bids or asks

**`Param`**

the taker to impersonate, if not specified, the caller of the function will be used

#### Type declaration

| Name | Type |
| :------ | :------ |
| `targets` | \{ `offerId`: `number` ; `takerWants`: [`Bigish`](../modules.md#bigish) ; `tick`: `number` ; `gasreq`: `number`  }[] |
| `ba` | [`BA`](Market-1.md#ba) |
| `taker?` | `string` |

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:267

___

### <a id="rawcleanparams" name="rawcleanparams"></a> RawCleanParams

Ƭ **RawCleanParams**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ba` | [`BA`](Market-1.md#ba) |
| `olKey` | `OLKeyStruct` |
| `targets` | `MgvLib.CleanTargetStruct`[] |
| `taker` | `string` |

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:278

___

### <a id="volumeparams" name="volumeparams"></a> VolumeParams

Ƭ **VolumeParams**: [`VolumeParams`](Semibook-1.md#volumeparams) & \{ `what`: ``"base"`` \| ``"quote"``  }

Specification of how much volume to (potentially) trade on the market.

`{given:100, what:"base", to:"buy"}` means buying 100 base tokens.

`{given:10, what:"quote", to:"sell"})` means selling 10 quote tokens.

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:292

___

### <a id="directionlessvolumeparams" name="directionlessvolumeparams"></a> DirectionlessVolumeParams

Ƭ **DirectionlessVolumeParams**: `Omit`<[`VolumeParams`](Market-1.md#volumeparams), ``"to"``\>

Specification of how much volume to (potentially) trade on the market, without specifying the direction of the trade.

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:300

___

### <a id="optionalparams" name="optionalparams"></a> OptionalParams

Ƭ **OptionalParams**: `Object`

Optional parameters for connecting to a Mangrove market - gives optional parameters for how the book cache behaves (see [Market.BookOptions](Market-1.md#bookoptions)), and the timing of when the market is initialized.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `bookOptions` | [`BookOptions`](Market-1.md#bookoptions) |
| `noInit` | `boolean` |

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:305

___

### <a id="cachecontentsoptions" name="cachecontentsoptions"></a> CacheContentsOptions

Ƭ **CacheContentsOptions**: \{ `targetNumberOfTicks?`: `number`  } \| \{ `desiredPrice`: [`Bigish`](../modules.md#bigish)  } \| \{ `desiredVolume`: [`VolumeParams`](Market-1.md#volumeparams)  }

Options that specify what the cache fetches and retains.

`targetNumberOfTicks`, `desiredPrice`, and `desiredVolume` are mutually exclusive.
If none of these are specified, the default is `targetNumberOfTicks` = `Semibook.DEFAULT_TARGET_NUMBER_OF_TICKS`.

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:316

___

### <a id="bookoptions" name="bookoptions"></a> BookOptions

Ƭ **BookOptions**: [`CacheContentsOptions`](Market-1.md#cachecontentsoptions) & \{ `chunkSize?`: `number`  }

Options that control how the book cache behaves.

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:342

___

### <a id="offerslim" name="offerslim"></a> OfferSlim

Ƭ **OfferSlim**: `Object`

Offers in the book cache.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `number` |
| `gasprice` | `number` |
| `maker` | `string` |
| `gasreq` | `number` |
| `tick` | `number` |
| `price` | `Big` |
| `gives` | `Big` |
| `wants` | `Big` |
| `volume` | `Big` |

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:352

___

### <a id="offer" name="offer"></a> Offer

Ƭ **Offer**: [`OfferSlim`](Market-1.md#offerslim) & \{ `nextAtTick`: `number` \| `undefined` ; `prevAtTick`: `number` \| `undefined` ; `gasbase`: `number`  }

Offers in the book cache, with a given gasbase and pointers to the next and
previous offer at the same tick; `undefined` means no such offer, ie, the
offer is first or last at the tick.

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:369

___

### <a id="booksubscriptionevent" name="booksubscriptionevent"></a> BookSubscriptionEvent

Ƭ **BookSubscriptionEvent**: \{ `name`: ``"OfferWrite"``  } & `TCM.OfferWriteEvent` \| \{ `name`: ``"OfferFail"``  } & `TCM.OfferFailEvent` \| \{ `name`: ``"OfferFailWithPosthookData"``  } & `TCM.OfferFailEvent` \| \{ `name`: ``"OfferSuccess"``  } & `TCM.OfferSuccessEvent` \| \{ `name`: ``"OfferSuccessWithPosthookData"``  } & `TCM.OfferSuccessEvent` \| \{ `name`: ``"OfferRetract"``  } & `TCM.OfferRetractEvent` \| \{ `name`: ``"SetActive"``  } & `TCM.SetActiveEvent` \| \{ `name`: ``"SetFee"``  } & `TCM.SetFeeEvent` \| \{ `name`: ``"SetGasbase"``  } & `TCM.SetGasbaseEvent` \| \{ `name`: ``"SetDensity96X32"``  } & `TCM.SetDensity96X32Event`

Type for events emitted by the Mangrove market.

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:378

___

### <a id="booksubscriptioncbargument" name="booksubscriptioncbargument"></a> BookSubscriptionCbArgument

Ƭ **BookSubscriptionCbArgument**: \{ `ba`: [`BA`](Market-1.md#ba)  } & \{ `type`: ``"SetActive"`` ; `active`: `boolean`  } \| \{ `type`: ``"SetFee"`` ; `fee`: `number`  } \| \{ `type`: ``"SetGasbase"`` ; `offerGasbase`: `number`  } \| \{ `type`: ``"SetDensity96X32"`` ; `density`: [`Density`](../classes/Density.md)  } \| \{ `offerId?`: `number` ; `offer?`: [`Offer`](Market-1.md#offer)  } & \{ `type`: ``"OfferWrite"``  } \| \{ `type`: ``"OfferFail"`` ; `taker`: `string` ; `takerWants`: `Big` ; `takerGives`: `Big` ; `mgvData`: `string`  } \| \{ `type`: ``"OfferFailWithPosthookData"`` ; `taker`: `string` ; `takerWants`: `Big` ; `takerGives`: `Big` ; `mgvData`: `string`  } \| \{ `type`: ``"OfferSuccess"`` ; `taker`: `string` ; `takerWants`: `Big` ; `takerGives`: `Big`  } \| \{ `type`: ``"OfferSuccessWithPosthookData"`` ; `taker`: `string` ; `takerWants`: `Big` ; `takerGives`: `Big`  } \| \{ `type`: ``"OfferRetract"``  }

The arguments passed to a an order book event callback function - see [Market.subscribe](../classes/Market.md#subscribe).

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:393

___

### <a id="marketcallback" name="marketcallback"></a> MarketCallback

Ƭ **MarketCallback**<`T`\>: (`cbArg`: [`BookSubscriptionCbArgument`](Market-1.md#booksubscriptioncbargument), `event?`: [`BookSubscriptionEvent`](Market-1.md#booksubscriptionevent), `ethersLog?`: `ethers.providers.Log`) => `T` \| `Promise`<`T`\>

A callback function that is called when an order book event occurs.

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

@mangrovedao/mangrove.js/src/market.ts:450

___

### <a id="storablemarketcallback" name="storablemarketcallback"></a> StorableMarketCallback

Ƭ **StorableMarketCallback**: [`MarketCallback`](Market-1.md#marketcallback)<`any`\>

A type for [MarketCallback](Market-1.md#marketcallback) that is stored in a map.

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:459

___

### <a id="marketfilter" name="marketfilter"></a> MarketFilter

Ƭ **MarketFilter**: [`MarketCallback`](Market-1.md#marketcallback)<`boolean`\>

A filter function that can be used to filter order book events.

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:464

___

### <a id="subscriptionparam" name="subscriptionparam"></a> SubscriptionParam

Ƭ **SubscriptionParam**: \{ `type`: ``"multiple"``  } \| \{ `type`: ``"once"`` ; `ok`: (...`a`: `any`[]) => `any` ; `ko`: (...`a`: `any`[]) => `any` ; `filter?`: (...`a`: `any`[]) => `boolean` \| `Promise`<`boolean`\>  }

A subscription parameter that specifies how a subscription to order book events should behave.

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:469

___

### <a id="book" name="book"></a> Book

Ƭ **Book**: `Object`

Order books - an asks semibook and a bids semibook.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `asks` | [`Semibook`](../classes/Semibook.md) |
| `bids` | [`Semibook`](../classes/Semibook.md) |

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:481

___

### <a id="volumeestimate" name="volumeestimate"></a> VolumeEstimate

Ƭ **VolumeEstimate**: `Object`

A volume estimate for a trade.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `maxTickMatched` | `number` \| `undefined` |
| `estimatedVolume` | `Big` |
| `estimatedFee` | `Big` |
| `remainingFillVolume` | `Big` |

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:486
