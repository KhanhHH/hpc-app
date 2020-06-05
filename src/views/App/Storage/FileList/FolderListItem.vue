<template>
  <tr
    @click="selectItem(item)"
    @dblclick="openFolder(item)"
    :class="{ selected: selectedItem && selectedItem.id === item.id }"
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
  computed: { ...mapState("storage", ["selectedItem"]) },
  methods: {
    openFolder(item) {
      this.$router.push({ path: "/app/storage/folder/" + item.id });
    },
    selectItem(item) {
      this.$store.dispatch("storage/selectItem", item);
      this.$store.dispatch("storage/updateSelectItemType", "folder");
    }
  }
};
</script>

<style lang="scss" scoped>
.selected {
  background: #eeeeee;
}
</style>
