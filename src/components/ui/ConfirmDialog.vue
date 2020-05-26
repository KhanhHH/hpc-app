<template>
  <v-dialog v-model="dialog" max-width="500">
    <v-card>
      <v-card-title class="headline">
        {{ title }}
      </v-card-title>
      <v-card-text>
        {{ message }}
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="green darken-1" text @click="cancel()">
          Hủy
        </v-btn>

        <v-btn color="green darken-1" text @click="confirm()">
          Đồng ý
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ["dialog", "title", "message"],
  data: () => ({}),
  methods: {
    confirm() {
      this.$emit("isConfirm", true);
    },
    cancel() {
      this.$emit("isConfirm", false);
    }
  }
};
</script>
<style lang="scss" scoped></style>
