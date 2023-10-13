## MangoImplementation

In case of a partial fill of an offer at position i, the offer residual is reposted (see `Persistent` strat class)

### BidAtMaxPosition

```solidity
event BidAtMaxPosition()
```

### AskAtMinPosition

```solidity
event AskAtMinPosition()
```

### delegated

```solidity
modifier delegated()
```

### NSLOTS

```solidity
uint256 NSLOTS
```

### BASE_0

```solidity
uint96 BASE_0
```

### QUOTE_0

```solidity
uint96 QUOTE_0
```

### BASE

```solidity
contract IERC20 BASE
```

### QUOTE

```solidity
contract IERC20 QUOTE
```

### PROXY

```solidity
address PROXY
```

### MGV

```solidity
contract IMangrove MGV
```

### constructor

```solidity
constructor(contract IMangrove mgv, contract IERC20 base, contract IERC20 quote, uint96 base_0, uint96 quote_0, uint256 nslots) public
```

### $initialize

```solidity
function $initialize(bool reset, uint256 lastBidPosition, uint256 from, uint256 to, uint256[][2] pivotIds, uint256[] tokenAmounts, uint256 gasreq) external
```

### $setShift

```solidity
function $setShift(int256 s, bool withBase, uint256[] amounts, uint256 gasreq) external
```

New positions 0<= i < s are initialized with amount[i] in base tokens if `withBase`. In quote tokens otherwise

### $getOffers

```solidity
function $getOffers(bool liveOnly) external view returns (uint256[][2] offers)
```

### WriteData

```solidity
struct WriteData {
  uint256 index;
  uint256 wants;
  uint256 gives;
  uint256 ofr_gr;
  uint256 pivotId;
}
```

### writeAsk

```solidity
function writeAsk(struct MangoImplementation.WriteData wd) internal returns (uint256)
```

### writeBid

```solidity
function writeBid(struct MangoImplementation.WriteData wd) internal returns (uint256)
```

### safeWriteOffer

```solidity
function safeWriteOffer(uint256 index, contract IERC20 outbound_tkn, uint256 wants, uint256 gives, uint256 ofr_gr, bool withPending, uint256 pivotId) internal
```

Writes (creates or updates) a maker offer on Mangrove's order book

### modulo

```solidity
function modulo(int256 x, uint256 m) internal pure returns (uint256)
```

### quote_min

```solidity
function quote_min() internal view returns (uint256)
```

In general this is QUOTE_0 + shift*delta

### position_of_index

```solidity
function position_of_index(uint256 i) internal view returns (uint256)
```

Returns the price position in the order book of the offer associated to this index `i`

### index_of_position

```solidity
function index_of_position(uint256 p) internal view returns (uint256)
```

Returns the index in the ring of offers at which the offer Id at position `p` in the book is stored

### next_index

```solidity
function next_index(uint256 i) internal view returns (uint256)
```

Next index in the ring of offers

### prev_index

```solidity
function prev_index(uint256 i) internal view returns (uint256)
```

Previous index in the ring of offers

### quote_progression

```solidity
function quote_progression(uint256 position) internal view returns (uint256)
```

Here the default is an arithmetic progression

### quotes_of_position

```solidity
function quotes_of_position(uint256 p, uint256 base_amount) internal view returns (uint256)
```

Returns the quantity of quote tokens for an offer at position `p` given an amount of Base tokens (eq. 2)

### bases_of_position

```solidity
function bases_of_position(uint256 p, uint256 quote_amount) internal view returns (uint256)
```

Returns the quantity of base tokens for an offer at position `p` given an amount of quote tokens (eq. 3)

### positive_shift

```solidity
function positive_shift(uint256 s, bool withBase, uint256[] amounts, uint256 gasreq) internal
```

As a consequence `s` Bids will be cancelled and `s` new asks will be posted

### negative_shift

```solidity
function negative_shift(uint256 s, bool withBase, uint256[] amounts, uint256 gasreq) internal
```

As a consequence `s` Asks will be cancelled and `s` new Bids will be posted

### $residualWants

```solidity
function $residualWants(struct MgvLib.SingleOrder order, uint256 residual) external view returns (uint256)
```

### $postDualOffer

```solidity
function $postDualOffer(struct MgvLib.SingleOrder order, uint256 gasreq) external returns (bytes32 status)
```

### updateBid

```solidity
function updateBid(uint256 index, bool reset, uint256 amount, uint256 pivotId, uint256 gasreq) internal
```

### updateAsk

```solidity
function updateAsk(uint256 index, bool reset, uint256 amount, uint256 pivotId, uint256 gasreq) internal
```

