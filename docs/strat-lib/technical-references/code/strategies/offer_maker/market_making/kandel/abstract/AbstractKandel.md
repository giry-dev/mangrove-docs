## AbstractKandel

### SetCompoundRates

```solidity
event SetCompoundRates(uint256 compoundRateBase, uint256 compoundRateQuote)
```

the compound rates have been set to `compoundRateBase` and `compoundRateQuote` which will take effect for future compounding.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| compoundRateBase | uint256 | the compound rate for base. |
| compoundRateQuote | uint256 | the compound rate for quote. |

### SetGasprice

```solidity
event SetGasprice(uint256 value)
```

the gasprice has been set.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| value | uint256 | the gasprice for offers. |

### SetGasreq

```solidity
event SetGasreq(uint256 value)
```

the gasreq has been set.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| value | uint256 | the gasreq (including router's gasreq) for offers |

### Credit

```solidity
event Credit(contract IERC20 token, uint256 amount)
```

the Kandel instance is credited of `amount` by its owner.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract IERC20 | the asset. |
| amount | uint256 | the amount. |

### Debit

```solidity
event Debit(contract IERC20 token, uint256 amount)
```

the Kandel instance is debited of `amount` by its owner.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract IERC20 | the asset. |
| amount | uint256 | the amount. |

### pending

```solidity
function pending(enum OfferType ba) external view virtual returns (int256)
```

the amount of liquidity that is available for the strat but not offered by the given offer type.

_Pending could be withdrawn or invested by increasing offered volume._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ba | enum OfferType | the offer type. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | int256 | the amount of pending liquidity. Will be negative if more is offered than is available on the reserve balance. |

### reserveBalance

```solidity
function reserveBalance(enum OfferType ba) public view virtual returns (uint256 balance)
```

the total balance available for the strat of the offered token for the given offer type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| ba | enum OfferType | the offer type. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| balance | uint256 | the balance of the token. |

### depositFunds

```solidity
function depositFunds(uint256 baseAmount, uint256 quoteAmount) public virtual
```

deposits funds to be available for being offered. Will increase `pending`.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| baseAmount | uint256 | the amount of base tokens to deposit. |
| quoteAmount | uint256 | the amount of quote tokens to deposit. |

### withdrawFunds

```solidity
function withdrawFunds(uint256 baseAmount, uint256 quoteAmount, address recipient) public virtual
```

withdraws the amounts of the given tokens to the recipient.

_it is up to the caller to make sure there are still enough funds for live offers._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| baseAmount | uint256 | the amount of base tokens to withdraw. |
| quoteAmount | uint256 | the amount of quote tokens to withdraw. |
| recipient | address | the recipient of the funds. |

### setCompoundRates

```solidity
function setCompoundRates(uint256 compoundRateBase, uint256 compoundRateQuote) public virtual
```

set the compound rates. It will take effect for future compounding.

_For low compound rates Kandel can end up with everything as pending and nothing offered.
To avoid this, then for equal compound rates `C` then $C >= 1/(sqrt(ratio^spread)+1)$.
With one rate being 0 and the other 1 the amount earned from the spread will accumulate as pending
for the token at 0 compounding and the offered volume will stay roughly static (modulo rounding)._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| compoundRateBase | uint256 | the compound rate for base. |
| compoundRateQuote | uint256 | the compound rate for quote. |

### setGasprice

```solidity
function setGasprice(uint256 gasprice) public virtual
```

sets the gasprice for offers

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| gasprice | uint256 | the gasprice. |

### setGasreq

```solidity
function setGasreq(uint256 gasreq) public virtual
```

sets the gasreq (including router's gasreq) for offers

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| gasreq | uint256 | the gasreq. |

