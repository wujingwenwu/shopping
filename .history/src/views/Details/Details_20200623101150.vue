<template>
 <div>
    <div class="m-t-10" @click="clickItems">
     <i class="iconfont icon-zuojiantou-tianchong m-l-10"></i>
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
     ids:''
   }
   },
   components: {

   },
   methods: {
      clickItems(){
        this.$router.push('/')
      }
   },
   mounted() {
     this.ids= this.$route.query.id
     this.$api.goods(this.ids).then(res=>{
       console.log(res);
     }).catch(err=>{
       console.log(err);
     })

console.log(this.ids);
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.icon-zuojiantou-tianchong {
  font-size: 30px;

}
</style>