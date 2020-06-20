<!-- 登录 -->
<template>
 <div>
    <div class="sigon d-f j-c-c a-i-c">
      <div class="sigon1 d-f a-i-c f-d-c">
        <div class="f-s-18 m-t-20">欢迎来到小爱后台管理系统</div>
        <div class="f-s-18 m-t-20">登录</div>
        <div class="sigon2 m-t-20">
          <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="120px"
            class="demo-ruleForm"
          >
            <el-form-item label="用户名" prop="uesrname">
              <el-input v-model="ruleForm.uesrname "></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input v-model="ruleForm.password" show-password></el-input>
            </el-form-item>
            <el-form-item label="请输入验证码" prop="verification">
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
   name:'',
   props:{

    },
   data () {
     return {

   }
   },
   components: {

   },
   methods: {

   },
   mounted() {

   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>