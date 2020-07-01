<template>
 <div>
  <div class="d-f m-t-10 m-l-10">
      <van-icon name="arrow-left" size="30px" color="#1989fa" @click="whole" />
      <div class="f-s-18 whole">评价中心</div>
    </div>
    <div v-for="(item,index) in arr.">
      
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
     arr:{}
   }
   },
   components: {

   },
   methods: {
      whole(){
       this.$router.push('/whole')
     },
   },
   mounted() {
    this.arr=this.$route.query.item
    console.log(this.arr);
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
</style>