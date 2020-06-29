<template>
  <!-- 已经登录-->
  <div>
    <div v-if="nickname === null">
       <div class="d-f j-c-c m-t-10">会员中心</div>
      <div class="back d-f f-d-c j-c-c a-i-c">
        <div @click="clicki">
          <i class="iconfont icon-shezhi f-c-b"></i>
        </div>
        <img src="./e597c43ccbc4999a316eac505f5e17bd (1).jpg" alt="" class="logo">
        <div @click="clicke" class="f-s-18 f-c-b mines">您好请登录</div>
      </div>
      <div class="d-f j-c-s-a m-t-20">
        <div @click="clicki">
          <van-icon name="pending-payment" badge="99+" size="30px" />
          <div>代付款</div>
        </div>
        <div @click="clicki">
          <van-icon name="gift-o" badge="99+" size="30px" />
          <div>代发货</div>
        </div>
        <div @click="clicki">
          <van-icon name="logistics" badge="99+" size="30px" />
          <div>代收货</div>
        </div>
        <div @click="clicki">
          <van-icon name="records" badge="99+" size="30px" />
          <div>评价</div>
        </div>
        <div @click="clicki">
          <van-icon name="points" badge="99+" size="30px" />
          <div>已完成</div>
        </div>
      </div>
      <div class="iten"></div>
      <van-cell title="全部订单" is-link icon="records" class="m-t-10" @click="clicki"/>

      <van-cell title="收藏商品" is-link icon="points" @click="clicki" />

      <van-cell title="地址管理" is-link icon="cash-back-record" @click="clicki" />

      <van-cell title="最近游览" is-link icon="gift-o" @click="clicki" />
    </div>
    <div v-else-if="nickname !=null"> 
      <div class="d-f j-c-c m-t-10">会员中心</div>
      <div class="back d-f f-d-c j-c-c a-i-c">
        <div @click="clicka">
          <i class="iconfont icon-shezhi f-c-b"></i>
        </div>
        <img :src="userInf.avatar" alt class="logo" />
        <div class="f-c-b f-s-18 m-t-20">欢迎您:{{userInf.nickname}}</div>
        <div class="f-c-b f-s-18 m-t-20" @click="click" >退出登录</div>
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
      <van-cell title="全部订单" is-link icon="records" class="m-t-10" to="order" />

      <van-cell title="收藏商品" is-link icon="points" to="index" />

      <van-cell title="地址管理" is-link icon="cash-back-record" to="List" />

      <van-cell title="最近游览" is-link icon="gift-o" to="index" />
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      userInf: {},
      nickname:'',
      
      
    };
  },
  components: {},
  methods: {
    clicke(){
      this.$router.push('/sigon')
    },
    clicki(){
        this.$dialog
        .confirm({
          message: "您还没有登录,是否要登录"
        })
        .then(res => {
           this.$router.push('/sigon')
        })
        .catch(() => {
          // on cancel
        }); 
    },
    click() {
      this.$api
        .loginOut()
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
      this.$dialog
        .confirm({
          message: "您确定要退出吗？";
          this.$router.go(0)
        })
        .then(res => {
           localStorage.removeItem("nickname");
 
        })
        .catch(() => {
          // on cancel
        });
    },
    clicka() {
      this.$router.push("/setup");
    }
  },
  mounted() {
    this.$api
      .queryUser()
      .then(res => {
        this.userInf = res.userInfo;
        this.$store.commit("setUserInfo", res.userInfo);
        this.$store.commit("setYear", res.userInfo.year);
        this.$store.commit("setMonth", res.userInfo.month);
        this.$store.commit("setDay", res.userInfo.day);

        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
       this.nickname = localStorage.getItem('nickname')
  },
  watch: {},
  computed: {
    userInfo() {
      return this.$store.state.userInfo;
    },
    year() {
      return this.$store.state.year;
    },
    month() {
      return this.$store.state.month;
    },
    day() {
      return this.$store.state.day;
    }
  }
};
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