import { createRouter, createWebHistory } from 'vue-router'

import Home from './pages/Home.vue'
import Store from './pages/Store.vue'
import Contact from './pages/Contact.vue'
import Review from './pages/Review.vue'
import About from './pages/About.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/Home' },
    { path: '/Home', name: 'Home', component: Home },
    { path: '/Store', name: 'Store', component: Store },
    { path: '/Contact', name: 'Contact', component: Contact },
    { path: '/About', name: 'About', component: About },
    { path: '/Review/:item', name: 'Review', component: Review, props: true },
    { path: '/*', redirect: { name: 'route-name' } }
  ]
})


export default router