<template>
  <tr
    @click="selectFile(item)"
    @dblclick="openFolder(item)"
    :class="{ selected: selectedFile && selectedFile.id === item.id }"
    style="cursor:pointer;"
  >
    <td>
      <v-icon class="mb-1 mr-2">
        mdi-folder
      </v-icon>
      <span class="text-truncate" style="max-width: 500px;">
        {{ item.name }}
      </span>
    </td>
    <td>
      --
    </td>
    <td>--</td>
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
      console.log("[MESSAGE]: openFolder -> item", item);
      this.$router.push({ path: "/app/storage/folder/" + item.id });
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
