<template>
  <div class="">
    <StorageInfo class="mt-2 mb-4" />
    <FolderNavigator class="mb-3" />
    <FileList />
  </div>
</template>

<script>
import { mapState } from "vuex";

import StorageInfo from "./StorageInfo";
import FolderNavigator from "./FolderNavigator";
import FileList from "./FileList";

export default {
  components: { FileList, FolderNavigator, StorageInfo },
  data: () => ({}),
  computed: {
    ...mapState("storage", ["myStorage", "currentFolder", "fileList"])
  },
  watch: {
    async $route(to, from) {
      const { id } = to.params;
      if (!id) {
        await this.$store.dispatch("storage/getMyStorage");
        const { id, folderType } = this.currentFolder;
        await this.$store.dispatch("storage/getFolder", {
          id,
          folderType
        });
      } else {
        await this.$store.dispatch("storage/getFolder", {
          id,
          folderType: "directory"
        });
      }
    }
  },
  async created() {
    const { id } = this.$router.currentRoute.params;
    if (!id) {
      await this.$store.dispatch("storage/getMyStorage");
      const { id, folderType } = this.currentFolder;
      await this.$store.dispatch("storage/getFolder", {
        id,
        folderType
      });
    }
  }
};
</script>

<style lang="sass" scoped></style>
