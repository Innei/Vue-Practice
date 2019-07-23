import axios from "axios";
import Vue from "vue";
const http = axios.create({
  baseURL: "http://localhost:3000/admin/api"
});

http.interceptors.response.use(  // 响应拦截器, 处理异常
  res => {
    return res;
  },
  err => { // status code >= 400 
    if (err.response.data.message) {
      Vue.prototype.$message({
        type: "error",
        message: err.response.data.message
      });
    }
    // console.log(err.response)
    return Promise.reject(err);
  }
);
export default http;
