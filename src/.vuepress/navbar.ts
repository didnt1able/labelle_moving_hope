import { navbar } from "vuepress-theme-hope";

export default navbar([
    {
        text: "Booking",
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
