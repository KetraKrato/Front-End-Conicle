import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import SemanticUI from 'semantic-ui-vue';
import PortalVue from 'portal-vue';
import 'semantic-ui-css/semantic.min.css';
import Vue2Filters from "vue2-filters";
import VS2 from 'vue-script2';
import moment from 'moment';


//import videojssw from 'videojs-resolution-switcher';
//import VideoMin from "videojs-contrib-quality-levels";
//import VVideo from "video.js/dist/video.js";

//import VuePlyr from 'vue-plyr';
//import 'vue-plyr/dist/vue-plyr.css';


Vue.config.productionTip = false
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

//Vue.use(videojssw);





new Vue({

  router,
  store,
  render: h => h(App)
}).$mount('#app')
