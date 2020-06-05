<template>
  <tr
    @click="selectItem(item)"
    :class="{ selected: selectedItem && selectedItem.id === item.id }"
    style="cursor:pointer;"
  >
    <td>
      <v-icon class="mb-1 mr-2">mdi-file</v-icon>
      <span class="text-truncate" style="max-width: 500px;">
        {{ item.originalname }}
      </span>
    </td>
    <td>
      {{ new Intl.DateTimeFormat("vi-VN").format(new Date(item.uploadDate)) }}
    </td>
    <td>{{ item.size | convertSize }}</td>
  </tr>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: ["item"],
  data: () => ({}),
  computed: { ...mapState("storage", ["selectedItem"]) },
  methods: {
    selectItem(item) {
      this.$store.dispatch("storage/selectItem", item);
      this.$store.dispatch("storage/updateSelectItemType", "file");
    }
  }
};
</script>

<style lang="scss" scoped>
.selected {
  background: #eeeeee;
}
</style>
