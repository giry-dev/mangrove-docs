---
id: "TickPriceHelper"
title: "Class: TickPriceHelper"
sidebar_label: "TickPriceHelper"
sidebar_position: 0
custom_edit_url: null
---

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new TickPriceHelper**(`ba`, `market`): [`TickPriceHelper`](TickPriceHelper.md)

Ctor

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ba` | [`BA`](../namespaces/Market-1.md#ba) | bids or asks |
| `market` | [`KeyResolvedForCalculation`](../namespaces/Market-1.md#keyresolvedforcalculation) | the decimals for the market |

#### Returns

[`TickPriceHelper`](TickPriceHelper.md)

#### Defined in

@mangrovedao/mangrove.js/src/util/tickPriceHelper.ts:21

## Properties

### <a id="ba" name="ba"></a> ba

• `Readonly` **ba**: [`BA`](../namespaces/Market-1.md#ba)

#### Defined in

@mangrovedao/mangrove.js/src/util/tickPriceHelper.ts:13

___

### <a id="market" name="market"></a> market

• `Readonly` **market**: [`KeyResolvedForCalculation`](../namespaces/Market-1.md#keyresolvedforcalculation)

#### Defined in

@mangrovedao/mangrove.js/src/util/tickPriceHelper.ts:14

## Methods

### <a id="pricefromtick" name="pricefromtick"></a> priceFromTick

▸ **priceFromTick**(`tick`, `roundingMode`): `Big`

Calculates the price at a given raw offer list tick.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tick` | `number` | tick to calculate price for (is coerced to nearest bin) |
| `roundingMode` | [`RoundingMode`](../modules.md#roundingmode) | the rounding mode for coercing tick to a representable tick. See [RoundingMode](../modules.md#roundingmode). roundDown is to a lower price, roundUp is to a higher price. |

#### Returns

`Big`

price at tick (not to be confused with offer list ratio).

#### Defined in

@mangrovedao/mangrove.js/src/util/tickPriceHelper.ts:66

___

### <a id="tickfromprice" name="tickfromprice"></a> tickFromPrice

▸ **tickFromPrice**(`price`, `roundingMode`): `number`

Calculates the raw offer list tick (coerced to nearest bin) at a given order book price (not to be confused with offer list ratio).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `price` | `BigSource` | price to calculate tick for |
| `roundingMode` | [`RoundingMode`](../modules.md#roundingmode) | See [RoundingMode](../modules.md#roundingmode) roundDown is to a lower tick, roundUp is to a higher tick. |

#### Returns

`number`

raw offer list tick (coerced to nearest bin) for price

#### Defined in

@mangrovedao/mangrove.js/src/util/tickPriceHelper.ts:97

___

### <a id="coerceprice" name="coerceprice"></a> coercePrice

▸ **coercePrice**(`price`, `roundingMode`): `Big`

Coerces a price to a representable price on a tick. Note that due to rounding, coercing a coerced price may yield a price on an adjacent tick.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `price` | `BigSource` | price to coerce |
| `roundingMode` | [`RoundingMode`](../modules.md#roundingmode) | See [RoundingMode](../modules.md#roundingmode) roundUp is to a higher price, roundDown is to a lower price. |

#### Returns

`Big`

the price coerced to nearest representable tick

#### Defined in

@mangrovedao/mangrove.js/src/util/tickPriceHelper.ts:124

___

### <a id="inboundfromoutbound" name="inboundfromoutbound"></a> inboundFromOutbound

▸ **inboundFromOutbound**(`tick`, `outboundAmount`, `roundingMode`): `Big`

Calculates the inbound amount from an outbound amount at a given tick.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tick` | `number` | tick to calculate the amount for (coerced to nearest bin) |
| `outboundAmount` | `BigSource` | amount to calculate the inbound amount for |
| `roundingMode` | [`RoundingMode`](../modules.md#roundingmode) | See [RoundingMode](../modules.md#roundingmode). roundDown is to a lower tick, roundUp is to a higher tick and usage of inboundFromOutboundUp |

#### Returns

`Big`

inbound amount.

#### Defined in

@mangrovedao/mangrove.js/src/util/tickPriceHelper.ts:154

___

### <a id="outboundfrominbound" name="outboundfrominbound"></a> outboundFromInbound

▸ **outboundFromInbound**(`tick`, `inboundAmount`, `roundingMode`): `Big`

Calculates the outbound amount from an inbound amount at a given tick.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tick` | `number` | tick to calculate the amount for (coerced to nearest bin) |
| `inboundAmount` | `BigSource` | amount to calculate the outbound amount for |
| `roundingMode` | [`RoundingMode`](../modules.md#roundingmode) | See [RoundingMode](../modules.md#roundingmode). roundDown is to a lower tick, roundUp is to a higher tick and usage of outboundFromInboundUp |

#### Returns

`Big`

inbound amount.

#### Defined in

@mangrovedao/mangrove.js/src/util/tickPriceHelper.ts:179

___

### <a id="volumeforgivesandprice" name="volumeforgivesandprice"></a> volumeForGivesAndPrice

▸ **volumeForGivesAndPrice**(`gives`, `price`): `Big`

Determine the volume of an offer from the amount of token to give and the price.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `gives` | `BigSource` | amount of token to give |
| `price` | `BigSource` | price of the offer |

#### Returns

`Big`

the volume of the offer.

#### Defined in

@mangrovedao/mangrove.js/src/util/tickPriceHelper.ts:203

___

### <a id="tickfromvolumes" name="tickfromvolumes"></a> tickFromVolumes

▸ **tickFromVolumes**(`inboundVolume`, `outboundVolume`, `roundingMode`): `number`

Calculates the tick (coerced to nearest bin) from inbound and outbound volumes.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inboundVolume` | `BigSource` | inbound amount to calculate the tick for |
| `outboundVolume` | `BigSource` | outbound amount to calculate the tick for |
| `roundingMode` | [`RoundingMode`](../modules.md#roundingmode) | See [RoundingMode](../modules.md#roundingmode). roundDown is to a lower tick, roundUp is to a higher tick. |

#### Returns

`number`

raw offer list tick (coerced to nearest bin) for volumes

#### Defined in

@mangrovedao/mangrove.js/src/util/tickPriceHelper.ts:214

___

### <a id="coercetick" name="coercetick"></a> coerceTick

▸ **coerceTick**(`tick`, `roundingMode`): `number`

Coerce a tick to its nearest bin

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tick` | `number` | tick to coerce |
| `roundingMode` | [`RoundingMode`](../modules.md#roundingmode) | See [RoundingMode](../modules.md#roundingmode). roundDown is to a lower tick, roundUp is to a higher tick. |

#### Returns

`number`

tick coerced to its nearest bin

#### Defined in

@mangrovedao/mangrove.js/src/util/tickPriceHelper.ts:257

___

### <a id="istickexact" name="istickexact"></a> isTickExact

▸ **isTickExact**(`tick`): `boolean`

Check if tick is exact, as in it does not change when coerced due to tick spacing

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tick` | `number` | tick to check |

#### Returns

`boolean`

true if tick is exact; otherwise, false

#### Defined in

@mangrovedao/mangrove.js/src/util/tickPriceHelper.ts:268

___

### <a id="rawratiofromtick" name="rawratiofromtick"></a> rawRatioFromTick

▸ **rawRatioFromTick**(`tick`, `roundingMode`): `Big`

Calculates the raw ratio as a Big with big precision.

NB: Raw ratios do not take token decimals into account.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tick` | `number` | tick to calculate the ratio for (coerced to nearest bin) |
| `roundingMode` | [`RoundingMode`](../modules.md#roundingmode) | the rounding mode for coercing tick to a representable tick. See [RoundingMode](../modules.md#roundingmode) |

#### Returns

`Big`

ratio as a Big.

#### Defined in

@mangrovedao/mangrove.js/src/util/tickPriceHelper.ts:321

___

### <a id="tickfromrawratio" name="tickfromrawratio"></a> tickFromRawRatio

▸ **tickFromRawRatio**(`rawRatio`, `roundingMode`): `number`

Converts a raw ratio as a Big to a tick (coerced to nearest bin).

NB: Raw ratios do not take token decimals into account.
NB: This is a lossy conversions since ticks are discrete and ratios are not.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rawRatio` | `Big` | inbound/outbound ratio to calculate the tick for |
| `roundingMode` | [`RoundingMode`](../modules.md#roundingmode) | the rounding mode for coercing tick to a representable tick. See [RoundingMode](../modules.md#roundingmode) |

#### Returns

`number`

a tick (coerced to nearest bin) that approximates the given ratio.

#### Defined in

@mangrovedao/mangrove.js/src/util/tickPriceHelper.ts:345

___

### <a id="rawratiotomantissaexponent" name="rawratiotomantissaexponent"></a> rawRatioToMantissaExponent

▸ **rawRatioToMantissaExponent**(`ratio`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ratio` | `Big` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `man` | `BigNumber` |
| `exp` | `BigNumber` |

#### Defined in

@mangrovedao/mangrove.js/src/util/tickPriceHelper.ts:366
