---
description: Common issues and resolution
sidebar_position: 8
---


# Common issues and resolution

Using our Trade page on testnet, you might encounter a few troubles and hiccups.

We are committed to improve the user experience, and while we do that, here are a few tips that might help make your interaction smoother.

Feel free to browse through the following items!

<details><summary>
Why do my transactions keep failing?
</summary>
It might be the case that the amount of gas or slippage you selected is too low. We encourage you to tweak those values and find out what works best.

We would love to hear your [feedback](./how-to-give-feedback.md) as well.

</details>

<details><summary>
The approval amount for my limit orders seems odd - what is going on?
</summary>

:::note TL;DR
* A rule of thumb for limit orders to avoid order failure due to lack of approval is to make sure you approve at least double the amount you target (or infinite approval).
* The easy way to do this is to use the "Use default" option on Metamask when executing an approval.
:::

Let's clarify the difference between the "Max" and "Use default" approval values offered by Metamask.
* "Max" will give you the maximum amount available in your wallet.

* If you have ticked the "allow infinite approval" on Mangrove app, "Use default" will give you an "infinite approval" amount.

* If you have unticked the "allow infinite approval" on Mangrove app, "Use default" will give you the maximum amount available in your wallet based on what you've keyed in. That amount differs **whether you are executing a market order or a limit order**.

**Example (no infinite approval)**

* Market order: if you want to buy some WMATIC with let's say 20 USDT, "Use default" will set the approval amount at _20 + slippage_. For a 2% slippage, the amount to approve would be 20.4 USDT.

* Limit order: if you want to buy some WMATIC for 20 USDT of worth with a limit order (ex: Good til time), "Use default" will set the approval amout at _40 (20 * 2)_.
    * If you have multiple open limit orders for the same token, the approvals then need to compound.
    * Example: if you create another Good til time limit order for 20 USDT of worth, the approval amount will be 40 (previous limit order) + 40 (new limit order) = 80 USDT.

</details>


<details><summary>
Where is my transaction history?
</summary>

Which order type are you trying to execute?
There are subtle differences between the various limit orders available on our Trade page. They might appear/be processed differently. We encourage you to first read the [More on order types](./more-on-order-types.md) section.
</details>