<template>
 <div>
    <div class="d-f m-t-10 m-l-10">
      <van-icon name="arrow-left" size="30px" color="#1989fa" @click="whole" />
      <div class="f-s-18 whole">评价中心</div>
    </div>
    <div>
       <img src="../../../server/可能要用的图片/evaluate.jpg" alt="" width="100%">
      </div>
      <div class="whole1">
      <van-tabs v-model="active">
  <van-tab title="待评价" >
    <div v-for="(item,index) in arr.order_list" :key="index">
    <img :src="item.image_path" alt="">
    </div>
  </van-tab>
  <van-tab title="已评价"></van-tab>
  
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
     active:0,
     arr:[]
   }
   },
   components: {

   },
   methods: {
     whole(){
       this.$router.push('/mine')
     }
   },
   mounted() {
         this.$api
      .getMyOrder()
      .then(res => {
        this.arr = res.list
        
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.whole{
  margin-left: 120px;
}
.whole1{
  width: 300px;
  height: 50px;
  background: white;
  border-radius: 5px;
position: absolute;
  top: 35%;
  left: 10%;
  box-shadow: 1px 5px 30px ;
}
</style>