import AccountService from "@/services/modules/account.service";

const initalState = {
  isLoading: false,
  loginForm: {
    email: "",
    password: ""
  },
  requestStatus: "",
  requestError: {
    code: "",
    message: ""
  },
  myAccount: {
    id: null,
    email: "",
    name: "",
    phone: "",
    workplace: "",
    type: "",
    status: ""
  }
};

const state = initalState;
const getters = {};
const mutations = {
  RESET(state) {
    Object.assign(state, initalState);
  },
  SET_IS_LOADING(state, payload) {
    state.isLoading = payload;
  },
  SET_LOGIN_FORM(state, payload) {
    state.loginForm = payload;
  },
  SET_REQUEST_ERROR(state, payload) {
    state.requestError = payload;
  },
  SET_REQUEST_STATUS(state, payload) {
    state.requestStatus = payload;
  },
  SET_MY_ACCOUNT(state, payload) {
    state.myAccount = payload;
  }
};
const actions = {
  reset({ commit }) {
    commit("RESET");
  },
  async submitLogin({ commit }, payload) {
    commit("SET_IS_LOADING", true);
    try {
      commit("SET_LOGIN_FORM", payload);
      const loginResult = await AccountService.login(payload);
      const { accessToken } = loginResult.data;
      localStorage.setItem("accessToken", accessToken);

      commit("SET_REQUEST_STATUS", "success");
    } catch (error) {
      commit("SET_REQUEST_STATUS", "error");
      const { message, statusCode } = error.response.data;
      commit("SET_REQUEST_ERROR", { message, statusCode });
    }
    commit("SET_IS_LOADING", false);
  },
  async getMyAccount({ commit }) {
    commit("SET_IS_LOADING", true);
    try {
      const myAccount = await AccountService.getMyAccount();
      const { id, email, name, phone, workplace, type } = myAccount.data;
      commit("SET_MY_ACCOUNT", {
        id,
        email,
        name,
        phone,
        workplace,
        type
      });
      commit("SET_REQUEST_STATUS", "success");
    } catch (error) {
      commit("SET_REQUEST_STATUS", "error");
      const { message, statusCode } = error.response.data;
      commit("SET_REQUEST_ERROR", { message, statusCode });
    }
    commit("SET_IS_LOADING", false);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
