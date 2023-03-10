/* eslint-disable */
import Vue from "vue"
import App from "./App.vue"
import './assets/tailwind.css'
import 'material-design-icons-iconfont'

import router from "./router/index.js"
import store from "./store"
import './assets/tailwind.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount("#app");
