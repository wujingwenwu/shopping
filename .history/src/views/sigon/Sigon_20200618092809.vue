<template>
<!-- 登录 -->
  <div>
    <div class="sigon d-f j-c-c">
       <div class="sigon1 d-f j-c-c">
       <div class="sigon4">
         <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm sigon2"
          >
            <el-form-item  prop="uesrname">
              <el-input v-model="ruleForm.uesrname "></el-input>
            </el-form-item>
            <el-form-item  prop="password">
              <el-input v-model="ruleForm.password" show-password></el-input>
            </el-form-item>
            <el-form-item prop="verification">
              <el-input v-model="ruleForm.verification"></el-input>
            </el-form-item>

            <div v-html="code" class="sigon3" @click="loginc"></div>

            <el-form-item>
              <el-button type="primary" @click="logina('ruleForm')">立即登录</el-button>
              <el-button type="primary" @click="loginb('ruleForm')">立即注册</el-button>
            </el-form-item>
          </el-form>
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
  height: 700px;
}
.sigon1{
  width: 350px;
  height: 400px;
  background: white;
}
.sigon2{
  margin-left: -80px;
}
.sigon4{
  width: 320px;
}
</style>