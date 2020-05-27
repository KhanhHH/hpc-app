<template>
  <div class="d-flex ml-3 mr-1">
    <div class="d-flex align-center">
      <span class="subtitle-1 mr-3 ">Folder của tôi</span> /
      <span
        class="subtitle-1 ml-3 mr-3 text-truncate"
        style="max-width: 200px; "
      >
        Thư mục xyz
      </span>
    </div>
    <v-spacer />
    <v-btn
      :disabled="!selectedFile"
      small
      color="primary depressed"
      class="mr-2"
      @click="openConfirmDeleteDialog()"
    >
      <v-icon class="mr-2">mdi-trash-can-outline</v-icon>
      <span>Xóa</span>
    </v-btn>
    <v-btn
      :disabled="!selectedFile"
      small
      color="primary depressed"
      class="mr-2"
      @click="openConfirmRenameDialog()"
    >
      <v-icon class="mr-2">mdi-square-edit-outline</v-icon>
      <span>Đổi tên</span>
    </v-btn>
    <v-btn
      :disabled="!selectedFile"
      small
      color="primary depressed"
      class="mr-2"
      @click="downloadFile()"
    >
      <v-icon class="mr-2">mdi-cloud-download-outline</v-icon>
      <span>Download</span>
    </v-btn>
    <v-btn
      small
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
    <v-btn
      small
      color="primary depressed"
      class="mr-4"
      @click="triggerFileInput()"
    >
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
  beforeDestroy() {
    this.$store.dispatch("storage/selectFile", null);
  },
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
      }
      this.$store.dispatch("storage/selectFile", null);
    },
    onConfirmCreateFolder(event) {
      this.confirmCreateFolderDialog.isOpen = false;
      if (event.isConfirm) {
        console.log("create folder", event.textInput);
      }
      this.$store.dispatch("storage/selectFile", null);
    },
    onConfirmRename(event) {
      this.confirmRenameDialog.isOpen = false;
      if (event.isConfirm) {
        if (this.selectedFile) {
          console.log("rename file");
        }
      }
    },
    triggerFileInput() {
      this.$refs.file.click();
    },
    handleUploadFile(event) {
      this.$store.dispatch("storage/selectFile", null);
      console.log("[MESSAGE]: handleUploadFile -> event", event.target.files);
    },
    downloadFile() {
      this.$store.dispatch("storage/selectFile", null);
      console.log("helloworld");
    }
  }
};
</script>

<style lang="sass" scoped></style>
