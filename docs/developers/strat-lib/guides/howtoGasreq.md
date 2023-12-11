---
description: How to determine gas requirements.
sidebar_position: 4
---

# Determining gas requirements

Determining %%gas requirements (gasreq)|gasreq%% for your offer logic in a maker contract is important to avoid failures, save on provision, and make offers as attractable as possible.

## What to test

To determine the gasreq, you need to measure the **worst case gas usage **when %%`makerExecute`|makerExecute%% and %%`makerPosthook`|makerPosthook%% are called. There could be exception cases which are very gas costly, where you simply want the offer to fail instead (and you could skip those).

As a strat builder, you should **verify your gas usage** in some specific scenarios, and **compare deltas to other scenarios** tested [here](https://github.com/mangrovedao/mangrove-core/blob/develop/test/core/gas/README.md#scenarios). You should then use the results to set a `gasreq` for your strat which covers the desired worst-case scenarios. The gas measurements are for the inner-most operation.

## Using Foundry

* Measuring gas usage can be done with Foundry - in the [smart offer tutorial](../getting-started/smart-offer.md) you can see how to create and update offers with your contract.

* Use `cast run [transactionHash]` to find the actual gas usage. Bear in mind that all relevant code paths should be hit, the tutorial only covers the happy path of `makerExecute` followed by `makerPosthook` with a successful trade.

* Note that the tutorial did not implement either `makerExecute` or `makerPosthook` as they are implemented by the strat lib, and in turn invoke actual strategy through a template method pattern.

## Example (tutorial)

If you have followed the "Post a smart offer" [tutorial](../getting-started/smart-offer.md), try taking your offer with a market order. Use then the `transactionHash` you get, and run the following:

```bash
cast run --label $DAI:DAI --label $WBTC:WBTC --label $MANGROVE:Mangrove --label $OFFER_MAKER:OfferMakerTutorial <transactionHash>
```
### Result

In the trace, you can find `OfferMakerTutorial::makerExecute` and `OfferMakerTutorial::makerPosthook`. Note the number in brackets: it corresponds to the total gas cost of the function ([more on Foundry's tracing](https://book.getfoundry.sh/forge/traces#understanding-traces)).

:::info Note
When using the Strat lib, then the gas usage from the %%router|router%% is automatically added by the library and should be subtracted from the measured total. Your own router would have to measure its worst case cost and provide it as part of its parameters.
:::

[ADD RESULT OF TRACE/EXAMPLE ONCE I FIGURE OUT MARKET ORDERS]

Here's a recap of our case scenario:
* makerExecute gas: `45,658`
* makerPosthook gas: `1,659`
* Since no router was used, we don't have any special code in [`posthookFallback`](../technical-references/code/strats/src/strategies/MangroveOffer.md#posthookfallback) for this strat.
* We also have to account for a small overhead in Mangrove for gas accounting, and to consider as well the bits of gas [unaccounted for](https://book.getfoundry.sh/forge/traces#understanding-traces) in Foundry's traces.
* Therefore, setting the gasreq to `70,000` for this contract is a good choice. However, note that the default [`posthookSuccess`](../technical-references/code/strats/src/strategies/MangroveOffer.md#posthooksuccess) can repost an offer for the residual if not fully taken and that would require some gas.
    * See the guide on "[residual](../guides/howToResidual.md)" for more details.

:::caution Useful
* For a more complete gas consumption analysis of a larger contract, it can be helpful to use Foundry's [gas tracking](https://book.getfoundry.sh/forge/gas-tracking) features.
* Remember that gas usage can change with Ethereum upgrades or compiler changes, and various tricks can be used to reduce gas.
:::

## Common operations

Here are some common operations and their approximate gas consumption:

[TO EDIT THIS TABLE]

| Operation | Approximate Gas |
| ---- | -------- |
| Simple [Direct](../background/offer-maker/direct.md) contract   | 30,000   |
| ERC20 transfer | 25,000 (worst case is when transferring to account with 0 balance)      |
| AAVE redeem/borrow | 300,000 |
| [updateOffer](../technical-references/code/strats/src/strategies/offer_maker/abstract/Direct.md#updateoffer) | 20,000 + 5,100*`k` where `k` is the distance between the used %%pivot|pivot-id%% and the final position of the offer. |
| [retractOffer](../technical-references/code/strats/src/strategies/offer_maker/abstract/Direct.md#retractoffer) without deprovision | 10,000 |
| [retractOffer](../technical-references/code/strats/src/strategies/offer_maker/abstract/Direct.md#retractoffer) with deprovision | 50,000 |
| Ethereum opcodes | [See the Ethereum documentation](https://ethereum.org/en/developers/docs/evm/opcodes/) |
| Set cold storage value `x!=0` to `x!=0` | 3,000 |
| Set cold storage value `x==0` to `x!=0` | 20,000 |

The attentive reader may see that the tutorial uses more than a Simple Direct contract. This is because the maker does not transfer tokens to the contract prior to the offer being taken - so the contract pulls them from the maker just-in-time - costing the roughly 25,000 gas of an ERC20 transfer.

To verify this, you can run the tutorial but transfer tokens to the contract before taking the offer with:

```bash
cast send --rpc-url $LOCAL_URL "$WETH" "transfer(address, uint)" "$OFFER_MAKER" 1000000000000000000  --private-key "$PRIVATE_KEY"
```

The gasreq should be taken into account when [provisioning](../../contracts/technical-references/taking-and-making-offers/reactive-offer/offer-provision.md).

## Exisiting strategies

### MangroveOrder

* MangroveOrder's most expensive case is `148451` (more details [here](https://github.com/mangrovedao/mangrove-strats/blob/350223c0c9766b526d4883fab5f4f904382878c4/test/strategies/MgvOrder.gasreq.t.sol#L18))

* SimpleRouter is hardcoded to `70000` gas (see contract [here](https://github.com/mangrovedao/mangrove-strats/blob/350223c0c9766b526d4883fab5f4f904382878c4/src/strategies/routers/SimpleRouter.sol#L4))
    * Hence `gasreq` for MangroveOrder should be `148451 - 70000 = 78451` (see the note [above](#result) regarding gas usage from routers)

This is assuming, that the code in this test hits the worst case. However, looking at core runs that is not entirely the case:
* `19675` is the comparable case for core (see [here](https://github.com/mangrovedao/mangrove-strats/blob/350223c0c9766b526d4883fab5f4f904382878c4/test/strategies/kandel/Kandel.gasreq.t.sol#L27))
* `22841` would be if an offer existed in the same bin as the reposted offer (see [here](https://github.com/mangrovedao/mangrove-strats/blob/350223c0c9766b526d4883fab5f4f904382878c4/test/strategies/kandel/Kandel.gasreq.t.sol#L28))

The difference is just above 3000, so we add that and round up to get 82000. This is then used in MangroveOrderDeployer.

Note that for instance for polygon with WETH/DAI the numbers are lower due to the A/B test tokens being expensive contracts, so it should cover that, especially with optimization.

In addition, wrt density then gasbase is 271276 (c.f. test/strategies/CoreOfferGasbase.gasreq.t.sol:OfferGasBaseTest_Generic_A_B:test_gasbase_to_empty_book_base_quote_success())


### Kandel

