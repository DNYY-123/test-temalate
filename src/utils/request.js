import axios from 'axios'
import { Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'
import { toLogin } from '@/utils/'
// const headers = {
//   'Content-Type': 'application/json',
//   'ERP-Request-Timestamp': new Date().getTime()
// }
// create an axios instance
const service = axios.create({
  // baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // baseURL: process.env.VUE_APP_URL_PREFIX_AUTH,
  baseURL: '',
  timeout: 50000 // request timeout
})
// service.defaults.headers = headers
// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent

    if (store.getters.token) {
      config.headers = {
        ...config.headers,
        // 'Content-Type': 'application/json',
        'ERP-Auth-Token': getToken(),
        'Access-Control-Expose-Headers': 'Authorization',
        'ERP-Request-Timestamp': new Date().getTime()
      }
    }
    // 针对post的请求设置
    if (config.method === 'post') {
      if (!config.data) config.data = {}
    } else if (config.method === 'get') {
      if (!config.params) config.params = {}
    }
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => {
    const res = response.data
    if (!res.resCode && res.resCode !== 0) return response

    // if the custom code is not 2000, it is judged as an error.
    if (res.resCode !== 200) {
      // 登录接口 特殊处理
      Message({
        message: res.resDes || 'Error',
        type: 'error',
        duration: 5 * 1000
      })

      if (res.resCode === 401) {
        Message({
          message: '身份授权已过期，请重新登录',
          type: 'error',
          duration: 5 * 1000
        })
        setTimeout(() => {
          store.dispatch('user/resetToken').then(() => {
            toLogin()
          })
        }, 1000)
      }
      return res
    } else {
      return res
    }
  },
  error => {
    console.log(error.response) // for debug
    if (error.response.data && error.response.data.resCode === 401) {
      Message({
        message: '身份授权已过期，请重新登录',
        type: 'error',
        duration: 5 * 1000
      })
      setTimeout(() => {
        store.dispatch('user/resetToken').then(() => {
          toLogin()
        })
      }, 1000)
      return
    }
    Message({
      message: error.resDes || error.response.data.resDes || '接口异常',
      type: 'error',
      duration: 5 * 1000
    })

    return Promise.reject(error)
  }
)

export default service
