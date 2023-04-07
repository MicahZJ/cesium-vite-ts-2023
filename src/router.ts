import { createRouter, createWebHistory } from 'vue-router'

import IndexPage from '@/pages/IndexPage.vue'
import cesiumPage from '@/pages/cesium.vue'

const routes = [
  {
    path: '/',
    component: IndexPage,
    meta: {
      title: 'Vite + Vue + TypeScript + Tailwind Starter Template',
    },
  },
  {
    path: '/cesium',
    component: cesiumPage,
    meta: {
      title: 'Cesium',
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
