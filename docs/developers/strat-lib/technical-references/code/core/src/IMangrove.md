# Solidity API

## IMangrove

### DOMAIN_SEPARATOR

```solidity
function DOMAIN_SEPARATOR() external view returns (bytes32)
```

See {IERC20Permit-DOMAIN_SEPARATOR}.

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes32 | the domain separator. |

### PERMIT_TYPEHASH

```solidity
function PERMIT_TYPEHASH() external pure returns (bytes32)
```

See {IERC20Permit-PERMIT_TYPEHASH}.

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes32 | The permit type hash. |

### approve

```solidity
function approve(address outbound_tkn, address inbound_tkn, address spender, uint256 value) external returns (bool)
```

Approves the spender to spend the amount of tokens on behalf of the caller.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| outbound_tkn | address | The address of the (maker) outbound token. |
| inbound_tkn | address | The address of the (maker) inbound token. |
| spender | address | The address of the spender. |
| value | uint256 | The amount of tokens to approve. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | true If the approval succeeded; always true. |

### allowance

```solidity
function allowance(address outbound_tkn, address inbound_tkn, address owner, address spender) external view returns (uint256 amount)
```

Returns the allowance of the spender to spend tokens on behalf of the owner.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| outbound_tkn | address | The address of the (maker) outbound token. |
| inbound_tkn | address | The address of the (maker) inbound token. |
| owner | address | The address of the owner. |
| spender | address | The address of the spender. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| amount | uint256 | The amount of tokens the spender is allowed to spend on behalf of the owner. |

### permit

```solidity
function permit(address outbound_tkn, address inbound_tkn, address owner, address spender, uint256 value, uint256 deadline, uint8 v, bytes32 r, bytes32 s) external
```

