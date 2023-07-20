import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: '张金辉的博客',
  description: '张金辉的博客描述',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '页面1', link: '/page1/' },
      { text: '页面2', link: '/page2/' }
    ],

    sidebar: {
      '/page1/': [
        {
          text: '页面1',
          collapsed: false,
          items: [
            { text: '页面1导航', link: '/page1/' },
            { text: 'API1', link: '/page1/api1' },
            { text: 'Example1', link: '/page1/example1' }
          ]
        }
      ],
      '/page2/': [
        {
          text: '页面2',
          collapsed: false,
          items: [
            { text: '页面2导航', link: '/page2/' },
            { text: 'API2', link: '/page2/api2' },
            { text: 'Example2', link: '/page2/example2' }
          ]
        }
      ]
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/jay6697117' }]
  }
})
