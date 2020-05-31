<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card
              class="elevation-12 d-flex flex-column align-center py-4 px-4"
            >
              <div class="headline py-4">
                ĐĂNG NHẬP HỆ THỐNG
              </div>
              <div class="pt-2" style="width: 100%;">
                <v-text-field
                  v-model="loginForm.email"
                  label="Email"
                  placeholder="Nhập email của bạn"
                  outlined
                />
                <v-text-field
                  v-model="loginForm.password"
                  label="Mật khẩu"
                  placeholder="Nhập mật khẩu của bạn"
                  type="password"
                  outlined
                />
              </div>

              <v-btn
                style="width: 100%;"
                large
                color="primary"
                @click="login()"
              >
                Đăng nhập
              </v-btn>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>

    <v-snackbar
      v-model="snackbar.status"
      :timeout="snackbar.timeout"
      top
      vertical
    >
      <span v-if="requestStatus === 'error' && requestError.statusCode === 401">
        Đăng nhập không hợp lệ
      </span>
      <v-btn text @click="snackbar.status = false">
        Đóng
      </v-btn>
    </v-snackbar>
  </v-app>
</template>

<script>
import { mapState } from "vuex";
export default {
  data: () => ({
    loginForm: {
      email: "",
      password: ""
    },
    snackbar: {
      status: false,
      timeout: 3000
    }
  }),
  computed: { ...mapState("account", ["requestError", "requestStatus"]) },
  methods: {
    async login() {
      await this.$store.dispatch("account/submitLogin", this.loginForm);
      if (this.requestStatus === "error") {
        this.snackbar.status = true;
        return;
      }
      if (this.requestStatus === "success") {
        this.$router.push({ path: "/app" });
      }
    }
  }
};
</script>

<style lang="sass" scoped></style>
