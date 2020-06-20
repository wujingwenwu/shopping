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
 <div v-for="(item,index) in category" :key="index">
 <img :src="item.image" alt="" width="80px">
 <div>{{item.mallCategoryName}}</div>
 </div>
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
     },
      category(){
       return this.$store.state.category
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
  height: 80px;
  background: white;
  margin-left: 20px;
  margin-top: 10px;
}
</style>