<template>
 <div>
   <div class="d-f m-t-10 m-l-10">
    <van-icon name="arrow-left" size="30px" color="#1989fa" />
     <div class="f-s-18 visit">最近游览</div>
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
.visit{
  margin-left: 120px;
}
</style>