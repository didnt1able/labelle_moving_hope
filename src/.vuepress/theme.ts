import { hopeTheme } from "vuepress-theme-hope";
import sidebar from "./sidebar.ts";
import navbar from "./navbar.ts";






export default hopeTheme({
  hostname: "https://labellemoving.com",

  author: {
    name: "Labelle Moving",
    url: "https://labellemoving.com",
  },

  iconAssets: "fontawesome-with-brands",

  logo: "/assets/image/truck01.svg",

  repo: "vuepress-theme-hope/vuepress-theme-hope",
  repoDisplay: false,

  docsDir: "src",
  sidebar,
  // navbar
  navbar,
  
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
      components: ["Badge", "VPCard", "Notice", "SiteInfo", "VPBanner"],
    },

    // All features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      components: true,
      component: true,
      demo: true,
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
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      vPre: true,

      
    

      // install chart.js before enabling it
      // chart: true,

      // insert component easily

      // install echarts before enabling it
      // echarts: true,

      // install flowchart.ts before enabling it
      // flowchart: true,

      // gfm requires mathjax-full to provide tex support
       gfm: true,

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
    },
    markdownTab: {
      tabs: true,
    },

    markdownHint: {
      alert: true,
    },
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
  },
});
