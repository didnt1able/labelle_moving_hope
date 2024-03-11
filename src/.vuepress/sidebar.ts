import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "Prices",
      icon: "dollar",
      prefix: "/prices.md",
      link: "/prices.md",
      children: "structure",
    },
    {
      text: "Booking",
      icon: "book",
      prefix: "/booking.md",
      link: "/booking.md",
      children: "structure",
    },

  ],
});
