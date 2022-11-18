## MangroveOfferStorage

### Layout

```solidity
struct Layout {
  contract AbstractRouter router;
  mapping(address => address) reserves;
}
```

### getStorage

```solidity
function getStorage() internal pure returns (struct MangroveOfferStorage.Layout st)
```

Gets the `MangroveOffer` storage from a fixed slot.

