<template>
  <div class="finally">
    <div class="header">
      <div class="box">
        <p>以上就是我的全部介绍啦~</p>
        <p>有兴趣的小伙伴可以通过以下方式找到我哦</p>
      </div>

      <div class="list">
        <item v-for="item in data" :key="item.url" :data="item" />
      </div>
    </div>

    <footer>
      <p>
        © {{year}} Design By
        <a href="https://github.com/Innei/" target="_blank">Innei</a>.
      </p>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
.header {
  position: absolute;
  top: 4rem;
  text-align: center;
  left: 0;
  right: 0;
}
footer {
  position: fixed;
  bottom: 2rem;
  left: 0;
  right: 0;
  text-align: center;
}
.box {
  background: #ecf0f1a1;
  display: inline-block;
  padding: 0.5rem 2rem;
  border-radius: 4rem;
}
.list {
  width: 20rem;
  left: 0;
  right: 0;
  margin: auto;
  transform: translateY(5rem);
}
@media (max-width: 650px) {
  .header {
    top: 20vh
  }
}
</style>
<script>
import data from "../config";
export default {
  data() {
    return { data: [...data.societies] };
  },
  components: {
    item: () => import("../components/item.vue")
  },
  computed: {
    year() {
      const d = new Date();
      return d.getYear() + 1900;
    }
  }
};
</script>