<template>
  <div id="app">
    <div class="overlay blur">
      <div class="ball"></div>
      <div class="ball"></div>
      <div class="ball"></div>
      <div class="ball"></div>
      <div class="ball"></div>
    </div>
    <Header></Header>
    <router-view>

    </router-view>
    <Footer></Footer>
  </div>
</template>
<script>
import app from "./components/HelloWorld";
import Header from './components/header';
import Footer from './components/footer'
export default {
  components: {
    app,
    Header,
    Footer
  }
};
</script>

<style lang="scss">
// @import url('./assets/all.css');
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
  }
}
</style>
