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
              <th class="text-left">CPU</th>
              <th class="text-left">RAM</th>
              <th class="text-left">HDD</th>
              <th class="text-left">Trạng thái</th>
              <th class="text-left">Phê duyệt</th>
              <th class="text-left">Hành động</th>
            </tr>
          </thead>
          <tbody>
            <VirtualMachineListItem
              v-for="item of myVps"
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
import VirtualMachineListItem from "./VirtualMachineListItem";

export default {
  components: { VirtualMachineListItem },
  computed: {
    ...mapState("virtualMachine", ["isLoading", "myVps"])
  },
  data: () => ({}),
  created() {
    this.$store.dispatch("virtualMachine/getMyVps");
  },
  methods: {}
};
</script>

<style lang="scss" scoped></style>
