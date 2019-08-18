<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
* {
  box-sizing: border-box;
}
html,
body {
  margin: 0;
  padding: 0;
}
body::before {
  content: "";
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  background: url("./assets/background.png");
}

@keyframes fade-up {
  0% {
    transform: translateY(5px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
.fade-up {
  animation: fade-up 1s ease-in forwards;
}

::-webkit-scrollbar {
  height: 0;
  width: 0
}
</style>

<script>
import "./assets/css/kico.css";
export default {};
</script>