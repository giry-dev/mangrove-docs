---
description: Approve and Buy
sidebar_position: 2
---


# Approve and Buy

## Two ways to complete a transaction

Before your transaction gets executed, you might have to approve the spending of tokens.
For now, our app offers two ways to complete a transaction:

* **Approve & Buy**: you will successively approve the spending and execute the transaction

* **Buy**: you will bypass the approval, and straight away attempt to execute the transaction (useful if you've already done a large approval in the past, for example)

On the following pages, you will find more details on how to execute a [Market](./how-to-market-order.md) or [Limit order](./how-to-limit-order.md).

import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('img/assets/approve-buy.png')} width="400px"/><br /><br />


## About Approvals

Here are a few rule of thumbs when it comes to approvals:

1. An approval is valid for a specific order type of a specific market.

    > 💡
    > For example, if you approved a BUY market order for the WETH/USDC market, this approval is not valid for SELL market orders forthat same market. You have to approve again.

2. Approvals accumulate.

    > 💡
    > For example, if you approve buy market order for weth/usdc market with a 1000 USDC and perform a market order for 100 USDC, you have 900 USDC in approved balance. If you perform the same action again ("Approve & Buy"), you'll have 1800USDC of approved balance.

3. If your pre-approved amount is used up, your order will fail.