import { defineConfig } from "vitepress";
import {
  containerPreview,
  componentPreview,
} from "@vitepress-demo-preview/plugin";
export default defineConfig({
  head: [["link", { rel: "icon", href: "/logo.svg" }]],
  title: "c-ui",
  description: "A VitePress Site",
  lastUpdated: true,
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/components/button" },
    ],

    sidebar: {
      "/guide/": [
        {
          text: "基础",
          items: [
            { text: "安装", link: "/guide/install" },
            { text: "快速开始", link: "/guide/quickstart" },
          ],
        },
      ],
      "/components/": [
        {
          text: "基础组件",
          items: [
            { text: "Button 按钮", link: "/components/button" },
            { text: "Icon 图标", link: "/components/icon" },
          ],
        },
        {
          text: "数据展示",
          items: [
            { text: "Tree树形控件", link: "/components/tree" },
            { text: "Icon 图标", link: "/components/icon" },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/Goodeve0/cc-ui" },
    ],
  },
  markdown: {
    config(md) {
      md.use(containerPreview);
      md.use(componentPreview);
    },
  },
});
