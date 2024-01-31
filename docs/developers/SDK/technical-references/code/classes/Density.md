---
id: "Density"
title: "Class: Density"
sidebar_label: "Density"
sidebar_position: 0
custom_edit_url: null
---

Utility wrapper around raw Density values from Mangrove.

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new Density**(`rawDensity`, `outboundDecimals`): [`Density`](Density.md)

Construct a wrapper around a raw Density from Mangrove.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rawDensity` | `BigNumberish` | A raw Density from Mangrove |
| `outboundDecimals` | `number` | number of decimals for the outbound token |

#### Returns

[`Density`](Density.md)

#### Defined in

@mangrovedao/mangrove.js/src/util/Density.ts:20

## Methods

### <a id="clone" name="clone"></a> clone

▸ **clone**(): [`Density`](Density.md)

Create a copy of this Density object.

#### Returns

[`Density`](Density.md)

#### Defined in

@mangrovedao/mangrove.js/src/util/Density.ts:29

___

### <a id="from96x32" name="from96x32"></a> from96X32

▸ **from96X32**(`density96X32`, `outbound_decimals`): [`Density`](Density.md)

Factory method for creating a Density object from a 96X32 density.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `density96X32` | `BigNumberish` | density encoded as a 96X32 |
| `outbound_decimals` | `number` | number of decimals for the outbound token |

#### Returns

[`Density`](Density.md)

a Density object corresponding to the given density

#### Defined in

@mangrovedao/mangrove.js/src/util/Density.ts:40

___

### <a id="eq" name="eq"></a> eq

▸ **eq**(`density`): `boolean`

Equality comparison for densities.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `density` | [`Density`](Density.md) | The density to compare to |

#### Returns

`boolean`

true if the given density is equal to this density; false otherwise

#### Defined in

@mangrovedao/mangrove.js/src/util/Density.ts:56

___

### <a id="tostring" name="tostring"></a> toString

▸ **toString**(): `string`

Format the density formatted as a string.

#### Returns

`string`

the density formatted as a 'mantissa * 2^exponent' string

#### Defined in

@mangrovedao/mangrove.js/src/util/Density.ts:68

___

### <a id="tostring-1" name="tostring-1"></a> toString

▸ **toString**(`rawDensity`): `string`

Format the density formatted as a string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rawDensity` | `BigNumberish` | the raw density to format |

#### Returns

`string`

the density formatted as a 'mantissa * 2^exponent' string

#### Defined in

@mangrovedao/mangrove.js/src/util/Density.ts:78

___

### <a id="iszero" name="iszero"></a> isZero

▸ **isZero**(): `boolean`

Check whether the density is zero.

#### Returns

`boolean`

true if the density is zero; false otherwise

#### Defined in

@mangrovedao/mangrove.js/src/util/Density.ts:108

___

### <a id="getrequiredoutboundforgasreq" name="getrequiredoutboundforgasreq"></a> getRequiredOutboundForGasreq

▸ **getRequiredOutboundForGasreq**(`gasreq`): `Big`

Get the minimum amount of outbound tokens required for the given amount of gas.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `gasreq` | `BigNumberish` | the amount of gas to calculate the required outbound for |

#### Returns

`Big`

the minimum amount of outbound tokens required for the given amount of gas

#### Defined in

@mangrovedao/mangrove.js/src/util/Density.ts:118

___

### <a id="getmaximumgasforrawoutbound" name="getmaximumgasforrawoutbound"></a> getMaximumGasForRawOutbound

▸ **getMaximumGasForRawOutbound**(`rawOutboundAmt`): `BigNumber`

Get the maximum amount of gas an offer may require for the given raw amount of outbound tokens.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rawOutboundAmt` | `BigNumberish` | the raw amount of outbound tokens to calculate the maximum gas for |

#### Returns

`BigNumber`

the maximum amount of gas an offer may require for the given raw amount of outbound tokens

#### Defined in

@mangrovedao/mangrove.js/src/util/Density.ts:133
