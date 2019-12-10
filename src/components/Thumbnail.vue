<template>
  <div>

    <!-- <nav_header /> -->
    <div class="container">
      <p>new height: {{newheight}}</p>
      <div class="thumbnail"  v-if="hover" ref="hover" v-bind:style="{ height: calHeight + 'px', width: width +'%' }">
      </div >
       <g-image v-if="!hover" :src="image1" :style={height:height,width:width} ></g-image>
    </div>
  </div>
</template>


<script>
import Thumbnail from "hover-effect";
import hoverEffect from 'hover-effect';

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
    width:{
         default: '100%'
    },
    hover:{
       type:Boolean,
       default:true
     }
  },

    data(){
      return{
        newheight:'100',
        newwidth:'100',
        newvalue:10
      }
    },
computed:{
  calHeight(){

//     var w = window.innerWidth
// || document.documentElement.clientWidth
// || document.body.clientWidth;

//     console.log("innner width " + w);
// //     this.newwidth = window.innerWidth;
// //          let height = this.newheight/this.newwidth;
         let xHeight = this.newheight;

//         let height = this.newheight/this.newwidth*w;


       console.log("xheight " + xHeight);
        return xHeight;
   
  },
    calwidth(){
        return this.newwidth;
    }
},
  created(){
  //  let img = new Image();
  //       img.src = this.image1;
  //       let height;
  //         img.onload =()=>{
  //                  this.newheight=img.height;
  //                  this.newwidth = img.width
  //         }
  },
  mounted() {
           this.hoverEffect();
  },
  methods: {
  //    checkFile(filename) {
  //    let img = new Image();
  //       img.src = this.image1;
  //       let height;
  //       img.onload =()=>{
  //           height = img.height/img.width*window.innerWidth;
  //           console.log(height);
  //               this.height=height;
  //       }
  //  },
   hoverEffect(){
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
  }
};
</script>

<style>


.thumbnail {
  padding-bottom: 56.25%; /* ratio 16/9 */
}

</style>