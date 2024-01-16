---
id: "TokenCalculations"
title: "Class: TokenCalculations"
sidebar_label: "TokenCalculations"
sidebar_position: 0
custom_edit_url: null
---

Calculates to and from units for a token based on decimals

## Hierarchy

- **`TokenCalculations`**

  ↳ [`Token`](Token.md)

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new TokenCalculations**(`decimals`, `displayedDecimals`): [`TokenCalculations`](TokenCalculations.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `decimals` | `number` | Number of decimals used by the token. |
| `displayedDecimals` | `number` | - |

#### Returns

[`TokenCalculations`](TokenCalculations.md)

#### Defined in

@mangrovedao/mangrove.js/src/token.ts:64

## Properties

### <a id="decimals" name="decimals"></a> decimals

• **decimals**: `number`

Number of decimals used by the token.

#### Defined in

@mangrovedao/mangrove.js/src/token.ts:65

___

### <a id="displayeddecimals" name="displayeddecimals"></a> displayedDecimals

• **displayedDecimals**: `number`

#### Defined in

@mangrovedao/mangrove.js/src/token.ts:66

## Methods

### <a id="fromunits" name="fromunits"></a> fromUnits

▸ **fromUnits**(`amount`): `Big`

Convert base/quote from internal amount to public amount.
Uses each token's `decimals` parameter.

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `string` \| `number` \| `BigNumber` |

#### Returns

`Big`

**`Example`**

```
const usdc = await mgv.token("USDC");
token.fromUnits("1e7") // 10
const dai = await mgv.token("DAI")
market.fromUnits("1e18") // 1
```

#### Defined in

@mangrovedao/mangrove.js/src/token.ts:81

___

### <a id="tounits" name="tounits"></a> toUnits

▸ **toUnits**(`amount`): `BigNumber`

Convert base/quote from public amount to internal contract amount.
Uses each token's `decimals` parameter.

If `bq` is `"base"`, will convert the base, the quote otherwise.

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `BigSource` |

#### Returns

`BigNumber`

**`Example`**

```
const usdc = await mgv.token("USDC");
token.toUnits(10) // 10e7 as ethers.BigNumber
const dai = await mgv.token("DAI")
market.toUnits(1) // 1e18 as ethers.BigNumber
```

#### Defined in

@mangrovedao/mangrove.js/src/token.ts:98

___

### <a id="tofixed" name="tofixed"></a> toFixed

▸ **toFixed**(`amount`, `decimals?`): `string`

Convert human-readable amounts to a string with the given
number of decimal places. Defaults to the token's decimals places.

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `BigSource` |
| `decimals?` | `number` |

#### Returns

`string`

**`Example`**

```
token.toFixed("10.123"); // "10.12"
token.toFixed(token.fromUnits("1e7"));
```

#### Defined in

@mangrovedao/mangrove.js/src/token.ts:112

___

### <a id="round" name="round"></a> round

▸ **round**(`amount`): `Big`

Rounds an amount according to the token's decimals.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `Big` | The amount to round. |

#### Returns

`Big`

The rounded amount.

#### Defined in

@mangrovedao/mangrove.js/src/token.ts:123
