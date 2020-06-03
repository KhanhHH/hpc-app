import convertSize from "./filesize";

export default {
  install(Vue) {
    Vue.filter("convertSize", convertSize);
  }
};
