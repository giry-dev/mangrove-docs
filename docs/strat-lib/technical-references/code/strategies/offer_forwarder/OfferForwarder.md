## OfferForwarder

### constructor

```solidity
constructor(contract IMangrove mgv, address deployer) public
```

### newOffer

```solidity
function newOffer(contract IERC20 outbound_tkn, contract IERC20 inbound_tkn, uint256 wants, uint256 gives, uint256 gasreq, uint256 gasprice, uint256 pivotId) public payable returns (uint256 offerId)
```

