## AbstractRouterStorage

### Layout

```solidity
struct Layout {
  mapping(address => bool) makers;
}
```

### getStorage

```solidity
function getStorage() internal pure returns (struct AbstractRouterStorage.Layout st)
```

Gets the `AbstractRouter` storage from a fixed slot.

