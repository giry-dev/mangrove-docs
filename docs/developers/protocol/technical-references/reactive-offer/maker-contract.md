---
description: How to write a maker contract
sidebar_position: 1
---

# Maker contract

:::info 
A maker contract is a smart contract that is bound to an offer posted on Mangrove. 
It is the contract that is called by Mangrove should the offer be matched during a [market order](../market-order/README.md). 
The offer logic is the part of the maker contract that executes as a consequence of a call by Mangrove. The offer logic is split into [trade execution](#trade-execution) 
and [trade posthook](#trade-posthook).
:::

## Trade Execution

The logic associated with an offer **must** be implemented in the `makerExecute` callback function. (See [data structures](offer-data-structures.md#mgvlib.singleorder) for `SingleOrder` type).

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="signature" label="Signature" default>

```solidity
function makerExecute(MgvLib.SingleOrder calldata sor)
internal returns (uint gasused, bytes32 makerData);
```

</TabItem>

<TabItem value="offerLogic" label="Offer logic">

```solidity
import {IERC20, IMaker, SingleOrder} from "@mgv/src/core/MgvLib.sol";


contract MyOffer is IMaker {
    // IMangrove mgv = IMangrove(payable(<address of Mangrove>));
    // Mangrove contract
    IMangrove mgv = IMangrove(payable(mgv));
    address reserve; // token reserve for inbound tokens
    
    // an example of offer execution that simply verifies that `this` contract has enough outbound tokens to satisfy the taker Order.
    function makerExecute(MgvLib.SingleOrder calldata order) external returns (bytes32 makerData) {
        // revert below (in case of insufficient funds) to signal mangrove we renege on trade
        // reverting as soon as early to minimize bounty
        require(
            IERC20(order.offer.gives()).balanceOf(address(this)) >= order.offer.wants(),
            "MyOffer/NotEnoughFunds");
    
        // do not perform any state changing call if caller is not Mangrove!
        require(msg.sender == mgv, "MyOffer/OnlyMangroveCanCallMe");
        // `order.gives` has been transfered by Mangrove to `this` balance
        // sending incoming tokens to reserve
        IERC20(order.offer.wants()).transfer(reserve, order.offer.gives());
        // this string will be passed to `makerPosthook`
        return "MyOffer/tradeSuccess";
    }
}
```

</TabItem>
</Tabs>

### Inputs

* `sor` is a [data structure](./offer-data-structures.md#public-data-structures) containing a recap of the taker order and Mangrove's current configuration state.
    * It also contains `olKey`, which concerns the entire market order, because it will be sent to the maker, who needs that information.
    * The protocol guarantees that `order.gives/order.wants` will match the price of the offer that is being executed up to a small precision.

### Outputs

* `gasused` is the gas consumed by the execution.
* `makerData` is an arbitrary `bytes32` returned after executing the offer. It will be passed to `makerPosthoook` in the `makerData` field.


### Important notes


#### Security concerns

* Your contract should ensure that **only Mangrove** can call `makerExecute` to avoid unwanted state change.
* The prev/next pointers from an offer are removed before sending it to the maker. This ensures that the maker has no information about the state of the book when it gets called. More information in the [data structure](./offer-data-structures.md#public-data-structures) table.

#### How to succeed

* To successfully execute, the logic **must** not revert during the call to `makerExecute` and have at least `wants` %%outbound|outbound%% tokens available for Mangrove to transfer by the end of the function's execution.

#### How to renege on trade

* The proper way to renege on an offer is to make the execution of `makerExecute` throw with a reason that can be cast to a `bytes32`.
* Having a balance of outbound tokens that is lower than `order.wants` will also make trade fail, but with a higher incurred gas cost and thus a higher [bounty](offer-provision.md#provision-and-offer-bounty).

#### Better fail early

* The [bounty](offer-provision.md#computing-the-provision-and-offer-bounty) taken from the offer maker's provision is [proportional](offer-provision.md#computing-the-provision-and-offer-bounty) to the gas consumed by `makerExecute`. To minimize costs, try to fail as early as possible.


:::danger **Mangrove is guarded against reentrancy during `makerExecute`**

[ADD details about READ not being possible]

The offer list for the outbound / %%inbound|inbound%% token pair is temporarily locked during calls to `makerExecute`. Its offers cannot be modified in any way. The offer logic must use `makerPosthook` to repost/update its offers, since the offer list will unlocked by then.

:::

## Trade posthook

The logic associated with an offer may include a `makerPosthook` callback function. Its intended use is to update offers in the [offer list](../offer-list/README.md) containing the [offer](./) that was just executed.

!!![code Offer Logic TBD]!!!

<Tabs>
<TabItem value="signature" label="Signature" default>

```solidity
function makerPosthook(
    MgvLib.SingleOrder calldata order,
    MgvLib.OrderResult calldata result
  ) external;
```

</TabItem>
<TabItem value="offerLogic" label="Offer logic">

```solidity
import {IERC20, IMaker, SingleOrder, OrderResult, MgvStructs} from "@mgv/src/core/MgvLib.sol";

abstract contract MakerContract is IMaker {
    // context 
    // IMangrove mgv = IMangrove(payable(<address of Mangrove>));
    // Mangrove contract
    IMangrove mgv = IMangrove(payable(mgv));
    
    // Example of post-hook
    // if taker order was a success, try to repost residual offer at the same price
    function makerPosthook(MgvLib.SingleOrder calldata order, MgvLib.OrderResult calldata result) external {
        require (msg.sender == mgv, "posthook/invalid_caller");
        if (result.mgvData == "mgv/tradeSuccess") {
            // retrieving offer data
            // the following call to updateOfferByTick will revert if:
            //    * `this` MakerContract doesn't have enough provision on Mangrove for the offer
            //    * the residual/(GASREQ+offer_gasbase) is below Mangrove's minimal density
            //    * NB : a reverting posthook does not revert the offer execution
            // update the offer with the "ByTick" version
            mgv.updateOfferByTick(
                order.olkey, // same offer list
                order.offer.tick, // same tick
                order.offer.gives() - TickLib.inboundFromOutbound(order.offer.ticktick, order.takerWants()), // what the offer was giving, minus what the taker took (wants)
                order.offerDetail.gasreq(), // keep offer's current gasreq 
                order.offerDetail.gasprice(), // keep offer's current gasprice
                order.offerId // ID of the offer to be updated 
            );
        }
    }
}
```

</TabItem>
</Tabs>

### Inputs

* `sor` is the same as in `makerExecute`.
* `result` is a [struct](offer-data-structures.md#mgvlib-orderresult) containing:
  * the return value of `makerExecute`
  * additional data sent by Mangrove, more info [available here](offer-data-structures.md#mgvlib.orderresult).

### Outputs

None.

### Important notes

#### Security concerns

* Your contract should ensure that only Mangrove can call `makerPosthook` to avoid unwanted state change.

#### Gas management

* `MakerPosthook` is given the executed offer's `gasreq` minus the gas used by `makerExecute`.&#x20;

* **Updating offers during posthook:** during the execution of a posthook, the executed offer's list is unlocked. This feature can be used to repost an [offer](./) (even the one that was just executed), possibly at a different price.


#### Reverting**

* Reverting during `makerPosthook` does not renege on trade, which is settled at the end of `makerExecute`.
