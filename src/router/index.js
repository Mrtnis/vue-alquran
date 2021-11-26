import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/surah',
    name: 'surah',
    component: () => import('../views/Surah.vue'),
  },
  {
    path: '/ayat/:numberSurah',
    name: 'ayat',
    component: () => import('../views/Ayat.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
