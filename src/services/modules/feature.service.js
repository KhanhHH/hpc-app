import Api from "@/services";

export default {
  requestStorage(body) {
    return Api().post("features/request-storage", body);
  },
  getMyFeatureRequestStatus() {
    return Api().get("features/requests/my-status");
  },
  getAllFeatureRequest() {
    return Api().get("features/requests");
  },
  updateFeatureRequestStatus(id, body) {
    return Api().patch(`/features/requests/${id}/status`, body);
  },
  getAllApprovedStorage() {
    return Api().get("features/approved/storage");
  },
  updateApprovedStorage(id, body) {
    return Api().patch(`features/approved/storage/${id}`, body);
  }
};
