<template>
  <div class="btn" v-if="JSON.stringify(route) !== '{}'">
    <router-link :to="'/'+route">
      <font-awesome-icon :icon="['fas', 'chevron-down']" />
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    route: {
      require: true
    }
  }
};
</script>

<style scoped>
a {
  color: #000;
}
.btn {
  background: none;
  animation: buling 1s infinite both ease-in-out;
}
@keyframes buling {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(2px);
  }
}
</style>