import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueDragscroll from 'vue-dragscroll'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
Vue.use(VueAwesomeSwiper);

import './assets/reset.css'
import axios from 'axios'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(VueDragscroll)

// axios
//Vue.use(axios)
// 2.x 버전 이상 사용
Vue.prototype.$http = axios; 
Vue.prototype.$axios = axios



new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