Adapted from [Uniswap v2 contract](https://github.com/Uniswap/uniswap-v2-core/blob/55ae25109b7918565867e5c39f1e84b7edd19b2a/contracts/UniswapV2ERC20.sol#L81)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| outbound_tkn | address | The address of the (maker) outbound token. |
| inbound_tkn | address | The address of the (maker) inbound token. |
| owner | address | The address of the owner. |
| spender | address | The address of the spender. |
| value | uint256 | The amount of tokens to approve. |
| deadline | uint256 | The deadline after which the permit is no longer valid. |
| v | uint8 | The signature v parameter. |
| r | bytes32 | The signature r parameter. |
| s | bytes32 | The signature s parameter. |

### nonces

```solidity
function nonces(address owner) external view returns (uint256 nonce)
```

See {IERC20Permit-nonces}.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| owner | address | The address of the owner. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| nonce | uint256 | The current nonce of the owner. |

### marketOrderByTick

```solidity
function marketOrderByTick(struct OLKey olKey, Tick maxTick, uint256 fillVolume, bool fillWants) external returns (uint256 takerGot, uint256 takerGave, uint256 bounty, uint256 feePaid)
```

Performs a market order on a specified offer list taking offers up to a limit price.

_The market order stops when there are no more offers at or below `maxTick`, when the end of the book has been reached, or:
- If `fillWants` is true, the market order stops when `fillVolume` units of `olKey.outbound_tkn` have been obtained. To buy a specific volume of `olKey.outbound_tkn` at any price, set `fillWants` to true, set `fillVolume` to the volume you want to buy, and set `maxTick` to the `MAX_TICK` constant.
- If `fillWants` is false, the market order stops when `fillVolume` units of `olKey.inbound_tkn` have been paid. To sell a specific volume of `olKey.inbound_tkn` at any price, set `fillWants` to false, set `fillVolume` to the volume you want to sell, and set `maxTick` to the `MAX_TICK` constant._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| olKey | struct OLKey | The offer list key given by (maker) `outbound_tkn`, (maker) `inbound_tkn`, and `tickSpacing`. |
| maxTick | Tick | Must be `>= MIN_TICK` and `<= MAX_TICK`. The log of the limit price the taker is ready to pay (meaning: the log base 1.0001 of the ratio of inbound tokens over outbound tokens). |
| fillVolume | uint256 | Must be `<= MAX_SAFE_VOLUME`. If `fillWants` is true, the amount of `olKey.outbound_tkn` the taker wants to buy; otherwise, the amount of `olKey.inbound_tkn` the taker wants to sell. |
| fillWants | bool | If true, the matching engine tries to get the taker all they want; otherwise, the matching engine tries to sell all that the taker gives. In both cases subject to the price limit. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| takerGot | uint256 | The amount of `olKey.outbound_tkn` the taker got. |
| takerGave | uint256 | The amount of `olKey.inbound_tkn` the taker gave. |
| bounty | uint256 | The amount of native token the taker got as a bounty due to failing offers (in wei). |
| feePaid | uint256 | The amount of `olKey.outbound_tkn` the taker paid as a fee to Mangrove. |

### marketOrderByTickCustom

```solidity
function marketOrderByTickCustom(struct OLKey olKey, Tick maxTick, uint256 fillVolume, bool fillWants, uint256 maxGasreqForFailingOffers) external returns (uint256 takerGot, uint256 takerGave, uint256 bounty, uint256 feePaid)
```

Performs a market order on a specified offer list taking offers up to a limit price, while allowing to specify a custom `maxGasreqForFailingOffers`.

_Mangrove stops a market order after it has gone through failing offers such that their cumulative `gasreq` is greater than the global `maxGasreqForFailingOffers` parameter. This function can be used by the taker to override the default `maxGasreqForFailingOffers` parameter._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| olKey | struct OLKey | The offer list key given by (maker) `outbound_tkn`, (maker) `inbound_tkn`, and `tickSpacing`. |
| maxTick | Tick | Must be `>= MIN_TICK` and `<= MAX_TICK`. The log of the limit price the taker is ready to pay (meaning: the log base 1.0001 of the ratio of inbound tokens over outbound tokens). |
| fillVolume | uint256 | Must be `<= MAX_SAFE_VOLUME`. If `fillWants` is true, the amount of `olKey.outbound_tkn` the taker wants to buy; otherwise, the amount of `olKey.inbound_tkn` the taker wants to sell. |
| fillWants | bool | If true, the matching engine tries to get the taker all they want; otherwise, the matching engine tries to sell all that the taker gives. In both cases subject to the price limit. |
| maxGasreqForFailingOffers | uint256 | The maximum allowed gas required for failing offers (in wei). |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| takerGot | uint256 | The amount of `olKey.outbound_tkn` the taker got. |
| takerGave | uint256 | The amount of `olKey.inbound_tkn` the taker gave. |
| bounty | uint256 | The amount of native token the taker got as a bounty due to failing offers (in wei). |
| feePaid | uint256 | The amount of `olKey.outbound_tkn` the taker paid as a fee to Mangrove. |

### marketOrderByVolume

```solidity
function marketOrderByVolume(struct OLKey olKey, uint256 takerWants, uint256 takerGives, bool fillWants) external returns (uint256 takerGot, uint256 takerGave, uint256 bounty, uint256 feePaid)
```

Performs a market order on a specified offer list taking offers up to a limit price defined by a ratio `inbound_tkn/outbound_tkn` of volumes.

_This function is just a wrapper for `marketOrderByTick`, see that function for details.
When deriving the tick, then `takerWants = 0` has a special meaning and the tick for the highest possible ratio between wants and gives will be used,
and if `takerGives = 0` and `takerWants != 0`, then the tick for the lowest possible ratio will be used._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| olKey | struct OLKey | The offer list key given by (maker) `outbound_tkn`, (maker) `inbound_tkn`, and `tickSpacing`. |
| takerWants | uint256 | Must be `<= MAX_SAFE_VOLUME`. The amount the taker wants. This is used along with `takerGives` to derive a max price (`maxTick`) which is the lowest allowed tick in the offer list such that `log_1.0001(takerGives/takerWants) <= maxTick`. |
| takerGives | uint256 | Must be `<= MAX_SAFE_VOLUME`. The amount the taker gives. This is used along with `takerWants` to derive a max price (`maxTick`) which is the lowest allowed tick in the offer list such that `log_1.0001(takerGives/takerWants) <= maxTick`. |
| fillWants | bool | If true, the matching engine tries to get the taker all they want; otherwise, the matching engine tries to sell all that the taker gives. In both cases subject to the price limit. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| takerGot | uint256 | The amount of `olKey.outbound_tkn` the taker got. |
| takerGave | uint256 | The amount of `olKey.inbound_tkn` the taker gave. |
| bounty | uint256 | The amount of native token the taker got as a bounty due to failing offers (in wei). |
| feePaid | uint256 | The amount of `olKey.outbound_tkn` the taker paid as a fee to Mangrove. |

### marketOrderForByTick

```solidity
function marketOrderForByTick(struct OLKey olKey, Tick maxTick, uint256 fillVolume, bool fillWants, address taker) external returns (uint256 takerGot, uint256 takerGave, uint256 bounty, uint256 feePaid)
```

Performs a market order on a specified offer list taking offers up to a limit price for a specified taker.

_The `bounty` will be sent to `msg.sender` but transfers will be for `taker`. Requires prior permission.
See also `marketOrderByTick`._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| olKey | struct OLKey | The offer list key given by (maker) `outbound_tkn`, (maker) `inbound_tkn`, and `tickSpacing`. |
| maxTick | Tick | Must be `>= MIN_TICK` and `<= MAX_TICK`. The log of the limit price the taker is ready to pay (meaning: the log base 1.0001 of the ratio of inbound tokens over outbound tokens). |
| fillVolume | uint256 | Must be `<= MAX_SAFE_VOLUME`. If `fillWants` is true, the amount of `olKey.outbound_tkn` the taker wants to buy; otherwise, the amount of `olKey.inbound_tkn` the taker wants to sell. |
| fillWants | bool | If true, the matching engine tries to get the taker all they want; otherwise, the matching engine tries to sell all that the taker gives. In both cases subject to the price limit. |
| taker | address | The taker from which amounts will be transferred from and to. If the `msg.sender`'s allowance for the given `olKey.outbound_tkn`,`olKey.inbound_tkn` is strictly less than the total amount eventually spent by `taker`, the call will fail. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| takerGot | uint256 | The amount of `olKey.outbound_tkn` the taker got. |
| takerGave | uint256 | The amount of `olKey.inbound_tkn` the taker gave. |
| bounty | uint256 | The amount of native token the taker got as a bounty due to failing offers (in wei). |
| feePaid | uint256 | The amount of `olKey.outbound_tkn` the taker paid as a fee to Mangrove. |

### marketOrderForByVolume

```solidity
function marketOrderForByVolume(struct OLKey olKey, uint256 takerWants, uint256 takerGives, bool fillWants, address taker) external returns (uint256 takerGot, uint256 takerGave, uint256 bounty, uint256 feePaid)
```

Performs a market order on a specified offer list taking offers up to a limit price defined by a ratio `inbound_tkn/outbound_tkn` of volumes for a specified taker.

_The `bounty` will be send to `msg.sender` but transfers will be for `taker`. Requires prior permission.
See also `marketOrderByVolume`._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| olKey | struct OLKey | The offer list key given by (maker) `outbound_tkn`, (maker) `inbound_tkn`, and `tickSpacing`. |
| takerWants | uint256 | Must be `<= MAX_SAFE_VOLUME`. The amount the taker wants. This is used along with `takerGives` to derive a max price (`maxTick`) which is the lowest allowed tick in the offer list such that `log_1.0001(takerGives/takerWants) <= maxTick`. |
| takerGives | uint256 | Must be `<= MAX_SAFE_VOLUME`. The amount the taker gives. This is used along with `takerGives` to derive a max price (`maxTick`) which is the lowest allowed tick in the offer list such that `log_1.0001(takerGives/takerWants) <= maxTick`. |
| fillWants | bool | If true, the matching engine tries to get the taker all they want; otherwise, the matching engine tries to sell all that the taker gives. In both cases subject to the price limit. |
| taker | address | The taker from which amounts will be transferred from and to the. If the `msg.sender`'s allowance for the given `olKey.outbound_tkn`,`olKey.inbound_tkn` are strictly less than the total amount eventually spent by `taker`, the call will fail. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| takerGot | uint256 | The amount of `olKey.outbound_tkn` the taker got. |
| takerGave | uint256 | The amount of `olKey.inbound_tkn` the taker gave. |
| bounty | uint256 | The amount of native token the taker got as a bounty due to failing offers (in wei). |
| feePaid | uint256 | The amount of native token the taker paid as a fee (in wei of `olKey.outbound_tkn`). |

### cleanByImpersonation

```solidity
function cleanByImpersonation(struct OLKey olKey, struct MgvLib.CleanTarget[] targets, address taker) external returns (uint256 successes, uint256 bounty)
```

Cleans multiple offers, i.e. executes them and removes them from the book if they fail, transferring the failure penalty as bounty to the caller.

_If an offer succeeds, the execution of that offer is reverted, it stays in the book, and no bounty is paid; The `cleanByImpersonation` function itself will not revert.
Note that Mangrove won't attempt to execute an offer if the values in a target don't match its offer. To distinguish between a non-executed clean and a failed clean (due to the offer itself not failing), you must inspect the log (see `MgvLib.sol`) or check the received bounty.
Any `taker` can be impersonated when cleaning because:
- The function reverts if the offer succeeds, reverting any token transfers.
- After a `clean` where the offer has failed, all ERC20 token transfers have also been reverted -- but the sender will still have received the bounty of the failing offers. */_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| olKey | struct OLKey | The offer list key given by (maker) `outbound_tkn`, (maker) `inbound_tkn`, and `tickSpacing`. |
| targets | struct MgvLib.CleanTarget[] | The offers to clean, identified by their (`offerId, tick, gasreq, takerWants`) that will make them fail. |
| taker | address | The taker used for transfers (should be able to deliver token amounts). |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| successes | uint256 | The number of successfully cleaned offers. |
| bounty | uint256 | The total bounty received by the caller. |

### receive

```solidity
receive() external payable
```

Adds funds to Mangrove for the caller (the maker) to use for provisioning offers.

### fund

```solidity
function fund() external payable
```

Adds funds to Mangrove for the caller (the maker) to use for provisioning offers.

### fund

```solidity
function fund(address maker) external payable
```

Adds funds to Mangrove for the maker to use for provisioning offers.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| maker | address | The maker to add funds for. |

### withdraw

```solidity
function withdraw(uint256 amount) external returns (bool noRevert)
```

Withdraws the caller's (the maker's) free native tokens (funds for provisioning offers not locked by an offer) by transferring them to the caller.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| amount | uint256 | The amount to withdraw. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| noRevert | bool | Whether the transfer succeeded. |

