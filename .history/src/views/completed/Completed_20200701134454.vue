<template>
<!-- 已完成 -->
 <div>
   <div>
   <van-tabs v-model="active" class="completed" scrollspy=false>
  <van-tab title="全部">内容 1</van-tab>
  <van-tab title="待支付">内容 2</van-tab>
  <van-tab title="代发货">内容 3</van-tab>
  <van-tab title="代收货">内容 4</van-tab>
  <van-tab title="已完成">内容 4</van-tab>
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