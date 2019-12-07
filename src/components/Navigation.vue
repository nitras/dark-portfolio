<template>
  <nav class="navigation">
    <!-- <div class="contact">
      <g-link class="link" :href="`mailto:${data.email}`">Contact</g-link>
    </div>-->
    <tasty-burger-button
      class="burger"
      :type="buttonType"
      :active="isActive"
      :size="size"
      :color="color"
      :active-color="activeColor"
      v-on:toggle="onToggle"
    />

    <div v-if="isActive">hello</div>
    <!-- <ul>
      <li>
        <g-link to="/">Werk</g-link>
      </li>
      <li>
        <g-link to="/diensten/">Diensten</g-link>
      </li>
      <li>
        <g-link to="/over/">About</g-link>
      </li>
      <li>
        <g-link to="/contact/">Contact</g-link>
      </li>
    </ul>-->
  </nav>
</template>

<script>
// import {TastyBurgerButton} from 'vue-tasty-burgers';
// import 'vue-tasty-burgers/dist/vue-tasty-burgers.css';

// export default {
//   data() {
//     return {
//       buttonType: "elastic-r",
//       isActive: false,
//       size: "s",
//       color: "white",
//       activeColor: "rgb(244, 131, 114)",
//       isActive: false
//     };
//   },
//   components: {
//     "tasty-burger-button": TastyBurgerButton
//   },
//   methods: {
//     onToggle(active) {
//       // Toggle menu
//       this.isActive = !this.isActive;
//       //alert(this.isActive);
//     }
//   }
// };
</script>

<style lang="scss" scoped>
@import "@/scss/nitras.scss";
.burger {
  z-index: 404040;
}
ul {
  list-style: none;
  li {
    margin-right: 20px;
  }
}
</style>
