const initalState = {
  snackbar: {
    status: false,
    timeout: 5000,
    message: ""
  },
  drawer: true
};

const state = initalState;
const getters = {};
const mutations = {
  SET_SNACKBAR(state, payload) {
    const { timeout, message } = payload;
    state.snackbar.timeout = timeout;
    state.snackbar.message = message;
  },
  TOGGLE_SNACKBAR(state, payload) {
    state.snackbar.status = payload;
  },
  TOGGLE_DRAWER(state, payload) {
    state.drawer = payload;
  }
};
const actions = {
  showSnackbar({ commit }, payload) {
    commit("SET_SNACKBAR", payload);
    commit("TOGGLE_SNACKBAR", true);
  },
  closeSnackbar({ commit }) {
    commit("TOGGLE_SNACKBAR", false);
  },
  toggleDrawer({ commit }, payload) {
    commit("TOGGLE_DRAWER", payload);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
