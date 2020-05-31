import Api from "@/services";

export default {
  login(body) {
    return Api().post("accounts/login", body);
  },
  getMyAccount() {
    return Api().get("accounts/me");
  },
  getAccountById(id) {
    return Api().get(`accounts/${id}`);
  },
  getAllAccount() {
    return Api().get("accounts");
  },
  createAccount(body) {
    return Api().post("accounts", body);
  },
  updateAccount(id, body) {
    return Api().patch(`accounts/${id}`, body);
  }
};
