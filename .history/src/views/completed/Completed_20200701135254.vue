<template>
<!-- 已完成 -->
 <div>
 <div class="d-f m-t-10 m-l-10">
      <van-icon name="arrow-left" size="30px" color="#1989fa" @click="completed" />
      <div class="f-s-18 completed">已完成</div>
    </div>
   <div>
   <van-tabs v-model="active" swipe-threshold="5">
  <van-tab title="全部"></van-tab>
  <van-tab title="待支付"></van-tab>
  <van-tab title="代发货"></van-tab>
  <van-tab title="代收货"></van-tab>
  <van-tab title="已完成">
    <div v-if="arr<=0" class="f-s-18 d-f">
      您还没有过订单，可以去:
      <div class="f-c-ho">添加</div>
    </div>

    <div v-else>
      <div class="back d-f a-i-c f-d-c">
        <div v-for="(item,index) in asd" :key="index">
          <div class="order1">
            <div class="d-f m-l-10">
              <div>订单编号:{{item.order_id}}</div>
              <div class="order2 m-l-10">交易完成</div>
            </div>
            <div class="order3"></div>
            <div v-for="(item1,index1) in item.order_list" :key="index1">
              <div class="d-f m-t-10 p-r">
                <div class="order4">
                  <img :src="item1.image_path" alt width="80" />
                </div>
                <div class="d-f">
                  <div class="m-l-10">{{item1.name}}</div>
                  <div class="m-l-10">￥{{item1.present_price}}</div>
                </div>
                <div class="order5">X{{item1.count}}</div>
              </div>
              <div class="order3"></div>
             
            </div>
             <div class="order6">
                <div>创建时间:{{item.add_time}}</div>
                <div>收货地址:{{item.address}}</div>
                <div class="d-f">
                  <div>共{{item.order_list.length}}件商品</div>
                  <div class="m-l-10 order7">合计:{{item.mallPrice}}</div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  
  </van-tab>
</van-tabs>
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
     active:4,
     arr: [],
      asd: []
   }
   },
   components: {

   },
   methods: {
     completed(){
         this.$router.push('/mine')
     }
   },
   mounted() {
       this.$api
      .getMyOrder()
      .then(res => {
        this.arr = res.list.order_list;
        this.asd = res.list;
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.completed {
  margin-left: 120px;
}
</style>