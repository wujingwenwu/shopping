<template>
 <div>
  <div class="d-f m-t-10 m-l-10">
   <van-icon name="arrow-left" size="30px" color="#1989fa" @click="order"/>
   <div class="f-s-18 order">全部订单</div>
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
     arr:[]
   }
   },
   components: {

   },
   methods: {
      order(){
        this.$router.push('/mine')
      } 
   },
   mounted() {
     this.$api.getMyOrder().then(res=>{
       this.arr=res.list
        console.log(res);
      }).catch(err=>{
        console.log(err);
      })
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.order{
   margin-left: 120px;
}
</style>