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
            <van-field
              v-model="username"
              placeholder="USERNAME"
              maxlength="6"
              :rules="[{ required: true, message: '请填写用户名',}]"
            />
            <!-- 输入手机号，调起手机号键盘 -->
            <van-field
              v-model="password"
              placeholder="PASSWORD"
              maxlength="12"
              type="password"
              :rules="[{ required: true, message: '请填写密码'}]"
            />
            <!-- 允许输入正整数，调起纯数字键盘 -->
            <van-field
              v-model="digit"
              label="手机号码"
              :rules="[{ required: true, message: '请填写手机号'}]"
            />
            <!-- 允许输入数字，调起带符号的纯数字键盘 -->
            <van-field v-model="sms" center clearable label="短信验证码" placeholder="请输入短信验证码">
              <template #button>
              <div>
                <van-button size="small" type="primary" @click="clickItem">{{time}}</van-button>
                
                </div>
              </template>
            </van-field>
            <!-- 输入密码 -->
            <div class="d-f">
              <van-field
                v-model="smss"
                label="验证码" 
                :rules="[{ required: true, message: '请填写验证码'}]"
              />
              <div v-html="code" class="sigon3" @click="loginc"></div>
            </div>
          </van-form>
        </div>
        <div class="d-f">
          <van-button type="primary" class="sigon-item1" @click="loginb">登录</van-button>
          <van-button type="danger" class="sigon-item1" @click="logina">注册</van-button>
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
      username: "",
      sms: "",
      digit: "",
      smss: "",
      password: "",
      code: "",
      time: "发送验证码",
       flag: true
    };
  },
  components: {},
  methods: {
    loginc() {
      this.$api
        .verify()
        .then(res => {
          this.code = res;
        })
        .catch(err => {
          console.log(err);
        });
    },
    
    logina() {
      this.$api
        .register({
          nickname: this.username,
          password: this.password,
          verify: this.smss
        })
        .then(res => {
          if (res.code === 200) {
            this.$toast('注册成功') 
           this.$router.push("/");
            localStorage.setItem("username", this.nickname);
          } else if(res.code === -1){
                 this.$dialog.alert({
          message: '用户已存在',
        });
          } else if(res.code === -2){
                      this.$dialog.alert({
          message: '验证码错误',
        });
          }
           else {
             this.$dialog.alert({
          message: '注册失败',
        });
          }
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },


    loginb(){
      this.$api.login({
        nickname: this.username,
          password: this.password,
          verify: this.smss
      }).then(res=>{
         if (res.code === 200) {
        this.$toast('登录成功')
          this.$router.push("/"); 
          }
           else if(res.code === -1){
             this.$dialog.alert({
          message: '密码错误',
        });
          } else if(res.code === -2){
                 this.$dialog.alert({
          message: '验证码错误',
        });
          }
        console.log(res);
      }).catch(err=>{
        console.log(err);
      })
    },
    clickItem() {
      if (this.flag) {
        this.flag = false;
        let langtime = 60;
        let _this = this;
        let a = setInterval(() => {
          if (langtime == 0) {
            _this.flag = true;
            _this.time = "发送验证码";
            clearInterval(a);
          } else {
            langtime--;
            _this.time = `倒计时${langtime}秒`;
          }
        }, 1000);
      } else {
        console.log("不能点了");
      }
    },
  },
  mounted() {
    this.loginc();
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
.sigon-item1 {
  width: 110px;
  height: 50px;
  padding: 20 30px;
  margin-left: 20px;
}
.items{
  margin-top: -25px;
  margin-left: 20px;
 position: absolute;
}
</style>