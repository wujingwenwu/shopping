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

<img :src="obj.PICTURE_ADDRESS" alt="">


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
      advertesPicture(){
       return this.$store.state.advertesPicture
     },
     
   }
 }
</script>

<style scoped lang='scss'>

.rotation{
  width: 350px;
  height: 80px;
  background: white;
  margin-left: 20px;
  margin-top: 10px;
}
.item{
  width: 50px;
  padding: 0px 10px;
}
</style>