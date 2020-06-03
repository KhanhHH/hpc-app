<template>
  <tr>
    <td class="text-truncate" style="min-width: 150px; max-width: 200px;">
      {{ item.account.name }}
    </td>
    <td class="text-truncate" style="max-width: 300px;">
      {{ item.account.email }}
    </td>
    <td>
      <template v-if="item.featureCode === 'storage'">
        Dịch vụ dữ liệu
      </template>
      <template v-if="item.status === 'computing'">
        Dịch vụ tính toán
      </template>
      <template v-if="item.status === 'virtual-machine'">
        Dịch vụ máy ảo
      </template>
    </td>
    <td>
      <template v-if="item.status === 'approved'">
        <v-chip color="green" text-color="white" small>
          Đã phê duyệt
        </v-chip>
      </template>
      <template v-if="item.status === 'rejected'">
        <v-chip color="red" text-color="white" small>
          Từ chối
        </v-chip>
      </template>
      <template v-if="item.status === 'pending'">
        <v-chip color="orange" text-color="white" small>
          Chờ phê duyệt
        </v-chip>
      </template>
    </td>
    <td>
      <v-btn
        :disabled="item.status !== 'pending'"
        small
        color="primary"
        @click="openDialog()"
      >
        <span>Phê duyệt</span>
      </v-btn>
      <Dialog
        :item="item"
        :dialog="dialog"
        @onClose="onConfirmRequest($event)"
      />
    </td>
  </tr>
</template>

<script>
import { mapState } from "vuex";

import Dialog from "./Dialog";
export default {
  components: { Dialog },
  props: ["item"],
  computed: {
    ...mapState("featureManagement", [
      "isLoading",
      "requestError",
      "requestStatus"
    ])
  },
  data: () => ({
    dialog: {
      title: "Thông tin dịch vụ",
      cancelTitle: "Hủy",
      confirmTitle: "Cập nhật",
      isOpen: false
    }
  }),
  methods: {
    openDialog() {
      this.dialog.isOpen = true;
    },
    async onConfirmRequest(event) {
      this.dialog.isOpen = false;
      if (event.isConfirm) {
        if (event.item.status !== "pending") {
          await this.$store.dispatch(
            "featureManagement/updateFeatureRequestStatus",
            {
              id: event.item.id,
              status: event.item.status
            }
          );
          if (this.requestStatus === "error") {
            this.$store.dispatch("ui/showSnackbar", {
              timeout: 5000,
              message: this.requestError.message
            });
          }
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.selected {
  background: #eeeeee;
}
</style>
