<template>
  <div>
    <Quote />
  </div>
</template>



<script>
import Quote from "@/components/Quotes";

export default {
  components: {
    Quote
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
