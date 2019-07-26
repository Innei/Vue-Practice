<template>
  <div class="login-container">
    <el-card header="登录" class="login-card">
      <el-form @submit.native.prevent="login">
        <el-form-item label="用户名">
          <el-input v-model="model.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="model.password" show-password></el-input>
        </el-form-item>
        <el-form-item style="text-align: center">
          <el-button tpye="primary" native-type="submit">登陆</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: {
          username: "",
          password: ""
      }
    };
  },
  methods: {
    async login() {
        const res = await this.$http.post('login', this.model)
        localStorage.token = res.data.token
        localStorage.username = res.data.username
        this.$message({
            type: "success",
            message: "登陆成功"
        })
        this.$router.push("/")
        // console.log(res)
    }
  }
};
</script>

<style>
.login-card {
  width: 25rem;
  margin: 10rem auto;
}
</style>
