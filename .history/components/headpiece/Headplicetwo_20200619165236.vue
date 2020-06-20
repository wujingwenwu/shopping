<template>
 <div>
  <van-tabbar v-model="active">
  <van-tabbar-item icon="home-o">商城</van-tabbar-item>
  <van-tabbar-item icon="coupon-o">分类</van-tabbar-item>
  <van-tabbar-item icon="cart-o">购物车</van-tabbar-item>
  <van-tabbar-item icon="user-circle-o">我的</van-tabbar-item>
</van-tabbar>
 </div>
</template>

<script>
 export default {
   name:'',
   props:{

    },
   data () {
     return {
     active: 0,
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