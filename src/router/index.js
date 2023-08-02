import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/Login',
      name: 'Login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/Registro',
      name: 'Registro',
      component: () => import('../views/Registro.vue')
    },
    {
      path: '/Contenido',
      name: 'Contenido',
      component: () => import('../views/Contenido.vue')
    },
    {
      path: '/Lista',
      name: 'Lista',
      component: () => import('../views/Lista.vue')
    }
  ]
})

export default router
