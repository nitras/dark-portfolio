// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";
import { TimeLineMax, TweenMax, Back, Elastic, Expo } from "gsap/all";

import VueAnalytics from "vue-analytics";

//
export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
  Vue.use(VueAnalytics, {
    id: "UA-1854162-8",
    router
  });

  /*
  head.script.push({
    src: "https://cdnjs.cloudflare.com/ajax/libs/animejs/2.2.0/anime.min.js",
    body: true
  });
*/

  // Push a meta tag
  head.meta.push({
    name: "viewport",
    content: "width=device-width, initial-scale=1"
  });
}
