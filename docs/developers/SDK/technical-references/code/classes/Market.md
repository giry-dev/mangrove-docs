---
id: "Market"
title: "Class: Market"
sidebar_label: "Market"
sidebar_position: 0
custom_edit_url: null
---

The Market class focuses on a Mangrove market.
On-chain, markets are implemented as two offer lists,
one for asks (base,quote), the other for bids (quote,base).

Market initialization needs to store the network name, so you cannot
directly use the constructor. Instead of `new Market(...)`, do `await Market.connect(...)`.

**`See`**

[connect](Market.md#connect)

## Properties

### <a id="mgv" name="mgv"></a> mgv

• **mgv**: [`Mangrove`](Mangrove.md)

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:514

___

### <a id="base" name="base"></a> base

• **base**: [`Token`](Token.md)

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:515

___

### <a id="quote" name="quote"></a> quote

• **quote**: [`Token`](Token.md)

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:516

___

### <a id="tickspacing" name="tickspacing"></a> tickSpacing

• **tickSpacing**: `number`

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:517

___

### <a id="olkeybasequote" name="olkeybasequote"></a> olKeyBaseQuote

• **olKeyBaseQuote**: `OLKeyStruct`

The OLKey for the base, quote offer list

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:519

___

### <a id="olkeyquotebase" name="olkeyquotebase"></a> olKeyQuoteBase

• **olKeyQuoteBase**: `OLKeyStruct`

The OLKey for the quote, base offer list

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:521

___

### <a id="trade" name="trade"></a> trade

• **trade**: `Trade`

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:526

___

### <a id="tradeeventmanagement" name="tradeeventmanagement"></a> tradeEventManagement

• **tradeEventManagement**: `TradeEventManagement`

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:527

___

### <a id="prettyp" name="prettyp"></a> prettyP

• **prettyP**: `PrettyPrint`

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:528

___

### <a id="minvolumeask" name="minvolumeask"></a> minVolumeAsk

• `Optional` **minVolumeAsk**: `Big`

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:533

___

### <a id="minvolumebid" name="minvolumebid"></a> minVolumeBid

• `Optional` **minVolumeBid**: `Big`

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:534

## Methods

### <a id="connect" name="connect"></a> connect

▸ `Static` **connect**(`params`): `Promise`<[`Market`](Market.md)\>

Connect to a market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | { `mgv`: [`Mangrove`](Mangrove.md)  } & [`Key`](../namespaces/Market-1.md#key) & `Partial`<[`OptionalParams`](../namespaces/Market-1.md#optionalparams)\> | A set of parameters identifying the market on Mangrove to connect to. |

#### Returns

`Promise`<[`Market`](Market.md)\>

A promise that resolves to a Market instance.

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:541

___

### <a id="close" name="close"></a> close

▸ **close**(): `void`

Close a Market instance.

#### Returns

`void`

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:620

___

### <a id="initialize" name="initialize"></a> initialize

▸ **initialize**(): `Promise`<`void`\>

Initialize the market.

#### Returns

`Promise`<`void`\>

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:636

___

### <a id="getolkey" name="getolkey"></a> getOLKey

▸ **getOLKey**(`ba`): `OLKeyStruct`

Get the configuration of the specified offer list of the market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ba` | [`BA`](../namespaces/Market-1.md#ba) | bids or asks |

#### Returns

`OLKeyStruct`

The configuration of the specified offer list of the market.

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:701

___

### <a id="getbook" name="getbook"></a> getBook

▸ **getBook**(): [`Book`](../namespaces/Market-1.md#book)

Return the two semibooks of this market.

Asks are standing offers to sell base and buy quote.
Bids are standing offers to buy base and sell quote.
All prices are in quote/base, all volumes are in base.
Offers are ordered from best to worse from the taker perspective.

#### Returns

[`Book`](../namespaces/Market-1.md#book)

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:743

___

### <a id="getsemibook" name="getsemibook"></a> getSemibook

▸ **getSemibook**(`ba`): [`Semibook`](Semibook.md)

Return the bids or asks semibook.

#### Parameters

| Name | Type |
| :------ | :------ |
| `ba` | [`BA`](../namespaces/Market-1.md#ba) |

#### Returns

[`Semibook`](Semibook.md)

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:756

___

### <a id="requestbook" name="requestbook"></a> requestBook

▸ **requestBook**(`opts?`): `Promise`<{ `asks`: [`Offer`](../namespaces/Market-1.md#offer)[] ; `bids`: [`Offer`](../namespaces/Market-1.md#offer)[]  }\>

Return the asks and bids semibook.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `opts` | [`BookOptions`](../namespaces/Market-1.md#bookoptions) | `bookOptsDefault` | Options to filter the offers in the book. |

#### Returns

`Promise`<{ `asks`: [`Offer`](../namespaces/Market-1.md#offer)[] ; `bids`: [`Offer`](../namespaces/Market-1.md#offer)[]  }\>

The asks and bids semibooks, with the offers that match the options.

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:768

___

### <a id="spread" name="spread"></a> spread

▸ **spread**(): `Promise`<{ `absoluteSpread`: `undefined` ; `relativeSpread`: `undefined` ; `tickSpread`: `undefined`  } \| { `absoluteSpread`: `Big` ; `relativeSpread`: `Big` ; `tickSpread`: `number`  }\>

Gets the absolute, relative, and tick spread between bids and asks on the market.

#### Returns

`Promise`<{ `absoluteSpread`: `undefined` ; `relativeSpread`: `undefined` ; `tickSpread`: `undefined`  } \| { `absoluteSpread`: `Big` ; `relativeSpread`: `Big` ; `tickSpread`: `number`  }\>

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:785

___

### <a id="spread-1" name="spread-1"></a> spread

▸ `Static` **spread**(`market`, `bestAsk?`, `bestBid?`): { `absoluteSpread`: `undefined` ; `relativeSpread`: `undefined` ; `tickSpread`: `undefined`  } \| { `absoluteSpread`: `Big` ; `relativeSpread`: `Big` ; `tickSpread`: `number`  }

Gets the absolute, relative, and tick spread between a bid and an ask on the market.

#### Parameters

| Name | Type |
| :------ | :------ |
| `market` | [`KeyResolvedForCalculation`](../namespaces/Market-1.md#keyresolvedforcalculation) |
| `bestAsk?` | `Object` |
| `bestAsk.price` | `BigSource` |
| `bestAsk.tick` | `number` |
| `bestBid?` | `Object` |
| `bestBid.price` | `BigSource` |
| `bestBid.tick` | `number` |

#### Returns

{ `absoluteSpread`: `undefined` ; `relativeSpread`: `undefined` ; `tickSpread`: `undefined`  } \| { `absoluteSpread`: `Big` ; `relativeSpread`: `Big` ; `tickSpread`: `number`  }

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:797

___

### <a id="isactive" name="isactive"></a> isActive

▸ **isActive**(): `boolean`

Is the market active?

#### Returns

`boolean`

Whether the market is active, i.e., whether both the asks and bids semibooks are active.

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:822

___

### <a id="islive" name="islive"></a> isLive

▸ **isLive**(`ba`, `offerId`): `Promise`<`boolean`\>

Is the offer corresponding to the given offerId in the book ba live?

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ba` | [`BA`](../namespaces/Market-1.md#ba) | Bids or asks. |
| `offerId` | `number` | An offer id to check. |

#### Returns

`Promise`<`boolean`\>

True, if a corresponding live offer was found, else false.

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:833

___

### <a id="isliveoffer" name="isliveoffer"></a> isLiveOffer

▸ **isLiveOffer**(`offer`): `boolean`

Is the offer live?

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `offer` | [`Offer`](../namespaces/Market-1.md#offer) | An offer to check. |

#### Returns

`boolean`

True, if the offer is live, else false.

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:843

___

### <a id="getofferprovision" name="getofferprovision"></a> getOfferProvision

▸ **getOfferProvision**(`ba`, `gasreq`, `gasprice?`): `Promise`<`Big`\>

Gets the amount of ethers necessary to provision an offer on the market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ba` | [`BA`](../namespaces/Market-1.md#ba) | bids or asks |
| `gasreq` | `number` | gas required for the offer execution. |
| `gasprice?` | `number` | gas price to use for the calculation. If undefined, then Mangrove's current gas price is used. |

#### Returns

`Promise`<`Big`\>

the amount of ethers necessary to provision the offer.

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:853

___

### <a id="getbidprovision" name="getbidprovision"></a> getBidProvision

▸ **getBidProvision**(`gasreq`, `gasprice?`): `Promise`<`Big`\>

Gets the amount of ethers necessary to provision a bid on the market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `gasreq` | `number` | gas required for the offer execution. |
| `gasprice?` | `number` | gas price to use for the calculation. If undefined, then Mangrove's current gas price is used. |

#### Returns

`Promise`<`Big`\>

the amount of ethers necessary to provision the offer.

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:873

___

### <a id="getaskprovision" name="getaskprovision"></a> getAskProvision

▸ **getAskProvision**(`gasreq`, `gasprice?`): `Promise`<`Big`\>

Gets the amount of ethers necessary to provision a bid on the market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `gasreq` | `number` | gas required for the offer execution. |
| `gasprice?` | `number` | gas price to use for the calculation. If undefined, then Mangrove's current gas price is used. |

#### Returns

`Promise`<`Big`\>

the amount of ethers necessary to provision the offer.

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:882

___

### <a id="getmissingprovision" name="getmissingprovision"></a> getMissingProvision

▸ **getMissingProvision**(`ba`, `lockedProvision`, `gasreq`, `gasprice?`): `Promise`<`Big`\>

Gets the missing provision in ethers for an offer with the given parameters

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ba` | [`BA`](../namespaces/Market-1.md#ba) | bids or asks |
| `lockedProvision` | `BigSource` | the provision already locked with the offer |
| `gasreq` | `number` | gas required for the offer execution. |
| `gasprice?` | `number` | gas price to use for the calculation. If undefined, then Mangrove's current gas price is used. |

#### Returns

`Promise`<`Big`\>

the additional required provision, in ethers.

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:893

___

### <a id="bidinfo" name="bidinfo"></a> bidInfo

▸ **bidInfo**(`offerId`): `Promise`<[`Offer`](../namespaces/Market-1.md#offer)\>

Returns the offer info for the given offerId in the bids offer list.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `offerId` | `number` | id of the offer to get info for. |

#### Returns

`Promise`<[`Offer`](../namespaces/Market-1.md#offer)\>

the offer info for the given offerId.

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:915

___

### <a id="askinfo" name="askinfo"></a> askInfo

▸ **askInfo**(`offerId`): `Promise`<[`Offer`](../namespaces/Market-1.md#offer)\>

Returns the offer info for the given offerId in the asks offer list.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `offerId` | `number` | id of the offer to get info for. |

#### Returns

`Promise`<[`Offer`](../namespaces/Market-1.md#offer)\>

the offer info for the given offerId.

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:924

___

### <a id="offerinfo" name="offerinfo"></a> offerInfo

▸ **offerInfo**(`ba`, `offerId`): `Promise`<[`Offer`](../namespaces/Market-1.md#offer)\>

Returns struct containing offer details in the current market state.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ba` | [`BA`](../namespaces/Market-1.md#ba) | bids or asks |
| `offerId` | `number` | id of the offer to get info for. |

#### Returns

`Promise`<[`Offer`](../namespaces/Market-1.md#offer)\>

the offer info for the given offerId.

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:933

___

### <a id="permit" name="permit"></a> permit

▸ **permit**(`action`, `data`): `Promise`<`ContractTransaction`\>

Sign permit data. If action="buy", will permit buying base with spender's
quote token. If action="sell", will permit buying quote with spender's base
token.

**`See`**

[permit](Mangrove.md#permit)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `action` | ``"buy"`` \| ``"sell"`` | "buy" or "sell" |
| `data` | `Omit`<[`SimplePermitData`](../namespaces/Mangrove-1.md#simplepermitdata), ``"outbound_tkn"`` \| ``"inbound_tkn"``\> | permit data |

#### Returns

`Promise`<`ContractTransaction`\>

a promise that resolves to the permit signature.

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:946

___

### <a id="buy" name="buy"></a> buy

▸ **buy**(`params`, `overrides?`): `Promise`<[`Transaction`](../namespaces/Market-1.md#transaction)<[`OrderResult`](../namespaces/Market-1.md#orderresult)\>\>

Market buy order. Will attempt to buy base token using quote tokens.

**`Remarks`**

Will stop if
- book is empty, or
- price no longer good, or
- `wants` tokens have been bought.

**`Example`**

```
const market = await mgv.market({base:"USDC",quote:"DAI"};
market.buy({volume: 100, price: '1.01'}) //use strings to be exact
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`TradeParams`](../namespaces/Market-1.md#tradeparams) | Trade parameters - see [TradeParams](../namespaces/Market-1.md#tradeparams). |
| `overrides` | `Overrides` | ethers overrides for the transaction. |

#### Returns

`Promise`<[`Transaction`](../namespaces/Market-1.md#transaction)<[`OrderResult`](../namespaces/Market-1.md#orderresult)\>\>

a promise that resolves to the transaction response and the result of the trade.

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:988

___

### <a id="sell" name="sell"></a> sell

▸ **sell**(`params`, `overrides?`): `Promise`<[`Transaction`](../namespaces/Market-1.md#transaction)<[`OrderResult`](../namespaces/Market-1.md#orderresult)\>\>

Market sell order. Will attempt to sell base token for quote tokens.

**`Remarks`**

Will stop if
- book is empty, or
- price no longer good, or
-`gives` tokens have been sold.

**`Example`**

```
const market = await mgv.market({base:"USDC",quote:"DAI"})
market.sell({volume: 100, price: 1})
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`TradeParams`](../namespaces/Market-1.md#tradeparams) | Trade parameters - see [TradeParams](../namespaces/Market-1.md#tradeparams). |
| `overrides` | `Overrides` | ethers overrides for the transaction. |

#### Returns

`Promise`<[`Transaction`](../namespaces/Market-1.md#transaction)<[`OrderResult`](../namespaces/Market-1.md#orderresult)\>\>

a promise that resolves to the transaction response and the result of the trade.

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:1015

___

### <a id="gasestimatebuy" name="gasestimatebuy"></a> gasEstimateBuy

▸ **gasEstimateBuy**(`params`): `Promise`<`BigNumber`\>

Estimate amount of gas for a buy order corresponding to the given trade parameters.

**`See`**

 - [buy](Market.md#buy) for the corresponding trade method.
 - [TradeParams](../namespaces/Market-1.md#tradeparams) for a description of trade parameters

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`TradeParams`](../namespaces/Market-1.md#tradeparams) | Trade parameters. |

#### Returns

`Promise`<`BigNumber`\>

a gas estimate for the trade.

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:1028

___

### <a id="gasestimatesell" name="gasestimatesell"></a> gasEstimateSell

▸ **gasEstimateSell**(`params`): `Promise`<`BigNumber`\>

Estimate amount of gas for a sell order corresponding to the given trade parameters.

**`See`**

 - [sell](Market.md#sell) for the corresponding trade method.
 - [TradeParams](../namespaces/Market-1.md#tradeparams) for a description of trade parameters

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`TradeParams`](../namespaces/Market-1.md#tradeparams) | Trade parameters. |

#### Returns

`Promise`<`BigNumber`\>

a gas estimate for the trade.

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:1039

___

### <a id="updaterestingorder" name="updaterestingorder"></a> updateRestingOrder

▸ **updateRestingOrder**(`ba`, `params`, `overrides?`): `Promise`<[`Transaction`](../namespaces/Market-1.md#transaction)<`void`\>\>

Update a resting order posted by MangroveOrder.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ba` | [`BA`](../namespaces/Market-1.md#ba) | whether the offer is a bid or ask |
| `params` | [`UpdateRestingOrderParams`](../namespaces/Market-1.md#updaterestingorderparams) | update parameters - see [UpdateRestingOrderParams](../namespaces/Market-1.md#updaterestingorderparams) |
| `overrides` | `Overrides` | overrides for the transaction |

#### Returns

`Promise`<[`Transaction`](../namespaces/Market-1.md#transaction)<`void`\>\>

a promise that resolves to the transaction response and the result of the update.

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:1051

___

### <a id="retractrestingorder" name="retractrestingorder"></a> retractRestingOrder

▸ **retractRestingOrder**(`ba`, `id`, `deprovision?`, `overrides?`): `Promise`<[`Transaction`](../namespaces/Market-1.md#transaction)<`void`\>\>

Retract a resting order posted by MangroveOrder.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `ba` | [`BA`](../namespaces/Market-1.md#ba) | `undefined` | whether the offer is a bid or ask |
| `id` | `number` | `undefined` | the offer id |
| `deprovision` | `boolean` | `false` | whether to deprovision the offer. If true, the offer's provision will be returned to the maker's balance on Mangrove. |
| `overrides` | `Overrides` | `{}` | overrides for the transaction |

#### Returns

`Promise`<[`Transaction`](../namespaces/Market-1.md#transaction)<`void`\>\>

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:1066

___

### <a id="clean" name="clean"></a> clean

▸ **clean**(`params`, `overrides?`): `Promise`<{ `result`: `Promise`<[`CleanResult`](../namespaces/Market-1.md#cleanresult)\> ; `response`: `Promise`<`ContractTransaction`\>  }\>

Clean a set of given offers.

**`See`**

[CleanParams](../namespaces/Market-1.md#cleanparams) for a description of params.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`CleanParams`](../namespaces/Market-1.md#cleanparams) | Parameters for the cleaning, specifying the target offers, the side of the market to clean, and optionally the taker to impersonate. |
| `overrides` | `Overrides` | - |

#### Returns

`Promise`<{ `result`: `Promise`<[`CleanResult`](../namespaces/Market-1.md#cleanresult)\> ; `response`: `Promise`<`ContractTransaction`\>  }\>

a promise that resolves to the transasction response and the result of the cleaning.

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:1083

___

### <a id="getrawcleanparams" name="getrawcleanparams"></a> getRawCleanParams

▸ **getRawCleanParams**(`params`): `Promise`<[`RawCleanParams`](../namespaces/Market-1.md#rawcleanparams)\>

Gets parameters to send to function `market.mgv.cleanerContract.cleanByImpersonation`.

**`Remarks`**

In more detail, the parameters should be an object with the following fields:
`targets`: an array of
   `offerId`: the offer to be cleaned
   `takerWants`: the amount of base token (for asks) or quote token (for bids) the taker wants
   `tick`: the of the offer to be cleaned
   `gasreq`: the maximum gasreq the taker/cleaner, wants to use to clean the offer, has to be at least the same as the gasreq of the offer in order for it be cleaned
`ba`: whether to clean `asks` or `bids`
`taker`: specifies what taker to impersonate, if not specified, the caller of the function will be used

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`CleanParams`](../namespaces/Market-1.md#cleanparams) |

#### Returns

`Promise`<[`RawCleanParams`](../namespaces/Market-1.md#rawcleanparams)\>

a promise that resolves to the raw parameters to send to the cleaner contract

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:1111

___

### <a id="estimategas" name="estimategas"></a> estimateGas

▸ **estimateGas**(`bs`, `volume`): `Promise`<`BigNumber`\>

Estimate amount of gas for a buy or sell order for the given volume.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `bs` | [`BS`](../namespaces/Market-1.md#bs) | buy or sell |
| `volume` | `BigNumber` | volume to trade |

#### Returns

`Promise`<`BigNumber`\>

an estimate of the gas required for the trade

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:1123

___

### <a id="simulategas" name="simulategas"></a> simulateGas

▸ **simulateGas**(`ba`, `maxTick`, `fillVolume`, `fillWants`): `Promise`<`BigNumber`\>

Uses [simulateMarketOrder](Semibook.md#simulatemarketorder) to simulate the gas required for a market order. An overhead of 50% is added to account for changes to the book and failing offers.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ba` | [`BA`](../namespaces/Market-1.md#ba) | bids or asks |
| `maxTick` | `number` | - |
| `fillVolume` | `BigNumber` | - |
| `fillWants` | `boolean` | whether to fill wants or gives |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:1150

___

### <a id="estimatevolume" name="estimatevolume"></a> estimateVolume

▸ **estimateVolume**(`params`): `Promise`<[`VolumeEstimate`](../namespaces/Market-1.md#volumeestimate)\>

Volume estimation for buying or selling:

If you say `estimateVolume({given:100,what:"base",to:"buy"})`,

an estimate of how much quote token you would have to spend to get 100 base tokens will be returned.

If you say `estimateVolume({given:10,what:"quote",to:"sell"})`,

an estimate of how much base tokens you'd have to buy in order to spend 10 quote tokens will be returned.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`VolumeParams`](../namespaces/Market-1.md#volumeparams) | Parameters for the volume estimation - see [VolumeParams](../namespaces/Market-1.md#volumeparams) |

#### Returns

`Promise`<[`VolumeEstimate`](../namespaces/Market-1.md#volumeestimate)\>

a promise that resolves to the volume estimation.

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:1190

___

### <a id="estimatevolumetoreceive" name="estimatevolumetoreceive"></a> estimateVolumeToReceive

▸ **estimateVolumeToReceive**(`params`): `Promise`<[`VolumeEstimate`](../namespaces/Market-1.md#volumeestimate)\>

Convenience method: Estimate volume to be received given an amount of base/quote you are ready to spend.

**`See`**

[estimateVolume](Market.md#estimatevolume)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`DirectionlessVolumeParams`](../namespaces/Market-1.md#directionlessvolumeparams) | Parameters for the volume estimation - see [DirectionlessVolumeParams](../namespaces/Market-1.md#directionlessvolumeparams) |

#### Returns

`Promise`<[`VolumeEstimate`](../namespaces/Market-1.md#volumeestimate)\>

a promise that resolves to the volume estimation.

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:1210

___

### <a id="estimatevolumetospend" name="estimatevolumetospend"></a> estimateVolumeToSpend

▸ **estimateVolumeToSpend**(`params`): `Promise`<[`VolumeEstimate`](../namespaces/Market-1.md#volumeestimate)\>

Convenience method: Estimate volume to be spent given an amount of base/quote you want to receive.

**`See`**

[estimateVolume](Market.md#estimatevolume)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`DirectionlessVolumeParams`](../namespaces/Market-1.md#directionlessvolumeparams) | Parameters for the volume estimation - see [DirectionlessVolumeParams](../namespaces/Market-1.md#directionlessvolumeparams) |

#### Returns

`Promise`<[`VolumeEstimate`](../namespaces/Market-1.md#volumeestimate)\>

a promise that resolves to the volume estimation.

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:1223

___

### <a id="config" name="config"></a> config

▸ **config**(): `Object`

Return config local to a market.

**`Remarks`**

* Amounts are converted to plain numbers.
* density is converted to public token units per gas used
* fee *remains* in basis points of the token being bought

#### Returns

`Object`

The config for the asks and bids side of the market.

| Name | Type |
| :------ | :------ |
| `asks` | [`LocalConfig`](../namespaces/Mangrove-1.md#localconfig) |
| `bids` | [`LocalConfig`](../namespaces/Mangrove-1.md#localconfig) |

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:1239

___

### <a id="consoleasks" name="consoleasks"></a> consoleAsks

▸ **consoleAsks**(`filter?`): `void`

Pretty prints the current state of the asks of the market

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter?` | `prettyPrintFilter` |

#### Returns

`void`

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:1250

___

### <a id="consolebids" name="consolebids"></a> consoleBids

▸ **consoleBids**(`filter?`): `void`

Pretty prints the current state of the bids of the market

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter?` | `prettyPrintFilter` |

#### Returns

`void`

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:1255

___

### <a id="prettyprint" name="prettyprint"></a> prettyPrint

▸ **prettyPrint**(`ba`, `filter`): `void`

Pretty prints the current state of the asks or bids of the market

#### Parameters

| Name | Type |
| :------ | :------ |
| `ba` | [`BA`](../namespaces/Market-1.md#ba) |
| `filter` | `prettyPrintFilter` |

#### Returns

`void`

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:1260

___

### <a id="subscribe" name="subscribe"></a> subscribe

▸ **subscribe**(`cb`): `void`

Subscribe to order book updates.

**`Remarks`**

The first argument of cb, `event`, is a summary of the event.
It has the following properties:

* `type` the type of change. May be: * `"OfferWrite"`: an offer was
inserted  or moved in the book.  * `"OfferFail"`, `"OfferSuccess"`,
`"OfferRetract"`: an offer was removed from the book because it failed,
succeeded, or was canceled.

* `ba` is either `"bids"` or `"asks"`. The offer concerned by the change is
either an ask (an offer for `base` asking for `quote`) or a bid (`an offer
for `quote` asking for `base`).

* `offer` is information about the offer, see type `Offer`.

* `taker`, `takerWants`, `takerGives` (for `"OfferFail"` and
`"OfferSuccess"` only): address of the taker who executed the offer as well
as the volumes that were requested by the taker.

* `mgvData` : extra data from mangrove and the maker
contract. See the [Mangrove contracts documentation](#TODO) for the list of possible status codes.

`opts` may specify the maximum of offers to read initially, and the chunk
size used when querying the reader contract (always ran locally).

**`Example`**

```
const market = await mgv.market({base:"USDC",quote:"DAI"}
market.subscribe((event,utils) => console.log(event.type, utils.book()))
```

**`Note`**

Only one subscription may be active at a time.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cb` | [`MarketCallback`](../namespaces/Market-1.md#marketcallback)<`void`\> | a callback, which gets called whenever the order book is updated. |

#### Returns

`void`

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:1304

___

### <a id="once" name="once"></a> once

▸ **once**<`T`\>(`cb`, `filter?`): `Promise`<`T`\>

Returns a promise which is fulfilled after execution of the callback.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | [`MarketCallback`](../namespaces/Market-1.md#marketcallback)<`T`\> |
| `filter?` | [`MarketFilter`](../namespaces/Market-1.md#marketfilter) |

#### Returns

`Promise`<`T`\>

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:1311

___

### <a id="unsubscribe" name="unsubscribe"></a> unsubscribe

▸ **unsubscribe**(`cb`): `void`

Stop calling a user-provided callback function on book-related events.

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | [`StorableMarketCallback`](../namespaces/Market-1.md#storablemarketcallback) |

#### Returns

`void`

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:1325

___

### <a id="getoutboundinbound" name="getoutboundinbound"></a> getOutboundInbound

▸ **getOutboundInbound**(`ba`): `Object`

Determine which token will be Mangrove's outbound/inbound depending on whether you're working with bids or asks.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ba` | [`BA`](../namespaces/Market-1.md#ba) | bids or asks |

#### Returns

`Object`

the outbound and inbound tokens.

| Name | Type |
| :------ | :------ |
| `outbound_tkn` | [`Token`](Token.md) |
| `inbound_tkn` | [`Token`](Token.md) |

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:1333

___

### <a id="getoutboundinbound-1" name="getoutboundinbound-1"></a> getOutboundInbound

▸ `Static` **getOutboundInbound**<`T`\>(`ba`, `base`, `quote`): `Object`

Determine which token will be Mangrove's outbound/inbound depending on whether you're working with bids or asks.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ba` | [`BA`](../namespaces/Market-1.md#ba) | bids or asks |
| `base` | `T` | base token |
| `quote` | `T` | quote token |

#### Returns

`Object`

the outbound and inbound tokens.

| Name | Type |
| :------ | :------ |
| `outbound_tkn` | `T` |
| `inbound_tkn` | `T` |

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:1346

___

### <a id="getbasequotevolumes" name="getbasequotevolumes"></a> getBaseQuoteVolumes

▸ `Static` **getBaseQuoteVolumes**(`ba`, `gives`, `wants`): `Object`

Determine whether gives or wants will be baseVolume/quoteVolume depending on whether you're working with bids or asks.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ba` | [`BA`](../namespaces/Market-1.md#ba) | bids or asks |
| `gives` | `Big` | amount of token to give |
| `wants` | `Big` | amount of token to receive |

#### Returns

`Object`

the base and quote volumes.

| Name | Type |
| :------ | :------ |
| `baseVolume` | `Big` |
| `quoteVolume` | `Big` |

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:1366

___

### <a id="getwantsforprice" name="getwantsforprice"></a> getWantsForPrice

▸ `Static` **getWantsForPrice**(`ba`, `gives`, `price`): `Big`

Determine the wants from gives and price depending on whether you're working with bids or asks.

#### Parameters

| Name | Type |
| :------ | :------ |
| `ba` | [`BA`](../namespaces/Market-1.md#ba) |
| `gives` | `Big` |
| `price` | `Big` |

#### Returns

`Big`

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:1378

___

### <a id="getgivesforprice" name="getgivesforprice"></a> getGivesForPrice

▸ `Static` **getGivesForPrice**(`ba`, `wants`, `price`): `Big`

Determine the gives from wants and price depending on whether you're working with bids or asks.

#### Parameters

| Name | Type |
| :------ | :------ |
| `ba` | [`BA`](../namespaces/Market-1.md#ba) |
| `wants` | `Big` |
| `price` | `Big` |

#### Returns

`Big`

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:1383

___

### <a id="getgiveswantsforvolumeatprice" name="getgiveswantsforvolumeatprice"></a> getGivesWantsForVolumeAtPrice

▸ `Static` **getGivesWantsForVolumeAtPrice**(`ba`, `volume`, `price`): `Object`

Determine gives and wants from a volume (in base) and a price depending on whether you're working with bids or asks.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ba` | [`BA`](../namespaces/Market-1.md#ba) | bids or asks |
| `volume` | `Big` | volume of the offer |
| `price` | `Big` | price of the offer |

#### Returns

`Object`

the gives and wants

| Name | Type |
| :------ | :------ |
| `gives` | `Big` |
| `wants` | `Big` |

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:1393

___

### <a id="getdisplaydecimalsforpricedifferences" name="getdisplaydecimalsforpricedifferences"></a> getDisplayDecimalsForPriceDifferences

▸ **getDisplayDecimalsForPriceDifferences**(): `number`

Determine the first decimal place where the smallest price difference between neighboring offers in the order book cache is visible.

#### Returns

`number`

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:1407

___

### <a id="getdisplaydecimalsforpricedifferences-1" name="getdisplaydecimalsforpricedifferences-1"></a> getDisplayDecimalsForPriceDifferences

▸ `Static` **getDisplayDecimalsForPriceDifferences**(`offers`): `number`

Determine the first decimal place where the smallest price difference between neighboring offers is visible.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `offers` | [`Offer`](../namespaces/Market-1.md#offer)[] | offers to consider |

#### Returns

`number`

the first decimal place where the smallest price difference between neighboring offers is visible.

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:1419
