<template>
 <div>
    <div class="m-t-10" @click="clickItems">
     <i class="iconfont icon-zuojiantou-tianchong m-l-10"></i>
    </div>
    <div>
       <div>
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
  <van-swipe-item><img :src="obj.image" alt=""></van-swipe-item>
  <van-swipe-item><img :src="obj." alt=""></van-swipe-item>

</van-swipe>
 
    </div>
 
    </div>
 </div>
</template>

<script>
import Vue from "vue";
import { Lazyload } from "vant";
Vue.use(Lazyload);
 export default {
   name:'',
   props:{

    },
   data () {
     return {
     ids:'',
     obj:{}
   }
   },
   components: {

   },
   methods: {
      clickItems(){
        this.$router.push('/')
      }
   },
   mounted() {
     this.ids= this.$route.query.id;
     console.log(this.ids);
     this.$api.goods(this.ids).then(res=>{
       this.obj = res.goods.goodsOne
       console.log(res);
     }).catch(err=>{
       console.log(err);
     })


   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.icon-zuojiantou-tianchong {
  font-size: 30px;

}
</style>