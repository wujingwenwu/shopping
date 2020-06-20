import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    slides:[],
    category:[],
    advertesPicture:[]
  },
  mutations: {
    setRecommend(state, data){
      state.slides = data
    },
    setCategory(state, data){
      state.category = data
    },
    setAdvertesPicture(state, data){
      state.advertesPicture = data
    },
  },
  actions: {
    advertesPicture
  },
  modules: {
  }
})
