<template>
  <div>
    <div class="classify m-t-10">购物车</div>
    <div v-if="nickname === null">
      <div>
        <img src="../../../server/可能要用的图片/loading.gif" alt width="100%" />
      </div>
      <van-button type="primary" @click="clickItem">去登录</van-button>
    </div>

    <div v-else>
       <div class="title"></div>
       <div class="d-f j-c-s-b m-t-30">
         <div class="d-f">
        <van-radio name="1" checked-color="#07c160"></van-radio>
         </div>
         <div>
          <div>合计:￥</div>
          <div>请确认订单</div>
         </div>
       </div>
        <div class="title"></div>
        <div class="title1 m-t-20">
         <van-button type="danger">删除</van-button>
         <van-button type="info" @click=" onSubmit">去结算</van-button>
        </div>
        <div>
        <div class="title"></div>
        
        <div class="d-f m-t-10" v-for="(item,index) in shopList" :key="index">
         <van-radio name="1" checked-color="#07c160"></van-radio>
         <img :src="item.image_path" alt="" width="100px" class="logo">
         <div>
          <div class="f-s-14 f-c-ho">{{item.name}}</div>
          <div class="d-f m-t-30">
           <div class=" f-c-ho">￥{{item.present_price}}</div>
           <van-stepper v-model="value" theme="round" button-size="22" disable-input class="title2"/>
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
      result: [],
      nickname: "",
      shopList: [],
      value: "1",
      arr:'',
      radio: '1',
      checked: true,
    };
  },
  components: {},
  methods: {
  
    clickItem(){
      this.$router.push("/sigon");
    },
    onSubmit(){
      this.$router.push('/settlements')
    },
   
  
  },
  mounted() {
    this.nickname = localStorage.getItem("nickname");
    this.$api
      .getCard()
      .then(res => {
        this.shopList = res.shopList;
          this.arr=res.shopList.cid  
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
.classify {
  margin-left: 150px;
  font-size: 18px;
}
.toshopping {
  margin-left: 20px;
}
.toshopping1 {
  width: 85px;
  height: 85px;
  border: 1px solid #d4cdcd;
}
.toshopping2 {
  padding: 10px;
  display: flex;
}
.toshopping4 {
  right: 30px;
}
.item{
  position: absolute;
  right: 10px;
}
.title{
  width: 100%;
  height: 1px;
  background: rgb(168, 165, 165);
  margin-top: 10px;
}
.title1{
 margin-left: 220px;
}
.logo{
  margin-left: 20px;
}
.title2{
  position: absolute;
  right: 20px;
}
</style>