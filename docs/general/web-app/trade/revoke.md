---
description: Revoke tokens approval
sidebar_position: 3
---


# Revoke tokens approval

To remove a dApp access to your wallet's tokens, you can revoke approvals previously granted.
An easy way to do it would be to use [Revoke](https://revoke.cash/), for example.

1. Head over Revoke, click "Connect wallet" and select Metamask.

import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('img/assets/revoke1.png')} width="700px"/><br />

2. Metamask will open - connect your target account.

3. Click the "Revoke" button on the right side for the token of your choice.

<img src={useBaseUrl('img/assets/revoke2.png')} width="700px"/><br />

4. Sign the transaction on Metamask, and wait for confirmation on Revoke's UI.

5. After a few seconds, the targeted entry should disappear from the UI - you're done!

:::info Note
Revoking means changing the Approval amount back to 0 - it's a transaction you'll have to sign, and it'll therefore consume some gas.
:::