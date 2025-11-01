import { hasLocale } from 'next-intl';
import { getRequestConfig } from 'next-intl/server';

import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  // Typically corresponds to the `[locale]` segment
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested) ? requested : routing.defaultLocale;

  return {
    locale,
    messages: {
      ...(await import(`../messages/${locale}/home.json`)).default,
      ...(await import(`../messages/${locale}/about.json`)).default,
      ...(await import(`../messages/${locale}/contact.json`)).default,
      ...(await import(`../messages/${locale}/experience.json`)).default,
      ...(await import(`../messages/${locale}/services.json`)).default,
      ...(await import(`../messages/${locale}/ai-sprint.json`)).default,
      ...(await import(`../messages/${locale}/audit.json`)).default,
      ...(await import(`../messages/${locale}/mvp-foundry.json`)).default,
      ...(await import(`../messages/${locale}/care-and-hosting.json`)).default,
      ...(await import(`../messages/${locale}/phone-call-request-form.json`)).default,
      ...(await import(`../messages/${locale}/header.json`)).default,
      ...(await import(`../messages/${locale}/locale-switcher.json`)).default,
      ...(await import(`../messages/${locale}/marketing.json`)).default,
    },
  };
});
