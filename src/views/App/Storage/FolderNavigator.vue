<template>
  <div class="d-flex ml-3 mr-1">
    <div class="d-flex align-center">
      <span class="title mr-3 ">Folder của tôi</span> /
      <span style="max-width: 200px; " class="title ml-3 mr-3 text-truncate">
        Thư mục xyz
      </span>
    </div>
    <v-spacer />
    <v-btn
      :disabled="!selectedFile"
      color="primary depressed"
      class="mr-2"
      @click="openConfirmDeleteDialog()"
    >
      <v-icon class="mr-2">mdi-trash-can-outline</v-icon>
      <span>Xóa</span>
    </v-btn>
    <v-btn
      :disabled="!selectedFile"
      color="primary depressed"
      class="mr-2"
      @click="openConfirmRenameDialog()"
    >
      <v-icon class="mr-2">mdi-file-edit-outline</v-icon>
      <span>Đổi tên</span>
    </v-btn>
    <v-btn
      color="primary depressed"
      class="mr-2"
      @click="openConfirmCreateFolderDialog()"
    >
      <v-icon class="mr-2">mdi-folder-plus-outline</v-icon>
      <span>Tạo folder</span>
    </v-btn>

    <input
      multiple
      ref="file"
      type="file"
      style="display:none;"
      @change="handleUploadFile($event)"
    />
    <v-btn color="primary depressed" class="mr-4" @click="triggerFileInput()">
      <v-icon class="mr-2">mdi-cloud-upload-outline</v-icon>
      <span>Upload</span>
    </v-btn>

    <ConfirmDialog
      :dialog="confirmDeleteDialog"
      @onClose="onConfirmDelete($event)"
    />
    <ConfirmDialog
      :dialog="confirmCreateFolderDialog"
      @onClose="onConfirmCreateFolder($event)"
    />
    <ConfirmDialog
      :dialog="confirmRenameDialog"
      @onClose="onConfirmRename($event)"
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
    confirmDeleteDialog: {
      title: "Xóa file",
      message: "Bạn có chắc chắn muốn xóa file này không?",
      cancelTitle: "Hủy",
      confirmTitle: "Xóa",
      isOpen: false
    },
    confirmCreateFolderDialog: {
      title: "Tạo folder",
      textInputLabel: "Nhập tên folder",
      cancelTitle: "Hủy",
      confirmTitle: "Tạo",
      isOpen: false
    },
    confirmRenameDialog: {
      title: "Đổi tên",
      textInputLabel: "Nhập tên",
      cancelTitle: "Hủy",
      confirmTitle: "Đổi",
      isOpen: false
    }
  }),
  methods: {
    openConfirmDeleteDialog() {
      if (this.selectedFile) {
        this.confirmDeleteDialog.isOpen = true;
      } else {
        this.confirmDeleteDialog.isOpen = false;
      }
    },
    openConfirmCreateFolderDialog() {
      this.confirmCreateFolderDialog.isOpen = true;
    },
    openConfirmRenameDialog() {
      if (this.selectedFile) {
        this.confirmRenameDialog.isOpen = true;
      } else {
        this.confirmRenameDialog.isOpen = false;
      }
    },
    onConfirmDelete(event) {
      this.confirmDeleteDialog.isOpen = false;
      if (event.isConfirm) {
        if (this.selectedFile) {
          console.log("delete file");
        }
        return;
      }
      if (!event.isConfirm) {
        return;
      }
    },
    onConfirmCreateFolder(event) {
      this.confirmCreateFolderDialog.isOpen = false;
      if (event.isConfirm) {
        console.log("create folder", event.textInput);
        return;
      }
      if (!event.isConfirm) {
        return;
      }
    },
    onConfirmRename(event) {
      this.confirmRenameDialog.isOpen = false;
      if (event.isConfirm) {
        if (this.selectedFile) {
          console.log("rename file");
        }
        return;
      }
      if (!event.isConfirm) {
        return;
      }
    },
    triggerFileInput() {
      this.$refs.file.click();
    },
    handleUploadFile(event) {
      console.log("[MESSAGE]: handleUploadFile -> event", event.target.files);
    }
  }
};
</script>

<style lang="sass" scoped></style>
