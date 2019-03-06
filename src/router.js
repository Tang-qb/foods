import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'index',
      component: () => import ('./views/Index')
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import ('./views/Register')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import ('./views/Login')
    },
    {
      path: '/me',
      name: 'me',
      component: () => import ('./views/Me')
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import ('./views/Cart')
    },
    {
      path: '/detail',
      name: 'detail',
      component: () => import ('./views/Detail')
    }
  ]
})
