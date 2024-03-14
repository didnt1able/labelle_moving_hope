import { navbar } from "vuepress-theme-hope";

export default navbar([
    {
        text: "Get a Quote Now!",
        link: "/booking.md",
        icon: "book",
        // only active in `/guide/`
      },
      {
        text: "Prices",
        link: "/prices.md",
        icon: "dollar",
        // only active in `/guide/`
      }


]);
