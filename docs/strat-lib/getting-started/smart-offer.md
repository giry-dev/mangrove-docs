---
description: Simple tutorial showing how to post your first offer managed by your own contract on-chain.
sidebar_position: 2
---

# Post a Smart Offer

In this tutorial, you will learn how to post a %%smart offer|smart-offer%% managed by your own %%maker contract|maker-contract%% that simply stores %%inbound|inbound%% and %%outbound|outbound%% tokens on its balance.

## Prerequisites

* The tutorial assumes knowledge of solidity development.
* Follow [preparation](./preparation.md) to create a new `tutorial` folder.
* Open your favorite solidity editor inside that folder.
* It is assumed that the `ADMIN_ADDRESS` has enough native tokens to complete the steps.

## Simple maker contract (offer logic)

We want to create a new contract `OfferMakerTutorial` to implement %%offer logic|offer-logic%% and utilize the `Direct` contract in our strat-library for this purpose. `Direct` provides a safety harness to make it easier to correctly interact with Mangrove, you can read more about it [here](../background/offer-maker/direct.md).

Start by creating a new `OfferMakerTutorial.sol` file in the `src` folder, and add the following pieces:

### Imports

Add the imports we are going to need, along with a standard solidity preamble.

```solidity reference title="OfferMakerTutorial.sol"
https://github.com/mangrovedao/mangrove-core/blob/d6a2aae336a7ea89abe2479ab797b5ffcd5abb02/src/toy_strategies/offer_maker/tutorial/OfferMakerTutorial.sol#L1-L8
```

### Constructor

Next, add the contract and the code for the constructor.

We will skip some details here, which you can read more about later; %%routers|router%%, %%gas requirements|gasreq%%, and [deployment scripts](../guides/HowToDeploy.md).<br />
> Note: we also implement the `ILiquidityProvider` interface which makes the contract compatible with what the [SDK](../../SDK/README.md) expects.


```solidity reference title="OfferMakerTutorial.sol"
https://github.com/mangrovedao/mangrove-core/blob/d6a2aae336a7ea89abe2479ab797b5ffcd5abb02/src/toy_strategies/offer_maker/tutorial/OfferMakerTutorial.sol#L12-L27
```

### Add offer management functions

The abstract contract `Direct` has internal functions that allows one to manage offers: `_newOffer` for posting offers, `_updateOffer` for updating existing offers and `_retractOffer` for unpublishing offers from Mangrove. We need to expose these functions in a restricted manner, so that only the administrator of the contract can manage offers. We expose them through functions matching the [`ILiquidityProvider`](../technical-references/code/strategies/interfaces/ILiquidityProvider.md) interface.

