import FeatureService from "@/services/modules/feature.service";

const initalState = {
  isLoading: false,
  requestStatus: "",
  requestError: {
    code: "",
    message: ""
  },
  featureRequestStatus: {
    storage: null,
    computing: null,
    virtualMachine: null
  }
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
  SET_FEATURE_REQUEST_STATUS(state, payload) {
    state.featureRequestStatus = payload;
  }
};
const actions = {
  reset({ commit }) {
    commit("RESET");
  },

  async getMyFeatureRequestStatus({ commit }) {
    commit("SET_IS_LOADING", true);
    try {
      const myFeatureRequestStatus = await FeatureService.getMyFeatureRequestStatus();
      const {
        storageRequestStatus,
        computingRequestStatus,
        virtualMachineRequestStatus
      } = myFeatureRequestStatus.data;
      commit("SET_FEATURE_REQUEST_STATUS", {
        storage: storageRequestStatus,
        computing: computingRequestStatus,
        virtualMachine: virtualMachineRequestStatus
      });

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
  async submitStorageFeatureRequest({ commit }, payload) {
    commit("SET_IS_LOADING", true);
    try {
      const { maxSize, endDate } = payload;
      await FeatureService.requestStorage({
        maxSize: maxSize * 1073741824,
        endDate
      });
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
