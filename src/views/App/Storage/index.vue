<template>
  <div class="">
    <StorageInfo class="mt-2 mb-4" />
    <FolderNavigator class="mb-3" />
    <FileList />
  </div>
</template>

<script>
import StorageInfo from "./StorageInfo";
import FolderNavigator from "./FolderNavigator";
import FileList from "./FileList";
export default {
  components: { FileList, FolderNavigator, StorageInfo },
  data: () => ({})
};
</script>

<style lang="sass" scoped></style>
