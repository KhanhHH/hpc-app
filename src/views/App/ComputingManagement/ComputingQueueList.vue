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
              <th class="text-left">Tên người dùng</th>
              <th class="text-left">Email</th>
              <th class="text-left">Script</th>
              <th class="text-left">Số lượng CPU</th>
              <th class="text-left">Số lượng RAM tối đa / tiến tình</th>
              <th class="text-left">Trạng thái</th>
              <th class="text-left">Hành động</th>
            </tr>
          </thead>
          <tbody>
            <ComputingQueueListItem
              v-for="item of allComputingQueue"
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
import ComputingQueueListItem from "./ComputingQueueListItem";

export default {
  components: { ComputingQueueListItem },
  computed: {
    ...mapState("computing", ["isLoading", "allComputingQueue"])
  },
  data: () => ({}),
  created() {
    this.$store.dispatch("computing/getAllComputingQueue");
  },
  methods: {}
};
</script>

<style lang="scss" scoped></style>
