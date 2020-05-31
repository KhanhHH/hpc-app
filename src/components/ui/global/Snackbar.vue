<template>
  <v-snackbar v-model="snackbar.status" :timeout="snackbar.timeout" top>
    <span>
      {{ snackbar.message }}
    </span>
    <v-btn text @click="snackbar.status = false">
      Đóng
    </v-btn>
  </v-snackbar>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: ["data"],
  computed: {
    ...mapState("ui", ["snackbar"])
  }
};
</script>

<style></style>
