<template>
  <div class="d-flex ml-3 mr-1">
    <div class="d-flex align-center">
      <span class="title mr-3 ">Dịch vụ máy ảo</span>
    </div>
    <v-spacer />
    <v-btn small color="primary depressed" class="mr-2" @click="openDialog()">
      <v-icon class="mr-2">mdi-plus</v-icon>
      <span>Tạo máy ảo</span>
    </v-btn>
    <VirtualMachineDialog
      :dialog="dialog"
      @onClose="onConfirmRequest($event)"
    />
  </div>
</template>

<script>
import VirtualMachineDialog from "./VirtualMachineDialog";
export default {
  components: { VirtualMachineDialog },
  computed: {},
  data: () => ({
    dialog: {
      title: "Chọn cấu hình máy ảo",
      cancelTitle: "Hủy",
      confirmTitle: "Tạo",
      isOpen: false
    }
  }),
  beforeDestroy() {},
  methods: {
    openDialog() {
      this.dialog.isOpen = true;
    },
    async onConfirmRequest(event) {
      this.dialog.isOpen = false;
      if (event.isConfirm) {
        const { cpu, ram, hdd } = event.item;
        await this.$store.dispatch("virtualMachine/createVps", {
          cpu,
          ram,
          hdd
        });
      }
    }
  }
};
</script>

<style lang="sass" scoped></style>