### balanceOf

```solidity
function balanceOf(address maker) external view returns (uint256 balance)
```

Gets the maker's free balance of native tokens (funds for provisioning offers not locked by an offer).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| maker | address | The maker to get the balance for. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| balance | uint256 | The maker's free balance of native tokens (funds for provisioning offers not locked by an offer). |

### newOfferByTick

```solidity
function newOfferByTick(struct OLKey olKey, Tick tick, uint256 gives, uint256 gasreq, uint256 gasprice) external payable returns (uint256 offerId)
```

Creates a new offer on Mangrove, where the caller is the maker. The maker can implement the `IMaker` interface to be called during offer execution.

_The gasreq and gasprice are used to derive the provision which will be used to pay a penalty if the offer fails.
This function is payable to enable delivery of the provision along with the offer creation._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| olKey | struct OLKey | The offer list key given by (maker) `outbound_tkn`, (maker) `inbound_tkn`, and `tickSpacing`. |
| tick | Tick | Must be `>= MIN_TICK` and `<= MAX_TICK`. The `tick` induces a price which is `1.0001^tick`. The actual tick of the offer will be the smallest tick `offerTick > tick` that satisfies `offerTick % tickSpacing == 0`. |
| gives | uint256 | Must be `<= MAX_SAFE_VOLUME`. The amount of `olKey.outbound_tkn` the maker gives. |
| gasreq | uint256 | The amount of gas required to execute the offer logic in the maker's `IMaker` implementation. This will limit the gas available, and the offer will fail if it spends more. |
| gasprice | uint256 | The maximum gas price the maker is willing to pay a penalty for due to failing execution. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| offerId | uint256 | The id of the offer on Mangrove. Can be used to retract or update the offer (even to reuse a taken offer). |

