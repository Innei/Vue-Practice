<template>
    <el-container style="height: 100vh">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        
       <el-radio-group v-model="isCollapse">
          <el-radio-button :label="false">展开</el-radio-button>
          <el-radio-button :label="true">收起</el-radio-button>
        </el-radio-group>
        <el-menu
          router
          :default-active="$route.path"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          :collapse="isCollapse"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-tickets"></i>
              <span slot="title">内容管理</span>
            </template>
            <el-menu-item-group>
              <span slot="title">分组一</span>
              <el-menu-item index="/posts/create">新建文章</el-menu-item>
              <el-menu-item index="/posts/index">文章列表</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <span slot="title">分类</span>
              <el-menu-item index="/categories/create">新建分类</el-menu-item>
              <el-menu-item index="/categories/index">分类列表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-tickets"></i>
              <span slot="title">应用管理</span>
            </template>
             <el-menu-item-group>
              <span slot="title">用户</span>
              <el-menu-item index="/categories/create">新建用户</el-menu-item>
              <el-menu-item index="/categories/index">用户列表</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <span slot="title">用户</span>
              <el-menu-item index="/admin_users/create">新建用户</el-menu-item>
              <el-menu-item index="/admin_users/index">用户列表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>王小虎</span>
        </el-header>
        <el-main>
          <transition name="fade"  mode="out-in">
          <router-view></router-view>
          </transition>
        </el-main>
      </el-container>
    </el-container>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: false
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
  min-height: 100vh;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 194px;
  min-height: 400px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
::-webkit-scrollbar {
    width: 6px;
    height: 6px;
}
::-webkit-scrollbar-thumb {
    background: rgba(189, 195, 199, .6);
    border-radius: 5px;
}

::-webkit-scrollbar-track:hover {
    border-radius: 5px;
    background: rgba(189, 195, 199, .1);
}

body::-webkit-scrollbar-thumb {
    box-shadow: inset 1px 1px 0 rgba(0, 0, 0, .1), inset 0 -1px 0 rgba(0, 0, 0, .07);
}

body::-webkit-scrollbar-track:hover {
    border-radius: 0;
    box-shadow: inset 1px 0 0 rgba(0, 0, 0, .1);
}
</style>
