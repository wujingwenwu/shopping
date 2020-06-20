import Vue from 'vue'
import App from './App.vue'
import router from './router'

import Vant from 'vant';
import 'vant/lib/index.css';
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { Button } from 'vant';
import { Field } from 'vant';





import api from '../components/http/api'

Vue.use(Button);
Vue.prototype.$api = api
Vue.use(Field);

Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
