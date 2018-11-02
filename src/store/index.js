import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

import ApiDoc from './ApiDoc'

const store = new Vuex.Store({
  modules: {
  	ApiDoc
  }
})

export default store;