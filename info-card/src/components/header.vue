<template>
  <header>
    <nav>
      <ul>
        <li v-for="item in nav" :key="item.name">
          <router-link :to="item.url">{{item.name}}</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>
<style lang="scss" scoped>
header {
  position: fixed;
  top: 0;
  height: 3rem;
  left: 0;
  right: 0;
  background: #ecf0f1;
  z-index: 9;
}
nav {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
li {
  display: inline-block;
  padding: 0.5rem 1rem;
}
</style>
<script>
export default {
  data() {
    return {
      nav: [
        {
          name: "Home",
          url: "/"
        },
        {
          name: "About",
          url: "/about"
        },
        {
          name: "Photo",
          url: "/photo"
        },
        {
          name: "Connect",
          url: "/connect"
        }
      ]
    };
  }
};
</script>