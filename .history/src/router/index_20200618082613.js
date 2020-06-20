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
})

export default router
