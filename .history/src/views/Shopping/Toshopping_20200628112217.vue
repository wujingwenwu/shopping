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
       <div class="d-f">
         <div class="d-f">
         <van-radio-group v-model="radio">
          <van-radio name="1" checked-color="#07c160">全选</van-radio>
          </van-radio-group>
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
</style>