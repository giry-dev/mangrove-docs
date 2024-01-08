---
description: How to unlock liquidity
sidebar_position: 1

---

# Unlocking liquidity

In the previous [smart offer tutorial](../getting-started/smart-offer.md), the offer we posted had to receive a transfer liquidity for it to succeed when taken. Now, we want instead to post the offer without transferring tokens from the admin to Mangrove or the `OfferMakerTutorial` (unlocked or %%reactive liquidity|reactive-liquidity%%). This way, the tokens are pulled just-in-time when the offer is taken and can thus be made available for other purposes (ex: generating extra yield in another DeFi protocol).

:::info Note
Since you are not committing your liquidity to your smart offer, you can post multiple offers with unlocked liquidity. We call that [liquidity amplification](/developers/terms/amplified-liquidity.md).
:::

For this to work, we use a so-called %%router|router%%: it is a contract that can be used to route tokens from the admin to the `OfferMakerTutorial` when the offer is taken.<br />

First add the following import at the top of the file:

```solidity
import {SimpleRouter} from "@mgv-strats/src/strategies/routers/SimpleRouter.sol";
```

Then, replace the `NO_ROUTER` with `new SimpleRouter()` in the constructor definition and insert the following to the constructor body:

```solidity
    router().bind(address(this));
    router().setAdmin(deployer);
```
Thus, the beginning of the tutorial should look like this:

```solidity
import {Direct} from "@mgv-strats/src/strategies/offer_maker/abstract/Direct.sol";
import {ILiquidityProvider} from "@mgv-strats/src/strategies/interfaces/ILiquidityProvider.sol";
import {IMangrove} from "@mgv/src/IMangrove.sol";
import {MgvLib, OLKey} from "@mgv/src/core/MgvLib.sol";
import {Tick} from "@mgv/lib/core/TickLib.sol";
import {SimpleRouter} from "@mgv-strats/src/strategies/routers/SimpleRouter.sol";
/// @title An example offer maker used in tutorials
contract OfferMakerTutorial is Direct, ILiquidityProvider {
  ///@notice Constructor
  ///@param mgv The core Mangrove contract
  ///@param deployer The address of the deployer
  constructor(IMangrove mgv, address deployer)
    // Pass on the reference to the core mangrove contract
    Direct(
      mgv,
      // Use a router - i.e., transfer tokens to and from deployer
      new SimpleRouter(),
      // Store total gas requirement of this strategy
      deployer
    )
  {
    router().bind(address(this));
    router().setAdmin(deployer);
  }
...
```
You can now redeploy the contract, activate it, and post an offer as before - remember to update the `$OFFER_MAKER` environment variable.
> Note: you can follow those steps in the [smart offer tutorial](../getting-started/smart-offer.md).


We will also need:
* To let the `OfferMakerTutorial` pull funds from the admin's reserve of WBTC.
* To make sure that the admin and/or taker have enough funds on their wallet (we can [mint](#mint) tokens if needed).

#### Getting tokens

If the admin (acting as a maker) does not have required WBTC tokens then the smart offer will fail when taken.
> Note: the offer **could still be posted** - a smart offer can source liquidity elsewhere on-chain.

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

#### Approving the contract to pull the funds

The router needs to be able to pull funds from the admin. First we need to get the address of the router:

```bash
cast call --rpc-url $LOCAL_URL "$OFFER_MAKER" "router()(address)"
```
Let's put it in an environment variable:

```bash
export ROUTER=<contract address> # 0xabcd..., the address of the router returned by the previous command
```

Finally, let's run the approval:

```bash
cast send --rpc-url $LOCAL_URL "$WBTC" "approve(address, uint)" "$ROUTER" 100000000 --private-key "$PRIVATE_KEY"
```


The `OfferMakerTutorial` now uses the approval of the `SimpleRouter` to transfer funds from the admin. If you wonder where the approval of the transfers from `OfferMakerTutorial` happens, then its the `activate` call. See [approvals](../guides/approvals.md) for more details on that topic.
