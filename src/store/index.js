import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';
import getters from './getters';

Vue.use(Vuex);

const state = {
  isLoading: false,
  notesList: [],
  selectedNote: {
    _id: '',
    name: '',
    text: '',
  }
};

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
});

export default store;
