<template>
  <div class="d-flex justify-end">
    <div class="subtitle-2 pr-4">
      Ngày đăng ký:
      <span>
        {{
          new Intl.DateTimeFormat("vi-VN").format(new Date(myStorage.startDate))
        }}
      </span>
    </div>
    <div class="subtitle-2 pr-4">
      Ngày hết hạn:
      <span>
        {{
          new Intl.DateTimeFormat("vi-VN").format(new Date(myStorage.endDate))
        }}
      </span>
    </div>
    <div class="subtitle-2 pr-4">
      Dung lượng:
      <span>
        {{ myStorage.currentSize | convertSize }} /
        {{ myStorage.maxSize | convertSize }}
      </span>
    </div>
    <div class="subtitle-2 pr-4">
      <v-chip
        v-if="myStorage.status === 'active'"
        color="green"
        text-color="white"
        small
      >
        Đã kích hoạt
      </v-chip>
      <v-chip
        v-if="myStorage.status === 'deactive'"
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
  computed: { ...mapState("storage", ["myStorage"]) },
  async created() {}
};
</script>

<style lang="sass" scoped></style>
