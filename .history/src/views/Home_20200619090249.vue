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
       this.$api.recommend().then(res=>{
         this.$store.commit(setRecommend,res)
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