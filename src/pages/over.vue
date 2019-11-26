<template>
  <Layout>
    <section class="about">
      <!-- <article v-for="myinfo in $page.aboutMe.edges" :key="myinfo.node.id">
        <header>
          <h1>{{ myinfo.node.title }}</h1>
          <p>{{ myinfo.node.information }}</p>
        </header>
      </article>-->
      <header>
        <h1>{{$page.aboutMe.title}}</h1>
      </header>
      <article>
        <p>{{$page.aboutMe.timeToRead}}</p>
        <p>{{$page.aboutMe.information}}</p>

        <section class="services">
          <header>
            <H1>Services</H1>
          </header>
          <ul v-for="service in $page.aboutMe.service_list" :key="$page.aboutMe.id">
            <li>{{service}}</li>
          </ul>
        </section>
      </article>
      <!-- <h1>{{$page.mypersonaldata.title}}</h1> -->
    </section>
  </Layout>
</template>


<page-query>
query 
{
  aboutMe: about(path: "/about/about-me-page") 
  {
    id
    title
    service_list
    information
    timeToRead
  }
}
</page-query>

<script>
// import myData from "~/about/about-me-page.yml";

export default {
  // data() {
  //   return {
  //     myData
  //   };
  // }
};
</script>

<style lang="scss" scoped>
@import "@/scss/nitras.scss";

.about {
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

  h1 {
    font-size: 9vh;
    width: $heroTitleWidth;
    @include breakpoint(sm) {
      line-height: 8vh;
    }
    @include breakpoint(xs) {
      width: 100%;
      font-size: 8vh;
      line-height: 8vh;
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
