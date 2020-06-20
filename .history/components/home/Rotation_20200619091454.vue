<template>
<!-- 轮播图 -->
 <div>
<van-swipe :autoplay="3000">
  <van-swipe-item v-for="(item, index) in slides" :key="index">
    <img v-lazy="item.image" />
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
       return this.$store.state.recommend
     }
   }
 }
</script>

<style scoped lang='scss'>

</style>