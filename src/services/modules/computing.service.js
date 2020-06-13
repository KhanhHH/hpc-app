import Api from "@/services";

export default {
  getMyComputing() {
    return Api().get("computings/me");
  },
  getMyComputingQueue() {
    return Api().get("computings/queue/me");
  },
  getAllComputingQueue() {
    return Api().get("computings/queue");
  },
  createComputingQueue(body) {
    return Api().post("computings/queue", body);
  },
  updateComputingQueueStatus(id, body) {
    return Api().patch(`computings/queue/${id}/status`, body);
  }
};
