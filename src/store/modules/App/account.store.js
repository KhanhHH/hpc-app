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
  },
  accountById: {
    id: null,
    email: "",
    name: "",
    phone: "",
    workplace: "",
    selectedType: "",
    selectedStatus: ""
  },
  allAccount: null
};

const state = initalState;
const getters = {};
const mutations = {
  RESET(state, payload) {
    state[payload] = initalState[payload];
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
  },
  SET_ACCOUNT_BY_ID(state, payload) {
    state.accountById = payload;
  },
  SET_ALL_ACCOUNT(state, payload) {
    state.allAccount = payload;
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
      const {
        id,
        email,
        name,
        phone,
        workplace,
        type,
        status
      } = myAccount.data;
      commit("SET_MY_ACCOUNT", {
        id,
        email,
        name,
        phone,
        workplace,
        type,
        status
      });
      commit("SET_REQUEST_STATUS", "success");
    } catch (error) {
      commit("SET_REQUEST_STATUS", "error");
      const { message, statusCode } = error.response.data;
      commit("SET_REQUEST_ERROR", { message, statusCode });
    }
    commit("SET_IS_LOADING", false);
  },
  async getAccountById({ commit }, payload) {
    commit("SET_IS_LOADING", true);
    try {
      const { id } = payload;
      const accountById = await AccountService.getAccountById(id);
      const { email, name, phone, workplace, type, status } = accountById.data;
      commit("SET_ACCOUNT_BY_ID", {
        id,
        email,
        name,
        phone,
        workplace,
        selectedType: type,
        selectedStatus: status
      });
      commit("SET_REQUEST_STATUS", "success");
    } catch (error) {
      commit("SET_REQUEST_STATUS", "error");
      const { message, statusCode } = error.response.data;
      commit("SET_REQUEST_ERROR", { message, statusCode });
    }
    commit("SET_IS_LOADING", false);
  },
  async getAllAccount({ commit }) {
    commit("SET_IS_LOADING", true);
    try {
      const allAccount = await AccountService.getAllAccount();
      commit("SET_ALL_ACCOUNT", allAccount.data);
      commit("SET_REQUEST_STATUS", "success");
    } catch (error) {
      commit("SET_REQUEST_STATUS", "error");
      const { message, statusCode } = error.response.data;
      commit("SET_REQUEST_ERROR", { message, statusCode });
    }
    commit("SET_IS_LOADING", false);
  },
  async createAccount({ commit }, payload) {
    commit("SET_IS_LOADING", true);
    try {
      await AccountService.createAccount(payload);
      commit("SET_REQUEST_STATUS", "success");
    } catch (error) {
      commit("SET_REQUEST_STATUS", "error");
      const { message, statusCode } = error.response.data;
      const isMessageArray = Array.isArray(message);
      if (isMessageArray) {
        commit("SET_REQUEST_ERROR", { message: message[0], statusCode });
      } else {
        commit("SET_REQUEST_ERROR", { message, statusCode });
      }
    }
    commit("SET_IS_LOADING", false);
  },
  async updateAccount({ commit }, payload) {
    commit("SET_IS_LOADING", true);
    try {
      const { id, formSubmit } = payload;
      await AccountService.updateAccount(id, formSubmit);
      commit("SET_REQUEST_STATUS", "success");
    } catch (error) {
      commit("SET_REQUEST_STATUS", "error");
      const { message, statusCode } = error.response.data;
      const isMessageArray = Array.isArray(message);
      if (isMessageArray) {
        commit("SET_REQUEST_ERROR", { message: message[0], statusCode });
      } else {
        commit("SET_REQUEST_ERROR", { message, statusCode });
      }
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
