import App from './App'

// #ifndef VUE3
import Vue from 'vue'
//引入封装的请求
import { myHttp } from 'api/api.js'
Vue.prototype.$myHttp = myHttp

Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif