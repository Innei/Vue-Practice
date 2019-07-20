<template>
  <el-form ref="form" @submit.native.prevent="updateArticle" :model="article" label-width="120px">
    <el-form-item label="文章标题">
      <el-input v-model="article.title"></el-input>
    </el-form-item>
    <el-form-item label="文章内容">
      <el-input type="textarea" v-model="article.body"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" native-type="submit">修改</el-button>
      <el-button @click="cancel">取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      article: {}
    };
  },
  methods: {
    updateArticle() {
      this.$http
        .post("/posts/" + this.$route.params.id, this.article)
        .then(res => {
          this.$message({
            type: "success",
            message: "文章修改成功"
          });
          this.$router.push("/posts/index");
        });
    },
    cancel() {
      this.$router.go(-1);
    },
    fetch() {
      this.$http.get("posts/" + this.$route.params.id).then(res => {
        this.article = res.data;
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
