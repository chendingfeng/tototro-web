<template>
  <div>
    <el-card class="login-form-layout">
      <el-form>
        <h2 class="login-title">totoro-web</h2>
        <el-form-item prop="">
            <el-input name=""
                      type="text"
                      placeholder="请输入用户名">
              <span slot="prefix">
                <svg-icon icon-class="user"></svg-icon>
              </span>
            </el-input>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: '',
    data(){
        return {}
    },
    components: {},
    created(){},
    mounted(){},
    methods: {}
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
