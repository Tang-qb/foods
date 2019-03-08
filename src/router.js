import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router =  new Router({
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
      path: '/about',
      name: 'about',
      component: () => import ('./views/About')
    },
    {
      path: '/me',
      name: 'me',
      component: () => import ('./views/Me'),
      redirect: '/me/myMessage',
      meta: {requireAuth: true},
      children: [
        {
          path: 'myMessage',
          name: 'myMessage',
          component: () => import ('./views/Mymessage'),
        },
        {
          path: 'order',
          name: 'order',
          component: () => import ('./views/module/Order'),
          // redirect: '/all',
          // children: [
          //   {
          //     path: 'all',
          //     name: 'all',
          //     component: () => import ('./views/Order/All')
          //   },
          //   {
          //     path: 'pay',
          //     name: 'pay',
          //     component: () => import ('./views/Order/Pay')
          //   },
          //   {
          //     path: 'evaluate',
          //     name: 'evaluate',
          //     component: () => import ('./views/Order/Evaluate')
          //   },
          //   {
          //     path: 'finish',
          //     name: 'finish',
          //     component: () => import ('./views/Order/Finish')
          //   },
          //   {
          //     path: 'receiving',
          //     name: 'receiving',
          //     component: () => import ('./views/Order/Receiving')
          //   },
          //   {
          //     path: 'ship',
          //     name: 'ship',
          //     component: () => import ('./views/Order/Ship')
          //   },
          // ]
        },
        {
          path: 'balance',
          name: 'balance',
          component: () => import ('./views/module/Balance')
        },
        {
          path: 'change',
          name: 'change',
          component: () => import ('./views/module/Change')
        },
        {
          path: 'account',
          name: 'account',
          component: () => import ('./views/module/Account')
        },
        {
          path: 'editor',
          name: 'editor',
          component: () => import ('./views/module/Editor')
        },
        {
          path: 'address',
          name: 'address',
          component: () => import ('./views/module/Address')
        },
        {
          path: 'collect',
          name: 'collect',
          component: () => import ('./views/module/Collect')
        }
      ]
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import ('./views/Cart'),
      meta: {requireAuth: true}
    },
    {
      path: '/detail',
      name: 'detail',
      component: () => import ('./views/Detail')
    },
    {
      path: '/concat',
      name: 'concat',
      component: () => import ('./views/Concat')
    },
  ]
})

export default router
