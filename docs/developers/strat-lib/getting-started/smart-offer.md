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

```solidity reference title="OfferMakerTutorial.sol - Preamble"
https://github.com/mangrovedao/mangrove-strats/blob/a265abeb96a053e386d346c7c9e431878382749c/src/toy_strategies/offer_maker/tutorial/OfferMakerTutorial.sol#L1-L9
```

### Constructor

Next, add the contract and the code for the constructor.

We will skip some details here, which you can read more about later; %%routers|router%%, %%gas requirements|gasreq%%, and [deployment scripts](../guides/HowToDeploy.md).<br />
> Note: we also implement the `ILiquidityProvider` interface which makes the contract compatible with what the [SDK](../../SDK/README.md) expects.


```solidity reference title="OfferMakerTutorial.sol - Contract and constructor"
https://github.com/mangrovedao/mangrove-strats/blob/a265abeb96a053e386d346c7c9e431878382749c/src/toy_strategies/offer_maker/tutorial/OfferMakerTutorial.sol#L13-L26
```

### Add offer management functions

The abstract contract `Direct` has internal functions that allows one to manage offers: `_newOffer` for posting offers, `_updateOffer` for updating existing offers and `_retractOffer` for unpublishing offers from Mangrove. We need to expose these functions in a restricted manner, so that only the administrator of the contract can manage offers. We expose them through functions matching the [`ILiquidityProvider`](../technical-references/code/strats/src/strategies/interfaces/ILiquidityProvider.md) interface.

