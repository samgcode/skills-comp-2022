import {createRouter, createWebHistory} from 'vue-router'

import Home from './pages/Home.vue'
import Store from './pages/Store.vue'
import Contact from './pages/Contact.vue'
import Review from './pages/Review.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/', name: 'Home', component: Home},
    {path: '/Home', name: 'Home', component: Home},
    {path: '/Store', name: 'Store', component: Store},
    {path: '/Contact', name: 'Contact', component: Contact},
    {path: '/Review', name: 'Review', component: Review}
  ]
})

export default router