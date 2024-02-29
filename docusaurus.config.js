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
  url: 'https://app.mangrove.exchange',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  favicon: 'img/assets/mangrove_avatar_brightgreen.png',

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
      "termsUrl": "/developers/terms/",
      "termsDir": "./docs/developers/terms/",
      glossaryFilepath: './docs/developers/glossary.md'
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
        "out": "developers/SDK/technical-references/code",
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
      image: 'img/assets/mangrove_avatar_brightgreen.png',
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
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
          src: 'img/assets/mangrove_only_logo_dark.png',
          srcDark: 'img/assets/mangrove_only_logo_white.png',
          href: '/',
          target: '_self',
        },
        items: [
          {
            to: '/general/table-content',
            position: 'right',
            label: 'General',
          },
          {
            to: '/developers',
            position: 'right',
            label: 'Developers',
          },
        ],
      },      
    }),
};

module.exports = config;
