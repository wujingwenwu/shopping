<template>
 <div class="background">
 <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
  <p>刷新次数: {{ count }}</p>
</van-pull-refresh>
 <Rotation ></Rotation>
 <img :src="obj.PICTURE_ADDRESS" alt="" width="100%" class="m-t-20">
 <recommend></recommend>
 </div>
</template>

<script>
import Rotation from '../../components/home/Rotation';
import Recommend from '../../components/home/Recommend'
 export default {
   name:'',
   props:{

    },
   data () {
     return {
     obj:{}
   }
   },
   components: {
      Rotation,
      Recommend
   },
   methods: {
    
      
     
   },
   mounted() {
       this.$api.recommend().then(res=>{
         this.$store.commit("setRecommend",res.data.slides)
         this.$store.commit("setCategory",res.data.category)
         this.obj=res.data.advertesPicture
          console.log(res);
       }).catch(err=>{
         console.log(err);
       })
   },
   watch: {

   },
   computed: {
     slides(){
       return this.$store.state.slides
     },
     category(){
       return this.$store.state.category
     },
    
    
    
   }
 }
</script>

<style scoped lang='scss'>
.background{
  background: rgb(202, 199, 199);
  height: 350px;
}
</style>