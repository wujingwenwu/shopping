<template>
 <div>
    <div class="recommend">
    <div class="recommend1">商品推荐</div>
    <div v-for="(item,index) in recommend" :key="index">
     <van-grid>
  <van-grid-item icon="photo-o" text="文字" />
  <van-grid-item icon="photo-o" text="文字" />
 
</van-grid>
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
       recommend(){
       return this.$store.state.recommend
     }
    
   }
 }
</script>

<style scoped lang='scss'>
.recommend{
    width: 98%;
    height: 200px;
    background: white;
    margin-top: 30px;
    margin-left: 4px;
}
.recommend1{
    padding: 10px 15px;
}
</style>