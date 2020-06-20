<template>
 <div>
  <div class="d-f j-c-c m-t-10">
   <div class="item d-f j-c-c a-i-c f-c-b">1F</div>
   <div class=" f-c-ho">休闲食品</div>
  </div>
  <div class="item1 d-f">
  <div v-for="(item,index) in floor1" :key="index">
  <div class="item2">
   <img :src="item.image" alt="" width="100">
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
      floor1(){
       return this.$store.state.floor1
     },
   }
 }
</script>

<style scoped lang='scss'>
.item{
    width: 22px;
    height: 22px;
    background: red;
    border-radius: 50%;
}
.item1{
    width: 100%;
    background: white;
     
}
.item2{
  flex-wrap: wrap;
  width: 300px;
}
</style>