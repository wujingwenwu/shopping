<template>
 <div class="background">
 <Rotation :rotation='rotation'></Rotation>
 
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
       this.$api.recommend().then(res=>{
          console.log(res);
       }).catch(err=>{
         console.log(err);
       })
     }
   },
   mounted() {
      this.getdata()
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