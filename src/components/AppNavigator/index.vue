<template>
  <v-navigation-drawer app clipped>
    <v-list dense>
      <ListItem
        :title="'Bảng điều khiển'"
        :icon="'mdi-view-dashboard-outline'"
        :path="'dashboard'"
      />
      <ListItem
        :title="'Dịch vụ lưu trữ'"
        :icon="'mdi-folder-account-outline'"
        :path="'storage'"
      />
      <ListItem
        :title="'Dịch vụ tính toán'"
        :icon="'mdi-state-machine'"
        :path="'computing'"
      />
      <ListItem
        :title="'Dịch vụ máy ảo'"
        :icon="'mdi-remote-desktop'"
        :path="'virtual-machine'"
      />
      <v-divider dark class="my-4" />
      <ListItem
        :title="'Quản lý tài khoản'"
        :icon="'mdi-account-box-multiple-outline'"
      />
      <ListItem :title="'Quản lý dịch vụ'" :icon="'mdi-cached'" />
      <ListItem
        :title="'Quản lý tác vụ'"
        :icon="'mdi-calendar-clock'"
      />
      <ListItem
        :title="'Quản lý hệ thống'"
        :icon="'mdi-widgets-outline'"
      />
      <v-divider dark class="my-4" />
      <ListItem
        :title="'Cài đặt tài khoản'"
        :icon="'mdi-account-circle-outline'"
      />
      <ListItem :title="'Đăng xuất'" :icon="'mdi-login-variant'" />
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import ListItem from "./ListItem";
export default {
  components: { ListItem },
};
</script>

<style lang="sass" scoped></style>
