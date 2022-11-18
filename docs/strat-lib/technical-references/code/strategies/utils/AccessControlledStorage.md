## AccessControlledStorage

### Layout

```solidity
struct Layout {
  address admin;
}
```

### getStorage

```solidity
function getStorage() internal pure returns (struct AccessControlledStorage.Layout st)
```

Gets the `AccessControlled` storage from a fixed slot.

