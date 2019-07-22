<template>
  <el-form ref="form" @submit.native.prevent="updateArticle" :model="article" label-width="120px">
    <el-form-item label="文章标题">
      <el-input v-model="article.title"></el-input>
    </el-form-item>
    <el-form-item label="文章内容">
      <el-input type="textarea" v-model="article.body"></el-input>
    </el-form-item>
    <el-form-item label="分类">
      <el-select v-model="article.categories" multiple placeholder="请选择">
        <el-option v-for="item in categories" :key="item._id" :label="item.name" :value="item._id"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="文章缩略图">
      <el-upload
        class="upload-demo"
        drag
        :action="$http.defaults.baseURL + '/upload'"
        :on-success="handleSuccess"
      >
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">
          将文件拖到此处，或
          <em>点击上传</em>
        </div>
      </el-upload>
    </el-form-item>
    <el-form-item>
      <el-form-item label="上次修改于">{{Date(article.mtime).toLocaleString()}}</el-form-item>
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
      this.$set(this.article, "mtime", Date.now().toString());
      this.$http
        .post("/rest/posts/" + this.$route.params.id, this.article)
        .then(res => {
          this.$message({
            type: "success",
            message: "文章修改成功"
          });
          this.$router.push("/posts/index");
        });
    },
    handleSuccess(res) {
      this.$set(this.article, "img", res.url);
    },
    cancel() {
      this.$router.go(-1);
    },
    fetch() {
      this.$http.get("rest/posts/" + this.$route.params.id).then(res => {
        this.article = res.data;
      });
    },
    fetchCategory() {
      this.$http.get("rest/categories").then(res => {
        this.categories = res.data;
      });
    }
  },
  created() {
    this.fetchCategory();
    this.fetch();
  }
};
</script>

<style>
</style>
