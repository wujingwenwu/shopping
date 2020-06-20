<template>
<!-- 首页头部 -->
 <div class="background">
 
  
 <router-view></router-view>
 <Headplicetwo></Headplicetwo>
 </div>
</template>

<script>

import Headplicetwo from '../../../components/headpiece/Headplicetwo'
 export default {
   name:'',
   props:{

    },
   data () {
     return {
     
     
   }
   },
   components: {
     Headpliceone,
     Headplicetwo
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