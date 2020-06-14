import Vue from "vue";
import Vuex from "vuex";

import StorageStore from "./modules/App/storage.store";
import ComputingStore from "./modules/App/computing.store";
import VirtualMachineStore from "./modules/App/virtual-machine.store";
import AccountStore from "./modules/App/account.store";
import UIStore from "./modules/App/ui.store";
import FeatureRequestStore from "./modules/App/feature-request.store";
import FeatureManagementStore from "./modules/App/feature-management.store";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    ui: UIStore,
    account: AccountStore,
    storage: StorageStore,
    computing: ComputingStore,
    virtualMachine: VirtualMachineStore,
    featureRequest: FeatureRequestStore,
    featureManagement: FeatureManagementStore
  }
});
