<template>
  <div class="wrap">
    <div class="hello">
      <h2 class="fade-up">你好  远方的朋友</h2>
      <p class="fade-up delay">很高兴 我们能够在此相遇</p>
    </div>
  </div>
</template>

<style scoped>
.warp {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.hello {
  position: absolute;
  right: 4rem;
  bottom: 20vh;
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
.delay {
  animation-delay: 1s;
  opacity: 0;
}
</style>