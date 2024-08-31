import { createRouter, createWebHistory } from 'vue-router';
import home from '../src/views/home.vue'
import tours from '../src/views/tours.vue'
import login from '../src/views/login.vue'
import news from '../src/views/news.vue'
import read_news from '../src/views/read_news.vue';
import reviews from '../src/views/reviews.vue'
import change_review from '../src/views/change_review.vue';
import add_review from '../src/views/add_review.vue'
import requests from '../src/views/requests.vue';
import news_admin from '../src/views/news_admin.vue';
import faq from '../src/views/faq.vue';
import guids from '../src/views/guids.vue';
import add_news from '../src/views/add_news.vue';
import change_news from '../src/views/change_news.vue';
import add_faq from '../src/views/add_faq.vue';
import change_faq from '../src/views/change_faq.vue';

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
      path: '/tours',
      name: 'tours',
      component: tours,
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
    {
      path: '/reviews',
      name: 'reviews',
      component: reviews,
      meta: { requiresAuth: true }
    },
    {
      path: '/change_review',
      name: 'change_review',
      component: change_review,
      meta: { requiresAuth: true }
    },
    {
      path: '/add_review',
      name: 'add_review',
      component: add_review,
      meta: { requiresAuth: true }
    },
    {
      path: '/requests',
      name: 'requests',
      component: requests,
      meta: { requiresAuth: true }
    },
    {
      path: '/news_admin',
      name: 'news_admin',
      component: news_admin,
      meta: { requiresAuth: true }
    },
    {
      path: '/faq',
      name: 'faq',
      component: faq,
      meta: { requiresAuth: true }
    },
    {
      path: '/guids',
      name: 'guids',
      component: guids,
      meta: { requiresAuth: true }
    },
    {
      path: '/tours',
      name: 'tours',
      component: tours,
      meta: { requiresAuth: true }
    },
    {
      path: '/change_news',
      name: 'change_news',
      component: change_news,
      meta: { requiresAuth: true }
    },
    {
      path: '/add_news',
      name: 'add_news',
      component: add_news,
      meta: { requiresAuth: true }
    },
    {
      path: '/change_faq',
      name: 'change_faq',
      component: change_faq,
      meta: { requiresAuth: true }
    },
    {
      path: '/add_faq',
      name: 'add_faq',
      component: add_faq,
      meta: { requiresAuth: true }
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