<template>
 <div>
  <div class="d-f m-l-10 m-t-10">
  <van-icon name="arrow-left" size="30px"  color="#07c160" @click="clickz"/>
  <div class="f-s-18 setup">个人资料</div>
  </div>
  <div class="setup1"></div>
  <div class="m-t-10 m-l-10">编辑个人信息</div>
  <div class="setup1"></div>
  <div class="d-f j-c-s-b">
  <div class="sit">头像</div>
  <div>
  <img :src="userInfo.avatar" alt="" class="logo3">
  <van-uploader />
  </div>
  </div>
 <div class="setup1"></div>

<van-field v-model="text" label="文本" />

<van-field v-model="tel" type="tel" label="手机号" />

<van-field v-model="digit" type="digit" label="整数" />

<van-field v-model="number" type="number" label="数字" />

<van-field v-model="password" type="password" label="密码" />  
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
    clickz(){
        this.$router.push('/mine')
    }
   },
   mounted() {
     this.$api.saveUser({
        gender:this.gender,
        year:this.year,
        month:this.month,
        day:this.day,
        id:this.id,
        nickname:this.nickname
     }).then(res=>{
         console.log(res);
     }).catch(err=>{
         console.log(err);
     })
   },
   watch: {

   },
   computed: {
       userInfo(){
       return this.$store.state.userInfo
     },
   }
 }
</script>

<style scoped lang='scss'>
.setup{
    margin-left: 120px;
}
.setup1{
    width: 100%;
    height: 1px;
    background: #eee9e9;
    margin-top: 10px;
}
.logo3{
    width: 50px;
    height: 50px;
   border-bottom-left-radius: 20px;
   border-bottom-right-radius: 20px;
   margin-right: 10px; 
   margin-top: 10px;
}
.sit{
    margin-top: 30px;
}
</style>