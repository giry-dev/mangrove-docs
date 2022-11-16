import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import 'solidity-docgen';
require("hardhat-preprocessor");
const fs = require("fs");

const getRemappings = () => {
  return fs
    .readFileSync("hardhat-remappings.txt", "utf8")
    .split("\n")
    .filter(Boolean) // remove empty lines
    .map((line) => line.trim().split("="));
};

export default {
  solidity: "0.8.14",
  docgen: {
    outputDir: 'docs/strat-lib/technical-references/code',
    exclude: [ 'preprocessing/structs.js', 'IMangrove.sol', 'MgvLib.sol', 'MgvRoot.sol', 'MgvHasOffers.sol', 'MgvOfferMaking.sol', 'MgvOfferTaking.sol', 'MgvOfferTakingWithPermit.sol', 'MgvGovernable.sol', 'AbstractMangrove.sol', 'Mangrove.sol', 'InvertedMangrove.sol'],
    templates: './templates',
    pages: 'files',
  }, 
  preprocess: {
    eachLine: (hre) => ({
      transform: (line) => {
        if (line.match(/^\s*import /i)) {
          getRemappings().forEach(([find, replace]) => {
            if (line.match(find)) {
              line = line.replace(find, replace);
            }
          });
        }
        return line;
      },
      settings: { do_not_recompile: true },
    }),
  },
};

