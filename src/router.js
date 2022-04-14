import { createRouter, createWebHistory } from 'vue-router'

import Home from './pages/Home.vue'
import Store from './pages/Store.vue'
import Contact from './pages/Contact.vue'
import Review from './pages/Review.vue'
import About from './pages/About.vue'
import Calculator from './pages/Calculator.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/Home.html' },
    { path: '/Home.html', name: 'Home', component: Home },
    { path: '/Store.html', name: 'Store', component: Store },
    { path: '/Contact.html', name: 'Contact', component: Contact },
    { path: '/About.html', name: 'About', component: About },
    { path: '/Calculator.html', name: 'Calculator', component: Calculator },
    { path: '/Review.html', name: 'Review', component: Review},
    { path: '/*', redirect: { name: 'route-name' } }
  ]
})


export default router