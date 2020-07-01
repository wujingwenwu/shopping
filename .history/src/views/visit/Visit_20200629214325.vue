<template>
 <div>
   <div class="d-f">
    <van-icon name="arrow-left" size="30px" color="#1989fa" />
   
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
       nickname:''
   }
   },
   components: {

   },
   methods: {

   },
   mounted() {
      this.nickname=localStorage.getItem('nickname')
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>