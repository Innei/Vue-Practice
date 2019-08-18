<template>
  <a :href="data.url">
    <div class="item">
      <div class="icon left">
        <font-awesome-icon :icon="data.icon" />
      </div>
      <div class="name right">{{data.value}}</div>
    </div>
  </a>
</template>
<style lang="scss" scoped>
.item {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  margin-bottom: 1rem
}
</style>
<script>
export default {
  props: {
    data: {
      type: Object,
      require: true
    }
  }
};
</script>