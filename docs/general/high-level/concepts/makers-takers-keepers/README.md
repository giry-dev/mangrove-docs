---
description: Makers, Takers, Keepers
sidebar_position: 1
---


# Makers, Takers, Keepers

import useBaseUrl from '@docusaurus/useBaseUrl';

In the Mangrove ecosystem, three key participants interact to facilitate a dynamic and decentralized trading environment: Makers, Takers, and Keepers. Together, they form the backbone of the Mangrove ecosystem, each playing a unique yet interconnected role in ensuring a seamless and effective trading experience.

Here is a simplified three-step diagram of Mangrove unlocked assets and offer-is-code approach. It also introduces the three main actors on Mangrove DEX.

<img src={useBaseUrl('img/assets/maker-taker-keeper.png')} width="100%"/>

## Makers

Makers are participants or entities within the Mangrove ecosystem who are responsible for creating and listing offers on the platform. They can specify the conditions of their offers, such as the type and quantity of assets to be exchanged, the price, and any other relevant terms. For example, they promise to give a Taker some apples 🍎 if he gives them oranges 🍊 in return.

By initiating these offers, Makers enable transactions to occur within the Mangrove Protocol, contributing to a vibrant market.

We are explaining Makers in more detail in the [Developer section](../../../../developers/protocol/technical-references/overview.md#makers) (relax, it's still very much understandable).

<img src={useBaseUrl('img/assets/calm-down-breathe.gif')} width="300px"/>

## Takers

**Takers** respond to the offers set up by Makers. They critically assess these offers, considering factors like asset types, quantities, and prices.

The role of Takers is crucial in completing transactions within the Mangrove marketplace. When a Taker agrees to the terms of an offer, they effectively seals the deal proposed by the Maker, leading to the execution of the trade.

Takers provide the necessary demand and liquidity in the marketplace, ensuring that the offers created by Makers are fulfilled. Their actions complete the cycle of trading activity within the Mangrove ecosystem, making it a dynamic and interactive platform for exchanges.

Takers have the ability to buy or sell assets on Mangrove, using either [market](../../../web-app/trade/how-to-make-an-order/market-order.md) or [limit orders](../../../web-app/trade/how-to-make-an-order/limit-order.md), akin to a traditional orderbook. They can execute these offers through general orders or choose to [clean](../../../../developers/protocol/technical-references/offer-cleaning.md) them individually.

This interaction between Takers and Makers completes the trading cycle in the Mangrove ecosystem, enhancing its interactivity and liquidity.

The workflow for Takers involves executing the logic of all relevant smart offers upon an order's placement. Successful orders are removed from the book, and the process continues until the Taker's order is completely filled. If a Maker withdraws their offer and fails to match the liquidity, the Taker is compensated with a penalty ([bounty](../../../../developers/terms/bounty.md)), and Mangrove proceeds to the next offer. This ensures that Takers are appropriately remunerated and that the order book remains efficient.

## Keepers

[Keepers](../../../../developers/keeper-bots/README.md) functioning as automated bots that ensure the order book remains relevant and efficient. As market conditions evolve, the order book may become congested with outdated or irrelevant orders. Keepers play a pivotal role in addressing this by continuously monitoring the order book.

Their primary responsibility is to identify offers that are failing. Once a failing offer is detected, Keepers targets them to [clean them](../../../../developers/protocol/technical-references/offer-cleaning.md) off the book. This action involves setting a gas price in such a way that the offer’s bounty offsets the gas expenditure. Essentially, Keepers act as the custodians of the Mangrove ecosystem, maintaining its integrity and smooth operation.

In addition to managing failing offers, Keepers are tasked with [keeping the gas price up to date](../../../../developers/keeper-bots/background/the-role-of-gas-price-updater-bots-in-mangrove). This is crucial for determining the compensation for Takers who remove a failing offer from the list. By doing so, Keepers ensure that Takers are appropriately remunerated for their role in sustaining the efficiency and cleanliness of the order book.

Through these functions, Keepers play an indispensable role in the maintenance and operational effectiveness of the Mangrove ecosystem, safeguarding its functionality and reliability.
