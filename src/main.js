// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";
import VueAnime from "vue-animejs";
//
export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
  Vue.use(VueAnime);

  /*
  head.script.push({
    src: "https://cdnjs.cloudflare.com/ajax/libs/animejs/2.2.0/anime.min.js",
    body: true
  });
*/
}
