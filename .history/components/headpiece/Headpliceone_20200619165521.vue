<template>
 <div>
  <!-- 首页头部 -->
 <div class="background">
   <div class="d-f">
   <div class="d-f m-t-15 m-l-10" @click="click">
    <div>{{city}}</div>
    <i class="iconfont icon-xiajiantou"></i>
    </div>
  <form action="/" class="d-f">
  <van-search
    v-model="value" 
     background="#ededed"
    placeholder="请输入搜索关键词"
    @search="onSearch"
    @cancel="onCancel"
  /> <div @click="onSearch" class="m-t-15">搜索</div>
</form>
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
     city :'',
     value: '',
     
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

</style>