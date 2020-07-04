// import "@babel/polyfill";
// import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "./assets/css/main.css"
//import "@/assets/css/fonts.css"
import axios from "axios"
import VueAxios from 'vue-axios'

Vue.use(VueAxios,axios);
Vue.use(BootstrapVue);

axios.defaults.baseURL = 'http://localhost:3000/api';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
 
}).$mount("#app");

