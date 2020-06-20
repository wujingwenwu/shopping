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
      this.$api.verify().then(res=>{
        console.log(res.data);
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