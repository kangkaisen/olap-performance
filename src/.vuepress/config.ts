import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  head: [[
    'script', {}, `
        var _hmt = _hmt || [];
        (function() {
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?1d198a377ef466190881d1c021155925";
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(hm, s);
        })();
})();
    `
  ]],

  locales: {
    "/": {
      lang: "zh-CN",
      title: "OLAP 性能优化指南",
      description: "OLAP 性能优化指南",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
