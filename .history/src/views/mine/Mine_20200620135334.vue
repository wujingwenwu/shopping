<template>
 <div>
  <div class="d-f j-c-c m-t-10">会员中心</div>
  <div class="back d-f f-d-c j-c-c a-i-c">
  <i class="iconfont icon-shezhi f-c-b"></i>
   <img :src="userInfo.avatar" alt="" class="logo">
   <div class="f-c-b f-s-18 m-t-20">欢迎您:{{userInfo.nickname}}</div>
   <div>退出登录</div>
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
    userInfo:{}
   }
   },
   components: {

   },
   methods: {
     
   },
   mounted() {
     this.$api.queryUser().then(res=>{
       this.userInfo = res.userInfo
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
.logo{
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
.icon-shezhi{
  font-size: 24px;
  right: 20px;
  position: absolute;
  top: 60px;
}
</style>