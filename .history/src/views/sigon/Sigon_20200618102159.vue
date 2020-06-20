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
        <!-- 输入任意文本 -->
<van-field v-model="text" label="文本" />
<!-- 输入手机号，调起手机号键盘 -->
<van-field v-model="tel" type="tel" label="手机号" />
<!-- 允许输入正整数，调起纯数字键盘 -->
<van-field v-model="digit" type="digit" label="整数" />
<!-- 允许输入数字，调起带符号的纯数字键盘 -->
<van-field v-model="number" type="number" label="数字" />
<!-- 输入密码 -->
<van-field v-model="password" type="password" label="密码" />
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
       tel: '',
      text: '',
      digit: '',
      number: '',
      password: '',
      ruleForm: {
        uesrname: "",
        password: "",
        verification: ""
      },
      rules: {
        uesrname: [
          {
            required: true,
            message: "用户名不能为空",
            trigger: "blur"
          },
          {
            min: 2,
            max: 10,
            message: "用户名在2-10位之间",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "密码不能为空",
            trigger: "blur"
          },
          {
            min: 6,
            max: 15,
            message: "密码在6-10位之间",
            trigger: "blur"
          }
        ],
        verification: [
          {
            required: true,
            message: "验证码不能为空",
            trigger: "blur"
          }
        ]
      },
      code: ""
    };
  },
  components: {},
  methods: {
   
    // loginc() {
    //   axios
    //     .get("/api/captcha")
    //     .then(res => {
    //       this.code = res.data;
    //     })
    //     .catch(err => {
    //       console.log(err);
    //     });
    // },
    // logina() {
    //   axios
    //     .post("/api/user/login", {
    //       username: this.ruleForm.uesrname,
    //       password: this.ruleForm.password,
    //       code: this.ruleForm.verification
    //     })
    //     .then(res => {
    //       if (res.data.code === 200) {
    //         this.$message.success("登录成功");
    //         this.$router.push("/");
    //         localStorage.setItem('user',JSON.stringify(res.data.data[0]))
    //       } else {
    //         this.$message.error(res.data.message);
    //       }
    //     })
    //     .catch(err => {
    //       console.log(err);
    //     });
       
       
    // }
  },
  mounted() {
    // this.loginc();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.sigon{
  background: url('./cd5ecfe18f9bbeff4f4e23168eef21c6.jpg');
  width: 100%;
  height: 665px;
}
.sigon1{
  width: 350px;
  height: 400px;
  background: white;
  margin-left: 13px;
  margin-top: 50px;
}
.sigon2{
  margin-left: -80px;
}
.sigon4{
  width: 320px;
  border: none;
}
.icon-zuojiantou-tianchong{
  font-size: 34px;
 
  margin-left: 10px;
}
.sigon-item{
  font-size: 20px;
  margin-left: 20px;
  margin-top: 10px;
}
</style>