<template>
<!-- 商品推荐 -->
 <div>

    <div class="recommend">
    <div class="recommend1">商品推荐</div>
 
<div>
<van-swipe :loop="false" :width="135" :show-indicators="false">
  <van-swipe-item v-for="(item,index) in recommend" :key="index">
  <div class="title d-f a-i-c f-d-c">
  <img :src="item.image" alt="" width="80" height="100">
  <div class="f-s-14 title1">{{item.goodsName}}</div>
  <div class="d-f title-item">
   <div class="d-f">
   <i class="iconfont icon-renminbi"></i>
   <div>{{item.price}}</div>
   </div>
   <div class="d-f m-t-5 m-l-10">
   <i class="iconfont icon-renminbi f-s-12"></i>
    <div class="f-s-12">{{item.mallPrice}}</div>
    <div class="title4"></div>
   </div>
  </div>
  <div class="d-f">
  <div class="title2 d-f j-c-c a-i-c">
  <i class="iconfont icon-gouwuche f-c-b" @click="clickItemw(index)"></i>
  </div>
   <div class="title3" @click="goDetail(index)">查看详情</div>
  </div>
  </div>
  </van-swipe-item>
 
</van-swipe>

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
      id:'',
      nickname:''
   }
   },
   components: {

   },
   methods: {
    goDetail(index){
      this.$router.push({name:'Details',query:{id:this.recommend[index].goodsId},})
        console.log(this.recommend[index].goodsId);
        this.$utils.goDetail(this.list[index]) 
    },
    clickItemw(index){
        this.$api
        .addShop(this.recommend[index].goodsId)
        .then(res => {
          console.log(res);
          
          if(this.nickname ===null){
              this.$dialog
        .confirm({
          message: "您还没有登录，是否要登录？"
        })
        .then(res => {
           this.$router.push('/sigon')
        })
        .catch(() => {
          // on cancel
        });
          }else if(this.nickname !=null){
             this.$toast('加入购物车成功') 
             console.log(res);
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
   },
   mounted() {
       this.nickname = localStorage.getItem('nickname')
   },
   watch: {

   },
   computed: {
       recommend(){
       return this.$store.state.recommend
     }
    
   }
 }
</script>

<style scoped lang='scss'>
.recommend{
    width: 98%;
    height: 220px;
    background: white;
    margin-top: 30px;
    margin-left: 4px;
}
.recommend1{
    padding: 10px 15px;
}
 .custom-indicator {
    position: absolute;
    right: 5px;
    bottom: 5px;
    padding: 2px 5px;
    font-size: 12px;
    background: rgba(0, 0, 0, 0.1);
  }
  .title{
      width: 133px;
      height: 170px;
      border: 1px solid #e4dede;
      border-right: none;
  }
  .title1{
       overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 130px;
  }
  .title2{
      width: 30px;
      height: 20px;
      background: orange;
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;  
  }
  .title3{
      width: 70px;
      height: 20px;
      background: rgb(236, 20, 20);
      color: white;
  }
  .title4{
      width: 25px;
      height: 0.5px;
      background: rgb(90, 86, 86);
      margin-left: -20px;
      margin-top: 5px;
  }
  .title-item{
    margin-top: 5px;
  }
</style>