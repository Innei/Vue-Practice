<template>
  <div class="wrap">
    <div class="card fade-up">
      <div class="f">
        <div class="left fade-up delay">
          <img :src="data.avatar" />
        </div>
        <div class="right fade-up delay">
          <div style="padding: 1rem">
            <h2>{{data.name}}</h2>
            <p>{{data.study}}</p>
          </div>
        </div>
      </div>

      <div class="info fade-up" style="animation-delay: 2s;opacity:0">
        <p>{{data.info}}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrap {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.card {
  height: 50vh;
  width: 50vw;
  padding: 2rem;
  background: #ecf0f1;
  box-shadow: 0.25rem 0.5125rem 1.1875rem -1rem #34495e;
  border-radius: 0.5rem;
  img {
    border-radius: 88%;
    height: 6rem;
    padding: 1rem;
    box-sizing: content-box;
    max-width: 100%;
  }
}
.f {
  overflow: hidden;
  .left {
    float: left;
    -webkit-box-reflect: below -29px -webkit-linear-gradient(
        bottom,
        rgba(255, 255, 255, 0.3) 0%,
        transparent 40%,
        transparent 100%
      );
  }
  .right {
    float: right;
  }
}
.v-mid {
  display: flex;
  align-items: center;
}
@media (max-width: 650px) {
  .card {
    width: 80vw;
  }
  .f .left,.f .right {
    float: none;
    text-align: center
  }
}

.delay {
  animation-delay: 1s;
  opacity: 0;
}
</style>

<script>
export default {
  props: {
    data: { require: true }
  }
};
</script>