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
      <div class="" v-if="!isLoading">
        <ServiceListItem
          v-for="service of serviceList"
          :key="service.title"
          :service="service"
        />
      </div>
    </transition>
  </div>
</template>

<script>
import { mapState } from "vuex";

import ServiceListItem from "./ServiceListItem";
export default {
  components: { ServiceListItem },
  computed: {
    ...mapState("account", ["myAccount"]),
    ...mapState("featureRequest", [
      "isLoading",
      "requestError",
      "requestStatus",
      "featureRequestStatus"
    ])
  },

  data: () => ({
    serviceList: [
      {
        title: "Dịch vụ dữ liệu",
        description: "Cho phép lưu trữ hơn 40GB dữ liệu.",
        serviceRoute: "storage",
        requestStatus: null
      },
      {
        title: "Dịch vụ tính toán",
        description: "Hệ thống tính toán hiệu năng cao",
        serviceRoute: "computing",
        requestStatus: null
      },
      {
        title: "Dịch vụ máy ảo",
        description: "Cung cấp hệ thống máy ảo tùy chọn cấu hình.",
        serviceRoute: "virtual-machine",
        requestStatus: null
      }
    ]
  }),
  async created() {
    await this.$store.dispatch("featureRequest/getMyFeatureRequestStatus");
    this.serviceList[0].requestStatus = this.featureRequestStatus.storage;
    this.serviceList[1].requestStatus = this.featureRequestStatus.computing;
    this.serviceList[2].requestStatus = this.featureRequestStatus.virtualMachine;
  },
  watch: {
    featureRequestStatus() {
      this.serviceList[0].requestStatus = this.featureRequestStatus.storage;
      this.serviceList[1].requestStatus = this.featureRequestStatus.computing;
      this.serviceList[2].requestStatus = this.featureRequestStatus.virtualMachine;
    }
  }
};
</script>

<style lang="scss" scoped></style>
