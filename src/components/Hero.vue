<template>
  <section class="hero">
    <h1 class="line">{{data.header_title}}</h1>
    <p class="line">{{data.header_paragraph}}</p>
  </section>
</template>

<script>
import data from "@/data/theme.json";

export default {
  name: "Hero",
  data() {
    return {
      data
    };
  },
  mounted() {
    TweenMax.staggerFrom(".line", 0.3, { y: 20, opacity: 0 }, 0.16);
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
    font-size: 6rem;
  }
  p {
    font-size: 2rem;
  }
}
</style>