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

  plugins: [
    '@docusaurus-terminology/parser',
    require.resolve('docusaurus-lunr-search'),
    '@vegaprotocol/docusaurus-theme-github-codeblock',
    
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
          sidebarPath: require.resolve('./sidebars.js'),
          remarkPlugins: [simplePlantUML, math],
          rehypePlugins: [katex],
        },
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
            to: '/docs/contracts',
            position: 'left',
            label: 'Contracts',
          },
          {
            to: '/docs/SDK',
            position: 'left',
            label: 'SDK',
          },
          {
            to: '/docs/keeper-bots',
            position: 'left',
            label: 'Keeper bots',
          },
          {
            href: '/docs/glossary',
            label: 'Glossary',
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
                to: '/docs/contracts',
              },
              {
                label: 'SDK',
                to: '/docs/SDK',
              },
              {
                label: 'Bots',
                to: '/docs/keeper-bots',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Telegram',
                href: 'https://t.me/MangroveDAO',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/fuSuPC2G',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/mangrovedao',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/mangrovedao',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ADDMA. All rights reserved.`,
      },
      
    }),
};

module.exports = config;
