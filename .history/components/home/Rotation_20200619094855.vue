<template>
<!-- 轮播图 -->
 <div>
 <div>
<van-swipe :autoplay="3000">
  <van-swipe-item v-for="(item,index) in slides" :key="index">
    <img v-lazy="item.image"/>
  </van-swipe-item>
</van-swipe>
</div>
<div class="d-f rotation">

</div>
 </div>
</template>

<script>
import Vue from 'vue';
import { Lazyload } from 'vant';
Vue.use(Lazyload);
 export default {
   name:'',
   props:{

    },
   data () {
     return {
     
   }
   },
   components: {

   },
   methods: {
     
   },
   mounted() {

   },
   watch: {

   },
   computed: {
     slides(){
       return this.$store.state.slides
     }
   }
 }
</script>

<style scoped lang='scss'>
img {
  width: 100%;
}
.rotation{
  width: 340px;
  height: 100px;
  background: white;
  margin-left: 20px;
}
</style>