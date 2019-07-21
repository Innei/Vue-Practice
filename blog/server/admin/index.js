module.exports = app => {
  const express = require("express");
  const router = express.Router();
  const Article = require("../models/Article");
  const Category = require("../models/Category");

  // 新增文章
  router.post("/posts", async (req, res) => {
    const post = await Article.create(req.body);
    res.send(post);
  });

  router.get("/posts", async (req, res) => {
    const posts = await Article.find();
    res.send(posts);
  });

  // 删除文章
  router.delete("/posts/:id", async (req, res) => {
    await Article.findByIdAndDelete(req.params.id);
    res.send({
      status: "success",
      message: "删除成功"
    });
  });

  // 文章详情
  router.get("/posts/:id", async (req, res) => {
    const detail = await Article.findById(req.params.id);
    res.send(detail);
  });

  // 修改保存文章
  router.post("/posts/:id", async (req, res) => {
    const post = await Article.findByIdAndUpdate(req.params.id, req.body);
    res.send(post);
  });

  router.post("/categories", async (req, res) => {
    const category = await Category.create(req.body);
    res.send(category);
  });
  router.get("/categories", async (req, res) => {
    res.send(await Category.find());
  });
  router.delete("/categories/:id", async (req, res) => {
    await Category.findByIdAndDelete(req.params.id);
    res.send({
      status: "success",
      message: "删除成功"
    });
  });
  
  app.use("/admin/api", router);
};
