<template>
  <section class="hero" ref="hero">
    <h1 class="line">My headline</h1>
    <p
      class="line"
    >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime eos nulla nam placeat magni reiciendis officiis perspiciatis fugiat ab quae dolores atque reprehenderit, deserunt minima voluptatem enim eligendi, a consequuntur!</p>
  </section>
</template>

<script>
import { TimelineLite, TweenMax, Back, Elastic, Expo } from "gsap/all";

export default {
  name: "Hero",
  el: ".hero",
  mounted() {
    TweenMax.staggerFrom(".line", .3, { y: 20, opacity: 0 }, 0.16);
  }
};
</script>

<style lang="scss" scoped>
.hero {
  padding: 4rem 2rem 5rem 2rem;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.05em;
  h1 {
    font-size: 5rem;
  }
  p {
    font-size: 2rem;
  }
}
</style>