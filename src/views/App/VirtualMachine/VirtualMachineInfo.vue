<template>
  <div class="d-flex justify-end">
    <div class="subtitle-2 pr-4">
      Ngày đăng ký:
      <span>
        {{
          new Intl.DateTimeFormat("vi-VN").format(
            new Date(myVirtualMachine.startDate)
          )
        }}
      </span>
    </div>
    <div class="subtitle-2 pr-4">
      Ngày hết hạn:
      <span>
        {{
          new Intl.DateTimeFormat("vi-VN").format(
            new Date(myVirtualMachine.endDate)
          )
        }}
      </span>
    </div>
    <div class="subtitle-2 pr-4">
      <v-chip
        v-if="myVirtualMachine.status === 'active'"
        color="green"
        text-color="white"
        small
      >
        Đã kích hoạt
      </v-chip>
      <v-chip
        v-if="myVirtualMachine.status === 'deactive'"
        color="red"
        text-color="white"
        small
      >
        Ngừng hoạt động
      </v-chip>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  components: {},
  data: () => ({}),
  computed: { ...mapState("virtualMachine", ["myVirtualMachine"]) },
  created() {
    this.$store.dispatch("virtualMachine/getMyVirtualMachine");
  }
};
</script>

<style lang="sass" scoped></style>
