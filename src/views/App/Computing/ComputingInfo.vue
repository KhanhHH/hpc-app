<template>
  <div class="d-flex justify-end">
    <div class="subtitle-2 pr-4">
      Ngày đăng ký:
      <span>
        {{
          new Intl.DateTimeFormat("vi-VN").format(
            new Date(myComputing.startDate)
          )
        }}
      </span>
    </div>
    <div class="subtitle-2 pr-4">
      Ngày hết hạn:
      <span>
        {{
          new Intl.DateTimeFormat("vi-VN").format(new Date(myComputing.endDate))
        }}
      </span>
    </div>
    <div class="subtitle-2 pr-4">
      CPU tối đa:
      <span>
        {{ myComputing.maxCpu }}
      </span>
    </div>
    <div class="subtitle-2 pr-4">
      RAM tối đa:
      <span>
        {{ myComputing.maxRam | convertSize }}
      </span>
    </div>
    <div class="subtitle-2 pr-4">
      <v-chip
        v-if="myComputing.status === 'active'"
        color="green"
        text-color="white"
        small
      >
        Đã kích hoạt
      </v-chip>
      <v-chip
        v-if="myComputing.status === 'deactive'"
        color="red"
        text-color="white"
        small
      >
        Ngừng hoạt động
      </v-chip>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  components: {},
  data: () => ({}),
  computed: { ...mapState("computing", ["myComputing"]) },
  created() {
    this.$store.dispatch("computing/getMyComputing");
  }
};
</script>

<style lang="sass" scoped></style>
