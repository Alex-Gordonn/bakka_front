import { createRouter, createWebHistory } from 'vue-router';
import home from '../src/views/home.vue'
import tours from '../src/views/tours.vue'
import login from '../src/views/login.vue'
import news from '../src/views/news.vue'
import read_news from '../src/views/read_news.vue';
import reviews from '../src/views/reviews.vue'
import change_review from '../src/views/change_review.vue';
import add_review from '../src/views/add_review.vue'

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