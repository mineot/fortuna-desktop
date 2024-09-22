import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '../components/views/Home.vue';
import AboutView from '../components/views/About.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
