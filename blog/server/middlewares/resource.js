const jwt = require('jsonwebtoken')
const assert = require('http-assert')
const resource = async (req, res, next) => {
  const ModelName = require('inflection').classify(req.params.res)
  req.Model = require(`../models/${ModelName}`) // 处理后挂载到请求体上
  next()
}

module.exports = options => {
  return resource
}
