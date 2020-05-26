<template>
  <div class="d-flex ml-3 mr-3">
    <div class="d-flex align-center">
      <span class="title mr-3 "> Folder của tôi</span> /
      <span class="title ml-3 mr-3 "> Thư mục xyz </span>
    </div>
    <v-spacer />
    <v-btn
      color="primary depressed"
      class="mr-2"
      @click="openConfirmDeleteDialog()"
    >
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
    <ConfirmDialog
      :title="'Xóa file'"
      :message="'Bạn có chắc chắn muốn xóa file này không?'"
      :dialog="isOpenConfirmDeleteDialog"
      @isConfirm="onConfirmDeleteDialog($event)"
    />
  </div>
</template>

<script>
import { mapState } from "vuex";

import ConfirmDialog from "@/components/ui/ConfirmDialog";
export default {
  components: { ConfirmDialog },
  computed: { ...mapState("storage", ["selectedFile"]) },
  data: () => ({
    isOpenConfirmDeleteDialog: false
  }),
  methods: {
    openConfirmDeleteDialog() {
      if (this.selectedFile) {
        this.isOpenConfirmDeleteDialog = true;
      } else {
        this.isOpenConfirmDeleteDialog = false;
      }
    },
    onConfirmDeleteDialog(event) {
      this.isOpenConfirmDeleteDialog = false;
      if (event === true) {
        if (this.selectedFile) {
          console.log("delete file");
        }
        return;
      }
      if (event === false) {
        return;
      }
    }
  }
};
</script>

<style lang="sass" scoped></style>
