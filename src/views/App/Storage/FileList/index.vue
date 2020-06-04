<template>
  <div class="">
    <v-simple-table fixed-header height="400px">
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
          <FileListItem v-for="item of fileList" :item="item" :key="item.id" />
        </tbody>
      </template>
    </v-simple-table>
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
    ...mapState("storage", ["fileList", "folderList"])
  },
  created() {},
  methods: {}
};
</script>

<style lang="sass" scoped></style>
