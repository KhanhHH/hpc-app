<template>
  <div class="">
    <div
      v-if="isLoading"
      style="height:400px;"
      class="d-flex align-center justify-center"
    >
      <v-progress-circular :size="70" :width="7" color="purple" indeterminate />
    </div>

    <transition name="fade" mode="out-in">
      <v-simple-table v-if="!isLoading" fixed-header height="400px">
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">Họ tên</th>
              <th class="text-left">Email</th>
              <th class="text-left">Ngày bắt đầu</th>
              <th class="text-left">Ngày hết hạn</th>
              <th class="text-left">Dung lượng lưu trữ</th>
              <th class="text-left">Trạng thái</th>
              <th class="text-left">Hành động</th>
            </tr>
          </thead>
          <tbody>
            <ListItem
              v-for="item of approvedStorageList"
              :item="item"
              :key="item.id"
            />
          </tbody>
        </template>
      </v-simple-table>
    </transition>
  </div>
</template>

<script>
import { mapState } from "vuex";
import ListItem from "./ListItem";
export default {
  components: { ListItem },
  computed: {
    ...mapState("featureManagement", [
      "isLoading",
      "requestError",
      "requestStatus",
      "approvedStorageList"
    ])
  },

  data: () => ({}),
  created() {
    this.$store.dispatch("featureManagement/getAllApprovedStorage");
  }
};
</script>

<style lang="scss" scoped></style>
