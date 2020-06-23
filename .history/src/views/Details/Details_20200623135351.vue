<template>
 <div>
    <div class="m-t-10" @click="clickItems">
     <i class="iconfont icon-zuojiantou-tianchong m-l-10"></i>
    </div>
    <div>
       <div>
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(item,index) in ids" :key="index">
          <img v-lazy="item.image" width="100%" />
        </van-swipe-item>
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
     ids:''
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