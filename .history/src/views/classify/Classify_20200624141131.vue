<template>
<!-- 商品分类 -->
 <div>
 <div class="classify m-t-10">商品分类</div>

  <div>
  <van-tabs>
  <van-tab title="新鲜水果">内容 1</van-tab>
  <van-tab title="热带水果">内容 2</van-tab>
  <van-tab title="时令水果">内容 3</van-tab>
  <van-tab title="苹果/梨">内容 4</van-tab>
   <van-tab title="柑橘橙柚">内容 4</van-tab>
</van-tabs>
  </div>
  <div>
  <van-sidebar v-model="activeKey">
  <van-sidebar-item title="中外名酒" />
  <van-sidebar-item title="营养奶品" />
  <van-sidebar-item title="食品饮料" />
  <van-sidebar-item title="个人护理" />
</van-sidebar>
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
       activeKey: 0,
        
      activeId: 1,
    
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