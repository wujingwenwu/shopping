<template>
 <div>
  <div class="d-f j-c-c m-t-10">
   <div class="item d-f j-c-c a-i-c f-c-b">1F</div>
   <div class=" f-c-ho">休闲食品</div>
  </div>
  <div class="item1">
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

   },
   mounted() {

   },
   watch: {

   },
   computed: {
      floora(){
       return this.$store.state.floora
     },
   }
 }
</script>

<style scoped lang='scss'>
.item{
    width: 22px;
    height: 22px;
    background: red;
    border-radius: 50%;
}
.item1{
    width: 100%;
    background: white;
}
</style>