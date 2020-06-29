<template>
 <div>
 
   <div class="d-f m-t-15">
      <div @click="clicks">
        <i class="iconfont icon-zuojiantou"></i>
      </div>
      <div class="city">我的收藏</div>
    </div>
  
   <div class="d-f">
    <div class="collection">
     <img :src="arr.image" alt="" width="80">
    </div>
    <div>
    <div>{{arr.name}}</div>
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
     arr:{}
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
     this.arr= JSON.parse(localStorage.getItem("obj"))
     console.log(this.arr);
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
.collection{
  width: 85px;
  height: 85px;
  border: 1px solid #d4d2d2;
}
</style>