module.exports = {
    title: '人强不需要马壮',
    description: '人强不需要马壮Blog',
    head: [
        ['link', { rel: 'icon', href: '/img/logo.ico' }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
    ],
    themeConfig: {
        nav: [
            { text: '主页', link: '/' },
            { text: '博文',
                items: [
                    { text: 'study', link: '/study/' },
                ]
            },
            { text: 'Github', link: 'https://www.github.com/wingkong1978' },
        ],
        sidebar: {
            '/study/': [
                "",
                "android1"
            ],
            "/ios/":[
                "",
                "ios1"
            ],
            "/web/":[
                "",
                "web1"
            ],
        },
        sidebarDepth: 2,
        lastUpdated: 'Last Updated',
    }

}
