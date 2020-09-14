import jQuery from 'jquery';
import Vue from "vue";
import App from "./App.vue";
Vue.config.productionTip = false;
new Vue({
render: h => h(App)
}).$mount("#app");
// import 'bootstrap';
// import './bootstrap/dist/css/bootstrap.min.css';
