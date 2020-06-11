<template>
  <div class="d-flex ml-3 mr-1">
    <div class="d-flex align-center">
      <span class="title mr-3 ">Dịch vụ tính toán</span>
    </div>
    <v-spacer />
    <v-btn small color="primary depressed" class="mr-2" @click="openDialog()">
      <v-icon class="mr-2">mdi-plus</v-icon>
      <span>Tạo yêu cầu tính toán</span>
    </v-btn>
    <ComputingQueueDialog
      :dialog="dialog"
      @onClose="onConfirmRequest($event)"
    />
  </div>
</template>

<script>
import ComputingQueueDialog from "./ComputingQueueDialog";
export default {
  components: { ComputingQueueDialog },
  computed: {},
  data: () => ({
    dialog: {
      title: "Tạo yêu cầu tính toán",
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
        const { file, ram, cpu } = event.item;
        const form = {
          cpu,
          maxRamPerProcess: ram
        };

        const formData = new FormData();
        formData.append("files", file);

        await this.$store.dispatch("computing/createComputingQueue", {
          form,
          formData
        });
      }
    }
  }
};
</script>

<style lang="sass" scoped></style>
