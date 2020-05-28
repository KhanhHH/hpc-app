<template>
  <tr>
    <td class="text-truncate" style="max-width: 200px;">
      {{ item.name }}
    </td>
    <td class="text-truncate" style="max-width: 300px;">
      {{ item.email }}
    </td>
    <td>
      {{ item.phone }}
    </td>
    <td class="text-truncate" style="max-width: 200px;">
      {{ item.workplace }}
    </td>
    <td>
      {{ item.status }}
    </td>
    <td>
      --
    </td>
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
