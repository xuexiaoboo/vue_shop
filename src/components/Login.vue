<template>
  <div class="login_container">
    <div class="login_box">
      <!-- 头像区域 -->
      <div class="avator_box">
        <img src="@/assets/logo.png" alt />
      </div>

      <!-- 登录表单区域 -->
      <el-form
        label-width="0px"
        class="login_form"
        :model="loginForm"
        :rules="loginFormRules"
        ref="loginFormRef"
      >
        <!-- username -->
        <el-form-item prop="username">
          <el-input prefix-icon="el-icon-user" v-model="loginForm.username"></el-input>
        </el-form-item>
        <!-- password -->
        <el-form-item prop="password">
          <el-input prefix-icon="el-icon-lock" v-model="loginForm.password" show-password></el-input>
        </el-form-item>
        <!-- Button -->
        <el-form-item class="btns">
          <el-button type="primary" @click="login">登录</el-button>
          <el-button type="info" @click="resetLoginForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 登录表单的数据绑定对象
      loginForm: {
        username: 'admin',
        password: '123456'
      },
      // 表单的验证规则对象
      loginFormRules: {
        username: [{ required: true, message: '请输用户名', trigger: 'blur' }],
        password: [
          { required: true, message: '请输入登录密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    // 点击按钮重置表单
    resetLoginForm() {
      this.$refs.loginFormRef.resetFields()
    },
    async login() {
      // 对请求数据解构
      const { data: res } = await this.$http.post('login', this.loginForm)
      if (res.meta.status !== 200) {
        // console.log('登录失败')
        this.$message.error('用户名或密码错误！')
      } else {
        // console.log('登录成功')
        this.$message.success('登录成功！')
      }
      // 登录成功后的token，保存到sessionStorage中
      // 项目除登录外的接口需要登录后才能用
      // token只应在网站打开期间有效，所以保存到sessionStorage中
      window.sessionStorage.setItem('token', res.data.token)
      // 通过编程式导航跳转后台主页 /home
      this.$router.push('/home')
    }
  }
}
</script>

<style lang="less" scoped>
.login_container {
  background-color: #2b4b6b;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login_box {
  width: 450px;
  height: 300px;
  background-color: #fff;
  border-radius: 3px;

  .avator_box {
    width: 130px;
    height: 130px;
    border: 1px solid #eee;
    border-radius: 50%;
    padding: 10px;
    box-shadow: 0 0 10px #ddd;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #eee;
    }
  }
}

.login_form {
  margin-top: 110px;
  padding: 0 20px;
}
.btns {
  display: flex;
  justify-content: center;
}
</style>
