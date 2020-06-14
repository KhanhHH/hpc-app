<template>
  <tr>
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
        v-if="item.status !== 'completed'"
        :disabled="item.status !== 'pending'"
        class="white--text"
        color="red"
        small
        @click="cancelQueueStatus()"
      >
        <span>Hủy</span>
      </v-btn>
      <v-btn
        v-if="item.status === 'completed'"
        class="white--text"
        color="green"
        small
      >
        <span>Xem kết quả</span>
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
      this.$store.dispatch("computing/updateMyComputingQueue", {
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
