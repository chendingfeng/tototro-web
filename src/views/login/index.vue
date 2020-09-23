<template>
  <div>
    <el-card class="login-form-layout">
      <el-form :model="loginForm"
               :rules="loginRules"
               ref="loginForm"
                >
        <h2 class="login-title">totoro-web</h2>
        <el-form-item prop="username">
            <el-input name="username"
                      type="text"
                      v-model="loginForm.username"
                      placeholder="请输入用户名">
              <span slot="prefix">
                <svg-icon icon-class="user"></svg-icon>
              </span>
            </el-input>
        </el-form-item>
        <el-form-item prop="username">
          <el-input name="password"
                    :type="pwdType"
                    v-model="loginForm.password"
                    placeholder="请输入密码">
            <span slot="prefix">
              <svg-icon icon-class="password"></svg-icon>
            </span>
            <span slot="suffix" @click="showPwd">
              <svg-icon icon-class="eye"></svg-icon>
            </span>
          </el-input>
        </el-form-item>
        <el-form-item style="margin-bottom: 20px;text-align: center">
          <el-button style="width: 45%" type="primary" :loading="loading" @click.native.prevent="handleLogin">
            登录
          </el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
  import {isvalidUsername} from '@/utils/validate';
  import {setSupport,getSupport,setCookie,getCookie} from '@/utils/support';

  export default {
    name: 'login',
    data(){
      const validateUsername = (rule, value, callback) => {
        if (!isvalidUsername(value)) {
          callback(new Error('请输入正确的用户名'))
        } else {
          callback()
        }
      };
      const validatePass = (rule, value, callback) => {
        if (value.length < 3) {
          callback(new Error('密码不能小于3位'))
        } else {
          callback()
        }
      };
      return {
        loginForm: {
          username: '',
          password: '',
        },
        loginRules: {
          username: [{required: true, trigger: 'blur', validator: validateUsername}],
          password: [{required: true, trigger: 'blur', validator: validatePass}]
        },
        pwdType: 'password',
        loading: false,
      }
    },
    components: {},
    created(){
    },
    mounted(){
    },
    methods: {
      showPwd() {
        if (this.pwdType === 'password') {
          this.pwdType = ''
        } else {
          this.pwdType = 'password'
        }
      },
      handleLogin() {
        this.$refs.loginForm.validate(valid => {
          if (valid) {
            this.loading = true;
            this.$store.dispatch('Login', this.loginForm).then(() => {
              this.loading = false;
              setCookie("username",this.loginForm.username,15);
              setCookie("password",this.loginForm.password,15);
              this.$router.push({path: '/'})
            }).catch(() => {
              this.loading = false
            })
          } else {
            console.log('参数验证不合法！');
            return false
          }
        })
      },
    }
  }
</script>
<style scoped>
  .login-form-layout {
    position: absolute;
    left: 0;
    right: 0;
    width: 460px;
    margin: 140px auto;
    border-top: 5px solid #409EFF;
  }

  .login-title {
    text-align: center;
  }
</style>
