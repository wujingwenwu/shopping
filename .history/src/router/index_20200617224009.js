import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
    {
      path: '/home',
      redirect: '/'
    },
    {
      path: '',
      name: 'top',
      component: () => import('../views/top/Top'),
      children:[
        {
          path: '/',
          name: 'Home',
          component: Home,
          meta: {
            title: '首页'
          }
        },
      ]
    },

  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  }
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
