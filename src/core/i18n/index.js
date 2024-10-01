import { createI18n } from 'vue-i18n';
import messages from './messages.json';

export const i18n = createI18n({
  warnHtmlMessage: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages,
});
