<template>
<!-- 登录 -->
  <div>
    <div class="sigon">
       <div class="sigon1">
       
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
  width: 400px;
  height: 400px;
  background: white;
}
</style>