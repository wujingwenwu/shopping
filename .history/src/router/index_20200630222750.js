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
        {
          path: '/mines',
          name: 'Mines',
          component: () => import('../views/mine/Mines.vue'),
          meta: {
            title: '我的'
          }
        },
        {
          path: '/toshopping',
          name: 'Toshopping',
          component: () => import('../views/Shopping/Toshopping'),
          meta: {
            title: '购物车'
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
      path: '/whole',
      name: 'Whole',
      component: () => import('../views/whole/Whole'),
      meta: {
        title: '评价'
      }
    },
    {
      path: '/visit',
      name: 'Visit',
      component: () => import('../views/visit/Visit'),
      meta: {
        title: '最近游览'
      }
    },
    {
      path: '/collection',
      name: 'Collection',
      component: () => import('../views/collection/Collection'),
      meta: {
        title: '我的收藏'
      }
    },
    {
      path: '/settlements',
      name: 'Settlements',
      component: () => import('../views/settlement/Settlements'),
      meta: {
        title: '订单结算'
      }
    },
    {
      path: '/order',
      name: 'Order',
      component: () => import('../views/order/Order'),
      meta: {
        title: '查看全部订单'
      }
    },
    {
      path: '/list',
      name: 'List',
      component: () => import('../views/list/List'),
      meta: {
        title: '地址列表'
      }
    },
    {
      path: '/address',
      name: 'Address',
      component: () => import('../views/address/Address'),
      meta: {
        title: '添加地址'
      }
    },
    {
      path: '/addresstwo',
      name: 'Addresstwo',
      component: () => import('../views/address/Addresstwo'),
      meta: {
        title: '修改地址'
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
      path: '/vague',
      name: 'Vague',
      component: () => import('../views/vague/Vague'),
      meta: {
        title: '搜索商品'
      }
    },
    {
      path: '/details',
      name: 'Details',
      component: () => import('../views/Details/Details'),
      meta: {
        title: '详情页'
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
