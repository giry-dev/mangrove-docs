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
directly use the constructor. Instead of `new Market(...)`, do

`await Market.connect(...)`

## Properties

### <a id="mgv" name="mgv"></a> mgv

• **mgv**: [`Mangrove`](Mangrove.md)

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:249

___

### <a id="base" name="base"></a> base

• **base**: [`MgvToken`](MgvToken.md)

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:250

___

### <a id="quote" name="quote"></a> quote

• **quote**: [`MgvToken`](MgvToken.md)

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:251

___

### <a id="trade" name="trade"></a> trade

• **trade**: `Trade`

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:256

___

### <a id="tradeeventmanagement" name="tradeeventmanagement"></a> tradeEventManagement

• **tradeEventManagement**: `TradeEventManagement`

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:257

___

### <a id="prettyp" name="prettyp"></a> prettyP

• **prettyP**: `PrettyPrint`

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:258

## Methods

### <a id="connect" name="connect"></a> connect

▸ `Static` **connect**(`params`): `Promise`<[`Market`](Market.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | { `mgv`: [`Mangrove`](Mangrove.md) ; `base`: `string` ; `quote`: `string`  } & `Partial`<[`OptionalParams`](../namespaces/Market-1.md#optionalparams)\> |

#### Returns

`Promise`<[`Market`](Market.md)\>

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:263

___

### <a id="close" name="close"></a> close

▸ **close**(): `void`

#### Returns

`void`

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:309

___

### <a id="initialize" name="initialize"></a> initialize

▸ **initialize**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:322

___

### <a id="getbook" name="getbook"></a> getBook

▸ **getBook**(): [`Book`](../namespaces/Market-1.md#book)

Return the semibooks of this market.

Asks are standing offers to sell base and buy quote.
Bids are standing offers to buy base and sell quote.
All prices are in quote/base, all volumes are in base.
Order is from best to worse from taker perspective.

#### Returns

[`Book`](../namespaces/Market-1.md#book)

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:420

___

### <a id="getsemibook" name="getsemibook"></a> getSemibook

▸ **getSemibook**(`ba`): [`Semibook`](Semibook.md)

Return the asks or bids semibook

#### Parameters

| Name | Type |
| :------ | :------ |
| `ba` | [`BA`](../namespaces/Market-1.md#ba) |

#### Returns

[`Semibook`](Semibook.md)

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:433

___

### <a id="requestbook" name="requestbook"></a> requestBook

▸ **requestBook**(`opts?`): `Promise`<{ `asks`: [`Offer`](../namespaces/Market-1.md#offer)[] ; `bids`: [`Offer`](../namespaces/Market-1.md#offer)[]  }\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `opts` | [`BookOptions`](../namespaces/Market-1.md#bookoptions) | `bookOptsDefault` |

#### Returns

`Promise`<{ `asks`: [`Offer`](../namespaces/Market-1.md#offer)[] ; `bids`: [`Offer`](../namespaces/Market-1.md#offer)[]  }\>

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:440

___

### <a id="isactive" name="isactive"></a> isActive

▸ **isActive**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:454

___

### <a id="islive" name="islive"></a> isLive

▸ **isLive**(`ba`, `offerId`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ba` | [`BA`](../namespaces/Market-1.md#ba) |
| `offerId` | `number` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:459

___

### <a id="isliveoffer" name="isliveoffer"></a> isLiveOffer

▸ **isLiveOffer**(`offer`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `offer` | [`Offer`](../namespaces/Market-1.md#offer) |

#### Returns

`boolean`

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:464

___

### <a id="getpivotid" name="getpivotid"></a> getPivotId

▸ **getPivotId**(`ba`, `price`): `Promise`<`undefined` \| `number`\>

Given a price, find the id of the immediately-better offer in the
book. If there is no offer with a better price, `undefined` is returned.

#### Parameters

| Name | Type |
| :------ | :------ |
| `ba` | [`BA`](../namespaces/Market-1.md#ba) |
| `price` | `undefined` \| `BigSource` |

#### Returns

`Promise`<`undefined` \| `number`\>

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:474

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

@mangrovedao/mangrove.js/src/market.ts:487

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

@mangrovedao/mangrove.js/src/market.ts:506

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

@mangrovedao/mangrove.js/src/market.ts:515

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

@mangrovedao/mangrove.js/src/market.ts:526

___

### <a id="bidinfo" name="bidinfo"></a> bidInfo

▸ **bidInfo**(`offerId`): `Promise`<[`Offer`](../namespaces/Market-1.md#offer)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `offerId` | `number` |

#### Returns

`Promise`<[`Offer`](../namespaces/Market-1.md#offer)\>

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:543

___

### <a id="askinfo" name="askinfo"></a> askInfo

▸ **askInfo**(`offerId`): `Promise`<[`Offer`](../namespaces/Market-1.md#offer)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `offerId` | `number` |

#### Returns

`Promise`<[`Offer`](../namespaces/Market-1.md#offer)\>

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:547

___

### <a id="offerinfo" name="offerinfo"></a> offerInfo

▸ **offerInfo**(`ba`, `offerId`): `Promise`<[`Offer`](../namespaces/Market-1.md#offer)\>

Returns struct containing offer details in the current market

#### Parameters

| Name | Type |
| :------ | :------ |
| `ba` | [`BA`](../namespaces/Market-1.md#ba) |
| `offerId` | `number` |

#### Returns

`Promise`<[`Offer`](../namespaces/Market-1.md#offer)\>

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:552

___

### <a id="permit" name="permit"></a> permit

▸ **permit**(`action`, `data`): `Promise`<`ContractTransaction`\>

Sign permit data. If action="buy", will permit buying base with spender's
quote token. If action="sell", will permit buying quote with spender's base
token. See mangrove.ts.

#### Parameters

| Name | Type |
| :------ | :------ |
| `action` | ``"buy"`` \| ``"sell"`` |
| `data` | `Omit`<[`SimplePermitData`](../namespaces/Mangrove-1.md#simplepermitdata), ``"outbound_tkn"`` \| ``"inbound_tkn"``\> |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:559

___

### <a id="buy" name="buy"></a> buy

▸ **buy**(`params`, `overrides?`): `Promise`<{ `result`: `Promise`<[`OrderResult`](../namespaces/Market-1.md#orderresult)\> ; `response`: `Promise`<`ContractTransaction`\>  }\>

Market buy order. Will attempt to buy base token using quote tokens.
Params can be of the form:
- `{volume,price}`: buy `volume` base tokens for a max average price of `price`.
- `{total,price}` : buy as many base tokens as possible using up to `total` quote tokens, with a max average price of `price`.
- `{wants,gives,fillWants?}`: accept implicit max average price of `gives/wants`

In addition, `slippage` defines an allowed slippage in % of the amount of quote token, and
`restingOrder` or `offerId` can be supplied to create a resting order or to snipe a specific order, e.g.,
to account for gas.

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

| Name | Type |
| :------ | :------ |
| `params` | [`TradeParams`](../namespaces/Market-1.md#tradeparams) |
| `overrides` | `Overrides` |

#### Returns

`Promise`<{ `result`: `Promise`<[`OrderResult`](../namespaces/Market-1.md#orderresult)\> ; `response`: `Promise`<`ContractTransaction`\>  }\>

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:603

___

### <a id="sell" name="sell"></a> sell

▸ **sell**(`params`, `overrides?`): `Promise`<{ `result`: `Promise`<[`OrderResult`](../namespaces/Market-1.md#orderresult)\> ; `response`: `Promise`<`ContractTransaction`\>  }\>

Market sell order. Will attempt to sell base token for quote tokens.
Params can be of the form:
- `{volume,price}`: sell `volume` base tokens for a min average price of `price`.
- `{total,price}` : sell as many base tokens as possible buying up to `total` quote tokens, with a min average price of `price`.
- `{wants,gives,fillWants?}`: accept implicit min average price of `gives/wants`. `fillWants` will be false by default.

In addition, `slippage` defines an allowed slippage in % of the amount of quote token, and
`restingOrder` or `offerId` can be supplied to create a resting order or to snipe a specific order, e.g.,
to account for gas.

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

| Name | Type |
| :------ | :------ |
| `params` | [`TradeParams`](../namespaces/Market-1.md#tradeparams) |
| `overrides` | `Overrides` |

#### Returns

`Promise`<{ `result`: `Promise`<[`OrderResult`](../namespaces/Market-1.md#orderresult)\> ; `response`: `Promise`<`ContractTransaction`\>  }\>

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:635

___

### <a id="gasestimatebuy" name="gasestimatebuy"></a> gasEstimateBuy

▸ **gasEstimateBuy**(`params`): `Promise`<`BigNumber`\>

Estimate amount of gas for buy. Can be passed as overrides.gasLimit or params.gasLowerBound of

**`See`**

buy with same params.

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`TradeParams`](../namespaces/Market-1.md#tradeparams) |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:646

___

### <a id="gasestimatesell" name="gasestimatesell"></a> gasEstimateSell

▸ **gasEstimateSell**(`params`): `Promise`<`BigNumber`\>

Estimate amount of gas for sell. Can be passed as overrides.gasLimit or params.gasLowerBound of

**`See`**

sell with same params.

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`TradeParams`](../namespaces/Market-1.md#tradeparams) |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:653

___

### <a id="snipe" name="snipe"></a> snipe

▸ **snipe**(`params`, `overrides?`): `Promise`<{ `result`: `Promise`<[`OrderResult`](../namespaces/Market-1.md#orderresult)\> ; `response`: `Promise`<`ContractTransaction`\>  }\>

Snipe specific offers.
Params are:
`targets`: an array of
   `offerId`: the offer to snipe
   `takerWants`: the amount of base token (for asks) or quote token (for bids) the taker wants
   `takerGives`: the amount of quote token (for asks) or base token (for bids) the take gives
   `gasLimit?`: the maximum gas requirement the taker will tolerate for that offer
`ba`: whether to snipe `asks` or `bids`
`fillWants?`: specifies whether you will buy at most `takerWants` (true), or you will buy as many tokens as possible as long as you don't spend more than `takerGives` (false).
`requireOffersToFail`: if true, then a successful offer will cause the call to fail without sniping anything.
    Note: Setting `requireOffersToFail=true` uses the cleaner contract and the taker needs to approve spending, with
    `await mgv.contract.approve(market.base.address, market.quote.address, mgv.cleanerContract.address, amount);`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`SnipeParams`](../namespaces/Market-1.md#snipeparams) |
| `overrides` | `Overrides` |

#### Returns

`Promise`<{ `result`: `Promise`<[`OrderResult`](../namespaces/Market-1.md#orderresult)\> ; `response`: `Promise`<`ContractTransaction`\>  }\>

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:673

___

### <a id="getrawsnipeparams" name="getrawsnipeparams"></a> getRawSnipeParams

▸ **getRawSnipeParams**(`params`, `overrides?`): `Promise`<[`RawSnipeParams`](../namespaces/Market-1.md#rawsnipeparams)\>

Gets parameters to send to functions `market.mgv.cleanerContract.collect` or `market.mgv.contract.snipes`.
Params are:
`targets`: an array of
   `offerId`: the offer to snipe
   `takerWants`: the amount of base token (for asks) or quote token (for bids) the taker wants
   `takerGives`: the amount of quote token (for asks) or base token (for bids) the take gives
   `gasLimit?`: the maximum gas requirement the taker will tolerate for that offer
`ba`: whether to snipe `asks` or `bids`
`fillWants?`: specifies whether you will buy at most `takerWants` (true), or you will buy as many tokens as possible as long as you don't spend more than `takerGives` (false).
`requireOffersToFail`: defines whether a successful offer will cause the call to fail without sniping anything.

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`SnipeParams`](../namespaces/Market-1.md#snipeparams) |
| `overrides` | `Overrides` |

#### Returns

`Promise`<[`RawSnipeParams`](../namespaces/Market-1.md#rawsnipeparams)\>

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:695

___

### <a id="estimategas" name="estimategas"></a> estimateGas

▸ **estimateGas**(`bs`, `volume`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `bs` | [`BS`](../namespaces/Market-1.md#bs) |
| `volume` | `BigNumber` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:702

___

### <a id="simulategas" name="simulategas"></a> simulateGas

▸ **simulateGas**(`ba`, `gives`, `wants`, `fillWants`): `Promise`<`BigNumber`\>

Uses the

**`See`**

semibook.simulateMarketOrder to simulate the gas required for a market order. An overhead of 50% is added to account for changes to the book and failing offers.

#### Parameters

| Name | Type |
| :------ | :------ |
| `ba` | [`BA`](../namespaces/Market-1.md#ba) |
| `gives` | `BigNumber` |
| `wants` | `BigNumber` |
| `fillWants` | `boolean` |

#### Returns

`Promise`<`BigNumber`\>

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:731

___

### <a id="estimatevolume" name="estimatevolume"></a> estimateVolume

▸ **estimateVolume**(`params`): `Promise`<[`VolumeEstimate`](../namespaces/Market-1.md#volumeestimate)\>

Volume estimator.

if you say `estimateVolume({given:100,what:"base",to:"buy"})`,

it will give you an estimate of how much quote token you would have to
spend to get 100 base tokens.

if you say `estimateVolume({given:10,what:"quote",to:"sell"})`,

it will given you an estimate of how much base tokens you'd have to buy in
order to spend 10 quote tokens.

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`VolumeParams`](../namespaces/Market-1.md#volumeparams) |

#### Returns

`Promise`<[`VolumeEstimate`](../namespaces/Market-1.md#volumeestimate)\>

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:771

___

### <a id="estimatevolumetoreceive" name="estimatevolumetoreceive"></a> estimateVolumeToReceive

▸ **estimateVolumeToReceive**(`params`): `Promise`<[`VolumeEstimate`](../namespaces/Market-1.md#volumeestimate)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`DirectionlessVolumeParams`](../namespaces/Market-1.md#directionlessvolumeparams) |

#### Returns

`Promise`<[`VolumeEstimate`](../namespaces/Market-1.md#volumeestimate)\>

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:785

___

### <a id="estimatevolumetospend" name="estimatevolumetospend"></a> estimateVolumeToSpend

▸ **estimateVolumeToSpend**(`params`): `Promise`<[`VolumeEstimate`](../namespaces/Market-1.md#volumeestimate)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`DirectionlessVolumeParams`](../namespaces/Market-1.md#directionlessvolumeparams) |

#### Returns

`Promise`<[`VolumeEstimate`](../namespaces/Market-1.md#volumeestimate)\>

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:792

___

### <a id="config" name="config"></a> config

▸ **config**(): `Promise`<{ `asks`: [`LocalConfig`](../namespaces/Mangrove-1.md#localconfig) ; `bids`: [`LocalConfig`](../namespaces/Mangrove-1.md#localconfig)  }\>

Return config local to a market.
Returned object is of the form
`{bids,asks}` where bids and asks are of type `localConfig`
Notes:
Amounts are converted to plain numbers.
density is converted to public token units per gas used
fee *remains* in basis points of the token being bought

#### Returns

`Promise`<{ `asks`: [`LocalConfig`](../namespaces/Mangrove-1.md#localconfig) ; `bids`: [`LocalConfig`](../namespaces/Mangrove-1.md#localconfig)  }\>

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:809

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

@mangrovedao/mangrove.js/src/market.ts:822

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

@mangrovedao/mangrove.js/src/market.ts:827

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

@mangrovedao/mangrove.js/src/market.ts:832

___

### <a id="subscribe" name="subscribe"></a> subscribe

▸ **subscribe**(`cb`): `void`

Subscribe to order book updates.

`cb` gets called whenever the order book is updated.
 Its first argument `event` is a summary of the event. It has the following properties:

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

| Name | Type |
| :------ | :------ |
| `cb` | [`MarketCallback`](../namespaces/Market-1.md#marketcallback)<`void`\> |

#### Returns

`void`

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:872

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

@mangrovedao/mangrove.js/src/market.ts:879

___

### <a id="unsubscribe" name="unsubscribe"></a> unsubscribe

▸ **unsubscribe**(`cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | [`StorableMarketCallback`](../namespaces/Market-1.md#storablemarketcallback) |

#### Returns

`void`

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:893

___

### <a id="getoutboundinbound" name="getoutboundinbound"></a> getOutboundInbound

▸ **getOutboundInbound**(`ba`): `Object`

Determine which token will be Mangrove's outbound/inbound depending on whether you're working with bids or asks.

#### Parameters

| Name | Type |
| :------ | :------ |
| `ba` | [`BA`](../namespaces/Market-1.md#ba) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `outbound_tkn` | [`MgvToken`](MgvToken.md) |
| `inbound_tkn` | [`MgvToken`](MgvToken.md) |

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:898

___

### <a id="getoutboundinbound-1" name="getoutboundinbound-1"></a> getOutboundInbound

▸ `Static` **getOutboundInbound**(`ba`, `base`, `quote`): `Object`

Determine which token will be Mangrove's outbound/inbound depending on whether you're working with bids or asks.

#### Parameters

| Name | Type |
| :------ | :------ |
| `ba` | [`BA`](../namespaces/Market-1.md#ba) |
| `base` | [`MgvToken`](MgvToken.md) |
| `quote` | [`MgvToken`](MgvToken.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `outbound_tkn` | [`MgvToken`](MgvToken.md) |
| `inbound_tkn` | [`MgvToken`](MgvToken.md) |

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:906

___

### <a id="getbasequotevolumes" name="getbasequotevolumes"></a> getBaseQuoteVolumes

▸ `Static` **getBaseQuoteVolumes**(`ba`, `gives`, `wants`): `Object`

Determine whether gives or wants will be baseVolume/quoteVolume depending on whether you're working with bids or asks.

#### Parameters

| Name | Type |
| :------ | :------ |
| `ba` | [`BA`](../namespaces/Market-1.md#ba) |
| `gives` | `Big` |
| `wants` | `Big` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `baseVolume` | `Big` |
| `quoteVolume` | `Big` |

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:921

___

### <a id="getprice" name="getprice"></a> getPrice

▸ `Static` **getPrice**(`ba`, `gives`, `wants`): `undefined` \| `Big`

Determine the price from dividing offer gives with wants depending on whether you're working with bids or asks.

#### Parameters

| Name | Type |
| :------ | :------ |
| `ba` | [`BA`](../namespaces/Market-1.md#ba) |
| `gives` | `Big` |
| `wants` | `Big` |

#### Returns

`undefined` \| `Big`

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:933

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

@mangrovedao/mangrove.js/src/market.ts:943

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

@mangrovedao/mangrove.js/src/market.ts:948

___

### <a id="getgiveswantsforvolumeatprice" name="getgiveswantsforvolumeatprice"></a> getGivesWantsForVolumeAtPrice

▸ `Static` **getGivesWantsForVolumeAtPrice**(`ba`, `volume`, `price`): `Object`

Determine gives and wants from a volume (in base) and a price depending on whether you're working with bids or asks.

#### Parameters

| Name | Type |
| :------ | :------ |
| `ba` | [`BA`](../namespaces/Market-1.md#ba) |
| `volume` | `Big` |
| `price` | `Big` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `gives` | `Big` |
| `wants` | `Big` |

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:953

___

### <a id="getdisplaydecimalsforpricedifferences" name="getdisplaydecimalsforpricedifferences"></a> getDisplayDecimalsForPriceDifferences

▸ **getDisplayDecimalsForPriceDifferences**(): `number`

Determine the first decimal place where the smallest price difference between neighboring offers in the order book cache is visible.

#### Returns

`number`

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:967

___

### <a id="getdisplaydecimalsforpricedifferences-1" name="getdisplaydecimalsforpricedifferences-1"></a> getDisplayDecimalsForPriceDifferences

▸ `Static` **getDisplayDecimalsForPriceDifferences**(`offers`): `number`

Determine the first decimal place where the smallest price difference between neighboring offers is visible.

#### Parameters

| Name | Type |
| :------ | :------ |
| `offers` | [`Offer`](../namespaces/Market-1.md#offer)[] |

#### Returns

`number`

#### Defined in

@mangrovedao/mangrove.js/src/market.ts:976
