import { createRouter, createWebHashHistory } from 'vue-router'
import MenuPage from '../views/MenuPage.vue'

const routes = [
  {
    path: '/',
    name: 'menu',
    component: MenuPage
  },
  {
    path: '/pedido',
    name: 'pedido',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/PedidoPage.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AdminPage.vue')
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
