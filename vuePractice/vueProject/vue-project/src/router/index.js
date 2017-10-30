import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import GoodList from '@/views/GoodsList'
Vue.use(Router)

export default new Router({
  mode: 'history',//也可以为hash则端口号后面要加一个#
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/goods',
      name: 'GoodList',
      component: GoodList
    }

  ]
})
