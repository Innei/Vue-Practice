<template>
  <div>
    <Header></Header>
    <main>
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </main>
    <footer>
      <Down :route="$route.meta"></Down>
    </footer>
  </div>
</template>

<script>
export default {
  components: {
    Header: () => import("./../components/header.vue"),
    Down: () => import("./../components/down-btn.vue")
  },
  watch: {
    $route(val) {
     
    }
  }
};
</script>

<style lang="scss" scoped>
footer {
  position: fixed;
  bottom: 1.5rem;
  left: 0;
  right: 0;
  text-align: center;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>