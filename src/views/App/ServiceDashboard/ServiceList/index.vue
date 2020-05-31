<template>
  <div class="">
    {{ myAccount }}
    <ServiceListItem
      v-for="service of serviceList"
      :key="service.title"
      :service="service"
    />
  </div>
</template>

<script>
import { mapState } from "vuex";

import ServiceListItem from "./ServiceListItem";
export default {
  components: { ServiceListItem },
  computed: {
    ...mapState("account", ["myAccount"])
  },
  data: () => ({
    serviceList: [
      {
        title: "Dịch vụ dữ liệu",
        description: "Cho phép lưu trữ hơn 40GB dữ liệu.",
        serviceRoute: "storage",
        serviceStatus: "unregistered"
      },
      {
        title: "Dịch vụ tính toán",
        description: "Hệ thống tính toán hiệu năng cao",
        serviceRoute: "computing",
        serviceStatus: "unregistered"
      },
      {
        title: "Dịch vụ máy ảo",
        description: "Cung cấp hệ thống máy ảo tùy chọn cấu hình.",
        serviceRoute: "virtual-machine",
        serviceStatus: "unregistered"
      }
    ]
  })
};
</script>

<style lang="scss" scoped></style>
