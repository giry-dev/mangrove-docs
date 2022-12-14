---
sidebar_position: 6
---

# How to deploy your contract

After you have created and tested your contract, you might want to deploy it on chain. Deploying a contract is easy with the use of [Foundry](https://book.getfoundry.sh/) and a helper from our Deployer contract.

We start by creating a contract that inherits from Deployer, when creating your script, remember to use the naming convention, `<name>.s.sol`, this way Foundry knows it is a script file. The Deployer contract is meant as an ease of life the user, when they want to deploy a contract. It keeps track of what chain you want to deploy on and saving the addresses for the deployed contracts. 

For this guide we will not go into to much detail, the important part is that Deployer keeps track of the chain you want to deploy on. In this example we are going to deploy the contract Amplifier, that we created in the [How to create a Direct contract](./DirectHowTo.md).

When creating a script you always need a `run()` function, this is the function that Foundry is going to call when running the script. In this script we need to know who the admin of the contract is. Since you never want to write address directly in your code/script, we use [dotenv](https://www.npmjs.com/package/dotenv), to hide secrets in a `.env` file. This way we can use the Foundry cheatcode `envAddress(<name>)` to access the secret addresses we need. In this case the admin address is a public address, so we could write it directly in the code, but if you want to deploy the script again with a different address, it is better to keep the address in a different file. Next we get the addresses for WETH, USDC and DAI, we get the addresses by using `fork.get(<name>)`, this only works because we have a json file with addresses for these tokens `polygon.json` and we know we are going to deploy on a polygon chain. If you want to deploy to a different chain, you would have to have a similar json file with the addresses for that chain.

```solidity
// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Script, console} from "forge-std/Script.sol";
import {Amplifier, AbstractRouter, IERC20, IMangrove} from "mgv_src/toy_strategies/offer_maker/Amplifier.sol";
import {Deployer} from "./lib/Deployer.sol";

/*  Deploys a Amplifier instance
    First test:
 ADMIN=$MUMBAI_PUBLIC_KEY forge script --fork-url mumbai AmplifierDeployer -vvv
    Then broadcast and verify:
 ADMIN=$MUMBAI_PUBLIC_KEY WRITE_DEPLOY=true forge script --fork-url mumbai AmplifierDeployer -vvv --broadcast --verify
    Remember to activate it using Activate
*/
contract AmplifierDeployer is Deployer {
  function run() public {
    innerRun({
      admin: vm.envAddress("ADMIN"),
      base: fork.get("WETH"),
      stable1: fork.get("USDC"),
      stable2: fork.get("DAI")
    });
  }
...
```

Next we create an `innerRun` function, that does the actual deployment. We get the current Mangrove instance on chain, again by using `fork.get()`. When you deploy a new contract it is always good to consider that you maybe already have a instance of the contract deployed. In this case we would like to see if we have an address for "Amplifier" saved already and if so we would like to withdraw everything from Mangrove and retract all offers. This way we know that Amplifier no longer has any funds or offers and we can just leave it. The reason we do `try fork.get("Amplifier")` is that, if it can't find any address for Amplifier, then it will throw an exception. When writing your deployment script using Foundry, there is one command that is essential, which is `broadcast()`. Everything done in the script is just simulation, expect if you use broadcast right before a call, then that specific call is broadcasted to the actual chain. This way you can do many calls, to e.g. figure out the admin of a contract, without you actually having to use any gas on it. And only broadcast the actual thing you want done on chain.

The broadcast used here is actually a helper function that our Deployer contract has. What it does, is it goes out to find your `.env` and looks for a private key with the lookup value of `<nameOfChain>_PRIVATE_KEY`, e.g. if you want to deploy on Mumbai, it looks for a value called `MUMBAI_PRIVATE_KEY`. This is the private key of the address you would like to use for the broadcast. This means that you need this key in your `.env` in order to be able to actually deploy the contract.

As explained we want to withdraw from Mangrove if the Amplifier contract has any free native tokens on Mangrove. We first check by using `mgv.balanceOf(<address>)`, notice that we don't use the command broadcast before this call, since we don't want to actually do it on chain. If the balance is positive, the we try to withdraw the funds from Mangrove, notice we use broadcast, because we want this called to be on chain. Be aware that when withdrawing from Mangrove using amplifier, then it has to be the admin of the contract that preforms the call. This means, that in this case, the address in the `.env` file has to be the admin of the Amplifier contract, otherwise this will not be allowed. After having withdrawn the free tokens form Mangrove, we now retract the offers and deprovisioning them, this returns any provision left on the offers, back to the admin. We do some console logging to check the balances of the admin contract after doing all this. This way it is easy to see if the expected amounts was withdrawn. All this could have been put in its own function, that handles closing a Amplifier contract.

```solidity
...
  /**
   * @param admin address of the admin on Amplifier after deployment
   * @param base address of the base on Amplifier after deployment
   * @param stable1 address of the first stable coin on Amplifier after deployment
   * @param stable2 address of the second stable coin on Amplifier after deployment
   */
  function innerRun(address admin, address base, address stable1, address stable2) public {
    IMangrove mgv = IMangrove(fork.get("Mangrove"));

    try fork.get("Amplifier") returns (address payable old_amplifier_address) {
      Amplifier old_amplifier = Amplifier(old_amplifier_address);
      uint bal = mgv.balanceOf(old_amplifier_address);
      if (bal > 0) {
        broadcast();
        old_amplifier.withdrawFromMangrove(bal, payable(admin));
      }
      uint old_balance = old_amplifier.admin().balance;
      broadcast();
      old_amplifier.retractOffers(true);
      uint new_balance = old_amplifier.admin().balance;
      console.log("Retrieved ", new_balance - old_balance + bal, "WEIs from old deployment", address(old_amplifier));
    } catch {
      console.log("No existing Amplifier in ToyENS");
    }
...
```

After having closed down the old Amplifier contract, we now what to deploy a new one. This is very easy, we again use broadcast, when we create the Amplifier contract and the Amplifier contract is now deployed. After having deployed your contract, you should always think about if there are extra things need, in order to make the contract work. I our case there are multiple things we would like to do after deployment. First we save the new address for the Amplifier contract using `fork.set(<address>)`. We then do a simple smoke test, to se if Amplifier is actually deployed, we just try to see if Mangrove matches the one we used to deploy it.

Next we do `outputDeployment()`, this is a helper function created by the Deployer contract. This is meant as a simple way to update the json file, containing the addresses. If the flag `WRITE_DEPLOY` is set to true, the default value is false, it writes a new addresses.json file in the deployment folder. You can set the flag in the `.env` or when you run the script.

After having saved all the new addresses, we then need to activate the Amplifier contract, so that it is able to trade on the tokens we use to created it. We create an array with the 3 tokens and call activate on the Amplifier contract. This is again done with broadcast. The last thing we need is, as admin, to approve the %%router|router%% of Amplifier to use the base token. Be aware that we get the router before doing the broadcast, this is because, if you inline it like this `IERC20(base).approve(address(amplifier.router()), type(uint).max)`, where we both approve and get the router on the same line, then it would be the call that gets the router, that gets broadcasted. Since it is only the first call after broadcast that will get broadcasted.

Everything is now approve correctly and we check that by calling the checklist function on Amplifier. Notice we use `prank`, because we want to call the function, as if we were calling from the amplifier contract. We don't use broadcast here, because we do not need the call to be on chain. Had we done the call without `prank` or `broadcast` we would be calling as the `this` which is the script contract, the checklist we then check if the script had the right approvals, but that is not what we wanted to check.

```solidity
...
    console.log("Deploying Amplifier...");
    broadcast();
    Amplifier amplifier = new Amplifier(mgv, IERC20(base), IERC20(stable1), IERC20(stable2), admin );
    fork.set("Amplifier", address(amplifier));
    require(amplifier.MGV() == mgv, "Smoke test failed.");
    outputDeployment();
    console.log("Deployed!", address(amplifier));
    console.log("Activating Amplifier");
    IERC20[] memory tokens = new IERC20[](3);
    tokens[0] = IERC20(base);
    tokens[1] = IERC20(stable1);
    tokens[2] = IERC20(stable2);
    broadcast();
    amplifier.activate(tokens);
    AbstractRouter router = amplifier.router();
    broadcast();
    IERC20(base).approve(address(router), type(uint).max);
    IERC20[] memory tokens2 = new IERC20[](1);
    tokens2[0] = IERC20(base);
    vm.prank(amplifier.admin());
    amplifier.checkList(tokens2);
  }
```

The full version of the deployer contract can be found [here](https://github.com/mangrovedao/mangrove-core/blob/89b38bc46a3783ce06072cca744650a77efcb048/script/toy/AmplifierDeployer.s.sol).

The deployment script is now ready, so lets try and deploy it to a local fork of mumbai. The first thing you need to do, is to start an anvil node, running on a fork of mumbai. This can be done like this `anvil --port 8545 --fork-url $MUMBAI_NODE_URL --silent`. Notice at the `MUMBAI_NODE_URL` is fetch of the `.env`file. If you don't have URL, polygon offers one [here](https://wiki.polygon.technology/docs/develop/network-details/network/). When running this the `.env` file might not have been sourced, so you might need to run `source .env`in order for it to find the `MUMBAI_NODE_URL`. The silent flag is not necessary, it is simply a way of starting the node without writing the setup for the fork. This can include secrets that you may not want to share.

When your anvil node is up and running, we can now do the actual deployment. Now at first want to try a deploy Amplifier without broadcasting it, this way we can test if it works. This is done my running this in a different terminal, than where the anvil is running. `ADMIN=$MUMBAI_PUBLIC_KEY forge script --fork-url http://127.0.0.1:8545 AmplifierDeployer -vvv` (Remember that you might have to source your `.env` again in the new terminal). The first thing we do is setting the ADMIN to be the `MUMBAI_PUBLIC_KEY` that you wrote in your `.env` file. This will be the address that the Amplifier contract will be deployed with. Next we say that we are using a fork url, that is a localhost of http://127.0.0.1:8545. We then write the name of our script and choose to use the verbosity level of `-vvv`. When running this you should see, in the terminal that runs the anvil node, a bunch of view functions being called, like `eth_xxxxx`, but no actual transactions.

If the script successfully ran, then you know that your script works. Not that you know that your script works, we run it again, but this time with the flag `--broadcast`, `ADMIN=$MUMBAI_PUBLIC_KEY forge script --fork-url http://127.0.0.1:8545 AmplifierDeployer -vvv --broadcast`. This runs the script again, but this time it actually broadcast the transactions you wanted. In the anvil terminal, you will again see the many view functions, but there should now also be actual transactions.

Your contract is now deployed on the chain you specified. In this case we used a local fork of mumbai, but you can easily do the same on a live chain.
