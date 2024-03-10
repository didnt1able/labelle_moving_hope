// src/.vuepress/config.ts
import { defineUserConfig } from "vuepress";

// src/.vuepress/theme.ts
import { hopeTheme } from "vuepress-theme-hope";

// src/.vuepress/navbar.ts
import { navbar } from "vuepress-theme-hope";
var navbar_default = navbar([]);

// src/.vuepress/theme.ts
import "@vuepress/plugin-pwa";
var theme_default = hopeTheme({
  hostname: "https://vuepress-theme-hope-docs-demo.netlify.app",
  author: {
    name: "Mr.Hope",
    url: "https://mister-hope.com"
  },
  iconAssets: "fontawesome-with-brands",
  logo: "/assets/image/box.svg",
  repo: "vuepress-theme-hope/vuepress-theme-hope",
  repoDisplay: false,
  docsDir: "src",
  // navbar
  navbar: navbar_default,
  favicon: "/favicon.ico",
  footer: "Default footer",
  displayFooter: true,
  //encrypt: {
  //  config: {
  //    "/demo/encrypt.html": ["1234"],
  //  },
  //},
  metaLocales: {
    editLink: "Edit this page on GitHub"
  },
  plugins: {
    // You should generate and use your own comment service
    comment: {
      provider: "Giscus",
      repo: "vuepress-theme-hope/giscus-discussions",
      repoId: "R_kgDOG_Pt2A",
      category: "Announcements",
      categoryId: "DIC_kwDOG_Pt2M4COD69"
    },
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
    },
    // install @vuepress/plugin-pwa and uncomment these if you want a PWA
    pwa: {
      favicon: "/favicon.ico",
      cacheHTML: true,
      cachePic: true,
      appendBase: true,
      // apple: {
      //   icon: "/assets/icon/apple-icon-152.png",
      //   statusBarColor: "black",
      // },
      msTile: {
        image: "/assets/icon/pwa-144x144.webp",
        color: "#ffffff"
      },
      manifest: {
        icons: [
          {
            src: "/assets/icon/pwa-512x512.webp",
            sizes: "512x512",
            purpose: "maskable",
            type: "image/webp"
          },
          {
            src: "/assets/icon/pwa-192x192.webp",
            sizes: "192x192",
            purpose: "maskable",
            type: "image/webp"
          },
          {
            src: "/assets/icon/pwa-512x512.webp",
            sizes: "512x512",
            type: "image/webp"
          },
          {
            src: "/assets/icon/pwa-192x192.webp",
            sizes: "192x192",
            type: "image/webp"
          }
        ],
        shortcuts: [
          {
            name: "Demo",
            short_name: "Demo",
            url: "/demo/",
            icons: [
              {
                src: "/assets/icon/pwa-192x192.webp",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/webp"
              }
            ]
          }
        ]
      }
    }
  }
});

