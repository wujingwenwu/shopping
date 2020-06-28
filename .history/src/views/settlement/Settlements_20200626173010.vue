<template>
 <div>
  <div class="d-f">
   <van-icon name="arrow-left" @click="left" size="30px"/>
  </div>
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
    left(){
      this.$router.push('/toshopping')
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

</style>