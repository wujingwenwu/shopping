<template>
<!-- 商品分类 -->
 <div>
 <div class="classify m-t-10">商品分类</div>

  <div>
  <van-tabs>
  <van-tab title="新鲜水果">内容 1</van-tab>
  <van-tab title="热带水果">内容 2</van-tab>
  <van-tab title="标签 3">内容 3</van-tab>
  <van-tab title="标签 4">内容 4</van-tab>
</van-tabs>
  </div>
  <div>
 <van-tree-select
 
  :active-id.sync="activeId"
  :main-active-index.sync="activeIndex"
/>
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
      
        
      activeId: 1,
      activeIndex: 0,
   }
   },
   components: {

   },
   methods: {
      classify(){
        this.$router.push('/')
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
.classify{
  margin-left: 150px;
  font-size: 18px;
}
</style>