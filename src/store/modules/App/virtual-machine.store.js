import VirtualMachineService from "@/services/modules/virtual-machine.service";

const initalState = {
  isLoading: false,
  requestStatus: "",
  requestError: {
    code: "",
    message: ""
  },
  myVirtualMachine: {
    startDate: null,
    endDate: null,
    status: null
  },
  myVps: [],
  allVps: []
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
  SET_MY_VIRTUAL_MACHINE(state, payload) {
    state.myVirtualMachine = payload;
  },
  SET_MY_VPS(state, payload) {
    state.myVps = payload;
  },
  SET_ALL_VPS(state, payload) {
    state.allVps = payload;
  }
};
const actions = {
  async getMyVirtualMachine({ commit }) {
    commit("SET_IS_LOADING", true);
    try {
      const myVirtualMachine = await VirtualMachineService.getMyVirtualMachine();
      const { startDate, endDate, status } = myVirtualMachine.data;
      commit("SET_MY_VIRTUAL_MACHINE", {
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
  async getMyVps({ commit }) {
    commit("SET_IS_LOADING", true);
    try {
      const myVps = await VirtualMachineService.getMyVps();
      commit("SET_MY_VPS", myVps.data);
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
  async getAllVps({ commit }) {
    commit("SET_IS_LOADING", true);
    try {
      const allVps = await VirtualMachineService.getAllVps();
      commit("SET_ALL_VPS", allVps.data);
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
  async createVps({ commit }, payload) {
    commit("SET_IS_LOADING", true);
    try {
      const { cpu, ram, hdd } = payload;
      await VirtualMachineService.createVps({ cpu, ram, hdd });
      const myVps = await VirtualMachineService.getMyVps();
      commit("SET_MY_VPS", myVps.data);
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
  async updateVps({ commit }, payload) {
    commit("SET_IS_LOADING", true);
    try {
      const { id, body } = payload;
      const { approveStatus } = body;
      await VirtualMachineService.updateVps(id, { approveStatus });
      const allVps = await VirtualMachineService.getAllVps();
      commit("SET_ALL_VPS", allVps.data);
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
