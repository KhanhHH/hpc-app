import Api from "@/services";

export default {
  getMyVirtualMachine() {
    return Api().get("virtual-machines/me");
  },
  getMyVps() {
    return Api().get("virtual-machines/vps/me");
  },
  getAllVps() {
    return Api().get("virtual-machines/vps");
  },
  createVps(body) {
    return Api().post("virtual-machines/vps", body);
  },
  updateVps(id, body) {
    return Api().patch(`virtual-machines/vps/${id}`, body);
  }
};
