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

        <div>
        <div v-if="flag===true" @click="collection" >
         <div>
          点击收藏
          <span class="collection">
            <van-icon name="like-o" color="red"/>
          </span>
        </div>
        </div>
        <div  v-else-if="flag===false || this.cisCollection === 1" @click="collections" >
        <div>
          取消收藏
          <span class="collection">
            <van-icon name="like" color="red"/>
          </span>
        </div>
        </div>
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
      <van-tabs title-active-color="red" color="white">
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

        <van-action-sheet title="加入购物车" v-model="shows">
          <div class="content">
            <div class="d-f">
              <img :src="obj.image" alt width="90px" />
              <div>
                <div class="m-t-10 m-l-10">{{obj.name}}</div>
                <div class="details m-l-10 m-t-10">￥{{obj.orl_price}}</div>
              </div>
            </div>
            <div class="details3"></div>
            <div class="d-f m-t-10">
              <div>
                <div>购买数量:</div>
                <div class="d-f m-t-10">
                  <div>剩余:{{obj.amount}}</div>
                  <div class="f-c-ho f-s-14 m-l-10">每人限购50件</div>
                </div>
              </div>
              <van-stepper
                v-model="value"
                theme="round"
                button-size="26"
                disable-input
                min="1"
                max="50"
                class="m-t-20 m-l-20"
              />
            </div>
            <van-button
              type="primary"
              size="large"
              class="details4"
              color="orange"
              @click="clickItemq"
            >加入购物车</van-button>
          </div>
        </van-action-sheet>
        <van-goods-action-button type="danger" text="立即购买" @click="clickw" />
        <van-action-sheet title="立即购买" v-model="show">
          <div class="content">
            <div class="d-f">
              <img :src="obj.image" alt width="90px" />
              <div>
                <div class="m-t-10 m-l-10">{{obj.name}}</div>
                <div class="details m-l-10 m-t-10">￥{{obj.orl_price}}</div>
              </div>
            </div>
            <div class="details3"></div>
            <div class="d-f m-t-10">
              <div>
                <div>购买数量:</div>
                <div class="d-f m-t-10">
                  <div>剩余:{{obj.amount}}</div>
                  <div class="f-c-ho f-s-14 m-l-10">每人限购50件</div>
                </div>
              </div>
              <van-stepper
                v-model="value"
                theme="round"
                button-size="26"
                disable-input
                min="1"
                max="50"
                class="m-t-20 m-l-20"
              />
            </div>
            <van-button type="primary" size="large" class="details4" color="red">立即购买</van-button>
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
      show: false,
      shows: false,
      value: 1,
      nickname: "",
      flag:true,  
      id:'',
      arr:{},
      cisCollection:'',
     
    };
  },
  components: {},
  methods: {
    clickItems() {
      this.$router.push("/");
    },
    clickz(ids) {
      this.shows = true;
    },
    clickItemq(ids) {
      this.$api
        .addShop(this.ids)
        .then(res => {
          console.log(res);

          if (this.nickname === null) {
            this.$dialog
              .confirm({
                message: "您还没有登录，是否要登录？"
              })
              .then(res => {
                this.$router.push("/sigon");
              })
              .catch(() => {
                // on cancel
              });
          } else if (this.nickname != null) {
            this.$toast("加入购物车成功");
            console.log(res);
          }
        })

        .catch(err => {
          console.log(err);
        });
    },
    clickw() {
      this.show = true;
    },
    collection(){
      if(this.nickname===null){
         this.$dialog
              .confirm({
                message: "您还没有登录，是否要登录？"
              })
              .then(res => {
                this.$router.push("/sigon");
              })
              .catch(() => {
                // on cancel
              });
      } else {
          this.flag=false,
       
          // 点击收藏
          this.$api.collections(this.obj).then(res=>{
            this.$utils.collection(this.obj)
            
            console.log(res);
          }).catch(err=>{
            console.log(err);
          })
      }
    },
    // 取消收藏
    collections(){
      this.flag=true,
    
     this.$api.cancelCollection(this.id).then(res=>{
       localStorage.setItem("id", this.id); 
       console.log(res);
     }).catch(err=>{
       console.log(err);
     })
    },
    
  },
  mounted() {
    this.ids = this.$route.query.id;
    // 查询是否收藏
    this.$api.cisCollection(this.ids).then(res=>{
      this.isCollection = res.isCollection
      console.log(res);
       if (res.isCollection === 1) {
          this.flag = false;
        } else {
          this.flag = true;
        }
    }).catch(err=>{
      console.log(err);
    })
    this.$api
      .goods(this.ids)
      .then(res => {
        this.obj = res.goods.goodsOne;
       
        this.id = res.goods.goodsOne.id;
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
    this.nickname = localStorage.getItem("nickname");
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
  padding: 16px 16px 100px;
}
.details3 {
  width: 100%;
  height: 1px;
  background: #b4b0b0;
  margin-top: 10px;
}
.details4 {
  position: absolute;
  bottom: 0;
  left: 0;
}
</style>