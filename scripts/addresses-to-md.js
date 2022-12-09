const fs = require('fs');

const relevantERC20 = [ "WETH", "DAI", "USDC", "PxMATIC", "PxUSDC" ];

const networks = [
  //{ id: "matic", name: "Polygon Mainnet" },
  { id: "maticmum", name: "Polygon Testnet - Mumbai" },
];

const main = async () => {
  let md = "<!-- GENERATED DO NOT EDIT - see addresses-to-md.js -->";

  networks.forEach(network => {
    const deployed = require(`@mangrovedao/mangrove-core/addresses/deployed/${network.id}.json`);
    const context = require(`@mangrovedao/mangrove-core/addresses/context/${network.id}.json`);

    let mdDeployed = `\n## ${network.name}\n\n`;
    
    deployed.filter(x => !relevantERC20.includes(x.name)).forEach(nameAndAddress => {
      mdDeployed = `${mdDeployed}### ${nameAndAddress.name}\n\n\`\`\`txt\n${nameAndAddress.address}\n\`\`\`\n\n`;
    });

    let mdERC20 = `### ERC20 addresses\n\n`;
    context.concat(deployed).filter(x => relevantERC20.includes(x.name)).forEach(nameAndAddress => {
      mdERC20 = `${mdERC20}* ${nameAndAddress.name}: \`${nameAndAddress.address}\`\n`;
    });
    md = md + mdDeployed + mdERC20;
  });

  fs.writeFileSync("docs/contracts/technical-references/_contract-addresses-raw.md",md);

}

main().then(() => process.exit()).catch(e => { console.error(e); process.exit(1); });