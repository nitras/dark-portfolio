<template>
  <Layout>
    <section class="projects">
      <article
        @click="goTo($event, service.node.path)"
        class="project"
        v-for="service in $page.services.edges"
        :key="service.node.id"
      >
        <p>{{ service.node.id }}</p>
      </article>
    </section>
  </Layout>
</template>


<script>
export default {};
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
