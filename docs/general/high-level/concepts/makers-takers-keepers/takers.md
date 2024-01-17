---
description: Takers
sidebar_position: 2
---


# Takers

Just like a classical orderbook, the Taker can buy or sell assets on Mangrove, with [market](../../../web-app/trade/how-to-market-order.md) or [limit orders](../../../web-app/trade/how-to-limit-order.md). Offers can be taken using general orders or "[sniped](../../../../developers/protocol/technical-references/taking-and-making-offers/taker-order/#offer-sniping)" individually, as part of the strategies enabled by Mangrove's platform design. 🧿

Takers may typically operate via a web front-end or with the help of our [SDK](../../../../developers/SDK/README.md) to develop off-chain apps that interact with Mangrove ecosystem.

When the Taker sends an order, Mangrove executes the offer logic (i.e. code) of all the smart offers it triggers:

* If the first order is successful and the liquidity promise is fulfilled, it is removed from the book. Mangrove moves on to the next offer until the entirety of the Taker's order is filled (whether it's a limit or market order).

* If during the execution, a Maker backs out on his offer (see previous [last look](../smart-offers.md)), and the liquidity is not matched, a penalty ([bounty](../../../../developers/terms/bounty.md))  is paid to the Taker and Mangrove executes the next offer logic from the orderbook, until the desired volume or limit price is hit.

import useBaseUrl from '@docusaurus/useBaseUrl';

## Workflow of a Taker "snipe" case scenario

<img src={useBaseUrl('img/assets/taker-order-book.PNG')} width="500px"/>

<br /><br />

While the above workflow showcases the "snipe" mechanism, it is easy to see how the offers would be sequentially triggered in the case that several are needed to fill the Taker's order or if an offer fails (as explained above).