// src/.vuepress/config.ts
var config_default = defineUserConfig({
  base: "/",
  lang: "en-US",
  title: "Labelle Moving",
  description: "Offering Comprehensive Moving Solutions for Ottawa & The Surrounding Area",
  theme: theme_default,
  navbar: [""]
  // Enable it with pwa
  // shouldPrefetch: false,
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjLy52dWVwcmVzcy9jb25maWcudHMiLCAic3JjLy52dWVwcmVzcy90aGVtZS50cyIsICJzcmMvLnZ1ZXByZXNzL25hdmJhci50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9tbnQvYy9Vc2Vycy9qb25hdC9Eb2N1bWVudHMvR2l0SHViL2hvcGUvbXktZG9jcy9zcmMvLnZ1ZXByZXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvbW50L2MvVXNlcnMvam9uYXQvRG9jdW1lbnRzL0dpdEh1Yi9ob3BlL215LWRvY3Mvc3JjLy52dWVwcmVzcy9jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL21udC9jL1VzZXJzL2pvbmF0L0RvY3VtZW50cy9HaXRIdWIvaG9wZS9teS1kb2NzL3NyYy8udnVlcHJlc3MvY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lVXNlckNvbmZpZyB9IGZyb20gXCJ2dWVwcmVzc1wiO1xuaW1wb3J0IHRoZW1lIGZyb20gXCIuL3RoZW1lLnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZVVzZXJDb25maWcoe1xuICBiYXNlOiBcIi9cIixcblxuICBsYW5nOiBcImVuLVVTXCIsXG4gIHRpdGxlOiBcIkxhYmVsbGUgTW92aW5nXCIsXG4gIGRlc2NyaXB0aW9uOiBcIk9mZmVyaW5nIENvbXByZWhlbnNpdmUgTW92aW5nIFNvbHV0aW9ucyBmb3IgT3R0YXdhICYgVGhlIFN1cnJvdW5kaW5nIEFyZWFcIixcblxuICB0aGVtZSxcbiAgbmF2YmFyOiBbXCJcIl0sXG4gIC8vIEVuYWJsZSBpdCB3aXRoIHB3YVxuICAvLyBzaG91bGRQcmVmZXRjaDogZmFsc2UsXG4gXG5cbn0pO1xuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvbW50L2MvVXNlcnMvam9uYXQvRG9jdW1lbnRzL0dpdEh1Yi9ob3BlL215LWRvY3Mvc3JjLy52dWVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL21udC9jL1VzZXJzL2pvbmF0L0RvY3VtZW50cy9HaXRIdWIvaG9wZS9teS1kb2NzL3NyYy8udnVlcHJlc3MvdGhlbWUudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL21udC9jL1VzZXJzL2pvbmF0L0RvY3VtZW50cy9HaXRIdWIvaG9wZS9teS1kb2NzL3NyYy8udnVlcHJlc3MvdGhlbWUudHNcIjtpbXBvcnQgeyBob3BlVGhlbWUgfSBmcm9tIFwidnVlcHJlc3MtdGhlbWUtaG9wZVwiO1xuaW1wb3J0IG5hdmJhciBmcm9tIFwiLi9uYXZiYXIuanNcIjtcbmltcG9ydCBcIkB2dWVwcmVzcy9wbHVnaW4tcHdhXCI7XG5leHBvcnQgZGVmYXVsdCBob3BlVGhlbWUoe1xuICBob3N0bmFtZTogXCJodHRwczovL3Z1ZXByZXNzLXRoZW1lLWhvcGUtZG9jcy1kZW1vLm5ldGxpZnkuYXBwXCIsXG5cbiAgYXV0aG9yOiB7XG4gICAgbmFtZTogXCJNci5Ib3BlXCIsXG4gICAgdXJsOiBcImh0dHBzOi8vbWlzdGVyLWhvcGUuY29tXCIsXG4gIH0sXG5cbiAgaWNvbkFzc2V0czogXCJmb250YXdlc29tZS13aXRoLWJyYW5kc1wiLFxuXG4gIGxvZ286IFwiL2Fzc2V0cy9pbWFnZS9ib3guc3ZnXCIsXG5cbiAgcmVwbzogXCJ2dWVwcmVzcy10aGVtZS1ob3BlL3Z1ZXByZXNzLXRoZW1lLWhvcGVcIixcbiAgcmVwb0Rpc3BsYXk6IGZhbHNlLFxuXG4gIGRvY3NEaXI6IFwic3JjXCIsXG5cbiAgLy8gbmF2YmFyXG4gIG5hdmJhcixcblxuICBmYXZpY29uOiBcIi9mYXZpY29uLmljb1wiLFxuXG4gIGZvb3RlcjogXCJEZWZhdWx0IGZvb3RlclwiLFxuXG4gIGRpc3BsYXlGb290ZXI6IHRydWUsXG5cbiAgLy9lbmNyeXB0OiB7XG4gIC8vICBjb25maWc6IHtcbiAgLy8gICAgXCIvZGVtby9lbmNyeXB0Lmh0bWxcIjogW1wiMTIzNFwiXSxcbiAgLy8gIH0sXG4gIC8vfSxcblxuICBtZXRhTG9jYWxlczoge1xuICAgIGVkaXRMaW5rOiBcIkVkaXQgdGhpcyBwYWdlIG9uIEdpdEh1YlwiLFxuICB9LFxuXG4gIHBsdWdpbnM6IHtcbiAgICAvLyBZb3Ugc2hvdWxkIGdlbmVyYXRlIGFuZCB1c2UgeW91ciBvd24gY29tbWVudCBzZXJ2aWNlXG4gICAgY29tbWVudDoge1xuICAgICAgcHJvdmlkZXI6IFwiR2lzY3VzXCIsXG4gICAgICByZXBvOiBcInZ1ZXByZXNzLXRoZW1lLWhvcGUvZ2lzY3VzLWRpc2N1c3Npb25zXCIsXG4gICAgICByZXBvSWQ6IFwiUl9rZ0RPR19QdDJBXCIsXG4gICAgICBjYXRlZ29yeTogXCJBbm5vdW5jZW1lbnRzXCIsXG4gICAgICBjYXRlZ29yeUlkOiBcIkRJQ19rd0RPR19QdDJNNENPRDY5XCIsXG4gICAgfSxcblxuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgIGNvbXBvbmVudHM6IFtcIkJhZGdlXCIsIFwiVlBDYXJkXCJdLFxuICAgIH0sXG5cbiAgICAvLyBBbGwgZmVhdHVyZXMgYXJlIGVuYWJsZWQgZm9yIGRlbW8sIG9ubHkgcHJlc2VydmUgZmVhdHVyZXMgeW91IG5lZWQgaGVyZVxuICAgIG1kRW5oYW5jZToge1xuICAgICAgYWxpZ246IHRydWUsXG4gICAgICBhdHRyczogdHJ1ZSxcbiAgICAgIGNvZGV0YWJzOiB0cnVlLFxuICAgICAgY29tcG9uZW50OiB0cnVlLFxuICAgICAgZGVtbzogdHJ1ZSxcbiAgICAgIGZpZ3VyZTogdHJ1ZSxcbiAgICAgIGltZ0xhenlsb2FkOiB0cnVlLFxuICAgICAgaW1nU2l6ZTogdHJ1ZSxcbiAgICAgIGluY2x1ZGU6IHRydWUsXG4gICAgICBtYXJrOiB0cnVlLFxuICAgICAgc3R5bGl6ZTogW1xuICAgICAgICB7XG4gICAgICAgICAgbWF0Y2hlcjogXCJSZWNvbW1lbmRlZFwiLFxuICAgICAgICAgIHJlcGxhY2VyOiAoeyB0YWcgfSkgPT4ge1xuICAgICAgICAgICAgaWYgKHRhZyA9PT0gXCJlbVwiKVxuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHRhZzogXCJCYWRnZVwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGlwXCIgfSxcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlJlY29tbWVuZGVkXCIsXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICBzdWI6IHRydWUsXG4gICAgICBzdXA6IHRydWUsXG4gICAgICB0YWJzOiB0cnVlLFxuICAgICAgdlByZTogdHJ1ZSxcblxuICAgICAgLy8gaW5zdGFsbCBjaGFydC5qcyBiZWZvcmUgZW5hYmxpbmcgaXRcbiAgICAgIC8vIGNoYXJ0OiB0cnVlLFxuXG4gICAgICAvLyBpbnNlcnQgY29tcG9uZW50IGVhc2lseVxuXG4gICAgICAvLyBpbnN0YWxsIGVjaGFydHMgYmVmb3JlIGVuYWJsaW5nIGl0XG4gICAgICAvLyBlY2hhcnRzOiB0cnVlLFxuXG4gICAgICAvLyBpbnN0YWxsIGZsb3djaGFydC50cyBiZWZvcmUgZW5hYmxpbmcgaXRcbiAgICAgIC8vIGZsb3djaGFydDogdHJ1ZSxcblxuICAgICAgLy8gZ2ZtIHJlcXVpcmVzIG1hdGhqYXgtZnVsbCB0byBwcm92aWRlIHRleCBzdXBwb3J0XG4gICAgICAvLyBnZm06IHRydWUsXG5cbiAgICAgIC8vIGluc3RhbGwga2F0ZXggYmVmb3JlIGVuYWJsaW5nIGl0XG4gICAgICAvLyBrYXRleDogdHJ1ZSxcblxuICAgICAgLy8gaW5zdGFsbCBtYXRoamF4LWZ1bGwgYmVmb3JlIGVuYWJsaW5nIGl0XG4gICAgICAvLyBtYXRoamF4OiB0cnVlLFxuXG4gICAgICAvLyBpbnN0YWxsIG1lcm1haWQgYmVmb3JlIGVuYWJsaW5nIGl0XG4gICAgICAvLyBtZXJtYWlkOiB0cnVlLFxuXG4gICAgICAvLyBwbGF5Z3JvdW5kOiB7XG4gICAgICAvLyAgIHByZXNldHM6IFtcInRzXCIsIFwidnVlXCJdLFxuICAgICAgLy8gfSxcblxuICAgICAgLy8gaW5zdGFsbCByZXZlYWwuanMgYmVmb3JlIGVuYWJsaW5nIGl0XG4gICAgICAvLyByZXZlYWxKczoge1xuICAgICAgLy8gICBwbHVnaW5zOiBbXCJoaWdobGlnaHRcIiwgXCJtYXRoXCIsIFwic2VhcmNoXCIsIFwibm90ZXNcIiwgXCJ6b29tXCJdLFxuICAgICAgLy8gfSxcblxuICAgICAgLy8gaW5zdGFsbCBAdnVlL3JlcGwgYmVmb3JlIGVuYWJsaW5nIGl0XG4gICAgICAvLyB2dWVQbGF5Z3JvdW5kOiB0cnVlLFxuXG4gICAgICAvLyBpbnN0YWxsIHNhbmRwYWNrLXZ1ZTMgYmVmb3JlIGVuYWJsaW5nIGl0XG4gICAgICAvLyBzYW5kcGFjazogdHJ1ZSxcbiAgICB9LFxuXG4gICAgLy8gaW5zdGFsbCBAdnVlcHJlc3MvcGx1Z2luLXB3YSBhbmQgdW5jb21tZW50IHRoZXNlIGlmIHlvdSB3YW50IGEgUFdBXG4gICAgcHdhOiB7XG4gICAgICBmYXZpY29uOiBcIi9mYXZpY29uLmljb1wiLFxuICAgICAgY2FjaGVIVE1MOiB0cnVlLFxuICAgICAgY2FjaGVQaWM6IHRydWUsXG4gICAgICBhcHBlbmRCYXNlOiB0cnVlLFxuICAgICAvLyBhcHBsZToge1xuICAgICAvLyAgIGljb246IFwiL2Fzc2V0cy9pY29uL2FwcGxlLWljb24tMTUyLnBuZ1wiLFxuICAgICAvLyAgIHN0YXR1c0JhckNvbG9yOiBcImJsYWNrXCIsXG4gICAgIC8vIH0sXG4gICAgICBtc1RpbGU6IHtcbiAgICAgICAgaW1hZ2U6IFwiL2Fzc2V0cy9pY29uL3B3YS0xNDR4MTQ0LndlYnBcIixcbiAgICAgICAgY29sb3I6IFwiI2ZmZmZmZlwiLFxuICAgICAgfSxcbiAgICAgIG1hbmlmZXN0OiB7XG4gICAgICAgIGljb25zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiBcIi9hc3NldHMvaWNvbi9wd2EtNTEyeDUxMi53ZWJwXCIsXG4gICAgICAgICAgICBzaXplczogXCI1MTJ4NTEyXCIsXG4gICAgICAgICAgICBwdXJwb3NlOiBcIm1hc2thYmxlXCIsXG4gICAgICAgICAgICB0eXBlOiBcImltYWdlL3dlYnBcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCIvYXNzZXRzL2ljb24vcHdhLTE5MngxOTIud2VicFwiLFxuICAgICAgICAgICAgc2l6ZXM6IFwiMTkyeDE5MlwiLFxuICAgICAgICAgICAgcHVycG9zZTogXCJtYXNrYWJsZVwiLFxuICAgICAgICAgICAgdHlwZTogXCJpbWFnZS93ZWJwXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6IFwiL2Fzc2V0cy9pY29uL3B3YS01MTJ4NTEyLndlYnBcIixcbiAgICAgICAgICAgIHNpemVzOiBcIjUxMng1MTJcIixcbiAgICAgICAgICAgIHR5cGU6IFwiaW1hZ2Uvd2VicFwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiBcIi9hc3NldHMvaWNvbi9wd2EtMTkyeDE5Mi53ZWJwXCIsXG4gICAgICAgICAgICBzaXplczogXCIxOTJ4MTkyXCIsXG4gICAgICAgICAgICB0eXBlOiBcImltYWdlL3dlYnBcIixcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgICBzaG9ydGN1dHM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcIkRlbW9cIixcbiAgICAgICAgICAgIHNob3J0X25hbWU6IFwiRGVtb1wiLFxuICAgICAgICAgICAgdXJsOiBcIi9kZW1vL1wiLFxuICAgICAgICAgICAgaWNvbnM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNyYzogXCIvYXNzZXRzL2ljb24vcHdhLTE5MngxOTIud2VicFwiLFxuICAgICAgICAgICAgICAgIHNpemVzOiBcIjE5MngxOTJcIixcbiAgICAgICAgICAgICAgICBwdXJwb3NlOiBcIm1hc2thYmxlXCIsXG4gICAgICAgICAgICAgICAgdHlwZTogXCJpbWFnZS93ZWJwXCIsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG5cbn0pO1xuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvbW50L2MvVXNlcnMvam9uYXQvRG9jdW1lbnRzL0dpdEh1Yi9ob3BlL215LWRvY3Mvc3JjLy52dWVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL21udC9jL1VzZXJzL2pvbmF0L0RvY3VtZW50cy9HaXRIdWIvaG9wZS9teS1kb2NzL3NyYy8udnVlcHJlc3MvbmF2YmFyLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9tbnQvYy9Vc2Vycy9qb25hdC9Eb2N1bWVudHMvR2l0SHViL2hvcGUvbXktZG9jcy9zcmMvLnZ1ZXByZXNzL25hdmJhci50c1wiO2ltcG9ydCB7IG5hdmJhciB9IGZyb20gXCJ2dWVwcmVzcy10aGVtZS1ob3BlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IG5hdmJhcihbXG4gIFxuXG5cbl0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFrVyxTQUFTLHdCQUF3Qjs7O0FDQW5DLFNBQVMsaUJBQWlCOzs7QUNBeEIsU0FBUyxjQUFjO0FBRXpYLElBQU8saUJBQVEsT0FBTyxDQUl0QixDQUFDOzs7QURKRCxPQUFPO0FBQ1AsSUFBTyxnQkFBUSxVQUFVO0FBQUEsRUFDdkIsVUFBVTtBQUFBLEVBRVYsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sS0FBSztB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
