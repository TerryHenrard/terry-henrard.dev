import { routing } from './features/i18n/lib/routing';
import messages from './features/i18n/messages/en.json';

declare module 'next-intl' {
  interface AppConfig {
    Messages: typeof messages;
    Locale: (typeof routing.locales)[number];
  }
}
