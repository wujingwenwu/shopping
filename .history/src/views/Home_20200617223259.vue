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
     this.$api.recommend().then(res=>{
       console.log(res);
     })
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