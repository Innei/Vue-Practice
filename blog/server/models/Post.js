const mongoose = require("mongoose");
const Article = mongoose.model(
  "Article",
  new mongoose.Schema({
    title: String,
    body: String,
    img: String,
    categories: [
      {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Category"
      }
    ],
    ctime: String,
    mtime: String
  })
);

module.exports = Article;
