import Vue from "vue";
import Vuex from "vuex";

import StorageStore from "./modules/App/storage.store";
import AccountStore from "./modules/App/account.store";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    account: AccountStore,
    storage: StorageStore
  }
});
