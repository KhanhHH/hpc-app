<template>
  <div class="px-4 py-4">
    <v-row justify="center">
      <div style="min-width:500px">
        <div class="title text-center px-4 py-4">
          Form đăng ký dịch vụ lưu trữ
        </div>
        <DatePicker :startDate="startDate" @onChange="onSelectDate($event)" />
        <v-select
          outlined
          v-model="selectedSize"
          :items="sizeList"
          label="Chọn dung lượng lưu trữ"
          required
        />
        <v-slider
          :disabled="!isSelectCustomSize"
          v-model="customSize"
          thumb-label="always"
          :thumb-size="24"
          min="1"
          max="100"
        >
          <template v-slot:append>
            <v-text-field
              v-model="customSize"
              class="mt-0 pt-0"
              hide-details
              single-line
              type="number"
              style="width: 60px"
            ></v-text-field>
          </template>
        </v-slider>
        <v-row justify="center" class="py-2">
          <v-btn
            large
            color="primary depressed"
            style="width:350px"
            @click="submitForm()"
          >
            <v-icon class="mr-2">mdi-send</v-icon>
            <span>Gửi yêu cầu đăng ký dịch vụ</span>
          </v-btn>
        </v-row>
        <v-row justify="center">
          <v-btn large color="normal depressed" style="width:350px" to="../">
            <v-icon class="mr-2">mdi-arrow-left</v-icon>
            <span>Quay lại</span>
          </v-btn>
        </v-row>
      </div>
    </v-row>
  </div>
</template>
<script>
import DatePicker from "@/components/ui/DatePicker";

export default {
  components: { DatePicker },
  data: () => ({
    selectedSize: null,
    selectedDate: new Date(),
    startDate: new Date().setDate(new Date().getDate() + 1),
    sizeList: ["10GB", "20GB", "40GB", "Tùy chọn (GB)"],
    isSelectCustomSize: false,
    customSize: 10
  }),
  created() {},
  computed: {},
  watch: {
    selectedSize(value) {
      if (value === "Tùy chọn (GB)") {
        this.isSelectCustomSize = true;
      } else {
        this.isSelectCustomSize = false;
      }
    }
  },

  methods: {
    onSelectDate(event) {
      this.selectedDate = event;
    },
    submitForm() {
      const form = {
        size: parseInt(this.selectedSize),
        date: this.selectedDate
      };
      if (this.isSelectCustomSize) {
        form.size = this.customSize;
      }
      console.log("[MESSAGE]: submitForm -> form", form);
    }
  }
};
</script>

<style lang="scss" scoped></style>
