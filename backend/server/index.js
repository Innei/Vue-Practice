const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/blog", {
  useCreateIndex: true,
  useNewUrlParser: true,
  useFindAndModify: true
});

const Article = mongoose.model(
  "Article",
  new mongoose.Schema({
    title: String,
    body: String
  })
);

module.exports = Article;
app.use(require("cors")());
app.use(express.json());
app.get("/", async (req, res) => {
  res.send("index");
});

// 新增文章
app.post("/api/posts", async (req, res) => {
  const post = await Article.create(req.body);
  res.send(post);
});

app.get("/api/posts", async (req, res) => {
  const posts = await Article.find();
  res.send(posts);
});

// 删除文章
app.delete("/api/posts/:id", async (req, res) => {
  await Article.findByIdAndDelete(req.params.id);
  res.send({
    status: "success",
    message: "删除成功"
  });
});

// 文章详情
app.get("/api/posts/:id", async (req, res) => {
  const detail = await Article.findById(req.params.id);
  res.send(detail);
});

// 修改保存文章
app.post("/api/posts/:id", async (req, res) => {
  const post = await Article.findByIdAndUpdate(req.params.id, req.body)
  res.send(post);
});

app.listen(3000, () => {
  console.log("http://127.0.0.1:3000");
});
