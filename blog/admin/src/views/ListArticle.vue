<template>
  <el-table :data="posts">
    <el-table-column prop="title" label=" 标题" width="220"></el-table-column>
    <el-table-column prop="body" label="内容"></el-table-column>
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
      posts: []
    };
  },
  methods: {
    fetch() {
      this.$http.get("rest/posts").then(res => (this.posts = res.data));
    },
    edit(id) {
      this.$router.push("/posts/edit/" + id);
    },
    remove(row) {
      this.$confirm(`是否删除文章 "${row.title}"`, "警告", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(async () => {
        this.$http.delete("rest/posts/" + row._id).then(res => {
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
