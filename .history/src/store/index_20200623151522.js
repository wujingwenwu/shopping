import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    slides:[],
    category:[],
    recommend:[],
    floor1:[],
    userInfo:{},
    year:'',
    month:'',
    day:'',
  },
  mutations: {
    setSlides(state, data){
      state.slides = data
    },
    setCategory(state, data){
      state.category = data
    },
    setRecommend(state, data){
      state.recommend = data
    },
    setFloor1(state, data){
      state.floor1 = data
    },
    setUserInfo(state, data){
      state.userInfo = data
    },
    setYear(state, data){
      state.year = data
    },
    setMonth(state, data){
      state.month = data
    },
    setDay(state, data){
      state.day = data
    },


  
   
  },
  actions: {
   
  },
  modules: {
  }
})
