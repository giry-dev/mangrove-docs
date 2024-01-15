---
description: How to snipe an offer
sidebar_position: 10

---

# Using `snipes` to take an offer

:::caution Work in progress
This page is currently being updated - thank you for your understanding.
:::

You can take specific offers using Mangrove's `snipes` functionality. This could also be handy if you'd like to take your own offer for the sake of testing (and not some other one in the order book), following up on the [smart offer tutorial](../getting-started/smart-offer.md).

## Approve Mangrove to use Taker's funds

Before being able to take an offer we need to approve Mangrove to pull funds from the taker's USDT reserve:

```bash
cast send --rpc-url $LOCAL_URL "$USDT" "approve(address, uint)" "$MANGROVE" 26000000000 --private-key "$PRIVATE_KEY"
```

Now we ensure that we have set everything up correctly for the offer to be successfully taken.
Place the offer ID of your target offer in a variable, and use it to call the `snipes` function.

> Note: more info on the offer ID in the [smart offer tutorial](../getting-started/smart-offer.md)

```bash
export OFFER_ID_HEX=<0xabcd...> # the hexadecimal offer ID captured when posting the offer
export OFFER_ID=$(($OFFER_ID_HEX)) # the decimal ID of the offer captured above
```

## Sniping the offer

```bash
cast send --rpc-url $LOCAL_URL "$MANGROVE" "snipes(address, address, uint[4][], bool)" "$WBTC" "$USDT" "[[$OFFER_ID,26000000000,100000000,100000000000000000]]" 1 --private-key "$PRIVATE_KEY"
```

Now, run the resulting transaction via:

```bash
cast run <transactionHash>
```

Towards the end of the trace you can find the function of `makerPosthook` being called and emits an event with the data `42` as specified in the `__posthookSuccess__` of your new `OfferMakerTutorial` contract.

```bash
   ├─ [8280] 0xabc...::makerPosthook(...) 
   │   ├─  emit topic 0: 0xefg...
   │   │           data: 0x000000000000000000000000000000000000000000000000000000000000002a
```

## Troubleshooting

If you get errors when taking the offer then it is probably missing approvals or (native) tokens.

* `mgv/takerTransferFail` - missing DAI tokens or approval of transfer of DAI from taker to Mangrove.
* No `__posthookSuccess__` but `makerExecute` is red in the trace - missing WETH tokens of approval of transfer of WETH from maker to Mangrove.