<template>
  <div class="wrap">
    <div class="header">
      <div class="box">
        <p>这里的风景别样好, 要来和我坐坐吗~</p>
      </div>
    </div>

    <div class="mid">
      <div class="imgs fade-up">
        <div class="top">
          <img :src="data[0]" alt="">
          <!-- <img src="./../assets/imgs/2019-08-18 19.06.49.jpg" /> -->
        </div>
        <div class="bottom">
          <img :src="data[1]" alt="">
          <!-- <img src="../assets/imgs/remu 16.03.32.jpg" /> -->
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.wrap {
  position: absolute;
  left: 0;
  bottom: 0;
  top: 0;
  right: 0;
}
.mid {
  position: absolute;
  height: 20rem;
  width: 25rem;
  margin: auto;
  left: 0;
  right: 0;
  top: 60%;
  transform: translateY(-50%);
}
img {
  height: 13rem;
  max-width: 100%;
  min-width: 25rem;
  padding: 0.4rem;
  background: #e9ecee;
  border: 3px solid #ecf0f1;
  box-shadow: 0.25rem 0.5125rem 1.1875rem -1rem #34495e;
}
.top {
  position: absolute;
}
.bottom {
  position: relative;
  right: -4px;
  bottom: -3px;
  z-index: -1;
  // transform: rotate(-5deg);
  animation: rotate 1.5s ease-in-out forwards 1.5s;
}
@keyframes rotate {
  0% {
    transform: rotate(0);
  }
  to {
    transform: rotate(-5deg);
  }
}
.header {
  position: absolute;
  top: 4rem;
  text-align: center;
  left: 0;
  right: 0;
}
@media (max-width: 650px) {
  .header {
    top: 20vh
  }
}
.box {
  background: #ecf0f1a1;
  display: inline-block;
  padding: 0.5rem 2rem;
  border-radius: 4rem;
}
</style>
<script>
import data from "../config";
export default {
  data() {
    return {
      data: [...data.other.imgs]
    };
  }
};
</script>