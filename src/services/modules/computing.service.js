import Api from "@/services";

export default {
  getMyComputing() {
    return Api().get("computings/me");
  },
  getMyComputingQueue() {
    return Api().get("computings/queue/me");
  },
  createComputingQueue(body) {
    return Api().post("computings/queue", body);
  }
};
