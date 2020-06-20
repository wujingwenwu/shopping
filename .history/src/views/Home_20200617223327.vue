<template>
 <div>
 <div class="dis"></div>
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
     this.$api.recommend().then(res=>{
       console.log(res);
     })
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