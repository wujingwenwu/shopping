<template>
 <div>
  <div class="d-f m-t-10 m-l-10">
   <van-icon name="arrow-left" size="30px" color="#1989fa" @click="order"/>
   <div class="f-s-18 order">全部订单</div>
  </div>
  <div v-if="arr.length<=0" class="f-s-18 d-f">
  您还没有过订单，可以去:<div class=" f-c-ho">添加</div>
  </div>
  <div v-else>
  <div  class="back">
   <div v-for="(item,index) in asd" :key="index">
    <div class="order1">
     <div>{{}}</div>
    </div>
   </div>
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
     arr:[],
     asd:[]
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
       this.arr=res.list.order_list
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
.order1{
  width: 80%;
  height: 400px;
  background: white;
}
.back{
  width: 100%;
  background: rgb(219, 217, 217);
}
</style>