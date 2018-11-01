import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import Mint from 'mint-ui'
import routes from './router'
import VueRouter from 'vue-router'
import 'mint-ui/lib/style.css'
import axios from 'axios'
import './assets/my-mint.scss';//全局修改mint-UI样式
Vue.prototype.axios = axios;
axios.defaults.baseURL='http://elm.cangdu.org/';
Vue.use(VueRouter)
Vue.use(Mint);
Vue.use(Vuex);

const router = new VueRouter({
	routes,
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
