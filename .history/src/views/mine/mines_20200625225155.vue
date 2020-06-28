<template>
 <div>
   <div >
       <div class="d-f j-c-c m-t-10">会员中心</div>
      <div class="back d-f f-d-c j-c-c a-i-c">
        <div>
          <i class="iconfont icon-shezhi f-c-b"></i>
        </div>
        <img src="./e597c43ccbc4999a316eac505f5e17bd (1).jpg" alt="" class="logo">
        <div @click="clicke" class="f-s-18 f-c-b mines">您好请登录</div>
      </div>
      <div class="d-f j-c-s-a m-t-20">
        <div>
          <van-icon name="pending-payment" badge="99+" size="30px" />
          <div>代付款</div>
        </div>
        <div>
          <van-icon name="gift-o" badge="99+" size="30px" />
          <div>代发货</div>
        </div>
        <div>
          <van-icon name="logistics" badge="99+" size="30px" />
          <div>代收货</div>
        </div>
        <div>
          <van-icon name="records" badge="99+" size="30px" />
          <div>评价</div>
        </div>
        <div>
          <van-icon name="points" badge="99+" size="30px" />
          <div>已完成</div>
        </div>
      </div>
      <div class="iten"></div>
      <van-cell title="全部订单" is-link icon="records" class="m-t-10" />

      <van-cell title="收藏商品" is-link icon="points"  />

      <van-cell title="地址管理" is-link icon="cash-back-record"  />

      <van-cell title="最近游览" is-link icon="gift-o"  />
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
      clicke(){
      this.$router.push('/sigon')
    },
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