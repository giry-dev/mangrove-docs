---
description: Approvals
sidebar_position: 2
---


# Approvals

## Infinite approval

Before your transaction gets processed, you will have to approve the token's spending.

1. After keying your parameters, you will have to click the "Approve and Buy" or "Approve and Sell" button.

2. It will trigger the approval process, starting with a pop-up (the box allowing the infinite approval is ticked by default). Then click "Allow [token]".

import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('img/assets/infinite-approval.png')} width="400px"/><br /><br />

3. Metamask will open - make sure to click "Use default" to fill in the infinite approval amount ("Max" will give you the maximum amount available in your wallet).

4. Click next, review the transaction and click "Approve" on Metamask.

5. Wait for the transaction to be processed, and that's it - you're ready to trade!

<br />

On the following pages, you will find more details on how to execute a [Market](./how-to-market-order.md) or [Limit order](./how-to-limit-order.md).


## About Approvals

Here are a few rule of thumbs when it comes to approvals:

1. An approval is valid for a specific order type of a specific market.

    > 💡
    > For example, if you approved a BUY market order for the WETH/USDC market, this approval is not valid for SELL market orders for that same market. You have to approve again.

2. Approvals accumulate.

    > 💡
    > For example, if you approve buy market order for weth/usdc market with a 1000 USDC and perform a market order for 100 USDC, you have 900 USDC in approved balance. If you perform the same action again ("Approve & Buy"), you'll have 1800USDC of approved balance.

3. If your pre-approved amount is used up, your order will fail.
4. An easy way around this is to perform an infinite approval.