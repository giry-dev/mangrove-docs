# Mangrove developer documentation 

This repo holds developer documentation for Mangrove - both for interacting directly with the core contracts and for using the strat library in [mangrove-core](https://github.com/mangrovedao/mangrove-core), and for using the SDK or bots in [mangrove-ts](https://github.com/mangrovedao/mangrove-ts). 

The published version is available at https://docs.mangrove.exchange. 

## Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```console
$ yarn
```

### Local Development

```console
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```console
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```console
$ USE_SSH=true yarn deploy
```

Not using SSH:

```console
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
