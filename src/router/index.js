import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomeView.vue';
import Login from '../views/LoginView.vue';
import { auth } from '@/stores.js';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
  },
  {
    path: '/order',
    name: 'order',
    component: () => import('/src/views/OrderView.vue'),
  },
  {
    path: '/reservation',
    name: 'reservation',
    component: () => import('../views/ReservationView.vue'),
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('/src/views/ContactView.vue'),
  },
  {
    path: '/korzina',
    name: 'korzina',
    component: () => import('../views/KorzinaView.vue'),
  },
  {
    path: '/userpage',
    name: 'user',
    component: () => import('../views/UserView.vue'),
  },
  {
    path: '/menuorder',
    name: 'ordermenu',
    component: () => import('../components/Order/OrderMenyu.vue'),
  },
  {
    path: '/signup',
    name: 'sign-up',
    component: () => import('../components/SignUp/SignUp.vue'),
  },
  {
    path: '/user',
    name: 'User',
    component: () => import('../components/User/User.vue')
  }
];

const router = createRouter({
  history: createWebHistory('/'), // Setting the base URL to the root
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!auth.isAuthenticated) {
      next({ name: 'sign-up' });
    } else {
      next(
        { name: 'home' }
      );
    }
  } else {
    next();
  }
});

export default router;
