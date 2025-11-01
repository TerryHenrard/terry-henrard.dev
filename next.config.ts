import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  reactCompiler: true,
  typedRoutes: true,
  experimental: {
    turbopackFileSystemCacheForDev: true,
    // turbopackFileSystemCacheForBuild: true,
    typedEnv: true,
  },
};

const withNextIntl = createNextIntlPlugin({
  requestConfig: './features/i18n/lib/request.ts',
  experimental: {
    createMessagesDeclaration: [
      './features/i18n/messages/en/home.json',
      './features/i18n/messages/en/about.json',
      './features/i18n/messages/en/contact.json',
      './features/i18n/messages/en/experience.json',
      './features/i18n/messages/en/services.json',
      './features/i18n/messages/en/ai-sprint.json',
      './features/i18n/messages/en/audit.json',
      './features/i18n/messages/en/mvp-foundry.json',
      './features/i18n/messages/en/care-and-hosting.json',
      './features/i18n/messages/en/phone-call-request-form.json',
      './features/i18n/messages/en/header.json',
      './features/i18n/messages/en/marketing.json',
    ],
  },
});

export default withNextIntl(nextConfig);
