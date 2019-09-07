<template>
  <layout>
    <section class="container">
      <h1>
        <span class="digit1">*</span>
        <span class="digit1">4</span>
        <span class="digit2">0</span>
        <span class="digit3">4</span>
      </h1>
      <p>Pagina kon niet worden gevonden, maar maak gerust een keuze hieronder.</p>
    </section>
  </layout>
</template>

<script>
export default {
  methods: {
    myFunction: function(event) {
      // `this` inside methods point to the Vue instance
      console.log("hey");
      // `event` is the native DOM event
      //alert(event.target.tagName);
    }
  },
  mounted() {
    //create a timeline that calls myFunction() when it completes
    var tl = new TimelineMax({
      repeat: -1,
      repeatDelay: 2,
      onComplete: this.myFunction
    });
    var digitTweenTime = 0.35;
    tl.from(".digit1", digitTweenTime, { opacity: 0 }, "-=0.25")
      .from(".digit2", digitTweenTime, { opacity: 0 }, "-=0.25")
      .from(".digit3", digitTweenTime, { opacity: 0 }, "-=0.25");
  }
};
</script>

<style lang="scss" scoped>
.container {
  margin: 0 2rem;

  h1 {
    font-size: 17rem;
    padding: 0;
    margin: 0;
  }
  p {
    font-size: 2rem;
  }
}
</style>