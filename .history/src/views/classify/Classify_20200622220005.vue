<template>
 <div>
 <div class="d-f m-t-10">
 <van-icon name="arrow-left" color="#1989fa" size="30px"/>
 <div class="classify">商品分类</div>
 </div>
  <div>
  <van-tabs>
  <van-tab title="标签 1">内容 1</van-tab>
  <van-tab title="标签 2">内容 2</van-tab>
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
  margin-left: 110px;
}
</style>