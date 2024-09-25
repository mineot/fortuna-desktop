import { createRouter, createWebHistory } from 'vue-router';

import Home from '@component/views/Home.vue';
import About from '@component/views/About.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/:catchAll(.*)', redirect: '/' },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
