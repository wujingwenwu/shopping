<template>
<!-- 轮播图 -->
 <div>
 <div>
<van-swipe :autoplay="3000">
  <van-swipe-item v-for="(item,index) in slides" :key="index">
    <img v-lazy="item.image" width="100%"/>
  </van-swipe-item>
</van-swipe>
</div>
<div class="d-f rotation j-c-c">
 <div v-for="(item,index) in category" :key="index">
 <img :src="item.image" alt="" class="item">
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

.rotation{
  width: 340px;
  height: 80px;
  background: white;
  margin-left: 20px;
  margin-top: 10px;
}
.item{
  width: 40px;
}
</style>