> See [OfferArgs](../technical-references/code/strats/src/strategies/interfaces/IOfferLogic.md#offerargs) for an explanation of the parameters for posting an offer.

> Also see %%provision|provision%%, %%gasreq|gasreq%%, and TODO:%pivotId|pivot-id%, and %%offer list|offer-list%%.

Add the below code to your contract.

```solidity reference title="OfferMakerTutorial.sol - Offer management functions"
https://github.com/mangrovedao/mangrove-strats/blob/a265abeb96a053e386d346c7c9e431878382749c/src/toy_strategies/offer_maker/tutorial/OfferMakerTutorial.sol#L30-L70
```

### Emit in Posthook

When using our new contract, we can inspect traces and addresses but illustrative purposes, let's insert the following to emit an event in the %%posthook|makerPosthook%% when the offer is successfully taken.

```solidity reference title="OfferMakerTutorial.sol - Emit in Posthook"
https://github.com/mangrovedao/mangrove-strats/blob/a265abeb96a053e386d346c7c9e431878382749c/src/toy_strategies/offer_maker/tutorial/OfferMakerTutorial.sol#L74-L83
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

Start Foundry's local node `anvil` to test things locally before broadcasting to the real chain, with `$RPC_URL` coming from `.env` and pointing, for instance, to the Polygon network.

```bash
anvil --fork-url $RPC_URL
```

### Create contract on chain

Start another terminal and import environment variables again

```bash
source .env
```

Now, create the `OfferMakerTutorial` contract on the `anvil` node with your private key by pointing to its local `rpc-url`, and supplying the parameters for Mangrove core contract (get it from [Addresses](../../protocol/technical-references/contract-addresses.md) for the network you have forked).
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

In this tutorial, we will use the WBTC/DAI market.
Make sure to set variables with the tokens address into your `.env` file.

> Note: the example token addresses are for the Polygon Mumbai testnet.

```bash
export WBTC=0x2Fa2e7a6dEB7bb51B625336DBe1dA23511914a8A
export DAI=0xc8c0Cf9436F4862a8F60Ce680Ca5a9f0f99b5ded
```

We have to let Mangrove pull the outbound token from our new contract - we can use the `activate` function for that.

```bash
cast send --rpc-url $LOCAL_URL "$OFFER_MAKER" "activate(address[])" "[$WBTC]" --private-key "$PRIVATE_KEY"
```

### Post an offer

Now that the contract is ready, we can use it to post an offer - note that we have to %%provision|provision%% the offer, and we do that by sending some native tokens to `newOffer`.<br />
In our example, we are offering 1 WBTC (gives) at tick 50 (tick 50 means the price ratio is `1.0001^50`).

:::info Note
Later, if you'd like to take your own offer with a [market order](../../protocol/technical-references/market-order/README.md) for testing purpose, it would be handy to have your offer at the very top of the book (i.e. with the best price possible). To do this, you could post your offer with the smallest tick (`-887272`), or use the [`MIN_TICK`](https://github.com/mangrovedao/mangrove-core/blob/2ae172805fd8b309c30b2dc877dba66245abbb3e/lib/core/Constants.sol#L52) constant in your test contract.
:::

```bash
cast send --rpc-url $LOCAL_URL "$OFFER_MAKER" "newOffer((address, address, uint), int, uint, uint)(uint)" "($WBTC,$DAI,1)" 50 100000000 0  --private-key "$PRIVATE_KEY" --value 0.01ether
```

Instead of trying to parse the logs, we can make a note of the `transactionHash` at the end of the output and use local execution to see the `offerId` returned by `newOffer`.

```bash
cast run <transactionHash>
```

Which would output the following tail:

```bash
...
    └─ ← 0x0000000000000000000000000000000000000000000000000000000000000002     


Transaction successfully executed.
Gas used: 200843
```

`0x0000000000000000000000000000000000000000000000000000000000000002` is the offer id.

### Locking liquidity

If the offer was now taken, it will fail to deliver the promised liquidity. It promises up to 1 WBTC, but the contract has no WBTC to deliver. We can fix this by sending some WBTC to the contract:

```bash
cast send --rpc-url $LOCAL_URL "$WBTC" "transfer(address,uint)" "$OFFER_MAKER" 100000000 --private-key "$PRIVATE_KEY"
```

If you do not have the liquidity, check [Getting tokens](#getting-tokens) below, and come back to this step afterwards.

:::info Note
One of the big benefits of Mangrove is that **liquidity does not have to be locked in** - we will have a look at that in the [Unlocking Liquidity](../guides/howToUnlockLiquidity.md) guide.
:::

#### Getting tokens

If the admin (acting as a maker) does not have required WBTC tokens then the smart offer will fail when taken.
> Note: this true in this particular case where we need to lock liquidity in our contract - that's how we designed it. Using a %%router|router%%, you can [unlock your funds](../guides/howToUnlockLiquidity.md), and your offer **could still be posted** - your smart offer can source liquidity elsewhere on-chain.

If you don't have any WBTC, you can get some by using the following commands (taken from [foundry documentation](https://book.getfoundry.sh/tutorials/forking-mainnet-with-cast-anvil)), or the corresponding faucet. Just look for a token holder with large amounts of WBTC - you can check the list on Polygonscan. Also, remember to add the chosen address under `$LUCKY_USER` in your `.env` file. 

```bash
# Display the amount of WBTC in the admin wallet 
cast call $WBTC "balanceOf(address)(uint256)" $ADMIN_ADDRESS

# Impersonate the LUCKY_USER before making a transfer of 1 WBTC to our admin wallet
cast rpc anvil_impersonateAccount $LUCKY_USER
cast send $WBTC --unlocked --from $LUCKY_USER "transfer(address,uint256)(bool)" $ADMIN_ADDRESS 100000000

# Verify that the transfer was successful
cast call $WBTC "balanceOf(address)(uint256)" $ADMIN_ADDRESS
```


### Update an offer

In a similar fashion, we can make use of the `updateOffer` function inside our contract. We will need the offer ID from earlier - let's add it in a variable:

```bash
export OFFER_ID_HEX=<0xabcd...> # the hexadecimal offer ID captured when posting the offer
export OFFER_ID=$(($OFFER_ID_HEX)) # the decimal ID of the offer captured above
```

Now, we can update our offer, for example by changing the amount of WBTC we give to 0.1:

```bash
cast send --rpc-url $LOCAL_URL "$OFFER_MAKER" "updateOffer((address, address, uint), int, uint, uint, uint)(uint)" "($WBTC,$DAI,1)" 50 10000000 "$OFFER_ID" 0 --private-key "$PRIVATE_KEY" --value 0.01ether
```

:::info Note
To update an offer, here's something to keep in mind:
1. To change the volume offered => change `gives` (example above)
2. To change the price of the offer => change `tick`
3. To change both volume and price => change `gives` and `tick`
:::

### Retract an offer

We can also remove our offer from the book, using `retractOffer`. Note that we don't need to provide a provision in this case, since we are pulling the offer off the market. We will actually get back our provision with that configuration.

```bash
cast send --rpc-url $LOCAL_URL "$OFFER_MAKER" "retractOffer((address, address, uint), uint, bool)(uint)" "($WBTC,$DAI,1)" "$OFFER_ID" 1 --private-key "$PRIVATE_KEY"
```


### Next steps

* You could publish the contract on mainnet by stopping Anvil and replacing the `--rpc-url $LOCAL_URL` in the above `create`, `activate`, and `approve` commands with `--rpc-url $RPC_URL` - and finally, the `newOffer` with sensible prices.

* To get a view of the order book, the Mangrove UI can be used, or you can use the [SDK](../../SDK/getting-started/basic-offer.md).

* To get a better understanding of how tokens flow between taker, maker, Mangrove, and maker contracts like `OfferMakerTutorial`, see [Mangrove Offer](../background/offer-maker/mangrove-offer.md).

* You can also add more features (such as [reneging trades](../guides/howToRenege.md) or [unlocking/reactive liquidity](../guides/howToUnlockLiquidity.md)) to your smart offer by looking at the next sections of this doc!

* At some point, you will need to measure the gas requirements of your smart offers - [this page](../guides/howtoGasreq.md) will give you pointers on how to do this.
