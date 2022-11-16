const fs = require('fs');

const relevantERC20 = [ "WETH", "DAI", "USDC" ];

const networks = [
  { id: "maticmum", name: "Polygon Testnet - Mumbai" },
//  { id: "polygon", name: "Polygon Mainnet" },
];

const main = async () => {
  let md = "<!-- GENERATED DO NOT EDIT - see addresses-to-md.js -->\n";

  networks.forEach(network => {
    const deployed = require(`@mangrovedao/mangrove-core/addresses/deployed/${network.id}.json`);
    const context = require(`@mangrovedao/mangrove-core/addresses/context/${network.id}.json`);

    let mdDeployed = `## ${network.name}\n\n`;
    
    deployed.forEach(nameAndAddress => {
      mdDeployed = `${mdDeployed}### ${nameAndAddress.name}\n\n\`\`\`txt\n${nameAndAddress.address}\n\`\`\`\n\n`;
    });

    let mdERC20 = `### ERC20 addresses\n\n`;
    context.filter(x => relevantERC20.includes(x.name)) .forEach(nameAndAddress => {
      mdERC20 = `${mdERC20}* ${nameAndAddress.name}: \`${nameAndAddress.address}\`\n`;
    });

    md = md + mdDeployed + mdERC20;
  });

  fs.writeFileSync("docs/contracts/technical-references/_contract-addresses-raw.md",md);

}

main().then(() => process.exit()).catch(e => { console.error(e); process.exit(1); });