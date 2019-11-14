<template>
  <section class="Diensten">
    <H2>Diensten</H2>

    <section>
      <div class="flex-grid">
        <!-- <article v-for="service in $page.services.edges" :key="service.node.id">
          <p v-html="service.node.service_title"></p>
        </article> -->

        <article
          class="dienst"
          v-for="service in $page.services.edges"
          :key="service.node.id"
        >
          <div class="col">TEST</div>
        </article>

        <div class="col">
          <!-- <h3>{{ services.node.service_title }}</h3> -->
          <p>
            Line 1 Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Officia, sapiente.
          </p>
        </div>
        <div class="col">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
            sapiente.
          </p>
        </div>
        <div class="col">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
            sapiente.
          </p>
        </div>
      </div>
    </section>
    <!-- end of sectio loop -->
  </section>
</template>

<page-query>
query Services {
  services: allService {
    edges{
      node{
        id,
        path,
        service_title,
        service_information,
        service_list,
        service_image
      }
    }
  }
}
</page-query>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/scss/nitras.scss";

.Diensten {
  // display: flex;

  //justify-content: space-between;
  //align-items: flex-end;

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
  border: 1px solid;
  margin: 1vh;
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

h3 {
  font-size: 4vh;
  text-transform: none;
}

p {
  font-size: 2rem;
  text-transform: none;
}
</style>
