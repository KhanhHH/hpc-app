<template>
  <div class="px-4 py-4">
    <v-row justify="center">
      <div style="min-width:500px">
        <div class="title text-center px-4 py-4">
          {{ formText.title }}
        </div>
        <v-text-field
          v-model="name"
          label="Họ tên"
          outlined
          required
        ></v-text-field>
        <v-text-field
          v-model="workplace"
          label="Đơn vị công tác"
          outlined
          required
        ></v-text-field>
        <v-text-field
          v-model="phone"
          label="Điện thoại"
          outlined
          required
        ></v-text-field>

        <v-text-field
          v-model="email"
          label="Email"
          outlined
          required
        ></v-text-field>
        <v-text-field
          v-model="password"
          label="Mật khẩu"
          type="password"
          outlined
          required
        ></v-text-field>
        <v-select
          outlined
          v-model="selectedType"
          :items="typeList"
          item-text="text"
          item-value="value"
          label="Loại tài khoản"
          required
        />
        <v-select
          outlined
          v-model="selectedStatus"
          :items="status"
          item-text="text"
          item-value="value"
          label="Trạng thái tài khoản"
          required
        />

        <v-row justify="center" class="py-2">
          <v-btn
            large
            color="primary depressed"
            style="width:350px"
            @click="submitForm()"
          >
            <v-icon class="mr-2">mdi-send</v-icon>
            <span>{{ formText.submit }}</span>
          </v-btn>
        </v-row>
        <v-row justify="center">
          <v-btn
            large
            color="normal depressed"
            style="width:350px"
            to="/app/account-management/list"
          >
            <v-icon class="mr-2">mdi-arrow-left</v-icon>
            <span>Quay lại</span>
          </v-btn>
        </v-row>
      </div>
    </v-row>
  </div>
</template>
<script>
export default {
  components: {},
  data: () => ({
    formText: {
      title: "",
      submit: ""
    },
    selectedStatus: "active",
    selectedType: "member",
    typeList: [
      {
        text: "Member",
        value: "member"
      },
      {
        text: "Admin",
        value: "admin"
      }
    ],
    status: [
      {
        text: "Hoạt động",
        value: "active"
      },
      {
        text: "Ngừng hoạt động",
        value: "deactive"
      }
    ],
    name: "",
    workplace: "",
    phone: "",
    email: "",
    password: ""
  }),
  created() {
    if (this.$router.currentRoute.name === "Add Account") {
      this.formText.title = "Tạo tài khoản thành viên";
      this.formText.submit = "Gửi yêu cầu tạo tài khoản";
    }
    if (this.$router.currentRoute.name === "Edit Account") {
      this.formText.title = "Sửa thông tin tài khoản thành viên";
      this.formText.submit = "Gửi yêu cầu chỉnh sửa tài khoản";
    }
  },
  computed: {},
  watch: {},

  methods: {
    submitForm() {
      const form = {
        name: this.name,
        workplace: this.workplace,
        phone: this.phone,
        password: this.password,
        status: this.selectedStatus,
        type: this.selectedType
      };
      console.log("[MESSAGE]: submitForm -> form", form);
    }
  }
};
</script>

<style lang="scss" scoped></style>