### newOfferByVolume

```solidity
function newOfferByVolume(struct OLKey olKey, uint256 wants, uint256 gives, uint256 gasreq, uint256 gasprice) external payable returns (uint256 offerId)
```

Creates a new offer on Mangrove, where the caller is the maker. The maker can implement the `IMaker` interface to be called during offer execution.

_This function is just a wrapper for `newOfferByTick`, see that function for details._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| olKey | struct OLKey | The offer list key given by (maker) `outbound_tkn`, (maker) `inbound_tkn`, and `tickSpacing`. |
| wants | uint256 | Must be less than MAX_SAFE_VOLUME. The amount of `olKey.inbound_tkn` the maker wants. This is used along with `gives` to derive a tick (price). which is the lowest allowed tick in the offer list such that `log_1.0001(takerGives/takerWants) <= maxTick`. |
| gives | uint256 | Must be less than MAX_SAFE_VOLUME. The amount of `olKey.outbound_tkn` the maker gives. This is used along with `wants` to derive a tick (price). which is the lowest allowed tick in the offer list such that `log_1.0001(takerGives/takerWants) <= maxTick`. Must be less than MAX_SAFE_VOLUME. |
| gasreq | uint256 | The amount of gas required to execute the offer logic in the maker's `IMaker` implementation. This will limit the gas available, and the offer will fail if it spends more. |
| gasprice | uint256 | The maximum gas price the maker is willing to pay a penalty for due to failing execution. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| offerId | uint256 | The id of the offer on Mangrove. Can be used to retract or update the offer (even to reuse a taken offer). |

