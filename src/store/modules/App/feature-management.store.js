import FeatureService from "@/services/modules/feature.service";

const initalState = {
  isLoading: false,
  requestStatus: "",
  requestError: {
    code: "",
    message: ""
  },
  featureRequestList: [],
  approvedStorageList: []
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
  SET_REQUEST_ERROR(state, payload) {
    state.requestError = payload;
  },
  SET_REQUEST_STATUS(state, payload) {
    state.requestStatus = payload;
  },
  SET_FEATURE_REQUEST_LIST(state, payload) {
    state.featureRequestList = payload;
  },
  SET_APPROVED_STORAGE_LIST(state, payload) {
    state.approvedStorageList = payload;
  }
};
const actions = {
  reset({ commit }) {
    commit("RESET");
  },

  async getAllFeatureRequest({ commit }) {
    commit("SET_IS_LOADING", true);
    try {
      const allFeatureRequest = await FeatureService.getAllFeatureRequest();
      commit("SET_FEATURE_REQUEST_LIST", allFeatureRequest.data);

      commit("SET_REQUEST_STATUS", "success");
    } catch (error) {
      commit("SET_REQUEST_STATUS", "error");
      const { message, statusCode } = error.response.data;
      const isMessageArray = Array.isArray(message);
      if (isMessageArray) {
        commit("SET_REQUEST_ERROR", {
          message: message[0],
          statusCode
        });
      } else {
        commit("SET_REQUEST_ERROR", { message, statusCode });
      }
    }
    commit("SET_IS_LOADING", false);
  },
  async updateFeatureRequestStatus({ commit }, payload) {
    commit("SET_IS_LOADING", true);
    try {
      const { id, status } = payload;
      await FeatureService.updateFeatureRequestStatus(id, { status });
      const allFeatureRequest = await FeatureService.getAllFeatureRequest();
      commit("SET_FEATURE_REQUEST_LIST", allFeatureRequest.data);
      commit("SET_REQUEST_STATUS", "success");
    } catch (error) {
      commit("SET_REQUEST_STATUS", "error");
      const { message, statusCode } = error.response.data;
      const isMessageArray = Array.isArray(message);
      if (isMessageArray) {
        commit("SET_REQUEST_ERROR", {
          message: message[0],
          statusCode
        });
      } else {
        commit("SET_REQUEST_ERROR", { message, statusCode });
      }
    }
    commit("SET_IS_LOADING", false);
  },
  async getAllApprovedStorage({ commit }) {
    commit("SET_IS_LOADING", true);
    try {
      const approvedStorageList = await FeatureService.getAllApprovedStorage();
      commit("SET_APPROVED_STORAGE_LIST", approvedStorageList.data);

      commit("SET_REQUEST_STATUS", "success");
    } catch (error) {
      commit("SET_REQUEST_STATUS", "error");
      const { message, statusCode } = error.response.data;
      const isMessageArray = Array.isArray(message);
      if (isMessageArray) {
        commit("SET_REQUEST_ERROR", {
          message: message[0],
          statusCode
        });
      } else {
        commit("SET_REQUEST_ERROR", { message, statusCode });
      }
    }
    commit("SET_IS_LOADING", false);
  },
  async updateApprovedStorage({ commit }, payload) {
    commit("SET_IS_LOADING", true);
    try {
      const { id, maxSize, endDate, status } = payload;
      await FeatureService.updateApprovedStorage(id, {
        maxSize,
        endDate,
        status
      });
      const approvedStorageList = await FeatureService.getAllApprovedStorage();
      commit("SET_APPROVED_STORAGE_LIST", approvedStorageList.data);
      commit("SET_REQUEST_STATUS", "success");
    } catch (error) {
      commit("SET_REQUEST_STATUS", "error");
      const { message, statusCode } = error.response.data;
      const isMessageArray = Array.isArray(message);
      if (isMessageArray) {
        commit("SET_REQUEST_ERROR", {
          message: message[0],
          statusCode
        });
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
