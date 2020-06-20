<template>
 <div>
  <van-tabbar v-model="active">
  <van-tabbar-item icon="home-o">商城</van-tabbar-item>
  <van-tabbar-item icon="coupon-o" replace to="/classify">分类</van-tabbar-item>
  <van-tabbar-item icon="cart-o" replace to="/shoppings">购物车</van-tabbar-item>
  <van-tabbar-item icon="user-circle-o" replace to="/classify">我的</van-tabbar-item>
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