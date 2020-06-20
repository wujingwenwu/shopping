<template>
 <div class="background">
 <Rotation ></Rotation>
 
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
    
      
     
   },
   mounted() {
       this.$api.recommend().then(res=>{
         this.$store.commit(setRecommend,res.data.recommend)
          console.log(res);
       }).catch(err=>{
         console.log(err);
       })
   },
   watch: {

   },
   computed: {
     recommend(){
       return this.$store.state.recommend
     }
   }
 }
</script>

<style scoped lang='scss'>
.background{
  background: rgb(202, 199, 199);
}
</style>