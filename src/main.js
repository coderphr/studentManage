import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store/index';
import axios from 'axios';
import qs from 'qs';


Vue.prototype.baseUrl = 'http://localhost:3000';
Vue.prototype.qs = qs;
Vue.prototype.axios = axios;

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')


require('../public/css/style.css');
require('../node_modules/bootstrap/dist/css/bootstrap.min.css');