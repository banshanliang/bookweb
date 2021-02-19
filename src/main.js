import Vue from 'vue'
import App from './App'
import router from './router'
//配置vuex
import Vuex from 'vuex'
import store from './store'
//配置element
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './icons'
  //导入图标
import '@/assets/icon/iconfont.css'

//配置jquery
import $ from 'jquery'
//配置excel文件导入
import XLSX from 'xlsx';
import FileSaver from 'file-saver';
//配置echart
import echarts from 'echarts'
//配置vue-axious
import axios from 'axios'
import VueAxios from 'vue-axios'

import vueWaterfallEasy from 'vue-waterfall-easy'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Vuex)
Vue.prototype.$echarts = echarts

/* eslint-disable no-new */
//对id="app"标签进行
new Vue({
  el: '#app',
  router,
  store,
  components: { 
    App },
  template: '<App/>',
  render: h => h(App)
  
})
