<template>
 <div>
 <div class="dis" @click="clicks"></div>
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
      clicks(){
        this.$api.verify().then(res=>{
        console.log(res.data);
      })
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
.dis{
  width: 100px;
  height: 100px;
  background: red;
}
</style>