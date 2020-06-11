<template>
  <v-dialog v-model="dialog.isOpen" max-width="600">
    <v-card>
      <v-card-title v-if="dialog.title" class="headline">
        {{ dialog.title }}
      </v-card-title>
      <v-card-text>
        <v-file-input
          v-model="file"
          class="pt-4"
          show-size
          outlined
          dense
          label="Script tính toán"
          placeholder="Tải script lên"
        />
        <v-subheader>
          Chọn số CPU tối đa sử dụng đồng thời cho một công việc
        </v-subheader>
        <v-slider
          class="pt-2"
          v-model="cpu"
          thumb-label="always"
          :thumb-size="24"
          min="1"
          :max="myComputing.maxCpu"
          ticks="always"
        ></v-slider>

        <v-subheader>
          Chọn số RAM (MB) tối đa sử dụng đồng thời cho một tiến trình tính toán
        </v-subheader>

        <v-slider
          class="pt-4"
          v-model="ram"
          thumb-label="always"
          :thumb-size="28"
          min="10"
          :max="myComputing.maxRam / 1048576"
        ></v-slider>
      </v-card-text>
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
import { mapState } from "vuex";
export default {
  props: ["dialog"],
  data: () => ({
    file: null,
    ram: 10,
    cpu: 1
  }),
  computed: { ...mapState("computing", ["myComputing"]) },
  methods: {
    confirm() {
      this.$emit("onClose", {
        isConfirm: true,
        item: { file: this.file, ram: this.ram * 1048576, cpu: this.cpu }
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