### updateOfferByTick

```solidity
function updateOfferByTick(struct OLKey olKey, Tick tick, uint256 gives, uint256 gasreq, uint256 gasprice, uint256 offerId) external payable
```

Updates an existing offer on Mangrove, where the caller is the maker.

_See `newOfferByTick` for additional details._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| olKey | struct OLKey | The offer list key given by (maker) `outbound_tkn`, (maker) `inbound_tkn`, and `tickSpacing`. |
| tick | Tick | Must be `>= MIN_TICK` and `<= MAX_TICK`. The `tick` induces a price which is `1.0001^tick`. The actual tick of the offer will be the smallest tick `offerTick > tick` that satisfies `offerTick % tickSpacing == 0`. |
| gives | uint256 | The amount of `olKey.outbound_tkn` the maker gives. Must be less than MAX_SAFE_VOLUME. |
| gasreq | uint256 | The amount of gas required to execute the offer logic in the maker's `IMaker` implementation. |
| gasprice | uint256 | The maximum gas price the maker is willing to pay a penalty for due to failing execution. |
| offerId | uint256 | The id of the offer on Mangrove. |

### updateOfferByVolume

```solidity
function updateOfferByVolume(struct OLKey olKey, uint256 wants, uint256 gives, uint256 gasreq, uint256 gasprice, uint256 offerId) external payable
```

Updates an existing, owned offer on Mangrove, where the caller is the maker.

_This function is just a wrapper for `updateOfferByTick`, see that function for details._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| olKey | struct OLKey | The offer list key given by (maker) `outbound_tkn`, (maker) `inbound_tkn`, and `tickSpacing`. |
| wants | uint256 | The amount of `olKey.inbound_tkn` the maker wants. This is used along with `gives` to derive a tick (price). which is the lowest allowed tick in the offer list such that `log_1.0001(takerGives/takerWants) <= maxTick`. |
| gives | uint256 | The amount of `olKey.outbound_tkn` the maker gives. This is used along with `wants` to derive a tick (price). which is the lowest allowed tick in the offer list such that `log_1.0001(takerGives/takerWants) <= maxTick`. Must be less than MAX_SAFE_VOLUME. |
| gasreq | uint256 | The amount of gas required to execute the offer logic in the maker's `IMaker` implementation. |
| gasprice | uint256 | The maximum gas price the maker is willing to pay a penalty for due to failing execution. |
| offerId | uint256 | The id of the offer on Mangrove. |

### retractOffer

```solidity
function retractOffer(struct OLKey olKey, uint256 offerId, bool deprovision) external returns (uint256 provision)
```

Retracts an offer from Mangrove, where the caller is the maker.

