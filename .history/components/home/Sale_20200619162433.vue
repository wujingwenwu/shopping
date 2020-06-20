<template>
<div>
 <div class="nav d-f j-c-c">
  <div class="f-c-ho m-t-15">热销产品</div>
 </div>
 <div class="d-f m-t-10 nav3">
  <div v-for="(item,index) in hotGoods" :key="index" class="d-f">
  <div class="nav2">
  <img :src="item.image" alt="" class="nav1">
  <div class="f-s-14 nav4">{{item.name}}</div>
  <div class="d-f">
  <i class="iconfont icon-renminbi"></i>
  </div>
  </div>
  </div>
 </div>
 </div>
</template>

<script>
 export default {
   name:'',
   props:{
     hotGoods:{
            type:Array,
            default:() => []
        }
    },
   data () {
     return {

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
.nav{
    width: 100%;
}
.nav1{
    width: 175px;
    height: 150px;
}
.nav2{
    width: 185px;
    height: 200px;
    border: 1px solid #dbd7d7;
    border-right: none;
}
.nav3{
    width: 100%;
    background: white;
    flex-wrap: wrap;
}
.nav4{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 145px;
}
</style>