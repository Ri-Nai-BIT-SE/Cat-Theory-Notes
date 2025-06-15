import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "毛概笔记",
  description: "毛泽东思想与中国特色社会主义理论体系概论学习笔记",
  srcDir: './docs',
  base: '/Cat-Theory-Notes/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    editLink: {
      pattern: 'https://github.com/Ri-Nai-BIT-SE/Cat-Theory-Notes/edit/main/docs/:path',
      text: '在GitHub上编辑此页面'
    },
    nav: [
      { text: '首页', link: '/' },
      { text: '笔记', link: '/chapters/01-导论' },
      { text: '试卷', link: '/papers/' },
      { text: '关于', link: '/about' },
    ],
    outline: [1, 5],
    sidebar: [
      {
        text: '毛概笔记',
        items: [
          { text: '首页', link: '/' },
          { text: '关于', link: '/about' },
        ]
      },
      {
        text: '学习内容',
        items: [
          { text: '第一章：导论', link: '/chapters/01-导论' },
          { text: '第二章：毛泽东思想', link: '/chapters/02-毛泽东思想' },
          { text: '第三章：中国特色社会主义理论体系', link: '/chapters/03-中国特色社会主义理论体系' },
          { text: '第四章：邓小平理论', link: '/chapters/04-邓小平理论' },
          { text: '第五章：三个代表重要思想', link: '/chapters/05-三个代表重要思想' },
          { text: '第六章：科学发展观', link: '/chapters/06-科学发展观' },
        ]
      },
      {
        text: '历年试卷',
        items: [
          { text: '试卷总览', link: '/papers/' },
          { text: '2024年试卷', link: '/papers/2024' },
          { text: '2023年试卷', link: '/papers/2023' },
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Ri-Nai-BIT-SE/Cat-Theory-Notes' }
    ],
    footer: {
      message: '基于 MIT 许可证发布',
      copyright: 'Copyright © 2024 毛概笔记'
    },
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭'
                }
              }
            }
          }
        }
      }
    }
  },
  markdown: {
    math: true,
  },
  locales: {
    zh: {
      label: '中文',
      lang: 'zh-CN',
      title: '毛概笔记',
      description: '毛泽东思想与中国特色社会主义理论体系概论学习笔记'
    }
  }
})
