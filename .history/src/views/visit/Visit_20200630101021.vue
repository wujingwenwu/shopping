<template>
 <div>
   <div class="d-f m-t-10 m-l-10">
    <van-icon name="arrow-left" size="30px" color="#1989fa" @click="clickItems"/>
     <div class="f-s-18 visit">最近游览</div>
   </div>
   <div class="visit3 m-t-10"></div>
   <div v-if="ars<=0">
   <div class="visit1">您还没有最近游览记录</div>
   </div>
   <div v-else>
    <div v-for="(item,index) in ars" :key="index">
    <div class="m-t-20 m-l-10 d-f">
     <div class="visit2">
     <img :src="item.image" alt="" width="80">
     </div>
     <div>
     <div class="m-l-10">{{item.goodsName}}</div>
     <div class="d-f m-t-20">
      <div class=" f-c-ho">￥{{item.price}}</div>
     </div>
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

    },
   data () {
     return {
       nickname:'',
       ars:''
   }
   },
   components: {

   },
   methods: {
    clickItems(){
      this.$router.push('/mine')
    }
   },
   mounted() {
      this.nickname=localStorage.getItem('nickname')
      this.ars=JSON.parse(localStorage.getItem('views'))
      console.log(this.ars);
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.visit{
  margin-left: 120px;
}
.visit1{
  color: aqua;
}
.visit2{
  width: 85px;
  height: 85px;
  border: 1px solid #d6d3d3;
}
.visit3{
  width: 100%;
  height: 1px;
  background: rgb(224, 220, 220);
}
</style>