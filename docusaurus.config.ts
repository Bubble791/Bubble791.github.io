import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: '改版资料库',
  tagline: '耿耿耿耿鬼酱的改版笔记',
  favicon: 'img/icon.ico',

  // Set the production url of your site here
  url: 'https://bubble791.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Bubble791', // Usually your GitHub org/user name.
  projectName: 'Bubble791.github.io', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  themes: ['@docusaurus/theme-mermaid'],
  markdown: {
    mermaid: true,
  },
  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Pokémon Hacking',
      logo: {
        alt: 'My Site Logo',
        src: 'img/test.svg',
      },
      items: [
        // 语言切换
        // {
        //   type: "localeDropdown",
        //   position: "left",
        // },
        {
          type: 'docSidebar',
          sidebarId: 'gbaTutor',
          position: 'left',
          label: 'GBA资料',
        },
        {
          type: 'docSidebar',
          sidebarId: 'ndsTutor',
          position: 'left',
          label: 'NDS资料',
        },
        {
          href: 'https://github.com/Bubble791/Bubble791.github.io',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '个人链接',
          items: [
            {
              label: 'B站',
              href: 'https://space.bilibili.com/21569445',
            },
          ],
        },
        {
          title: '友情链接',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: '更多',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/Bubble791/Bubble791.github.io',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} 耿耿耿耿鬼酱, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['diff', 'json'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
