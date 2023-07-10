import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: "张金辉的博客",
  description: "张金辉的博客描述",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '页面1', link: '/page1' },
      { text: '页面2', link: '/page2' }
    ],

    sidebar: [
      {
        text: '页面1',
        items: [
          { text: 'API1', link: '/api1' },
          { text: 'Example1', link: '/example1' },
        ]
      },
      {
        text: '页面2',
        items: [
          { text: 'API2', link: '/api2' },
          { text: 'Example2', link: '/example2' },
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/jay6697117' }
    ]
  }
})
