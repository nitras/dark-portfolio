<template>
  <div class="layout">
    <Header />
    <Hero />
    <transition name="fade" appear>
      <main>
        <!-- a wrapper for slot is needed -->
        <slot />
      </main>
    </transition>
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
@import url("https://rsms.me/inter/inter.css");
html {
  font-family: "Inter", sans-serif;
  font-size: 14px;
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
  background-color: #141313;
  color: white;
  margin: 0;
  padding: 0;
}
a {
  color: inherit;
  text-decoration: none;
  border-bottom: 1.5px solid transparent;
  padding-bottom: 0.25rem;
  transition: border 0.15s ease;
  &:hover {
    border-bottom: 1.5px solid currentColor;
  }
}

/*TRANSITION*/
.fade-enter-active {
  transition: opacity 0.5s;
}

.fade-enter {
  opacity: 0;
  transform: translateY(30px);
  transition-delay: 3s;
}
</style>
