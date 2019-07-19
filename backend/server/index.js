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
    const posts = await Article.find()
    res.send(posts)
});

app.listen(3000, () => {
  console.log("http://127.0.0.1:3000");
});
