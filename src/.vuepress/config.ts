import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "OLAP 性能优化指南",
      description: "OLAP 性能优化指南",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "文档演示",
      description: "vuepress-theme-hope 的文档演示",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
