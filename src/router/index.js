import { createRouter, createWebHashHistory } from "vue-router";

// WE used Lazy loading when importing pages

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import('@/views/HomeView'),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("@/views/AboutView.vue")
  },

  {
    path: '/contact',
    name: 'contact',
    component: () => import('@/views/ContactView.vue')
  },

  {
    path: '/service',
    name: 'service',
    component: () => import('@/views/ServiceView.vue')
  },

  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/LoginView.vue')
  },

  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/RegisterView.vue')
  }
  
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
