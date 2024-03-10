import { defineUserConfig } from "vuepress";
import theme from "./theme.ts";

export default defineUserConfig({
  base: "/",

  lang: "en-US",
  title: "Labelle Moving",
  description: "Offering Comprehensive Moving Solutions for Ottawa & The Surrounding Area",

  theme,
  navbar: [""],
  // Enable it with pwa
  // shouldPrefetch: false,
 

});
