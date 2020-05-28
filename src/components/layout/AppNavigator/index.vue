<template>
  <v-navigation-drawer app clipped>
    <v-list dense>
      <!-- <MenuListItem
        :title="'Bảng điều khiển'"
        :icon="'mdi-view-dashboard-outline'"
        :path="'dashboard'"
      /> -->
      <MenuListItem
        :title="'Dịch vụ của tôi'"
        :icon="'mdi-layers-triple-outline'"
        :path="'service-dashboard'"
      />
      <MenuListItem
        :title="'Dịch vụ dữ liệu'"
        :icon="'mdi-folder-account-outline'"
        :path="'storage'"
      />
      <MenuListItem
        :title="'Dịch vụ tính toán'"
        :icon="'mdi-state-machine'"
        :path="'computing'"
      />
      <MenuListItem
        :title="'Dịch vụ máy ảo'"
        :icon="'mdi-remote-desktop'"
        :path="'virtual-machine'"
      />
      <v-divider dark class="my-4" />
      <MenuListItem
        :title="'Quản lý người dùng'"
        :icon="'mdi-account-box-multiple-outline'"
        :path="'account-management'"
      />
      <MenuListItem :title="'Quản lý dịch vụ'" :icon="'mdi-cached'" />
      <MenuListItem :title="'Quản lý tác vụ'" :icon="'mdi-calendar-clock'" />
      <MenuListItem :title="'Quản lý hệ thống'" :icon="'mdi-widgets-outline'" />
      <v-divider dark class="my-4" />
      <MenuListItem
        :title="'Cài đặt tài khoản'"
        :icon="'mdi-account-circle-outline'"
      />
      <MenuListItem :title="'Đăng xuất'" :icon="'mdi-login-variant'" />
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import MenuListItem from "./MenuListItem";
export default {
  components: { MenuListItem }
};
</script>

<style lang="sass" scoped></style>
