<template>
 <div>
  <div class="d-f m-l-10 m-t-10">
  <van-icon name="arrow-left" size="30px"  color="#07c160" @click="clickz"/>
  <div class="f-s-18 setup">个人资料</div>
  </div>
  <div class="setup1"></div>
  <div class="m-t-10 m-l-10">编辑个人信息</div>
  <div class="setup1"></div>
  <img :src="userInfo.avatar" alt="">
  <!-- <van-field :name="userInfo.avatar" label="文件上传">
  <template #input>
  <img :src="userInfo.avatar" alt="">
    <van-uploader />
  </template>
</van-field> -->
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
</style>