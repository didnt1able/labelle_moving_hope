// src/.vuepress/config.ts
import { defineUserConfig } from "vuepress";

// src/.vuepress/theme.ts
import { hopeTheme } from "vuepress-theme-hope";

// src/.vuepress/sidebar.ts
import { sidebar } from "vuepress-theme-hope";
var sidebar_default = sidebar({
  "/": [
    ""
    // {
    //   text: "Demo",
    //   icon: "laptop-code",
    //   prefix: "demo/",
    //   link: "demo/",
    //   children: "structure",
    // },
    // {
    //   text: "Docs",
    //   icon: "book",
    //   prefix: "guide/",
    //   children: "structure",
    // },
    // {
    //   text: "Slides",
    //   icon: "person-chalkboard",
    //   link: "https://plugin-md-enhance.vuejs.press/guide/content/revealjs/demo.html",
    // },
  ]
});

// src/.vuepress/theme.ts
var theme_default = hopeTheme({
  hostname: "https://labellemoving.com",
  author: {
    name: "Mr.Hope",
    url: "https://mister-hope.com"
  },
  iconAssets: "fontawesome-with-brands",
  logo: "/assets/image/truck01.svg",
  repo: "vuepress-theme-hope/vuepress-theme-hope",
  repoDisplay: false,
  docsDir: "src",
  sidebar: sidebar_default,
  // navbar
  navbar: [
    {
      text: "Get a Quote Now!",
      link: "/booking.md",
      icon: "book"
      // only active in `/guide/`
    },
    {
      text: "Prices",
      link: "/prices.md",
      icon: "dollar"
      // only active in `/guide/`
    }
  ],
  favicon: "/assets/icon/favicon.ico",
  footer: "Default footer",
  displayFooter: true,
  //encrypt: {
  //  config: {
  //    "/demo/encrypt.html": ["1234"],
  //  },
  //},
  //metaLocales: {
  //  editLink: "Edit this page on GitHub",
  //},
  plugins: {
    // You should generate and use your own comment service
    // comment: {
    //   provider: "Giscus",
    //   repo: "vuepress-theme-hope/giscus-discussions",
    //   repoId: "R_kgDOG_Pt2A",
    //   category: "Announcements",
    //   categoryId: "DIC_kwDOG_Pt2M4COD69",
    // },
    components: {
      components: ["Badge", "VPCard"]
    },
    // All features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      codetabs: true,
      component: true,
      demo: true,
      figure: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      mark: true,
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended"
              };
          }
        }
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true
      // install chart.js before enabling it
      // chart: true,
      // insert component easily
      // install echarts before enabling it
      // echarts: true,
      // install flowchart.ts before enabling it
      // flowchart: true,
      // gfm requires mathjax-full to provide tex support
      // gfm: true,
      // install katex before enabling it
      // katex: true,
      // install mathjax-full before enabling it
      // mathjax: true,
      // install mermaid before enabling it
      // mermaid: true,
      // playground: {
      //   presets: ["ts", "vue"],
      // },
      // install reveal.js before enabling it
      // revealJs: {
      //   plugins: ["highlight", "math", "search", "notes", "zoom"],
      // },
      // install @vue/repl before enabling it
      // vuePlayground: true,
      // install sandpack-vue3 before enabling it
      // sandpack: true,
    }
    // install @vuepress/plugin-pwa and uncomment these if you want a PWA
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cachePic: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  }
});

