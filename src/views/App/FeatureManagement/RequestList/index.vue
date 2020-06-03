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
              <th class="text-left">Loại dịch vụ</th>
              <th class="text-left">Trạng thái</th>
              <th class="text-left">Hành động</th>
            </tr>
          </thead>
          <tbody>
            <ListItem
              v-for="item of featureRequestList"
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
      "featureRequestList"
    ])
  },
  data: () => ({}),
  created() {
    this.$store.dispatch("featureManagement/getAllFeatureRequest");
  },
  methods: {}
};
</script>

<style lang="scss" scoped></style>
