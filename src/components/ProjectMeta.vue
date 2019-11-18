<template>
  <section class="project-meta">
    <h2 class="project-title">{{ title }}</h2>
    <ul class="project-categories">
      <li
        class="project-category"
        v-for="(category, index) in categories"
        :key="index"
      >{{ category }}</li>
    </ul>
    <time class="project-year" :datetime="year">{{ year }}</time>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: false
    },
    categories: {
      type: Array,
      required: false
    },
    year: {
      type: String,
      required: false
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/nitras.scss";
.project-meta {
  @include breakpoint(xs) {
    display: block;
    // justify-content: space-between;
  }
  display: flex;

  padding-top: 2rem;
  padding-bottom: 4rem;
  padding-left: 0;
  padding-right: 0;
  text-transform: uppercase;
  letter-spacing: 0.05em;

  line-height: 1.5;
}
.project-title {
  font-size: 1rem;
  font-weight: 500;
  margin: 0;
  @include breakpoint(xs) {
    flex: 0 0 $spacingMobile;
    padding-bottom: 20px;
  }
  flex: 0 0 $spacingDesktop;
}
.project-categories {
  flex: 1;
  padding: 0;
  margin: 0;
  list-style: none;
  margin-bottom: 30px;
}
.project-category {
  padding: 0;
  margin: 0;
}
.project-year {
  flex: 1;
  text-align: right;
  flex-direction: right;
  @include breakpoint(xs) {
    border-top: $borderThickness solid white;
    padding-top: 15px;
  }

  p {
    color: pink;
  }
}
</style>