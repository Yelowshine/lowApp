import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: "shallow",
    userData: {
      call: "maybe",
      color: "skyBlue",
      mind:"shadow",
    },
    count: 0,
  },
  getters:{
    callYou: (state)=>{
      return state.name + "有人叫你"
    },
    maybe: () =>{
      return "ni de"
    }
    
  },
  mutations: {
    increment(state){
      state.count++
    }
  },
  actions: {
    actionA(context){
      setTimeout(() => {
      context.commit("increment")
      }, 2000);
    }
  },
  modules: {
  }
})
