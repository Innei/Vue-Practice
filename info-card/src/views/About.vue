<template>
  <div class="wrap">
    <div class="header">
      <div class="box">
        <p>Hey 这是我の名片</p>
      </div>
    </div>
    <card :data="data" />
    <div class="footer">
      <div class="box fade-up">
        <p>很高兴能认识你</p>
      </div>
    </div>
  </div>
</template>
<style scoped>
.wrap {
  height: 100vh;
  left: 0;
  right: 0;
}
.header {
  position: absolute;
  top: 4rem;
  text-align: center;
  left: 0;
  right: 0;
}
.box {
  background: #ecf0f1a1;
  display: inline-block;
  padding: 0.5rem 2rem;
  border-radius: 4rem;
}
.footer {
  position: absolute;
  bottom: 4rem;
  text-align: center;
  left: 0;
  right: 0;
}
.footer .box {
  animation-delay: 3s;
  opacity: 0;
}
@media (max-width: 650px) {
  .header {
    top: 10vh;
  }
  .footer {
    bottom: 10vh;
  }
}
</style>
<script>
import data from "./../config";
export default {
  components: { card: () => import("../components/middle-card.vue") },
  data() {
    return {
      data
    };
  }
};
</script>