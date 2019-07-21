<template>
  <el-form ref="form" @submit.native.prevent="saveCategory" :model="table" label-width="120px">
    <h1>新建分类</h1>
    <el-form-item label="分类">
      <el-input v-model="table.name" width="100px"></el-input>
    </el-form-item>
   
    <el-form-item>
      <el-button type="primary" native-type="submit">立即创建</el-button>
      <el-button @click="cancel">取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      table: {}
    };
  },
  methods: {
    saveCategory() {
      this.$http.post("/categories", this.table).then(res => {
        this.$message({
          type: "success",
          message: " 分类创建成功"
        });
        this.$router.push("/categories/index");
      });
    },
    cancel() {
      this.$router.go(-1);
    }
  }
};
</script>

<style>
</style>
