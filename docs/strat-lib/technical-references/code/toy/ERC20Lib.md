## Context

_Provides information about the current execution context, including the
sender of the transaction and its data. While these are generally available
via msg.sender and msg.data, they should not be accessed in such a direct
manner, since when dealing with meta-transactions the account sending and
paying for execution may not be the actual sender (as far as an application
is concerned).

This contract is only required for intermediate, library-like contracts._

### _msgSender

```solidity
function _msgSender() internal view virtual returns (address)
```

### _msgData

```solidity
function _msgData() internal view virtual returns (bytes)
```

## ECDSA

_Elliptic Curve Digital Signature Algorithm (ECDSA) operations.

These functions can be used to verify that a message was signed by the holder
of the private keys of a given address._

### RecoverError

```solidity
enum RecoverError {
  NoError,
  InvalidSignature,
  InvalidSignatureLength,
  InvalidSignatureS,
  InvalidSignatureV
}
```

### _throwError

```solidity
function _throwError(enum ECDSA.RecoverError error) private pure
```

### tryRecover

```solidity
function tryRecover(bytes32 hash, bytes signature) internal pure returns (address, enum ECDSA.RecoverError)
```

_Returns the address that signed a hashed message (`hash`) with
`signature` or error string. This address can then be used for verification purposes.

The `ecrecover` EVM opcode allows for malleable (non-unique) signatures:
this function rejects them by requiring the `s` value to be in the lower
half order, and the `v` value to be either 27 or 28.

IMPORTANT: `hash` _must_ be the result of a hash operation for the
verification to be secure: it is possible to craft signatures that
recover to arbitrary addresses for non-hashed data. A safe way to ensure
this is by receiving a hash of the original message (which may otherwise
be too long), and then calling {toEthSignedMessageHash} on it.

Documentation for signature generation:
- with https://web3js.readthedocs.io/en/v1.3.4/web3-eth-accounts.html#sign[Web3.js]
- with https://docs.ethers.io/v5/api/signer/#Signer-signMessage[ethers]

_Available since v4.3.__

### recover

```solidity
function recover(bytes32 hash, bytes signature) internal pure returns (address)
```

_Returns the address that signed a hashed message (`hash`) with
`signature`. This address can then be used for verification purposes.

The `ecrecover` EVM opcode allows for malleable (non-unique) signatures:
this function rejects them by requiring the `s` value to be in the lower
half order, and the `v` value to be either 27 or 28.

IMPORTANT: `hash` _must_ be the result of a hash operation for the
verification to be secure: it is possible to craft signatures that
recover to arbitrary addresses for non-hashed data. A safe way to ensure
this is by receiving a hash of the original message (which may otherwise
be too long), and then calling {toEthSignedMessageHash} on it._

### tryRecover

```solidity
function tryRecover(bytes32 hash, bytes32 r, bytes32 vs) internal pure returns (address, enum ECDSA.RecoverError)
```

_Overload of {ECDSA-tryRecover} that receives the `r` and `vs` short-signature fields separately.

See https://eips.ethereum.org/EIPS/eip-2098[EIP-2098 short signatures]

_Available since v4.3.__

### recover

```solidity
function recover(bytes32 hash, bytes32 r, bytes32 vs) internal pure returns (address)
```

