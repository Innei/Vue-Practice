<template>
  <el-form ref="form" @submit.native.prevent="saveCategory" :model="table" label-width="120px">
    <h1>{{id ? '修改' : '新建'}}分类</h1>
    <el-form-item label="分类">
      <el-input v-model="table.name"></el-input>
    </el-form-item>
    <el-form-item label="父分类">
      <el-select v-model="table.parents" placeholder="请选择">
        <el-option
          v-for="item in parents"
          :key="item._id"
          :label="item.name"
          :value="item._id"
        ></el-option>
      </el-select>
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
      parents: []
    };
  },
  methods: {
    saveCategory() {
      if (this.id) {
        this.$http.post("rest/categories/" + this.id, this.table).then(res => {
          this.$message({
            type: "success",
            message: "保存成功"
          });
          this.$router.push("/categories/index");
        });
      } else {
        this.$http.post("rest/categories", this.table).then(res => {
          this.$message({
            type: "success",
            message: "创建成功"
          });
          this.$router.push("/categories/index");
        });
      }
    },
    cancel() {
      this.$router.go(-1);
    },
    fetch() {
      this.$http.get(`rest/categories/${this.id}`).then(res => {
        this.table = res.data;
      }).catch(err => {
        this.$message({
          type: "success",
          message: "获取信息失败"
        })
      });
    },
    async fetchParens() {
      const res = await this.$http.get("rest/categories", {
        params: {
          edit: this.id ? this.id : false
        }
      });
      this.parents = res.data;
    }
  },
  created() {
    if (this.id) this.fetch();
    this.fetchParens()
  }
};
</script>

<style>
</style>
