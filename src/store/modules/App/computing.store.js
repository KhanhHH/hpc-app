import ComputingService from "@/services/modules/computing.service";
import StorageService from "@/services/modules/storage.service";

const initalState = {
  isLoading: false,
  requestStatus: "",
  requestError: {
    code: "",
    message: ""
  },
  myComputing: {
    userType: null,
    maxCpu: 0,
    maxRam: 0,
    startDate: null,
    endDate: null,
    status: null
  },
  myComputingQueue: []
};

const state = initalState;
const getters = {};
const mutations = {
  SET_IS_LOADING(state, payload) {
    state.isLoading = payload;
  },
  SET_REQUEST_ERROR(state, payload) {
    state.requestError = payload;
  },
  SET_REQUEST_STATUS(state, payload) {
    state.requestStatus = payload;
  },
  SET_MY_COMPUTING(state, payload) {
    state.myComputing = payload;
  },
  SET_MY_COMPUTING_QUEUE(state, payload) {
    state.myComputingQueue = payload;
  }
};
const actions = {
  async getMyComputing({ commit }) {
    commit("SET_IS_LOADING", true);
    try {
      const myComputing = await ComputingService.getMyComputing();
      const {
        userType,
        maxCpu,
        maxRam,
        startDate,
        endDate,
        status
      } = myComputing.data;
      commit("SET_MY_COMPUTING", {
        userType,
        maxCpu,
        maxRam,
        startDate,
        endDate,
        status
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
  async getMyComputingQueue({ commit }) {
    commit("SET_IS_LOADING", true);
    try {
      const myComputingQueue = await ComputingService.getMyComputingQueue();
      commit("SET_MY_COMPUTING_QUEUE", myComputingQueue.data);
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
  async createComputingQueue({ commit }, payload) {
    commit("SET_IS_LOADING", true);
    try {
      const { form, formData } = payload;
      const { cpu, maxRamPerProcess } = form;
      const uploadedScript = await StorageService.uploadScript(formData);
      console.log({
        script: uploadedScript.data.originalname,
        cpu,
        maxRamPerProcess
      });
      await ComputingService.createComputingQueue({
        script: uploadedScript.data.originalname,
        cpu,
        maxRamPerProcess
      });
      const myComputingQueue = await ComputingService.getMyComputingQueue();
      commit("SET_MY_COMPUTING_QUEUE", myComputingQueue.data);
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
