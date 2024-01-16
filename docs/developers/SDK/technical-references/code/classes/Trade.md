---
id: "Trade"
title: "Class: Trade"
sidebar_label: "Trade"
sidebar_position: 0
custom_edit_url: null
---

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new Trade**(): [`Trade`](Trade.md)

#### Returns

[`Trade`](Trade.md)

## Properties

### <a id="tradeeventmanagement" name="tradeeventmanagement"></a> tradeEventManagement

• **tradeEventManagement**: [`TradeEventManagement`](TradeEventManagement.md)

#### Defined in

@mangrovedao/mangrove.js/src/util/trade.ts:25

## Methods

### <a id="getparamsfortrade" name="getparamsfortrade"></a> getParamsForTrade

▸ **getParamsForTrade**(`params`, `market`, `bs`): `Object`

Get raw parameters to send to Mangrove for a buy or sell order for the given trade and market parameters.

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`TradeParams`](../namespaces/Market-1.md#tradeparams) |
| `market` | [`KeyResolvedForCalculation`](../namespaces/Market-1.md#keyresolvedforcalculation) |
| `bs` | [`BS`](../namespaces/Market-1.md#bs) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `maxTick` | `number` |
| `fillVolume` | `BigNumber` |
| `fillWants` | `boolean` |

#### Defined in

@mangrovedao/mangrove.js/src/util/trade.ts:30

___

### <a id="validateslippage" name="validateslippage"></a> validateSlippage

▸ **validateSlippage**(`slippage?`): `number`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `slippage` | `number` | `0` |

#### Returns

`number`

#### Defined in

@mangrovedao/mangrove.js/src/util/trade.ts:132

___

### <a id="compareprices" name="compareprices"></a> comparePrices

▸ **comparePrices**(`price`, `priceComparison`, `referencePrice`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `price` | `BigSource` |
| `priceComparison` | ``"gt"`` \| ``"lt"`` |
| `referencePrice` | `BigSource` |

#### Returns

`boolean`

#### Defined in

@mangrovedao/mangrove.js/src/util/trade.ts:141

___

### <a id="ispricebetter" name="ispricebetter"></a> isPriceBetter

▸ **isPriceBetter**(`price`, `referencePrice`, `ba`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `price` | `undefined` \| `BigSource` |
| `referencePrice` | `undefined` \| `BigSource` |
| `ba` | [`BA`](../namespaces/Market-1.md#ba) |

#### Returns

`boolean`

#### Defined in

@mangrovedao/mangrove.js/src/util/trade.ts:150

___

### <a id="ispriceworse" name="ispriceworse"></a> isPriceWorse

▸ **isPriceWorse**(`price`, `referencePrice`, `ba`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `price` | `undefined` \| `BigSource` |
| `referencePrice` | `undefined` \| `BigSource` |
| `ba` | [`BA`](../namespaces/Market-1.md#ba) |

#### Returns

`boolean`

#### Defined in

@mangrovedao/mangrove.js/src/util/trade.ts:169

___

### <a id="getrawparams" name="getrawparams"></a> getRawParams

▸ **getRawParams**(`bs`, `params`, `market`): `Object`

Get raw parameters to send to Mangrove for a buy or sell order for the given trade and market parameters.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `bs` | [`BS`](../namespaces/Market-1.md#bs) | buy or sell |
| `params` | [`TradeParams`](../namespaces/Market-1.md#tradeparams) | trade parameters - see [Market.TradeParams](../namespaces/Market-1.md#tradeparams) |
| `market` | [`Market`](Market.md) | market to trade on |

#### Returns

`Object`

raw parameters for a market order to send to Mangrove

| Name | Type |
| :------ | :------ |
| `maxTick` | `number` |
| `fillVolume` | `BigNumber` |
| `fillWants` | `boolean` |
| `restingOrderParams` | `undefined` \| ``null`` \| [`RestingOrderParams`](../namespaces/Market-1.md#restingorderparams) |
| `orderType` | `string` |

#### Defined in

@mangrovedao/mangrove.js/src/util/trade.ts:194

___

### <a id="order" name="order"></a> order

▸ **order**(`bs`, `params`, `market`, `overrides?`): `Promise`<[`Transaction`](../namespaces/Market-1.md#transaction)<[`OrderResult`](../namespaces/Market-1.md#orderresult)\>\>

Market order. Will attempt to buy or sell base token using quote tokens.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `bs` | [`BS`](../namespaces/Market-1.md#bs) | whether to buy or sell base token |
| `params` | [`TradeParams`](../namespaces/Market-1.md#tradeparams) | trade parameters - see [Market.TradeParams](../namespaces/Market-1.md#tradeparams) |
| `market` | [`Market`](Market.md) | the market to trade on |
| `overrides` | `Overrides` | ethers overrides for the transaction |

#### Returns

`Promise`<[`Transaction`](../namespaces/Market-1.md#transaction)<[`OrderResult`](../namespaces/Market-1.md#orderresult)\>\>

a promise that resolves to the transaction response and the result of the trade

#### Defined in

@mangrovedao/mangrove.js/src/util/trade.ts:228

___

### <a id="updaterestingorder" name="updaterestingorder"></a> updateRestingOrder

▸ **updateRestingOrder**(`market`, `ba`, `params`, `overrides?`): `Promise`<[`Transaction`](../namespaces/Market-1.md#transaction)<`void`\>\>

Update a resting order posted by MangroveOrder.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `market` | [`Market`](Market.md) | the market to retract the order on |
| `ba` | [`BA`](../namespaces/Market-1.md#ba) | whether the offer is a bid or ask |
| `params` | [`UpdateRestingOrderParams`](../namespaces/Market-1.md#updaterestingorderparams) | update parameters - see [Market.UpdateRestingOrderParams](../namespaces/Market-1.md#updaterestingorderparams) |
| `overrides` | `Overrides` | overrides for the transaction |

#### Returns

`Promise`<[`Transaction`](../namespaces/Market-1.md#transaction)<`void`\>\>

a promise that resolves to the transaction response and the result of the update.

#### Defined in

@mangrovedao/mangrove.js/src/util/trade.ts:277

___

### <a id="getrawupdaterestingorderparams" name="getrawupdaterestingorderparams"></a> getRawUpdateRestingOrderParams

▸ **getRawUpdateRestingOrderParams**(`params`, `market`, `ba`, `tick`, `gives`): `Object`

Gets parameters to send to function `market.mgv.orderContract.updateOffer`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`UpdateRestingOrderParams`](../namespaces/Market-1.md#updaterestingorderparams) | update parameters - see [Market.UpdateRestingOrderParams](../namespaces/Market-1.md#updaterestingorderparams) |
| `market` | [`KeyResolvedForCalculation`](../namespaces/Market-1.md#keyresolvedforcalculation) | the market to retract the order on |
| `ba` | [`BA`](../namespaces/Market-1.md#ba) | whether the offer is a bid or ask |
| `tick` | `number` | - |
| `gives` | `Big` | - |

#### Returns

`Object`

the raw parameters to send to the MangroveOrder contract

| Name | Type |
| :------ | :------ |
| `gives` | `BigNumber` |
| `tick` | `number` |

#### Defined in

@mangrovedao/mangrove.js/src/util/trade.ts:345

___

### <a id="retractrestingorder" name="retractrestingorder"></a> retractRestingOrder

▸ **retractRestingOrder**(`market`, `ba`, `id`, `deprovision?`, `overrides?`): `Promise`<[`Transaction`](../namespaces/Market-1.md#transaction)<`void`\>\>

Retract a resting order posted by MangroveOrder.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `market` | [`Market`](Market.md) | `undefined` | the market to retract the order on |
| `ba` | [`BA`](../namespaces/Market-1.md#ba) | `undefined` | whether the offer is a bid or ask |
| `id` | `number` | `undefined` | the offer id |
| `deprovision` | `boolean` | `false` | whether to deprovision the offer. If true, the offer's provision will be returned to the maker's balance on Mangrove. |
| `overrides` | `Overrides` | `{}` | overrides for the transaction |

#### Returns

`Promise`<[`Transaction`](../namespaces/Market-1.md#transaction)<`void`\>\>

#### Defined in

@mangrovedao/mangrove.js/src/util/trade.ts:401

___

### <a id="clean" name="clean"></a> clean

▸ **clean**(`params`, `market`, `overrides?`): `Promise`<\{ `result`: `Promise`<[`CleanResult`](../namespaces/Market-1.md#cleanresult)\> ; `response`: `Promise`<`ContractTransaction`\>  }\>

Clean a set of given offers.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`CleanParams`](../namespaces/Market-1.md#cleanparams) | Parameters for the cleaning, specifying the target offers, the side of the market to clean, and optionally the taker to impersonate. |
| `market` | [`Market`](Market.md) | the market to clean on |
| `overrides` | `Overrides` | ethers overrides for the transaction |

#### Returns

`Promise`<\{ `result`: `Promise`<[`CleanResult`](../namespaces/Market-1.md#cleanresult)\> ; `response`: `Promise`<`ContractTransaction`\>  }\>

a promise that resolves to the transaction response and the result of the cleaning.

**`See`**

[Market.CleanParams](../namespaces/Market-1.md#cleanparams) for a more thorough description of cleaning parameters.

#### Defined in

@mangrovedao/mangrove.js/src/util/trade.ts:440

___

### <a id="getrawcleanparams" name="getrawcleanparams"></a> getRawCleanParams

▸ **getRawCleanParams**(`params`, `market`): `Promise`<[`RawCleanParams`](../namespaces/Market-1.md#rawcleanparams)\>

Gets parameters to send to function `market.mgv.cleanerContract.cleanByImpersonation`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`CleanParams`](../namespaces/Market-1.md#cleanparams) | Parameters for the cleaning, specifying the target offers, the side of the market to clean, and optionally the taker to impersonate. |
| `market` | [`Market`](Market.md) | the market to clean on |

#### Returns

`Promise`<[`RawCleanParams`](../namespaces/Market-1.md#rawcleanparams)\>

a promise that resolves to the raw parameters to send to the cleaner contract

**`Remarks`**

**`See`**

[Market.CleanParams](../namespaces/Market-1.md#cleanparams) for a more thorough description of cleaning parameters.

#### Defined in

@mangrovedao/mangrove.js/src/util/trade.ts:474

___

### <a id="estimategas" name="estimategas"></a> estimateGas

▸ **estimateGas**(`bs`, `params`, `market`): `Promise`<`BigNumber`\>

Estimate amount of gas for a buy or sell order for the given volume.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `bs` | [`BS`](../namespaces/Market-1.md#bs) | buy or sell |
| `params` | [`TradeParams`](../namespaces/Market-1.md#tradeparams) | The parameters for the trade |
| `market` | [`Market`](Market.md) | The market |

#### Returns

`Promise`<`BigNumber`\>

an estimate of the gas required for the trade

#### Defined in

@mangrovedao/mangrove.js/src/util/trade.ts:507

___

### <a id="simulategas" name="simulategas"></a> simulateGas

▸ **simulateGas**(`bs`, `params`, `market`): `Promise`<`undefined` \| `BigNumber`\>

Simulate the gas required for a market order.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `bs` | [`BS`](../namespaces/Market-1.md#bs) | buy or sell |
| `params` | [`TradeParams`](../namespaces/Market-1.md#tradeparams) | trade parameters - see [Market.TradeParams](../namespaces/Market-1.md#tradeparams) |
| `market` | [`Market`](Market.md) | the market to trade on |

#### Returns

`Promise`<`undefined` \| `BigNumber`\>

an estimate of the gas required for the trade

#### Defined in

@mangrovedao/mangrove.js/src/util/trade.ts:531

___

### <a id="createtxwithoptionalgasestimation" name="createtxwithoptionalgasestimation"></a> createTxWithOptionalGasEstimation

▸ **createTxWithOptionalGasEstimation**<`T`\>(`createTx`, `estimateTx`, `gasLowerBound`, `overrides`, `args`): `Promise`<`ContractTransaction`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `any`[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `createTx` | (...`args`: `T`) => `Promise`<`ContractTransaction`\> |
| `estimateTx` | (...`args`: `T`) => `Promise`<`BigNumber`\> |
| `gasLowerBound` | `BigNumberish` |
| `overrides` | `Overrides` |
| `args` | `T` |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

@mangrovedao/mangrove.js/src/util/trade.ts:554

___

### <a id="marketorder" name="marketorder"></a> marketOrder

▸ **marketOrder**(`«destructured»`, `overrides`): `Promise`<[`Transaction`](../namespaces/Market-1.md#transaction)<[`OrderResult`](../namespaces/Market-1.md#orderresult)\>\>

Low level Mangrove market order.
If `orderType` is `"buy"`, the base/quote market will be used,

If `orderType` is `"sell"`, the quote/base market will be used,

`fillWants` defines whether the market order stops immediately once `wants` tokens have been purchased or whether it tries to keep going until `gives` tokens have been spent.

In addition, `slippage` defines an allowed slippage in % of the amount of quote token.

Returns a promise for market order result after 1 confirmation.
Will throw on same conditions as ethers.js `transaction.wait`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `maxTick` | `number` |
| › `fillVolume` | `BigNumber` |
| › `orderType` | [`BS`](../namespaces/Market-1.md#bs) |
| › `fillWants` | `boolean` |
| › `market` | [`Market`](Market.md) |
| › `gasLowerBound` | `BigNumberish` |
| `overrides` | `Overrides` |

#### Returns

`Promise`<[`Transaction`](../namespaces/Market-1.md#transaction)<[`OrderResult`](../namespaces/Market-1.md#orderresult)\>\>

#### Defined in

@mangrovedao/mangrove.js/src/util/trade.ts:585

___

### <a id="responsetomarketorderresult" name="responsetomarketorderresult"></a> responseToMarketOrderResult

▸ **responseToMarketOrderResult**(`response`, `orderType`, `fillWants`, `fillVolume`, `market`): `Promise`<[`OrderResult`](../namespaces/Market-1.md#orderresult)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Promise`<`ContractTransaction`\> |
| `orderType` | [`BS`](../namespaces/Market-1.md#bs) |
| `fillWants` | `boolean` |
| `fillVolume` | `BigNumber` |
| `market` | [`Market`](Market.md) |

#### Returns

`Promise`<[`OrderResult`](../namespaces/Market-1.md#orderresult)\>

#### Defined in

@mangrovedao/mangrove.js/src/util/trade.ts:638

___

### <a id="mangroveorder" name="mangroveorder"></a> mangroveOrder

▸ **mangroveOrder**(`«destructured»`, `overrides`): `Promise`<[`Transaction`](../namespaces/Market-1.md#transaction)<[`OrderResult`](../namespaces/Market-1.md#orderresult)\>\>

Low level resting order.

Returns a promise for market order result after 1 confirmation.

Will throw on same conditions as ethers.js `transaction.wait`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `maxTick` | `number` |
| › `fillVolume` | `BigNumber` |
| › `orderType` | [`BS`](../namespaces/Market-1.md#bs) |
| › `fillWants` | `boolean` |
| › `fillOrKill` | `boolean` |
| › `expiryDate` | `number` |
| › `restingParams` | `undefined` \| [`RestingOrderParams`](../namespaces/Market-1.md#restingorderparams) |
| › `market` | [`Market`](Market.md) |
| › `gasLowerBound` | `BigNumberish` |
| `overrides` | `Overrides` |

#### Returns

`Promise`<[`Transaction`](../namespaces/Market-1.md#transaction)<[`OrderResult`](../namespaces/Market-1.md#orderresult)\>\>

#### Defined in

@mangrovedao/mangrove.js/src/util/trade.ts:673

___

### <a id="responsetomangroveorderresult" name="responsetomangroveorderresult"></a> responseToMangroveOrderResult

▸ **responseToMangroveOrderResult**(`response`, `orderType`, `fillWants`, `fillVolume`, `market`, `offerId`): `Promise`<[`OrderResult`](../namespaces/Market-1.md#orderresult)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Promise`<`ContractTransaction`\> |
| `orderType` | [`BS`](../namespaces/Market-1.md#bs) |
| `fillWants` | `boolean` |
| `fillVolume` | `BigNumber` |
| `market` | [`Market`](Market.md) |
| `offerId` | `undefined` \| `number` |

#### Returns

`Promise`<[`OrderResult`](../namespaces/Market-1.md#orderresult)\>

#### Defined in

@mangrovedao/mangrove.js/src/util/trade.ts:745

___

### <a id="getrestingorderparams" name="getrestingorderparams"></a> getRestingOrderParams

▸ **getRestingOrderParams**(`params`, `market`, `ba`): `Promise`<\{ `provision`: `BigSource` ; `restingOrderGasreq`: `number` ; `gaspriceFactor`: `number` ; `restingOrderBa`: `string`  }\>

Determines the parameters for a resting order which can be provided via default configuration value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`RestingOrderParams`](../namespaces/Market-1.md#restingorderparams) | The resting order params. See [Market.RestingOrderParams](../namespaces/Market-1.md#restingorderparams). |
| `market` | [`Market`](Market.md) | The market. |
| `ba` | [`BA`](../namespaces/Market-1.md#ba) | The BA of the taker order; the resting order will be the opposite. |

#### Returns

`Promise`<\{ `provision`: `BigSource` ; `restingOrderGasreq`: `number` ; `gaspriceFactor`: `number` ; `restingOrderBa`: `string`  }\>

The resting order parameters.

#### Defined in

@mangrovedao/mangrove.js/src/util/trade.ts:810

___

### <a id="initialresult" name="initialresult"></a> initialResult

▸ **initialResult**(`receipt`): [`OrderResultWithOptionalSummary`](../modules.md#orderresultwithoptionalsummary)

#### Parameters

| Name | Type |
| :------ | :------ |
| `receipt` | `ContractReceipt` |

#### Returns

[`OrderResultWithOptionalSummary`](../modules.md#orderresultwithoptionalsummary)

#### Defined in

@mangrovedao/mangrove.js/src/util/trade.ts:856

___

### <a id="batobs" name="batobs"></a> baToBs

▸ **baToBs**(`ba`): [`BS`](../namespaces/Market-1.md#bs)

#### Parameters

| Name | Type |
| :------ | :------ |
| `ba` | [`BA`](../namespaces/Market-1.md#ba) |

#### Returns

[`BS`](../namespaces/Market-1.md#bs)

#### Defined in

@mangrovedao/mangrove.js/src/util/trade.ts:869

___

### <a id="bstoba" name="bstoba"></a> bsToBa

▸ **bsToBa**(`bs`): [`BA`](../namespaces/Market-1.md#ba)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bs` | [`BS`](../namespaces/Market-1.md#bs) |

#### Returns

[`BA`](../namespaces/Market-1.md#ba)

#### Defined in

@mangrovedao/mangrove.js/src/util/trade.ts:873

___

### <a id="getcleanrawparamsfromunitparams" name="getcleanrawparamsfromunitparams"></a> getCleanRawParamsFromUnitParams

▸ **getCleanRawParamsFromUnitParams**(`unitParams`, `market`): `Promise`<[`RawCleanParams`](../namespaces/Market-1.md#rawcleanparams)\>

Gets parameters to send to functions `market.mgv.contract.cleanByImpersonation`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `unitParams` | [`CleanUnitParams`](../modules.md#cleanunitparams) |
| `market` | [`Market`](Market.md) |

#### Returns

`Promise`<[`RawCleanParams`](../namespaces/Market-1.md#rawcleanparams)\>

#### Defined in

@mangrovedao/mangrove.js/src/util/trade.ts:880

___

### <a id="cleanwithrawparameters" name="cleanwithrawparameters"></a> cleanWithRawParameters

▸ **cleanWithRawParameters**(`raw`, `market`, `overrides`): `Promise`<\{ `result`: `Promise`<[`DirtyOrderResult`](../namespaces/Market-1.md#dirtyorderresult)\> ; `response`: `Promise`<`ContractTransaction`\>  }\>

Low level sniping of `targets`.

Returns a promise for clean result after 1 confirmation.
Will throw on same conditions as ethers.js `transaction.wait`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `raw` | [`RawCleanParams`](../namespaces/Market-1.md#rawcleanparams) |
| `market` | [`Market`](Market.md) |
| `overrides` | `Overrides` |

#### Returns

`Promise`<\{ `result`: `Promise`<[`DirtyOrderResult`](../namespaces/Market-1.md#dirtyorderresult)\> ; `response`: `Promise`<`ContractTransaction`\>  }\>

#### Defined in

@mangrovedao/mangrove.js/src/util/trade.ts:920

___

### <a id="responsetocleanresult" name="responsetocleanresult"></a> responseToCleanResult

▸ **responseToCleanResult**(`response`, `raw`, `market`): `Promise`<[`OrderResult`](../namespaces/Market-1.md#orderresult)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Promise`<`ContractTransaction`\> |
| `raw` | [`RawCleanParams`](../namespaces/Market-1.md#rawcleanparams) |
| `market` | [`Market`](Market.md) |

#### Returns

`Promise`<[`OrderResult`](../namespaces/Market-1.md#orderresult)\>

#### Defined in

@mangrovedao/mangrove.js/src/util/trade.ts:943
