<template>
  <Layout>
    <div>
      <Hero class="test" v-if="['home'].indexOf($route.name) > -1" />
      <section class="projects">
        <article
          @click="goTo($event, project.node.path)"
          class="project"
          v-for="project in $page.projects.edges"
          :key="project.node.id"
        >
          <Thumbnail
            class="project-thumbnail"
            :image1="project.node.thumbnail.src"
            :image2="project.node.thumbnail_hover.src"
            :displacementImage="project.node.displacement_image.src"
            :hover="true"
            height="100%"
            width="50vmax"
          ></Thumbnail>

          <!-- <g-image
            class="project-thumbnail"
            :src="project.node.thumbnail.src"
            :alt="project.node.title"
          ></g-image>-->

          <ProjectMeta
            :title="project.node.title"
            :categories="project.node.categories"
            :year="project.node.year"
          />
        </article>
      </section>
    </div>
  </Layout>
</template>

<page-query>
query Projects {
  projects: allProject {
    edges {
      node { 
        id
        path
        title
        year
        thumbnail
        thumbnail_hover
        displacement_image
        categories
        template
        gallery
      }
    }
  }
}
</page-query>

<script>
import Layout from "~/layouts/Default.vue";
import ProjectMeta from "~/components/ProjectMeta";
import Thumbnail from "~/components/Thumbnail";
import Hero from "~/components/Hero.vue";

// import Img1 from "../../assets/Img21.jpg";
// import Img2 from "../../assets/Img22.jpg";
// import Img3 from "../../assets/displacement/6.jpg";

// import Diensten from "~/components/Diensten.vue";

export default {
  components: {
    ProjectMeta,
    Layout: Layout,
    Hero,
    Thumbnail
  },
  // data() {
  //   return {
  //     animation: {
  //       image1: Img1,
  //       image2: Img2,
  //       speedIn: 1,
  //       speedOut: 1,
  //       intensity: 1,
  //       displacementImage: Img3
  //     }
  //   };
  // },

  metaInfo: {
    titleTemplate: require("../data/theme.json").site_name
  },
  mounted() {
    TweenMax.staggerFrom(
      ".project",
      0.3,
      { y: 77, opacity: 0, delay: 0.11 },
      0.16
    );
  },
  methods: {
    goTo(event, route) {
      const distanceScrolled = window.pageYOffset;
      const elementPosition = event.target.getBoundingClientRect().top;
      const totalOffset = distanceScrolled + elementPosition;
      const finalPosition = totalOffset - 167;

      // Scroll window so that the thumbnail is 12rem from the
      // top of the browser window, this will make a seamless transition.
      //window.scrollTo({ top: finalPosition, behavior: "smooth" });

      TweenMax.to(".test", 0.2, { y: -20, opacity: 0 });
      TweenMax.to(window, 0.33, {
        scrollTo: { y: finalPosition, autoKill: false },
        ease: Sine.easeOut,
        onComplete: this.pushRoute,
        onCompleteParams: [route]
      });
    },
    pushRoute(route) {
      //TweenMax.staggerTo(".line", 0.3, { y: 20, opacity: 0 }, 0.16);

      TweenMax.to(
        ".project",
        0.55,
        {
          opacity: 0,
          onComplete: this.goNextPage,
          onCompleteParams: [route],
          delay: 0.25
        },
        0.16
      );
    },
    goNextPage(route) {
      // this.$emit("someMethod");
      this.$router.push(route);
    }
    // someMethod() {
    //   this.$hero.someMethod();
    // }
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/nitras.scss";

.projects {
  @include breakpoint(xs) {
    margin: 0 1rem;
  }
  margin: 0 3rem;
}
.project {
  width: 100%;
  margin-bottom: 4rem;
  cursor: pointer;
}

.project-thumbnail {
  display: block;
  width: 100%;
  height: "50vmax";
}
</style>
