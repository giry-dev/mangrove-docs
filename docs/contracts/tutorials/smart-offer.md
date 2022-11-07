---
description: Simple tutorial showing how to post your first offer managed by your own contract on-chain.
---

# Post a smart offer

In this tutorial you will learn how to post a %%smart offer|smartOffer%%  managed by your own maker contract and which simply transfers tokens to and from your reserve.

## Prerequisites

The tutorial assumes knowledge of solidity development. Follow [preparation](./preparation.mdx) to create a new `tutorial` folder.

Open your favorite solidity editor inside that folder.

## Simple maker contract (offer logic)

We want to create a new contract `OfferMaker` which inherits from the `Direct` contract in our strat-library. `Direct` provides a safety harness to make it easier to correctly interact with Mangrove.

Create a new `OfferMaker.sol` file in the `src` folder and add the following pieces.

### Imports

Add the imports we are going to need, along with a standard solidity preamble.

```solidity reference title="OfferMaker.sol"
https://github.com/mangrovedao/mangrove-core/blob/e307064c1da3375a116c6153c3d36a1b08e802ed/src/toy_strategies/offer_maker/tutorial/OfferMaker.sol#L1-L8
```

### Constructor

Add the contract and the code for the construct. We will skip some details here, which you can read more about later; [routers](TODO), [gas requirements](TODO), and [deployment scripts](TODO).

```solidity reference title="OfferMaker.sol"
https://github.com/mangrovedao/mangrove-core/blob/e307064c1da3375a116c6153c3d36a1b08e802ed/src/toy_strategies/offer_maker/tutorial/OfferMaker.sol#L12-L22
```

### Add offer posting function

The abstract contract `Direct` has an internal function `_newOffer` for posting offers on Mangrove. We need to expose this, so that we can post offers using our contract.

See [OfferArgs](./TODOnatspec) for an explanation of the parameters for posting an offer.

Also see %%provision|provision%%, %%gasreq|gasreq%%, and %%pivotId|pivotId%%, and %%offer list|offerList%%.

```solidity reference title="OfferMaker.sol"
https://github.com/mangrovedao/mangrove-core/blob/e307064c1da3375a116c6153c3d36a1b08e802ed/src/toy_strategies/offer_maker/tutorial/OfferMaker.sol#L26-L53
```

### Emit in Posthook

When using our new contract we can inspect traces and addresses, but for illustrative purposes insert the following to emit an event in the %%posthookSuccess|posthookSuccess%% when the offer is successfully taken.

Invoking `super` makes sure the offer is reposted in case it was not fully taken.

```solidity reference title="OfferMaker.sol"
https://github.com/mangrovedao/mangrove-core/blob/e307064c1da3375a116c6153c3d36a1b08e802ed/src/toy_strategies/offer_maker/tutorial/OfferMaker.sol#L57-L72
```

There are more hooks to enable the Mangrovian abilities of last look, ghost and reactive liquidity.

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

Now, create the `OfferMaker` contract on the `anvil` node with your private key by pointing to its `rpc-url`, and supplying the parameters for the Mangrove core contract (get it from [Addresses](../technical-references/contract-addresses.md))

```bash
export MANGROVE=<contract address> # 0xabcd.... 
forge create "OfferMaker" --private-key "$PRIVATE_KEY" --rpc-url http://127.0.0.1:8545 --constructor-args "$MANGROVE" "$ADMIN_ADDRESS"
```

Take a note of the deployed to address and save it in a variable:

```bash
export OFFER_MAKER=<contract address> # 0xabcd..., the address of the newly deployed contract
```

### Activate the contract

We have to let Mangrove pull the outbound token from our new contract.

In this tutorial we will use the WETH, DAI market.

```bash
export WETH=0x63e537a69b3f5b03f4f46c5765c82861bd874b6e
cast send --rpc-url http://127.0.0.1:8545 "$OFFER_MAKER" "activate(address[])" "[$WETH]" --private-key "$PRIVATE_KEY"
```

We also need to let the `OfferMaker` pull funds from the admin's reserve.

```bash
cast send --rpc-url http://127.0.0.1:8545 "$WETH" "approve(address, uint)" "$OFFER_MAKER" 1000000000000000000 --private-key "$PRIVATE_KEY"
```


### Post an offer

Now that the contract is ready, we can use it to post an offer - note that we have to provision the offer, and we do that by sending some native tokens to `newOffer`.

```bash
export DAI=0xc87385b5e62099f92d490750fcd6c901a524bbca
cast send --rpc-url http://127.0.0.1:8545 "$OFFER_MAKER" "newOffer(address, address, uint, uint)(uint)" "$WETH" "$DAI" 1000000000000000000 1700000000000000000000  --private-key "$PRIVATE_KEY" --value 0.01ether
```

Instead of trying to parse the logs, we can make a note of the `transactionHash` and use local execution to see the `offerId` returned by `newOffer`. Note that it is in hexadecimal and we want it in decimal below.

```bash
cast run <transactionHash>
```

### Snipe the offer

Now we ensure that we have set everything up correctly for the offer to be successfully taken, and we see our event emitted.

```bash
export OFFER_ID=<1234> # the decimal ID of the offer captured above - or use export OFFER_ID=$((0xabcd))
cast send --rpc-url http://127.0.0.1:8545 "$MANGROVE" "snipes(address, address, uint[4][], bool)" "$WETH" "$DAI" "[[$OFFER_ID,1000000000000000000,1700000000000000000000,100000000000000000]]" 1 --private-key "$PRIVATE_KEY"
```

Now, run the resulting transaction via

```bash
cast run <transactionHash>
```

Towards the end of the trace you can find the function of `makerPosthook` being called and emits an event with the data `42` as specified in the `__posthookSuccess__` of your new `OfferMaker` contract.

```bash
   ├─ [8280] 0xabc...::makerPosthook(...) 
   │   ├─  emit topic 0: 0xefg...
   │   │           data: 0x000000000000000000000000000000000000000000000000000000000000002a
```

### Next steps

The next step could be to publish the contract on mainnet by stopping Anvil and replacing the `--rpc-url http://127.0.0.1:8545` in the above `create`, `activate`, and `approve` commands with `--rpc-url $RPC_URL` - and finally, the `newOffer` with sensible prices.

To get a view of the order book the Mangrove UI can be used, or you can use the [SDK](./../../SDK/getting-started/basic-offer.md).
