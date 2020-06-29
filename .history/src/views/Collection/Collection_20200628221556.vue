<template>
 <div>
 
   <div class="d-f m-t-15">
      <div @click="clicks">
        <i class="iconfont icon-zuojiantou"></i>
      </div>
      <div class="city">我的收藏</div>
    </div>
   <div v-for="(item,index) in arr" :key="index">
   <div class="d-f">
    <div>
     <img :src="item.image_path" alt="">
    </div>
    <div>{{item.name}}</div>
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
     arr:[]
   }
   },
   components: {

   },
   methods: {
    clicks(){
        this.$router.push('/mine')
    }
   },
   mounted() {
     this.$api.collection().then(res=>{
         this.arr=res.data.List(index)
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
.city {
  font-size: 18px;
  margin-left: 120px;
}
.icon-zuojiantou {
  font-size: 30px;
  margin-left: 10px;
}
</style>