import { defineUserConfig } from "vuepress";
import theme from "./theme.ts";
//import { noticePlugin } from '@vuepress/plugin-notice'

export default defineUserConfig({
  base: "/",

  lang: "en-US",
  title: "Labelle Moving",
  description: "Offering Comprehensive Moving Solutions for Ottawa & The Surrounding Area",

  theme,
  // Enable it with pwa
  // shouldPrefetch: false,
  
  // plugins: [
  //   noticePlugin({
  //     config: [
        
  //       {
  //         path: '/',
  //         title: 'Notice Title',
  //         content: 'Notice Content',
  //         fullscreen: false,
  //         actions: [
  //           {
  //             text: 'Primary Action',
  //             link: 'https://theme-hope.vuejs.press/',
  //             type: 'primary',
  //           },
  //           { text: 'Default Action' },
  //         ],
  //       },
  //     ],
  //   }),
  // ],

});
