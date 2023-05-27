import {defaultTheme, defineUserConfig} from 'vuepress'

export default defineUserConfig({
    lang: 'zh-CN',
    title: '"hello"',
    description: '这是我的第一个 VuePress 站点',

    theme: defaultTheme({
        home: '/',
        repo: 'chang144/chang144.github.io',
        repoLabel: '',
        lastUpdated: true,

        // 默认主题配置
        navbar: [
            { text: '首页', link: '/',},
            { text: '导航', link: '/guide/',},
            {   text: '计算机基础',
                children: [
                    {
                        text: '计网',
                        children: [
                            { text: 'http', link: '/basic/http/'}
                        ],
                    },
                    {
                        text: '数据库',
                        children: [
                            { text: 'mysql', link: '/basic/db/mysql',},
                            { text: 'redis', link: '/basic/db/redis',}
                        ],
                        // link: "/basic/db/"
                    },
                    {
                        text: '操作系统',
                        children:[

                        ],
                        // link: "/basic/linux/"
                    },
                ],
                link: '/basic/',
            },
            {
                text: '算法',
                children: [
                    {text: '数组', link: ''}
                ]
            },
            {
                text: "后端",
                children: [
                    {text: "Go", link: "/code/Golang/"},
                    {text: "Docker", link: "/code/Docker/"},
                ],
            },
            {
                text: '部署',
                children: [
                    {text: 'docker', link: '/'},
                    {text: 'k8s', link: '/'},
                ]
            }
        ],
        // 可折叠的侧边栏
        sidebar: {
            '/guide/': [
                {
                    text: 'Guide',
                    link: '/guide/',
                },
            ],
            '/code/': [
                {
                    text: 'Golang',
                    collapsible: true,
                    children: ['/code/Golang/go cli.md', '/code/Golang/Go Project Layout.md'],
                },
                {
                    text: 'Docker',
                    collapsible: true,
                    children: [
                        '/code/Docker/docker.md',
                        '/code/Docker/Dive into Dockerfile.md',
                        '/code/Docker/go docker部署.md'
                    ],
                },

            ],
        },
        // edit
        editLink: false,
        docsRepo: 'https://github.com/chang144/chang144.github.io',
        docsBranch: 'main',
        docsDir: 'docs',
        editLinkPattern: ':repo/edit/:branch/:path',
    }),
})


