<template>
  <div>
    <div class="m-t-10" @click="clickItems">
      <i class="iconfont icon-zuojiantou-tianchong m-l-10"></i>
    </div>
    <div>
      <div>
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="orange">
          <van-swipe-item>
            <img :src="obj.image" alt width="100%" />
          </van-swipe-item>
          <van-swipe-item>
            <img :src="obj.image" alt width="100%" />
          </van-swipe-item>
        </van-swipe>
      </div>
      <div class="m-t-10 m-l-10">{{obj.name}}</div>
      <div class="details">￥{{obj.orl_price}}</div>
      <div class="d-f j-c-s-a m-t-15">
        <div>运费：0</div>
        <div>剩余：10000</div>
        <div class="d-f">
          <div>收藏</div>
          <van-icon name="like-o" class="m-t-5 m-l-5" />
        </div>
      </div>
      <div class="d-f m-t-20 j-c-s-b">
        <div class="d-f">
          <van-icon name="shop-o" size="20px" class="m-l-10" />
          <div class="f-s-14 m-l-10">有赞的店</div>
          <div class="details1 d-f j-c-c a-i-c m-l-10">官方</div>
        </div>
        <div class="d-f">
          <div>进入铺店</div>
          <van-icon name="arrow" class="m-t-5" />
        </div>
      </div>
    </div>
    <div>
      <van-tabs title-active-color="red" color= "white">
        <van-tab title="商品详情">
          <div v-html="obj.detail"></div>
        </van-tab>
        <van-tab title="商品评论"></van-tab>
      </van-tabs>
    </div>

    <div>
      <van-goods-action class="action">
        <van-goods-action-icon icon="chat-o" text="客服" />
        <van-goods-action-icon icon="shop-o" text="店铺" />
          <van-goods-action-button type="warning" text="加入购物车" @click="clickz" />
      
        <van-goods-action-button type="danger" text="立即购买" @click="clickw" />
         <van-action-sheet title="购买" v-model="show">
            <div class="content">
            <div class="d-f">
            <img :src="obj.image" alt width="90px" />
            <div>
            <div class="m-t-10 m-l-10">{{obj.name}}</div>
             <div class="details m-l-10">￥{{obj.orl_price}}</div>
            </div>
            </div>
             <div class="details3"></div>
             <div class="d-f m-t-10">
             <div>
              <div>购买数量:</div>
              <div class="d-f">
              <div>剩余:{{obj.amount}}</div>
              <div class=" f-c-ho f-s-14">每人限购50件</div>
              </div>
             </div>
             </div>
            </div>
        </van-action-sheet>
      </van-goods-action>
      <div class="details2"></div>
      <div></div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Lazyload } from "vant";
Vue.use(Lazyload);
export default {
  name: "",
  props: {},
  data() {
    return {
      ids: "",
      obj: {},
      show: false
    };
  },
  components: {},
  methods: {
    clickItems() {
      this.$router.push("/");
    },
    clickz() {
      this.$api
        .addShop({})
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    clickw() {
      this.show = true
    }
  },
  mounted() {
    this.ids = this.$route.query.id;

    this.$api
      .goods(this.ids)
      .then(res => {
        this.obj = res.goods.goodsOne;
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
.icon-zuojiantou-tianchong {
  font-size: 30px;
}
.details {
  color: rgb(236, 84, 84);
}
.details1 {
  width: 40px;
  height: 20px;
  background: rgb(243, 84, 84);
  color: white;
  font-size: 14px;
}

.details2 {
  z-index: 9999;
  height: 60px;
  background: white;
}
.content {
  padding: 16px 16px 160px;
}
.details3{
  width: 100%;
  height: 1px;
  background: #b4b0b0;
  margin-top: 10px;
}
</style>