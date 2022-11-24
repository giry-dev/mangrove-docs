---
description: How to determine gas requirements.
sidebar_position: 1
---

# How to determine gas requirements

Determining %%gas requirements (gasreq)|gasreq%% for your offer logic in a maker contract is important to avoid failures, save on provision, and make offers as attractable as possible.

To determine the gasreq, you can measure the worst case gas usage when %%`makerExecute`|makerExecute%% and %%`makerPosthook`|makerPosthook%% are called. There could be exception cases which are very gas costly where you simply want the offer to fail instead, and you could skip those.

Measuring gas usage can be done with Foundry - in the [smart offer tutorial](../tutorials/smart-offer.md) you can see how to make and take orders with your contract, and using `cast run [transactionHash]` you can find the actual gas usage. Bear in mind that all relevant code paths should be hit, the tutorial only covers the happy path of `makerExecute` followed by `makerPosthook` with a successful trade.

Note, that the tutorial did not implement either `makerExecute` or `makerPosthook` as they are implemented by the strat lib and in turn invoke actual strategy through a template method pattern.

For instance, if you have followed the tutorial and have a `transactionHash` for taking the offer, you can run the following:

```bash
cast run --label $DAI:DAI --label $WETH:WETH --label $MANGROVE:Mangrove --label $OFFER_MAKER:OfferMakerTutorial <transactionHash>
```

In the trace you can find `OfferMakerTutorial::makerExecute` and `OfferMakerTutorial::makerPosthook` and note down the number in brackets which is the total gas cost of the function ([more on Foundry's tracing](https://book.getfoundry.sh/forge/traces#understanding-traces)).

When using the strat lib, then the gas usage from the %%router|router%% is automatically added by the library and should be subtracted from the measured total. Your own router would have to measure its worst case cost and provide it as part of its parameters.

In our case the gas usage was `45,658` and `1,659`, and since there is no router used, we don't have special code in [`posthookFallback`](../technical-references/code/strategies/MangroveOffer.md#posthookfallback) for this strat, we have to account for a small overhead in mangrove for gas accounting, and Foundry's traces leave some gas [unaccounted for](https://book.getfoundry.sh/forge/traces#understanding-traces) then setting the gasreq to `70,000` for this contract is a good choice. However, note that the default [`posthookSuccess`](../technical-references/code/strategies/MangroveOffer.md#posthooksuccess) can repost an offer for the residual if not fully taken and that would require some gas. See how-to on [residual](../guides/howToResidual.md) for more details.

For more complete gas consumption analysis for a larger contract it can be helpful to use Foundry's [gas tracking](https://book.getfoundry.sh/forge/gas-tracking) features.

Note that gas usage can change with ethereum upgrades or compiler changes, and various tricks can be used to reduce gas.

Here are some common operations and their approximate gas consumption:

| Operation | Approximate Gas |
| ---- | -------- |
| Simple [Direct](../background/offer-maker/direct.md) contract   | 30,000   |
| ERC20 transfer | 25,000 (worst case is when transferring to account with 0 balance)      |
| AAVE redeem/borrow | 300,000 |
| [updateOffer](../technical-references/code/strategies/offer_maker/abstract/Direct.md#updateoffer) without changing the price | 20,000 |
| [retractOffer](../technical-references/code/strategies/offer_maker/abstract/Direct.md#retractoffer) without deprovision | 10,000 |
| [retractOffer](../technical-references/code/strategies/offer_maker/abstract/Direct.md#retractoffer) with deprovision | 50,000 |
| Ethereum opcodes | [See ethereum documentation](https://ethereum.org/en/developers/docs/evm/opcodes/) |
| Set cold storage value `x!=0` to `x!=0` | 3,000 |
| Set cold storage value `x==0` to `x!=0` | 20,000 |

The attentive reader may see that the tutorial uses more than a Simple Direct contract. This is because the maker does not transfer tokens to the contract prior to the offer being taken - so the contract pulls them from the maker just-in-time - costing the roughly 25,000 gas of an ERC20 transfer.

To verify this, you can run the tutorial but transfer tokens to the contract before taking the offer with:

```bash
cast send --rpc-url $LOCAL_URL "$WETH" "transfer(address, uint)" "$OFFER_MAKER" 1000000000000000000  --private-key "$PRIVATE_KEY"
```

The gasreq should be taken into account when [provisioning](../../contracts/technical-references/taking-and-making-offers/reactive-offer/offer-provision.md).
