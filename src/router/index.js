import Vue from 'vue'
import VueRouter from 'vue-router'
import AuthLoginView from '@/views/auth/AuthLoginView'
import AuthRegisterView from '@/views/auth/AuthRegisterView'
import DashboardView from '@/views/DashboardView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: AuthLoginView
  },
  {
    path: '/register',
    name: 'register',
    component: AuthRegisterView
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
