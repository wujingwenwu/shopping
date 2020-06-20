<template>
 <div>
    <div class="recommend">
    <div class="recommend1">商品推荐</div>
 
<div>
<van-swipe :loop="false" :width="135">
  <van-swipe-item v-for="(item,index) in recommend" :key="index">
  <div class="title">
  <img :src="item.image" alt="" width="100">
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
      width: 150px;
      height: 150px;
      border: 1px solid #363535;
  }
</style>