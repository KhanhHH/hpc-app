<template>
  <div class="">
    <StorageInfo class="mt-2 mb-4" />
    <div :class="{ disabled: myStorage.status === 'deactive' }">
      <FolderNavigator class="mb-3" />
      <FileList />
    </div>
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
    async $route(to) {
      const { id } = to.params;
      if (!id) {
        await this.$store.dispatch("storage/initalLoad");
      } else {
        await this.$store.dispatch("storage/reset", "fileList");
        await this.$store.dispatch("storage/reset", "folderList");
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
      await this.$store.dispatch("storage/initalLoad");
    } else {
      await this.$store.dispatch("storage/getFolder", {
        id,
        folderType: "directory"
      });
    }
  },
  async beforeDestroy() {
    await this.$store.dispatch("storage/reset");
  }
};
</script>

<style lang="scss" scoped></style>
