<template>
  <div class="container">
    <main id="home" class="clearfix">
      <section class="self">
        <img src="https://avatars2.githubusercontent.com/u/41265413?s=460&v=4" />
        <div id="info">
          <h1>YINY</h1>
          <p>正在学习前后端技术的一只萌新~</p>
        </div>
      </section>
      <section id="news">
        <div>
          <h2>
            <fi icon="book" />博文
          </h2>
          <ul>
            <li v-for="item in items" :key="item.url">
              <a
                :href="item.url"
                target="_blank"
              >{{item.title}}</a>
            </li>
          </ul>
          <p>
            <a target="_blank" href="https://blog.shizuri.net" class="more">
              在博客查看更新
              <i class="fas fa-angle-double-right"></i>
            </a>
          </p>
        </div>
        <div>
          <h2>
            <fi icon="archive"></fi>文章
          </h2>
          <ul>
            <li>
              <a href="https://shizuri.net/archives/111/" target="_blank">沉着冷静,探清道路</a>
            </li>
            <li>
              <a href="https://shizuri.net/archives/106/" target="_blank">漫笔杂谈</a>
            </li>
            <li>
              <a href="https://shizuri.net/archives/102/" target="_blank">时间不待人 ——致五月</a>
            </li>
            <li>
              <a href="https://shizuri.net/archives/99/" target="_blank">即将逝去的四月</a>
            </li>
            <li>
              <a href="https://shizuri.net/archives/96/" target="_blank">存坚持之心,开成功之门</a>
            </li>
            <li>
              <a href="https://shizuri.net/archives/87/" target="_blank">回顾从前,憧憬未来</a>
            </li>
          </ul>
          <p>
            <a target="_blank" href="https://shizuri.net" class="more">在博客查看更新</a>
          </p>
        </div>
      </section>
    </main>

    <div id="more-icon">
      <fi class="angle-down" />
    </div>
    <div id="more-loading" style="display: none;">loading...</div>
    <main class="more-content" style="display: none"></main>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  },
  data() {
    return {
      items: []
    };
  },
  created() {
    fetch("http://127.0.0.1:8000/json/url.json")
      .then(res => res.json())
      .then(json => (this.items = json));
  }
};
</script>
