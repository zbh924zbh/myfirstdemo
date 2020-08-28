// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import './assets/css/reset.css'
import './assets/js/remScale'

import 'element-ui/lib/theme-chalk/index.css'

import ElementUi from 'element-ui'

Vue.use(ElementUi)


// import Vant from 'vant-ui'

// Vue.use(VantUi)
//矢量图  引入
import './assets/tu biao/iconfont.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
