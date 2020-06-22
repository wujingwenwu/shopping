import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Headpiece from '../views/headpiece/Headpiece.vue'

Vue.use(VueRouter)

  const routes = [
    {
      path: '/home',
      redirect: '/'
    },
    {
      path: '/',
      component: Headpiece,
      children:[
        {
          path: '',
          name: 'Home',
          component: Home,
          meta: {
            title: '首页'
          }
        },
        {
          path: '/mine',
          name: 'Mine',
          component: () => import('../views/mine/Mine'),
          meta: {
            title: '我的'
          }
        },
      ]
    },
    {
      path: '/sigon',
      name: 'Sigon',
      component: () => import('../views/sigon/Sigon'),
      meta: {
        title: '登录'
      }
    },
    {
      path: '/address',
      name: 'Address',
      component: () => import('../views/address/Address'),
      meta: {
        title: '登录'
      }
    },
    {
      path: '/city',
      name: 'City',
      component: () => import('../views/city/City'),
      meta: {
        title: '城市定位'
      }
    },
    {
      path: '/setup',
      name: 'Setup',
      component: () => import('../views/setup/Setup'),
      meta: {
        title: '编辑个人资料'
      }
    },
    {
      path: '/Shopping',
      name: 'Shoppings',
      component: () => import('../views/Shopping/Shoppings'),
      meta: {
        title: '购物车'
      }
    },
    {
      path: '/mine',
      name: 'Mine',
      component: () => import('../views/mine/Mine'),
      meta: {
        title: '我的'
      }
    },
    {
      path: '/classify',
      name: 'Classify',
      component: () => import('../views/classify/Classify'),
      meta: {
        title: '分类'
      }
    },
   
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, form, next) => {
  document.title = to.meta.title
  next()
})

export default router
