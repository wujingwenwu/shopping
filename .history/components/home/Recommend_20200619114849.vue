<template>
 <div>
    <div class="recommend">
    <div class="recommend1">商品推荐</div>
 
<div>
<van-swipe :loop="false" :width="135" :show-indicators="false">
  <van-swipe-item v-for="(item,index) in recommend" :key="index">
  <div class="title d-f a-i-c f-d-c">
  <img :src="item.image" alt="" width="80" height="100">
  <div>{{item.goodsName}}</div>
  </div>
  </van-swipe-item>
 
</van-swipe>

    </div>
    </div>
 </div>
</template>

<script>
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
.recommend{
    width: 98%;
    height: 200px;
    background: white;
    margin-top: 30px;
    margin-left: 4px;
}
.recommend1{
    padding: 10px 15px;
}
 .custom-indicator {
    position: absolute;
    right: 5px;
    bottom: 5px;
    padding: 2px 5px;
    font-size: 12px;
    background: rgba(0, 0, 0, 0.1);
  }
  .title{
      width: 133px;
      height: 150px;
      border: 1px solid #e4dede;
      border-right: none;
  }
</style>