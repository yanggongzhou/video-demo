// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/assets/main.css'
import MintUI from 'mint-ui'   //引入Mint-UI
import 'mint-ui/lib/style.css'   //引入Mint-UI的样式
Vue.use(MintUI)   //安装到Vue中去

Vue.config.productionTip = false



// import { Navbar, TabItem } from 'mint-ui';
// import { TabContainer, TabContainerItem } from 'mint-ui';
// import { Cell } from 'mint-ui';
// import { Search } from 'mint-ui';
//
// Vue.component(Search.name, Search);
// Vue.component(Cell.name, Cell);
// Vue.component(TabContainer.name, TabContainer);
// Vue.component(TabContainerItem.name, TabContainerItem);
// Vue.component(Navbar.name, Navbar);
// Vue.component(TabItem.name, TabItem);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
