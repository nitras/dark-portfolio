<template>
  <section class="Diensten">
    <header>
      <H2>Diensten</H2>
      <div class="flex-grid">
        <div class="col">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, sapiente.</p>
        </div>
        <div class="col">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, sapiente.</p>
        </div>
        <div class="col">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, sapiente.</p>
        </div>
      </div>
    </header>
  </section>
</template>

<script>
import Logo from "@/components/Logo";
import data from "@/data/theme.json";

export default {
  components: {
    Logo
  },
  name: "Header",
  data() {
    return {
      data
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/nitras.scss";
.Diensten {
  display: flex;

  justify-content: space-between;
  align-items: flex-end;
  padding: 4rem 2rem 5rem 2rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  z-index: 100;
  opacity: 1;
  mix-blend-mode: difference;
  transition: opacity 0.35s ease;
}

.flex-grid {
  display: flex;
  @include breakpoint(xs) {
    display: block;
    flex-direction: column;
  }
}
.col {
  flex: 1;
}
/*
@media screen and (min-width: 320px && max-width:757px) {
  .Diensten {
    display: flex;
  }
  .flex-grid {
    flex-direction: column;
  }
}
*/

h2 {
  font-size: 9vh;
  text-transform: none;
}

p {
  font-size: 2rem;
  text-transform: none;
}
</style>