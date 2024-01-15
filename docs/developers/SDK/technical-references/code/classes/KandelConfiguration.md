---
id: "KandelConfiguration"
title: "Class: KandelConfiguration"
sidebar_label: "KandelConfiguration"
sidebar_position: 0
custom_edit_url: null
---

**`Title`**

Provides recommended configuration for deploying Kandel instances.

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new KandelConfiguration**(`configurationOverride?`): [`KandelConfiguration`](KandelConfiguration.md)

Constructor to provide specific configuration.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `configurationOverride?` | [`PartialKandelConfiguration`](../modules.md#partialkandelconfiguration) | Optional configuration overrides that replace the values from the current configuration in `configuration`. |

#### Returns

[`KandelConfiguration`](KandelConfiguration.md)

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelConfiguration.ts:19

## Properties

### <a id="rawconfiguration" name="rawconfiguration"></a> rawConfiguration

• **rawConfiguration**: [`PartialKandelConfiguration`](../modules.md#partialkandelconfiguration)

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelConfiguration.ts:14

## Methods

### <a id="getmostspecificconfig" name="getmostspecificconfig"></a> getMostSpecificConfig

▸ **getMostSpecificConfig**(`networkName`, `baseId`, `quoteId`, `tickSpacing`): [`KandelNetworkConfiguration`](../modules.md#kandelnetworkconfiguration) & `Partial`<[`KandelMarketConfiguration`](../modules.md#kandelmarketconfiguration)\>

Gets the most specific available config for the network and the base/quote pair.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `networkName` | `string` | The name of the network. |
| `baseId` | `string` | The ID of the base token. |
| `quoteId` | `string` | The ID of the quote token. |
| `tickSpacing` | `number` | The tick spacing of the market. |

#### Returns

[`KandelNetworkConfiguration`](../modules.md#kandelnetworkconfiguration) & `Partial`<[`KandelMarketConfiguration`](../modules.md#kandelmarketconfiguration)\>

The most specific configuration available for the network and the base/quote pair.

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelConfiguration.ts:36

___

### <a id="getconfigforbasequotetickspacing" name="getconfigforbasequotetickspacing"></a> getConfigForBaseQuoteTickSpacing

▸ **getConfigForBaseQuoteTickSpacing**(`networkName`, `baseId`, `quoteId`, `tickSpacing`): [`KandelNetworkConfiguration`](../modules.md#kandelnetworkconfiguration) & [`KandelMarketConfiguration`](../modules.md#kandelmarketconfiguration)

Gets the config for the network and the base/quote/tickSpacing set.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `networkName` | `string` | The name of the network. |
| `baseId` | `string` | The ID of the base token. |
| `quoteId` | `string` | The ID of the quote token. |
| `tickSpacing` | `number` | The tick spacing of the market. |

#### Returns

[`KandelNetworkConfiguration`](../modules.md#kandelnetworkconfiguration) & [`KandelMarketConfiguration`](../modules.md#kandelmarketconfiguration)

The configuration for the network and the base/quote/tickSpacing set.

**`Throws`**

If the full config is not available for the network and the base/quote/tickSpacing set.

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelConfiguration.ts:82

___

### <a id="getconfig" name="getconfig"></a> getConfig

▸ **getConfig**(`market`): [`KandelNetworkConfiguration`](../modules.md#kandelnetworkconfiguration) & [`KandelMarketConfiguration`](../modules.md#kandelmarketconfiguration)

Gets the config for the market.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `market` | [`Market`](Market.md) | The market. |

#### Returns

[`KandelNetworkConfiguration`](../modules.md#kandelnetworkconfiguration) & [`KandelMarketConfiguration`](../modules.md#kandelmarketconfiguration)

The configuration for the market.

**`Throws`**

If the full config is not available for the market.

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelConfiguration.ts:127

___

### <a id="getconfiguredmarkets" name="getconfiguredmarkets"></a> getConfiguredMarkets

▸ **getConfiguredMarkets**(`mgv`): \{ `base`: `string` ; `quote`: `string` ; `tickSpacing`: `number`  }[]

Gets the list of markets that are configured for the network for the given Mangrove instance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mgv` | [`Mangrove`](Mangrove.md) | The Mangrove instance. |

#### Returns

\{ `base`: `string` ; `quote`: `string` ; `tickSpacing`: `number`  }[]

The list of markets that are configured for the network for the given Mangrove instance.

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelConfiguration.ts:142

___

### <a id="getconfiguredmarketsfornetwork" name="getconfiguredmarketsfornetwork"></a> getConfiguredMarketsForNetwork

▸ **getConfiguredMarketsForNetwork**(`networkName`): \{ `base`: `string` ; `quote`: `string` ; `tickSpacing`: `number`  }[]

Gets the list of markets that are configured for the network.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `networkName` | `string` | The name of the network. |

#### Returns

\{ `base`: `string` ; `quote`: `string` ; `tickSpacing`: `number`  }[]

The list of markets that are configured for the network.

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelConfiguration.ts:150

___

### <a id="getnetworks" name="getnetworks"></a> getNetworks

▸ **getNetworks**(): `string`[]

Gets the networks with some configuration.

#### Returns

`string`[]

#### Defined in

@mangrovedao/mangrove.js/src/kandel/kandelConfiguration.ts:171
