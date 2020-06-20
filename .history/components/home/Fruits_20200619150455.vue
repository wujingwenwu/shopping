<template>
 <div>
     <div class="d-f j-c-c m-t-10">
      <div class="item d-f j-c-c a-i-c f-c-b">1F</div>
      <div class="f-c-ho">休闲食品</div>
    </div>
    <div class="item1">
       <div v-for="(item,index) in floor1" :key="index">
      <div :class="[{'left':(index <= 0)},{'right':(index >= 1)}]">
        <img :src="item.image"/>
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

</style>