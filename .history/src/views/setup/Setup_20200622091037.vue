<template>
<!-- 编辑个人信息 -->
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

<van-field v-model="userInfo.username" label="用户名" />

<van-field v-model="userInfo._id" label="昵称" />

<van-field v-model="userInfo.gender" label="性别" />

<van-field v-model="number" label="邮箱" />

<van-field v-model="msg" label="出生年月" />  
<div>
<van-button type="primary" size="large" @click="clickge">保存</van-button>
</div>
<div>
<van-button type="default" size="large">取消</van-button>
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
        tel: '',
      text: '',
      digit: '',
      number: '',
      password: '',
      msg:'',
      
     
   }
   },
   components: {

   },
   methods: {
    clickz(){
        this.$router.push('/mine')
    },
    clickge(){
      this.$api.saveUser({
        gender:this.userInfo.gender,
        year:this.userInfo.year,
        month:this.userInfo.month,
        day:this.userInfo.day,
        _id:this.userInfo._id,
        nickname:this.userInfo.nickname
     }).then(res=>{
         console.log(res);
     }).catch(err=>{
         console.log(err);
     })
    }
   },
   mounted() {
    
     this.msg=`${this.year}年${this.month}月${this.day}日`
   },
   watch: {

   },
   computed: {
       userInfo(){
       return this.$store.state.userInfo
     },
     year(){
       return this.$store.state.year
     },
     month(){
       return this.$store.state.month
     },
     day(){
       return this.$store.state.day
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