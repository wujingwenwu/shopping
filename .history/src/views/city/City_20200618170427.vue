<template>
<!-- 城市定位 -->
 <div>
   <div v-for="(item,index) in city" :key="index">
    <div>{{name}}</div>
   </div>
 </div>
</template>

<script>
import city from '../../../server/可能要用的js文件/city'
 export default {
   name:'',
   props:{

    },
   data () {
     return {
       city: ''
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

   }
 }
</script>

<style scoped lang='scss'>

</style>