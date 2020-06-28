<template>
 <div>
  <div class="d-f m-l-20 m-t-10">
   <van-icon name="arrow-left" @click="left" size="30px"/>
   <div class="settlement">订单结算</div>
  </div>
<div class="settlement1 m-t-20"></div>
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
    left(){
      this.$router.push('/toshopping')
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
.settlement{
  margin-left: 100px;
  font-size: 20px;
}
.settlement1{
  width: 100%;
  height: 1px;
  background: #b3b0b0;
}
</style>