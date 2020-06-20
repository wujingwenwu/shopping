import Vue from 'vue'
import App from './App.vue'
import router from './router'

import Vant from 'vant';
import 'vant/lib/index.css';
import store from './store'

import { Button } from 'vant';
import { Field } from 'vant';
import { Form } from 'vant';




import api from '../components/http/api'

Vue.use(Button);
Vue.prototype.$api = api
Vue.use(Field);
Vue.use(Form);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
