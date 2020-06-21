<template>
  <div class="">
    <transition name="fade" mode="out-in">
      <div
        v-if="isLoading"
        style="height:400px;"
        class="d-flex align-center justify-center"
      >
        <v-progress-circular
          :size="70"
          :width="7"
          color="purple"
          indeterminate
        />
      </div>

      <v-simple-table v-else fixed-header height="400px">
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">Tên</th>
              <th class="text-left">Ngày tải lên</th>
              <th class="text-left">Kích thước</th>
            </tr>
          </thead>
          <tbody>
            <FolderListItem
              v-for="item of folderList"
              :item="item"
              :key="item.id"
            />
            <FileListItem
              v-for="item of fileList"
              :item="item"
              :key="item.id"
            />
          </tbody>
        </template>
      </v-simple-table>
    </transition>
  </div>
</template>

<script>
import { mapState } from "vuex";

import FileListItem from "./FileListItem";
import FolderListItem from "./FolderListItem";

export default {
  components: { FileListItem, FolderListItem },
  data: () => ({}),
  computed: {
    ...mapState("storage", [
      "isLoading",
      "requestError",
      "requestStatus",
      "fileList",
      "folderList"
    ])
  },
  created() {},
  methods: {}
};
</script>

<style lang="sass" scoped></style>
