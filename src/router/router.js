import Vue from 'vue'
import Router from 'vue-router'

import store from '@/store/store'
import * as types from '@/store/mutation-types'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'index', // 该路由项不需要权限校验
    component: () => import('@/views/index/index')
  },
  {
    path: '/login',
    name: 'login', // 该路由项不需要权限校验
    component: () => import('@/views/login/login')
  },
  {
    path: '/userInfo',
    name: 'userInfo',
    meta: {
      requireAuth: true // 该路由项需要权限校验
    },
    component: () => import('@/views/user/userInfo')
  },
  {
    path: '/demo-count',
    name: 'Demo', // 该路由项不需要权限校验
    component: () => import('@/views/demo/demo-count')
  }
]

// 页面刷新时，重新赋值token
if (window.localStorage.getItem('token')) {
  store.commit(types.LOGIN, window.localStorage.getItem('token'))
}
if (window.localStorage.getItem('title')) {
  store.commit(types.TITLE, window.localStorage.getItem('title'))
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
