<template>
  <el-form ref="form" @submit.native.prevent="saveUser" :model="table" label-width="120px">
    <h1>{{id ? '修改' : '新建'}}用户</h1>
    <el-form-item label="用户名">
      <el-input placeholder="请输入用户名" v-model="table.username"></el-input>
    </el-form-item>
    <el-form-item label="密码">
      <el-input placeholder="请输入密码" v-model="table.password" show-password></el-input>
    </el-form-item>
    
    <el-form-item>
      <el-button type="primary" native-type="submit">{{id ? "保存" : "立即创建"}}</el-button>
      <el-button @click="cancel">取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  props: {
    id: {}
  },
  data() {
    return {
      table: {},
    };
  },
  methods: {
    saveUser() {
      if (this.id) {
        this.$http.post("rest/admin_users/" + this.id, this.table).then(res => {
          this.$message({
            type: "success",
            message: "保存成功"
          });
          this.$router.push("/admin_users/index");
        });
      } else {
        this.$http.post("rest/admin_users", this.table).then(res => {
          this.$message({
            type: "success",
            message: "创建成功"
          });
          this.$router.push("/admin_users/index");
        });
      }
    },
    cancel() {
      this.$router.go(-1);
    },
    fetch() {
      this.$http.get(`rest/admin_users/${this.id}`).then(res => {
        this.table = res.data;
      }).catch(err => {
        this.$message({
          type: "success",
          message: "获取信息失败"
        })
      });
    }
  },
  created() {
    if (this.id) this.fetch()
  }
};
</script>

<style>
</style>
