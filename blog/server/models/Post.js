const mongoose = require("mongoose");
const Article = mongoose.model(
  "Article",
  new mongoose.Schema({
    title: String,
    body: String
  })
);

module.exports = Article;
