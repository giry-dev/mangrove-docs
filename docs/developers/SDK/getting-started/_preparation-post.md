## Environment

Inside the tutorial folder, create a `.env` file. This will hold the secrets such as private key and API keys. Here we describe it in general, but the next section provides some working example values.

The file should typically look as follows (with `<...>` replaced by proper values) - for instance you need a RPC URL from, e.g., [Infura](https://infura.io/) or [Alchemy](https://www.alchemy.com/), and an EOA with a private key. Note, there are other ways to provide secrets, but this is what we do in the tutorials.

If you do not have a RPC URL, there exists free RPC URLs, some examples can be found here: [ChainList](https://chainlist.org/) - note that they can be unstable and in that case we recommend creating your own through the listed providers.

```bash
# .env
export PRIVATE_KEY=<private key>   # 0xabcd.... <- This is the private key you'll be using in the tutorial - a test key for the Polygon Mumbai network
export ADMIN_ADDRESS=<EOA> # 0xabcd...
export RPC_URL=<https://polygon-mumbai.g.alchemy.com/v2/API key> # alchemy or infura node url for Polygon Mumbai
export LOCAL_URL=http://127.0.0.1:8545 # Url for the local chain that anvil starts (see next section)
```

## Local chain

The tutorials can be run directly on networks where Mangrove is deployed (see [Addresses](../../protocol/technical-references/contract-addresses.md)). However on a real network you will spend real tokens, so we recommend starting on test networks with a test account.

To further speed things up we run tutorials on a local fork of a chain using Foundry's `anvil` tool.

```bash title="How to fork an existing chain"
source .env
anvil --fork-url $RPC_URL
```

This starts a new chain on with a local url of `http://127.0.0.1:8545`. You can read more about the `anvil` command [here](https://book.getfoundry.sh/reference/anvil/), if you are interested.

When `anvil` starts up, it creates 10 test accounts, with some native tokens. If you do not have a real account on the chain, you can always use these accounts. Here is an example of a `.env` file that uses the first anvil account, a demo RPC URL and with a LOCAL URL.

:::tip
The demo RPC URLs are unstable, so if you cannot connect then create your own or use a different one.
:::

``` bash title=".env file"
export PRIVATE_KEY=0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80 # The first anvil private key
export ADMIN_ADDRESS=0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266 # The matching public key, to the first anvil private key
export RPC_URL=https://polygon-mumbai.blockpi.network/v1/rpc/public # Public RPC provided by Block Pi
export LOCAL_URL=http://127.0.0.1:8545 # Url for the local chan that anvil starts
```
