<template>
  <div class="layout">
    <Header />
    <main>
      <!-- a wrapper for slot is needed -->
      <slot />
    </main>

    <Footer />
  </div>
</template>

<script>
import { TimeLineMax, TweenMax, Back, Elastic, Expo } from "gsap";
import { ScrollToPlugin } from "gsap/all";
const plugins = [ScrollToPlugin];

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

export default {
  components: {
    Header,
    Hero,
    Footer
  }
};
</script>

<style lang="scss">
@import "@/scss/nitras.scss";
@import url("https://rsms.me/inter/inter.css");
html {
  font-family: "Inter", sans-serif;
  font-size: 14px;
  @include breakpoint(xs) {
    font-size: 13px;
  }
  font-weight: 500;
  box-sizing: border-box;
}

@supports (font-variation-settings: normal) {
  html {
    font-family: "Inter var", sans-serif;
  }
}

*,
*:before,
*:after {
  box-sizing: inherit;
}
body {
  background: $dark;
  color: white;
  margin: 0;
  padding: 0;
  //for footer
  margin-bottom: $footerHeight;
}
a {
  color: inherit;
  text-decoration: none;
  border-bottom: $borderThickness solid transparent;
  padding-bottom: 0.25rem;
  transition: border 0.15s ease;

  &:hover {
    border-bottom: $borderThickness solid currentColor;
    border-width: 50%;
  }
}

main {
  background: $dark;
  z-index: 1;
  position: relative;
}

/*TRANSITION*/
.fade-enter-active {
  transition: opacity 0.7s;
}

.fade-enter {
  opacity: 0;
  transform: translateY(30px);
  transition-delay: 1s;
}
</style>
