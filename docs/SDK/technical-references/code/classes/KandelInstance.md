---
id: "KandelInstance"
title: "Class: KandelInstance"
sidebar_label: "KandelInstance"
sidebar_position: 0
custom_edit_url: null
---

**`Title`**

Management of a single Kandel instance.

## Properties

### <a id="kandel" name="kandel"></a> kandel

• **kandel**: `GeometricKandel`

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelInstance.ts:50

___

### <a id="address" name="address"></a> address

• **address**: `string`

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelInstance.ts:51

___

### <a id="precision" name="precision"></a> precision

• **precision**: `number`

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelInstance.ts:52

___

### <a id="market" name="market"></a> market

• **market**: [`Market`](Market.md)

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelInstance.ts:53

___

### <a id="generator" name="generator"></a> generator

• **generator**: [`KandelDistributionGenerator`](KandelDistributionGenerator.md)

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelInstance.ts:54

___

### <a id="status" name="status"></a> status

• **status**: `KandelStatus`

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelInstance.ts:55

___

### <a id="configuration" name="configuration"></a> configuration

• **configuration**: `KandelConfiguration`

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelInstance.ts:56

___

### <a id="offerlogic" name="offerlogic"></a> offerLogic

• **offerLogic**: [`OfferLogic`](OfferLogic.md)

Expose logic relevant for all offer logic implementations, including Kandel.

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelInstance.ts:59

## Methods

### <a id="create" name="create"></a> create

▸ `Static` **create**(`params`): `Promise`<[`KandelInstance`](KandelInstance.md)\>

Creates a KandelInstance object to interact with a Kandel strategy on Mangrove.

**`Dev`**

If a factory function is provided for the market, then remember to disconnect market when no longer needed.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | The parameters used to create an instance. |
| `params.address` | `string` | The address of the Kandel instance. |
| `params.signer` | `Signer` | The signer used to interact with the Kandel instance. |
| `params.market` | [`Market`](Market.md) \| (`baseAddress`: `string`, `quoteAddress`: `string`) => `Promise`<[`Market`](Market.md)\> | The market used by the Kandel instance or a factory function to create the market. |

#### Returns

`Promise`<[`KandelInstance`](KandelInstance.md)\>

A new KandelInstance.

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelInstance.ts:69

___

### <a id="getbase" name="getbase"></a> getBase

▸ **getBase**(): [`MgvToken`](MgvToken.md)

Gets the base of the market Kandel is making

#### Returns

[`MgvToken`](MgvToken.md)

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelInstance.ts:137

___

### <a id="getquote" name="getquote"></a> getQuote

▸ **getQuote**(): [`MgvToken`](MgvToken.md)

Gets the quote of the market Kandel is making

#### Returns

[`MgvToken`](MgvToken.md)

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelInstance.ts:142

___

### <a id="getreserveid" name="getreserveid"></a> getReserveId

▸ **getReserveId**(): `Promise`<`string`\>

Retrieves the identifier of this contract's reserve when using a router

#### Returns

`Promise`<`string`\>

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelInstance.ts:147

___

### <a id="getbalance" name="getbalance"></a> getBalance

▸ **getBalance**(`offerType`): `Promise`<`Big`\>

Retrieves the total balance available for this Kandel instance of the offered token for the given offer type.

**`Remarks`**

