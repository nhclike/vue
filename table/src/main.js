import Vue from 'vue'
import App from './App'
import Home from './components/Home.vue'
import VueRouter from 'vue-router'
import 'bootstrap/dist/css/bootstrap.css'
Vue.use(VueRouter)
const routes = [{
  path: '/',
  component: Home
}]

const router = new VueRouter({
  routes
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
