import VueJwtDecode from "vue-jwt-decode";

export default {
  getAccessToken() {
    return localStorage.getItem("accessToken");
  },
  getProperty(property) {
    const accessToken = localStorage.getItem("accessToken");
    const decoded = VueJwtDecode.decode(accessToken);
    return decoded[property];
  }
};
