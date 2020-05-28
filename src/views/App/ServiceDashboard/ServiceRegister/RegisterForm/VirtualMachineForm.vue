<template>
  <div class="px-4 py-4">
    <v-row justify="center">
      <div style="min-width:500px">
        <div class="title text-center px-4 py-4">
          Form đăng ký dịch vụ máy ảo
        </div>
        <DatePicker :startDate="startDate" @onChange="onSelectDate($event)" />

        <v-subheader>
          Chọn số CPU
        </v-subheader>

        <v-card-text>
          <v-slider
            v-model="cpu"
            thumb-label="always"
            :thumb-size="24"
            min="1"
            max="16"
            ticks="always"
          ></v-slider>
        </v-card-text>

        <v-subheader>
          Chọn dung lượng RAM (GB)
        </v-subheader>

        <v-card-text>
          <v-slider
            v-model="ram"
            thumb-label="always"
            :thumb-size="24"
            min="1"
            max="32"
            ticks="always"
          ></v-slider>
        </v-card-text>

        <v-subheader>
          Chọn dung lượng HDD (GB)
        </v-subheader>

        <v-card-text>
          <v-slider
            v-model="hdd"
            thumb-label="always"
            :thumb-size="24"
            min="1"
            max="1000"
          ></v-slider>
        </v-card-text>

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
    cpu: 1,
    ram: 1,
    hdd: 1,
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
        cpu: this.cpu,
        ram: this.ram,
        hdd: this.hdd
      };
      console.log("[MESSAGE]: submitForm -> form", form);
    }
  }
};
</script>

<style lang="scss" scoped></style>
