<template>
  <div class="px-4 py-4">
    <v-row justify="center">
      <div style="min-width:500px">
        <div class="title text-center px-4 py-4">
          {{ formText.title }}
        </div>
        <v-text-field
          :disabled="isLoading"
          v-model="form.name"
          label="Họ tên"
          outlined
          required
        />
        <v-text-field
          :disabled="isLoading"
          v-model="form.workplace"
          label="Đơn vị công tác"
          outlined
          required
        />
        <v-text-field
          :disabled="isLoading"
          v-model="form.phone"
          label="Điện thoại"
          outlined
          required
        />

        <v-text-field
          :disabled="isLoading"
          autocomplete="new-password"
          v-model="form.email"
          label="Email"
          outlined
          required
        />
        <v-text-field
          :disabled="isLoading"
          autocomplete="new-password"
          v-model="form.password"
          label="Mật khẩu"
          type="password"
          outlined
          required
        />
        <v-select
          :disabled="isLoading"
          outlined
          v-model="form.selectedType"
          :items="typeList"
          item-text="text"
          item-value="value"
          label="Loại tài khoản"
          required
        />
        <v-select
          :disabled="isLoading"
          outlined
          v-model="form.selectedStatus"
          :items="status"
          item-text="text"
          item-value="value"
          label="Trạng thái tài khoản"
          required
        />

        <v-row justify="center" class="py-2">
          <v-btn
            :disabled="isLoading"
            large
            color="primary depressed"
            style="width:350px"
            @click="submitForm()"
          >
            <v-progress-circular
              v-if="isLoading"
              :size="25"
              :width="2"
              color="white"
              indeterminate
            />
            <template v-else>
              <v-icon class="mr-2">mdi-send</v-icon>
              <span>{{ formText.submit }}</span>
            </template>
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
import { mapState } from "vuex";
export default {
  components: {},
  data: () => ({
    formText: {
      title: "",
      submit: ""
    },
    form: {
      name: "",
      workplace: "",
      phone: "",
      email: "",
      password: "",
      selectedStatus: "active",
      selectedType: "member"
    },
    formType: null,
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
    ]
  }),
  computed: {
    ...mapState("account", [
      "isLoading",
      "requestError",
      "requestStatus",
      "accountById"
    ])
  },

  async created() {
    if (this.$router.currentRoute.name === "Add Account") {
      this.formType = "add";
      this.formText.title = "Tạo tài khoản thành viên";
      this.formText.submit = "Gửi yêu cầu tạo tài khoản";
    }
    if (this.$router.currentRoute.name === "Edit Account") {
      this.formType = "edit";
      const { id } = this.$router.currentRoute.params;
      await this.$store.dispatch("account/getAccountById", { id });
      this.form = this.accountById;

      this.formText.title = "Sửa thông tin tài khoản thành viên";
      this.formText.submit = "Gửi yêu cầu chỉnh sửa tài khoản";
    }
  },
  watch: {},

  methods: {
    async submitForm() {
      const formSubmit = {
        name: this.form.name,
        workplace: this.form.workplace,
        phone: this.form.phone,
        email: this.form.email,
        status: this.form.selectedStatus,
        type: this.form.selectedType
      };
      if (this.formType === "add") {
        formSubmit.password = this.form.password;
        await this.$store.dispatch("account/createAccount", formSubmit);
      }
      if (this.formType === "edit") {
        const { id } = this.$router.currentRoute.params;
        if (this.form.password && this.form.password.length > 0) {
          formSubmit.password = this.form.password;
        }
        await this.$store.dispatch("account/updateAccount", {
          id,
          formSubmit
        });
      }

      if (this.requestStatus === "error") {
        this.$store.dispatch("ui/showSnackbar", {
          timeout: 5000,
          message: this.requestError.message
        });
      }
      if (this.requestStatus === "success") {
        this.$router.push({ path: "/app/account-management/list" });
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
