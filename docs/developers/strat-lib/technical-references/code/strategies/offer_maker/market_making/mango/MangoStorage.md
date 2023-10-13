## MangoStorage

### Layout

```solidity
struct Layout {
  uint256[] asks;
  uint256[] bids;
  uint256 pending_base;
  uint256 pending_quote;
  mapping(uint256 => uint256) index_of_bid;
  mapping(uint256 => uint256) index_of_ask;
  int256 shift;
  uint256 delta;
  uint256 min_buffer;
  bool paused;
  contract AbstractRouter router;
}
```

### getStorage

```solidity
function getStorage() internal pure returns (struct MangoStorage.Layout st)
```

### revertWithData

```solidity
function revertWithData(bytes retdata) internal pure
```

### quote_price_jumps

```solidity
function quote_price_jumps(uint256 delta, uint256 position, uint256 quote_min) internal pure returns (uint256)
```

