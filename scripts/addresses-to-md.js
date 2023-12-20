const { writeFileSync } = require('fs');
const { getAllErc20s } = require('@mangrovedao/context-addresses');
const { getCoreContractsVersionDeployments, getStratsContractsVersionDeployments } = require('@mangrovedao/mangrove-deployments');

const chainNames = {
  1: "Ethereum Mainnet",
  5: "Goerli Testnet",
  137: "Polygon Mainnet",
  42161: "Arbitrum One",
  80001: "Polygon Testnet - Mumbai",
};

function contractsVersionDeploymentsToTable(contractsVersionDeployments) {
  // contract -> versionDeployments
  const contracts = {};

  const chainIds = new Set();
  for (const versionDeployments of contractsVersionDeployments) {
    contracts[versionDeployments.deploymentName ?? versionDeployments.contractName] = versionDeployments;
    for (const [chainId, addresses] of Object.entries(versionDeployments.networkAddresses)) {
      if (!chainNames[chainId]) {
        throw new Error(`Chain ID ${chainId} not found in chainNames`);
      }
      chainIds.add(chainId);
    }
  }

  let headerSeparator = "| --- | :---: ";
  let md = `| Contract | Version `;
  for (const chainId of chainIds) {
    md += `| ${chainNames[chainId]} `;
    headerSeparator += `| --- `;
  }
  md += `|\n`;
  md += headerSeparator + `|\n`;
  for (const [contractName, versionDeployments] of Object.entries(contracts)) {
    md += `| ${contractName} | ${versionDeployments.version} `;
    for (const chainId of chainIds) {
      const addresses = versionDeployments.networkAddresses[chainId];
      if (addresses) {
        md += `| \`${addresses.primaryAddress}\` `;
      } else {
        md += `| `;
      }
    }
    md += `|`;
    md += "\n";
  }

  return md;
}

const main = async () => {
  let md = "<!-- GENERATED DO NOT EDIT - see addresses-to-md.js -->";

  md += "\n\n## Core contract addresses\n\n";
  md += contractsVersionDeploymentsToTable(getCoreContractsVersionDeployments());

  md += "\n\n## Strats contract addresses\n\n";
  md += contractsVersionDeploymentsToTable(getStratsContractsVersionDeployments());

  md += "\n\n## Token addresses";

  // chain name -> [symbol -> [instanceId -> Erc20NetworkInstance]]
  const tokensPerNetwork = {};
  for (const [tokenId, erc20] of Object.entries(getAllErc20s())) {
    for (const [chainId, erc20Instances] of Object.entries(erc20.networkInstances)) {
      let tokens = tokensPerNetwork[chainNames[chainId]];
      if (!tokens) {
        tokensPerNetwork[chainNames[chainId]] = tokens = {};
      }
      let instances = tokens[erc20.symbol];
      if (!instances) {
        tokens[erc20.symbol] = instances = {};
      }

      for (const [instanceId, erc20Instance] of Object.entries(erc20Instances)) {
        instances[instanceId] = erc20Instance;
      }
    }
  }

  for (const chainName of Object.keys(tokensPerNetwork).sort()) {
    const tokens = tokensPerNetwork[chainName];
    md += `\n\n### ${chainName}\n\n`;

    md += `| Symbol | Mangrove ID | Address | Comment |\n`;
    md += `| --- | --- | --- | --- |\n`;
    for (const symbol of Object.keys(tokens).sort()) {
      const instances = tokens[symbol];
      let first = true;
      for (const instanceId of Object.keys(instances).sort()) {
        const erc20Instance = instances[instanceId];
        md += `| ${first ? symbol : ""} | \`${instanceId}\` | \`${erc20Instance.address}\` | ${erc20Instance.comment ?? ""} |\n`;
        first = false;
      }
    }
  }
  
  writeFileSync("docs/developers/contracts/technical-references/_contract-addresses-raw.md",md);

}

main().then(() => process.exit()).catch(e => { console.error(e); process.exit(1); });