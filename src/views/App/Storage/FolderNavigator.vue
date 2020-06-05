<template>
  <div class="d-flex ml-3 mr-1">
    <div class="d-flex align-center">
      <span class="subtitle-1 mr-3 ">Folder của tôi</span>
      <!-- /
      <span
        class="subtitle-1 ml-3 mr-3 text-truncate"
        style="max-width: 200px; "
      >
        Thư mục xyz
      </span> -->
    </div>
    <v-spacer />
    <v-btn
      :disabled="!selectedItem || selectedItemType !== 'file'"
      small
      color="primary depressed"
      class="mr-2"
      @click="downloadFile()"
    >
      <v-icon class="mr-2">mdi-cloud-download-outline</v-icon>
      <span>Download</span>
    </v-btn>
    <v-btn
      :disabled="!selectedItem"
      small
      color="primary depressed"
      class="mr-2"
      @click="openConfirmDeleteDialog()"
    >
      <v-icon class="mr-2">mdi-trash-can-outline</v-icon>
      <span>Xóa</span>
    </v-btn>
    <v-btn
      :disabled="!selectedItem"
      small
      color="primary depressed"
      class="mr-2"
      @click="openConfirmRenameDialog()"
    >
      <v-icon class="mr-2">mdi-square-edit-outline</v-icon>
      <span>Đổi tên</span>
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
import axios from "axios";
import { mapState } from "vuex";

import ConfirmDialog from "@/components/ui/ConfirmDialog";
export default {
  components: { ConfirmDialog },
  computed: {
    ...mapState("storage", [
      "selectedItem",
      "selectedItemType",
      "currentFolder"
    ])
  },
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
      textInput: "",
      textInputLabel: "Nhập tên folder",
      cancelTitle: "Hủy",
      confirmTitle: "Tạo",
      isOpen: false
    },
    confirmRenameDialog: {
      title: "Đổi tên",
      textInput: "",
      textInputLabel: "Nhập tên",
      cancelTitle: "Hủy",
      confirmTitle: "Đổi",
      isOpen: false
    }
  }),
  beforeDestroy() {
    this.$store.dispatch("storage/selectItem", null);
  },
  methods: {
    openConfirmDeleteDialog() {
      if (this.selectedItem) {
        this.confirmDeleteDialog.isOpen = true;
      } else {
        this.confirmDeleteDialog.isOpen = false;
      }
    },
    openConfirmCreateFolderDialog() {
      this.confirmCreateFolderDialog.isOpen = true;
    },
    openConfirmRenameDialog() {
      if (this.selectedItem) {
        if (this.selectedItemType === "file") {
          this.confirmRenameDialog.textInput = this.selectedItem.originalname;
        }
        if (this.selectedItemType === "folder") {
          this.confirmRenameDialog.textInput = this.selectedItem.name;
        }

        this.confirmRenameDialog.isOpen = true;
      } else {
        this.confirmRenameDialog.isOpen = false;
      }
    },
    async onConfirmDelete(event) {
      this.confirmDeleteDialog.isOpen = false;
      if (event.isConfirm) {
        if (this.selectedItem) {
          if (this.selectedItemType === "file") {
            await this.$store.dispatch("storage/deleteFile", {
              folderId: this.currentFolder.id,
              fileId: this.selectedItem.id
            });
          }
          if (this.selectedItemType === "folder") {
            await this.$store.dispatch("storage/deleteChildFolder", {
              folderId: this.currentFolder.id,
              childFolderId: this.selectedItem.id
            });
          }
        }
      }
      await this.$store.dispatch("storage/selectItem", null);
    },
    async onConfirmCreateFolder(event) {
      this.confirmCreateFolderDialog.isOpen = false;
      if (event.isConfirm) {
        console.log(
          "[MESSAGE]: onConfirmCreateFolder -> this.currentFolder",
          this.currentFolder
        );

        const payload = {
          parentFolderId: this.currentFolder.id,
          name: event.textInput
        };
        if (event.textInput.length === 0) {
          payload.name = "Thư mục mới";
        }
        await this.$store.dispatch("storage/createNewFolder", payload);
      }
      await this.$store.dispatch("storage/selectItem", null);
    },
    async onConfirmRename(event) {
      this.confirmRenameDialog.isOpen = false;
      if (event.isConfirm) {
        if (this.selectedItem) {
          if (this.selectedItemType === "file") {
            await this.$store.dispatch("storage/renameFile", {
              folderId: this.currentFolder.id,
              fileId: this.selectedItem.id,
              name: event.textInput
            });
          }
          if (this.selectedItemType === "folder") {
            await this.$store.dispatch("storage/renameChildFolder", {
              folderId: this.currentFolder.id,
              childFolderId: this.selectedItem.id,
              name: event.textInput
            });
          }
        }
      }
      const itemAfterRename = this.selectedItem;
      itemAfterRename.name = event.textInput;
      this.confirmRenameDialog.textInput = event.textInput;
      await this.$store.dispatch("storage/selectItem", itemAfterRename);
    },
    triggerFileInput() {
      this.$refs.file.click();
    },
    async handleUploadFile(event) {
      await this.$store.dispatch("storage/selectItem", null);
      const formData = new FormData();
      formData.append("files", event.target.files[0]);
      await this.$store.dispatch("storage/uploadFile", {
        folderId: this.currentFolder.id,
        formData
      });
    },
    async downloadFile() {
      if (this.selectedItem) {
        if (this.selectedItemType === "file") {
          const response = await axios({
            method: "get",
            url: process.env.VUE_APP_API_URL + "/" + this.selectedItem.path,
            responseType: "arraybuffer"
          });
          this.forceFileDownload(response, this.selectedItem.originalname);
        }
      }
    },
    forceFileDownload(response, name) {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", name); //or any other extension
      document.body.appendChild(link);
      link.click();
    }
  }
};
</script>

<style lang="sass" scoped></style>
