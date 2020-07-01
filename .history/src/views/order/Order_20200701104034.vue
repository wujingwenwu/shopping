<template>
  <div>
    <div class="d-f m-t-10 m-l-10">
      <van-icon name="arrow-left" size="30px" color="#1989fa" @click="order" />
      <div class="f-s-18 order">全部订单</div>
    </div>
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
              <div class="order2">交易完成</div>
            </div>
            <div class="order3"></div>
            <div v-for="(item1,index1) in item.order_list" :key="index1">
            <div class="d-f m-t-10 p-r">
              <div class="order4">
                <img :src="item1.image_path" alt="" width="80"/>
              </div>
              <div class="d-f">
              <div class="m-l-10">{{item1.name}}</div>
              <div class="m-l-10">￥{{item1.mallPrice}}</div>
              </div>
              <div class="order5">X{{item1.present_price}}</div>
            </div>
            <div class="order3"></div>
            <div class="order6">
             <div >创建时间:{{item.add_time}}</div>
             <div>收货地址:{{item.address}}</div>
             <div class="d-f">
              <div>共{{item1.count}}件商品</div>
             </div>
             </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      arr: [],
      asd: []
    };
  },
  components: {},
  methods: {
    order() {
      this.$router.push("/mine");
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
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.order {
  margin-left: 120px;
}
.order1 {
  width: 355px;
   
  background: white;
  margin-top: 10px;
  border-radius: 10px;
}
.back {
  width: 100%;
  background: rgb(219, 217, 217);
}
.order2 {
  color: rgb(233, 86, 86);
}
.order3 {
  width: 100%;
  height: 1px;
  background: #cfcdcd;
  margin-top: 10px;
}
.order4{
  width: 85px;
  height: 85px;
  border: 1px solid #ccc6c6;
  border-radius: 10px;
  margin-left: 10px;
}
.order5{
  position: absolute;
  right: 20px;
  top: 30px;
}
.order6{
  margin-left: 90px;
}
</style>