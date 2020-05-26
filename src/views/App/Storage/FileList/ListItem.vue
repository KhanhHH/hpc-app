<template>
  <tr
    @click="selectFile(item)"
    @dblclick="openFolder(item)"
    :class="{ selected: selectedFile && selectedFile.id === item.id }"
  >
    <td>
      <v-icon v-if="item.type === 'folder'" class="mb-1 mr-2">
        mdi-folder
      </v-icon>
      <v-icon v-if="item.type === 'file'" class="mb-1 mr-2">mdi-file</v-icon>
      <span class="text-truncate" style="max-width: 500px;">
        {{ item.name }}
      </span>
    </td>
    <td>
      {{ new Intl.DateTimeFormat("vi-VN").format(item.uploadDate) }}
    </td>
    <td v-if="item.type === 'folder'">--</td>
    <td v-if="item.type === 'file'">{{ item.fileSize }}</td>
  </tr>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: ["item"],
  data: () => ({}),
  computed: { ...mapState("storage", ["selectedFile"]) },
  methods: {
    openFolder(item) {
      if (item.type === "folder") {
        this.$router.push({ path: "/app/storage/folder/" + item.id });
      }
    },
    selectFile(item) {
      this.$store.dispatch("storage/selectFile", item);
    }
  }
};
</script>

<style lang="scss" scoped>
.selected {
  background: #eeeeee;
}
</style>
