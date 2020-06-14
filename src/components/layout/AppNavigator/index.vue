<template>
  <v-navigation-drawer app clipped v-model="drawer">
    <v-list dense>
      <MenuListItem
        :title="'Dịch vụ của tôi'"
        :icon="'mdi-layers-triple-outline'"
        :path="'service-dashboard'"
      />
      <MenuListItem
        :title="'Dịch vụ dữ liệu'"
        :icon="'mdi-folder-account-outline'"
        :path="'storage'"
        :disabled="featureRequestStatus.storage !== 'approved'"
      />
      <MenuListItem
        :title="'Dịch vụ tính toán'"
        :icon="'mdi-state-machine'"
        :path="'computing'"
        :disabled="featureRequestStatus.computing !== 'approved'"
      />
      <MenuListItem
        :title="'Dịch vụ máy ảo'"
        :icon="'mdi-remote-desktop'"
        :path="'virtual-machine'"
        :disabled="featureRequestStatus.virtualMachine !== 'approved'"
      />
      <template v-if="accountType === 'admin'">
        <v-divider dark class="my-4" />
        <MenuListItem
          :title="'Quản lý người dùng'"
          :icon="'mdi-account-box-multiple-outline'"
          :path="'account-management'"
        />
        <MenuListItem
          :title="'Quản lý dịch vụ'"
          :icon="'mdi-cached'"
          :path="'feature-management'"
        />
        <MenuListItem
          :title="'Quản lý tính toán'"
          :icon="'mdi-calendar-clock'"
          :path="'computing-management'"
        />
        <MenuListItem
          :title="'Quản lý máy ảo'"
          :icon="'mdi-widgets-outline'"
          :path="'virtual-machine-management'"
        />
      </template>
      <v-divider dark class="my-4" />
      <MenuListItem
        :title="'Cài đặt tài khoản'"
        :icon="'mdi-account-circle-outline'"
        :disabled="true"
      />
      <v-list-item @click="logout()">
        <v-list-item-action>
          <v-icon>mdi-login-variant</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Đăng xuất</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import Jwt from "@/utils/jwt";

import MenuListItem from "./MenuListItem";
import { mapState } from "vuex";
export default {
  components: { MenuListItem },
  data: () => ({
    accountType: null
  }),
  computed: {
    ...mapState("featureRequest", ["featureRequestStatus"]),
    drawer: {
      get() {
        return this.$store.state.ui.drawer;
      },
      set(value) {
        return this.$store.dispatch("ui/toggleDrawer", value);
      }
    }
  },
  created() {
    this.accountType = Jwt.getProperty("type");
  },
  methods: {
    logout() {
      localStorage.clear();
      window.location.href = process.env.VUE_APP_URL + "/login";
    }
  }
};
</script>

<style lang="sass" scoped></style>
