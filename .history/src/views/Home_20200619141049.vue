<template>
 <div class="background">
 <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
  

 <Rotation ></Rotation>
 <img :src="obj.PICTURE_ADDRESS" alt="" width="100%" class="m-t-20">
 <recommend></recommend>
 <more></more>
 </van-pull-refresh>
 </div>
</template>

<script>
import Rotation from '../../components/home/Rotation';
import Recommend from '../../components/home/Recommend';
import More  from '../../components/home/More';
import { Toast } from 'vant';
 export default {
   name:'',
   props:{

    },
   data () {
     return {
     obj:{},
     count: 0,
      isLoading: false,
   }
   },
   components: {
      Rotation,
      Recommend,
      More
   },
   methods: {
     onRefresh() {
      setTimeout(() => {
        Toast('刷新成功');
        this.isLoading = false;
        this.count++;
      }, 1000);
    },
  
      
     
   },
   mounted() {
       this.$api.recommend().then(res=>{
         this.$store.commit("setRecommend",res.data.slides)
         this.$store.commit("setCategory",res.data.category)
         this.obj=res.data.advertesPicture
          this.$store.commit("setRecommend",res.data.recommend)
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
     recommend(){
       return this.$store.state.recommend
     },
    recommend(){
       return this.$store.state.recommend
     },
    
   }
 }
</script>

<style scoped lang='scss'>
.background{
  background: rgb(202, 199, 199);

}

</style>