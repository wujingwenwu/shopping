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
 <div class=" m-t-10">
 <img :src="item.image" alt="" class="item">
 <div class="f-s-14 m-l-10">{{item.mallCategoryName}}</div>
 </div>
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
     },
    
     
   }
 }
</script>

<style scoped lang='scss'>

.rotation{
  width: 350px;
  height: 100px;
  background: white;
  margin-left: 12px;
  margin-top: 10px;
  border-radius: 10px;
}
.item{
  width: 50px;
  padding: 0px 10px;
}
</style>