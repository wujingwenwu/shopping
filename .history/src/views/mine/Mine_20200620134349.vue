<template>
 <div>
  <div class="d-f j-c-c m-t-10">会员中心</div>
  <div class="back"></div>
  <img :src="userInfo.avatar" alt="">
 </div>
</template>

<script>
 export default {
   name:'',
   props:{

    },
   data () {
     return {
    userInfo:{}
   }
   },
   components: {

   },
   methods: {
     
   },
   mounted() {
     this.$api.queryUser().then(res=>{
       this.userInfo = res.data
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

.back{
  width: 98%;
  height: 300px;
  background: rgb(227, 12, 123);
  margin-left: 3px;
  margin-top: 20px;
}
</style>