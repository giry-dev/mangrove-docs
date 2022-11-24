---
description: Simple tutorial showing how to post your first offer managed by your own contract on-chain.
sidebar_position: 2
---

# Post a Smart Offer

In this tutorial you will learn how to post a %%smart offer|smart-offer%% managed by your own %%maker contract|maker-contract%% and which simply transfers tokens to and from your reserve.

## Prerequisites

The tutorial assumes knowledge of solidity development. Follow [preparation](./preparation.md) to create a new `tutorial` folder.

Open your favorite solidity editor inside that folder.

It is assumed that the `ADMIN_ADDRESS` has enough native tokens to complete the steps.

## Simple maker contract (offer logic)

We want to create a new contract `OfferMakerTutorial` to implement %%offer logic|offer-logic%% and utilize the `Direct` contract in our strat-library for this purpose. `Direct` provides a safety harness to make it easier to correctly interact with Mangrove, you can read more about it [here](../background/offer-maker/direct.md).

Create a new `OfferMakerTutorial.sol` file in the `src` folder and add the following pieces.

### Imports

Add the imports we are going to need, along with a standard solidity preamble.

```solidity reference title="OfferMakerTutorial.sol"
https://github.com/mangrovedao/mangrove-core/blob/5fb08b2b2742a0e9dee57662085fab03279afc72/src/toy_strategies/offer_maker/tutorial/OfferMakerTutorial.sol#L1-L8
```

### Constructor

Add the contract and the code for the construct. We will skip some details here, which you can read more about later; %%routers|router%%, %%gas requirements|gasreq%%, and [deployment scripts](../how-to-guides/HowToDeploy.md).

```solidity reference title="OfferMakerTutorial.sol"
https://github.com/mangrovedao/mangrove-core/blob/5fb08b2b2742a0e9dee57662085fab03279afc72/src/toy_strategies/offer_maker/tutorial/OfferMakerTutorial.sol#L12-L22
```

### Add offer posting function

The abstract contract `Direct` has an internal function `_newOffer` for posting offers on Mangrove. We need to expose this, so that we can post offers using our contract.

