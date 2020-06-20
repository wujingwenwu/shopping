<template>
<div>
 <div class="nav d-f j-c-c">
  <div class="f-c-ho m-t-15">热销产品</div>
 </div>
 <div>
  <div v-for="(item,index) in hotGoods" :key="index">
  <div>
  <img :src="item.image" alt="" width="49%">
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
</style>