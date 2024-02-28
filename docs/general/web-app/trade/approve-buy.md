---
description: Approvals
sidebar_position: 1
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Approvals

## Infinite approval

Before your order can succeed, you will have to approve mangrove to transfer the funds.

1. After choosing your order parameters, you will have to click the "Buy" or "Sell" button.

2. It will trigger the approval process, starting with a pop-up. Click on "Proceed" then "Approve".

<img src={useBaseUrl('img/assets/infinite-approval.png')} width="400px"/><br /><br />

1. Your wallet will open - you can leave the suggested amount for an "infinite approval". 
:::caution
Clicking "Max" will give you the maximum amount available in your wallet. This means you will have to re-approve each time you make an order.
:::

2. Click next, review the transaction and click "Approve" on your wallet.

3. Wait for the transaction to be processed, and that's it - you're ready to trade!

<br />

On the following pages, you will find more details on how to [execute different order types](./how-to-make-an-order/)

## About Approvals

:::info Note
You can read some more about approvals in the [FAQ](../../FAQ/README.md#the-approval-amount-for-my-limit-orders-seems-odd---what-is-going-on) section.
:::

Here are a few things you should consider when it comes to approvals:

1. An approval is valid only for a specific order type of a specific market.
    > 💡
    > For example, if you approved a <a>BUY</a> market order for the WETH/USDB market, this approval is not valid for SELL market orders for that same market. You have to approve again.

2. Approvals accumulate together.
    > 💡
    > For example, if you approve buy market order for WETH/USDB market with a 1000 USDB and perform a market order for 100 USDB, you have 900 USDB in approved balance. If you perform the same action again ("Approve & Buy"), you'll have 1800USDB of approved balance.

:::danger
3. If your pre-approved amount is used up, your order will fail. An easy way around this is to perform an infinite approval.
:::

## Revoke token approvals

To remove a dApp access to your wallet's tokens, you can revoke approvals previously granted.
An easy way to do it would be to use [Revoke](https://revoke.cash/), for example. This will however risk your orders failing if you have open orders, so be sure you don't need the approvals