_Overload of {ECDSA-recover} that receives the `r and `vs` short-signature fields separately.

_Available since v4.2.__

### tryRecover

```solidity
function tryRecover(bytes32 hash, uint8 v, bytes32 r, bytes32 s) internal pure returns (address, enum ECDSA.RecoverError)
```

_Overload of {ECDSA-tryRecover} that receives the `v`,
`r` and `s` signature fields separately.

_Available since v4.3.__

### recover

```solidity
function recover(bytes32 hash, uint8 v, bytes32 r, bytes32 s) internal pure returns (address)
```

_Overload of {ECDSA-recover} that receives the `v`,
`r` and `s` signature fields separately._

### toEthSignedMessageHash

```solidity
function toEthSignedMessageHash(bytes32 hash) internal pure returns (bytes32)
```

_Returns an Ethereum Signed Message, created from a `hash`. This
produces hash corresponding to the one signed with the
https://eth.wiki/json-rpc/API#eth_sign[`eth_sign`]
JSON-RPC method as part of EIP-191.

See {recover}._

### toEthSignedMessageHash

```solidity
function toEthSignedMessageHash(bytes s) internal pure returns (bytes32)
```

_Returns an Ethereum Signed Message, created from `s`. This
produces hash corresponding to the one signed with the
https://eth.wiki/json-rpc/API#eth_sign[`eth_sign`]
JSON-RPC method as part of EIP-191.

See {recover}._

### toTypedDataHash

```solidity
function toTypedDataHash(bytes32 domainSeparator, bytes32 structHash) internal pure returns (bytes32)
```

_Returns an Ethereum Signed Typed Data, created from a
`domainSeparator` and a `structHash`. This produces hash corresponding
to the one signed with the
https://eips.ethereum.org/EIPS/eip-712[`eth_signTypedData`]
JSON-RPC method as part of EIP-712.

See {recover}._

## Strings

_String operations._

### _HEX_SYMBOLS

```solidity
bytes16 _HEX_SYMBOLS
```

### _ADDRESS_LENGTH

```solidity
uint8 _ADDRESS_LENGTH
```

### toString

```solidity
function toString(uint256 value) internal pure returns (string)
```

_Converts a `uint256` to its ASCII `string` decimal representation._

### toHexString

```solidity
function toHexString(uint256 value) internal pure returns (string)
```

_Converts a `uint256` to its ASCII `string` hexadecimal representation._

### toHexString

```solidity
function toHexString(uint256 value, uint256 length) internal pure returns (string)
```

_Converts a `uint256` to its ASCII `string` hexadecimal representation with fixed length._

### toHexString

```solidity
function toHexString(address addr) internal pure returns (string)
```

_Converts an `address` with fixed length of 20 bytes to its not checksummed ASCII `string` hexadecimal representation._

## Counters

_Provides counters that can only be incremented, decremented or reset. This can be used e.g. to track the number
of elements in a mapping, issuing ERC721 ids, or counting request ids.

Include with `using Counters for Counters.Counter;`_

### Counter

```solidity
struct Counter {
  uint256 _value;
}
```

### current

```solidity
function current(struct Counters.Counter counter) internal view returns (uint256)
```

### increment

```solidity
function increment(struct Counters.Counter counter) internal
```

### decrement

```solidity
function decrement(struct Counters.Counter counter) internal
```

### reset

```solidity
function reset(struct Counters.Counter counter) internal
```

## EIP712

_https://eips.ethereum.org/EIPS/eip-712[EIP 712] is a standard for hashing and signing of typed structured data.

The encoding specified in the EIP is very generic, and such a generic implementation in Solidity is not feasible,
thus this contract does not implement the encoding itself. Protocols need to implement the type-specific encoding
they need in their contracts using a combination of `abi.encode` and `keccak256`.

This contract implements the EIP 712 domain separator ({_domainSeparatorV4}) that is used as part of the encoding
scheme, and the final step of the encoding to obtain the message digest that is then signed via ECDSA
({_hashTypedDataV4}).

The implementation of the domain separator was designed to be as efficient as possible while still properly updating
the chain id to protect against replay attacks on an eventual fork of the chain.

NOTE: This contract implements the version of the encoding known as "v4", as implemented by the JSON RPC method
https://docs.metamask.io/guide/signing-data.html[`eth_signTypedDataV4` in MetaMask].

_Available since v3.4.__

### _CACHED_DOMAIN_SEPARATOR

```solidity
bytes32 _CACHED_DOMAIN_SEPARATOR
```

### _CACHED_CHAIN_ID

```solidity
uint256 _CACHED_CHAIN_ID
```

### _CACHED_THIS

```solidity
address _CACHED_THIS
```

### _HASHED_NAME

```solidity
bytes32 _HASHED_NAME
```

### _HASHED_VERSION

```solidity
bytes32 _HASHED_VERSION
```

### _TYPE_HASH

```solidity
bytes32 _TYPE_HASH
```

### constructor

```solidity
constructor(string name, string version) internal
```

_Initializes the domain separator and parameter caches.

The meaning of `name` and `version` is specified in
https://eips.ethereum.org/EIPS/eip-712#definition-of-domainseparator[EIP 712]:

- `name`: the user readable name of the signing domain, i.e. the name of the DApp or the protocol.
- `version`: the current major version of the signing domain.

NOTE: These parameters cannot be changed except through a xref:learn::upgrading-smart-contracts.adoc[smart
contract upgrade]._

### _domainSeparatorV4

```solidity
function _domainSeparatorV4() internal view returns (bytes32)
```

_Returns the domain separator for the current chain._

### _buildDomainSeparator

```solidity
function _buildDomainSeparator(bytes32 typeHash, bytes32 nameHash, bytes32 versionHash) private view returns (bytes32)
```

### _hashTypedDataV4

```solidity
function _hashTypedDataV4(bytes32 structHash) internal view virtual returns (bytes32)
```

_Given an already https://eips.ethereum.org/EIPS/eip-712#definition-of-hashstruct[hashed struct], this
function returns the hash of the fully encoded EIP712 message for this domain.

This hash can be used together with {ECDSA-recover} to obtain the signer of a message. For example:

```solidity
bytes32 digest = _hashTypedDataV4(keccak256(abi.encode(
    keccak256("Mail(address to,string contents)"),
    mailTo,
    keccak256(bytes(mailContents))
)));
address signer = ECDSA.recover(digest, signature);
```_

