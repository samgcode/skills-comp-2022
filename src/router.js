import {createRouter, createWebHistory} from 'vue-router'

import Home from './pages/Home.vue'
import Store from './pages/Store.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/', name: 'Home', component: Home},
    {path: '/Home', name: 'Home', component: Home},
    {path: '/Store', name: 'Store', component: Store},
  ]
})

export default router