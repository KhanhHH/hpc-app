import Vue from "vue";
import Vuex from "vuex";

import StorageStore from "./modules/App/storage.store";
import AccountStore from "./modules/App/account.store";
import UIStore from "./modules/App/ui.store";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    ui: UIStore,
    account: AccountStore,
    storage: StorageStore
  }
});
