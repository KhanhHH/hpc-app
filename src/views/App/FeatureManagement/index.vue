<template>
  <div class="">
    <v-tabs grow>
      <v-tab to="request-list">Danh sách yêu cầu dịch vụ</v-tab>
      <v-tab to="approved-request-list">Dịch vụ đã phê duyệt</v-tab>
    </v-tabs>
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped></style>
