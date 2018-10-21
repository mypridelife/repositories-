import Vue from 'vue'
import Router from 'vue-router'

import store from '@/store/store'

import login from '@/views/login/login'
import userInfo from '@/views/user/userInfo'
import index from '@/views/index/index'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: '/',
    component: index
  },
  {
    path: '/login',
    name: 'login', // 该路由项不需要权限校验
    component: login
  },
  {
    path: '/userInfo',
    name: 'userInfo',
    meta: {
      requireAuth: true // 该路由项需要权限校验
    },
    component: userInfo
  }
]

// 页面刷新时，重新赋值token
if (window.localStorage.getItem('token')) {
  store.commit('handleLogin', window.localStorage.getItem('token'))
}
if (window.localStorage.getItem('title')) {
  store.commit('handleTitle', window.localStorage.getItem('title'))
}

const router = new Router({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    if (store.state.token) {
      next()
    } else {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    }
  } else {
    next()
  }
})

export default router
