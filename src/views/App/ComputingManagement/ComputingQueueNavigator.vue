<template>
  <div class="d-flex ml-3 mr-1">
    <div class="d-flex align-center">
      <span class="title mr-3 ">Quản lý tác vụ</span>
    </div>
    <v-spacer />
  </div>
</template>

<script>
export default {
  components: {},
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
  methods: {}
};
</script>

<style lang="sass" scoped></style>