_`withdraw` can be used to withdraw the funds after deprovisioning.
Leaving funds provisioned can be used to save gas if offer is later updated._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| olKey | struct OLKey | The offer list key given by (maker) `outbound_tkn`, (maker) `inbound_tkn`, and `tickSpacing`. |
| offerId | uint256 | The id of the offer on Mangrove. |
| deprovision | bool | Whether to deprovision the offer, i.e, return the provision to the maker's balance on Mangrove. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| provision | uint256 | The amount of native token deprovisioned for the offer (in wei). |

### global

```solidity
function global() external view returns (Global _global)
```

Gets the global configuration for Mangrove.

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| _global | Global | The global configuration for Mangrove. |

### local

```solidity
function local(struct OLKey olKey) external view returns (Local _local)
```

Gets the local configuration for a specific offer list.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| olKey | struct OLKey | The offer list key given by (maker) `outbound_tkn`, (maker) `inbound_tkn`, and `tickSpacing`. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| _local | Local | The local configuration for the offer list. |

### config

```solidity
function config(struct OLKey olKey) external view returns (Global _global, Local _local)
```

Gets the global configuration for Mangrove and local the configuration for a specific offer list.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| olKey | struct OLKey | The offer list key given by (maker) `outbound_tkn`, (maker) `inbound_tkn`, and `tickSpacing`. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| _global | Global | The global configuration for Mangrove. |
| _local | Local | The local configuration for the offer list. |

### locked

```solidity
function locked(struct OLKey olKey) external view returns (bool)
```

Determines whether the reentrancy lock is in effect for the offer list.

_The lock protects modifying or inspecting the offer list while an order is in progress._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| olKey | struct OLKey | The offer list key given by (maker) `outbound_tkn`, (maker) `inbound_tkn`, and `tickSpacing`. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | true If locked; otherwise, false. |

### best

```solidity
function best(struct OLKey olKey) external view returns (uint256 offerId)
```

Gets the `offerId` of the best offer in the offer list.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| olKey | struct OLKey | The offer list key given by (maker) `outbound_tkn`, (maker) `inbound_tkn`, and `tickSpacing`. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| offerId | uint256 | The `offerId` of the best offer on the offer list. |

### olKeys

```solidity
function olKeys(bytes32 olKeyHash) external view returns (struct OLKey olKey)
```

Gets the offer list key with the given hash (if the offer list key has been activated at least once).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| olKeyHash | bytes32 | The hash of the offer list key. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| olKey | struct OLKey | The olKey. |

### offers

```solidity
function offers(struct OLKey olKey, uint256 offerId) external view returns (Offer offer)
```

Gets an offer in packed format.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| olKey | struct OLKey | The offer list key given by (maker) `outbound_tkn`, (maker) `inbound_tkn`, and `tickSpacing`. |
| offerId | uint256 | The `offerId` of the offer on the offer list. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| offer | Offer | The offer in packed format. |

### offerDetails

```solidity
function offerDetails(struct OLKey olKey, uint256 offerId) external view returns (OfferDetail offerDetail)
```

Gets an offer's details in packed format.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| olKey | struct OLKey | The offer list key given by (maker) `outbound_tkn`, (maker) `inbound_tkn`, and `tickSpacing`. |
| offerId | uint256 | The `offerId` of the offer on the offer list. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| offerDetail | OfferDetail | The offer details in packed format. |

### offerData

```solidity
function offerData(struct OLKey olKey, uint256 offerId) external view returns (Offer offer, OfferDetail offerDetail)
```

Gets both an offer and its details in packed format.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| olKey | struct OLKey | The offer list key given by (maker) `outbound_tkn`, (maker) `inbound_tkn`, and `tickSpacing`. |
| offerId | uint256 | The `offerId` of the offer on the offer list. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| offer | Offer | The offer in packed format. |
| offerDetail | OfferDetail | The offer details in packed format. |

### governance

```solidity
function governance() external view returns (address)
```

Gets the governance address.

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address | The governance address. |

### activate

```solidity
function activate(struct OLKey olKey, uint256 fee, uint256 density96X32, uint256 offer_gasbase) external
```

Activates an offer list.

