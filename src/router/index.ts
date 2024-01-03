import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';

import examples from './modules/examples';

export const routes: RouteRecordRaw[] = [examples];

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/layouts/index.vue'),
      children: routes
    }
  ]
});
