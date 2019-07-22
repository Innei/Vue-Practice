module.exports = app => {
  const express = require("express");
  const router = express.Router({
    mergeParams: true // 合并父级路由参数
  });

  // 新增
  router.post("/", async (req, res) => {
    const model = await req.Model.create(req.body);
    res.send(model);
  });

  router.get("/", async (req, res) => {
    if (req.Model.modelName === "Category") {
      const isEdit = req.query.edit === "false" ? false : req.query.edit;
      const cateList = await req.Model.find().populate("parents");
      if (isEdit) {
        const index = cateList.findIndex(el => el._id == isEdit);
        cateList.splice(index, 1);
      }
      res.send(cateList);
      return;
    }
    const model = await req.Model.find();
    res.send(model);
  });

  // 删除
  router.delete("/:id", async (req, res) => {
    await req.Model.findByIdAndDelete(req.params.id);
    res.send({
      status: "success",
      message: "删除成功"
    });
  });

  // 详情
  router.get("/:id", async (req, res) => {
    const detail = await req.Model.findById(req.params.id);
    res.send(detail);
  });

  // 修改保存
  router.post("/:id", async (req, res) => {
    const model = await req.Model.findByIdAndUpdate(req.params.id, req.body);
    res.send(model);
  });

  app.use(
    "/admin/api/rest/:res",
    async (req, res, next) => {
      const ModelName = require("inflection").classify(req.params.res);
      req.Model = require(`../models/${ModelName}`); // 处理后挂载到请求体上
      next();
    },
    router
  );
  const multer = require("multer");
  const upload = multer({
    dest: __dirname + "/../uploads"
  });
  app.post("/admin/api/upload", upload.single("file"), async (req, res) => {
    const file = req.file;
    file.url = 'http://localhost:3000/uploads/' + file.filename
    res.send(file);
  });
};
