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
  solidity: "0.8.20",
  docgen: {
    outputDir: 'docs/developers/strat-lib/technical-references/code',
    exclude: [ 'core/', 'strats/src/toy_strategies/', 'strats/src/strategies/interfaces/ITesterContract.sol', 'strats/src/strategies/offer_forwarder/ForwarderTester.sol', 'strats/src/strategies/offer_maker/DirectTester.sol'],
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

