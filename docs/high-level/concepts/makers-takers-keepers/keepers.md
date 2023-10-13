---
description: Keepers
sidebar_position: 3
---


# Keepers

Mangrove's order book may be cluttered over time with irrelevant orders when the market conditions evolvent. Therefore, bots (or [Keepers](../../../developers/keeper-bots/README.md)) are continuously scanning the book. They are responsible for detecting failing offers and making them fail on-chain by "[sniped](../../../developers/contracts/technical-references/taking-and-making-offers/taker-order/#offer-sniping)" them, with a gas price set such that the offer's bounty compensates for the spent gas. They act as [guardians](../../../developers/keeper-bots/background/the-role-of-cleaning-bots-in-mangrove) of the Mangrove ecosystem. 🤖

Keepers are also in charge of [keeping the gas price updated](../../../developers/keeper-bots/background/the-role-of-gas-price-updater-bots-in-mangrove) to determine the remuneration of takers for removing a failing offer from a list.