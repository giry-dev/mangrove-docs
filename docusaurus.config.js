// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const simplePlantUML = require("@akebifiky/remark-simple-plantuml");
const math = require('remark-math');
const katex = require('rehype-katex');

/** @type {import('@docusaurus/types').Config} */
const config = {
  
  title: 'Mangrove',
  tagline: 'Developer documentation for all things Mangrove',
  url: 'https://testnet.mangrove.exchange',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/assets/mangrove_logo.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Mangrove', // Usually your GitHub org/user name.
  projectName: 'Mangrove', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
  plugins: [
    ['@docusaurus-terminology/parser',
    {
      "termsUrl": "/terms/",
      "termsDir": "./docs/terms/"
    }
    ],
    require.resolve('docusaurus-lunr-search'),
    '@vegaprotocol/docusaurus-theme-github-codeblock',
    [
      'docusaurus-plugin-typedoc',

      // Plugin / TypeDoc options
      {
        "entryPoints": ["node_modules/@mangrovedao/mangrove.js/src/index.ts"],
        "tsconfig": "node_modules/@mangrovedao/mangrove.js/tsconfig.json",
        "out": "SDK/technical-references/code",
        "cleanOutputDir": true,
        "excludePrivate": true,
        "excludeInternal": true,
        "sort": "source-order",
        "exclude": ["**/ethers.*","**/typechain/**.*"],
        "namedAnchors": true,
        sidebar: {
          categoryLabel: 'API Reference',
          position: 999,
          fullNames: true,
        },
      },
    ],
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 70,
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 6, // the max number of images generated between min and max (inclusive)
        disableInDev: false,
      },
    ],
    
  ],
  staticDirectories: ['static'],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          remarkPlugins: [simplePlantUML, math],
          rehypePlugins: [katex],
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    ({
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      prism: {
        additionalLanguages: ['solidity'],
      },
      navbar: {
        title: 'Mangrove Docs',
        logo: {
          alt: 'Mangrove logo',
          src: 'img/assets/mangrove_logo.png',
        },
        items: [
          {
            to: '/contracts',
            position: 'left',
            label: 'Contracts',
          },
          {
            to: '/strat-lib',
            position: 'left',
            label: 'Strat Lib',
          },
          {
            to: '/SDK',
            position: 'left',
            label: 'SDK',
          },
          {
            to: '/keeper-bots',
            position: 'left',
            label: 'Keeper Bots',
          },
          {
            to: '/FAQ',
            position: 'left',
            label: 'FAQ',
          },
          {
            href: '/glossary',
            label: 'Glossary',
            position: 'left',
          },
          {
            href: 'https://bafybeig62o75bfxssic66w2zwerbo6ezlhb33vsg5idr4uprckn2dxrucy.ipfs.infura-ipfs.io/',
            label: 'White Paper',
            position: 'right',
          },
          {
            href: 'https://github.com/mangrovedao',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Contracts',
                to: '/contracts',
              },
              {
                label: 'Strat Library',
                to: '/strat-lib'
              },
              {
                label: 'SDK',
                to: '/SDK',
              },
              {
                label: 'Keeper Bots',
                to: '/keeper-bots',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/rk9Qthz5YE'
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/MangroveDAO'
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/mangrovedao/'
              }          
            ],
          },
          {
            title: 'GitHub',
            items: [
              {
                label: 'Contracts and Strat Lib',
                href: 'https://github.com/mangrovedao/mangrove-core'
              },
              {
                label: 'SDK and Bots',
                href: 'https://github.com/mangrovedao/mangrove-ts'
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'White Paper',
                href: 'https://bafybeig62o75bfxssic66w2zwerbo6ezlhb33vsg5idr4uprckn2dxrucy.ipfs.infura-ipfs.io/'
              },              
              {
                label: 'Blog',
                href: 'https://blog.mangrove.exchange/'
              },
              {
                label: 'Home',
                href: 'https://mangrove.exchange'
              }
            ]
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ADDMA. All rights reserved.`,
      },
      
    }),
};

module.exports = config;
