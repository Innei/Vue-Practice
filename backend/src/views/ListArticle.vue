<template>
  <el-table :data="posts">
    <el-table-column prop="title" label=" 标题" width="220"></el-table-column>
    <el-table-column prop="body" label="内容" width="520"></el-table-column>
  </el-table>
</template>

<script>
export default {
  data() {
    const item = {
     
    };
    return {
        posts: []
    };

  }
  ,created(){
      this.$http.get('posts').then(res => (this.posts = res.data))
  }
};
</script>

<style>

</style>
