<template>
  <transition name="fade" mode="out-in">
    <div
      v-if="isLoading"
      style="height:400px;"
      class="d-flex align-center justify-center"
    >
      <v-progress-circular :size="70" :width="7" color="purple" indeterminate />
    </div>
    <v-simple-table v-else fixed-header height="400px">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Họ tên</th>
            <th class="text-left">Email</th>
            <th class="text-left">Điện thoại</th>
            <th class="text-left">Đơn vị công tác</th>
            <th class="text-left">Trạng thái</th>
            <th class="text-left">Loại tài khoản</th>
            <th class="text-left">Hành động</th>
          </tr>
        </thead>
        <tbody>
          <ListItem v-for="item of allAccount" :item="item" :key="item.id" />
        </tbody>
      </template>
    </v-simple-table>
  </transition>
</template>

<script>
import { mapState } from "vuex";
import ListItem from "./ListItem";

export default {
  components: { ListItem },
  computed: {
    ...mapState("account", ["isLoading", "allAccount"])
  },
  data: () => ({}),
  created() {
    this.$store.dispatch("account/getAllAccount");
  },
  methods: {}
};
</script>

<style lang="scss" scoped></style>
