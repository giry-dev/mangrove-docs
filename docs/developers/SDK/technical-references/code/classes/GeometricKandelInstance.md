---
id: "GeometricKandelInstance"
title: "Class: GeometricKandelInstance"
sidebar_label: "GeometricKandelInstance"
sidebar_position: 0
custom_edit_url: null
---

**`Title`**

A geometric distribution of bids and ask for geometric Kandel.

## Hierarchy

- [`CoreKandelInstance`](CoreKandelInstance.md)

  ↳ **`GeometricKandelInstance`**

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new GeometricKandelInstance**(`params`): [`GeometricKandelInstance`](GeometricKandelInstance.md)

Constructor. See [create](GeometricKandelInstance.md#create)

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `Object` |
| `params.address` | `string` |
| `params.kandel` | `CoreKandel` |
| `params.market` | [`Market`](Market.md) |
| `params.distributionHelper` | [`KandelDistributionHelper`](KandelDistributionHelper.md) |
| `params.offerLogic` | [`OfferLogic`](OfferLogic.md) |
| `params.configuration` | [`KandelConfiguration`](KandelConfiguration.md) |
| `params.seeder` | [`KandelSeeder`](KandelSeeder.md) |
| `params.generalKandelDistributionGenerator` | [`GeneralKandelDistributionGenerator`](GeneralKandelDistributionGenerator.md) |
| `params.geometricKandel` | `GeometricKandel` |
| `params.geometricGenerator` | [`GeometricKandelDistributionGenerator`](GeometricKandelDistributionGenerator.md) |
| `params.kandelStatus` | [`GeometricKandelStatus`](GeometricKandelStatus.md) |

#### Returns

[`GeometricKandelInstance`](GeometricKandelInstance.md)

#### Overrides

[CoreKandelInstance](CoreKandelInstance.md).[constructor](CoreKandelInstance.md#constructor)

#### Defined in

@mangrovedao/mangrove.js/src/kandel/geometricKandel/geometricKandelInstance.ts:95

## Properties

### <a id="kandel" name="kandel"></a> kandel

• **kandel**: `CoreKandel`

#### Inherited from

[CoreKandelInstance](CoreKandelInstance.md).[kandel](CoreKandelInstance.md#kandel)

#### Defined in

@mangrovedao/mangrove.js/src/kandel/coreKandelInstance.ts:58

___

### <a id="address" name="address"></a> address

• **address**: `string`

#### Inherited from

[CoreKandelInstance](CoreKandelInstance.md).[address](CoreKandelInstance.md#address)

#### Defined in

@mangrovedao/mangrove.js/src/kandel/coreKandelInstance.ts:59

___

### <a id="market" name="market"></a> market

• **market**: [`Market`](Market.md)

#### Inherited from

[CoreKandelInstance](CoreKandelInstance.md).[market](CoreKandelInstance.md#market)

#### Defined in

@mangrovedao/mangrove.js/src/kandel/coreKandelInstance.ts:60

___

### <a id="distributionhelper" name="distributionhelper"></a> distributionHelper

• **distributionHelper**: [`KandelDistributionHelper`](KandelDistributionHelper.md)

#### Inherited from

[CoreKandelInstance](CoreKandelInstance.md).[distributionHelper](CoreKandelInstance.md#distributionhelper)

#### Defined in

@mangrovedao/mangrove.js/src/kandel/coreKandelInstance.ts:61

___

### <a id="generalkandeldistributiongenerator" name="generalkandeldistributiongenerator"></a> generalKandelDistributionGenerator

• **generalKandelDistributionGenerator**: [`GeneralKandelDistributionGenerator`](GeneralKandelDistributionGenerator.md)

#### Inherited from

[CoreKandelInstance](CoreKandelInstance.md).[generalKandelDistributionGenerator](CoreKandelInstance.md#generalkandeldistributiongenerator)

#### Defined in

@mangrovedao/mangrove.js/src/kandel/coreKandelInstance.ts:62

___

### <a id="configuration" name="configuration"></a> configuration

• **configuration**: [`KandelConfiguration`](KandelConfiguration.md)

#### Inherited from

[CoreKandelInstance](CoreKandelInstance.md).[configuration](CoreKandelInstance.md#configuration)

#### Defined in

@mangrovedao/mangrove.js/src/kandel/coreKandelInstance.ts:63

___

### <a id="seeder" name="seeder"></a> seeder

• **seeder**: [`KandelSeeder`](KandelSeeder.md)

#### Inherited from

[CoreKandelInstance](CoreKandelInstance.md).[seeder](CoreKandelInstance.md#seeder)

#### Defined in

@mangrovedao/mangrove.js/src/kandel/coreKandelInstance.ts:64

___

### <a id="offerlogic" name="offerlogic"></a> offerLogic

• **offerLogic**: [`OfferLogic`](OfferLogic.md)

Expose logic relevant for all offer logic implementations, including Kandel.

#### Inherited from

[CoreKandelInstance](CoreKandelInstance.md).[offerLogic](CoreKandelInstance.md#offerlogic)

#### Defined in

@mangrovedao/mangrove.js/src/kandel/coreKandelInstance.ts:67

___

### <a id="geometrickandel" name="geometrickandel"></a> geometricKandel

• **geometricKandel**: `GeometricKandel`

#### Defined in

@mangrovedao/mangrove.js/src/kandel/geometricKandel/geometricKandelInstance.ts:47

___

### <a id="geometricgenerator" name="geometricgenerator"></a> geometricGenerator

• **geometricGenerator**: [`GeometricKandelDistributionGenerator`](GeometricKandelDistributionGenerator.md)

#### Defined in

@mangrovedao/mangrove.js/src/kandel/geometricKandel/geometricKandelInstance.ts:48

___

### <a id="geometricstatus" name="geometricstatus"></a> geometricStatus

• **geometricStatus**: [`GeometricKandelStatus`](GeometricKandelStatus.md)

#### Defined in

@mangrovedao/mangrove.js/src/kandel/geometricKandel/geometricKandelInstance.ts:49

## Methods

### <a id="createcoreparams" name="createcoreparams"></a> createCoreParams

▸ **createCoreParams**(`params`): `Promise`<\{ `address`: `string` = params.address; `market`: [`Market`](Market.md) ; `kandel`: `CoreKandel` ; `distributionHelper`: [`KandelDistributionHelper`](KandelDistributionHelper.md) ; `generalKandelDistributionHelper`: [`GeneralKandelDistributionHelper`](GeneralKandelDistributionHelper.md) ; `offerLogic`: [`OfferLogic`](OfferLogic.md) ; `configuration`: [`KandelConfiguration`](KandelConfiguration.md) ; `seeder`: [`KandelSeeder`](KandelSeeder.md) ; `generalKandelDistributionGenerator`: [`GeneralKandelDistributionGenerator`](GeneralKandelDistributionGenerator.md)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `Object` |
| `params.address` | `string` |
| `params.signer` | `Signer` |
| `params.market` | [`MarketOrMarketFactory`](../modules.md#marketormarketfactory) |

#### Returns

`Promise`<\{ `address`: `string` = params.address; `market`: [`Market`](Market.md) ; `kandel`: `CoreKandel` ; `distributionHelper`: [`KandelDistributionHelper`](KandelDistributionHelper.md) ; `generalKandelDistributionHelper`: [`GeneralKandelDistributionHelper`](GeneralKandelDistributionHelper.md) ; `offerLogic`: [`OfferLogic`](OfferLogic.md) ; `configuration`: [`KandelConfiguration`](KandelConfiguration.md) ; `seeder`: [`KandelSeeder`](KandelSeeder.md) ; `generalKandelDistributionGenerator`: [`GeneralKandelDistributionGenerator`](GeneralKandelDistributionGenerator.md)  }\>

#### Inherited from

[CoreKandelInstance](CoreKandelInstance.md).[createCoreParams](CoreKandelInstance.md#createcoreparams)

#### Defined in

@mangrovedao/mangrove.js/src/kandel/coreKandelInstance.ts:69

___

### <a id="getbase" name="getbase"></a> getBase

▸ **getBase**(): [`Token`](Token.md)

Gets the base of the market Kandel is making

#### Returns

[`Token`](Token.md)

#### Inherited from

[CoreKandelInstance](CoreKandelInstance.md).[getBase](CoreKandelInstance.md#getbase)

#### Defined in

@mangrovedao/mangrove.js/src/kandel/coreKandelInstance.ts:139

___

### <a id="getquote" name="getquote"></a> getQuote

▸ **getQuote**(): [`Token`](Token.md)

Gets the quote of the market Kandel is making

#### Returns

[`Token`](Token.md)

#### Inherited from

[CoreKandelInstance](CoreKandelInstance.md).[getQuote](CoreKandelInstance.md#getquote)

#### Defined in

@mangrovedao/mangrove.js/src/kandel/coreKandelInstance.ts:144

___

### <a id="gettickspacing" name="gettickspacing"></a> getTickSpacing

▸ **getTickSpacing**(): `number`

Gets the tick spacing of the market Kandel is making

#### Returns

`number`

#### Inherited from

[CoreKandelInstance](CoreKandelInstance.md).[getTickSpacing](CoreKandelInstance.md#gettickspacing)

#### Defined in

@mangrovedao/mangrove.js/src/kandel/coreKandelInstance.ts:149

___

### <a id="getreserveid" name="getreserveid"></a> getReserveId

▸ **getReserveId**(): `Promise`<`string`\>

Retrieves the identifier of this contract's reserve when using a router

#### Returns

`Promise`<`string`\>

#### Inherited from

[CoreKandelInstance](CoreKandelInstance.md).[getReserveId](CoreKandelInstance.md#getreserveid)

#### Defined in

@mangrovedao/mangrove.js/src/kandel/coreKandelInstance.ts:154

___

### <a id="getbalance" name="getbalance"></a> getBalance

▸ **getBalance**(`offerType`): `Promise`<`Big`\>

Retrieves the total balance available for this Kandel instance of the offered token for the given offer type.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `offerType` | [`BA`](../namespaces/Market-1.md#ba) | The offer type. |

#### Returns

`Promise`<`Big`\>

The balance of the asset.

**`Remarks`**

with liquidity sharing and a router, this will be shared among other Kandel instances.

#### Inherited from

[CoreKandelInstance](CoreKandelInstance.md).[getBalance](CoreKandelInstance.md#getbalance)

#### Defined in

@mangrovedao/mangrove.js/src/kandel/coreKandelInstance.ts:163

___

### <a id="getunpublished" name="getunpublished"></a> getUnpublished

▸ **getUnpublished**(`offerType`): `Promise`<`Big`\>

Retrieves the amount of liquidity that is available for the Kandel instance but not offered by the given offer type.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `offerType` | [`BA`](../namespaces/Market-1.md#ba) | The offer type. |

#### Returns

`Promise`<`Big`\>

the unpublished liquidity.

**`Remarks`**

with liquidity sharing and a router, the balance will be shared among other Kandel instances and the unpublished can be seen as a buffer.

#### Inherited from

[CoreKandelInstance](CoreKandelInstance.md).[getUnpublished](CoreKandelInstance.md#getunpublished)

#### Defined in

@mangrovedao/mangrove.js/src/kandel/coreKandelInstance.ts:173

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

#### Inherited from

[CoreKandelInstance](CoreKandelInstance.md).[getOfferedVolume](CoreKandelInstance.md#getofferedvolume)

#### Defined in

@mangrovedao/mangrove.js/src/kandel/coreKandelInstance.ts:182

___

### <a id="getparameters" name="getparameters"></a> getParameters

▸ **getParameters**(): `Promise`<[`KandelParameters`](../modules.md#kandelparameters)\>

Retrieves the current Kandel parameters

#### Returns

`Promise`<[`KandelParameters`](../modules.md#kandelparameters)\>

#### Inherited from

[CoreKandelInstance](CoreKandelInstance.md).[getParameters](CoreKandelInstance.md#getparameters)

#### Defined in

@mangrovedao/mangrove.js/src/kandel/coreKandelInstance.ts:188

___

### <a id="getparameterswithoverrides" name="getparameterswithoverrides"></a> getParametersWithOverrides

▸ **getParametersWithOverrides**(`parameters`, `distributionPricePoints?`, `distributionStepSize?`): `Promise`<[`KandelParameters`](../modules.md#kandelparameters)\>

Gets new Kandel parameters based on current and some overrides. If gasprice is not set, the current gasprice and cover factor is used.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parameters` | [`KandelParameterOverrides`](../modules.md#kandelparameteroverrides) | The Kandel parameters to override, those left out will keep their current value. |
| `distributionPricePoints?` | `number` | The number of price points of the Kandel distribution. |
| `distributionStepSize?` | `number` | The step size for the Kandel distribution. |

#### Returns

`Promise`<[`KandelParameters`](../modules.md#kandelparameters)\>

The new Kandel parameters.

#### Inherited from

[CoreKandelInstance](CoreKandelInstance.md).[getParametersWithOverrides](CoreKandelInstance.md#getparameterswithoverrides)

#### Defined in

@mangrovedao/mangrove.js/src/kandel/coreKandelInstance.ts:204

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

#### Inherited from

[CoreKandelInstance](CoreKandelInstance.md).[getOutboundToken](CoreKandelInstance.md#getoutboundtoken)

#### Defined in

@mangrovedao/mangrove.js/src/kandel/coreKandelInstance.ts:280

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

#### Inherited from

[CoreKandelInstance](CoreKandelInstance.md).[getOfferIdAtIndex](CoreKandelInstance.md#getofferidatindex)

#### Defined in

@mangrovedao/mangrove.js/src/kandel/coreKandelInstance.ts:289

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

#### Inherited from

[CoreKandelInstance](CoreKandelInstance.md).[getIndexOfOfferId](CoreKandelInstance.md#getindexofofferid)

#### Defined in

@mangrovedao/mangrove.js/src/kandel/coreKandelInstance.ts:300

___

### <a id="getrawdistribution" name="getrawdistribution"></a> getRawDistribution

▸ **getRawDistribution**(`distribution`): `DistributionStruct`

Convert public Kandel distribution to internal representation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `distribution` | [`OfferDistribution`](../modules.md#offerdistribution) | The Kandel distribution. |

#### Returns

`DistributionStruct`

The internal representation of the Kandel distribution.

#### Inherited from

[CoreKandelInstance](CoreKandelInstance.md).[getRawDistribution](CoreKandelInstance.md#getrawdistribution)

#### Defined in

@mangrovedao/mangrove.js/src/kandel/coreKandelInstance.ts:310

___

### <a id="getofferids" name="getofferids"></a> getOfferIds

▸ **getOfferIds**(): `Promise`<\{ `bids`: \{ `offerId`: `number` ; `index`: `number`  }[] ; `asks`: \{ `offerId`: `number` ; `index`: `number`  }[]  }\>

Retrieves the Mangrove offer ids for all offers.

#### Returns

`Promise`<\{ `bids`: \{ `offerId`: `number` ; `index`: `number`  }[] ; `asks`: \{ `offerId`: `number` ; `index`: `number`  }[]  }\>

The Mangrove offer ids for all offers along with their offer type and Kandel index.

#### Inherited from

[CoreKandelInstance](CoreKandelInstance.md).[getOfferIds](CoreKandelInstance.md#getofferids)

#### Defined in

@mangrovedao/mangrove.js/src/kandel/coreKandelInstance.ts:324

___

### <a id="getoffers" name="getoffers"></a> getOffers

▸ **getOffers**(): `Promise`<\{ `bids`: \{ `index`: `number` = x.index; `live`: `boolean` ; `id`: `number` ; `gasprice`: `number` ; `maker`: `string` ; `gasreq`: `number` ; `tick`: `number` ; `price`: `Big` ; `gives`: `Big` ; `wants`: `Big` ; `volume`: `Big` ; `nextAtTick`: `undefined` \| `number` ; `prevAtTick`: `undefined` \| `number` ; `gasbase`: `number`  }[] ; `asks`: \{ `index`: `number` = x.index; `live`: `boolean` ; `id`: `number` ; `gasprice`: `number` ; `maker`: `string` ; `gasreq`: `number` ; `tick`: `number` ; `price`: `Big` ; `gives`: `Big` ; `wants`: `Big` ; `volume`: `Big` ; `nextAtTick`: `undefined` \| `number` ; `prevAtTick`: `undefined` \| `number` ; `gasbase`: `number`  }[]  }\>

Retrieves all offers for the Kandel instance by querying the market.

#### Returns

`Promise`<\{ `bids`: \{ `index`: `number` = x.index; `live`: `boolean` ; `id`: `number` ; `gasprice`: `number` ; `maker`: `string` ; `gasreq`: `number` ; `tick`: `number` ; `price`: `Big` ; `gives`: `Big` ; `wants`: `Big` ; `volume`: `Big` ; `nextAtTick`: `undefined` \| `number` ; `prevAtTick`: `undefined` \| `number` ; `gasbase`: `number`  }[] ; `asks`: \{ `index`: `number` = x.index; `live`: `boolean` ; `id`: `number` ; `gasprice`: `number` ; `maker`: `string` ; `gasreq`: `number` ; `tick`: `number` ; `price`: `Big` ; `gives`: `Big` ; `wants`: `Big` ; `volume`: `Big` ; `nextAtTick`: `undefined` \| `number` ; `prevAtTick`: `undefined` \| `number` ; `gasbase`: `number`  }[]  }\>

#### Inherited from

[CoreKandelInstance](CoreKandelInstance.md).[getOffers](CoreKandelInstance.md#getoffers)

#### Defined in

@mangrovedao/mangrove.js/src/kandel/coreKandelInstance.ts:342

___

### <a id="createdistributionwithoffers" name="createdistributionwithoffers"></a> createDistributionWithOffers

▸ **createDistributionWithOffers**(`params`): `Promise`<[`GeneralKandelDistribution`](GeneralKandelDistribution.md)\>

Creates a distribution based on an explicit set of offers based on the Kandel parameters.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | The parameters for the distribution. |
| `params.explicitOffers` | `Object` | The explicit offers to use. |
| `params.explicitOffers.bids` | [`OffersWithGives`](../modules.md#offerswithgives) | - |
| `params.explicitOffers.asks` | [`OffersWithGives`](../modules.md#offerswithgives) | - |

#### Returns

`Promise`<[`GeneralKandelDistribution`](GeneralKandelDistribution.md)\>

The new distribution.

#### Inherited from

[CoreKandelInstance](CoreKandelInstance.md).[createDistributionWithOffers](CoreKandelInstance.md#createdistributionwithoffers)

#### Defined in

@mangrovedao/mangrove.js/src/kandel/coreKandelInstance.ts:356

___

### <a id="getminimumvolume" name="getminimumvolume"></a> getMinimumVolume

▸ **getMinimumVolume**(`offerType`): `Promise`<`Big`\>

Retrieves the minimum volume for a given offer type.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `offerType` | [`BA`](../namespaces/Market-1.md#ba) | The offer type to get the minimum volume for. |

#### Returns

`Promise`<`Big`\>

The minimum volume for the given offer type.

**`See`**

[KandelSeeder.getMinimumVolumeForGasreq](KandelSeeder.md#getminimumvolumeforgasreq) for parameterized function.

#### Inherited from

[CoreKandelInstance](CoreKandelInstance.md).[getMinimumVolume](CoreKandelInstance.md#getminimumvolume)

#### Defined in

@mangrovedao/mangrove.js/src/kandel/coreKandelInstance.ts:377

___

### <a id="getminimumoroverrides" name="getminimumoroverrides"></a> getMinimumOrOverrides

▸ **getMinimumOrOverrides**(`params`): `Promise`<\{ `minimumBasePerOffer`: `Big` ; `minimumQuotePerOffer`: `Big`  }\>

Retrieves the minimum volumes for base and quote, or the provided overrides.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | The parameters for the minimum volumes. |
| `params.minimumBasePerOffer?` | `BigSource` | The minimum base token volume per offer. If not provided, then the minimum base token volume is used. |
| `params.minimumQuotePerOffer?` | `BigSource` | The minimum quote token volume per offer. If not provided, then the minimum quote token volume is used. |

#### Returns

`Promise`<\{ `minimumBasePerOffer`: `Big` ; `minimumQuotePerOffer`: `Big`  }\>

The minimum volumes for base and quote, or the provided overrides.

#### Inherited from

[CoreKandelInstance](CoreKandelInstance.md).[getMinimumOrOverrides](CoreKandelInstance.md#getminimumoroverrides)

#### Defined in

@mangrovedao/mangrove.js/src/kandel/coreKandelInstance.ts:391

___

### <a id="calculatedistributionwithuniformlychangedvolume" name="calculatedistributionwithuniformlychangedvolume"></a> calculateDistributionWithUniformlyChangedVolume

▸ **calculateDistributionWithUniformlyChangedVolume**(`params`): `Promise`<\{ `distribution`: [`GeneralKandelDistribution`](GeneralKandelDistribution.md) ; `totalBaseChange`: `Big` ; `totalQuoteChange`: `Big`  }\>

Calculates a new distribution based on the provided offers and deltas.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | The parameters for the new distribution. |
| `params.explicitOffers` | `Object` | The explicit offers to use. |
| `params.explicitOffers.bids` | [`OffersWithGives`](../modules.md#offerswithgives) | - |
| `params.explicitOffers.asks` | [`OffersWithGives`](../modules.md#offerswithgives) | - |
| `params.baseDelta?` | `BigSource` | The delta to apply to the base token volume. If not provided, then the base token volume is unchanged. |
| `params.quoteDelta?` | `BigSource` | The delta to apply to the quote token volume. If not provided, then the quote token volume is unchanged. |
| `params.minimumBasePerOffer?` | `BigSource` | The minimum base token volume per offer. If not provided, then the minimum base token volume is used. |
| `params.minimumQuotePerOffer?` | `BigSource` | The minimum quote token volume per offer. If not provided, then the minimum quote token volume is used. |

#### Returns

`Promise`<\{ `distribution`: [`GeneralKandelDistribution`](GeneralKandelDistribution.md) ; `totalBaseChange`: `Big` ; `totalQuoteChange`: `Big`  }\>

The new distribution for the live offers, dead offers are not included.

**`Remarks`**

The base and quote deltas are applied uniformly to all offers, except during decrease where offers are kept above their minimum volume.

#### Inherited from

[CoreKandelInstance](CoreKandelInstance.md).[calculateDistributionWithUniformlyChangedVolume](CoreKandelInstance.md#calculatedistributionwithuniformlychangedvolume)

#### Defined in

@mangrovedao/mangrove.js/src/kandel/coreKandelInstance.ts:415

___

### <a id="approveifhigher" name="approveifhigher"></a> approveIfHigher

▸ **approveIfHigher**(`baseArgs?`, `quoteArgs?`): `Promise`<(`undefined` \| `ContractTransaction`)[]\>

Approves the Kandel instance for transferring from signer to itself if allowance is not already high enough.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `baseArgs` | [`ApproveArgs`](../modules.md#approveargs) | The arguments for approving the base token. If not provided, then infinite approval is used. |
| `quoteArgs` | [`ApproveArgs`](../modules.md#approveargs) | The arguments for approving the quote token. If not provided, then infinite approval is used. |

#### Returns

`Promise`<(`undefined` \| `ContractTransaction`)[]\>

#### Inherited from

[CoreKandelInstance](CoreKandelInstance.md).[approveIfHigher](CoreKandelInstance.md#approveifhigher)

#### Defined in

@mangrovedao/mangrove.js/src/kandel/coreKandelInstance.ts:442

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

#### Inherited from

[CoreKandelInstance](CoreKandelInstance.md).[deposit](CoreKandelInstance.md#deposit)

#### Defined in

@mangrovedao/mangrove.js/src/kandel/coreKandelInstance.ts:458

___

### <a id="getmostspecificconfig" name="getmostspecificconfig"></a> getMostSpecificConfig

▸ **getMostSpecificConfig**(): [`KandelNetworkConfiguration`](../modules.md#kandelnetworkconfiguration) & `Partial`<[`KandelMarketConfiguration`](../modules.md#kandelmarketconfiguration)\>

Gets the most specific available default configuration for Kandel instances.

#### Returns

[`KandelNetworkConfiguration`](../modules.md#kandelnetworkconfiguration) & `Partial`<[`KandelMarketConfiguration`](../modules.md#kandelmarketconfiguration)\>

#### Inherited from

[CoreKandelInstance](CoreKandelInstance.md).[getMostSpecificConfig](CoreKandelInstance.md#getmostspecificconfig)

#### Defined in

@mangrovedao/mangrove.js/src/kandel/coreKandelInstance.ts:473

___

### <a id="getdistributionchunks" name="getdistributionchunks"></a> getDistributionChunks

▸ **getDistributionChunks**(`params`): `Promise`<[`OfferDistribution`](../modules.md#offerdistribution)[]\>

Splits the distribution into chunks

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | The parameters. |
| `params.distribution` | [`GeneralKandelDistribution`](GeneralKandelDistribution.md) | The distribution to split. |
| `params.maxOffersInChunk?` | `number` | The maximum number of offers in a chunk. If not provided, then KandelConfiguration is used. |

#### Returns

`Promise`<[`OfferDistribution`](../modules.md#offerdistribution)[]\>

The distribution chunks.

#### Inherited from

[CoreKandelInstance](CoreKandelInstance.md).[getDistributionChunks](CoreKandelInstance.md#getdistributionchunks)

#### Defined in

@mangrovedao/mangrove.js/src/kandel/coreKandelInstance.ts:488

___

### <a id="getgasreqandgasprice" name="getgasreqandgasprice"></a> getGasreqAndGasprice

▸ **getGasreqAndGasprice**(`gasreq?`, `gasprice?`): `Promise`<\{ `gasreq`: `number` ; `gasprice`: `number`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `gasreq?` | `number` |
| `gasprice?` | `number` |

#### Returns

`Promise`<\{ `gasreq`: `number` ; `gasprice`: `number`  }\>

#### Inherited from

[CoreKandelInstance](CoreKandelInstance.md).[getGasreqAndGasprice](CoreKandelInstance.md#getgasreqandgasprice)

#### Defined in

@mangrovedao/mangrove.js/src/kandel/coreKandelInstance.ts:500

___

### <a id="getrequiredprovision" name="getrequiredprovision"></a> getRequiredProvision

▸ **getRequiredProvision**(`params`): `Promise`<`Big`\>

Determines the required provision for the offers in the distribution or the supplied offer count.

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

**`Remarks`**

Existing locked provision or balance on Mangrove is not accounted for.

#### Inherited from

[CoreKandelInstance](CoreKandelInstance.md).[getRequiredProvision](CoreKandelInstance.md#getrequiredprovision)

#### Defined in

@mangrovedao/mangrove.js/src/kandel/coreKandelInstance.ts:521

___

### <a id="getlockedprovision" name="getlockedprovision"></a> getLockedProvision

▸ **getLockedProvision**(): `Promise`<`Big`\>

Calculates the provision locked by existing offers based on the given parameters

#### Returns

`Promise`<`Big`\>

the locked provision, in ethers.

#### Inherited from

[CoreKandelInstance](CoreKandelInstance.md).[getLockedProvision](CoreKandelInstance.md#getlockedprovision)

#### Defined in

@mangrovedao/mangrove.js/src/kandel/coreKandelInstance.ts:562

___

### <a id="getlockedprovisionfromoffers" name="getlockedprovisionfromoffers"></a> getLockedProvisionFromOffers

▸ **getLockedProvisionFromOffers**(`existingOffers`): `Big`

Calculates the provision locked for a set of offers based on the given parameters

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `existingOffers` | `Object` | the offers to calculate provision for. |
| `existingOffers.bids` | [`OfferProvisionParams`](../namespaces/Mangrove-1.md#offerprovisionparams)[] | - |
| `existingOffers.asks` | [`OfferProvisionParams`](../namespaces/Mangrove-1.md#offerprovisionparams)[] | - |

#### Returns

`Big`

the locked provision, in ethers.

#### Inherited from

[CoreKandelInstance](CoreKandelInstance.md).[getLockedProvisionFromOffers](CoreKandelInstance.md#getlockedprovisionfromoffers)

#### Defined in

@mangrovedao/mangrove.js/src/kandel/coreKandelInstance.ts:571

___

### <a id="getmissingprovision" name="getmissingprovision"></a> getMissingProvision

▸ **getMissingProvision**(`params`): `Promise`<`Big`\>

Gets the missing provision based on provision already available on Mangrove, potentially locked by existing offers. It assumes all locked provision will be made available via deprovision or due to offers being replaced.

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

**`Remarks`**

If neither params.distribution nor params.offerCount is provided, then the current number of price points is used.

#### Inherited from

[CoreKandelInstance](CoreKandelInstance.md).[getMissingProvision](CoreKandelInstance.md#getmissingprovision)

#### Defined in

@mangrovedao/mangrove.js/src/kandel/coreKandelInstance.ts:590

___

### <a id="getmissingprovisionfromoffers" name="getmissingprovisionfromoffers"></a> getMissingProvisionFromOffers

▸ **getMissingProvisionFromOffers**(`params`, `existingOffers`): `Promise`<`Big`\>

Gets the missing provision based on provision already available on Mangrove, potentially locked by existing offers, and the new distribution requiring provision. It assumes all the provision locked in the existingOffers will be made available via deprovision or due to offers being updated.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | The parameters for the required provision. |
| `params.gasreq?` | `number` | An optional new gas required to execute a trade. Default is retrieved from Kandel parameters. |
| `params.gasprice?` | `number` | An optional new gas price to calculate provision for. Default is retrieved from Kandel parameters. |
| `params.distribution?` | [`KandelDistribution`](KandelDistribution.md) | The distribution to calculate the provision for. Optional. |
| `params.bidCount?` | `number` | The number of bids to calculate the provision for. Optional. |
| `params.askCount?` | `number` | The number of asks to calculate the provision for. Optional. |
| `existingOffers` | `Object` | the offers with potential locked provision. |
| `existingOffers.bids` | [`OfferProvisionParams`](../namespaces/Mangrove-1.md#offerprovisionparams)[] | - |
| `existingOffers.asks` | [`OfferProvisionParams`](../namespaces/Mangrove-1.md#offerprovisionparams)[] | - |

#### Returns

`Promise`<`Big`\>

the additional required provision, in ethers.

**`Remarks`**

If neither distribution nor askCount or bidCount is provided, then the current number of price points less the stepSize is used.

#### Inherited from

[CoreKandelInstance](CoreKandelInstance.md).[getMissingProvisionFromOffers](CoreKandelInstance.md#getmissingprovisionfromoffers)

#### Defined in

@mangrovedao/mangrove.js/src/kandel/coreKandelInstance.ts:612

___

### <a id="getrawparametersforpopulate" name="getrawparametersforpopulate"></a> getRawParametersForPopulate

▸ **getRawParametersForPopulate**(`params`, `overrides?`): `Promise`<\{ `overridesWithFunds`: `PayableOverrides` ; `rawParameters`: [`KandelParameters`](../modules.md#kandelparameters) ; `rawDepositBaseAmount`: `BigNumber` ; `rawDepositQuoteAmount`: `BigNumber`  }\>

Gets the raw parameters for invoking populate

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | The parameters for populating the offers. |
| `params.distribution?` | [`KandelDistribution`](KandelDistribution.md) | The distribution of offers to populate. |
| `params.parameters?` | [`KandelParameterOverrides`](../modules.md#kandelparameteroverrides) | The parameters to set leave out values to keep their current value. If gasprice is not set, the current gasprice and cover factor is used. |
| `params.depositBaseAmount?` | `BigSource` | The amount of base to deposit. If not provided, then no base is deposited. |
| `params.depositQuoteAmount?` | `BigSource` | The amount of quote to deposit. If not provided, then no quote is deposited. |
| `params.funds?` | `BigSource` | The amount of funds to provision. If not provided, then the required funds are provisioned according to [getRequiredProvision](CoreKandelInstance.md#getrequiredprovision). |
| `overrides` | `Overrides` | The ethers overrides to use when calling the populate and populateChunk functions. |

#### Returns

`Promise`<\{ `overridesWithFunds`: `PayableOverrides` ; `rawParameters`: [`KandelParameters`](../modules.md#kandelparameters) ; `rawDepositBaseAmount`: `BigNumber` ; `rawDepositQuoteAmount`: `BigNumber`  }\>

The raw parameters.

#### Inherited from

[CoreKandelInstance](CoreKandelInstance.md).[getRawParametersForPopulate](CoreKandelInstance.md#getrawparametersforpopulate)

#### Defined in

@mangrovedao/mangrove.js/src/kandel/coreKandelInstance.ts:663

___

### <a id="populategeneraldistribution" name="populategeneraldistribution"></a> populateGeneralDistribution

▸ **populateGeneralDistribution**(`params`, `overrides?`): `Promise`<`ContractTransaction`[]\>

Populates the offers in the distribution for the Kandel instance and sets parameters.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | The parameters for populating the offers. |
| `params.distribution?` | [`GeneralKandelDistribution`](GeneralKandelDistribution.md) | The distribution of offers to populate. Can be undefined to allow setting parameters and depositing in a single transaction. |
| `params.parameters?` | [`KandelParameterOverrides`](../modules.md#kandelparameteroverrides) | The parameters to set leave out values to keep their current value. If gasprice is not set, the current gasprice and cover factor is used. |
| `params.depositBaseAmount?` | `BigSource` | The amount of base to deposit. If not provided, then no base is deposited. |
| `params.depositQuoteAmount?` | `BigSource` | The amount of quote to deposit. If not provided, then no quote is deposited. |
| `params.funds?` | `BigSource` | The amount of funds to provision. If not provided, then the required funds are provisioned according to [getRequiredProvision](CoreKandelInstance.md#getrequiredprovision). (if a distribution is provided) |
| `params.maxOffersInChunk?` | `number` | The maximum number of offers to include in a single populate transaction. If not provided, then KandelConfiguration is used. |
| `overrides` | `Overrides` | The ethers overrides to use when calling the populate and populateChunk functions. |

#### Returns

`Promise`<`ContractTransaction`[]\>

The transaction(s) used to populate the offers.

**`Remarks`**

If this function is invoked with a different distribution, e.g., due to new pricePoints, or stepSize, then first retract all offers; otherwise, Kandel will enter an inconsistent state. This function does not set the baseQuoteTickOffset for geometric Kandels.

#### Inherited from

[CoreKandelInstance](CoreKandelInstance.md).[populateGeneralDistribution](CoreKandelInstance.md#populategeneraldistribution)

#### Defined in

@mangrovedao/mangrove.js/src/kandel/coreKandelInstance.ts:719

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
| `params.distributionChunks?` | [`OfferDistribution`](../modules.md#offerdistribution)[] | Home-grown distribution chunks to populate (can be used to populate, e.g., a single offer) - takes precedence over distribution. Take care to ensure duals are included or already populated with correct parameters. |
| `overrides` | `Overrides` | The ethers overrides to use when calling the populateChunk function. |

#### Returns

`Promise`<`ContractTransaction`[]\>

The transaction(s) used to populate the offers.

#### Inherited from

[CoreKandelInstance](CoreKandelInstance.md).[populateGeneralChunks](CoreKandelInstance.md#populategeneralchunks)

#### Defined in

@mangrovedao/mangrove.js/src/kandel/coreKandelInstance.ts:779

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

#### Inherited from

[CoreKandelInstance](CoreKandelInstance.md).[populateRawChunks](CoreKandelInstance.md#populaterawchunks)

#### Defined in

@mangrovedao/mangrove.js/src/kandel/coreKandelInstance.ts:810

___

### <a id="retractandwithdraw" name="retractandwithdraw"></a> retractAndWithdraw

▸ **retractAndWithdraw**(`params?`, `overrides?`): `Promise`<`ContractTransaction`[]\>

Retracts offers and withdraws tokens and provision

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

**`Remarks`**

This function or retractOffers should be used to retract all offers before changing the baseQuoteTickOffset, pricePoints, or stepSize using populate.
If offers are retracted over multiple transactions, then the chunks are retracted in opposite order from the populate function.

#### Inherited from

[CoreKandelInstance](CoreKandelInstance.md).[retractAndWithdraw](CoreKandelInstance.md#retractandwithdraw)

#### Defined in

@mangrovedao/mangrove.js/src/kandel/coreKandelInstance.ts:854

___

### <a id="retractoffers" name="retractoffers"></a> retractOffers

▸ **retractOffers**(`params?`, `overrides?`): `Promise`<`ContractTransaction`[]\>

Retracts offers

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

**`Remarks`**

This function or retractAndWithdraw should be used to retract all offers before changing the baseQuoteTickOffset, pricePoints, or stepSize using populate.
If offers are retracted over multiple transactions, then the chunks are retracted in opposite order from the populate function.
Note that when retracting an offer the dual should also be retracted, else it can be resurrected.

#### Inherited from

[CoreKandelInstance](CoreKandelInstance.md).[retractOffers](CoreKandelInstance.md#retractoffers)

#### Defined in

@mangrovedao/mangrove.js/src/kandel/coreKandelInstance.ts:910

___

### <a id="retractofferchunks" name="retractofferchunks"></a> retractOfferChunks

▸ **retractOfferChunks**(`params`, `overrides`): `Promise`<\{ `txs`: `ContractTransaction`[] ; `lastChunk`: \{ `from`: `number` ; `to`: `number`  }  }\>

Retracts offers

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | The parameters. |
| `params.retractParams` | `Object` | The parameters for retracting offers. See [retractOffers](CoreKandelInstance.md#retractoffers) |
| `params.retractParams.startIndex?` | `number` | - |
| `params.retractParams.endIndex?` | `number` | - |
| `params.retractParams.maxOffersInChunk?` | `number` | - |
| `params.retractParams.firstAskIndex?` | `number` | - |
| `params.skipLast` | `boolean` | Whether to skip the last chunk. This is used to allow the last chunk to be retracted while withdrawing funds. |
| `overrides` | `Overrides` | The ethers overrides to use when calling the retractOffers function. |

#### Returns

`Promise`<\{ `txs`: `ContractTransaction`[] ; `lastChunk`: \{ `from`: `number` ; `to`: `number`  }  }\>

The transaction(s) used to retract the offers.

**`Dev`**

#### Inherited from

[CoreKandelInstance](CoreKandelInstance.md).[retractOfferChunks](CoreKandelInstance.md#retractofferchunks)

#### Defined in

@mangrovedao/mangrove.js/src/kandel/coreKandelInstance.ts:935

___

### <a id="withdraw" name="withdraw"></a> withdraw

▸ **withdraw**(`params?`, `overrides?`): `Promise`<`ContractTransaction`\>

Withdraws tokens from the Kandel instance.

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

**`Remarks`**

it is up to the caller to make sure there are still enough funds for live offers.

#### Inherited from

[CoreKandelInstance](CoreKandelInstance.md).[withdraw](CoreKandelInstance.md#withdraw)

#### Defined in

@mangrovedao/mangrove.js/src/kandel/coreKandelInstance.ts:997

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

#### Inherited from

[CoreKandelInstance](CoreKandelInstance.md).[setGasprice](CoreKandelInstance.md#setgasprice)

#### Defined in

@mangrovedao/mangrove.js/src/kandel/coreKandelInstance.ts:1024

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

#### Inherited from

[CoreKandelInstance](CoreKandelInstance.md).[setGasreq](CoreKandelInstance.md#setgasreq)

#### Defined in

@mangrovedao/mangrove.js/src/kandel/coreKandelInstance.ts:1033

___

### <a id="create" name="create"></a> create

▸ **create**(`params`): `Promise`<[`GeometricKandelInstance`](GeometricKandelInstance.md)\>

Creates a GeometricKandelInstance object to interact with a Kandel strategy on Mangrove.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | The parameters used to create an instance. |
| `params.address` | `string` | The address of the Kandel instance. |
| `params.signer` | `Signer` | The signer used to interact with the Kandel instance. |
| `params.market` | [`MarketOrMarketFactory`](../modules.md#marketormarketfactory) | The market used by the Kandel instance or a factory function to create the market. |

#### Returns

`Promise`<[`GeometricKandelInstance`](GeometricKandelInstance.md)\>

A new GeometricKandelInstance.

**`Dev`**

If a factory function is provided for the market, then remember to disconnect market when no longer needed.

#### Defined in

@mangrovedao/mangrove.js/src/kandel/geometricKandel/geometricKandelInstance.ts:59

___

### <a id="getbasequotetickoffset" name="getbasequotetickoffset"></a> getBaseQuoteTickOffset

▸ **getBaseQuoteTickOffset**(): `Promise`<\{ `baseQuoteTickOffset`: `number` ; `priceRatio`: `Big`  }\>

Gets the base quote tick offset stored on the contract and the equivalent price ratio.

#### Returns

`Promise`<\{ `baseQuoteTickOffset`: `number` ; `priceRatio`: `Big`  }\>

#### Defined in

@mangrovedao/mangrove.js/src/kandel/geometricKandel/geometricKandelInstance.ts:115

___

### <a id="getgeometricparameterswithoverrides" name="getgeometricparameterswithoverrides"></a> getGeometricParametersWithOverrides

▸ **getGeometricParametersWithOverrides**(`parameters`, `distributionBaseQuoteTickOffset?`): `Promise`<\{ `currentBaseQuoteTickOffset`: `number` ; `newBaseQuoteTickOffset`: `number`  }\>

Gets new geometric Kandel parameters based on current and some overrides.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parameters` | [`GeometricKandelParameterOverrides`](../modules.md#geometrickandelparameteroverrides) | The Geometric Kandel parameters to override, those left out will keep their current value. |
| `distributionBaseQuoteTickOffset?` | `number` | The number of ticks to jump between two price points - this gives the geometric progression. |

#### Returns

`Promise`<\{ `currentBaseQuoteTickOffset`: `number` ; `newBaseQuoteTickOffset`: `number`  }\>

The new and current geometric Kandel parameters.

**`Remarks`**

base quote tick offset provided in the parameters must match a provided distribution.

#### Defined in

@mangrovedao/mangrove.js/src/kandel/geometricKandel/geometricKandelInstance.ts:134

___

### <a id="getofferstatuses" name="getofferstatuses"></a> getOfferStatuses

▸ **getOfferStatuses**(`midPrice`): `Promise`<[`Statuses`](../modules.md#statuses)\>

Retrieves all offers from the market and determines their status.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `midPrice` | `BigSource` | The current mid price of the market used to discern expected bids from asks. |

#### Returns

`Promise`<[`Statuses`](../modules.md#statuses)\>

The status of all offers.

#### Defined in

@mangrovedao/mangrove.js/src/kandel/geometricKandel/geometricKandelInstance.ts:176

___

### <a id="getofferstatusfromoffers" name="getofferstatusfromoffers"></a> getOfferStatusFromOffers

▸ **getOfferStatusFromOffers**(`params`): `Promise`<[`Statuses`](../modules.md#statuses)\>

Determines the status of the Kandel instance based on the passed in offers.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | The parameters to use to determine the status. |
| `params.midPrice` | `BigSource` | The current mid price of the market used to discern expected bids from asks. |
| `params.offers` | `Object` | The offers used as a basis for determining the status. This should include all live and dead offers. |
| `params.offers.bids` | [`OffersWithLiveness`](../modules.md#offerswithliveness) | - |
| `params.offers.asks` | [`OffersWithLiveness`](../modules.md#offerswithliveness) | - |

#### Returns

`Promise`<[`Statuses`](../modules.md#statuses)\>

The status of the Kandel instance.

**`Remarks`**

The expected prices is determined by extrapolating from a live offer closest to the mid price.
Offers are expected to be live bids below the mid price and asks above.
Offers are expected to be dead near the mid price due to the step size between the live bid and ask.

#### Defined in

@mangrovedao/mangrove.js/src/kandel/geometricKandel/geometricKandelInstance.ts:191

___

### <a id="getminimumvolumeforindex" name="getminimumvolumeforindex"></a> getMinimumVolumeForIndex

▸ **getMinimumVolumeForIndex**(`params`): `Promise`<`Big`\>

Retrieves the minimum volume for a given offer type at the given index.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | The parameters for the minimum volume. |
| `params.offerType` | [`BA`](../namespaces/Market-1.md#ba) | The offer type to get the minimum volume for. |
| `params.index` | `number` | The Kandel index. |
| `params.tick` | `number` | The tick at the index. |
| `params.minimumBasePerOffer?` | `BigSource` | The minimum base token volume per offer. If not provided, then the minimum base token volume is used. |
| `params.minimumQuotePerOffer?` | `BigSource` | The minimum quote token volume per offer. If not provided, then the minimum quote token volume is used. |

#### Returns

`Promise`<`Big`\>

The minimum volume for the given offer type.

#### Defined in

@mangrovedao/mangrove.js/src/kandel/geometricKandel/geometricKandelInstance.ts:216

___

### <a id="calculateuniformdistributionfromminprice" name="calculateuniformdistributionfromminprice"></a> calculateUniformDistributionFromMinPrice

▸ **calculateUniformDistributionFromMinPrice**(`params`): `Promise`<[`GeometricKandelDistribution`](GeometricKandelDistribution.md)\>

Calculates a new uniform distribution based on the available base and quote balance and min price and mid price.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | The parameters for the new distribution. |
| `params.midPrice` | `BigSource` | The current mid price of the market used to discern expected bids from asks. |
| `params.minPrice` | `BigSource` | The minimum price to generate the distribution from; can be retrieved from the status from [getOfferStatuses](GeometricKandelInstance.md#getofferstatuses) or [getOfferStatusFromOffers](GeometricKandelInstance.md#getofferstatusfromoffers) . |
| `params.generateFromMid` | `boolean` | Whether to generate the distribution outwards from the midPrice or upwards from the minPrice. |
| `params.minimumBasePerOffer?` | `BigSource` | The minimum base token volume per offer. If not provided, then the minimum base token volume is used. |
| `params.minimumQuotePerOffer?` | `BigSource` | The minimum quote token volume per offer. If not provided, then the minimum quote token volume is used. |

#### Returns

`Promise`<[`GeometricKandelDistribution`](GeometricKandelDistribution.md)\>

The new distribution, which can be used to re-populate the Kandel instance with this exact distribution.

#### Defined in

@mangrovedao/mangrove.js/src/kandel/geometricKandel/geometricKandelInstance.ts:248

___

### <a id="populategeometricdistribution" name="populategeometricdistribution"></a> populateGeometricDistribution

▸ **populateGeometricDistribution**(`params`, `overrides?`): `Promise`<`ContractTransaction`[]\>

Populates the offers in the distribution for the Kandel instance and sets parameters.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | The parameters for populating the offers. |
| `params.distribution` | [`GeometricKandelDistribution`](GeometricKandelDistribution.md) | The distribution of offers to populate. |
| `params.parameters?` | [`KandelParameterOverrides`](../modules.md#kandelparameteroverrides) | The parameters to set leave out values to keep their current value. If gasprice is not set, the current gasprice and cover factor is used. |
| `params.geometricParameters?` | [`GeometricKandelParameterOverrides`](../modules.md#geometrickandelparameteroverrides) | The geometric parameters to set leave out values to keep their current value. |
| `params.depositBaseAmount?` | `BigSource` | The amount of base to deposit. If not provided, then no base is deposited. |
| `params.depositQuoteAmount?` | `BigSource` | The amount of quote to deposit. If not provided, then no quote is deposited. |
| `params.funds?` | `BigSource` | The amount of funds to provision. If not provided, then the required funds are provisioned according to [getRequiredProvision](GeometricKandelInstance.md#getrequiredprovision). |
| `params.maxOffersInChunk?` | `number` | The maximum number of offers to include in a single populate transaction. If not provided, then KandelConfiguration is used. |
| `params.populateMode?` | ``"saveGas"`` \| ``"reduceCallData"`` | The mode to use when populating the offers. If not provided, then "reduceCallData" is used - it computes offers on-chain but reduces the amount of call data; "saveGas" computes offers off-chain and sends them as call data, but saves gas. |
| `overrides` | `Overrides` | The ethers overrides to use when calling the populate and populateChunk functions. |

#### Returns

`Promise`<`ContractTransaction`[]\>

The transaction(s) used to populate the offers.

**`Remarks`**

If this function is invoked with a different distribution, e.g., due to new pricePoints, or stepSize, then first retract all offers; otherwise, Kandel will enter an inconsistent state. This function does not set the baseQuoteTickOffset for geometric Kandels.

#### Defined in

@mangrovedao/mangrove.js/src/kandel/geometricKandel/geometricKandelInstance.ts:299

___

### <a id="setbasequotetickoffset" name="setbasequotetickoffset"></a> setBaseQuoteTickOffset

▸ **setBaseQuoteTickOffset**(`baseQuoteTickOffset`, `overrides?`): `Promise`<`ContractTransaction`\>

Sets the number of ticks to jump between two price points - this gives the geometric progression. Should be >=1. Note offers should be retracted before this function is used.

#### Parameters

| Name | Type |
| :------ | :------ |
| `baseQuoteTickOffset` | `number` |
| `overrides` | `Overrides` |

#### Returns

`Promise`<`ContractTransaction`\>

#### Defined in

@mangrovedao/mangrove.js/src/kandel/geometricKandel/geometricKandelInstance.ts:392

___

### <a id="getrawgives" name="getrawgives"></a> getRawGives

▸ **getRawGives**(`bidGives`, `askGives`): `Object`

Converts gives to raw values usable for geometric Kandel `populateFromOffset` functions.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `bidGives` | `undefined` \| `BigSource` | The amount of quote to give for each bid (undefined means derive from constant ask gives) |
| `askGives` | `undefined` \| `BigSource` | The amount of base to give for each ask (undefined means derive from constant bid gives) |

#### Returns

`Object`

The raw values (or uint max if value should be derived).

| Name | Type |
| :------ | :------ |
| `rawBidGives` | `BigNumber` |
| `rawAskGives` | `BigNumber` |

#### Defined in

@mangrovedao/mangrove.js/src/kandel/geometricKandel/geometricKandelInstance.ts:407

___

### <a id="populategeometricchunks" name="populategeometricchunks"></a> populateGeometricChunks

▸ **populateGeometricChunks**(`chunks`, `distribution`, `overrides?`): `Promise`<`ContractTransaction`[]\>

Populates the offers in the distribution for the geometric Kandel instance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `chunks` | \{ `from`: `number` ; `to`: `number`  }[] | chunks to populate (from is inclusive, to is exclusive). |
| `distribution` | [`GeometricKandelDistribution`](GeometricKandelDistribution.md) | The geometric distribution. |
| `overrides` | `Overrides` | The ethers overrides to use when calling the populateChunkFromOffset function. |

#### Returns

`Promise`<`ContractTransaction`[]\>

The transaction(s) used to populate the offers.

#### Defined in

@mangrovedao/mangrove.js/src/kandel/geometricKandel/geometricKandelInstance.ts:432
