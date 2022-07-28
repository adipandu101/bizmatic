import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/pages/Home.vue'),
    meta: {
      layout: 'blank',
    },
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('@/views/dashboard/Dashboard.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/apps',
    name: 'apps',
    component: () => import('@/views/apps/Apps.vue'),
  },
  {
    path: '/pricing',
    name: 'pricing',
    component: () => import('@/views/pricing/Pricing.vue'),
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('@/views/profile/Profile.vue'),
  },
  {
    path: '/faq',
    name: 'faq',
    component: () => import('@/views/faq/Faq.vue'),
  },
  {
    path: '/market',
    name: 'market',
    component: () => import('@/views/market/Market.vue'),
  },
  {
    path: '/pages/account-settings',
    name: 'pages-account-settings',
    component: () => import('@/views/pages/account-settings/AccountSettings.vue'),
  },
  {
    path: '/pages/login',
    name: 'pages-login',
    component: () => import('@/views/pages/Login.vue'),
    meta: {
      layout: 'blank',
    },
  },
  {
    path: '/pages/register',
    name: 'pages-register',
    component: () => import('@/views/pages/Register.vue'),
    meta: {
      layout: 'blank',
    },
  },
  {
    path: '/error-404',
    name: 'error-404',
    component: () => import('@/views/Error.vue'),
    meta: {
      layout: 'blank',
    },
  },
  {
    path: '*',
    redirect: 'error-404',
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      const token = localStorage.getItem('token');
      if (!token) {
        store.dispatch('logout').then(() => {
          window.location.href = "/pages/login";
        })
      }
      next()
      return
    }
    next('/pages/login')
  } else {
    next()
  }
})

router.beforeResolve((to, from, next) => {
  if (to.path) {
    // pace.start()
  }
  next()
});

router.afterEach((to, from, next) => {
  // pace.done()
});

export default router
