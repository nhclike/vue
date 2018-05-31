import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/view/Hello'
import ToDo from  '@/view/ToDo'
import father from '@/view/father'
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/todo',
      name: 'ToDo',
      component: ToDo
    },
    {
      path: '/father',
      name: 'father',
      component: father
    }
  ]
})
