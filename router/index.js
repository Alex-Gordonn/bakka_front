import { createRouter, createWebHistory } from 'vue-router';
import home from '../src/views/home.vue'
import admin from '../src/views/admin.vue'
import login from '../src/views/login.vue'
import news from '../src/views/news.vue'
import read_news from '../src/views/read_news.vue';

const routes = [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
        path: '/login',
        name: 'login',
        component: login
      },
    {
      path: '/admin',
      name: 'admin',
      component: admin,
      meta: { requiresAuth: true }
    },
    {
      path: '/news',
      name: 'news',
      component: news,
    },
    {
      path: '/read_news',
      name: 'read_news',
      component: read_news,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
  });
  
  router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    const isAuthenticated = localStorage.getItem('authToken');
  
    if (requiresAuth && !isAuthenticated) {
      next('/');
    } else {
      next();
    }
  });
  
  export default router;