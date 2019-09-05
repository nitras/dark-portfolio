<template>
  <g-link :to="{ name: 'home' }" class="home-link">
    <img
      svg-inline
      src="../../static/uploads/logo-uw-grafisch-ontwerper.svg"
      class="logo"
      :alt="data.site_name"
    />
  </g-link>
</template>

<script>
import data from "@/data/theme.json";
export default {
  data() {
    return {
      data
    };
  }
};
</script>

<style lang="scss" scoped>
a.home-link {
  border-bottom: none !important;
}
</style>