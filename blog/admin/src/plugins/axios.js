import axios from 'axios'
import Vue from 'vue'
import router from '../router'
const http = axios.create({
  baseURL: 'http://localhost:3000/admin/api'
})

http.interceptors.response.use(
  // 响应拦截器, 处理异常
  res => {
    return res
  },
  err => {
    // status code >= 400
    if (err.response.data.message) {
      Vue.prototype.$message({
        type: 'error',
        message: err.response.data.message
      })
    }

    // 401 -> login
    if (err.response.status === 401) {
      router.push('/login')
    }
    // console.log(err.response)
    return Promise.reject(err)
  }
)

http.interceptors.request.use(conf => {
  if (localStorage.token) {
    conf.headers.Authorization = localStorage.token
  }
  return conf
})
export default http