_If the flipped offer list is active then the offer lists are expected to have the same `tickSpacing`._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| olKey | struct OLKey | The offer list key given by (maker) `outbound_tkn`, (maker) `inbound_tkn`, and `tickSpacing`. |
| fee | uint256 | In basis points, of `olKey.outbound_tkn` given to the taker. This fee is sent to Mangrove. Fee is capped to ~2.5%. |
| density96X32 | uint256 | The density of the offer list used to define a minimum offer volume. See `setDensity96X32`. |
| offer_gasbase | uint256 | The gasbase of the offer list used to define a minimum provision necessary for offers. See `setGasbase`. |

### deactivate

```solidity
function deactivate(struct OLKey olKey) external
```

Deactivates an offer list.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| olKey | struct OLKey | The offer list key given by (maker) `outbound_tkn`, (maker) `inbound_tkn`, and `tickSpacing`. |

### kill

```solidity
function kill() external
```

Kills the Mangrove instance. A dead instance cannot have offers executed or funds received, but offers can be retracted and funds can be withdrawn.

### setDensity96X32

```solidity
function setDensity96X32(struct OLKey olKey, uint256 density96X32) external
```

Sets the density.

_Useless if `global.useOracle != 0` and oracle returns a valid density._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| olKey | struct OLKey | The offer list key given by (maker) `outbound_tkn`, (maker) `inbound_tkn`, and `tickSpacing`. |
| density96X32 | uint256 | Is given as a 96.32 fixed point number. It will be stored as a 9-bit float and be approximated towards 0. The maximum error is 20%. See `DensityLib` for more information. |

### setFee

```solidity
function setFee(struct OLKey olKey, uint256 fee) external
```

Sets the fee for the offer list.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| olKey | struct OLKey | The offer list key given by (maker) `outbound_tkn`, (maker) `inbound_tkn`, and `tickSpacing`. |
| fee | uint256 | In basis points, of `olKey.outbound_tkn` given to the taker. This fee is sent to Mangrove. Fee is capped to ~2.5%. |

### setGasbase

```solidity
function setGasbase(struct OLKey olKey, uint256 offer_gasbase) external
```

Sets the gasbase for the offer list.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| olKey | struct OLKey | The offer list key given by (maker) `outbound_tkn`, (maker) `inbound_tkn`, and `tickSpacing`. |
| offer_gasbase | uint256 | The gasbase of the offer list used to define a minimum provision necessary for offers. Represents the gas overhead used by processing the offer inside Mangrove + the overhead of initiating an entire order. Stored in thousands in a maximum of 9 bits. |

### setGasmax

```solidity
function setGasmax(uint256 gasmax) external
```

Sets the gasmax for Mangrove, the maximum amount of gas an offer can require to execute.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| gasmax | uint256 | The maximum amount of gas required to execute an offer. Must fit in 24 bits. |

### setMaxRecursionDepth

```solidity
function setMaxRecursionDepth(uint256 maxRecursionDepth) external
```

Sets the maximum number of times a market order can recursively execute offers. This is a protection against stack overflows.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| maxRecursionDepth | uint256 | The maximum number of times a market order can recursively execute offers. |

### setMaxGasreqForFailingOffers

```solidity
function setMaxGasreqForFailingOffers(uint256 maxGasreqForFailingOffers) external
```

Sets the maximum cumulative `gasreq` for failing offers during a market order before doing a partial fill.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| maxGasreqForFailingOffers | uint256 | The maximum cumulative `gasreq` for failing offers during a market order before doing a partial fill. 32 bits. |

### setGasprice

```solidity
function setGasprice(uint256 gasprice) external
```

Sets the gasprice (in Mwei, 26 bits).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| gasprice | uint256 | The gasprice (in Mwei, 26 bits). |

### setGovernance

```solidity
function setGovernance(address governanceAddress) external
```

Sets a new governance address.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| governanceAddress | address | The new governance address. |

### setMonitor

```solidity
function setMonitor(address monitor) external
```

Sets the monitor/oracle. The `monitor/oracle` can provide real-time values for `gasprice` and `density` to Mangrove. It can also receive liquidity event notifications.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| monitor | address | The new monitor/oracle address. |

### setNotify

