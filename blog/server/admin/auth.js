const jwt = require('jsonwebtoken')
const assert = require('http-assert')
module.exports = app => {
  // 登陆接口
  app.post('/admin/api/login', async (req, res) => {
    const { username, password } = req.body
    // 找用户
    const User = require('../models/AdminUser')
    const user = await User.findOne({
      username
    }).select('+password')
    // if (!user) {
    //   return res.status(422).send({
    //     message: "用户不存在"
    //   });
    // }
    assert(user, 422, '用户不存在')
    // 校验密码
    const isValid = require('bcrypt').compareSync(password, user.password)
    // if (!isValid) {
    //   return res.status(422).send({
    //     message: "密码错误"
    //   });
    // }
    assert(isValid, 422, '密码错误')
    // 返回 token

    const token = jwt.sign(
      {
        id: user._id
      },
      app.get('secret')
    )

    res.send({
      token,
      username
    })
  })
}
