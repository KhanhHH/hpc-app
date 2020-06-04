import StorageService from "@/services/modules/storage.service";

const initalState = {
  isLoading: false,
  requestStatus: "",
  requestError: {
    code: "",
    message: ""
  },
  selectedFile: null,
  myStorage: {
    currentSize: 0,
    maxSize: 0,
    startDate: null,
    endDate: null,
    status: null
  },
  currentFolder: {
    id: null,
    folderType: null // root, directory
  },
  fileList: [],
  folderList: []
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
  SET_SELECTED_FILE(state, payload) {
    state.selectedFile = payload;
  },
  SET_MY_STORAGE(state, payload) {
    state.myStorage = payload;
  },
  SET_CURRENT_FOLDER(state, payload) {
    state.currentFolder = payload;
  },
  SET_FILE_LIST(state, payload) {
    state.fileList = payload;
  },
  SET_FOLDER_LIST(state, payload) {
    state.folderList = payload;
  }
};
const actions = {
  selectFile({ commit }, payload) {
    commit("SET_SELECTED_FILE", payload);
  },
  async getMyStorage({ commit }) {
    commit("SET_IS_LOADING", true);
    try {
      const myStorage = await StorageService.getMyStorage();
      const {
        currentSize,
        maxSize,
        startDate,
        endDate,
        status,
        rootFolderId
      } = myStorage.data;
      commit("SET_MY_STORAGE", {
        currentSize,
        maxSize,
        startDate,
        endDate,
        status
      });

      commit("SET_CURRENT_FOLDER", {
        id: rootFolderId,
        folderType: "root"
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
  async getFolder({ commit }, payload) {
    commit("SET_IS_LOADING", true);
    try {
      const { id, folderType } = payload;
      commit("SET_CURRENT_FOLDER", { id, folderType });
      const folder = await StorageService.getFolder(id);
      const { childFiles, childFolders } = folder.data;
      commit("SET_FILE_LIST", childFiles);
      commit("SET_FOLDER_LIST", childFolders);
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
