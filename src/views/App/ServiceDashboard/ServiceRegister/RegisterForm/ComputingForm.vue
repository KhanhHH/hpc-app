<template>
  <div class="px-4 py-4">
    <v-row justify="center">
      <div style="min-width:500px">
        <div class="title text-center px-4 py-4">
          Form đăng ký dịch vụ tính toán
        </div>
        <DatePicker :startDate="startDate" @onChange="onSelectDate($event)" />
        <v-select
          outlined
          v-model="selectedUserType"
          :items="userTypeList"
          item-text="text"
          item-value="value"
          label="Chọn loại nguời dùng"
          required
        />
        <v-subheader>
          Chọn số lõi (core) tối đa sử dụng đồng thời cho một công việc
        </v-subheader>

        <v-card-text>
          <v-slider
            v-model="core"
            thumb-label="always"
            :thumb-size="24"
            min="1"
            max="32"
            ticks="always"
          ></v-slider>
        </v-card-text>

        <v-subheader>
          Chọn số RAM (MB) tối đa sử dụng đồng thời cho một tiến trình tính toán
        </v-subheader>

        <v-card-text>
          <v-slider
            v-model="ram"
            thumb-label="always"
            :thumb-size="28"
            min="50"
            max="2000"
          ></v-slider>
        </v-card-text>

        <v-textarea
          outlined
          name="description"
          label="Mô tả nhiệm vụ tính toán"
          v-model="description"
        ></v-textarea>

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
    selectedDate: new Date(),
    selectedUserType: null,
    core: 1,
    ram: 50,
    description: null,
    userTypeList: [
      {
        text: "Giáo viên",
        value: "teacher"
      },
      {
        text: "Nghiên cứu sinh",
        value: "postgraduate"
      },
      {
        text: "Khác",
        value: "other"
      }
    ],
    startDate: new Date().setDate(new Date().getDate() + 1)
  }),
  created() {},
  computed: {},
  watch: {},

  methods: {
    onSelectDate(event) {
      this.selectedDate = event;
    },
    submitForm() {
      const form = {
        date: this.selectedDate,
        userType: this.selectedUserType,
        maxCore: this.core,
        maxRam: this.ram,
        description: this.description
      };
      console.log("[MESSAGE]: submitForm -> form", form);
    }
  }
};
</script>

<style lang="scss" scoped></style>
