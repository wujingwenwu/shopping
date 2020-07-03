<template>
 <div>
  <div class="d-f m-t-10 m-l-10">
      <van-icon name="arrow-left" size="30px" color="#1989fa" @click="articulars" />
      <div class="f-s-18 articulars">评价中心</div>
    </div>
   <div v-for="(item,index) in list.goods" :key="index">
   <div class="d-f m-t-20 m-l-10">
   <div class="m-l-10">
   <van-rate
            class="m-t-10"
            v-model="list.rate"
            icon="like"
            void-icon="star"
            :size="16"
            color="#ee0a24"
            void-color="#eee"
          />
   </div>
   <div class="p-a wholes m-t-5">{{list.comment_time}}</div>
   </div>
   <div class="m-t-10 m-l-20">评价内容:{{list.content}}</div>
   <div class="wholes1"></div>
   <div class="d-f m-t-10 m-l-10">
    <img :src="item.image" alt="" width="60">
    <div>{{item.name}}</div>
    <i class="iconfont icon-gouwuche" @click="icon"></i>
    
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
      list:{}
   }
   },
   components: {

   },
   methods: {
     articulars(){
         this.$router.push('/whole')
     },
     icon(){
            this.$dialog
        .confirm({
          message: "您是否要重新购买？"
          
        })
        .then(res => {
          this.$api.addShop(this.list.goods).then(res=>{
              console.log(res);
          }).catch(err=>{
              console.log(err);
          })
             
        })
        .catch(() => {
          // on cancel
        });
     }
   },
   mounted() {
   
    this.list =this.$route.query.items
    console.log(this.list);
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.wholes{
  left: 150px;
}
.wholes1{
  width: 100%;
  height: 1px;
  background: rgb(214, 213, 213);
  margin-top: 10px;
}
.articulars{
    margin-left: 120px;
}
.icon-gouwuche{
    color: red;
    font-size: 30px;
    margin-left: 20px;
    margin-top: 5px;
}
</style>