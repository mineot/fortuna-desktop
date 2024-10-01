import { createMemoryHistory, createRouter } from 'vue-router';

import FilePage from '../../components/pages/FilePage.vue';
import AboutPage from '../../components/pages/AboutPage.vue';

const routes = [
  { path: '/', component: FilePage },
  { path: '/about', component: AboutPage },
  { path: '/:pathMatch(.*)*', redirect: '/' },
];

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
});
