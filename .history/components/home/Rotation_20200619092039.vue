<template>
<!-- 轮播图 -->
 <div>
<van-swipe :autoplay="3000">
  <van-swipe-item v-for="(item, index) in recommend" :key="index">
    <img v-lazy="item.image" width="100%" height="100%"/>
  </van-swipe-item>
</van-swipe>
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
     recommend(){
       return this.$store.state.slides
     }
   }
 }
</script>

<style scoped lang='scss'>

</style>