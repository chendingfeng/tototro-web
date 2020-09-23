import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router/router.js'
import store from './store/index'

import '@/icons' // icon


Vue.config.productionTip = false

Vue.use(ElementUI);

new Vue({
  router,
  store,
  template: '<App/>',
  render: h => h(App)
}).$mount('#app')
