<template>
 <div>
  <div class="d-f m-l-10 m-t-10">
  <van-icon name="arrow-left" size="30px"  color="#07c160" @click="clickz"/>
  <div class="f-s-18 setup">个人资料</div>
  </div>
  <div class="setup1"></div>
  <div class="m-t-10 m-l-10">编辑个人信息</div>
  <div class="setup1"></div>
  <van-field name="uploader" label="文件上传">
  <template #input>
    <van-uploader v-model="uploader" />
  </template>
</van-field>
 </div>
</template>

<script>
 export default {
   name:'',
   props:{

    },
   data () {
     return {
      uploader: [{ url: 'https://img.yzcdn.cn/vant/leaf.jpg' }],
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