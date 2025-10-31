import { routing } from './features/i18n/lib/routing';
import AboutMessages from './features/i18n/messages/en/about.json';
import HomeMessages from './features/i18n/messages/en/home.json';

declare module 'next-intl' {
  interface AppConfig {
    Messages: typeof HomeMessages & typeof AboutMessages;
    Locale: (typeof routing.locales)[number];
  }
}
