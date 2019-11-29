<template>
  <div>
    hello
    <!-- <nav_header /> -->
    <div class="container">
      <div  v-if="hover" ref="hover" :style={height:height,width:width}>
      </div >
       <g-image v-if="!hover" :src="image1" :style={height:height,width:width} ></g-image>
    </div>
  </div>
</template>

<script>
//import Thumbnail from "hover-effect";
import hoverEffect from 'hover-effect' 

export default {
  name:"Thumbnail",
    props:{
      image1:{
       required: true
     },
      image2:{
     },
      displacementImage:{
     },
     speedIn:{
       default: 1
     },
     speedOut:{
       default: 1
     },
     intensity:{
       default: 0.1
     },
     height:{
       default: '600px'
     },
     width:{
       default: '100%'
     },
     hover:{
       type:Boolean,
       default:true
     }
  },
  
  mounted() {
    if(this.hover){
        new hoverEffect({
        parent: this.$refs.hover,
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

