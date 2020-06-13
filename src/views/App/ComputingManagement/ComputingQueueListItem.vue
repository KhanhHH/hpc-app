<template>
  <tr>
    <td class="text-truncate" style="max-width: 200px;">
      {{ item.account.name }}
    </td>
    <td class="text-truncate" style="max-width: 200px;">
      {{ item.account.email }}
    </td>
    <td class="text-truncate" style="max-width: 200px;">
      {{ item.script }}
    </td>
    <td class="text-truncate" style="max-width: 300px;">
      {{ item.cpu }}
    </td>
    <td>
      {{ item.maxRamPerProcess | convertSize }}
    </td>
    <td>
      <template v-if="item.status === 'canceled'">
        Đã Hủy
      </template>
      <template v-if="item.status === 'processing'">
        Đang xử lý
      </template>
      <template v-if="item.status === 'completed'">
        Đã hoàn thành
      </template>
      <template v-if="item.status === 'pending'">
        Chờ xử lý
      </template>
    </td>
    <td>
      <v-btn
        :disabled="item.status === 'completed' || item.status === 'canceled'"
        class="white--text"
        color="red"
        small
        @click="cancelQueueStatus()"
      >
        <span>Hủy</span>
      </v-btn>
    </td>
  </tr>
</template>

<script>
export default {
  props: ["item"],
  data: () => ({}),
  methods: {
    cancelQueueStatus() {
      this.$store.dispatch("computing/updateComputingQueue", {
        id: this.item.id,
        status: "canceled"
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.selected {
  background: #eeeeee;
}
</style>
