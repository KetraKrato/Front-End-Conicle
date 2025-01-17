import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// save our state (isPanel open or not) 
export const store = Vue.observable({
  isNavOpen: false
});

// We call toggleNav anywhere we need it in our app
export const mutations = {
  toggleNav() {
      store.isNavOpen = !store.isNavOpen
  }
};

export default new Vuex.Store({
  state: {
    
  },
  mutations: {
    
  },
  actions: {
    addAction(context){
      context.commit('add')
    }
  },
  modules: {},
});
