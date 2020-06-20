<template>
  <div>
    <div class="d-f j-c-c m-t-10">会员中心</div>
    <div class="back d-f f-d-c j-c-c a-i-c">
      <i class="iconfont icon-shezhi f-c-b"></i>
      <img :src="userInfo.avatar" alt class="logo" />
      <div class="f-c-b f-s-18 m-t-20">欢迎您:{{userInfo.nickname}}</div>
      <div class="f-c-b f-s-18 m-t-20" @click="click">退出登录</div>
    </div>
    <div class="d-f j-c-s-a m-t-20">
      <div>
        <van-icon name="pending-payment" badge="99+" size="30px"/>
        <div>代付款</div>
      </div>
      <div>
        <van-icon name="gift-o" badge="99+" size="30px"/>
        <div>代发货</div>
      </div>
      <div>
      <van-icon name="logistics" badge="99+" size="30px"/>
        <div>代收货</div>
      </div>
      <div>
      <van-icon name="records" badge="99+" size="30px"/>
        <div>评价</div>
      </div>
      <div>
        <van-icon name="points" badge="99+" size="30px"/>
        <div>已完成</div>
      </div>
    </div>
    <div class="iten"></div>
    <van-cell title="单元格" is-link />
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      userInfo: {}
    };
  },
  components: {},
  methods: {
    click() {
      this.$router.push("/sigon");
    }
  },
  mounted() {
    this.$api
      .queryUser()
      .then(res => {
        this.userInfo = res.userInfo;
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
.back {
  width: 98%;
  height: 280px;
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
.iten{
  width: 100%;
  height: 1px;
  background: #b1adad;
  margin-top: 10px;
}
</style>