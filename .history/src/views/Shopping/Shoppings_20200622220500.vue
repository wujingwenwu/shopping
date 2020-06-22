<template>
 <div>
 aaa
   <div class="d-f m-t-10">
 <div @click="classify">
 <van-icon name="arrow-left" color="#1989fa" size="30px"/>
 </div>
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
      classify(){
        this.$router.push('/')
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
.classify{
  margin-left: 120px;
  font-size: 18px;
}
</style>