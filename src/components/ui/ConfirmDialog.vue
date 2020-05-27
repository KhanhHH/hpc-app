<template>
  <v-dialog v-model="dialog.isOpen" max-width="500">
    <v-card>
      <v-card-title v-if="dialog.title" class="headline">
        {{ dialog.title }}
      </v-card-title>
      <v-card-text v-if="dialog.message">
        {{ dialog.message }}
      </v-card-text>
      <v-text-field
        v-if="dialog.textInputLabel"
        v-model="textInput"
        :label="dialog.textInputLabel"
        outlined
        class="mr-5 ml-5 mt-4"
      ></v-text-field>
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
    textInput: ""
  }),
  methods: {
    confirm() {
      this.$emit("onClose", {
        isConfirm: true,
        textInput: this.textInput
      });
      this.textInput = "";
    },
    cancel() {
      this.$emit("onClose", {
        isConfirm: false
      });
      this.textInput = "";
    }
  }
};
</script>
<style lang="scss" scoped></style>
