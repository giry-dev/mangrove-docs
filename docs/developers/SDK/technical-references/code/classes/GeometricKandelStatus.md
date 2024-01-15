---
id: "GeometricKandelStatus"
title: "Class: GeometricKandelStatus"
sidebar_label: "GeometricKandelStatus"
sidebar_position: 0
custom_edit_url: null
---

**`Title`**

Helper for getting status about a geometric Kandel instance.

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new GeometricKandelStatus**(`geometricDistributionHelper`): [`GeometricKandelStatus`](GeometricKandelStatus.md)

Constructor

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `geometricDistributionHelper` | [`GeometricKandelDistributionHelper`](GeometricKandelDistributionHelper.md) | The GeometricKandelDistributionHelper instance. |

#### Returns

[`GeometricKandelStatus`](GeometricKandelStatus.md)

#### Defined in

@mangrovedao/mangrove.js/src/kandel/geometricKandel/geometricKandelStatus.ts:91

## Properties

### <a id="geometricdistributionhelper" name="geometricdistributionhelper"></a> geometricDistributionHelper

• **geometricDistributionHelper**: [`GeometricKandelDistributionHelper`](GeometricKandelDistributionHelper.md)

#### Defined in

@mangrovedao/mangrove.js/src/kandel/geometricKandel/geometricKandelStatus.ts:86

## Methods

### <a id="getindexofpriceclosesttomid" name="getindexofpriceclosesttomid"></a> getIndexOfPriceClosestToMid

▸ **getIndexOfPriceClosestToMid**(`midBaseQuoteTick`, `baseQuoteTicks`): `number`

Gets the index of the offer with a price closest to the mid price (since precision matters most there since it is used to distinguish expected dead from live.)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `midBaseQuoteTick` | `number` | The mid tick. |
| `baseQuoteTicks` | `number`[] | The ticks of the offers. |

#### Returns

`number`

The index of the offer with a price closest to the mid price.

#### Defined in

@mangrovedao/mangrove.js/src/kandel/geometricKandel/geometricKandelStatus.ts:102

___

### <a id="getofferstatuses" name="getofferstatuses"></a> getOfferStatuses

▸ **getOfferStatuses**(`midPrice`, `baseQuoteTickOffset`, `pricePoints`, `stepSize`, `offers`): [`Statuses`](../modules.md#statuses)

Determines the status of the Kandel instance based on the passed in offers.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `midPrice` | `Big` | The current mid price of the market used to discern expected bids from asks. |
| `baseQuoteTickOffset` | `number` | The offset in ticks between two price points of the geometric distribution. |
| `pricePoints` | `number` | The number of price points in the Kandel instance. |
| `stepSize` | `number` | The step size used when transporting funds from an offer to its dual. |
| `offers` | `Object` | The offers to determine the status of. |
| `offers.bids` | [`OffersWithLiveness`](../modules.md#offerswithliveness) | - |
| `offers.asks` | [`OffersWithLiveness`](../modules.md#offerswithliveness) | - |

#### Returns

[`Statuses`](../modules.md#statuses)

The status of the Kandel instance.

**`Remarks`**

The expected prices are determined by extrapolating from an offer closest to the mid price. Offers are expected to be live bids below the mid price and asks above. Offers are expected to be dead near the mid price due to the step size between the live bid and ask.

#### Defined in

@mangrovedao/mangrove.js/src/kandel/geometricKandel/geometricKandelStatus.ts:127
