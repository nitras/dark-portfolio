<template>
  <div>
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


  data(){
    calcheight
  },
  
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
       default: .2
     },
     speedOut:{
       default: 1
     },
     intensity:{
       default: .2
     },
     
     height:{
       default: calcheight
     },
     width:{
       default: "100%"
     },
     hover:{
       type:Boolean,
       default:true
     }
  },

  methods:{
      myComputedHeight() 
     {
        return calcheight = Math.round((this.width * (9/16)));
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
        displacementImage: this.displacementImage,
        
    });
    }
  }
};
</script>


<style lang="scss" scoped>
@import "@/scss/nitras.scss";



/*

 .project-thumb-effect{
  // width: 100% !important;
  height: auto !important;

// @include breakpoint(sm) {
//     display:none;
//   }

//   @include breakpoint(xs) {
//     display:none;
//   }
}

.project-thumb-static {
  // width: 100%;
  // height: auto !important;


  //  @include breakpoint(md) {
  // display:none;
  //  }


   @include breakpoint(lg) {
  display:none;
   }

  //     @include breakpoint(sm) {
  // display:block;
  //  }

  @include breakpoint(xs) {
  display: block;
}
}
*/
// canvas {
//   display: block;
//   width: 100%;
//   height: auto !important;
// }

</style>