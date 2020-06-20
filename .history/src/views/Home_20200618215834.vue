<template>
 <div class="background">
 <Rotation></Rotation>
 </div>
</template>

<script>
import Rotation from '../../components/home/Rotation'
 export default {
   name:'',
   props:{

    },
   data () {
     return {

   }
   },
   components: {
      Rotation
   },
   methods: {
     getdata(){
       this.$api
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
.background{
  background: rgb(202, 199, 199);
}
</style>