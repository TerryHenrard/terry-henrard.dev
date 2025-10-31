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
    ],
  },
});

export default withNextIntl(nextConfig);
