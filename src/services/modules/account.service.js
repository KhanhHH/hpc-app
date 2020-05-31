import Api from "@/services";

export default {
  login(form) {
    return Api().post("accounts/login", form);
  },
  getMyAccount() {
    return Api().get("accounts/me");
  }
};
