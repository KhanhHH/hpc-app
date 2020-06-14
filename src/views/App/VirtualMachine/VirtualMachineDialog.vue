<template>
  <v-dialog v-model="dialog.isOpen" max-width="600">
    <v-card>
      <v-card-title v-if="dialog.title" class="headline">
        {{ dialog.title }}
      </v-card-title>
      <v-card-text>
        <v-subheader>
          Chọn số CPU
        </v-subheader>

        <v-slider
          class="pt-2"
          v-model="cpu"
          thumb-label="always"
          :thumb-size="24"
          min="1"
          max="16"
          ticks="always"
        ></v-slider>

        <v-subheader>
          Chọn dung lượng RAM (GB)
        </v-subheader>

        <v-slider
          class="pt-2"
          v-model="ram"
          thumb-label="always"
          :thumb-size="24"
          min="1"
          max="32"
          ticks="always"
        ></v-slider>

        <v-subheader>
          Chọn dung lượng HDD (GB)
        </v-subheader>

        <v-slider
          class="pt-2"
          v-model="hdd"
          thumb-label="always"
          :thumb-size="24"
          min="1"
          max="1000"
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
export default {
  props: ["dialog"],
  data: () => ({
    hdd: 20,
    ram: 10,
    cpu: 1
  }),
  computed: {},
  methods: {
    confirm() {
      this.$emit("onClose", {
        isConfirm: true,
        item: {
          cpu: this.cpu,
          ram: this.ram,
          hdd: this.hdd
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
