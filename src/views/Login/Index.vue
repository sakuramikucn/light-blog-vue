<template>
  <div>
    <div class="login-container">
    <el-form ref="params" :model="params" :rules="loginRules" class="login-form" auto-complete="on" label-position="left">

      <div class="title-container">
        <h3 class="title">Light Blog 后台管理</h3>
      </div>

      <el-form-item prop="username">
        <span class="svg-container">
          
        </span>
        <el-input
          ref="username"
          v-model="params.username"
          placeholder="用户名"
          name="username"
          type="text"
          tabindex="1"
          auto-complete="on"
        />
      </el-form-item>

      <el-form-item prop="password">
        <span class="svg-container">
          
        </span>
        <el-input
          ref="password"
          v-model="params.password"
          placeholder="密码"
          name="password"
          tabindex="2"
          auto-complete="on"
          show-password
        />
      </el-form-item>

      <el-button :loading="loading" type="primary" style="width:100%;margin-bottom:30px;" @click.prevent="login">登录</el-button>

    </el-form>
  </div>
  <c-footer :style="'footer-manage'"></c-footer>
  </div>
</template>

<script>
import { login } from "api/home.js";
import Router from '@/router'
import Footer from "components/Footer/Index";
import qs from 'qs'

export default {
  name: "Login",
  components: {
    'c-footer': Footer
  },
  data() {
    return {
      params: {
        username: "",
        password: "",
      },
      loading: false,
      loginRules: {
        username: [{ required: true, trigger: 'blur', message: '用户名不能为空' }],
        password: [{ required: true, trigger: 'blur', message: '密码不能为空' }]
      }
    };
  },
  methods: {
    login() {
      this.loading = true
      const params = qs.stringify(this.params)
      login(params).then((result) => {
        this.loading = false;
        let token = result.content;
        localStorage.setItem("token", token);
        const router = Router
        router.push('/manage')
      }).catch(() => {
        this.loading = false
      })
      
    },
  },
};
</script>

<style lang="scss">
$bg: #454545;
$light_gray:#fff;
$cursor: #fff;
@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}
/* reset element-ui css */
.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;
    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      caret-color: $cursor;
      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }
  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}
</style>

<style lang="scss" scoped>
$bg: var(--color-bg-m);
$dark_gray:#889aa4;
$light_gray:#eee;
.login-container {
  min-height: 91.6vh;
  width: 100%;
  background-color: $bg;
  overflow: hidden;
  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;
  }
  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;
    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }
  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }
  .title-container {
    position: relative;
    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }
  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}
</style>