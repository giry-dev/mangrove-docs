[@mangrovedao/mangrove.js](../README.md) / [Exports](../modules.md) / [Semibook](../modules/Semibook-1.md) / CacheIterator

# Interface: CacheIterator

[Semibook](../modules/Semibook-1.md).CacheIterator

An iterator over a semibook cache.

## Hierarchy

- `IterableIterator`<[`Offer`](../modules/Market-1.md#offer)\>

  ↳ **`CacheIterator`**

## Table of contents

### Methods

- [filter](Semibook-1.CacheIterator.md#filter)
- [find](Semibook-1.CacheIterator.md#find)
- [toArray](Semibook-1.CacheIterator.md#toarray)
- [next](Semibook-1.CacheIterator.md#next)
- [return](Semibook-1.CacheIterator.md#return)
- [throw](Semibook-1.CacheIterator.md#throw)
- [[iterator]](Semibook-1.CacheIterator.md#[iterator])

## Methods

### <a id="filter" name="filter"></a> filter

▸ **filter**(`predicate`): [`CacheIterator`](Semibook-1.CacheIterator.md)

Filter the offers in the cache using a predicate.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`offer`: [`Offer`](../modules/Market-1.md#offer)) => `boolean` | Function is a predicate, to test each element of the array.   Should return `true` if the element should be kept; otherwise `false` should be returned. |

#### Returns

[`CacheIterator`](Semibook-1.CacheIterator.md)

#### Defined in

@mangrovedao/mangrove.js/src/semibook.ts:79

___

### <a id="find" name="find"></a> find

▸ **find**(`predicate`): [`Offer`](../modules/Market-1.md#offer)

Returns the value of the first element in the provided array that
satisfies the provided predicate. If no values satisfy the testing function,
`undefined` is returned.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`offer`: [`Offer`](../modules/Market-1.md#offer)) => `boolean` | Function is a predicate, to test each element of the array.  The firs offer that satisifies the predicate is returned;  otherwise `undefined` is returned. |

#### Returns

[`Offer`](../modules/Market-1.md#offer)

#### Defined in

@mangrovedao/mangrove.js/src/semibook.ts:89

___

### <a id="toarray" name="toarray"></a> toArray

▸ **toArray**(): [`Offer`](../modules/Market-1.md#offer)[]

Returns the elements in an array.

#### Returns

[`Offer`](../modules/Market-1.md#offer)[]

#### Defined in

@mangrovedao/mangrove.js/src/semibook.ts:92

___

### <a id="next" name="next"></a> next

▸ **next**(...`args`): `IteratorResult`<[`Offer`](../modules/Market-1.md#offer), `any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [] \| [`undefined`] |

#### Returns

`IteratorResult`<[`Offer`](../modules/Market-1.md#offer), `any`\>

#### Inherited from

IterableIterator.next

#### Defined in

typescript/lib/lib.es2015.iterable.d.ts:45

___

### <a id="return" name="return"></a> return

▸ `Optional` **return**(`value?`): `IteratorResult`<[`Offer`](../modules/Market-1.md#offer), `any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `value?` | `any` |

#### Returns

`IteratorResult`<[`Offer`](../modules/Market-1.md#offer), `any`\>

#### Inherited from

IterableIterator.return

#### Defined in

typescript/lib/lib.es2015.iterable.d.ts:46

___

### <a id="throw" name="throw"></a> throw

▸ `Optional` **throw**(`e?`): `IteratorResult`<[`Offer`](../modules/Market-1.md#offer), `any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `e?` | `any` |

#### Returns

`IteratorResult`<[`Offer`](../modules/Market-1.md#offer), `any`\>

#### Inherited from

IterableIterator.throw

#### Defined in

typescript/lib/lib.es2015.iterable.d.ts:47

___

### <a id="[iterator]" name="[iterator]"></a> [iterator]

▸ **[iterator]**(): `IterableIterator`<[`Offer`](../modules/Market-1.md#offer)\>

#### Returns

`IterableIterator`<[`Offer`](../modules/Market-1.md#offer)\>

#### Inherited from

IterableIterator.\_\_@iterator@90

#### Defined in

typescript/lib/lib.es2015.iterable.d.ts:55
