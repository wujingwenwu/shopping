<template>
 <div>
    <div class="recommend">
    <div class="recommend1">商品推荐</div>
    <div v-for="(item,index) in recommend" :key="index">
   
  <van-swipe @change="onChange">
  <van-swipe-item>1</van-swipe-item>
  <van-swipe-item>2</van-swipe-item>
  <van-swipe-item>3</van-swipe-item>
  <van-swipe-item>4</van-swipe-item>
  <template #indicator>
    <div class="custom-indicator">
      {{ current + 1 }}/4
    </div>
  </template>
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
      current: 0,
   }
   },
   components: {

   },
   methods: {
      onChange(index) {
      this.current = index;
    },
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
</style>