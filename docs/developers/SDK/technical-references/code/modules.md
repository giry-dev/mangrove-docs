---
id: "modules"
title: "@mangrovedao/mangrove.js"
sidebar_label: "Exports"
sidebar_position: 0.5
custom_edit_url: null
---

## Namespaces

- [eth](namespaces/eth.md)
- [KandelStrategies](namespaces/KandelStrategies-1.md)
- [LiquidityProvider](namespaces/LiquidityProvider-1.md)
- [Mangrove](namespaces/Mangrove-1.md)
- [Market](namespaces/Market-1.md)
- [Semibook](namespaces/Semibook-1.md)
- [Token](namespaces/Token-1.md)
- [mgvTestUtil](namespaces/mgvTestUtil.md)

## Classes

- [CoreKandelInstance](classes/CoreKandelInstance.md)
- [GeneralKandelDistribution](classes/GeneralKandelDistribution.md)
- [GeneralKandelDistributionGenerator](classes/GeneralKandelDistributionGenerator.md)
- [GeneralKandelDistributionHelper](classes/GeneralKandelDistributionHelper.md)
- [GeometricKandelDistribution](classes/GeometricKandelDistribution.md)
- [GeometricKandelDistributionGenerator](classes/GeometricKandelDistributionGenerator.md)
- [GeometricKandelDistributionHelper](classes/GeometricKandelDistributionHelper.md)
- [GeometricKandelInstance](classes/GeometricKandelInstance.md)
- [GeometricKandelLib](classes/GeometricKandelLib.md)
- [GeometricKandelStatus](classes/GeometricKandelStatus.md)
- [KandelConfiguration](classes/KandelConfiguration.md)
- [KandelDistribution](classes/KandelDistribution.md)
- [KandelDistributionHelper](classes/KandelDistributionHelper.md)
- [KandelFarm](classes/KandelFarm.md)
- [KandelSeeder](classes/KandelSeeder.md)
- [KandelStrategies](classes/KandelStrategies.md)
- [LiquidityProvider](classes/LiquidityProvider.md)
- [Mangrove](classes/Mangrove.md)
- [MangroveEventSubscriber](classes/MangroveEventSubscriber.md)
- [Market](classes/Market.md)
- [OfferLogic](classes/OfferLogic.md)
- [OfferMaker](classes/OfferMaker.md)
- [Semibook](classes/Semibook.md)
- [Token](classes/Token.md)
- [TokenCalculations](classes/TokenCalculations.md)
- [Density](classes/Density.md)
- [TickPriceHelper](classes/TickPriceHelper.md)
- [Trade](classes/Trade.md)
- [TradeEventManagement](classes/TradeEventManagement.md)

## Interfaces

- [JsonWalletOptions](interfaces/JsonWalletOptions.md)

## References

### <a id="default" name="default"></a> default

Renames and re-exports [Mangrove](classes/Mangrove.md)

## Type Aliases

### <a id="recursivepartial" name="recursivepartial"></a> RecursivePartial

Ƭ **RecursivePartial**<`T`\>: \{ [P in keyof T]?: T[P] extends (infer U)[] ? RecursivePartial<U\>[] : T[P] extends object \| undefined ? RecursivePartial<T[P]\> : T[P] }

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

@mangrovedao/mangrove.js/src/configuration.ts:25

___

### <a id="network" name="network"></a> network

Ƭ **network**: `string`

#### Defined in

@mangrovedao/mangrove.js/src/configuration.ts:33

___

### <a id="address" name="address"></a> address

Ƭ **address**: `string`

#### Defined in

@mangrovedao/mangrove.js/src/configuration.ts:34

___

### <a id="tokenid" name="tokenid"></a> tokenId

Ƭ **tokenId**: `string`

#### Defined in

@mangrovedao/mangrove.js/src/configuration.ts:35

___

### <a id="tokensymbol" name="tokensymbol"></a> tokenSymbol

Ƭ **tokenSymbol**: `string`

#### Defined in

@mangrovedao/mangrove.js/src/configuration.ts:36

___

### <a id="namedaddresses" name="namedaddresses"></a> NamedAddresses

