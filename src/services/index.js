import axios from "axios";

export default () => {
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken) {
    return axios.create({
      baseURL: process.env.VUE_APP_API_URL,
      headers: { Authorization: "Bearer " + accessToken }
    });
  } else {
    return axios.create({
      baseURL: process.env.VUE_APP_API_URL
    });
  }
};