```solidity
function setNotify(bool notify) external
```

Sets whether Mangrove notifies the Monitor when and offer is taken.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| notify | bool | Whether Mangrove notifies the Monitor when and offer is taken. |

### setUseOracle

```solidity
function setUseOracle(bool useOracle) external
```

Sets whether Mangrove uses the monitor as oracle for `gasprice` and `density` values.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| useOracle | bool | Whether Mangrove uses the monitor as oracle for `gasprice` and `density` values. |

### withdrawERC20

```solidity
function withdrawERC20(address tokenAddress, uint256 value) external
```

Transfer ERC20 tokens to governance.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| tokenAddress | address | The address of the ERC20 token. |
| value | uint256 | The amount of tokens to transfer. |

### leafs

```solidity
function leafs(struct OLKey olKey, int256 index) external view returns (Leaf)
```

Gets a leaf.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| olKey | struct OLKey | The offer list key given by (maker) `outbound_tkn`, (maker) `inbound_tkn`, and `tickSpacing`. |
| index | int256 | The index. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | Leaf | The leaf. |

### level3s

```solidity
function level3s(struct OLKey olKey, int256 index) external view returns (Field)
```

Gets a level 3 field.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| olKey | struct OLKey | The offer list key given by (maker) `outbound_tkn`, (maker) `inbound_tkn`, and `tickSpacing`. |
| index | int256 | The index. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | Field | The field. |

### level2s

```solidity
function level2s(struct OLKey olKey, int256 index) external view returns (Field)
```

Gets a level 2 field.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| olKey | struct OLKey | The offer list key given by (maker) `outbound_tkn`, (maker) `inbound_tkn`, and `tickSpacing`. |
| index | int256 | The index. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | Field | The field. |

### level1s

```solidity
function level1s(struct OLKey olKey, int256 index) external view returns (Field)
```

Gets a level 1 field.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| olKey | struct OLKey | The offer list key given by (maker) `outbound_tkn`, (maker) `inbound_tkn`, and `tickSpacing`. |
| index | int256 | The index. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | Field | Yhe field. |

### root

```solidity
function root(struct OLKey olKey) external view returns (Field)
```

Gets the root from local.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| olKey | struct OLKey | The offer list key given by (maker) `outbound_tkn`, (maker) `inbound_tkn`, and `tickSpacing`. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | Field | The root. |

### flashloan

```solidity
function flashloan(struct MgvLib.SingleOrder sor, address taker) external returns (uint256 gasused, bytes32 makerData)
```

Internal function used to flashloan tokens from taker to maker, for maker to source the promised liquidity.

_Not to be called externally - only external to be able to revert._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sor | struct MgvLib.SingleOrder | Data about an order-offer match. |
| taker | address | The taker. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| gasused | uint256 | The amount of gas used for `makerExecute`. |
| makerData | bytes32 | The data returned by `makerExecute`. |

### internalCleanByImpersonation

```solidity
function internalCleanByImpersonation(struct OLKey olKey, uint256 offerId, Tick tick, uint256 gasreq, uint256 takerWants, address taker) external returns (uint256 bounty)
```

Internal function used to clean failing offers.

_Not to be called externally - only external to be able to revert._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| olKey | struct OLKey | The offer list key given by (maker) `outbound_tkn`, (maker) `inbound_tkn`, and `tickSpacing`. |
| offerId | uint256 | The id of the offer on Mangrove. |
| tick | Tick | Must be `>= MIN_TICK` and `<= MAX_TICK`. The `tick` induces a price which is `1.0001^tick`. The actual tick of the offer will be the smallest tick `offerTick > tick` that satisfies `offerTick % tickSpacing == 0`. |
| gasreq | uint256 | The gas required for the offer. |
| takerWants | uint256 | Must be `<= MAX_SAFE_VOLUME`. The amount of `olKey.outbound_tkn` the taker wants. |
| taker | address | The taker used for transfers (should be able to deliver token amounts). |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| bounty | uint256 | The bounty paid. |

### fallback

```solidity
fallback(bytes callData) external returns (bytes)
```

Fall back function (forwards calls to `MgvAppendix`).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| callData | bytes | The call data. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bytes | The result. |

