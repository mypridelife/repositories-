import Vue from 'vue'
import App from '@/App'
import router from '@/router/router'
import store from '@/store/store'
import axios from '@/utils/http'

import './assets/common/css/index.css' // 引入自定义样式

import {
  Group,
  Cell,
  XButton,
  Grid,
  GridItem,
  Datetime,
  XInput,
  Panel,
  XHeader,
  Card,
  Box,
  XDialog,
  XSwitch
} from 'vux'
Vue.component('group', Group)
Vue.component('cell', Cell)
Vue.component('x-button', XButton)
Vue.component('grid', Grid)
Vue.component('grid-item', GridItem)
Vue.component('datetime', Datetime)
Vue.component('x-input', XInput)
Vue.component('panel', Panel)
Vue.component('x-header', XHeader)
Vue.component('card', Card)
Vue.component('box', Box)
Vue.component('x-dialog', XDialog)
Vue.component('x-switch', XSwitch)

Vue.config.productionTip = false
Vue.prototype.axios = axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  axios,
  render: h => h(App)
})
