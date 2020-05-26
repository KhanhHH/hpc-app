const initalState = {
  selectedFile: null
};

const state = initalState;
const getters = {};
const mutations = {
  SET_SELECTED_FILE(state, payload) {
    state.selectedFile = payload;
  }
};
const actions = {
  selectFile({ commit }, payload) {
    commit("SET_SELECTED_FILE", payload);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
