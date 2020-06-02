// axios配置
import axios from 'axios'
import promise from 'es6-promise'
import apiPath from './path.js'
import Vue from 'vue'
// import store from '../store'

promise.polyfill()
axios.defaults.withCredentials = false
axios.defaults.headers.common['Content-Type'] = 'application/json, text/plain'
axios.defaults.retry = 4
axios.defaults.retryDelay = 1000

/*************************loadingStart************************* */
var loading, num = 0

function startLoading() {
    // loading = Vue.prototype.$loading({
    //     lock: true,
    //     text: '加载中……',
    //     background: 'rgba(0, 0, 0, 0.7)'
    // })
}

function endLoading() {
    num = 0
    loading.close()
}
/**************************loadingEnd************************ */
function signOut () {
    Cookies.remove('ms_username');
    location.reload();
  }
/**************************pushLoadingStart************************ */

axios.interceptors.request.use(function(config) {
    num++
    startLoading()
    return config
})
axios.interceptors.response.use(response => {
    num--
    if (num <= 0) {
        let timer = setTimeout(() => {
            clearTimeout(timer)
            endLoading()
        }, 300)
    }
    return response
},
error => {
    if (error.response) {
    //   clearTimeout(timer)
      endLoading()
      switch (error.response.status) {
        case 401:
            Vue.prototype.$confirm('登录信息失效,请重新登录', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
              }).then(() => {
                signOut()
              })
              .catch(() => {
                signOut()
              });
          break
        case 404:
          break
        case 500:
          break
        case 400:
          break
      }
    }
  })
    /**************************pushLoadingEnd************************ */

/**
 * @param {请求地址} url
 * @param {请求参数} data
 * @param {Post/Get 默认get} method
 */
const http = (url, data, method = 'GET', responseType = 'json') => {
    return new Promise((resolve, reject) => {
        // let token = store.state.token  token: 'token'
        let obj = {

        }
        if (method == 'GET') {
            obj = Object.assign(obj, data)
        }
        axios({
            method: method,
            url: url,
            params: obj,
            data: data,
            responseType: responseType
        }).then(function(response) {
            console.log(response.data.code)
          if (response.data.code == 200 && response.status == 200) {
                resolve(response.data)
            } else {
                resolve(response.data)
                Vue.prototype.$message({
                    type: 'error',
                    message: response.data.msg
                })
            }
        }).catch(function(error) {
            Vue.prototype.$message({
                type: 'error',
                message: error.response.data.msg
            })
            reject(error)
            let timer = setTimeout(() => {
                clearTimeout(timer)
                endLoading()
            }, 300)
        })
    })
}

export {
    http,
    apiPath,
    axios
}
