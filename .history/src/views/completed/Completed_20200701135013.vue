<template>
<!-- 已完成 -->
 <div>
 <div class="d-f m-t-10 m-l-10">
      <van-icon name="arrow-left" size="30px" color="#1989fa" @click="order" />
      <div class="f-s-18 order">全部订单</div>
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

</style>