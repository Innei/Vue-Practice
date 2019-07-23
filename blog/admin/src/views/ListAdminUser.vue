<template>
  <el-table :data="users">
    <el-table-column prop="username" label="用户" ></el-table-column>
    <el-table-column fixed="right" label="操作" width="100">
      <template slot-scope="scope">
        <el-button @click="edit(scope.row._id)" type="text" size="small">编辑</el-button>
        <el-button @click="remove(scope.row)" type="text" size="small">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      users: []
    };
  },
  methods: {
    fetch() {
      this.$http.get("rest/admin_users").then(res => (this.users = res.data));
    },
    edit(id) {
      this.$router.push("/admin_users/edit/" + id);
    },
    remove(row) {
      this.$confirm(`是否删除用户 "${row.username}"`, "警告", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(async () => {
        this.$http.delete("rest/admin_users/" + row._id).then(res => {
          this.$message({
            type: "success",
            message: res.data.message
          });
          this.fetch();
        });
      });
    }
  },
  created() {
    this.fetch();
  }
};
</script>

<style>
</style>
