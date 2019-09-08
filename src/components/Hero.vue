<template>
  <section class="hero">
    <div class="option-A" v-if="Math.random() > 0.5">
      <h1 class="line">{{data.header_title}}</h1>
      <p class="line">{{data.header_paragraph}}</p>
    </div>
    <div class="option-B" v-else>
      <h1 class="line">{{data.header_title}}</h1>
      <p class="line">{{data.header_paragraph_alternative}}</p>
    </div>
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
    TweenMax.staggerFrom(".line", 0.3, { y: 25, opacity: 0 }, 0.16);
  },
  methods: {
    WaitAndChange: function() {}
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/nitras.scss";

.hero {
  padding: 4rem 2rem 5rem 2rem;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.05em;
  h1 {
    font-size: 9vh;
    @include breakpoint(xs) {
      font-size: 8vh;
    }
  }
  p {
    font-size: 2rem;
    max-width: 77%;
    @include breakpoint(xs) {
      max-width: 100%;
    }
  }
  /*@
  .option-A {
    opacity: 0;
  }
  .option-B {
    opacity: 0;
  }
  */
}
</style>