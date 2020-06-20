<template>
 <div>
  <div class="d-f ">
  <van-icon name="arrow-left" size="30px"  color="#07c160" @click="clickz"/>
  <div>个人资料</div>
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