See [OfferArgs](../technical-references/code/strategies/interfaces/IOfferLogic.md#offerargs) for an explanation of the parameters for posting an offer.

Also see %%provision|provision%%, %%gasreq|gasreq%%, and %%pivotId|pivot-id%%, and %%offer list|offer-list%%.

```solidity reference title="OfferMakerTutorial.sol"
https://github.com/mangrovedao/mangrove-core/blob/5fb08b2b2742a0e9dee57662085fab03279afc72/src/toy_strategies/offer_maker/tutorial/OfferMakerTutorial.sol#L26-L53
```

### Emit in Posthook

When using our new contract we can inspect traces and addresses, but for illustrative purposes insert the following to emit an event in the %%posthook|makerPosthook%% when the offer is successfully taken.

```solidity reference title="OfferMakerTutorial.sol"
https://github.com/mangrovedao/mangrove-core/blob/5fb08b2b2742a0e9dee57662085fab03279afc72/src/toy_strategies/offer_maker/tutorial/OfferMakerTutorial.sol#L57-L65
```

There are more hooks to enable the Mangrovian abilities of %%last look|last-look%% and more advanced %%reactive liquidity|reactive-liquidity%%.

## Local test

The contract is now complete - you can see the full example by following the links to github.

Before deploying it on-chain we should test it.

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

Start Foundry's local node `anvil` to test things locally before broadcasting to the real chain, with `$FORK_URL` coming from `.env` and pointing, for instance, to the Polygon Mumbai testnet.

```bash
anvil --fork-url $RPC_URL
```

### Create contract on chain

Start another terminal and import environment variables again

```bash
source .env
```

Now, create the `OfferMakerTutorial` contract on the `anvil` node with your private key by pointing to its local `rpc-url`, and supplying the parameters for Mangrove core contract (get it from [Addresses](../../contracts/technical-references/contract-addresses.md) for the network you have forked)

```bash
export MANGROVE=<contract address> # 0xabcd.... 
forge create "OfferMakerTutorial" --private-key "$PRIVATE_KEY" --rpc-url $LOCAL_URL --constructor-args "$MANGROVE" "$ADMIN_ADDRESS"
```

The output should look like

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

In this tutorial we will use the WETH, DAI market (the example token addresses are for the Polygon Mumbai testnet).

We have to let Mangrove pull the outbound token from our new contract, and we can use the `activate` function for that.

```bash
export WETH=0x63e537a69b3f5b03f4f46c5765c82861bd874b6e
cast send --rpc-url $LOCAL_URL "$OFFER_MAKER" "activate(address[])" "[$WETH]" --private-key "$PRIVATE_KEY"
```

### Post an offer

Now that the contract is ready, we can use it to post an offer - note that we have to %%provision|provision%% the offer, and we do that by sending some native tokens to `newOffer`.

```bash
export DAI=0xc87385b5e62099f92d490750fcd6c901a524bbca
cast send --rpc-url $LOCAL_URL "$OFFER_MAKER" "newOffer(address, address, uint, uint)(uint)" "$WETH" "$DAI" 1000000000000000000 1700000000000000000000  --private-key "$PRIVATE_KEY" --value 0.01ether
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

### Unlocked liquidity (%%reactive liquidity|reactive-liquidity%%)

Notice that the offer was posted without transferring tokens from the admin to Mangrove or the `OfferMakerTutorial`. This way the tokens are pulled just-in-time when the offer is taken and can thus be made available for other purposes.

For this to work, we need to let the `OfferMakerTutorial` pull funds from the admin's reserve of WETH.

```bash
cast send --rpc-url $LOCAL_URL "$WETH" "approve(address, uint)" "$OFFER_MAKER" 1000000000000000000 --private-key "$PRIVATE_KEY"
```

Alternatively, the admin could transfer tokens to the contract and lock them until the offer is taken or the tokens are withdrawn.

The `OfferMakerTutorial` uses the approval to transfer funds from the admin, but this could also involve a %%router|router%% and require additional approvals depending on the scenario. See [approvals](../how-to-guides/approvals.md) for more details.

#### Mint

A brief side step - if the admin (acting as a maker) does not have required WETH tokens then the smart offer will fail when taken (but note that it could still be posted - a smart offer can source liquidity on-chain).

If you don't have any WETH you can use this to mint some tokens:

```bash
cast send --rpc-url $LOCAL_URL "$WETH" "mint(uint)" 1000000000000000000000000000000 --private-key "$PRIVATE_KEY"
```

Shortly the admin will act as taker and take the offer, and therefore DAI are also needed.

```bash
cast send --rpc-url $LOCAL_URL "$DAI" "mint(uint)" 1000000000000000000000000000000 --private-key "$PRIVATE_KEY"
```

### Snipe the offer

Before being able to take an offer we need to approve Mangrove to pull funds from the taker's DAI reserve:

```bash
cast send --rpc-url $LOCAL_URL "$DAI" "approve(address, uint)" "$MANGROVE" 1700000000000000000000 --private-key "$PRIVATE_KEY"
```

Now we ensure that we have set everything up correctly for the offer to be successfully taken. We use Mangrove's `snipes` functionality to ensure it is exactly our own posted offer that we take, and not some other one in the order book. Takers would normally make market orders instead.

```bash
export OFFER_ID_HEX=0xabcd... # the hexadecimal offer ID captured when posting the offer
export OFFER_ID=$(($OFFER_ID_HEX)) # the decimal ID of the offer captured above
cast send --rpc-url $LOCAL_URL "$MANGROVE" "snipes(address, address, uint[4][], bool)" "$WETH" "$DAI" "[[$OFFER_ID,1000000000000000000,1700000000000000000000,100000000000000000]]" 1 --private-key "$PRIVATE_KEY"
```

Now, run the resulting transaction via

```bash
cast run <transactionHash>
```

Towards the end of the trace you can find the function of `makerPosthook` being called and emits an event with the data `42` as specified in the `__posthookSuccess__` of your new `OfferMakerTutorial` contract.

```bash
   ├─ [8280] 0xabc...::makerPosthook(...) 
   │   ├─  emit topic 0: 0xefg...
   │   │           data: 0x000000000000000000000000000000000000000000000000000000000000002a
```

### Next steps

The next step could be to publish the contract on mainnet by stopping Anvil and replacing the `--rpc-url $LOCAL_URL` in the above `create`, `activate`, and `approve` commands with `--rpc-url $RPC_URL` - and finally, the `newOffer` with sensible prices.

To get a view of the order book Mangrove UI can be used, or you can use the [SDK](../../SDK/getting-started/basic-offer.md).

To get a better understanding of how tokens flow between taker, maker, Mangrove, and maker contracts like `OfferMakerTutorial`, see [Mangrove Offer](../background/offer-maker/mangrove-offer.md)

### Troubleshooting

If you get errors when taking the offer then it is probably missing approvals or (native) tokens.

* `mgv/takerTransferFail` - missing DAI tokens or approval of transfer of DAI from taker to Mangrove.
* No `__posthookSuccess__` but `makerExecute` is red in the trace - missing WETH tokens of approval of transfer of WETH from maker to Mangrove.

