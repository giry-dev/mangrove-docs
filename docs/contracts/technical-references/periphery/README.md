---
title: Periphery
sidebar_position: 3
---
# Periphery Contracts

A number of periphery contracts are deployed around the Mangrove core contract to support the core, or to provide convenient or safer methods of interacting with the core contract.

* [Mangrove Reader](reader.md) contract provide easy to parse views on Mangrove's state.
* [Mangrove Oracle](oracle.md) may act as a gas/density oracle for Mangrove. 
* **TODO to remove** [Mangrove Cleaner ](cleaner.md)an order reverter that allows one to snipe offers for their bounty (or revert if the offer was eventually successful).
* **TODO to remove** [Mangrove Order](advanced-orders.md) is a contract that can be used to run advanced market orders on Mangrove, such as [GTC](https://www.investopedia.com/terms/g/gtc.asp) or [IOC](https://www.investopedia.com/terms/i/immediateorcancel.asp).