with liquidity sharing and a router, this will be shared among other Kandel instances.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `offerType` | [`BA`](../namespaces/Market-1.md#ba) | The offer type. |

#### Returns

`Promise`<`Big`\>

The balance of the asset.

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelInstance.ts:156

___

### <a id="getunpublished" name="getunpublished"></a> getUnpublished

▸ **getUnpublished**(`offerType`): `Promise`<`Big`\>

Retrieves the amount of liquidity that is available for the Kandel instance but not offered by the given offer type.

**`Remarks`**

with liquidity sharing and a router, the balance will be shared among other Kandel instances and the unpublished can be seen as a buffer.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `offerType` | [`BA`](../namespaces/Market-1.md#ba) | The offer type. |

#### Returns

`Promise`<`Big`\>

the unpublished liquidity.

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelInstance.ts:166

___

### <a id="getofferedvolume" name="getofferedvolume"></a> getOfferedVolume

▸ **getOfferedVolume**(`offerType`): `Promise`<`Big`\>

Retrieves the total offered volume for the offer type for this Kandel instance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `offerType` | [`BA`](../namespaces/Market-1.md#ba) | The offer type. |

#### Returns

`Promise`<`Big`\>

The offered volume.

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelInstance.ts:175

___

### <a id="getparameters" name="getparameters"></a> getParameters

▸ **getParameters**(): `Promise`<`KandelParameters`\>

Retrieves the current Kandel parameters

#### Returns

`Promise`<`KandelParameters`\>

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelInstance.ts:181

___

### <a id="getparameterswithoverrides" name="getparameterswithoverrides"></a> getParametersWithOverrides

▸ **getParametersWithOverrides**(`parameters`, `distributionRatio?`, `distributionPricePoints?`): `Promise`<`KandelParameters`\>

Gets new Kandel parameters based on current and some overrides.

**`Remarks`**

Ratio and price points provided in the parameters must match a provided distribution.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parameters` | `KandelParameterOverrides` | The Kandel parameters to override, those left out will keep their current value. |
| `distributionRatio?` | `any` | The ratio of the Kandel distribution. |
| `distributionPricePoints?` | `number` | The number of price points of the Kandel distribution. |

#### Returns

`Promise`<`KandelParameters`\>

The new Kandel parameters.

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelInstance.ts:215

___

### <a id="getoutboundtoken" name="getoutboundtoken"></a> getOutboundToken

▸ **getOutboundToken**(`offerType`): [`MgvToken`](MgvToken.md)

Gets the outbound token for bids/asks.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `offerType` | [`BA`](../namespaces/Market-1.md#ba) | The bid/ask identifier. |

#### Returns

[`MgvToken`](MgvToken.md)

The outbound token.

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelInstance.ts:278

___

### <a id="getofferidatindex" name="getofferidatindex"></a> getOfferIdAtIndex

▸ **getOfferIdAtIndex**(`offerType`, `index`): `Promise`<`number`\>

Gets the Mangrove offer id for a Kandel index.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `offerType` | [`BA`](../namespaces/Market-1.md#ba) | The bid/ask identifier. |
| `index` | `number` | The Kandel index. |

#### Returns

`Promise`<`number`\>

The Mangrove offer id.

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelInstance.ts:287

___

### <a id="getindexofofferid" name="getindexofofferid"></a> getIndexOfOfferId

▸ **getIndexOfOfferId**(`offerType`, `offerId`): `Promise`<`number`\>

Gets the Kandel index for a Mangrove offer id.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `offerType` | [`BA`](../namespaces/Market-1.md#ba) | The bid/ask identifier. |
| `offerId` | `number` | The Mangrove offer id. |

#### Returns

`Promise`<`number`\>

The Kandel index.

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelInstance.ts:298

___

### <a id="getpivots" name="getpivots"></a> getPivots

▸ **getPivots**(`distribution`): `Promise`<`number`[]\>

Retrieves pivots to use for populating the offers in the distribution

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `distribution` | [`KandelDistribution`](KandelDistribution.md) | The distribution to get pivots for. |

#### Returns

`Promise`<`number`[]\>

The pivots to use when populating the distribution.

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelInstance.ts:308

___

### <a id="getrawdistribution" name="getrawdistribution"></a> getRawDistribution

▸ **getRawDistribution**(`distribution`): `DistributionStruct`

Convert public Kandel distribution to internal representation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `distribution` | `OfferDistribution` | The Kandel distribution. |

#### Returns

`DistributionStruct`

The internal representation of the Kandel distribution.

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelInstance.ts:324

___

### <a id="getofferids" name="getofferids"></a> getOfferIds

▸ **getOfferIds**(): `Promise`<{ `offerType`: [`BA`](../namespaces/Market-1.md#ba) ; `offerId`: `number` ; `index`: `number`  }[]\>

Retrieves the Mangrove offer ids for all offers.

#### Returns

`Promise`<{ `offerType`: [`BA`](../namespaces/Market-1.md#ba) ; `offerId`: `number` ; `index`: `number`  }[]\>

The Mangrove offer ids for all offers along with their offer type and Kandel index.

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelInstance.ts:342

___

### <a id="getoffers" name="getoffers"></a> getOffers

▸ **getOffers**(): `Promise`<{ `offerType`: [`BA`](../namespaces/Market-1.md#ba) ; `offerId`: `number` ; `index`: `number` ; `offer`: [`Offer`](../namespaces/Market-1.md#offer) = offer }[]\>

Retrieves all offers for the Kandel instance by querying the market.

#### Returns

`Promise`<{ `offerType`: [`BA`](../namespaces/Market-1.md#ba) ; `offerId`: `number` ; `index`: `number` ; `offer`: [`Offer`](../namespaces/Market-1.md#offer) = offer }[]\>

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelInstance.ts:355

___

### <a id="getofferstatuses" name="getofferstatuses"></a> getOfferStatuses

▸ **getOfferStatuses**(`midPrice`): `Promise`<`Statuses`\>

Retrieves all offers from the market and determines their status.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `midPrice` | `any` | The current mid price of the market used to discern expected bids from asks. |

#### Returns

`Promise`<`Statuses`\>

The status of all offers.

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelInstance.ts:371

___

### <a id="getofferstatusfromoffers" name="getofferstatusfromoffers"></a> getOfferStatusFromOffers

▸ **getOfferStatusFromOffers**(`params`): `Promise`<`Statuses`\>

Determines the status of the Kandel instance based on the passed in offers.

**`Throws`**

If no offers are live. At least one live offer is required to determine the status.

**`Remarks`**

The expected prices is determined by extrapolating from a live offer closest to the mid price.
Offers are expected to be live bids below the mid price and asks above.
This may not hold if an offer deep in the book has been sniped in which case a dual offer will exist on the wrong side of mid price but quickly be taken due to a good price (Kandel still earns on the spread).
Offers are expected to be dead near the mid price due to the spread (step size) between the live bid and ask.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | The parameters to use to determine the status. |
| `params.midPrice` | `any` | The current mid price of the market used to discern expected bids from asks. |
| `params.offers` | `OffersWithPrices` | The offers used as a basis for determining the status. This should include all live and dead offers. |

#### Returns

`Promise`<`Statuses`\>

The status of the Kandel instance.

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelInstance.ts:396

___

### <a id="createdistributionwithoffers" name="createdistributionwithoffers"></a> createDistributionWithOffers

▸ **createDistributionWithOffers**(`params`): `Promise`<[`KandelDistribution`](KandelDistribution.md)\>

Creates a distribution based on an explicit set of offers based on the Kandel parameters.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | The parameters for the distribution. |
| `params.explicitOffers` | { `index`: `number` ; `offerType`: [`BA`](../namespaces/Market-1.md#ba) ; `price`: `any` ; `gives`: `any`  }[] | The explicit offers to use. |

#### Returns

`Promise`<[`KandelDistribution`](KandelDistribution.md)\>

The new distribution.

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelInstance.ts:420

___

### <a id="approve" name="approve"></a> approve

▸ **approve**(`baseArgs?`, `quoteArgs?`): `Promise`<`ContractTransaction`[]\>

Approves the Kandel instance for transferring from signer to itself.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `baseArgs` | `any` | The arguments for approving the base token. If not provided, then infinite approval is used. |
| `quoteArgs` | `any` | The arguments for approving the quote token. If not provided, then infinite approval is used. |

#### Returns

`Promise`<`ContractTransaction`[]\>

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelInstance.ts:442

___

### <a id="deposit" name="deposit"></a> deposit

▸ **deposit**(`params`, `overrides?`): `Promise`<`ContractTransaction`\>

Deposits the amounts on the Kandel instance to be available for offers.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | The parameters to use when depositing funds. |
| `params.baseAmount?` | `any` | The amount of base to deposit. If not provided, then no base is deposited. |
| `params.quoteAmount?` | `any` | The amount of quote to deposit. If not provided, then no quote is deposited. |
| `overrides` | `Overrides` | The ethers overrides to use when calling the deposit function. |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelInstance.ts:458

___

### <a id="getmostspecificconfig" name="getmostspecificconfig"></a> getMostSpecificConfig

▸ **getMostSpecificConfig**(): `NetworkConfiguration` & `Partial`<`MarketConfiguration`\>

Gets the most specific available recommended configuration for Kandel instances.

#### Returns

`NetworkConfiguration` & `Partial`<`MarketConfiguration`\>

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelInstance.ts:473

___

### <a id="getrawdistributionchunks" name="getrawdistributionchunks"></a> getRawDistributionChunks

▸ **getRawDistributionChunks**(`params`): `Promise`<{ `rawDistributions`: { `pivots`: `number`[] ; `rawDistribution`: `DistributionStruct`  }[] ; `firstAskIndex`: `number`  }\>

Splits the distribution into chunks and converts it to internal representation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | The parameters. |
| `params.distribution` | [`KandelDistribution`](KandelDistribution.md) | The distribution to split. |
| `params.maxOffersInChunk?` | `number` | The maximum number of offers in a chunk. If not provided, then KandelConfiguration is used. |

#### Returns

`Promise`<{ `rawDistributions`: { `pivots`: `number`[] ; `rawDistribution`: `DistributionStruct`  }[] ; `firstAskIndex`: `number`  }\>

The raw distributions in internal representation and the index of the first ask.

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelInstance.ts:487

___

### <a id="populate" name="populate"></a> populate

▸ **populate**(`params`, `overrides?`): `Promise`<`ContractTransaction`[]\>

Populates the offers in the distribution for the Kandel instance and sets parameters.

**`Remarks`**

If this function is invoked with new ratio, pricePoints, or spread, then first retract all offers; otherwise, Kandel will enter an inconsistent state.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | The parameters for populating the offers. |
| `params.distribution?` | [`KandelDistribution`](KandelDistribution.md) | The distribution of offers to populate. |
| `params.parameters?` | `KandelParameterOverrides` | The parameters to set leave out values to keep their current value. |
| `params.depositBaseAmount?` | `any` | The amount of base to deposit. If not provided, then no base is deposited. |
| `params.depositQuoteAmount?` | `any` | The amount of quote to deposit. If not provided, then no quote is deposited. |
| `params.funds?` | `any` | The amount of funds to provision. If not provided, then the required funds are provisioned according to getRequiredProvision. |
| `params.maxOffersInChunk?` | `number` | The maximum number of offers to include in a single populate transaction. If not provided, then KandelConfiguration is used. |
| `overrides` | `Overrides` | The ethers overrides to use when calling the populate and populateChunk functions. |

#### Returns

`Promise`<`ContractTransaction`[]\>

The transaction(s) used to populate the offers.

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelInstance.ts:527

___

### <a id="populatechunk" name="populatechunk"></a> populateChunk

▸ **populateChunk**(`params`, `overrides?`): `Promise`<`ContractTransaction`[]\>

Populates the offers in the distribution for the Kandel instance. To set parameters or add funds, use populate.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | The parameters for populating the offers. |
| `params.distribution` | [`KandelDistribution`](KandelDistribution.md) | The distribution of offers to populate. |
| `params.maxOffersInChunk?` | `number` | The maximum number of offers to include in a single populate transaction. If not provided, then KandelConfiguration is used. |
| `overrides` | `Overrides` | The ethers overrides to use when calling the populateChunk function. |

#### Returns

`Promise`<`ContractTransaction`[]\>

The transaction(s) used to populate the offers.

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelInstance.ts:604

___

### <a id="populatechunks" name="populatechunks"></a> populateChunks

▸ **populateChunks**(`firstAskIndex`, `rawDistributions`, `overrides?`): `Promise`<`ContractTransaction`[]\>

Populates the offers in the distribution for the Kandel instance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `firstAskIndex` | `number` | The index of the first ask in the distribution. |
| `rawDistributions` | { `pivots`: `number`[] ; `rawDistribution`: `DistributionStruct`  }[] | The raw chunked distributions in internal representation to populate. |
| `overrides` | `Overrides` | The ethers overrides to use when calling the populateChunk function. |

#### Returns

`Promise`<`ContractTransaction`[]\>

The transaction(s) used to populate the offers.

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelInstance.ts:624

___

### <a id="retractandwithdraw" name="retractandwithdraw"></a> retractAndWithdraw

▸ **retractAndWithdraw**(`params?`, `overrides?`): `Promise`<`ContractTransaction`[]\>

Retracts offers and withdraws tokens and provision

**`Remarks`**

This function or retractOffers should be used to retract all offers before changing the ratio, pricePoints, or spread using populate.
If offers are retracted over multiple transactions, then the chunks are retracted in opposite order from the populate function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | The parameters. |
| `params.startIndex?` | `number` | The start Kandel index of offers to retract. If not provided, then 0 is used. |
| `params.endIndex?` | `number` | The end index of offers to retract. This is exclusive of the offer the index 'endIndex'. If not provided, then the number of price points is used. |
| `params.withdrawFunds?` | `any` | The amount of funds to withdraw in ethers. If not provided, then the entire provision on Mangrove is withdrawn. |
| `params.withdrawBaseAmount?` | `any` | The amount of base to withdraw. If not provided, then the entire base balance on Kandel is withdrawn. |
| `params.withdrawQuoteAmount?` | `any` | The amount of quote to withdraw. If not provided, then the entire quote balance on Kandel is withdrawn. |
| `params.recipientAddress?` | `string` | The address to withdraw the tokens to. If not provided, then the address of the signer is used. |
| `params.maxOffersInChunk?` | `number` | The maximum number of offers to include in a single retract transaction. If not provided, then KandelConfiguration is used. |
| `overrides` | `Overrides` | The ethers overrides to use when calling the retractAndWithdraw, and retractOffers functions. |

#### Returns

`Promise`<`ContractTransaction`[]\>

The transaction(s) used to retract the offers.

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelInstance.ts:678

___

### <a id="retractoffers" name="retractoffers"></a> retractOffers

▸ **retractOffers**(`params?`, `overrides?`): `Promise`<`ContractTransaction`[]\>

Retracts offers

**`Remarks`**

This function or retractAndWithdraw should be used to retract all offers before changing the ratio, pricePoints, or spread using populate.
If offers are retracted over multiple transactions, then the chunks are retracted in opposite order from the populate function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | The parameters. |
| `params.startIndex?` | `number` | The start Kandel index of offers to retract. If not provided, then 0 is used. |
| `params.endIndex?` | `number` | The end index of offers to retract. This is exclusive of the offer the index 'endIndex'. If not provided, then the number of price points is used. |
| `params.maxOffersInChunk?` | `number` | The maximum number of offers to include in a single retract transaction. If not provided, then KandelConfiguration is used. |
| `overrides` | `Overrides` | The ethers overrides to use when calling the retractOffers function. |

#### Returns

`Promise`<`ContractTransaction`[]\>

The transaction(s) used to retract the offers.

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelInstance.ts:731

___

### <a id="retractofferchunks" name="retractofferchunks"></a> retractOfferChunks

▸ **retractOfferChunks**(`params`, `overrides`): `Promise`<{ `txs`: `ContractTransaction`[] ; `lastChunk`: { `from`: `number` ; `to`: `number`  }  }\>

Retracts offers

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | The parameters. |
| `params.retractParams` | `Object` | The parameters for retracting offers. |
| `params.retractParams.startIndex?` | `number` | - |
| `params.retractParams.endIndex?` | `number` | - |
| `params.retractParams.maxOffersInChunk?` | `number` | - |
| `params.skipLast` | `boolean` | Whether to skip the last chunk. This is used to allow the last chunk to be retracted while withdrawing funds. |
| `overrides` | `Overrides` | The ethers overrides to use when calling the retractOffers function. |

#### Returns

`Promise`<{ `txs`: `ContractTransaction`[] ; `lastChunk`: { `from`: `number` ; `to`: `number`  }  }\>

The transaction(s) used to retract the offers.

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelInstance.ts:757

___

### <a id="withdraw" name="withdraw"></a> withdraw

▸ **withdraw**(`params?`, `overrides?`): `Promise`<`ContractTransaction`\>

Withdraws tokens from the Kandel instance.

**`Remarks`**

it is up to the caller to make sure there are still enough funds for live offers.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | The parameters. |
| `params.baseAmount?` | `any` | The amount of base to withdraw. If not provided, then the entire base balance on Kandel is withdrawn. |
| `params.quoteAmount?` | `any` | The amount of quote to withdraw. If not provided, then the entire quote balance on Kandel is withdrawn. |
| `params.recipientAddress?` | `string` | The address to withdraw the tokens to. If not provided, then the address of the signer is used. |
| `overrides` | `Overrides` | The ethers overrides to use when calling the retractAndWithdraw, and retractOffers functions. |

#### Returns

`Promise`<`ContractTransaction`\>

The transaction used to withdraw the offers.

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelInstance.ts:809
