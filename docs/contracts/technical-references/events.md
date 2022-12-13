---
title: Events
description: Description of the events emitted by Mangrove
sidebar_position: 7
---

## OfferSuccess

When an offer is successfully taken, this event will be emitted. It emits information about what offer was taken, on what market, who the taker was and what was gotten and given. It is important to notice that what was gotten, is without the fee taken into account. The reason for this is that we only calculate the fee for a full order, not for each specific offer. To find the fee, one most look for the event `OrderComplete`.

## OrderComplete

When an order is complete, this event will be emitted. It emits information about about what market the order was completed, who the taker was, what was gotten and given, total penalty and total fee. It is important to notice that was gotten, is with the fee taken into account. Meaning that $takerGot = takerWants - totalFee$.
