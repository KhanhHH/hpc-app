import Api from "@/services";

export default {
  getMyStorage() {
    return Api().get("storages/me");
  },
  getFolder(id) {
    return Api().get(`storages/folder/${id}`);
  }
};
