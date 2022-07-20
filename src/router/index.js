import {
  createRouter,
  createWebHistory
} from 'vue-router'
import Login from '../views/login.vue'
import Dashboard from '../views/Dashboard.vue'

const routes = [{
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router