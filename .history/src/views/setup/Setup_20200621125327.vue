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

<van-field v-model="userInfo.nickname" label="用户名" />

<van-field v-model="userInfo.username" label="昵称" />

<van-field v-model="userInfo.gender" label="性别" />

<van-field v-model="number" label="邮箱" />

<van-field v-model="userInfo.year" label="出生年月" />  
<div>
<van-button type="primary" size="large">保存</van-button>
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
      msg:{
            type:Array,
            default:() => {}
        }
    },
   data () {
     return {
        tel: '',
      text: '',
      digit: '',
      number: '',
      password: '',
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
     setYear(){
       return this.$store.state.year
     },
     setMonth(){
       return this.$store.state.month
     },
     setDay(){
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