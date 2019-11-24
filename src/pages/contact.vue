<template>
  <Layout>
    <!-- <Header /> -->
    <section class="contact">
      <article>
        <h1>Bewijs dat je geen robot bent.</h1>
        <!-- <p>{{myData.title}}</p> -->
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quis est nesciunt magnam vero! Cum facere quod quos ipsam maiores quaerat illo assumenda rerum quidem? Eum optio ipsa dolor dolore?</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et ut fuga deserunt ipsa similique natus ipsam dicta esse quas, in molestiae explicabo accusantium ea labore quis expedita. Alias atque laboriosam rerum numquam officia? A, unde! Dolores dolor tempora quia voluptatem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quis est nesciunt magnam vero! Cum facere quod quos ipsam maiores quaerat illo assumenda rerum quidem? Eum optio ipsa dolor dolore?</p>
      </article>
    </section>
  </Layout>
</template>

<script>
import Header from "~/components/Header.vue";
// import myData from "~/about/about-me-page.yml";

export default {
  components: {
    Header
  }
  // data() {
  //   return {
  //     myData
  //   };
  // }
};
</script>

<style lang="scss" scoped>
@import "@/scss/nitras.scss";

.contact {
  padding: 4rem 2rem 5rem 2rem;
  @include breakpoint(xs) {
    padding-left: $siteMarginMobile;
  }
  padding-left: $siteMargin;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.05em;
  background: $dark;
  position: relative;
  z-index: 5;
  display: inline-flex;

  h1 {
    font-size: 9vh;
    width: $heroTitleWidth;
    @include breakpoint(sm) {
    }
    @include breakpoint(xs) {
      width: 100%;
      font-size: 8vh;
    }
  }

  p {
    font-size: 2rem;
    width: $heroTextWidth;

    @include breakpoint(xs) {
      font-size: 1.7rem;
      width: 100%;
    }
  }
}
</style>