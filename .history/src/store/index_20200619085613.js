import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    recommend:[]
  },
  mutations: {
    setRecommend(state, data){
      state.recommend = data
    }
  },
  actions: {
  },
  modules: {
  }
})
