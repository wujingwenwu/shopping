<template>
 <div>
   <div class="d-f m-t-10 m-l-10">
    <van-icon name="arrow-left" size="30px" color="#1989fa" @click="clickItems"/>
     <div class="f-s-18 visit">最近游览</div>
   </div>
   <div v-if="ars<=0">
   <div class="visit1">您还没有最近游览记录</div>
   </div>
   <div v-else>
    <div v-for="(item,index) in ars" :key="index">
     <div>
     <img :src="item" alt="">
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
.visit1{
  color: aqua;
}
</style>