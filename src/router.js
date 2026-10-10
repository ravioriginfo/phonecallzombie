import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './pages/Home.vue'
import Features from './pages/Features.vue'
import InteractiveDemo from './pages/InteractiveDemo.vue'
import HowTo from './pages/HowTo.vue'
import NotFound from './pages/404.vue'

const routes = [
  {
    path: '/',
    component: Home,
    meta: { title: 'PhoneCallZombie - Home' }
  },
  {
    path: '/features',
    component: Features,
    meta: { title: 'Features - PhoneCallZombie' }
  },
  {
    path: '/demo',
    component: InteractiveDemo,
    meta: { title: 'Interactive Demo - PhoneCallZombie' }
  },
  {
    path: '/how-to',
    component: HowTo,
    meta: { title: 'How-To Guides - PhoneCallZombie' }
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFound,
    meta: { title: 'Page Not Found' }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'PhoneCallZombie'
  next()
})

export default router
