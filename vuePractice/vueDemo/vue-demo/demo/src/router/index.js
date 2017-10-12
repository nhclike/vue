import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'  //@配置的是src的路径
import GoodsList from './../views/GoodsList'      //./为当前目录../为上级目录
import Title from '@/views/Title'
import Image from '@/views/Image'
import Cart from '@/views/Cart'
Vue.use(Router);

export default new Router({
  mode: 'history',//也可以为hash则端口号后面要加一个#
  routes: [
    {
      path: '/',//默认跳转
      name: 'HelloWorld',
      components:{ //一个页面多个视图对应映射加载对应组件
        default:HelloWorld,
        title:Title,
        image:Image
      }
    },
    {
      path: '/goods',//动态路由传参
      name: 'GoodsList',
      component: GoodsList,
      /*children:[  //二级路由跳转
        {
          path:'title',
          name:'title',
          component:Title
        },
        {
          path:'image',
          name:'image',
          component:Image
        }
      ]*/
    },
    {
      path:'/cart/:cartId',  //动态路由传参
      name:'cart',
      component:Cart
    }
  ]
})
