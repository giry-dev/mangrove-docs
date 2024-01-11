---
id: "CoreKandelInstance"
title: "Class: CoreKandelInstance"
sidebar_label: "CoreKandelInstance"
sidebar_position: 0
custom_edit_url: null
---

**`Title`**

Management of a single Kandel instance.

## Hierarchy

- **`CoreKandelInstance`**

  ↳ [`GeometricKandelInstance`](GeometricKandelInstance.md)

## Properties

### <a id="kandel" name="kandel"></a> kandel

• **kandel**: `CoreKandel`

#### Defined in

@mangrovedao/mangrove.js/src/kandel/coreKandelInstance.ts:57

___

### <a id="address" name="address"></a> address

• **address**: `string`

#### Defined in

@mangrovedao/mangrove.js/src/kandel/coreKandelInstance.ts:58

___

### <a id="market" name="market"></a> market

• **market**: [`Market`](Market.md)

#### Defined in

@mangrovedao/mangrove.js/src/kandel/coreKandelInstance.ts:59

___

### <a id="distributionhelper" name="distributionhelper"></a> distributionHelper

• **distributionHelper**: `KandelDistributionHelper`

#### Defined in

@mangrovedao/mangrove.js/src/kandel/coreKandelInstance.ts:60

___

### <a id="generalkandeldistributiongenerator" name="generalkandeldistributiongenerator"></a> generalKandelDistributionGenerator

• **generalKandelDistributionGenerator**: `GeneralKandelDistributionGenerator`

#### Defined in

@mangrovedao/mangrove.js/src/kandel/coreKandelInstance.ts:61

___

### <a id="configuration" name="configuration"></a> configuration

• **configuration**: `KandelConfiguration`

#### Defined in

@mangrovedao/mangrove.js/src/kandel/coreKandelInstance.ts:62

___

### <a id="seeder" name="seeder"></a> seeder

• **seeder**: [`KandelSeeder`](KandelSeeder.md)

#### Defined in

@mangrovedao/mangrove.js/src/kandel/coreKandelInstance.ts:63

___

### <a id="offerlogic" name="offerlogic"></a> offerLogic

• **offerLogic**: [`OfferLogic`](OfferLogic.md)

Expose logic relevant for all offer logic implementations, including Kandel.

#### Defined in

@mangrovedao/mangrove.js/src/kandel/coreKandelInstance.ts:66

## Methods

### <a id="createcoreparams" name="createcoreparams"></a> createCoreParams

