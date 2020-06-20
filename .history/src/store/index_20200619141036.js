import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    slides:[],
    category:[],
    recommend:[],
    floora:[]
   
  },
  mutations: {
    setRecommend(state, data){
      state.slides = data
    },
    setCategory(state, data){
      state.category = data
    },
    setRecommend(state, data){
      state.recommend = data
    },
    setFloora(state, data){
      state.floora = data
    },
  },
  actions: {
   
  },
  modules: {
  }
})
