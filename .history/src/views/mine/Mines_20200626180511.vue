<template>
<!-- 未登录 -->
 <div>
  

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
      clicke(){
      this.$router.push('/sigon')
    },
    clicki(){
        this.$dialog
        .confirm({
          message: "您还没有登录,是否要登录"
        })
        .then(res => {
           this.$router.push('/sigon')
        })
        .catch(() => {
          // on cancel
        }); 
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
.back {
  width: 98%;
  height: 240px;
  background: rgb(227, 12, 123);
  margin-left: 3px;
  margin-top: 20px;
}
.logo {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
.icon-shezhi {
  font-size: 24px;
  right: 20px;
  position: absolute;
  top: 60px;
}
.logo1 {
  font-size: 28px;
}
.iten {
  width: 100%;
  height: 1px;
  background: #d4d0d0;
  margin-top: 15px;
}
.mines{
  margin-top: 20px;
}
</style>