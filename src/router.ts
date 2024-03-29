import { createRouter, createWebHistory } from 'vue-router'
import About from './components/About.vue'
import Contact from './components/Contact.vue'
import Privacy from './components/Privacy.vue'
import Whatsapp from './components/Whatsapp.vue'
import Whatsapp_out from './components/Whatsapp_out.vue'

// Additional routes can be added here
const routes = [
  { path: '/', component: About },
  { path: '/about', component: About, alias: '/' },
  { path: '/contact', component: Contact },
  { path: '/privacy', component: Privacy },
  { path: '/whatsapp', component: Whatsapp },
  { path: '/whatsapp_out', component: Whatsapp_out }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
