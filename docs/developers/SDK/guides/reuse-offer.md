---
description: Create fill or kill order using mangrove.js
sidebar_position: 4
---

# Reuse Offer

## Intro

In this section we will go through how to reuse an offer, that has been taken or has failed. When an offer is taken, the offer still exists in Mangrove. This means that a previous offer made, can be reused again by the same maker. The same applies for an offer that failed when it was taken. The reason for keeping the offers around, is that cleaning up old/dead offers costs gas and by reusing a existing offer we save gas vs posting a completely new offer. This means that when we post an offer, we should save the [Offer ID](/docs/developers/terms/offer-id.md) for that offer, in case we ever want to reuse it.

### Update existing offer

In order to update an offer that is no longer live, we need the ID of an offer that has been taken or failed. In this example we are going to use ID 5573. If you do not have an offer that has been taken you can simply post a completely new offer and then snipe it. The [script](https://github.com/mangrovedao/mangrove.js/blob/2eb3f76f120831a48c577d930fcffc7d55d75c51/examples/how-tos/reuse-offer.js) has some commented out sections that helps with creating a dead offer.

When we have a dead offer, then we can figure out how much [provision](/docs/developers/terms/provision.md) is needed when reposting it. This is done by using the [`computeAskProvision`](../technical-references/code/classes/LiquidityProvider#-computeaskprovision) given the offer id. The last thing we need is to give a wants and a gives for the offer. In this case we are going to use `wants: 1000.5` and `gives: 1000.4`.

If we look at the asks before and after we have updated the offer, we now see that our offer has been updated and is at the top of the order book.

<!-- TODO: add better return info description, when this issue is fixed  https://github.com/mangrovedao/mangrove.js/issues/866 -->

```js reference
https://github.com/mangrovedao/mangrove.js/blob/2eb3f76f120831a48c577d930fcffc7d55d75c51/examples/how-tos/reuse-offer.js#L66-L78
```

```js title="Asks before update"x
> market.consoleAsks();
┌─────────┬──────┬──────────────────────────────────────────────┬────────────────────┬────────────────────────┐
│ (index) │  id  │                    maker                     │       volume       │         price          │
├─────────┼──────┼──────────────────────────────────────────────┼────────────────────┼────────────────────────┤
│    0    │ 1173 │ '0x4326Ab97823d7509C1f0CB3bF68151081B26c970' │ 844.0536473037303  │ 1.00354291069746851135 │
│    1    │ 3003 │ '0x2CB51201CD176CcEa67a9c0B64391aE34e50C058' │ 280.69589368327456 │ 1.00354551434175376498 │
│    2    │ 967  │ '0x4326Ab97823d7509C1f0CB3bF68151081B26c970' │ 578.3096271867598  │ 1.00355019649807276339 │
```

```js title="Asks after update"
> market.consoleAsks();
┌─────────┬──────┬──────────────────────────────────────────────┬────────────────────┬────────────────────────┐
│ (index) │  id  │                    maker                     │       volume       │         price          │
├─────────┼──────┼──────────────────────────────────────────────┼────────────────────┼────────────────────────┤
│    0    │ 5573 │ '0xA4C7c59EB3D4Ab5CA4E6fB012CeD9c8F9A5Ecdd8' │       1000.4       │ 1.00009996001599360256 │
│    1    │ 1173 │ '0x4326Ab97823d7509C1f0CB3bF68151081B26c970' │ 844.0536473037303  │ 1.00354291069746851135 │
│    2    │ 3003 │ '0x2CB51201CD176CcEa67a9c0B64391aE34e50C058' │ 280.69589368327456 │ 1.00354551434175376498 │
```
