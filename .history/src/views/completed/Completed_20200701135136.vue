<template>
<!-- 已完成 -->
 <div>
 <div class="d-f m-t-10 m-l-10">
      <van-icon name="arrow-left" size="30px" color="#1989fa" @click="completed" />
      <div class="f-s-18 completed">已完成</div>
    </div>
   <div>
   <van-tabs v-model="active" swipe-threshold="5">
  <van-tab title="全部"></van-tab>
  <van-tab title="待支付"></van-tab>
  <van-tab title="代发货"></van-tab>
  <van-tab title="代收货"></van-tab>
  <van-tab title="已完成"></van-tab>
</van-tabs>
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
     active:4
   }
   },
   components: {

   },
   methods: {
     completed(){
         this.$router.push('/mine')
     }
   },
   mounted() {

   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.completed {
  margin-left: 120px;
}
</style>