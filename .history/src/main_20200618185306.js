import Vue from 'vue'
import App from './App.vue'
import router from './router'

import Vant from 'vant';
import 'vant/lib/index.css';
import store from './store'
import 'vant/lib/index.css'; 
import { Button } from 'vant';
import { Field } from 'vant';
import { Form } from 'vant';
import { Dialog } from 'vant';
import { CountDown } from 'vant';
import { Icon } from 'vant';
import { IndexBar, IndexAnchor } from 'vant';
import api from '../components/http/api'
import { Search } from 'vant';

Vue.use(IndexBar);
Vue.use(IndexAnchor);
Vue.use(Search);
Vue.use(Dialog);
Vue.use(Button);
Vue.use(Icon);
Vue.prototype.$api = api
Vue.use(Field);
Vue.use(Form);
Vue.use(CountDown);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
