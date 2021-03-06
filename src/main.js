import Vue from 'vue'
import router from './router'
import App from './App.vue'
import Axios from "axios"
import 'font-awesome/css/font-awesome.min.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import echarts from 'echarts'
import store from '@/store/store'
import VCharts from 'v-charts'

Vue.use(VCharts)
Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.$axios = Axios
Vue.prototype.$echarts=echarts

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
