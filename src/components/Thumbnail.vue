<template>
  <div>
    <!-- <nav_header /> -->
    <!-- <div class="container">
      <div class="project-thumbnail" v-if="hover" id="hover"></div>
      <g-image v-if="!hover" :src="image1" class="project-thumbnail"></g-image>
    </div>-->
    <div class="container">
      <div
        class="project-thumbnail"
        v-if="hover"
        id="hover"
        :key="key"
        :style="{height:height,width:width}"
      ></div>
      <g-image v-if="!hover" :src="image1" :style="{height:height,width:width}"></g-image>
    </div>
    <!-- <div class="container">
      <div class="project-thumbnail" v-if="hover" id="hover" :key="key" :style="{height:height,width:width}"></div>
      <g-image v-if="!hover" :src="image1" :style="{height:height,width:width}"></g-image>
    </div>-->
  </div>
</template>

<script>
import Thumbnail from "hover-effect";
import hoverEffect from "hover-effect";

export default {
  name: "Thumbnail",
  props: {
    image1: {
      required: true
    },
    image2: {},
    displacementImage: {},
    speedIn: {
      default: 1
    },
    speedOut: {
      default: 1
    },
    intensity: {
      default: 0.1
    },
    height: {
      default: "200px"
    },
    width: {
      default: "100%"
    },
    hover: {
      type: Boolean,
      default: true
    }
  },

  mounted() {
    if (this.hover) {
      new hoverEffect({
        parent: document.querySelector("#hover"),
        image1: this.image1,
        image2: this.image2,
        speedIn: this.speedin,
        speedOut: this.speedout,
        intensity: this.intensity,
        displacementImage: this.displacementImage
      });
    }
  },
  methods: {}
};
</script>

<style>
.project-thumbnail {
  display: block;
  width: 100%;
  height: auto !important;
}
canvas {
  display: inline-block;
  height: auto;
  width: 100%;
}
</style>