> See [OfferArgs](../technical-references/code/strategies/interfaces/IOfferLogic.md#offerargs) for an explanation of the parameters for posting an offer.

> Also see %%provision|provision%%, %%gasreq|gasreq%%, and %%pivotId|pivot-id%%, and %%offer list|offer-list%%.

Add the below code to your contract.

```solidity reference title="OfferMakerTutorial.sol"
https://github.com/mangrovedao/mangrove-core/blob/d6a2aae336a7ea89abe2479ab797b5ffcd5abb02/src/toy_strategies/offer_maker/tutorial/OfferMakerTutorial.sol#L31-L86
```

### Emit in Posthook

When using our new contract, we can inspect traces and addresses but illustrative purposes, let's insert the following to emit an event in the %%posthook|makerPosthook%% when the offer is successfully taken.

```solidity reference title="OfferMakerTutorial.sol"
https://github.com/mangrovedao/mangrove-core/blob/d6a2aae336a7ea89abe2479ab797b5ffcd5abb02/src/toy_strategies/offer_maker/tutorial/OfferMakerTutorial.sol#L88-L102
```

There are more hooks to enable the Mangrovian abilities of %%last look|last-look%% and more advanced %%reactive liquidity|reactive-liquidity%%.

## Local test

The contract is now complete - you can see the full example by following the links to github.

But before deploying it on-chain, we should test it!

### Compilation

First, compile the contract:

```bash
forge build
```

### Start local node

Before proceeding, import the environment variables made as part of the preparation

```bash
source .env
```

Start Foundry's local node `anvil` to test things locally before broadcasting to the real chain, with `$RPC_URL` coming from `.env` and pointing, for instance, to the Polygon Mumbai testnet.

```bash
anvil --fork-url $RPC_URL
```

### Create contract on chain

Start another terminal and import environment variables again

```bash
source .env
```

Now, create the `OfferMakerTutorial` contract on the `anvil` node with your private key by pointing to its local `rpc-url`, and supplying the parameters for Mangrove core contract (get it from [Addresses](../../contracts/technical-references/contract-addresses.md) for the network you have forked).
You can also add it to your `.env` file.

```bash
export MANGROVE=<contract address> # 0xabcd.... 
```

```bash
forge create "OfferMakerTutorial" --private-key "$PRIVATE_KEY" --rpc-url $LOCAL_URL --constructor-args "$MANGROVE" "$ADMIN_ADDRESS"
```
> Note: you might need to add the `--legacy` argument.

<br />
The output should look like:

```bash
[⠒] Compiling...
No files changed, compilation skipped
Deployer: 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266
Deployed to: 0x5deA11A74e15BBfD6F29fd54F0b6F251F4774556
Transaction hash: 0xcfbe7503081ba9a749ee30fac8c40bfe19e0a5da665578ed00f40ce72694ca06
```

Take a note of the `Deployed to` address and save it in a variable:

```bash
export OFFER_MAKER=<contract address> # 0xabcd..., the address of the newly deployed contract
```

### Activate the contract

In this tutorial, we will use the WBTC/USDT market.
Make sure to set variables with the tokens address into your `.env` file.

> Note: the example token addresses are for the Polygon Mumbai testnet.

```bash
export WBTC=0xf402f6197d979F0A4cba61596921a3d762520570
export USDT=0xe8099699aa4A79d89dBD20A63C50b7d35ED3CD9e
```

We have to let Mangrove pull the outbound token from our new contract - we can use the `activate` function for that.

```bash
cast send --rpc-url $LOCAL_URL "$OFFER_MAKER" "activate(address[])" "[$WBTC]" --private-key "$PRIVATE_KEY"
```

### Post an offer

Now that the contract is ready, we can use it to post an offer - note that we have to %%provision|provision%% the offer, and we do that by sending some native tokens to `newOffer`.<br />
In our example, we are offering 1 WTBC (outbound) in exchange for 26,000 USDT (inbound).

```bash
cast send --rpc-url $LOCAL_URL "$OFFER_MAKER" "newOffer(address, address, uint, uint, uint, uint)(uint)" "$WBTC" "$USDT" 100000000 26000000000 0 100000 --private-key "$PRIVATE_KEY" --value 0.01ether
```

Instead of trying to parse the logs, we can make a note of the `transactionHash` at the end of the output and use local execution to see the `offerId` returned by `newOffer`.

```bash
cast run <transactionHash>
```

Which would output the following tail:

```bash
...
    └─ ← 0x0000000000000000000000000000000000000000000000000000000000000235


Transaction successfully executed.
Gas used: 168639
```

`0x0000000000000000000000000000000000000000000000000000000000000235` is the offer id.

### Locking liquidity

If the offer was now taken, it will fail to deliver the promised liquidity. It promises up to 1 WBTC, but the contract has no WBTC to deliver. We can fix this by sending some WBTC to the contract:

```bash
cast send --rpc-url $LOCAL_URL "$WBTC" "transfer(address,uint)" "$OFFER_MAKER" 100000000
```

If you do not have the liquidity, then see [mint](#mint) below.

:::info Note
One of the big benefits of Mangrove is that **liquidity does not have to be locked in** - we will have a look at that in the [Unlocking Liquidity](../guides/howToUnlockLiquidity.md) guide.
:::

#### Mint

If the admin (acting as a maker) does not have required WBTC tokens then the smart offer will fail when taken.
> Note: this true in this particular case where we need to lock liquidity in our contract - that's how we designed it. Using a %%router|router%%, you can [unlock your funds](../guides/howToUnlockLiquidity.md), and your offer **could still be posted** - your smart offer can source liquidity elsewhere on-chain.

If you don't have any WBTC you can use this to mint some tokens:

```bash
cast send --rpc-url $LOCAL_URL "$WBTC" "mint(uint)" 500000000 --private-key "$PRIVATE_KEY"
```

If the admin acts as taker and takes the offer (see [snipe guide](../guides/howToSnipe.md)), you will also need USDT.

```bash
cast send --rpc-url $LOCAL_URL "$USDT" "mint(uint)" 1000000000000 --private-key "$PRIVATE_KEY"
```

#### Approving the contract to pull the funds

```bash
cast send --rpc-url $LOCAL_URL "$WBTC" "approve(address, uint)" "$OFFER_MAKER" 100000000 --private-key "$PRIVATE_KEY"
```

Alternatively, the admin could transfer tokens to the contract and lock them until the offer is taken or the tokens are withdrawn.

The `OfferMakerTutorial` uses the approval to transfer funds from the admin, but this could also involve a %%router|router%% and require additional approvals depending on the scenario. See [approvals](../guides/approvals.md) for more details.


### Update an offer

In a similar fashion, we can make use of the `updateOffer` function inside our contract. Let's change the amount of tokens we want for our WBTC to 25,000:

```bash
cast send --rpc-url $LOCAL_URL "$OFFER_MAKER" "updateOffer(address, address, uint, uint, uint, uint, uint)(uint)" "$WBTC" "$USDT" 100000000 25000000000 0 "$OFFER_ID" 100000 --private-key "$PRIVATE_KEY" --value 0.01ether
```

### Retract an offer

We can also remove our offer from the book, using `retractOffer`. Note that we don't need to provide a provision in this case, since we are pulling the offer off the market. We will actually get back our provision with that configuration.

```bash
cast send --rpc-url $LOCAL_URL "$OFFER_MAKER" "retractOffer(address, address, uint, bool)(uint)" "$WBTC" "$USDT" "$OFFER_ID" 1 --private-key "$PRIVATE_KEY
```


### Next steps

* You could publish the contract on mainnet by stopping Anvil and replacing the `--rpc-url $LOCAL_URL` in the above `create`, `activate`, and `approve` commands with `--rpc-url $RPC_URL` - and finally, the `newOffer` with sensible prices.

* You could try [taking](../guides/howToSnipe.md) your own offer.

* To get a view of the order book, the Mangrove UI can be used, or you can use the [SDK](../../SDK/getting-started/basic-offer.md).

* To get a better understanding of how tokens flow between taker, maker, Mangrove, and maker contracts like `OfferMakerTutorial`, see [Mangrove Offer](../background/offer-maker/mangrove-offer.md).

* You can also add more features (such as [reneging trades](../guides/howToRenege.md) or [unlocking/reactive liquidity](../guides/howToUnlockLiquidity.md)) to your smart offer by looking at the next sections of this doc!
