<template>
  <!-- 登录 -->
  <div>
    <div class="sigon">
      <div>
        <i class="iconfont icon-zuojiantou-tianchong"></i>
      </div>
      <div class="sigon1">
        <div class="sigon-item">登录&nbsp;/&nbsp;注册</div>
        <div class="sigon4">
        <van-form>
          <!-- 输入任意文本 -->
          <van-field v-model="uesrname" placeholder="USERNAME"    :rules="[{ required: true, message: '请填写用户名'},{min: 6, max: 15, trigger: "blur" }]" />
          <!-- 输入手机号，调起手机号键盘 -->
          <van-field v-model="password" type="password" placeholder="PASSWORD"  />
          <!-- 允许输入正整数，调起纯数字键盘 -->
          <van-field v-model="digit" type="digit" label="手机号码" />
          <!-- 允许输入数字，调起带符号的纯数字键盘 -->
          <van-field v-model="sms" center clearable label="短信验证码" placeholder="请输入短信验证码">
            <template #button>
              <van-button size="small" type="primary">发送验证码</van-button>
            </template>
          </van-field>
          <!-- 输入密码 -->
          <div class="d-f">
          <van-field v-model="smss"  label="验证码" />
          <div v-html="code" class="sigon3" @click="loginc"></div>
          </div>
          </van-form>
        </div>
        <div class="d-f ">
        <van-button type="primary" class="sigon-item1">登录</van-button>
        <van-button type="danger" class="sigon-item1">注册</van-button>
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
      uesrname: "",
     sms: "",
      digit: "",
      smss: "",
      password: "",
      code: ""
    };
  },
  components: {},
  methods: {
    loginc(){
      this.$api.verify().then(res=>{
        this.code = res
       console.log(res);
     }).catch(err=>{
       console.log(err);
     })
    }
     
  
  },
  mounted() {
     this.loginc()
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.sigon {
  background: url("./cd5ecfe18f9bbeff4f4e23168eef21c6.jpg");
  width: 100%;
  height: 665px;
}
.sigon1 {
  width: 350px;
  height: 400px;
  background: white;
  margin-left: 13px;
  margin-top: 50px;
}
.sigon2 {
  margin-left: -80px;
}
.sigon4 {
  width: 320px;
  border: none;
}
.icon-zuojiantou-tianchong {
  font-size: 34px;

  margin-left: 10px;
}
.sigon-item {
  font-size: 20px;
  margin-left: 20px;
  margin-top: 10px;
}
.sigon-item1{
  width: 110px;
  height: 50px;
  padding: 20 30px;
  margin-left: 20px;
}
</style>