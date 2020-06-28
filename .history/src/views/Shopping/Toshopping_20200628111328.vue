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
       <div>
    <van-nav-bar title="我的购物车" left-arrow />
    <div class="ww dis-1 sb">
      <div class="dis-1 ju-1 al-1 fd-l mt-10">
        <div v-if="checkAll===false">
          <van-checkbox v-model="checkAll" @click="clickedAll">全选</van-checkbox>
        </div>
        <div v-else-if="checkAll===true">
          <van-checkbox v-model="checkAll" @click="clickedAll">取消全选</van-checkbox>
        </div>
      </div> 
      <div class=" dis-1 ju-1 al-1 fl-d mr-20">
        <div>合计:</div>
        <div class=" mt-10">请确认订单</div>
      </div>
    </div>
    <div class="dis-1 top1">
      <van-button color="#000080" class="btn">删除</van-button>
      <van-button color="#000080">去结算</van-button>
    </div>
    <!-- 循环出来的数据 -->
    <div class="selectAll" v-for="(item, index) in shopList" :key="index">
      <div class="upper">
        <van-checkbox v-model="item.check" @click="clickRadio"></van-checkbox>
      </div>
      <div class="centre">
        <img :src="item.image_path" class="image" />
      </div>
      <div class="lower">
        <div class="name">{{ item.name }}</div>
        <div class="price">
          <div>￥{{ item.present_price }}</div>
          <div class="strpper">
            <van-stepper v-model="item.count" integer min="1" max="10" @change="clickAdd(item)" />
          </div>
        </div>
      </div>
    </div>
    <div class="zhanwei3"></div>
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
      arr:''
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
   methods: {
    // 单选
    clickRadio(item, index) {
      item.check = !this.checkAll;
      console.log(item.check);
      this.shopList.filter(item => {
        return item.check;
      });
    },
    // 购物车加减商品
    clickAdd(item) {
      this.$api
        .editCart(item.count, item.cid, item.mallPrice)
        .then(res => {
          if (res.code === 200) {
            this.$toast(res.msg);
            console.log(res);
          } else {
            this.$toast("修改失败");
          }
        })
        .catch(err => {
          console.log(err);
        });
    },

    // 全选
    clickedAll() {
      console.log(this.checkAll);
      this.shopList.map(item => {
        item.check = this.checkAll;
      });
    },

    // 查询获取购物车数据
    getCard() {
      this.$api
        .getCard()
        .then(res => {
          this.shopList = res.shopList;
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
    //
  
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
</style>