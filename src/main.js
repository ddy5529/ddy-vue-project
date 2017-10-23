// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import '../node_modules/element-ui/lib/theme-chalk/index.css'
import VueJS from '../node_modules/vue/dist/vue.js'
import IndexJS from '../node_modules/element-ui/lib/index.js'

Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.use(ElementUI, VueJS, IndexJS)

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
