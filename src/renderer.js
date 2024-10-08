/**
 * This file will automatically be loaded by vite and run in the "renderer" context.
 * To learn more about the differences between the "main" and the "renderer" context in
 * Electron, visit:
 *
 * https://electronjs.org/docs/tutorial/application-architecture#main-and-renderer-processes
 *
 * By default, Node.js integration in this file is disabled. When enabling Node.js integration
 * in a renderer process, please be aware of potential security implications. You can read
 * more about security risks here:
 *
 * https://electronjs.org/docs/tutorial/security
 *
 * To enable Node.js integration in this file, open up `main.js` and enable the `nodeIntegration`
 * flag:
 *
 * ```
 *  // Create the browser window.
 *  mainWindow = new BrowserWindow({
 *    width: 800,
 *    height: 600,
 *    webPreferences: {
 *      nodeIntegration: true
 *    }
 *  });
 * ```
 */

import './styles/app.scss';
import { createApp } from 'vue';
import { router } from './core/router';
import { i18n } from './core/i18n';
import App from './components/App.vue';
import languageKeys from './core/i18n/language-keys.json';

const vueApp = createApp(App);
vueApp.use(i18n);
vueApp.use(router);
vueApp.mount('#app');

window.api.getLanguage().then((locale) => {
  i18n.global.locale = languageKeys[locale.toLowerCase()];
});
