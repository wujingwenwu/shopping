<template>
 <div class="m-t-15 title">
     <div class="d-f j-c-c m-t-10">
      <div class="item d-f j-c-c a-i-c f-c-b">2F</div>
      <div class="f-c-ho">新鲜水果</div>
    </div>
    <div class="item1 m-t-10">
       <div v-for="(item,index) in floor2" :key="index">
      <div :class="[{'left':(index <= 0)},{'right':(index >= 1)}]" class="d-f">
        <img :src="item.image" @click="clickItema(index)">
      </div>
    </div>
    </div>
 </div>
</template>

<script>
 export default {
   name:'',
   props:{
       floor2:{
            type:Array,
            default:() => []
        }
    },
   data () {
     return {
       id:''
   }
   },
   components: {

   },
   methods: {
      clickItema(index){
        this.$router.push({name:'Details',query:{id:this.floor2[index].goodsId}})
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
.item {
  width: 22px;
  height: 22px;
  background: red;
  border-radius: 50%;
}
.item1 {
  width: 100%;
  background: white;
}
.left {
  float: left;
  width: 40%;
}
.right {
  float: right;
  width: 40%;
 
}
img {
    width: 100%;
}
.title{
  height: 320px;
}
</style>