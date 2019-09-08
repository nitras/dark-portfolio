<template>
  <Layout>
    <section class="projects">
      <article
        @click="goTo($event, project.node.path)"
        class="project"
        v-for="project in $page.projects.edges"
        :key="project.node.id"
      >
        <g-image
          class="project-thumbnail"
          :src="project.node.thumbnail.src"
          :alt="project.node.title"
        ></g-image>
        <ProjectMeta
          :title="project.node.title"
          :categories="project.node.categories"
          :year="project.node.year"
        />
      </article>
    </section>
    <Diensten />
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
        categories
        template
        gallery
      }
    }
  }
}
</page-query>

<script>
import { TimeLineMax, TweenMax, Back, Elastic, Expo, ScrollTo } from "gsap";

import ProjectMeta from "@/components/ProjectMeta";
import Layout from "~/layouts/DefaultWithHero.vue";
import LayoutReg from "~/layouts/Default.vue";

import Diensten from "~/components/Diensten.vue";

export default {
  components: {
    ProjectMeta,
    Layout: Layout,
    Diensten
  },
  metaInfo: {
    titleTemplate: require("../data/theme.json").site_name
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
      TweenMax.to(window, 0.33, {
        scrollTo: { y: finalPosition, autoKill: false },
        ease: Sine.easeOut,
        onComplete: this.pushRoute,
        onCompleteParams: [route]
      });
      // TweenMax.to(window, 0.77, { y: finalPosition, ease: Elastic.easeOut });
      // Now, navigate to the project page

      // setTimeout(() => {
      //   this.$router.push(route);
      // }, 350);
    },
    pushRoute(route) {
      //TweenMax.staggerTo(".line", 0.3, { y: 20, opacity: 0 }, 0.16);
      this.$router.push(route);
    }
  }
};
</script>

<style lang="scss" scoped>
.projects {
  margin: 0 2rem;
}
.project {
  width: 100%;
  margin-bottom: 4rem;
  cursor: pointer;
}
.project-thumbnail {
  display: block;
  width: 100%;
}
</style>