▸ `Static` `Protected` **createCoreParams**(`params`): `Promise`<{ `address`: `string` = params.address; `market`: [`Market`](Market.md) ; `kandel`: `CoreKandel` ; `distributionHelper`: `KandelDistributionHelper` ; `generalKandelDistributionHelper`: `GeneralKandelDistributionHelper` ; `offerLogic`: [`OfferLogic`](OfferLogic.md) ; `configuration`: `KandelConfiguration` ; `seeder`: [`KandelSeeder`](KandelSeeder.md) ; `generalKandelDistributionGenerator`: `GeneralKandelDistributionGenerator`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `Object` |
| `params.address` | `string` |
| `params.signer` | `Signer` |
| `params.market` | `MarketOrMarketFactory` |

#### Returns

`Promise`<{ `address`: `string` = params.address; `market`: [`Market`](Market.md) ; `kandel`: `CoreKandel` ; `distributionHelper`: `KandelDistributionHelper` ; `generalKandelDistributionHelper`: `GeneralKandelDistributionHelper` ; `offerLogic`: [`OfferLogic`](OfferLogic.md) ; `configuration`: `KandelConfiguration` ; `seeder`: [`KandelSeeder`](KandelSeeder.md) ; `generalKandelDistributionGenerator`: `GeneralKandelDistributionGenerator`  }\>

#### Defined in

@mangrovedao/mangrove.js/src/kandel/coreKandelInstance.ts:68

___

### <a id="getbase" name="getbase"></a> getBase

▸ **getBase**(): [`Token`](Token.md)

Gets the base of the market Kandel is making

#### Returns

[`Token`](Token.md)

#### Defined in

@mangrovedao/mangrove.js/src/kandel/coreKandelInstance.ts:138

___

### <a id="getquote" name="getquote"></a> getQuote

▸ **getQuote**(): [`Token`](Token.md)

Gets the quote of the market Kandel is making

#### Returns

[`Token`](Token.md)

#### Defined in

@mangrovedao/mangrove.js/src/kandel/coreKandelInstance.ts:143

___

### <a id="gettickspacing" name="gettickspacing"></a> getTickSpacing

▸ **getTickSpacing**(): `number`

Gets the tick spacing of the market Kandel is making

#### Returns

`number`

#### Defined in

@mangrovedao/mangrove.js/src/kandel/coreKandelInstance.ts:148

___

### <a id="getreserveid" name="getreserveid"></a> getReserveId

▸ **getReserveId**(): `Promise`<`string`\>

Retrieves the identifier of this contract's reserve when using a router

#### Returns

`Promise`<`string`\>

#### Defined in

@mangrovedao/mangrove.js/src/kandel/coreKandelInstance.ts:153

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

@mangrovedao/mangrove.js/src/kandel/coreKandelInstance.ts:162

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

@mangrovedao/mangrove.js/src/kandel/coreKandelInstance.ts:172

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

@mangrovedao/mangrove.js/src/kandel/coreKandelInstance.ts:181

___

### <a id="getparameters" name="getparameters"></a> getParameters

▸ **getParameters**(): `Promise`<`KandelParameters`\>

Retrieves the current Kandel parameters

#### Returns

`Promise`<`KandelParameters`\>

#### Defined in

@mangrovedao/mangrove.js/src/kandel/coreKandelInstance.ts:187

___

### <a id="getparameterswithoverrides" name="getparameterswithoverrides"></a> getParametersWithOverrides

▸ **getParametersWithOverrides**(`parameters`, `distributionPricePoints?`, `distributionStepSize?`): `Promise`<`KandelParameters`\>

Gets new Kandel parameters based on current and some overrides. If gasprice is not set, the current gasprice and cover factor is used.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parameters` | `KandelParameterOverrides` | The Kandel parameters to override, those left out will keep their current value. |
| `distributionPricePoints?` | `number` | The number of price points of the Kandel distribution. |
| `distributionStepSize?` | `number` | The step size for the Kandel distribution. |

#### Returns

`Promise`<`KandelParameters`\>

The new Kandel parameters.

#### Defined in

@mangrovedao/mangrove.js/src/kandel/coreKandelInstance.ts:203

___

### <a id="getoutboundtoken" name="getoutboundtoken"></a> getOutboundToken

▸ **getOutboundToken**(`offerType`): [`Token`](Token.md)

Gets the outbound token for bids/asks.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `offerType` | [`BA`](../namespaces/Market-1.md#ba) | The bid/ask identifier. |

#### Returns

[`Token`](Token.md)

The outbound token.

#### Defined in

@mangrovedao/mangrove.js/src/kandel/coreKandelInstance.ts:279

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

@mangrovedao/mangrove.js/src/kandel/coreKandelInstance.ts:288

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

@mangrovedao/mangrove.js/src/kandel/coreKandelInstance.ts:299

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

@mangrovedao/mangrove.js/src/kandel/coreKandelInstance.ts:309

___

### <a id="getofferids" name="getofferids"></a> getOfferIds

▸ **getOfferIds**(): `Promise`<{ `bids`: { `offerId`: `number` ; `index`: `number`  }[] ; `asks`: { `offerId`: `number` ; `index`: `number`  }[]  }\>

Retrieves the Mangrove offer ids for all offers.

#### Returns

`Promise`<{ `bids`: { `offerId`: `number` ; `index`: `number`  }[] ; `asks`: { `offerId`: `number` ; `index`: `number`  }[]  }\>

The Mangrove offer ids for all offers along with their offer type and Kandel index.

#### Defined in

@mangrovedao/mangrove.js/src/kandel/coreKandelInstance.ts:323

___

### <a id="getoffers" name="getoffers"></a> getOffers

▸ **getOffers**(): `Promise`<{ `bids`: { `index`: `number` = x.index; `live`: `boolean` ; `id`: `number` ; `gasprice`: `number` ; `maker`: `string` ; `gasreq`: `number` ; `tick`: `number` ; `price`: `Big` ; `gives`: `Big` ; `wants`: `Big` ; `volume`: `Big` ; `nextAtTick`: `undefined` \| `number` ; `prevAtTick`: `undefined` \| `number` ; `gasbase`: `number`  }[] ; `asks`: { `index`: `number` = x.index; `live`: `boolean` ; `id`: `number` ; `gasprice`: `number` ; `maker`: `string` ; `gasreq`: `number` ; `tick`: `number` ; `price`: `Big` ; `gives`: `Big` ; `wants`: `Big` ; `volume`: `Big` ; `nextAtTick`: `undefined` \| `number` ; `prevAtTick`: `undefined` \| `number` ; `gasbase`: `number`  }[]  }\>

Retrieves all offers for the Kandel instance by querying the market.

#### Returns

`Promise`<{ `bids`: { `index`: `number` = x.index; `live`: `boolean` ; `id`: `number` ; `gasprice`: `number` ; `maker`: `string` ; `gasreq`: `number` ; `tick`: `number` ; `price`: `Big` ; `gives`: `Big` ; `wants`: `Big` ; `volume`: `Big` ; `nextAtTick`: `undefined` \| `number` ; `prevAtTick`: `undefined` \| `number` ; `gasbase`: `number`  }[] ; `asks`: { `index`: `number` = x.index; `live`: `boolean` ; `id`: `number` ; `gasprice`: `number` ; `maker`: `string` ; `gasreq`: `number` ; `tick`: `number` ; `price`: `Big` ; `gives`: `Big` ; `wants`: `Big` ; `volume`: `Big` ; `nextAtTick`: `undefined` \| `number` ; `prevAtTick`: `undefined` \| `number` ; `gasbase`: `number`  }[]  }\>

#### Defined in

@mangrovedao/mangrove.js/src/kandel/coreKandelInstance.ts:341

___

### <a id="createdistributionwithoffers" name="createdistributionwithoffers"></a> createDistributionWithOffers

▸ **createDistributionWithOffers**(`params`): `Promise`<[`GeneralKandelDistribution`](GeneralKandelDistribution.md)\>

Creates a distribution based on an explicit set of offers based on the Kandel parameters.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | The parameters for the distribution. |
| `params.explicitOffers` | `Object` | The explicit offers to use. |
| `params.explicitOffers.bids` | `OffersWithGives` | - |
| `params.explicitOffers.asks` | `OffersWithGives` | - |

#### Returns

`Promise`<[`GeneralKandelDistribution`](GeneralKandelDistribution.md)\>

The new distribution.

#### Defined in

@mangrovedao/mangrove.js/src/kandel/coreKandelInstance.ts:357

___

### <a id="getminimumvolume" name="getminimumvolume"></a> getMinimumVolume

▸ **getMinimumVolume**(`offerType`): `Promise`<`Big`\>

Retrieves the minimum volume for a given offer type.

**`Dev`**

**`See`**

seeder.getMinimumVolumeForGasreq for parameterized function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `offerType` | [`BA`](../namespaces/Market-1.md#ba) | The offer type to get the minimum volume for. |

#### Returns

`Promise`<`Big`\>

The minimum volume for the given offer type.

#### Defined in

@mangrovedao/mangrove.js/src/kandel/coreKandelInstance.ts:378

___

### <a id="getminimumoroverrides" name="getminimumoroverrides"></a> getMinimumOrOverrides

▸ `Protected` **getMinimumOrOverrides**(`params`): `Promise`<{ `minimumBasePerOffer`: `Big` ; `minimumQuotePerOffer`: `Big`  }\>

Retrieves the minimum volumes for base and quote, or the provided overrides.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | The parameters for the minimum volumes. |
| `params.minimumBasePerOffer?` | `BigSource` | The minimum base token volume per offer. If not provided, then the minimum base token volume is used. |
| `params.minimumQuotePerOffer?` | `BigSource` | The minimum quote token volume per offer. If not provided, then the minimum quote token volume is used. |

#### Returns

`Promise`<{ `minimumBasePerOffer`: `Big` ; `minimumQuotePerOffer`: `Big`  }\>

The minimum volumes for base and quote, or the provided overrides.

#### Defined in

@mangrovedao/mangrove.js/src/kandel/coreKandelInstance.ts:392

___

### <a id="calculatedistributionwithuniformlychangedvolume" name="calculatedistributionwithuniformlychangedvolume"></a> calculateDistributionWithUniformlyChangedVolume

▸ **calculateDistributionWithUniformlyChangedVolume**(`params`): `Promise`<{ `distribution`: [`GeneralKandelDistribution`](GeneralKandelDistribution.md) ; `totalBaseChange`: `Big` ; `totalQuoteChange`: `Big`  }\>

Calculates a new distribution based on the provided offers and deltas.

**`Remarks`**

The base and quote deltas are applied uniformly to all offers, except during decrease where offers are kept above their minimum volume.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | The parameters for the new distribution. |
| `params.explicitOffers` | `Object` | The offers to use. |
| `params.explicitOffers.bids` | `OffersWithGives` | - |
| `params.explicitOffers.asks` | `OffersWithGives` | - |
| `params.baseDelta?` | `BigSource` | The delta to apply to the base token volume. If not provided, then the base token volume is unchanged. |
| `params.quoteDelta?` | `BigSource` | The delta to apply to the quote token volume. If not provided, then the quote token volume is unchanged. |
| `params.minimumBasePerOffer?` | `BigSource` | The minimum base token volume per offer. If not provided, then the minimum base token volume is used. |
| `params.minimumQuotePerOffer?` | `BigSource` | The minimum quote token volume per offer. If not provided, then the minimum quote token volume is used. |

#### Returns

`Promise`<{ `distribution`: [`GeneralKandelDistribution`](GeneralKandelDistribution.md) ; `totalBaseChange`: `Big` ; `totalQuoteChange`: `Big`  }\>

The new distribution for the live offers, dead offers are not included.

#### Defined in

@mangrovedao/mangrove.js/src/kandel/coreKandelInstance.ts:418

___

### <a id="approveifhigher" name="approveifhigher"></a> approveIfHigher

▸ **approveIfHigher**(`baseArgs?`, `quoteArgs?`): `Promise`<(`undefined` \| `ContractTransaction`)[]\>

Approves the Kandel instance for transferring from signer to itself if allowance is not already high enough.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `baseArgs` | `ApproveArgs` | The arguments for approving the base token. If not provided, then infinite approval is used. |
| `quoteArgs` | `ApproveArgs` | The arguments for approving the quote token. If not provided, then infinite approval is used. |

#### Returns

`Promise`<(`undefined` \| `ContractTransaction`)[]\>

#### Defined in

@mangrovedao/mangrove.js/src/kandel/coreKandelInstance.ts:445

___

### <a id="deposit" name="deposit"></a> deposit

▸ **deposit**(`params`, `overrides?`): `Promise`<`ContractTransaction`\>

Deposits the amounts on the Kandel instance to be available for offers.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | The parameters to use when depositing funds. |
| `params.baseAmount?` | `BigSource` | The amount of base to deposit. If not provided, then no base is deposited. |
| `params.quoteAmount?` | `BigSource` | The amount of quote to deposit. If not provided, then no quote is deposited. |
| `overrides` | `Overrides` | The ethers overrides to use when calling the deposit function. |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

@mangrovedao/mangrove.js/src/kandel/coreKandelInstance.ts:461

___

### <a id="getmostspecificconfig" name="getmostspecificconfig"></a> getMostSpecificConfig

▸ **getMostSpecificConfig**(): `KandelNetworkConfiguration` & `Partial`<`KandelMarketConfiguration`\>

Gets the most specific available default configuration for Kandel instances.

#### Returns

`KandelNetworkConfiguration` & `Partial`<`KandelMarketConfiguration`\>

#### Defined in

@mangrovedao/mangrove.js/src/kandel/coreKandelInstance.ts:476

___

### <a id="getdistributionchunks" name="getdistributionchunks"></a> getDistributionChunks

▸ **getDistributionChunks**(`params`): `Promise`<`OfferDistribution`[]\>

Splits the distribution into chunks

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | The parameters. |
| `params.distribution` | [`GeneralKandelDistribution`](GeneralKandelDistribution.md) | The distribution to split. |
| `params.maxOffersInChunk?` | `number` | The maximum number of offers in a chunk. If not provided, then KandelConfiguration is used. |

#### Returns

`Promise`<`OfferDistribution`[]\>

The distribution chunks.

#### Defined in

@mangrovedao/mangrove.js/src/kandel/coreKandelInstance.ts:491

___

### <a id="getgasreqandgasprice" name="getgasreqandgasprice"></a> getGasreqAndGasprice

▸ **getGasreqAndGasprice**(`gasreq?`, `gasprice?`): `Promise`<{ `gasreq`: `number` ; `gasprice`: `number`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `gasreq?` | `number` |
| `gasprice?` | `number` |

#### Returns

`Promise`<{ `gasreq`: `number` ; `gasprice`: `number`  }\>

#### Defined in

@mangrovedao/mangrove.js/src/kandel/coreKandelInstance.ts:503

___

### <a id="getrequiredprovision" name="getrequiredprovision"></a> getRequiredProvision

▸ **getRequiredProvision**(`params`): `Promise`<`Big`\>

Determines the required provision for the offers in the distribution or the supplied offer count.

**`Remarks`**

Existing locked provision or balance on Mangrove is not accounted for.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | The parameters used to calculate the provision. |
| `params.distribution?` | [`KandelDistribution`](KandelDistribution.md) | The distribution to calculate the provision for. Optional if askCount and bidCount are provided. |
| `params.bidCount?` | `number` | The number of bids to calculate the provision for. Optional if distribution is provided. |
| `params.askCount?` | `number` | The number of asks to calculate the provision for. Optional if distribution is provided. |
| `params.gasprice?` | `number` | The gas price to calculate provision for. Default is retrieved from Kandel parameters. So the gaspriceFactor is should be accounted for in this value. |
| `params.gasreq?` | `number` | The gas required to execute a trade. Default is retrieved from Kandel parameters. |

#### Returns

`Promise`<`Big`\>

The provision required for the number of offers.

#### Defined in

@mangrovedao/mangrove.js/src/kandel/coreKandelInstance.ts:524

___

### <a id="getlockedprovision" name="getlockedprovision"></a> getLockedProvision

▸ **getLockedProvision**(): `Promise`<`Big`\>

Calculates the provision locked by existing offers based on the given parameters

#### Returns

`Promise`<`Big`\>

the locked provision, in ethers.

#### Defined in

@mangrovedao/mangrove.js/src/kandel/coreKandelInstance.ts:565

___

### <a id="getlockedprovisionfromoffers" name="getlockedprovisionfromoffers"></a> getLockedProvisionFromOffers

▸ **getLockedProvisionFromOffers**(`existingOffers`): `Big`

Calculates the provision locked for a set of offers based on the given parameters

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `existingOffers` | `Object` | the offers to calculate provision for. |
| `existingOffers.bids` | { `gasprice`: `number` ; `gasreq`: `number` ; `gasbase`: `number`  }[] | - |
| `existingOffers.asks` | { `gasprice`: `number` ; `gasreq`: `number` ; `gasbase`: `number`  }[] | - |

#### Returns

`Big`

the locked provision, in ethers.

#### Defined in

@mangrovedao/mangrove.js/src/kandel/coreKandelInstance.ts:580

___

### <a id="getmissingprovision" name="getmissingprovision"></a> getMissingProvision

▸ **getMissingProvision**(`params`): `Promise`<`Big`\>

Gets the missing provision based on provision already available on Mangrove, potentially locked by existing offers. It assumes all locked provision will be made available via deprovision or due to offers being replaced.

**`Remarks`**

If neither params.distribution nor params.offerCount is provided, then the current number of price points is used.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | The parameters. |
| `params.gasreq?` | `number` | An optional new gas required to execute a trade. Default is retrieved from Kandel parameters. |
| `params.gasprice?` | `number` | An optional new gas price to calculate provision for. Default is retrieved from Kandel parameters. |
| `params.distribution?` | [`KandelDistribution`](KandelDistribution.md) | The distribution to calculate the provision for. Optional. |
| `params.bidCount?` | `number` | The number of bids to calculate the provision for. Optional. |
| `params.askCount?` | `number` | The number of asks to calculate the provision for. Optional. |

#### Returns

`Promise`<`Big`\>

the additional required provision, in ethers.

#### Defined in

@mangrovedao/mangrove.js/src/kandel/coreKandelInstance.ts:599

___

### <a id="getmissingprovisionfromoffers" name="getmissingprovisionfromoffers"></a> getMissingProvisionFromOffers

▸ **getMissingProvisionFromOffers**(`params`, `existingOffers`): `Promise`<`Big`\>

Gets the missing provision based on provision already available on Mangrove, potentially locked by existing offers, and the new distribution requiring provision. It assumes all the provision locked in the existingOffers will be made available via deprovision or due to offers being updated.

**`Remarks`**

If neither distribution nor askCount or bidCount is provided, then the current number of price points less the stepSize is used.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | The parameters for the required provision. |
| `params.gasreq?` | `number` | An optional new gas required to execute a trade. Default is retrieved from Kandel parameters. |
| `params.gasprice?` | `number` | An optional new gas price to calculate provision for. Default is retrieved from Kandel parameters. |
| `params.distribution?` | [`KandelDistribution`](KandelDistribution.md) | The distribution to calculate the provision for. Optional. |
| `params.bidCount?` | `number` | The number of bids to calculate the provision for. Optional. |
| `params.askCount?` | `number` | The number of asks to calculate the provision for. Optional. |
| `existingOffers` | `Object` | - |
| `existingOffers.bids` | { `gasprice`: `number` ; `gasreq`: `number` ; `gasbase`: `number`  }[] | - |
| `existingOffers.asks` | { `gasprice`: `number` ; `gasreq`: `number` ; `gasbase`: `number`  }[] | - |

#### Returns

`Promise`<`Big`\>

the additional required provision, in ethers.

#### Defined in

@mangrovedao/mangrove.js/src/kandel/coreKandelInstance.ts:624

___

### <a id="getrawparametersforpopulate" name="getrawparametersforpopulate"></a> getRawParametersForPopulate

▸ **getRawParametersForPopulate**(`params`, `overrides?`): `Promise`<{ `overridesWithFunds`: `PayableOverrides` ; `rawParameters`: `KandelParameters` ; `rawDepositBaseAmount`: `BigNumber` ; `rawDepositQuoteAmount`: `BigNumber`  }\>

Gets the raw parameters for invoking populate

**`See`**

getRequiredProvision.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | The parameters for populating the offers. |
| `params.distribution?` | [`KandelDistribution`](KandelDistribution.md) | The distribution of offers to populate. |
| `params.parameters?` | `KandelParameterOverrides` | The parameters to set leave out values to keep their current value. If gasprice is not set, the current gasprice and cover factor is used. |
| `params.depositBaseAmount?` | `BigSource` | The amount of base to deposit. If not provided, then no base is deposited. |
| `params.depositQuoteAmount?` | `BigSource` | The amount of quote to deposit. If not provided, then no quote is deposited. |
| `params.funds?` | `BigSource` | The amount of funds to provision. If not provided, then the required funds are provisioned according to |
| `overrides` | `Overrides` | The ethers overrides to use when calling the populate and populateChunk functions. |

#### Returns

`Promise`<{ `overridesWithFunds`: `PayableOverrides` ; `rawParameters`: `KandelParameters` ; `rawDepositBaseAmount`: `BigNumber` ; `rawDepositQuoteAmount`: `BigNumber`  }\>

The raw parameters.

#### Defined in

@mangrovedao/mangrove.js/src/kandel/coreKandelInstance.ts:675

___

### <a id="populategeneraldistribution" name="populategeneraldistribution"></a> populateGeneralDistribution

▸ **populateGeneralDistribution**(`params`, `overrides?`): `Promise`<`ContractTransaction`[]\>

Populates the offers in the distribution for the Kandel instance and sets parameters.

**`See`**

getRequiredProvision. (if a distribution is provided)

**`Remarks`**

If this function is invoked with a different distribution, e.g., due to new pricePoints, or stepSize, then first retract all offers; otherwise, Kandel will enter an inconsistent state. This function does not set the baseQuoteTickOffset for geometric Kandels.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | The parameters for populating the offers. |
| `params.distribution?` | [`GeneralKandelDistribution`](GeneralKandelDistribution.md) | The distribution of offers to populate. Can be undefined to allow setting parameters and depositing in a single transaction. |
| `params.parameters?` | `KandelParameterOverrides` | The parameters to set leave out values to keep their current value. If gasprice is not set, the current gasprice and cover factor is used. |
| `params.depositBaseAmount?` | `BigSource` | The amount of base to deposit. If not provided, then no base is deposited. |
| `params.depositQuoteAmount?` | `BigSource` | The amount of quote to deposit. If not provided, then no quote is deposited. |
| `params.funds?` | `BigSource` | The amount of funds to provision. If not provided, then the required funds are provisioned according to |
| `params.maxOffersInChunk?` | `number` | The maximum number of offers to include in a single populate transaction. If not provided, then KandelConfiguration is used. |
| `overrides` | `Overrides` | The ethers overrides to use when calling the populate and populateChunk functions. |

#### Returns

`Promise`<`ContractTransaction`[]\>

The transaction(s) used to populate the offers.

#### Defined in

@mangrovedao/mangrove.js/src/kandel/coreKandelInstance.ts:731

___

### <a id="populategeneralchunks" name="populategeneralchunks"></a> populateGeneralChunks

▸ **populateGeneralChunks**(`params`, `overrides?`): `Promise`<`ContractTransaction`[]\>

Populates the offers in a general distribution for the Kandel instance. To set parameters or add funds, use populate.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | The parameters for populating the offers. |
| `params.distribution?` | [`GeneralKandelDistribution`](GeneralKandelDistribution.md) | The distribution of offers to populate. |
| `params.maxOffersInChunk?` | `number` | The maximum number of offers to include in a single populate transaction. If not provided, then KandelConfiguration is used. |
| `params.distributionChunks?` | `OfferDistribution`[] | Home-grown distribution chunks to populate (can be used to populate, e.g., a single offer) - takes precedence over distribution. Take care to ensure duals are included or already populated with correct parameters. |
| `overrides` | `Overrides` | The ethers overrides to use when calling the populateChunk function. |

#### Returns

`Promise`<`ContractTransaction`[]\>

The transaction(s) used to populate the offers.

#### Defined in

@mangrovedao/mangrove.js/src/kandel/coreKandelInstance.ts:791

___

### <a id="populaterawchunks" name="populaterawchunks"></a> populateRawChunks

▸ **populateRawChunks**(`rawDistributions`, `overrides?`): `Promise`<`ContractTransaction`[]\>

Populates the offers in the distribution for the Kandel instance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rawDistributions` | `DistributionStruct`[] | The raw chunked distributions in internal representation to populate. |
| `overrides` | `Overrides` | The ethers overrides to use when calling the populateChunk function. |

#### Returns

`Promise`<`ContractTransaction`[]\>

The transaction(s) used to populate the offers.

#### Defined in

@mangrovedao/mangrove.js/src/kandel/coreKandelInstance.ts:822

___

### <a id="retractandwithdraw" name="retractandwithdraw"></a> retractAndWithdraw

▸ **retractAndWithdraw**(`params?`, `overrides?`): `Promise`<`ContractTransaction`[]\>

Retracts offers and withdraws tokens and provision

**`Remarks`**

This function or retractOffers should be used to retract all offers before changing the baseQuoteTickOffset, pricePoints, or stepSize using populate.
If offers are retracted over multiple transactions, then the chunks are retracted in opposite order from the populate function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | The parameters. |
| `params.startIndex?` | `number` | The start Kandel index of offers to retract. If not provided, then 0 is used. |
| `params.endIndex?` | `number` | The end index of offers to retract. This is exclusive of the offer the index 'endIndex'. If not provided, then the number of price points is used. |
| `params.withdrawFunds?` | `BigSource` | The amount of funds to withdraw in ethers. If not provided, then the entire provision on Mangrove is withdrawn. |
| `params.withdrawBaseAmount?` | `BigSource` | The amount of base to withdraw. If not provided, then the entire base balance on Kandel is withdrawn. |
| `params.withdrawQuoteAmount?` | `BigSource` | The amount of quote to withdraw. If not provided, then the entire quote balance on Kandel is withdrawn. |
| `params.recipientAddress?` | `string` | The address to withdraw the tokens to. If not provided, then the address of the signer is used. |
| `params.maxOffersInChunk?` | `number` | The maximum number of offers to include in a single retract transaction. If not provided, then KandelConfiguration is used. |
| `params.firstAskIndex?` | `number` | The index of the first ask in the distribution. It is used to determine the order in which to retract offers if multiple chunks are needed; if not provided, the midpoint between start and end is used. |
| `overrides` | `Overrides` | The ethers overrides to use when calling the retractAndWithdraw, and retractOffers functions. |

#### Returns

`Promise`<`ContractTransaction`[]\>

The transaction(s) used to retract the offers.

#### Defined in

@mangrovedao/mangrove.js/src/kandel/coreKandelInstance.ts:866

___

### <a id="retractoffers" name="retractoffers"></a> retractOffers

▸ **retractOffers**(`params?`, `overrides?`): `Promise`<`ContractTransaction`[]\>

Retracts offers

**`Remarks`**

This function or retractAndWithdraw should be used to retract all offers before changing the baseQuoteTickOffset, pricePoints, or stepSize using populate.
If offers are retracted over multiple transactions, then the chunks are retracted in opposite order from the populate function.
Note that when retracting an offer the dual should also be retracted, else it can be resurrected.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | The parameters. |
| `params.startIndex?` | `number` | The start Kandel index of offers to retract. If not provided, then 0 is used. |
| `params.endIndex?` | `number` | The end index of offers to retract. This is exclusive of the offer the index 'endIndex'. If not provided, then the number of price points is used. |
| `params.maxOffersInChunk?` | `number` | The maximum number of offers to include in a single retract transaction. If not provided, then KandelConfiguration is used. |
| `params.firstAskIndex?` | `number` | The index of the first ask in the distribution. It is used to determine the order in which to retract offers if multiple chunks are needed; if not provided, the midpoint between start and end is used. |
| `overrides` | `Overrides` | The ethers overrides to use when calling the retractOffers function. |

#### Returns

`Promise`<`ContractTransaction`[]\>

The transaction(s) used to retract the offers.

#### Defined in

@mangrovedao/mangrove.js/src/kandel/coreKandelInstance.ts:922

___

### <a id="retractofferchunks" name="retractofferchunks"></a> retractOfferChunks

▸ **retractOfferChunks**(`params`, `overrides`): `Promise`<{ `txs`: `ContractTransaction`[] ; `lastChunk`: { `from`: `number` ; `to`: `number`  }  }\>

Retracts offers

**`Dev`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | The parameters. |
| `params.retractParams` | `Object` | The parameters for retracting offers. |
| `params.retractParams.startIndex?` | `number` | - |
| `params.retractParams.endIndex?` | `number` | - |
| `params.retractParams.maxOffersInChunk?` | `number` | - |
| `params.retractParams.firstAskIndex?` | `number` | - |
| `params.skipLast` | `boolean` | Whether to skip the last chunk. This is used to allow the last chunk to be retracted while withdrawing funds. |
| `overrides` | `Overrides` | The ethers overrides to use when calling the retractOffers function. |

#### Returns

`Promise`<{ `txs`: `ContractTransaction`[] ; `lastChunk`: { `from`: `number` ; `to`: `number`  }  }\>

The transaction(s) used to retract the offers.

#### Defined in

@mangrovedao/mangrove.js/src/kandel/coreKandelInstance.ts:951

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
| `params.baseAmount?` | `BigSource` | The amount of base to withdraw. If not provided, then the entire base balance on Kandel is withdrawn. |
| `params.quoteAmount?` | `BigSource` | The amount of quote to withdraw. If not provided, then the entire quote balance on Kandel is withdrawn. |
| `params.recipientAddress?` | `string` | The address to withdraw the tokens to. If not provided, then the address of the signer is used. |
| `overrides` | `Overrides` | The ethers overrides to use when calling the retractAndWithdraw, and retractOffers functions. |

#### Returns

`Promise`<`ContractTransaction`\>

The transaction used to withdraw the offers.

#### Defined in

@mangrovedao/mangrove.js/src/kandel/coreKandelInstance.ts:1013

___

### <a id="setgasprice" name="setgasprice"></a> setGasprice

▸ **setGasprice**(`gasprice`, `overrides?`): `Promise`<`ContractTransaction`\>

Sets the gas price used when provisioning offers.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `gasprice` | `number` | The gas price to set. |
| `overrides` | `Overrides` | The ethers overrides to use when calling the setGasprice function. |

#### Returns

`Promise`<`ContractTransaction`\>

The transaction used to set the gas price.

#### Defined in

@mangrovedao/mangrove.js/src/kandel/coreKandelInstance.ts:1040

___

### <a id="setgasreq" name="setgasreq"></a> setGasreq

▸ **setGasreq**(`gasreq`, `overrides?`): `Promise`<`ContractTransaction`\>

Sets the gas required to execute a trade.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `gasreq` | `number` | The gas requirement to set. |
| `overrides` | `Overrides` | The ethers overrides to use when calling the setGasreq function. |

#### Returns

`Promise`<`ContractTransaction`\>

The transaction used to set the gas requirement.

#### Defined in

@mangrovedao/mangrove.js/src/kandel/coreKandelInstance.ts:1049

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• `Protected` **new CoreKandelInstance**(`params`)

Constructor.

**`See`**

create

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `Object` |
| `params.address` | `string` |
| `params.kandel` | `CoreKandel` |
| `params.market` | [`Market`](Market.md) |
| `params.distributionHelper` | `KandelDistributionHelper` |
| `params.offerLogic` | [`OfferLogic`](OfferLogic.md) |
| `params.configuration` | `KandelConfiguration` |
| `params.seeder` | [`KandelSeeder`](KandelSeeder.md) |
| `params.generalKandelDistributionGenerator` | `GeneralKandelDistributionGenerator` |

#### Defined in

@mangrovedao/mangrove.js/src/kandel/coreKandelInstance.ts:116
