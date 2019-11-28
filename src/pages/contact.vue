<template>
  <Layout>
    <!-- <Header /> -->
    <section class="contact">
      <article>
        <header>
          <h1>{{$page.contactInfo.title}}</h1>
        </header>
        <p>{{$page.contactInfo.information}}</p>
        <!-- <p>{{myData.title}}</p> -->
      </article>
    </section>
  </Layout>
</template>





<page-query>
query 
{
  contactInfo:  contact(path: "/contact/contact-page") 
  {
    id
    title
    information
  }
}
</page-query>


<script>
import Header from "~/components/Header.vue";
import Thumbnail from "~/components/Thumbnail";
// import myData from "~/about/about-me-page.yml";

export default {
  components: {
    Header,
    Thumbnail
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
      line-height: $lineheightWeb;
    }

    @include breakpoint(xs) {
      width: 100%;
      font-size: 8vh;
      line-height: $lineheightWeb;
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