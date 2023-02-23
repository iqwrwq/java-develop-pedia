// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Java-Develop-Pedia',
    tagline: 'The place for Java Developers',
    favicon: 'img/favicon.ico',

    // Set the production url of your site here
    url: 'https://java-develop-pedia.vercel.app',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'iqwrwq', // Usually your GitHub org/user name.
    projectName: 'java-develop-pedia', // Usually your repo name.

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/iqwrwq/java-develop-pedia',
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/iqwrwq/java-develop-pedia',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // Replace with your project's social card
            image: 'img/logo.png',
            navbar: {
                title: 'Java-Develop-Pedia',
                logo: {
                    alt: 'Java-Develop-Pedia',
                    src: 'img/logo.png',
                    srcDark: 'img/logoDark.png',
                    width: 40,
                    height: 40,
                },
                items: [
                    {to: '/roadmap', label: 'Roadmap', position: 'left'},
                    {to: '/awesome', label: 'Awesome', position: 'left'},
                    {
                        href: 'https://github.com/iqwrwq/java-develop-pedia',
                        label: 'GitHub',
                        position: 'right',
                    },
                ],
            },
            colorMode: {
                defaultMode: 'dark',
                disableSwitch: false,
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: 'Developer Wiki',
                        items: [
                            {
                                label: 'Roadmap',
                                to: '/roadmap',
                            },
                            {
                                label: 'Awesome List',
                                to: '/awesome',
                            },
                            {
                                label: 'Interactive Roadmap (UPCOMING)',
                                to: '/roadmap',
                            },
                            {
                                label: 'Bucket List (UPCOMING)',
                                to: '/',
                            },
                        ],
                    },
                    {
                        title: 'Source',
                        items: [
                            {
                                label: 'java-developer-roadmap',
                                href: 'https://github.com/s4kibs4mi/java-developer-roadmap',
                            },
                            {
                                label: 'awesome-java',
                                href: 'https://github.com/akullpp/awesome-java',
                            },
                        ],
                    },
                    {
                        title: 'More from me',
                        items: [
                            {
                                label: 'iqwrwq GitHub',
                                href: 'https://github.com/iqwrwq',
                            },
                        ],
                    },
                ],
            },
            prism: {
                darkTheme: darkCodeTheme,
                theme: lightCodeTheme,
            },
        }),
};

module.exports = config;
