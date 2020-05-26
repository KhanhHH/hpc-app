import Vue from "vue";
import Vuex from "vuex";

import StorageStore from "./modules/App/Storage";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    storage: StorageStore
  }
});
