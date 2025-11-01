import { routing } from './features/i18n/lib/routing';
import AboutMessages from './features/i18n/messages/en/about.json';
import AiSprintMessages from './features/i18n/messages/en/ai-sprint.json';
import AuditMessages from './features/i18n/messages/en/audit.json';
import CareAndHostingMessages from './features/i18n/messages/en/care-and-hosting.json';
import ContactMessages from './features/i18n/messages/en/contact.json';
import ExperienceMessages from './features/i18n/messages/en/experience.json';
import HeaderMessages from './features/i18n/messages/en/header.json';
import HomeMessages from './features/i18n/messages/en/home.json';
import LocaleSwitcherMessages from './features/i18n/messages/en/locale-switcher.json';
import MarketingMessages from './features/i18n/messages/en/marketing.json';
import MvpFoundryMessages from './features/i18n/messages/en/mvp-foundry.json';
import PhoneCallRequestFormMessages from './features/i18n/messages/en/phone-call-request-form.json';
import ServicesMessages from './features/i18n/messages/en/services.json';

declare module 'next-intl' {
  interface AppConfig {
    Messages: typeof HomeMessages &
      typeof AboutMessages &
      typeof ContactMessages &
      typeof ExperienceMessages &
      typeof ServicesMessages &
      typeof AiSprintMessages &
      typeof AuditMessages &
      typeof MvpFoundryMessages &
      typeof CareAndHostingMessages &
      typeof PhoneCallRequestFormMessages &
      typeof HeaderMessages &
      typeof LocaleSwitcherMessages &
      typeof MarketingMessages;
    Locale: (typeof routing.locales)[number];
  }
}
