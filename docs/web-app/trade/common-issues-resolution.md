---
description: Common issues and resolution
sidebar_position: 7
---


# Common issues and resolution

Using our Trade page on testnet, you might encounter a few troubles and hiccups.

While we are working on things (rest assured that we are), here are few tips that might hep make your experience smoother.

Feel free to browse through the following items!

<details><summary>
Why do my transactions keep failing?
</summary>
It might be the case that the amount of gas or slippage you selected is too low. We encourage you to tweak those values and find out what works best.

Remember: this is a testnet! We would love to hear your [feedback](./how-to-give-feedback.md) on this as well.
</details>

<details><summary>
Why do I need to approve every transaction? Is there an "unlimited" token approval?
</summary>

We are aware that this is not ideal, and are currently collecting users opinions on this.
Meanwhile, you will find more information [over here](./approve-buy.md).
</details>

<details><summary>
The approval amount for my limit orders seem odd - what is going on?
</summary>

:::note TL;DR
* A rule of thumb for limit orders to avoid order failure due to lack of approval is to make sure you approve at least double the amount you target.
* The easy way to do this is to use the "use default" option on Metamask when executing your "Approval".
:::

Let's clarify the difference between the "max" and "use default" approval values offered by Metamask.
* "max" will give you the maximum amount available in your wallet.

* "use default" will give you a maximum amount available in your wallet based on what you've keyed in. That amount differs **whether you are executing a market order or a limit order**.

**Example**

* Market order: if you want to buy some WMATIC with let's say 20 USDT, "use default" will set the approval amout at _20 + slippage_. For a 2% slippage, the amount to approve would be 20.4 USDT.

* Limit order: if you want to buy some WMATIC for 20 USDT of worth with a limit order (ex: Good til time), "use default" will set the approval amout at _40 (20 * 2)_.
    * If you have multiple open limit orders for the same token, the approvals then need to compound.
    * Example: if you create another Good til time limit order for 20 USDT of worth, the approval amount will be 40 (previous limit order) + 40 (new limit order) = 80 USDT.

</details>

<details><summary>
How to get test tokens? The AAVE faucet is/was broken, I couldn't test the app.
</summary>
Our team recently released a patch on the testnet, and we encourage you to go check it out.<br /><br />

🆕 The patch brings new markets for you to test and trade, and removes (at least for now) the AAVE faucet.
There are two of them, as follows:
* WBTC / USDT
* WMATIC / USDT

🕊️ Those markets don’t have any third party dependency (unlike the AAVE faucet tokens). We chose different tokens to avoid any confusion.

⛏ How to get the new tokens?
You able to directly mint a faucet created by us from the UI here: https://testnet.mangrove.exchange/

🚰 So, what about the AAVE faucet?
The reason that we needed few days is that was not a trivial fix. We are currently building a strategy that leverages AAVE, and therefore we had certain dependencies which needed to be considered.
</details>

<details><summary>
Where is my transaction history?
</summary>

Which order type are you trying to execute?
There are subtle differences between the various limit orders available on our Trade page. They might appear/be processed differently. We encourage you to first read the [More on order types](./more-on-order-types.md) section.

We are aware of the confusion some might have with our "Open orders/Filled" sections - we are capturing every feedback we can to improve the product.
Right now, we are focusing on first testing out key features of Mangrove protocol.

Rest assured that we are capturing every feedback we can to improve the product.
</details>