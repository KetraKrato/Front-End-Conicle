import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import SuiVue from 'semantic-ui-vue'
import { BootstrapVue, BootstrapVueIcons  } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'semantic-ui-css/semantic.min.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuex from 'vuex'
import VueVideoPlayer from 'vue-video-player'
import VueCtkDateTimePicker from 'vue-ctk-date-time-picker';
import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css';
import { Datetime } from 'vue-datetime'
import 'vue-datetime/dist/vue-datetime.css'
import VueSweetalert2 from 'vue-sweetalert2';

//Ketra Code
import SemanticUI from 'semantic-ui-vue';
import PortalVue from 'portal-vue';
import 'semantic-ui-css/semantic.min.css';
import Vue2Filters from "vue2-filters";
import VS2 from 'vue-script2';
import moment from 'moment';
import 'v-slim-dialog/dist/v-slim-dialog.css'
import SlimDialog from 'v-slim-dialog'

Vue.use(SlimDialog)

Vue.filter('formatDateNoTime', function(value) {
  if (value) {
    return moment(String(value)).format('DD MMMM YYYY')
  }
});

Vue.filter('formatDate', function(value) {
  if (value) {
    return moment(String(value)).format('DD MMMM YYYY, hh:mm A')
  }
});


Vue.use(PortalVue);
Vue.use(SemanticUI);
Vue.use(Vue2Filters);
Vue.use(VS2);

//-----------------------------------------------------//

Vue.component('VueCtkDateTimePicker', VueCtkDateTimePicker);
Vue.config.productionTip = false;
Vue.use(SuiVue)
Vue.use(VueAxios, axios)
Vue.use(Vuex)
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(VueSweetalert2);
Vue.use(VueVideoPlayer)
Vue.use(Datetime)
Vue.prototype.$axios = axios;
window.axios=axios


new Vue({
  router,
  SuiVue,
  store,
  render: h => h(App)
}).$mount('#app')
