import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vant from 'vant';
import 'vant/lib/index.css';
import store from './store'
import utils from './utils';
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
import { Swipe, SwipeItem } from 'vant';
import { PullRefresh } from 'vant';
import { Grid, GridItem } from 'vant';
import { Tabbar, TabbarItem } from 'vant';
import { Cell, CellGroup } from 'vant';
import { Uploader } from 'vant';
import { AddressEdit } from 'vant';
import { Area } from 'vant';
import { AddressList } from 'vant';
import { Tab, Tabs } from 'vant';
import { TreeSelect } from 'vant';
import { GoodsAction, GoodsActionIcon, GoodsActionButton } from 'vant';
import { Checkbox, CheckboxGroup } from 'vant';
import { Sku } from 'vant';
import { ActionSheet } from 'vant';
import { Stepper } from 'vant';
import { Sidebar, SidebarItem } from 'vant';
import { SubmitBar } from 'vant';
import { ContactCard, ContactList, ContactEdit } from 'vant';
import { RadioGroup, Radio } from 'vant';

import { Rate } from 'vant';

Vue.use(Rate);
Vue.prototype.$utils = utils;
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(ContactCard);
Vue.use(ContactList);
Vue.use(ContactEdit);
Vue.use(SubmitBar);
Vue.use(Sidebar);
Vue.use(SidebarItem);
Vue.use(Stepper);
Vue.use(ActionSheet);
Vue.use(Sku);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(GoodsAction);
Vue.use(GoodsActionButton);
Vue.use(GoodsActionIcon);
Vue.use(TreeSelect);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(AddressList);
Vue.use(Area);
Vue.use(AddressEdit);
Vue.use(Uploader);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(PullRefresh);
Vue.use(Swipe);
Vue.use(SwipeItem);
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
