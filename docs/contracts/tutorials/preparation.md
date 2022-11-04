# Preparation

The following should be installed on the machine where any of the tutorials are run:

- Nodejs v16+ [https://nodejs.org/en/](https://nodejs.org/en/)

The tutorials can then run in an isolated folder where you install the Mangrove API.

Open a terminal and run the following commands:

```bash
# Create a folder for the tutorial and enter it
mkdir tutorial
cd tutorial
# Initialize an npm package with the base dependencies installed
npm init -y
npm install --save dotenv
npm install --save @mangrovedao/mangrove.js
```

Inside the tutorial folder, create a `.env` file. This will hold the secrets such as private key and API keys.

The file should typically look as follows (with `<...>` replaced by proper values):

```bash
# .env
export PRIVATE_KEY=<private key>   # 0xabcd.... <- This is the private key you'll be using in the tutorial - a test key for the Polygon Mumbai network
export NODE_URL=<https://polygon-mumbai.g.alchemy.com/v2/API key> # alchemy or infura node url for Polugon Mumbai
```

Keep the terminal open, you’ll need it for your first tutorial.

The tutorials typically start by asking you to start `node`:

```bash
node
# Welcome to Node.js v16.16.0.
# Type ".help" for more information.
# >
```
