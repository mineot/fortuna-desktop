import { createRouter, createWebHistory } from 'vue-router';

import File from '@component/views/File.vue';
import About from '@component/views/About.vue';

const routes = [
  { path: '/', component: File },
  { path: '/about', component: About },
  { path: '/:catchAll(.*)', redirect: '/' },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
