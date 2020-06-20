<template>
 <div>
  <div>
  <van-icon name="arrow-left" size="30px"  color="#07c160" class="m-t-10 m-l-10" @click="clickz"/>
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
    clickz(){
        this.$router.push('/mine')
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