// src/.vuepress/config.ts
var config_default = defineUserConfig({
  base: "/",
  lang: "en-US",
  title: "Labelle Moving",
  description: "Offering Comprehensive Moving Solutions for Ottawa & The Surrounding Area",
  theme: theme_default
  // Enable it with pwa
  // shouldPrefetch: false,
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjLy52dWVwcmVzcy9jb25maWcudHMiLCAic3JjLy52dWVwcmVzcy90aGVtZS50cyIsICJzcmMvLnZ1ZXByZXNzL3NpZGViYXIudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvbW50L2MvVXNlcnMvam9uYXQvRG9jdW1lbnRzL0dpdEh1Yi9ob3BlL2xhYmVsbGVfbW92aW5nX3ZwL2xhYmVsbGVfbW92aW5nX2hvcGUvc3JjLy52dWVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL21udC9jL1VzZXJzL2pvbmF0L0RvY3VtZW50cy9HaXRIdWIvaG9wZS9sYWJlbGxlX21vdmluZ192cC9sYWJlbGxlX21vdmluZ19ob3BlL3NyYy8udnVlcHJlc3MvY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9tbnQvYy9Vc2Vycy9qb25hdC9Eb2N1bWVudHMvR2l0SHViL2hvcGUvbGFiZWxsZV9tb3ZpbmdfdnAvbGFiZWxsZV9tb3ZpbmdfaG9wZS9zcmMvLnZ1ZXByZXNzL2NvbmZpZy50c1wiO2ltcG9ydCB7IGRlZmluZVVzZXJDb25maWcgfSBmcm9tIFwidnVlcHJlc3NcIjtcbmltcG9ydCB0aGVtZSBmcm9tIFwiLi90aGVtZS50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVVc2VyQ29uZmlnKHtcbiAgYmFzZTogXCIvXCIsXG5cbiAgbGFuZzogXCJlbi1VU1wiLFxuICB0aXRsZTogXCJMYWJlbGxlIE1vdmluZ1wiLFxuICBkZXNjcmlwdGlvbjogXCJPZmZlcmluZyBDb21wcmVoZW5zaXZlIE1vdmluZyBTb2x1dGlvbnMgZm9yIE90dGF3YSAmIFRoZSBTdXJyb3VuZGluZyBBcmVhXCIsXG5cbiAgdGhlbWUsXG4gIC8vIEVuYWJsZSBpdCB3aXRoIHB3YVxuICAvLyBzaG91bGRQcmVmZXRjaDogZmFsc2UsXG4gXG5cbn0pO1xuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvbW50L2MvVXNlcnMvam9uYXQvRG9jdW1lbnRzL0dpdEh1Yi9ob3BlL2xhYmVsbGVfbW92aW5nX3ZwL2xhYmVsbGVfbW92aW5nX2hvcGUvc3JjLy52dWVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL21udC9jL1VzZXJzL2pvbmF0L0RvY3VtZW50cy9HaXRIdWIvaG9wZS9sYWJlbGxlX21vdmluZ192cC9sYWJlbGxlX21vdmluZ19ob3BlL3NyYy8udnVlcHJlc3MvdGhlbWUudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL21udC9jL1VzZXJzL2pvbmF0L0RvY3VtZW50cy9HaXRIdWIvaG9wZS9sYWJlbGxlX21vdmluZ192cC9sYWJlbGxlX21vdmluZ19ob3BlL3NyYy8udnVlcHJlc3MvdGhlbWUudHNcIjtpbXBvcnQgeyBob3BlVGhlbWUgfSBmcm9tIFwidnVlcHJlc3MtdGhlbWUtaG9wZVwiO1xuaW1wb3J0IHsgbmF2YmFyIH0gZnJvbSBcInZ1ZXByZXNzLXRoZW1lLWhvcGVcIjtcbmltcG9ydCBzaWRlYmFyIGZyb20gXCIuL3NpZGViYXIuanNcIjtcblxuXG5cblxuZXhwb3J0IGRlZmF1bHQgaG9wZVRoZW1lKHtcbiAgaG9zdG5hbWU6IFwiaHR0cHM6Ly9sYWJlbGxlbW92aW5nLmNvbVwiLFxuXG4gIGF1dGhvcjoge1xuICAgIG5hbWU6IFwiTXIuSG9wZVwiLFxuICAgIHVybDogXCJodHRwczovL21pc3Rlci1ob3BlLmNvbVwiLFxuICB9LFxuXG4gIGljb25Bc3NldHM6IFwiZm9udGF3ZXNvbWUtd2l0aC1icmFuZHNcIixcblxuICBsb2dvOiBcIi9hc3NldHMvaW1hZ2UvdHJ1Y2swMS5zdmdcIixcblxuICByZXBvOiBcInZ1ZXByZXNzLXRoZW1lLWhvcGUvdnVlcHJlc3MtdGhlbWUtaG9wZVwiLFxuICByZXBvRGlzcGxheTogZmFsc2UsXG5cbiAgZG9jc0RpcjogXCJzcmNcIixcbiAgc2lkZWJhcixcbiAgLy8gbmF2YmFyXG4gIG5hdmJhcjogW1xuICAgIHtcbiAgICAgIHRleHQ6IFwiR2V0IGEgUXVvdGUgTm93IVwiLFxuICAgICAgbGluazogXCIvYm9va2luZy5tZFwiLFxuICAgICAgaWNvbjogXCJib29rXCIsXG4gICAgICAvLyBvbmx5IGFjdGl2ZSBpbiBgL2d1aWRlL2BcbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6IFwiUHJpY2VzXCIsXG4gICAgICBsaW5rOiBcIi9wcmljZXMubWRcIixcbiAgICAgIGljb246IFwiZG9sbGFyXCIsXG4gICAgICAvLyBvbmx5IGFjdGl2ZSBpbiBgL2d1aWRlL2BcbiAgICB9XG4gIF0sXG4gIFxuICBmYXZpY29uOiBcIi9hc3NldHMvaWNvbi9mYXZpY29uLmljb1wiLFxuXG4gIGZvb3RlcjogXCJEZWZhdWx0IGZvb3RlclwiLFxuXG4gIGRpc3BsYXlGb290ZXI6IHRydWUsXG5cbiAgLy9lbmNyeXB0OiB7XG4gIC8vICBjb25maWc6IHtcbiAgLy8gICAgXCIvZGVtby9lbmNyeXB0Lmh0bWxcIjogW1wiMTIzNFwiXSxcbiAgLy8gIH0sXG4gIC8vfSxcblxuICAvL21ldGFMb2NhbGVzOiB7XG4gIC8vICBlZGl0TGluazogXCJFZGl0IHRoaXMgcGFnZSBvbiBHaXRIdWJcIixcbiAgLy99LFxuXG4gIHBsdWdpbnM6IHtcbiAgICAvLyBZb3Ugc2hvdWxkIGdlbmVyYXRlIGFuZCB1c2UgeW91ciBvd24gY29tbWVudCBzZXJ2aWNlXG4gICAvLyBjb21tZW50OiB7XG4gICAvLyAgIHByb3ZpZGVyOiBcIkdpc2N1c1wiLFxuICAgLy8gICByZXBvOiBcInZ1ZXByZXNzLXRoZW1lLWhvcGUvZ2lzY3VzLWRpc2N1c3Npb25zXCIsXG4gICAvLyAgIHJlcG9JZDogXCJSX2tnRE9HX1B0MkFcIixcbiAgIC8vICAgY2F0ZWdvcnk6IFwiQW5ub3VuY2VtZW50c1wiLFxuICAgLy8gICBjYXRlZ29yeUlkOiBcIkRJQ19rd0RPR19QdDJNNENPRDY5XCIsXG4gICAvLyB9LFxuXG4gICAgY29tcG9uZW50czoge1xuICAgICAgY29tcG9uZW50czogW1wiQmFkZ2VcIiwgXCJWUENhcmRcIl0sXG4gICAgfSxcblxuICAgIC8vIEFsbCBmZWF0dXJlcyBhcmUgZW5hYmxlZCBmb3IgZGVtbywgb25seSBwcmVzZXJ2ZSBmZWF0dXJlcyB5b3UgbmVlZCBoZXJlXG4gICAgbWRFbmhhbmNlOiB7XG4gICAgICBhbGlnbjogdHJ1ZSxcbiAgICAgIGF0dHJzOiB0cnVlLFxuICAgICAgY29kZXRhYnM6IHRydWUsXG4gICAgICBjb21wb25lbnQ6IHRydWUsXG4gICAgICBkZW1vOiB0cnVlLFxuICAgICAgZmlndXJlOiB0cnVlLFxuICAgICAgaW1nTGF6eWxvYWQ6IHRydWUsXG4gICAgICBpbWdTaXplOiB0cnVlLFxuICAgICAgaW5jbHVkZTogdHJ1ZSxcbiAgICAgIG1hcms6IHRydWUsXG4gICAgICBzdHlsaXplOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBtYXRjaGVyOiBcIlJlY29tbWVuZGVkXCIsXG4gICAgICAgICAgcmVwbGFjZXI6ICh7IHRhZyB9KSA9PiB7XG4gICAgICAgICAgICBpZiAodGFnID09PSBcImVtXCIpXG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdGFnOiBcIkJhZGdlXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0aXBcIiB9LFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiUmVjb21tZW5kZWRcIixcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIHN1YjogdHJ1ZSxcbiAgICAgIHN1cDogdHJ1ZSxcbiAgICAgIHRhYnM6IHRydWUsXG4gICAgICB2UHJlOiB0cnVlLFxuXG4gICAgICAvLyBpbnN0YWxsIGNoYXJ0LmpzIGJlZm9yZSBlbmFibGluZyBpdFxuICAgICAgLy8gY2hhcnQ6IHRydWUsXG5cbiAgICAgIC8vIGluc2VydCBjb21wb25lbnQgZWFzaWx5XG5cbiAgICAgIC8vIGluc3RhbGwgZWNoYXJ0cyBiZWZvcmUgZW5hYmxpbmcgaXRcbiAgICAgIC8vIGVjaGFydHM6IHRydWUsXG5cbiAgICAgIC8vIGluc3RhbGwgZmxvd2NoYXJ0LnRzIGJlZm9yZSBlbmFibGluZyBpdFxuICAgICAgLy8gZmxvd2NoYXJ0OiB0cnVlLFxuXG4gICAgICAvLyBnZm0gcmVxdWlyZXMgbWF0aGpheC1mdWxsIHRvIHByb3ZpZGUgdGV4IHN1cHBvcnRcbiAgICAgIC8vIGdmbTogdHJ1ZSxcblxuICAgICAgLy8gaW5zdGFsbCBrYXRleCBiZWZvcmUgZW5hYmxpbmcgaXRcbiAgICAgIC8vIGthdGV4OiB0cnVlLFxuXG4gICAgICAvLyBpbnN0YWxsIG1hdGhqYXgtZnVsbCBiZWZvcmUgZW5hYmxpbmcgaXRcbiAgICAgIC8vIG1hdGhqYXg6IHRydWUsXG5cbiAgICAgIC8vIGluc3RhbGwgbWVybWFpZCBiZWZvcmUgZW5hYmxpbmcgaXRcbiAgICAgIC8vIG1lcm1haWQ6IHRydWUsXG5cbiAgICAgIC8vIHBsYXlncm91bmQ6IHtcbiAgICAgIC8vICAgcHJlc2V0czogW1widHNcIiwgXCJ2dWVcIl0sXG4gICAgICAvLyB9LFxuXG4gICAgICAvLyBpbnN0YWxsIHJldmVhbC5qcyBiZWZvcmUgZW5hYmxpbmcgaXRcbiAgICAgIC8vIHJldmVhbEpzOiB7XG4gICAgICAvLyAgIHBsdWdpbnM6IFtcImhpZ2hsaWdodFwiLCBcIm1hdGhcIiwgXCJzZWFyY2hcIiwgXCJub3Rlc1wiLCBcInpvb21cIl0sXG4gICAgICAvLyB9LFxuXG4gICAgICAvLyBpbnN0YWxsIEB2dWUvcmVwbCBiZWZvcmUgZW5hYmxpbmcgaXRcbiAgICAgIC8vIHZ1ZVBsYXlncm91bmQ6IHRydWUsXG5cbiAgICAgIC8vIGluc3RhbGwgc2FuZHBhY2stdnVlMyBiZWZvcmUgZW5hYmxpbmcgaXRcbiAgICAgIC8vIHNhbmRwYWNrOiB0cnVlLFxuICAgIH0sXG5cbiAgICAvLyBpbnN0YWxsIEB2dWVwcmVzcy9wbHVnaW4tcHdhIGFuZCB1bmNvbW1lbnQgdGhlc2UgaWYgeW91IHdhbnQgYSBQV0FcbiAgICAvLyBwd2E6IHtcbiAgICAvLyAgIGZhdmljb246IFwiL2Zhdmljb24uaWNvXCIsXG4gICAgLy8gICBjYWNoZUhUTUw6IHRydWUsXG4gICAgLy8gICBjYWNoZVBpYzogdHJ1ZSxcbiAgICAvLyAgIGFwcGVuZEJhc2U6IHRydWUsXG4gICAgLy8gICBhcHBsZToge1xuICAgIC8vICAgICBpY29uOiBcIi9hc3NldHMvaWNvbi9hcHBsZS1pY29uLTE1Mi5wbmdcIixcbiAgICAvLyAgICAgc3RhdHVzQmFyQ29sb3I6IFwiYmxhY2tcIixcbiAgICAvLyAgIH0sXG4gICAgLy8gICBtc1RpbGU6IHtcbiAgICAvLyAgICAgaW1hZ2U6IFwiL2Fzc2V0cy9pY29uL21zLWljb24tMTQ0LnBuZ1wiLFxuICAgIC8vICAgICBjb2xvcjogXCIjZmZmZmZmXCIsXG4gICAgLy8gICB9LFxuICAgIC8vICAgbWFuaWZlc3Q6IHtcbiAgICAvLyAgICAgaWNvbnM6IFtcbiAgICAvLyAgICAgICB7XG4gICAgLy8gICAgICAgICBzcmM6IFwiL2Fzc2V0cy9pY29uL2Nocm9tZS1tYXNrLTUxMi5wbmdcIixcbiAgICAvLyAgICAgICAgIHNpemVzOiBcIjUxMng1MTJcIixcbiAgICAvLyAgICAgICAgIHB1cnBvc2U6IFwibWFza2FibGVcIixcbiAgICAvLyAgICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXG4gICAgLy8gICAgICAgfSxcbiAgICAvLyAgICAgICB7XG4gICAgLy8gICAgICAgICBzcmM6IFwiL2Fzc2V0cy9pY29uL2Nocm9tZS1tYXNrLTE5Mi5wbmdcIixcbiAgICAvLyAgICAgICAgIHNpemVzOiBcIjE5MngxOTJcIixcbiAgICAvLyAgICAgICAgIHB1cnBvc2U6IFwibWFza2FibGVcIixcbiAgICAvLyAgICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXG4gICAgLy8gICAgICAgfSxcbiAgICAvLyAgICAgICB7XG4gICAgLy8gICAgICAgICBzcmM6IFwiL2Fzc2V0cy9pY29uL2Nocm9tZS01MTIucG5nXCIsXG4gICAgLy8gICAgICAgICBzaXplczogXCI1MTJ4NTEyXCIsXG4gICAgLy8gICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiLFxuICAgIC8vICAgICAgIH0sXG4gICAgLy8gICAgICAge1xuICAgIC8vICAgICAgICAgc3JjOiBcIi9hc3NldHMvaWNvbi9jaHJvbWUtMTkyLnBuZ1wiLFxuICAgIC8vICAgICAgICAgc2l6ZXM6IFwiMTkyeDE5MlwiLFxuICAgIC8vICAgICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIixcbiAgICAvLyAgICAgICB9LFxuICAgIC8vICAgICBdLFxuICAgIC8vICAgICBzaG9ydGN1dHM6IFtcbiAgICAvLyAgICAgICB7XG4gICAgLy8gICAgICAgICBuYW1lOiBcIkRlbW9cIixcbiAgICAvLyAgICAgICAgIHNob3J0X25hbWU6IFwiRGVtb1wiLFxuICAgIC8vICAgICAgICAgdXJsOiBcIi9kZW1vL1wiLFxuICAgIC8vICAgICAgICAgaWNvbnM6IFtcbiAgICAvLyAgICAgICAgICAge1xuICAgIC8vICAgICAgICAgICAgIHNyYzogXCIvYXNzZXRzL2ljb24vZ3VpZGUtbWFza2FibGUucG5nXCIsXG4gICAgLy8gICAgICAgICAgICAgc2l6ZXM6IFwiMTkyeDE5MlwiLFxuICAgIC8vICAgICAgICAgICAgIHB1cnBvc2U6IFwibWFza2FibGVcIixcbiAgICAvLyAgICAgICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiLFxuICAgIC8vICAgICAgICAgICB9LFxuICAgIC8vICAgICAgICAgXSxcbiAgICAvLyAgICAgICB9LFxuICAgIC8vICAgICBdLFxuICAgIC8vICAgfSxcbiAgICAvLyB9LFxuICB9LFxufSk7XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9tbnQvYy9Vc2Vycy9qb25hdC9Eb2N1bWVudHMvR2l0SHViL2hvcGUvbGFiZWxsZV9tb3ZpbmdfdnAvbGFiZWxsZV9tb3ZpbmdfaG9wZS9zcmMvLnZ1ZXByZXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvbW50L2MvVXNlcnMvam9uYXQvRG9jdW1lbnRzL0dpdEh1Yi9ob3BlL2xhYmVsbGVfbW92aW5nX3ZwL2xhYmVsbGVfbW92aW5nX2hvcGUvc3JjLy52dWVwcmVzcy9zaWRlYmFyLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9tbnQvYy9Vc2Vycy9qb25hdC9Eb2N1bWVudHMvR2l0SHViL2hvcGUvbGFiZWxsZV9tb3ZpbmdfdnAvbGFiZWxsZV9tb3ZpbmdfaG9wZS9zcmMvLnZ1ZXByZXNzL3NpZGViYXIudHNcIjtpbXBvcnQgeyBzaWRlYmFyIH0gZnJvbSBcInZ1ZXByZXNzLXRoZW1lLWhvcGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgc2lkZWJhcih7XG4gIFwiL1wiOiBbXG4gICAgXCJcIixcbiAgICAvLyB7XG4gICAgLy8gICB0ZXh0OiBcIkRlbW9cIixcbiAgICAvLyAgIGljb246IFwibGFwdG9wLWNvZGVcIixcbiAgICAvLyAgIHByZWZpeDogXCJkZW1vL1wiLFxuICAgIC8vICAgbGluazogXCJkZW1vL1wiLFxuICAgIC8vICAgY2hpbGRyZW46IFwic3RydWN0dXJlXCIsXG4gICAgLy8gfSxcbiAgICAvLyB7XG4gICAgLy8gICB0ZXh0OiBcIkRvY3NcIixcbiAgICAvLyAgIGljb246IFwiYm9va1wiLFxuICAgIC8vICAgcHJlZml4OiBcImd1aWRlL1wiLFxuICAgIC8vICAgY2hpbGRyZW46IFwic3RydWN0dXJlXCIsXG4gICAgLy8gfSxcbiAgICAvLyB7XG4gICAgLy8gICB0ZXh0OiBcIlNsaWRlc1wiLFxuICAgIC8vICAgaWNvbjogXCJwZXJzb24tY2hhbGtib2FyZFwiLFxuICAgIC8vICAgbGluazogXCJodHRwczovL3BsdWdpbi1tZC1lbmhhbmNlLnZ1ZWpzLnByZXNzL2d1aWRlL2NvbnRlbnQvcmV2ZWFsanMvZGVtby5odG1sXCIsXG4gICAgLy8gfSxcbiAgXSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUE0YixTQUFTLHdCQUF3Qjs7O0FDQW5DLFNBQVMsaUJBQWlCOzs7QUNBdEIsU0FBUyxlQUFlO0FBRXRkLElBQU8sa0JBQVEsUUFBUTtBQUFBLEVBQ3JCLEtBQUs7QUFBQSxJQUNIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFtQkY7QUFDRixDQUFDOzs7QURqQkQsSUFBTyxnQkFBUSxVQUFVO0FBQUEsRUFDdkIsVUFBVTtBQUFBLEVBRVYsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sS0FBSztBQUFBLEVBQ1A7QUFBQSxFQUVBLFlBQVk7QUFBQSxFQUVaLE1BQU07QUFBQSxFQUVOLE1BQU07QUFBQSxFQUNOLGFBQWE7QUFBQSxFQUViLFNBQVM7QUFBQSxFQUNUO0FBQUE7QUFBQSxFQUVBLFFBQVE7QUFBQSxJQUNOO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUE7QUFBQSxJQUVSO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBO0FBQUEsSUFFUjtBQUFBLEVBQ0Y7QUFBQSxFQUVBLFNBQVM7QUFBQSxFQUVULFFBQVE7QUFBQSxFQUVSLGVBQWU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFZZixTQUFTO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVVAsWUFBWTtBQUFBLE1BQ1YsWUFBWSxDQUFDLFNBQVMsUUFBUTtBQUFBLElBQ2hDO0FBQUE7QUFBQSxJQUdBLFdBQVc7QUFBQSxNQUNULE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLFVBQVU7QUFBQSxNQUNWLFdBQVc7QUFBQSxNQUNYLE1BQU07QUFBQSxNQUNOLFFBQVE7QUFBQSxNQUNSLGFBQWE7QUFBQSxNQUNiLFNBQVM7QUFBQSxNQUNULFNBQVM7QUFBQSxNQUNULE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxRQUNQO0FBQUEsVUFDRSxTQUFTO0FBQUEsVUFDVCxVQUFVLENBQUMsRUFBRSxJQUFJLE1BQU07QUFDckIsZ0JBQUksUUFBUTtBQUNWLHFCQUFPO0FBQUEsZ0JBQ0wsS0FBSztBQUFBLGdCQUNMLE9BQU8sRUFBRSxNQUFNLE1BQU07QUFBQSxnQkFDckIsU0FBUztBQUFBLGNBQ1g7QUFBQSxVQUNKO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxNQUNBLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF1Q1I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUEwREY7QUFDRixDQUFDOzs7QURqTUQsSUFBTyxpQkFBUSxpQkFBaUI7QUFBQSxFQUM5QixNQUFNO0FBQUEsRUFFTixNQUFNO0FBQUEsRUFDTixPQUFPO0FBQUEsRUFDUCxhQUFhO0FBQUEsRUFFYjtBQUFBO0FBQUE7QUFLRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
