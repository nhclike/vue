// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
//import {sum,minus} from './util'
import * as util from './util'
Vue.config.productionTip = false;
Vue.use(ElementUI);
/*console.log(`sum:${sum(2,4)}`);
console.log(`minus:${minus(2,4)}`);*/
console.log(`sum:${util.sum(2,4)}`);
 console.log(`minus:${util.minus(2,4)}`);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
