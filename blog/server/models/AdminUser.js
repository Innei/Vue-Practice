const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  username: {
    type: String
  },
  password: {
    type: String,
    select: false,  // 默认不被查询,避免多次散列, 前端将不会显示密码
    set(val) {
      return require('bcrypt').hashSync(val, 10)  // 密码散列存储
    }
  }
});

module.exports = mongoose.model("AdminUser", schema);
