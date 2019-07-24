const jwt = require('jsonwebtoken')
const assert = require('http-assert')

const auth = async (req, res, next) => {
  const token = req.headers.authorization || ''
    assert(token, 401, 'jwt必须提供')
    
  // req.app.get === app.get   app => express 实例 ,因为这里 express实例 取不到
  const tokenData = jwt.verify(token, req.app.get('secret')) // 验证
  // { id: '5d36c038bd1d9eb7651708ad', iat: 1563872622 }
  const { id } = tokenData
  assert(id, 401, '无效的jwt')
  const User = require('../models/AdminUser')
  req.user = await User.findById(id)
  // { _id: 5d36c038bd1d9eb7651708ad, username: 'admin', __v: 0 }
  assert(req.user, 401, '请先登录')
  await next()
}

module.exports = options => {
  return auth
}
