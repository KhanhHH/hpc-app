<template>
  <tr>
    <td class="text-truncate" style="max-width: 200px;">
      {{ item.account.name }}
    </td>
    <td class="text-truncate" style="max-width: 300px;">
      {{ item.account.email }}
    </td>
    <td>
      {{ new Intl.DateTimeFormat("vi-VN").format(new Date(item.startDate)) }}
    </td>
    <td>
      {{ new Intl.DateTimeFormat("vi-VN").format(new Date(item.endDate)) }}
    </td>
    <td>
      {{ item.currentSize | convertSize }} /{{ item.maxSize | convertSize }}
    </td>
    <td>
      <template v-if="item.status === 'active'">
        Đang hoạt động
      </template>
      <template v-if="item.status === 'deactive'">
        Ngừng hoạt động
      </template>
    </td>
    <td>
      <v-btn
        v-if="item.status === 'active'"
        color="red"
        small
        dark
        @click="changeApprovedFeatureStatus()"
      >
        <span>Hủy dịch vụ</span>
      </v-btn>
      <v-btn
        v-if="item.status === 'deactive'"
        color="green"
        small
        dark
        @click="changeApprovedFeatureStatus()"
      >
        <span>Kích hoạt</span>
      </v-btn>
    </td>
  </tr>
</template>

<script>
export default {
  props: ["item"],
  data: () => ({}),
  methods: {
    changeApprovedFeatureStatus() {
      const payload = {
        id: this.item.id,
        maxSize: this.item.maxSize,
        endDate: this.item.endDate
      };
      if (this.item.status === "active") {
        payload.status = "deactive";
      }
      if (this.item.status === "deactive") {
        payload.status = "active";
      }
      this.$store.dispatch("featureManagement/updateApprovedStorage", payload);
    }
  }
};
</script>

<style lang="scss" scoped>
.selected {
  background: #eeeeee;
}
</style>
