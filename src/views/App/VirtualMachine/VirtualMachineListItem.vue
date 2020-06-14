<template>
  <tr>
    <td class="text-truncate">
      {{ item.cpu }}
    </td>
    <td>
      {{ item.ram | convertSize }}
    </td>
    <td>
      {{ item.hdd | convertSize }}
    </td>
    <td>
      <template v-if="item.status === 'up'">
        UP
      </template>
      <template v-if="item.status === 'down'">
        DOWN
      </template>
    </td>
    <td>
      <template v-if="item.approveStatus === 'approved'">
        Đã duyệt
      </template>
      <template v-if="item.approveStatus === 'pending'">
        Chờ duyệt
      </template>
      <template v-if="item.approveStatus === 'rejected'">
        Từ chối
      </template>
    </td>
    <td>
      <v-btn
        :disabled="item.approveStatus !== 'approved'"
        class="white--text"
        color="green"
        small
      >
        <span>Xem thông tin</span>
      </v-btn>
    </td>
  </tr>
</template>

<script>
export default {
  props: ["item"],
  data: () => ({}),
  methods: {}
};
</script>

<style lang="scss" scoped>
.selected {
  background: #eeeeee;
}
</style>
