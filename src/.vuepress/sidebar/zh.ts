import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/zh/": [
    {
      text: "OLAP 性能优化指南",
      icon: "note",
      prefix: "guide/",
      children: "structure",
    },
  ],
});
