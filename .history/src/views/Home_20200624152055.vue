<template>
 <div class="background">
  <Headpliceone></Headpliceone>
 <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
  

 <Rotation ></Rotation>
 <img :src="obj.PICTURE_ADDRESS" alt="" width="100%" class="m-t-20">
 <recommend></recommend>
 <More></More>
 <Fruits :floor2="floor2"></Fruits>
 <milk :floor3="floor3"></milk>
 <Sale :hotGoods="hotGoods"></Sale>
 </van-pull-refresh>
 </div>
</template>

<script>
import Headpliceone from '../../components/headpiece/Headpliceone'
import Rotation from '../../components/home/Rotation';
import Recommend from '../../components/home/Recommend';
import More  from '../../components/home/More';
import Fruits from '../../components/home/Fruits';
import Sale from '../../components/home/Sale'
import Milk  from  '../../components/home/Milk'
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
      floor2:[],
      floor3:[],
      hotGoods:[]

   }
   },
   components: {
      Rotation,
      Recommend,
      More,
      Fruits,
      Milk,
      Sale,
       Headpliceone,
       category
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
         this.$store.commit("setSlides",res.data.slides)
         this.$store.commit("setCategory",res.data.category)
         this.obj=res.data.advertesPicture
          this.$store.commit("setRecommend",res.data.recommend)
          this.$store.commit("setFloor1",res.data.floor1)
          this.floor2 = res.data.floor2
          this.floor3 = res.data.floor3
          this.hotGoods = res.data.hotGoods
          this.category = res.data.category
          localStorage.setItem('category',JSON.stringify(this.category))
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
    floor1(){
       return this.$store.state.floor1
     },
     
    
   }
 }
</script>

<style scoped lang='scss'>
.background{
  background: rgb(202, 199, 199);

}

</style>