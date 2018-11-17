import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'

import router from './route.js'
import store from './Store/index'

import fontAwasomeIcon from './icon.js'

Vue.use(ElementUI)

import Api from './api/api'
Vue.use(Api);

import Utils from './utils/utils'
Vue.use(Utils);

import 'highlight.js/styles/dracula.css'
import VueHighlightJS from 'vue-highlightjs'
Vue.use(VueHighlightJS)

import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard)

import normalize from 'normalize.css'
import CommonStyle from './assets/stylesheet/common.css'

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
