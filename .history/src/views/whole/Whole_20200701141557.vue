<template>
 <div>
    <div class="d-f m-t-10 m-l-10">
      <van-icon name="arrow-left" size="30px" color="#1989fa" @click="whole" />
      <div class="f-s-18 whole">评价中心</div>
    </div>
    <div>
       <img src="../../../server/可能要用的图片/evaluate.jpg" alt="" width="100%">
      </div>
      <div class="whole1"></div>
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
     whole(){
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
}
</style>