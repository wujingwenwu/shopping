<template>
 <div>
   <div class="classify m-t-10">购物车</div>
   <div v-if="nickname=== null">
    <div>
    <img src="../../../server/可能要用的图片/loading.gif" alt="" width="100%">
    </div>
   </div>

 <div v-else>
   <div>
   <van-button type="primary" @click="checkAll">全选</van-button>
   </div>
   <div>
   <van-checkbox-group v-model="result" ref="checkboxGroup">
  <van-checkbox name="a">复选框 a</van-checkbox>
  <van-checkbox name="b">复选框 b</van-checkbox>
  <van-checkbox name="c">复选框 c</van-checkbox>
</van-checkbox-group>
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
      result: [],
      nickname:''
   }
   },
   components: {

   },
   methods: {
      classify(){
        this.$router.push('/')
      },
       checkAll() {
      this.$refs.checkboxGroup.toggleAll(true);
    },
    toggleAll() {
      this.$refs.checkboxGroup.toggleAll();
    },
   },
   mounted() {
     this.nickname = localStorage.('nickname')
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.classify{
  margin-left: 150px;
  font-size: 18px;
}
</style>