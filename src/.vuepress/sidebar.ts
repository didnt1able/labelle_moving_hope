import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
     {
      text: "Tips",
      icon: "question",
      link: "/tips.md",
    },
    {
      text: "Guide",
      icon: "laptop-code",
      link: "/guide.md",
    },
   
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
  ],
});
