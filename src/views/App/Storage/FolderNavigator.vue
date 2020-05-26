<template>
  <div class="d-flex ml-3 mr-3">
    <div class="d-flex align-center">
      <span class="title mr-3 "> Folder của tôi</span> /
      <span class="title ml-3 mr-3 "> Thư mục xyz </span>
    </div>
    <v-spacer />
    <v-btn color="primary depressed" class="mr-2">
      <v-icon class="mr-2">mdi-trash-can-outline</v-icon>
      <span>Xóa</span>
    </v-btn>
    <v-btn color="primary depressed" class="mr-2">
      <v-icon class="mr-2">mdi-file-edit-outline</v-icon>
      <span>Đổi tên</span>
    </v-btn>
    <v-btn color="primary depressed" class="mr-4">
      <v-icon class="mr-3">mdi-cloud-upload-outline</v-icon>
      <span>Upload tệp</span>
    </v-btn>
  </div>
</template>

<script>
export default {
  components: {},
  data: () => ({
    items: [
      {
        text: "Dashboard",
        disabled: false,
        href: "/app/storage"
      },
      {
        text: "Link 1",
        disabled: false,
        href: "/app/storage/folder/123"
      }
    ]
  })
};
</script>

<style lang="sass" scoped></style>
