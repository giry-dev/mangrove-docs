---
sidebar_position: 2
---

# The role of gas price updater bots in Mangrove

Mangrove needs the gas price to [determine the bounty](../../protocol/technical-references/reactive-offer/offer-provision.md#bounty) of takers for removing a failing offer from a list. On chains where the gas price varies, Mangrove [uses](../../protocol/technical-references/governance-parameters/global-variables) an [oracle](../../protocol/technical-references/periphery/oracle) to get the gas price.

The role of the gas price updater bot is simply to push up-to-date gas prices to the oracle contract whenever the gas price changes significantly.


# Example bot

The [`mangrove-bots`](https://github.com/mangrovedao/mangrove-bots) monorepo on GitHub contains an [example gas price updater bot](https://github.com/mangrovedao/mangrove-bots/tree/master/packages/bot-updategas).