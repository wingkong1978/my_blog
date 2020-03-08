module.exports = {
    head: [
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
    ],
    // 网站 Title
    title: '人强不需要马壮',

    // 网站描述
    description: '奋发图强，壮大自己',

    // 网站语言
    locales: {
        '/': {
            lang: 'zh-CN',
        },
    },
    theme: 'reco',
    themeConfig:{


        author: 'wingkong',
        startYear: '2019',
    blogConfig: {
        category: {
            location: 2,     // 在导航栏菜单中所占的位置，默认2
            text: 'Category' // 默认文案 “分类”
        },
        tag: {
            location: 3,     // 在导航栏菜单中所占的位置，默认3
            text: 'Tag'      // 默认文案 “标签”
        }
    },
        nav: [
            { text: 'Home', link: '/', icon: 'reco-home' },
            { text: 'TimeLine', link: '/timeLine/', icon: 'reco-date' },
            { text: 'GitHub', link: 'https://github.com/wingkong1978', icon: 'reco-github' },
        ],
        type: 'blog'
    },
    plugins: ['@vuepress/last-updated']

}
