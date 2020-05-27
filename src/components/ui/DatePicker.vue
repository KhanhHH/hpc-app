<template>
  <v-menu
    v-model="menu"
    :close-on-content-click="false"
    :nudge-right="40"
    transition="scale-transition"
    offset-y
    min-width="290px"
  >
    <template v-slot:activator="{ on }">
      <v-text-field
        outlined
        v-model="formattedDate"
        label="Chọn thời gian sử dụng"
        v-on="on"
      ></v-text-field>
    </template>
    <v-date-picker
      v-model="date"
      :min="minDate"
      @input="menu = false"
      @change="onSelectDate()"
    ></v-date-picker>
  </v-menu>
</template>

<script>
export default {
  props: ["startDate"],
  data: () => ({
    date: null,
    minDate: new Date(new Date().setDate(new Date().getDate() + 1))
      .toISOString()
      .substr(0, 10),
    menu: false
  }),
  created() {
    this.date = new Date(this.startDate).toISOString().substr(0, 10);
  },
  computed: {
    formattedDate() {
      return this.formatDate(this.date);
    }
  },

  methods: {
    formatDate(date) {
      return new Intl.DateTimeFormat("vi-VN").format(new Date(date));
    },
    onSelectDate() {
      this.$emit("onChange", new Date(this.date));
    }
  }
};
</script>

<style lang="scss" scoped></style>
