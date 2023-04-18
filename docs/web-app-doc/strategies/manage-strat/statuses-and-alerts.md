---
description: Statuses and alerts
sidebar_position: 1
---


# Statuses and alerts

Your strategy can have one of three statuses: active, inactive, or closed. Depending on the status, alerts may be displayed for your price range or gas.


## Status <font color="#5cd19b">● Active</font>

It means that your strategy is running, profiting from the spread. You may see one of these alert messages while your strategy is active:

* **"About to be out of bounty" button** <br />
Your trategy will soon run out of [bounty](../../../terms/bounty.md) to pay for the taker's compensation in case an [offer fails to execute](../../../kandel-doc/how-does-kandel-work/more-on-failing-offers.md).

* **"About to be out of price range" button**<br />
Your strategy's price range is close to being out of range.

## Status <font color="#eb525a">● Inactive</font> 

It means that your strategy is switched off. There are two reasons why your strategy may be inactive:

* **Out of range**: strategy is out of the price range

* **Insufficient bounty**: strategy's bounty is insufficient

* **Out of range AND insufficient bounty**: combination of the above


## Status <font color="#a7adcd">● Closed</font>

It means that your strategy is shut down.

**<u>Note:</u> What's the difference between an "Inactive" and a "Closed" strategy?**<br />
👉 If your strategy is "Inactive", it means that you have deposited funds and set its parameters, but either it got out of range or there was insufficient bounty.
If you closed your strategy or withdrew all funds from it, then it is considered as "Closed".
