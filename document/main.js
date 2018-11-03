import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'

import router from './route.js'

Vue.use(ElementUI)


import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faGithub)
Vue.component('font-awesome-icon', FontAwesomeIcon)


import normalize from 'normalize.css'
import CommonStyle from './assets/stylesheet/common.css'


import 'highlight.js/styles/agate.css'
import VueHighlightJS from 'vue-highlightjs'
Vue.use(VueHighlightJS)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
