import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'

import router from './route.js'
import store from './Store/index'

Vue.use(ElementUI)

import Api from './api/api'
Vue.use(Api);

import 'highlight.js/styles/agate.css'
import VueHighlightJS from 'vue-highlightjs'
Vue.use(VueHighlightJS)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
