<template>
  <el-table :data="posts">
    <el-table-column prop="name" label="分类" width="220"></el-table-column>
    <el-table-column prop="parents.name" label="父分类"></el-table-column>

    <el-table-column fixed="right" label="操作" width="100">
      <template slot-scope="scope">
        <el-button @click="edit(scope.row._id)" type="text" size="small">编辑</el-button>
        <el-button @click="remove(scope.row._id)" type="text" size="small">删除</el-button>
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
      this.$http.get("rest/categories").then(res => (this.posts = res.data));
    },
    edit(id) {
      this.$router.push("/categories/edit/" + id);
    },
    remove(id) {
      this.$http.delete("rest/categories/" + id).then(res => {
        this.$message({
          type: "success",
          message: res.data.message
        });
        this.fetch();
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
