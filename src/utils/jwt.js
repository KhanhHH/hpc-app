import VueJwtDecode from "vue-jwt-decode";

export default {
  getAccessToken() {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      try {
        const decoded = VueJwtDecode.decode(accessToken);
        if (decoded) {
          return accessToken;
        }
      } catch (error) {
        return null;
      }
    }
    return null;
  },
  getProperty(property) {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      try {
        const decoded = VueJwtDecode.decode(accessToken);
        return decoded[property];
      } catch (error) {
        return null;
      }
    }
    return null;
  }
};
