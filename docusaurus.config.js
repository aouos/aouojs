// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const config = {
  title: 'AouoJS',
  tagline: 'Dinosaurs are cool',
  url: 'https://aouos.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.png',
  organizationName: 'aouocode',
  projectName: 'aouocode',

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/aouos/aouojs/blob/main',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/aouos/aouojs/tree/main',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    // announcementBar: {
    //   id: 'announcementBar-2',
    //   content: ``,
    // },
    navbar: {
      title: 'AouoJS',
      logo: {
        alt: 'aouocode javascript',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'right',
          label: 'Notes',
        },
        { to: '/blog', label: 'Blog', position: 'right' },
        {
          href: 'https://github.com/aouos/aouojs',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    footer: {
      links: [
        {
          title: 'Works',
          items: [
            {
              label: 'What to eat',
              to: 'https://aouos.cn/',
            },
            {
              label: 'Animation Algorithm',
              to: 'https://aouos.com/animation-algorithm/',
            },
          ],
        },
        {
          title: 'GitHub',
          items: [
            {
              label: 'LeetCode',
              to: 'https://github.com/aouos/leetcode',
            },
            {
              label: 'Code Server',
              to: 'https://github.com/aouos/code-server',
            },
          ],
        },
        {
          title: 'Others',
          items: [
            {
              label: 'Xmind Notes',
              to: 'https://github.com/aouos/xmind-notes',
            },
          ],
        },
        {
          title: 'About',
          items: [
            {
              label: 'About me',
              to: '/about',
            },
            {
              label: 'GitHub',
              to: 'https://github.com/aouos',
            },
            {
              label: 'Twitter',
              to: 'https://twitter.com/AouoCode',
            },
          ],
        },
      ],
      copyright: `Copyright © 2020 - ${new Date().getFullYear()} AouoCode. Built with Docusaurus.`,
    },
    colorMode: {
      defaultMode: 'dark',
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
};

module.exports = config;
