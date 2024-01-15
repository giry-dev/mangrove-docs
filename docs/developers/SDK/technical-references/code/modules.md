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
- [GeometricKandelDistribution](classes/GeometricKandelDistribution.md)
- [GeometricKandelDistributionGenerator](classes/GeometricKandelDistributionGenerator.md)
- [GeometricKandelInstance](classes/GeometricKandelInstance.md)
- [KandelDistribution](classes/KandelDistribution.md)
- [KandelFarm](classes/KandelFarm.md)
- [KandelSeeder](classes/KandelSeeder.md)
- [KandelStrategies](classes/KandelStrategies.md)
- [LiquidityProvider](classes/LiquidityProvider.md)
- [Mangrove](classes/Mangrove.md)
- [Market](classes/Market.md)
- [OfferLogic](classes/OfferLogic.md)
- [OfferMaker](classes/OfferMaker.md)
- [Semibook](classes/Semibook.md)
- [Token](classes/Token.md)
- [TickPriceHelper](classes/TickPriceHelper.md)

## References

### <a id="default" name="default"></a> default

Renames and re-exports [Mangrove](classes/Mangrove.md)

## Variables

### <a id="configuration" name="configuration"></a> configuration

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
| `kandel` | \{ `getRawConfiguration`: () => `PartialKandelConfiguration`  } |
| `kandel.getRawConfiguration` | () => `PartialKandelConfiguration` |
| `mangroveOrder` | \{ `getRestingOrderGasreq`: (`network`: `string`) => `number` ; `getRestingOrderGaspriceFactor`: (`network`: `string`) => `number` ; `getTakeGasOverhead`: (`network`: `string`) => `number`  } |
| `mangroveOrder.getRestingOrderGasreq` | (`network`: `string`) => `number` |
| `mangroveOrder.getRestingOrderGaspriceFactor` | (`network`: `string`) => `number` |
| `mangroveOrder.getTakeGasOverhead` | (`network`: `string`) => `number` |
| `resetConfiguration` | () => `void` |
| `updateConfiguration` | (`defaults`: `RecursivePartial`<`Configuration`\>) => `void` |

#### Defined in

@mangrovedao/mangrove.js/src/configuration.ts:795

## Functions

### <a id="enablelogging" name="enablelogging"></a> enableLogging

▸ **enableLogging**(): `void`

#### Returns

`void`

#### Defined in

@mangrovedao/mangrove.js/src/util/logger.ts:10
