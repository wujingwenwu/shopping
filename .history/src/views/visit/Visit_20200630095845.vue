<template>
 <div>
   <div class="d-f m-t-10 m-l-10">
    <van-icon name="arrow-left" size="30px" color="#1989fa" @click="clickItems"/>
     <div class="f-s-18 visit">最近游览</div>
   </div>
   <div v-if="ars.length<=0">
   
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
       nickname:'',
       ars:''
   }
   },
   components: {

   },
   methods: {
    clickItems(){
      this.$router.push('/mine')
    }
   },
   mounted() {
      this.nickname=localStorage.getItem('nickname')
      this.ars=JSON.parse(localStorage.getItem('views'))
      console.log(this.ars);
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.visit{
  margin-left: 120px;
}
</style>