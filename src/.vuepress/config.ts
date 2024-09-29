import { defineUserConfig } from "vuepress";
import theme from "./theme.ts";
import daisyui from "daisyui"
import { removeHtmlExtensionPlugin } from 'vuepress-plugin-remove-html-extension'

//import { noticePlugin } from '@vuepress/plugin-notice'

export default defineUserConfig({
  base: "/",
  plugins: [removeHtmlExtensionPlugin()],
  daisyui,

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
