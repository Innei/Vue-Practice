<template>
  <el-form ref="form" @submit.native.prevent="updateArticle" :model="article" label-width="120px">
    <h1>{{id ? '修改' : '新建'}}文章</h1>
    <el-form-item label="文章标题">
      <el-input v-model="article.title"></el-input>
    </el-form-item>
    <el-form-item label="文章内容">
      <mavon-editor v-model="article.body" ref="md" @imgAdd="$imgAdd" />
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
        :action="uploadUrl"
        :headers="getAuthHeaders()"
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
      <el-form-item v-if="id" label="上次修改于">{{Date(article.mtime).toLocaleString()}}</el-form-item>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" native-type="submit">{{id ? "修改": "创建" }}</el-button>
      <el-button @click="cancel">取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      article: {},
      categories: []
    };
  },
  props: {
    id: {}
  },
  methods: {
    updateArticle() {
      this.$set(this.article, "mtime", Date.now().toString());
      if (!this.id) {
        this.$set(this.article, "ctime", Date.now().toString());
        this.$http.post("rest/posts", this.article).then(res => {
          this.$message({
            type: "success",
            message: "文章创建成功"
          });
          this.$router.push("/posts/index");
          return;
        });
      }

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
    },
    $imgAdd(pos, $file) {
      // 第一步.将图片上传到服务器.
      var formdata = new FormData();
      formdata.append("file", $file);
      axios({
        url: this.$http.defaults.baseURL + "/upload",
        method: "post",
        data: formdata,
        headers: { "Content-Type": "multipart/form-data" }
      }).then(res => {
        // 第二步.将返回的url替换到文本原位置![...](./0) -> ![...](url)
        /**
         * $vm 指为mavonEditor实例，可以通过如下两种方式获取
         * 1. 通过引入对象获取: `import {mavonEditor} from ...` 等方式引入后，`$vm`为`mavonEditor`
         * 2. 通过$refs获取: html声明ref : `<mavon-editor ref=md ></mavon-editor>，`$vm`为 `this.$refs.md`
         */
        this.$refs.md.$img2Url(pos, res.data.url);
      });
    }
  },
  created() {
    if (this.id) {
      this.fetch();
    }
    this.fetchCategory();
  },
  watch: {
    id() {
      this.article = {};
    }
  }
};
</script>

<style>
</style>
