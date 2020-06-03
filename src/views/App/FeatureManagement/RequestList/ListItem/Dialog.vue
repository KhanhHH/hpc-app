<template>
  <v-dialog v-model="dialog.isOpen" max-width="400">
    <v-card v-if="item.featureCode === 'storage'">
      <div class="px-4">
        <div class="">
          <v-card-title class="headline">
            Thông tin dịch vụ
          </v-card-title>

          <v-card-text>
            <div>
              <span class="subtitle-1 text--primary">
                Loại dịch vụ:
              </span>
              <span class="subtitle-1 text--primary font-weight-medium">
                Dịch vụ lưu trữ
              </span>
            </div>
            <div>
              <span class="subtitle-1 text--primary">
                Dung lượng lưu trữ:
              </span>
              <span class="subtitle-1 text--primary font-weight-medium">
                {{ item.maxSize | convertSize }}
              </span>
            </div>
            <div>
              <span class="subtitle-1 text--primary">
                Hạn sử dụng:
              </span>
              <span class="subtitle-1 text--primary font-weight-medium">
                {{
                  new Intl.DateTimeFormat("vi-VN").format(
                    new Date(item.endDate)
                  )
                }}
              </span>
            </div>
          </v-card-text>
        </div>

        <div class="">
          <v-card-title class="headline">
            Thông tin tài khoản
          </v-card-title>

          <v-card-text>
            <div>
              <span class="subtitle-1 text--primary">
                Họ tên:
              </span>
              <span class="subtitle-1 text--primary font-weight-medium">
                {{ item.account.name }}
              </span>
            </div>
            <div>
              <span class="subtitle-1 text--primary">
                Email:
              </span>
              <span class="subtitle-1 text--primary font-weight-medium">
                {{ item.account.email }}
              </span>
            </div>
            <div>
              <span class="subtitle-1 text--primary">
                Số điện thoại:
              </span>
              <span class="subtitle-1 text--primary font-weight-medium">
                {{ item.account.phone }}
              </span>
            </div>
            <div>
              <span class="subtitle-1 text--primary">
                Đơn vị công tác:
              </span>
              <span class="subtitle-1 text--primary font-weight-medium">
                {{ item.account.workplace }}
              </span>
            </div>
            <div>
              <span class="subtitle-1 text--primary">
                Loại tài khoản:
              </span>
              <span class="subtitle-1 text--primary font-weight-medium">
                <template v-if="item.account.type === 'member'">
                  Member
                </template>
                <template v-if="item.account.type === 'admin'">
                  Admin
                </template>
              </span>
            </div>
          </v-card-text>
        </div>
      </div>
      <v-select
        class="px-4 pt-2"
        outlined
        v-model="selectedRequestStatus"
        :items="requestStatusList"
        item-text="text"
        item-value="value"
        label="Trạng thái"
        dense
        required
      />

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          v-if="dialog.cancelTitle"
          color="green darken-1"
          text
          @click="cancel()"
        >
          {{ dialog.cancelTitle }}
        </v-btn>

        <v-btn
          v-if="dialog.confirmTitle"
          color="green darken-1"
          text
          @click="confirm()"
        >
          {{ dialog.confirmTitle }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ["item", "dialog"],
  data: () => ({
    requestStatusList: [
      {
        text: "Phê duyệt",
        value: "approved"
      },
      {
        text: "Chờ phê duyệt",
        value: "pending"
      },
      {
        text: "Từ chối",
        value: "rejected"
      }
    ],
    selectedRequestStatus: "pending"
  }),
  methods: {
    confirm() {
      this.$emit("onClose", {
        isConfirm: true,
        item: {
          id: this.item.id,
          status: this.selectedRequestStatus
        }
      });
    },
    cancel() {
      this.$emit("onClose", {
        isConfirm: false
      });
    }
  }
};
</script>
<style lang="scss" scoped></style>