Ƭ **NamedAddresses**: `Record`<`string`, [`address`](modules.md#address)\>

#### Defined in

@mangrovedao/mangrove.js/src/configuration.ts:38

___

### <a id="addressesconfig" name="addressesconfig"></a> AddressesConfig

Ƭ **AddressesConfig**: `Record`<[`network`](modules.md#network), [`NamedAddresses`](modules.md#namedaddresses)\>

#### Defined in

@mangrovedao/mangrove.js/src/configuration.ts:39

___

### <a id="tokenconfig" name="tokenconfig"></a> TokenConfig

Ƭ **TokenConfig**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `symbol?` | [`tokenSymbol`](modules.md#tokensymbol) |
| `decimals?` | `number` |
| `displayName?` | `string` |
| `displayedDecimals?` | `number` |
| `displayedAsPriceDecimals?` | `number` |
| `cashness?` | `number` |

#### Defined in

@mangrovedao/mangrove.js/src/configuration.ts:41

___

### <a id="tokendefaults" name="tokendefaults"></a> TokenDefaults

Ƭ **TokenDefaults**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `defaultDisplayedDecimals` | `number` |
| `defaultDisplayedPriceDecimals` | `number` |

#### Defined in

@mangrovedao/mangrove.js/src/configuration.ts:49

___

### <a id="reliableeventsubscriberconfig" name="reliableeventsubscriberconfig"></a> ReliableEventSubscriberConfig

Ƭ **ReliableEventSubscriberConfig**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `defaultBlockManagerOptions` | `BlockManager.Options` |
| `blockManagerOptionsByNetwork` | `Record`<[`network`](modules.md#network), `BlockManager.Options`\> |
| `defaultReliableHttpProviderOptions` | `Omit`<`ReliableHttpProvider.Options`, ``"onError"``\> |
| `reliableHttpProviderOptionsByNetwork` | `Record`<[`network`](modules.md#network), `Omit`<`ReliableHttpProvider.Options`, ``"onError"``\>\> |
| `defaultReliableWebSocketOptions` | `Omit`<`ReliableWebsocketProvider.Options`, ``"wsUrl"``\> |
| `reliableWebSocketOptionsByNetwork` | `Record`<[`network`](modules.md#network), `Omit`<`ReliableWebsocketProvider.Options`, ``"wsUrl"``\>\> |

#### Defined in

@mangrovedao/mangrove.js/src/configuration.ts:54

___

### <a id="kandelnetworkconfiguration" name="kandelnetworkconfiguration"></a> KandelNetworkConfiguration

Ƭ **KandelNetworkConfiguration**: `Object`

Kandel configuration for a specific chain.

**`Param`**

The factor to multiply the gasprice by. This is used to ensure that the Kandel offers do not fail to be reposted even if Mangrove's gasprice increases up to this.

**`Param`**

The maximum number of offers to include in a single populate transaction to avoid exceeding the gas limit.

**`Param`**

The maximum number of offers to include in a single retract transaction to avoid exceeding the gas limit.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `gaspriceFactor` | `number` |
| `maxOffersInPopulateChunk` | `number` |
| `maxOffersInRetractChunk` | `number` |

#### Defined in

@mangrovedao/mangrove.js/src/configuration.ts:80

___

### <a id="kandelmarketconfiguration" name="kandelmarketconfiguration"></a> KandelMarketConfiguration

Ƭ **KandelMarketConfiguration**: `Object`

Kandel configuration for a specific market.

**`Param`**

Whether AaveKandel should be allowed to be used.

**`Param`**

Additional factor for the minimum amount of base token that should be offered per offer to stay above density requirements.

**`Param`**

Additional factor for the minimum amount of quote token that should be offered per offer to stay above density requirements.

**`Param`**

The default step size used when transporting funds from an offer to its dual.

**`Param`**

The default baseQuoteTickOffset number of ticks to jump between two price points - this gives the geometric progression. Should be >=1.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `aaveEnabled` | `boolean` |
| `minimumBasePerOfferFactor` | `Big` |
| `minimumQuotePerOfferFactor` | `Big` |
| `stepSize` | `number` |
| `baseQuoteTickOffset` | `number` |

#### Defined in

@mangrovedao/mangrove.js/src/configuration.ts:93

___

### <a id="kandelrawmarketconfiguration" name="kandelrawmarketconfiguration"></a> KandelRawMarketConfiguration

Ƭ **KandelRawMarketConfiguration**: `Omit`<[`KandelMarketConfiguration`](modules.md#kandelmarketconfiguration), ``"minimumBasePerOfferFactor"`` \| ``"minimumQuotePerOfferFactor"`` \| ``"baseQuoteTickOffset"``\> & \{ `minimumBasePerOfferFactor`: [`Bigish`](modules.md#bigish) ; `minimumQuotePerOfferFactor`: [`Bigish`](modules.md#bigish) ; `baseQuoteTickOffset`: `number`  }

#### Defined in

@mangrovedao/mangrove.js/src/configuration.ts:101

___

### <a id="kandelallconfigurationfields" name="kandelallconfigurationfields"></a> KandelAllConfigurationFields

Ƭ **KandelAllConfigurationFields**: [`KandelNetworkConfiguration`](modules.md#kandelnetworkconfiguration) & [`KandelRawMarketConfiguration`](modules.md#kandelrawmarketconfiguration)

#### Defined in

@mangrovedao/mangrove.js/src/configuration.ts:112

___

### <a id="partialkandelallconfigurationfields" name="partialkandelallconfigurationfields"></a> PartialKandelAllConfigurationFields

Ƭ **PartialKandelAllConfigurationFields**: `Partial`<[`KandelAllConfigurationFields`](modules.md#kandelallconfigurationfields)\>

#### Defined in

@mangrovedao/mangrove.js/src/configuration.ts:115

___

### <a id="partialmarketconfig" name="partialmarketconfig"></a> PartialMarketConfig

Ƭ **PartialMarketConfig**: [`PartialKandelAllConfigurationFields`](modules.md#partialkandelallconfigurationfields)

#### Defined in

@mangrovedao/mangrove.js/src/configuration.ts:117

___

### <a id="partialnetworkconfig" name="partialnetworkconfig"></a> PartialNetworkConfig

Ƭ **PartialNetworkConfig**: [`PartialKandelAllConfigurationFields`](modules.md#partialkandelallconfigurationfields) & \{ `markets?`: `Record`<[`tokenId`](modules.md#tokenid), `Record`<[`tokenId`](modules.md#tokenid), `Record`<`number`, [`PartialMarketConfig`](modules.md#partialmarketconfig)\>\>\>  }

#### Defined in

@mangrovedao/mangrove.js/src/configuration.ts:118

___

### <a id="partialkandelconfiguration" name="partialkandelconfiguration"></a> PartialKandelConfiguration

Ƭ **PartialKandelConfiguration**: [`PartialKandelAllConfigurationFields`](modules.md#partialkandelallconfigurationfields) & \{ `networks?`: `Record`<[`network`](modules.md#network), [`PartialNetworkConfig`](modules.md#partialnetworkconfig)\>  }

#### Defined in

@mangrovedao/mangrove.js/src/configuration.ts:125

___

### <a id="mangroveordernetworkconfiguration" name="mangroveordernetworkconfiguration"></a> MangroveOrderNetworkConfiguration

Ƭ **MangroveOrderNetworkConfiguration**: `Object`

Mangrove order configuration for a specific chain.

**`Param`**

The gasreq for a resting order using the MangroveOrder contract.

**`Param`**

The factor to multiply the gasprice by. This is used to ensure that the offers do not fail to be reposted even if Mangrove's gasprice increases up to this.

**`Param`**

The overhead of making a market order using the take function on MangroveOrder vs a market order directly on Mangrove.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `restingOrderGasreq` | `number` |
| `restingOrderGaspriceFactor` | `number` |
| `takeGasOverhead` | `number` |

#### Defined in

@mangrovedao/mangrove.js/src/configuration.ts:134

___

### <a id="partialmangroveorderconfiguration" name="partialmangroveorderconfiguration"></a> PartialMangroveOrderConfiguration

Ƭ **PartialMangroveOrderConfiguration**: `Partial`<[`MangroveOrderNetworkConfiguration`](modules.md#mangroveordernetworkconfiguration)\> & \{ `networks?`: `Record`<[`network`](modules.md#network), `Partial`<[`MangroveOrderNetworkConfiguration`](modules.md#mangroveordernetworkconfiguration)\>\>  }

#### Defined in

@mangrovedao/mangrove.js/src/configuration.ts:140

___

### <a id="configuration" name="configuration"></a> Configuration

Ƭ **Configuration**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `addressesByNetwork` | [`AddressesConfig`](modules.md#addressesconfig) |
| `tokenDefaults` | [`TokenDefaults`](modules.md#tokendefaults) |
| `tokens` | `Record`<[`tokenId`](modules.md#tokenid), [`TokenConfig`](modules.md#tokenconfig)\> |
| `tokenSymbolDefaultIdsByNetwork` | `Record`<[`tokenSymbol`](modules.md#tokensymbol), `Record`<[`network`](modules.md#network), [`tokenId`](modules.md#tokenid)\>\> |
| `mangroveOrder` | [`PartialMangroveOrderConfiguration`](modules.md#partialmangroveorderconfiguration) |
| `reliableEventSubscriber` | [`ReliableEventSubscriberConfig`](modules.md#reliableeventsubscriberconfig) |
| `kandel` | [`PartialKandelConfiguration`](modules.md#partialkandelconfiguration) |

#### Defined in

@mangrovedao/mangrove.js/src/configuration.ts:145

___

### <a id="partialconfiguration" name="partialconfiguration"></a> PartialConfiguration

Ƭ **PartialConfiguration**: [`RecursivePartial`](modules.md#recursivepartial)<[`Configuration`](modules.md#configuration)\>

#### Defined in

@mangrovedao/mangrove.js/src/configuration.ts:157

___

### <a id="marketormarketfactory" name="marketormarketfactory"></a> MarketOrMarketFactory

Ƭ **MarketOrMarketFactory**: [`Market`](classes/Market.md) \| (`baseAddress`: `string`, `quoteAddress`: `string`, `tickSpacing`: `number`) => `Promise`<[`Market`](classes/Market.md)\>

#### Defined in

@mangrovedao/mangrove.js/src/kandel/coreKandelInstance.ts:22

___

### <a id="kandelparameters" name="kandelparameters"></a> KandelParameters

Ƭ **KandelParameters**: `Object`

**`Notice`**

Parameters for a Kandel instance.

**`Param`**

The gas price used when provisioning offers.

**`Param`**

The gas required to execute a trade.

**`Param`**

The step size used when transporting funds from an offer to its dual. Should be >=1.

**`Param`**

The number of price points. Should be >=2.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `gasprice` | `number` |
| `gasreq` | `number` |
| `stepSize` | `number` |
| `pricePoints` | `number` |

#### Defined in

@mangrovedao/mangrove.js/src/kandel/coreKandelInstance.ts:37

___

### <a id="kandelparameteroverrides" name="kandelparameteroverrides"></a> KandelParameterOverrides

Ƭ **KandelParameterOverrides**: `Object`

**`Notice`**

Parameters for a Kandel instance where provided properties override current values. baseQuoteTickOffset takes precedence over priceRatio. Note that baseQuoteTickOffset and pricePoints are normally provided via the KandelDistribution.
@see[KandelParameters](modules.md#kandelparameters) for more information.

**`Remarks`**

Cannot simply be `Partial<KandelParameters>` due to Big vs Bigish.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `gasprice?` | `number` |
| `gasreq?` | `number` |
| `stepSize?` | `number` |
| `pricePoints?` | `number` |

#### Defined in

@mangrovedao/mangrove.js/src/kandel/coreKandelInstance.ts:49

___

### <a id="pricedistributionparams" name="pricedistributionparams"></a> PriceDistributionParams

Ƭ **PriceDistributionParams**: `Object`

Price and price ratio parameters for calculating a geometric price distribution.

**`Param`**

The minimum price in the distribution (used to derive minTick).

**`Param`**

The maximum price in the distribution.

**`Param`**

The ratio between each price point (used to derive baseQuoteTickOffset).

**`Param`**

The mid-price used to determine when to switch from bids to asks. (used to derive midTick).

**`Param`**

The step size used when transporting funds from an offer to its dual.

**`Param`**

Whether to generate the distribution outwards from the midPrice or upwards from the minPrice.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `minPrice?` | [`Bigish`](modules.md#bigish) |
| `maxPrice?` | [`Bigish`](modules.md#bigish) |
| `priceRatio?` | [`Bigish`](modules.md#bigish) |
| `midPrice?` | [`Bigish`](modules.md#bigish) |
| `stepSize` | `number` |
| `generateFromMid` | `boolean` |

#### Defined in

@mangrovedao/mangrove.js/src/kandel/geometricKandel/geometricKandelDistributionHelper.ts:16

___

### <a id="tickdistributionparams" name="tickdistributionparams"></a> TickDistributionParams

Ƭ **TickDistributionParams**: `Object`

Tick and offset parameters for calculating a geometric price distribution. Parameters should conform to tickSpacing of the market (i.e. be divisible by it).

**`Param`**

The minimum base quote tick in the distribution.

**`Param`**

The maximum base quote tick in the distribution (used to derive minTick).

**`Param`**

The number of ticks to jump between two price points.

**`Param`**

The number of price points in the distribution.

**`Param`**

The mid-price as base quote tick used to determine when to switch from bids to asks.

**`Param`**

The step size used when transporting funds from an offer to its dual.

**`Param`**

Whether to generate the distribution outwards from the midPrice or upwards from the minPrice.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `minBaseQuoteTick` | `number` |
| `maxBaseQuoteTick` | `number` |
| `baseQuoteTickOffset` | `number` |
| `midBaseQuoteTick` | `number` |
| `pricePoints` | `number` |
| `stepSize` | `number` |
| `generateFromMid` | `boolean` |

#### Defined in

@mangrovedao/mangrove.js/src/kandel/geometricKandel/geometricKandelDistributionHelper.ts:34

___

### <a id="distributionparams" name="distributionparams"></a> DistributionParams

Ƭ **DistributionParams**: [`PriceDistributionParams`](modules.md#pricedistributionparams) & `Partial`<[`TickDistributionParams`](modules.md#tickdistributionparams)\>

Parameters for calculating a geometric price distribution. Exactly three of minPrice (or minTick), maxPrice (or maxTick), priceRatio (or baseQuoteTickOffset), and pricePoints must be provided.

#### Defined in

@mangrovedao/mangrove.js/src/kandel/geometricKandel/geometricKandelDistributionHelper.ts:45

___

### <a id="geometrickandelparameteroverrides" name="geometrickandelparameteroverrides"></a> GeometricKandelParameterOverrides

Ƭ **GeometricKandelParameterOverrides**: `Object`

**`Notice`**

Parameters specific to a geometric Kandel instance where provided properties override current values. baseQuoteTickOffset takes precedence over priceRatio. Note that baseQuoteTickOffset and pricePoints are normally provided via the KandelDistribution.

**`See`**

GeometricKandelParameters for more information.

**`Remarks`**

Cannot simply be `Partial<GeometricKandelParameters>` due to Big vs Bigish.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `baseQuoteTickOffset?` | `number` |
| `priceRatio?` | [`Bigish`](modules.md#bigish) |

#### Defined in

@mangrovedao/mangrove.js/src/kandel/geometricKandel/geometricKandelInstance.ts:38

___

### <a id="offerswithliveness" name="offerswithliveness"></a> OffersWithLiveness

Ƭ **OffersWithLiveness**: \{ `tick`: `number` ; `index`: `number` ; `id`: `number` ; `live`: `boolean`  }[]

Offers with their price, liveness, and Kandel index.

**`Param`**

The tick of the offer.

**`Param`**

The index of the price point in Kandel.

**`Param`**

The Mangrove offer id of the offer.

**`Param`**

Whether the offer is live.

#### Defined in

@mangrovedao/mangrove.js/src/kandel/geometricKandel/geometricKandelStatus.ts:11

___

### <a id="offerstatus" name="offerstatus"></a> OfferStatus

Ƭ **OfferStatus**: `Object`

The status of an offer at a price point.

**`Param`**

Whether a bid is expected to be live.

**`Param`**

Whether an ask is expected to be live.

**`Param`**

The expected price of the offer based on extrapolation from a live offer near the mid price.

**`Param`**

The expected ask tick of the offer (negate for bids) based on extrapolation from a live offer near the mid price.

**`Param`**

The status of the current ask at the price point or undefined if there never was an ask at this point.

**`Param`**

Whether the offer is live.

**`Param`**

The Mangrove offer id.

**`Param`**

The actual price of the offer.

**`Param`**

The status of the current bid at the price point or undefined if there is no bid.

**`Param`**

Whether the offer is live.

**`Param`**

The Mangrove offer id.

**`Param`**

The actual price of the offer.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `expectedLiveBid` | `boolean` |
| `expectedLiveAsk` | `boolean` |
| `expectedBaseQuoteTick` | `number` |
| `expectedPrice` | `Big` |
| `asks` | `undefined` \| \{ `live`: `boolean` ; `id`: `number` ; `tick`: `number` ; `price`: `Big`  } |
| `bids` | `undefined` \| \{ `live`: `boolean` ; `id`: `number` ; `tick`: `number` ; `price`: `Big`  } |

#### Defined in

@mangrovedao/mangrove.js/src/kandel/geometricKandel/geometricKandelStatus.ts:32

___

### <a id="statuses" name="statuses"></a> Statuses

Ƭ **Statuses**: `Object`

Statuses of offers at each price point.

**`Param`**

The status of each offer.

**`Param`**

Offers that are live but have an index above pricePoints. This does not happen if populate is not called when offers are live.

**`Param`**

The live offer that is selected near the mid price and used to calculate expected prices.

**`Param`**

The minimum price of the offers. This is the price of the offer at index 0 if it is live; otherwise, the expected price at index 0.

**`Param`**

The maximum price of the offers. This is the price of the offer at index pricePoints - 1 if it is live; otherwise, the expected price at index pricePoints - 1.

**`Param`**

The price ratio calculated based on the baseQuoteTickOffset

**`Param`**

The offset in ticks between two price points of the geometric distribution.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `statuses` | [`OfferStatus`](modules.md#offerstatus)[] |
| `liveOutOfRange` | \{ `offerType`: [`BA`](namespaces/Market-1.md#ba) ; `id`: `number` ; `index`: `number`  }[] |
| `baseOffer` | \{ `offerType`: [`BA`](namespaces/Market-1.md#ba) ; `index`: `number` ; `id`: `number`  } |
| `baseOffer.offerType` | [`BA`](namespaces/Market-1.md#ba) |
| `baseOffer.index` | `number` |
| `baseOffer.id` | `number` |
| `minPrice` | `Big` |
| `maxPrice` | `Big` |
| `minBaseQuoteTick` | `number` |
| `maxBaseQuoteTick` | `number` |
| `priceRatio` | `Big` |
| `baseQuoteTickOffset` | `number` |

#### Defined in

@mangrovedao/mangrove.js/src/kandel/geometricKandel/geometricKandelStatus.ts:64

___

### <a id="offerlist" name="offerlist"></a> OfferList

Ƭ **OfferList**: \{ `index`: `number` ; `gives`: `Big` ; `tick`: `number`  }[]

A list of bids or asks with their index, tick, and gives.

**`Param`**

The index of the price point in Kandel.

**`Param`**

The amount of tokens (base for ask, quote for bid) the offer should give.

**`Param`**

The tick for the offer (the tick price of base per quote for bids and quote per base for asks)

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelDistribution.ts:10

___

### <a id="offerdistribution" name="offerdistribution"></a> OfferDistribution

Ƭ **OfferDistribution**: `Object`

Distribution of bids and asks and their base and quote amounts. Take care to ensure duals are included or already populated with correct parameters.

**`Param`**

The bids in the distribution.

**`Param`**

The asks in the distribution.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `bids` | [`OfferList`](modules.md#offerlist) |
| `asks` | [`OfferList`](modules.md#offerlist) |

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelDistribution.ts:20

___

### <a id="offerswithgives" name="offerswithgives"></a> OffersWithGives

Ƭ **OffersWithGives**: \{ `tick`: `number` ; `index`: `number` ; `gives`: [`Bigish`](modules.md#bigish)  }[]

Offers with their tick, Kandel index, and gives amount.

**`Param`**

The tick of the offer.

**`Param`**

The index of the price point in Kandel.

**`Param`**

The amount of base or quote that the offer gives.

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelDistributionHelper.ts:11

___

### <a id="kandelseed" name="kandelseed"></a> KandelSeed

Ƭ **KandelSeed**: `Object`

The parameters for sowing the Kandel instance.

**`Param`**

Whether to create an AaveKandel which supplies liquidity on Aave to earn yield, or a standard Kandel.

**`Param`**

The market to create the Kandel for.

**`Param`**

Whether to enable liquidity sharing for the Kandel so that the signer can publish the same liquidity for multiple router-based Kandels (currently AaveKandel).

#### Type declaration

| Name | Type |
| :------ | :------ |
| `onAave` | `boolean` |
| `market` | [`Market`](classes/Market.md) |
| `liquiditySharing` | `boolean` |

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelSeeder.ts:19

___

### <a id="amountandoverrides" name="amountandoverrides"></a> AmountAndOverrides

Ƭ **AmountAndOverrides**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `amount` | [`Bigish`](modules.md#bigish) |
| `overrides` | `ethers.Overrides` |

#### Defined in

@mangrovedao/mangrove.js/src/token.ts:22

___

### <a id="approveargs" name="approveargs"></a> ApproveArgs

Ƭ **ApproveArgs**: [`Bigish`](modules.md#bigish) \| `ethers.Overrides` \| [`AmountAndOverrides`](modules.md#amountandoverrides)

#### Defined in

@mangrovedao/mangrove.js/src/token.ts:26

___

### <a id="bigish" name="bigish"></a> Bigish

Ƭ **Bigish**: `BigSource`

#### Defined in

@mangrovedao/mangrove.js/src/util.ts:3

___

### <a id="prettyprintfilter" name="prettyprintfilter"></a> prettyPrintFilter

Ƭ **prettyPrintFilter**: (``"id"`` \| ``"prev"`` \| ``"next"`` \| ``"gasprice"`` \| ``"maker"`` \| ``"gasreq"`` \| ``"gasbase"`` \| ``"gives"`` \| ``"price"`` \| ``"tick"``)[]

#### Defined in

@mangrovedao/mangrove.js/src/util/prettyPrint.ts:4

___

### <a id="roundingmode" name="roundingmode"></a> RoundingMode

Ƭ **RoundingMode**: ``"nearest"`` \| ``"roundDown"`` \| ``"roundUp"``

roundDown rounds down to a representable value, roundUp rounds up to a representable value, and nearest rounds to the nearest representable value.

#### Defined in

@mangrovedao/mangrove.js/src/util/tickPriceHelper.ts:10

___

### <a id="cleanunitparams" name="cleanunitparams"></a> CleanUnitParams

Ƭ **CleanUnitParams**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ba` | [`BA`](namespaces/Market-1.md#ba) |
| `targets` | \{ `offerId`: `number` ; `tick`: `number` ; `gasreq`: `ethers.BigNumber` ; `takerWants`: `ethers.BigNumber`  }[] |
| `taker` | `string` |
| `gasLowerBound?` | `ethers.BigNumberish` |

#### Defined in

@mangrovedao/mangrove.js/src/util/trade.ts:12

___

### <a id="optional" name="optional"></a> Optional

Ƭ **Optional**<`T`, `K`\>: `Pick`<`Partial`<`T`\>, `K`\> & `Omit`<`T`, `K`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `K` | extends keyof `T` |

#### Defined in

@mangrovedao/mangrove.js/src/util/tradeEventManagement.ts:24

___

### <a id="orderresultwithoptionalsummary" name="orderresultwithoptionalsummary"></a> OrderResultWithOptionalSummary

Ƭ **OrderResultWithOptionalSummary**: [`Optional`](modules.md#optional)<[`DirtyOrderResult`](namespaces/Market-1.md#dirtyorderresult), ``"summary"``\>

#### Defined in

@mangrovedao/mangrove.js/src/util/tradeEventManagement.ts:26

## Variables

### <a id="configuration-1" name="configuration-1"></a> configuration

• `Const` **configuration**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `addresses` | \{ `getAllAddresses`: (`network`: `string`) => [`string`, `string`][] ; `getAddress`: (`name`: `string`, `network`: `string`) => `string` ; `watchAddress`: (`network`: `string`, `name`: `string`, `callback`: (`address`: `string`) => `void`) => `void` ; `setAddress`: (`name`: `string`, `address`: `string`, `network`: `string`) => `void`  } |
| `addresses.getAllAddresses` | (`network`: `string`) => [`string`, `string`][] |
| `addresses.getAddress` | (`name`: `string`, `network`: `string`) => `string` |
| `addresses.watchAddress` | (`network`: `string`, `name`: `string`, `callback`: (`address`: `string`) => `void`) => `void` |
| `addresses.setAddress` | (`name`: `string`, `address`: `string`, `network`: `string`) => `void` |
| `tokens` | \{ `isTokenIdRegistered`: (`tokenId`: `string`) => `boolean` ; `getDefaultIdForSymbolOnNetwork`: (`tokenSymbol`: `string`, `network`: `string`) => `string` ; `getTokenIdFromAddress`: (`address`: `string`, `network`: `string`) => `undefined` \| `string` ; `getDecimals`: (`tokenId`: `string`) => `number` ; `getOrFetchDecimals`: (`tokenId`: `string`, `provider`: `Provider`) => `Promise`<`number`\> ; `fetchDecimals`: (`tokenId`: `string`, `provider`: `Provider`) => `Promise`<`number`\> ; `getSymbol`: (`tokenId`: `string`) => `undefined` \| `string` ; `getOrFetchSymbol`: (`tokenId`: `string`, `provider`: `Provider`) => `Promise`<`string`\> ; `fetchSymbol`: (`tokenId`: `string`, `provider`: `Provider`) => `Promise`<`string`\> ; `fetchSymbolFromAddress`: (`address`: `string`, `provider`: `Provider`) => `Promise`<`string`\> ; `getDisplayName`: (`tokenId`: `string`) => `undefined` \| `string` ; `getDisplayedDecimals`: (`tokenId`: `string`) => `number` ; `getDisplayedPriceDecimals`: (`tokenId`: `string`) => `number` ; `getCashness`: (`tokenId`: `string`) => `undefined` \| `number` ; `setDefaultIdForSymbolOnNetwork`: (`tokenSymbol`: `string`, `network`: `string`, `tokenId`: `string`) => `void` ; `setDecimals`: (`tokenId`: `string`, `dec`: `number`) => `void` ; `setSymbol`: (`tokenId`: `string`, `symbol`: `string`) => `void` ; `setDisplayName`: (`tokenId`: `string`, `displayName`: `string`) => `void` ; `setDisplayedDecimals`: (`tokenId`: `string`, `dec`: `number`) => `void` ; `setDisplayedPriceDecimals`: (`tokenId`: `string`, `dec`: `number`) => `void` ; `setCashness`: (`tokenId`: `string`, `cashness`: `number`) => `void`  } |
| `tokens.isTokenIdRegistered` | [object Object] |
| `tokens.getDefaultIdForSymbolOnNetwork` | [object Object] |
| `tokens.getTokenIdFromAddress` | (`address`: `string`, `network`: `string`) => `undefined` \| `string` |
| `tokens.getDecimals` | (`tokenId`: `string`) => `number` |
| `tokens.getOrFetchDecimals` | (`tokenId`: `string`, `provider`: `Provider`) => `Promise`<`number`\> |
| `tokens.fetchDecimals` | (`tokenId`: `string`, `provider`: `Provider`) => `Promise`<`number`\> |
| `tokens.getSymbol` | (`tokenId`: `string`) => `undefined` \| `string` |
| `tokens.getOrFetchSymbol` | (`tokenId`: `string`, `provider`: `Provider`) => `Promise`<`string`\> |
| `tokens.fetchSymbol` | (`tokenId`: `string`, `provider`: `Provider`) => `Promise`<`string`\> |
| `tokens.fetchSymbolFromAddress` | (`address`: `string`, `provider`: `Provider`) => `Promise`<`string`\> |
| `tokens.getDisplayName` | (`tokenId`: `string`) => `undefined` \| `string` |
| `tokens.getDisplayedDecimals` | (`tokenId`: `string`) => `number` |
| `tokens.getDisplayedPriceDecimals` | (`tokenId`: `string`) => `number` |
| `tokens.getCashness` | (`tokenId`: `string`) => `undefined` \| `number` |
| `tokens.setDefaultIdForSymbolOnNetwork` | [object Object] |
| `tokens.setDecimals` | (`tokenId`: `string`, `dec`: `number`) => `void` |
| `tokens.setSymbol` | (`tokenId`: `string`, `symbol`: `string`) => `void` |
| `tokens.setDisplayName` | (`tokenId`: `string`, `displayName`: `string`) => `void` |
| `tokens.setDisplayedDecimals` | (`tokenId`: `string`, `dec`: `number`) => `void` |
| `tokens.setDisplayedPriceDecimals` | (`tokenId`: `string`, `dec`: `number`) => `void` |
| `tokens.setCashness` | (`tokenId`: `string`, `cashness`: `number`) => `void` |
| `reliableEventSubscriber` | \{ `getLogsTimeout`: (`network`: `string`) => `number` ; `getBlockManagerOptions`: (`network`: `string`) => `Options` ; `getReliableHttpProviderOptions`: (`network`: `string`) => `Omit`<`Options`, ``"onError"``\> ; `getReliableWebSocketOptions`: (`network`: `string`) => `Omit`<`Options`, ``"wsUrl"``\>  } |
| `reliableEventSubscriber.getLogsTimeout` | (`network`: `string`) => `number` |
| `reliableEventSubscriber.getBlockManagerOptions` | (`network`: `string`) => `Options` |
| `reliableEventSubscriber.getReliableHttpProviderOptions` | (`network`: `string`) => `Omit`<`Options`, ``"onError"``\> |
| `reliableEventSubscriber.getReliableWebSocketOptions` | (`network`: `string`) => `Omit`<`Options`, ``"wsUrl"``\> |
| `kandel` | \{ `getRawConfiguration`: () => [`PartialKandelConfiguration`](modules.md#partialkandelconfiguration)  } |
| `kandel.getRawConfiguration` | () => [`PartialKandelConfiguration`](modules.md#partialkandelconfiguration) |
| `mangroveOrder` | \{ `getRestingOrderGasreq`: (`network`: `string`) => `number` ; `getRestingOrderGaspriceFactor`: (`network`: `string`) => `number` ; `getTakeGasOverhead`: (`network`: `string`) => `number`  } |
| `mangroveOrder.getRestingOrderGasreq` | (`network`: `string`) => `number` |
| `mangroveOrder.getRestingOrderGaspriceFactor` | (`network`: `string`) => `number` |
| `mangroveOrder.getTakeGasOverhead` | (`network`: `string`) => `number` |
| `resetConfiguration` | () => `void` |
| `updateConfiguration` | (`defaults`: [`RecursivePartial`](modules.md#recursivepartial)<[`Configuration`](modules.md#configuration)\>) => `void` |

#### Defined in

@mangrovedao/mangrove.js/src/configuration.ts:771

## Functions

### <a id="enablelogging" name="enablelogging"></a> enableLogging

▸ **enableLogging**(): `void`

#### Returns

`void`

#### Defined in

@mangrovedao/mangrove.js/src/util/logger.ts:10
