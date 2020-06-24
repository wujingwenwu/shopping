<template>
 <div>
   <div class="classify m-t-10">购物车</div>
   <div>
   <van-button type="primary" @click="checkAll">全选</van-button>
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